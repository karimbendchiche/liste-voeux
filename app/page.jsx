import AuthForm from "./components/AuthForm"

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto bg-gradient-to-r from-teal-400 to-blue-500 text-white p-6 rounded shadow-md mt-8">
  <h1 className="text-2xl font-bold mb-4">Bienvenue dans la liste des vœux</h1>
  <p className="text-gray-100 mb-4">
    Votre espace personnel pour gérer une liste des vœux que vous souhaitez.
    Connectez-vous pour créer, voir, modifier et supprimer des vœux de votre liste de vœux.
  </p>
  <div className="mt-4">
    <AuthForm />
  </div>
</div>


  )
}
