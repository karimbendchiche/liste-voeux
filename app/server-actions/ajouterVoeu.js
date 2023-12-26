'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function ajouterVoeu(formData) {
    const model = formData.get('model')
    const marque = formData.get('marque')
    const numeroReference = formData.get('numeroReference')

    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user

    if (!user) {
        console.error('L utilisateur n est pas authentifié.')
        return;
    }

    const {data, error} = await supabase
        .from('voeux')
        .insert([
            {
                model,
                marque,
                numero_reference: numeroReference,
                user_id: user.id
            }
        ])

    if (error) {
        console.error('Erreur lors de l ajout des données.', error)
        return;
    }

    revalidatePath('/liste-voeux')

    return {message: 'Succès'}
}