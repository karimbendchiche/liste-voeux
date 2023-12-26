'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function supprimerVoeu(formData) {
    const voeuId = formData.get('id')

    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user

    if (!user) {
        console.error('L utilisateur n est pas authentifié.')
        return;
    }

    const {error} = await supabase
        .from('voeux')
        .delete()
        .match({id: voeuId, user_id: user.id})

    if (error) {
        console.error('Erreur lors de la suppression des données.', error)
        return;
    }

    revalidatePath('/liste-voeux')

    return {message: 'Succès'}
}