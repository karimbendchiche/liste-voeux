import { createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import FormeVoeu from "../components/FormeVoeu";
import { cookies } from "next/headers";
import ModifierVoeu from "../components/ModifierVoeu";
import { supprimerVoeu  } from "../server-actions/supprimerVoeu";

export default async function ListeVoeux() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore});
    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user;

    const{data: voeux, error} = await supabase
        .from('voeux')
        .select('*')
        .eq('user_id', user.id)
        .order('marque', {ascending: true})

    if (error) {
        console.error('Erreur lors de l organisation des voeux.')
    }
      
    return (
        <div className="min-h-screen bg-purple-800 text-gray-800 font-sans">
    <div className="container mx-auto p-8 sm:p-12">
        <div className="flex justify-between items-start">
            <h1 className="text-4xl md:text-5xl font-extrabold text-teal-300 mb-6">Mes voeux</h1>
            <form action="/auth/signout" method="post">
                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    Déconnexion
                </button>
            </form>
        </div>
        <FormeVoeu />
        <div className="mt-8">
            {voeux.map((voeu) => (
                <div key={voeu.id} className="mb-4 p-4 bg-gray-700 rounded-lg shadow-md">
                    <h2 className="text-lg md:text-xl text-orange-400 mb-2">{voeu.marque} - {voeu.model}</h2>
                    <div className="flex space-x-4">
                        <form action={supprimerVoeu}>
                            <input
                                type="hidden"
                                name="id"
                                value={voeu.id}
                            />
                            <button
                                type="submit"
                                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md"
                            >
                                Supprimer
                            </button>
                        </form>
                        <ModifierVoeu voeu={voeu} />
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>



    )
}