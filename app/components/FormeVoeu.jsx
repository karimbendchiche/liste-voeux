import { ajouterVoeu } from "../server-actions/ajouterVoeu"

export default function FormeVoeu() {
    return (
        <form action={ajouterVoeu} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
    <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600" htmlFor="marque">Marque</label>
        <input className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="text" id="marque" name="marque" required />
    </div>
    <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600" htmlFor="model">Modèle</label>
        <input className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="text" id="model" name="model" required />
    </div>
    <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600" htmlFor="numeroReference">Numéro de référence</label>
        <input className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="text" id="numeroReference" name="numeroReference" required />
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">
        Ajouter un voeu
    </button>
</form>

    )
}