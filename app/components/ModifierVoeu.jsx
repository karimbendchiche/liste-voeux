'use client'

import { useState } from "react"
import { mettreaJourVoeu } from "../server-actions/mettreaJourVoeu"

export default function ModifierVoeu({voeu}) {
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({
        marque: voeu.marque,
        model: voeu.model,
        numeroReference: voeu.numero_reference
    })

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    return (
        <div>
            <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Modifier
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center px-4">
                    <div className="modal-content bg-gray-900 p-6 rounded-lg w-full max-w-md">
                    <span className="close text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right" onClick={() => setShowModal(false)}>&times;</span>
                    <form action={mettreaJourVoeu} onSubmit={() => setShowModal(false)} className="mt-4">
                        <input 
                            type="hidden" 
                            name="id" 
                            value={voeu.id} 
                        />
                        <div className="mb-4">
                            <label htmlFor="marque" className="block text-gray-300 mb-2">Marque</label>
                            <input 
                                type="text" 
                                id="marque"
                                name="marque" 
                                value={formData.marque} 
                                onChange={handleChange}
                                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500" 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="model" className="block text-gray-300 mb-2">Model</label>
                            <input 
                                type="text" 
                                id="model"
                                name="model" 
                                value={formData.model} 
                                onChange={handleChange} 
                                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500" 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="numeroReference" className="block text-gray-300 mb-2">Numéro de référence</label>
                            <input 
                                type="text" 
                                id="numeroReference"
                                name="numeroReference" 
                                value={formData.numeroReference} 
                                onChange={handleChange} 
                                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500" 
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Mettre à jour le voeu
                        </button>
                    </form>
                    </div>
                </div>
            )}
        </div>

    )
}