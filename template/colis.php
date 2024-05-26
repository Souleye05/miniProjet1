<!-- Ajoutez ici le contenu principal de chaque module -->
<h2 class="text-2xl font-bold mb-4">Formulaire de création de Colis</h2>
<form class="space-y-4">
    <!-- Formulaire pour créer un colis -->
    <div>
        <label for="code" class="block font-medium">Code :</label>
        <input type="text" id="code" name="code" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
    <div>
        <label for="poids" class="block font-medium">Poids :</label>
        <input type="text" id="poids" name="poids" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
    <div>
        <label for="volume" class="block font-medium">Volume :</label>
        <input type="text" id="volume" name="volume" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
    <div>
        <label for="destination" class="block font-medium">Destination :</label>
        <input type="text" id="destination" name="destination" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
    <div>
        <label for="type" class="block font-medium">Type de Cargaison :</label>
        <select id="type" name="type" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
            <option value="maritime">Maritime</option>
            <option value="aérienne">Aérienne</option>
            <option value="routière">Routière</option>
        </select>
    </div>
    <div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Créer le Colis</button>
    </div>
</form>

<main class="container mx-auto py-8 px-4 w-4/5">
    <h2 class="text-2xl font-bold mb-4">Liste des Colis</h2>
    <!-- Filtres -->
    <div class="mb-4">
        <label for="destinationFilter" class="block font-medium">Filtrer par Destination :</label>
        <input type="text" id="destinationFilter" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
    <div class="mb-4">
        <label for="cargaisonFilter" class="block font-medium">Filtrer par Type de Cargaison :</label>
        <select id="cargaisonFilter" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
            <option value="">Tous</option>
            <option value="maritime">Maritime</option>
            <option value="aérienne">Aérienne</option>
            <option value="routière">Routière</option>
        </select>
    </div>
    <!-- Liste des Colis -->
    <div class="overflow-x-auto">
        <table class="w-full whitespace-nowrap">
            <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Poids</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type de Cargaison</th>
                </tr>
            </thead>
            <tbody>
                <!-- Exemple de ligne de colis -->
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">AB123</td>
                    <td class="px-6 py-4 whitespace-nowrap">10 kg</td>
                    <td class="px-6 py-4 whitespace-nowrap">1 m<sup>3</sup></td>
                    <td class="px-6 py-4 whitespace-nowrap">Paris</td>
                    <td class="px-6 py-4 whitespace-nowrap">Maritime</td>
                </tr>
                <!-- Ajoutez ici les autres lignes de colis dynamiquement -->
            </tbody>
        </table>
    </div>
</main>

<main class="container mx-auto py-8 px-4 w-4/5">
    <h2 class="text-2xl font-bold mb-4">Informations du Colis</h2>
    <!-- Informations du Colis -->
    <div class="overflow-x-auto">
        <table class="w-full whitespace-nowrap">
            <tbody>
                <tr>
                    <td class="px-6 py-4 font-medium">Code :</td>
                    <td class="px-6 py-4">AB123</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-medium">Poids :</td>
                    <td class="px-6 py-4">10 kg</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-medium">Volume :</td>
                    <td class="px-6 py-4">1 m<sup>3</sup></td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-medium">Destination :</td>
                    <td class="px-6 py-4">Paris</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-medium">Type de Cargaison :</td>
                    <td class="px-6 py-4">Maritime</td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- Formulaire de Modification -->
    <h2 class="text-lg font-bold mb-4">Modifier les Informations</h2>
    <form class="space-y-4">
        <div>
            <label for="newPoids" class="block font-medium">Nouveau Poids :</label>
            <input type="text" id="newPoids" name="newPoids" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
        </div>
        <div>
            <label for="newVolume" class="block font-medium">Nouveau Volume :</label>
            <input type="text" id="newVolume" name="newVolume" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
        </div>
        <div>
            <label for="newDestination" class="block font-medium">Nouvelle Destination :</label>
            <input type="text" id="newDestination" name="newDestination" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Modifier</button>
    </form>
</main>
