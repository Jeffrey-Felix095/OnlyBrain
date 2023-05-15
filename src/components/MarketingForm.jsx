import React from 'react';

const MarketingForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="bg-gradient-to-br from-blue-400 to-indigo-500 px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl text-white font-bold mb-8 text-center">
                    Dejanos Conocer Más Sobre Tu Negocio
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg"
                >
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                                Nombre De La Compañia
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                required
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                                Tipo De Negocio
                            </label>
                            <select
                                id="businessType"
                                name="businessType"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="B2B">B2B</option>
                                <option value="B2C">B2C</option>
                                <option value="Non-Profit">Non-Profit</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="marketingObjectives" className="block text-sm font-medium text-gray-700">
                            Objetivos De Marketing
                            </label>
                            <textarea
                                id="marketingObjectives"
                                name="marketingObjectives"
                                rows="3"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">
                                Target Audience
                            </label>
                            <input
                                type="text"
                                name="targetAudience"
                                id="targetAudience"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                                Presupuesto
                            </label>
                            <input
                                type="number"
                                name="budget"
                                id="budget"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="term" className="block text-sm font-medium text-gray-700">
                                Plazo
                            </label>
                            <input
                                type="date"
                                name="term"
                                id="term"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="marketingChannels" className="block text-sm font-medium text-gray-700">
                                Canales De Marketing
                            </label>
                            <textarea
                                id="marketingChannels"
                                name="marketingChannels"
                                rows="3"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="contactInformation" className="block text-sm font-medium text-gray-700">
                                Información De Contacto
                            </label>
                            <textarea
                                id="contactInformation"
                                name="contactInformation"
                                rows="3"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700">
                                Comentarios Adicionales
                            </label>
                            <textarea
                                id="additionalComments"
                                name="additionalComments"
                                rows="3"
                                className="mt-1 block w-full py2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pt-4">
                        <button
                            type="submit"
                            className="bg-gradient-to-br from-blue-400 to-indigo-500 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar Solicitud
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MarketingForm;