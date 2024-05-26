<main class="container mx-auto py-8 px-4 w-4/5 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Liste des Cargaisons</h2>

    <!-- Bouton pour afficher le formulaire de création de cargaison -->
    <div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" id="add_modal">add</button>
    </div>
    <!-- Filtres -->
<div class="flex flex-wrap gap-4 mb-4">
    <div class="flex-1 min-w-[200px]">
        <label for="typeFilter" class="block font-medium">Filtrer par Type :</label>
        <select id="typeFilter" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
            <option value="">Tous</option>
            <option value="maritime">Maritime</option>
            <option value="aérienne">Aérienne</option>
            <option value="routière">Routière</option>
        </select>
    </div>

    <div class="flex-1 min-w-[200px]">
        <label for="etatFilter" class="block font-medium">Filtrer par État d'Avancement :</label>
        <select id="etatFilter" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
            <option value="">Tous</option>
            <option value="en_attente">En Attente</option>
            <option value="en_cours">En Cours</option>
            <option value="arrivé">Arrivé</option>
            <option value="récupéré">Récupéré</option>
            <option value="perdu">Perdu</option>
            <option value="archivé">Archivé</option>
        </select>
    </div>

    <div class="flex-1 min-w-[200px]">
        <label for="destinationFilter" class="block font-medium">Filtrer par Destination :</label>
        <input type="text" id="destinationFilter" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
</div>

    <!-- Liste des Cargaisons -->
    <div class="overflow-x-auto">
        <table class="w-full whitespace-nowrap">
            <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">pays Départ</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pays Arrivée</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Départ</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Arrivée</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">distance</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">modifier</th>
                </tr>
            </thead>
            <tbody id="cargaisonbody">
                <!-- Exemple de ligne de cargaison -->
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">12345</td>
                    <td class="px-6 py-4 whitespace-nowrap">Maritime</td>
                    <td class="px-6 py-4 whitespace-nowrap">En Cours</td>
                    <td class="px-6 py-4 whitespace-nowrap">New York</td>
                    <td class="px-6 py-4 whitespace-nowrap">12345</td>
                    <td class="px-6 py-4 whitespace-nowrap">Maritime</td>
                    <td class="px-6 py-4 whitespace-nowrap">En Cours</td>
                    <td class="px-6 py-4 whitespace-nowrap">New York</td>
                </tr>
                <!-- Ajoutez ici les autres lignes de cargaisons dynamiquement -->
            </tbody>
        </table>
        <div class="join float-right" id="pagination-controls">
            <button class="join-item btn">«</button>
            <button class="join-item btn">Page 22</button>
            <button class="join-item btn">»</button>
        </div>
    </div>
</main>

<div id="my-modal" class="">
<!-- Ajoutez ici le contenu principal de chaque module -->
<h2 class="text-2xl font-bold mb-4">Formulaire de création de Cargaison</h2>
<form class="space-y-4" id="form_id">
    Formulaire pour créer une cargaison 
    <div>
        <label for="numero" class="block font-medium">Numéro :</label>
        <input type="text" id="numero" name="numero" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
            <div>
            <label for="limitation" class="block font-medium">Type de Limitation :</label>
            <select id="limitation" name="limitation" class="select select-bordered w-full">
                <option value="">Sélectionner</option>
                <option value="poids">Poids</option>
                <option value="produit">Produit</option>
            </select>
            </div>
            <div id="poidsField" class="hidden">
                <label for="poids" class="block font-medium">Poids :</label>
                <input type="text" id="poids" name="poids" class="input input-bordered w-full">
            </div>
            <div id="produitField" class="hidden">
                <label for="produit" class="block font-medium">Produit :</label>
                <input type="text" id="produit" name="produit" class="input input-bordered w-full">
            </div>
    <div>
        <label for="type" class="block font-medium">Type :</label>
        <select id="type" name="type" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
            <option value="maritime">Maritime</option>
            <option value="aérienne">Aérienne</option>
            <option value="routière">Routière</option>
        </select>
    </div>
    <div>
        <label for="depart" class="block font-medium">Lieu de départ :</label>
        <input type="text" id="depart" name="depart" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
    <div>
        <label for="arrivee" class="block font-medium">Lieu d'arrivée :</label>
        <input type="text" id="arrivee" name="arrivee" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
    <div>
        <label for="arrivee" class="block font-medium">date départ :</label>
        <input type="date" id="dateDepart" name="arrivee" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
    <div>
        <label for="prix" class="block font-medium">date arrivee :</label>
        <input type="date" id="dateArrivee" name="prix" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
    <div>
        <label for="prix" class="block font-medium">distance :</label>
        <input type="text" id="distance" name="prix" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div>
    <div>
        <button type="submit" id="valider" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Créer la Cargaison</button>
    </div>
    <div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" id="close">close</button>
    </div>
</form> 
</div>

 <!-- Modale pour le formulaire de création de cargaison
<input type="checkbox" id="my-modal" class="modal-toggle">
<div class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Créer une Cargaison</h3>
        <form class="space-y-4">
            <div>
                <label for="numero" class="block font-medium">Numéro :</label>
                <input type="text" id="numero" name="numero" class="input input-bordered w-full">
            </div>
            <div>
                <label for="limitation" class="block font-medium">Type de Limitation :</label>
                <select id="limitation" name="limitation" class="select select-bordered w-full">
                    <option value="">Sélectionner</option>
                    <option value="poids">Poids</option>
                    <option value="produit">Produit</option>
                </select>
            </div>
            <div id="poidsField" class="hidden">
                <label for="poids" class="block font-medium">Poids :</label>
                <input type="text" id="poids" name="poids" class="input input-bordered w-full">
            </div>
            <div id="produitField" class="hidden">
                <label for="produit" class="block font-medium">Produit :</label>
                <input type="text" id="produit" name="produit" class="input input-bordered w-full">
            </div>
            <div>
                <label for="type" class="block font-medium">Type :</label>
                <select id="type" name="type" class="select select-bordered w-full">
                    <option value="maritime">Maritime</option>
                    <option value="aérienne">Aérienne</option>
                    <option value="routière">Routière</option>
                </select>
            </div>
            <div>
                <label for="depart" class="block font-medium">Lieu de départ :</label>
                <input type="text" id="depart" name="depart" class="input input-bordered w-full">
            </div>
            <div>
                <label for="arrivee" class="block font-medium">Lieu d'arrivée :</label>
                <input type="text" id="arrivee" name="arrivee" class="input input-bordered w-full">
            </div>
            <div>
                <label for="prix" class="block font-medium">Distance (km):</label>
                <input type="text" id="prix" name="prix" class="input input-bordered w-full">
            </div>
            <div>
                <label for="prix" class="block font-medium">Départ :</label>
                <input type="date" id="prix" name="prix" class="input input-bordered w-full">
            </div>
            <div>
                <label for="prix" class="block font-medium">Arrivée :</label>
                <input type="date" id="prix" name="prix" class="input input-bordered w-full">
            </div>
            <div class="modal-action">
                <button type="submit" class="btn btn-primary">Créer la Cargaison</button>
                <label for="my-modal" class="btn">Fermer</label>
            </div>
        </form>
    </div>
</div> -->
 -->

<!-- <!DOCTYPE html>
<html lang="en">idcargo;
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>

</style>
<body>
   
  

<main class="container mx-auto py-8 px-4 w-4/5">
    <h2 class="text-2xl font-bold mb-4">Liste des Cargaisons</h2> -->
    <!-- Filtres -->
    <!-- <div class="mb-4">
        <label for="typeFilter" class="block font-medium">Filtrer par Type :</label>
        <select id="typeFilter" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
            <option value="">Tous</option>
            <option value="maritime">Maritime</option>
            <option value="aérienne">Aérienne</option>
            <option value="routière">Routière</option>
        </select>
    </div> -->
    <!-- <div class="mb-4">
        <label for="etatFilter" class="block font-medium">Filtrer par État d'Avancement :</label>
        <select id="etatFilter" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
            <option value="">Tous</option>
            <option value="en_attente">En Attente</option>
            <option value="en_cours">En Cours</option>
            <option value="arrivé">Arrivé</option>
            <option value="récupéré">Récupéré</option>
            <option value="perdu">Perdu</option>
            <option value="archivé">Archivé</option>
        </select>
    </div>
    <div class="mb-4">
        <label for="destinationFilter" class="block font-medium">Filtrer par Destination :</label>
        <input type="text" id="destinationFilter" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
    </div> --> 
    <!-- Liste des Cargaisons -->
    <!-- <div class="overflow-x-auto">
        <table class="w-full whitespace-nowrap">
            <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">État d'Avancement</th>
                    <th class="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                </tr>
            </thead>
            <tbody> -->
                <!-- Exemple de ligne de cargaison -->
                <!-- <tr>
                    <td class="px-6 py-4 whitespace-nowrap">12345</td>
                    <td class="px-6 py-4 whitespace-nowrap">Maritime</td>
                    <td class="px-6 py-4 whitespace-nowrap">En Cours</td>
                    <td class="px-6 py-4 whitespace-nowrap">New York</td>
                </tr> -->
                <!-- Ajoutez ici les autres lignes de cargaisons dynamiquement -->
            <!-- </tbody>
        </table>
    </div>
</main>

<main class="container mx-auto py-8 px-4 w-4/5">
    <h2 class="text-2xl font-bold mb-4">Informations de la Cargaison</h2> -->
    <!-- Informations de la Cargaison -->
    <!-- <div class="overflow-x-auto">
        <table class="w-full whitespace-nowrap">
            <tbody>
                <tr>
                    <td class="px-6 py-4 font-medium">Numéro :</td>
                    <td class="px-6 py-4">12345</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-medium">Poids Max :</td>
                    <td class="px-6 py-4">5000 kg</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-medium">Type :</td>
                    <td class="px-6 py-4">Maritime</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-medium">Lieu de Départ :</td>
                    <td class="px-6 py-4">New York</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-medium">Lieu d'Arrivée :</td>
                    <td class="px-6 py-4">Paris</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-medium">Prix :</td>
                    <td class="px-6 py-4">$1000</td>
                </tr>
            </tbody>
        </table>
    </div> -->
    <!-- Formulaire de Modification -->
    <!-- <h2 class="text-lg font-bold mb-4">Modifier les Informations</h2>
    <form class="space-y-4">
        <div>
            <label for="newPoids" class="block font-medium">Nouveau Poids Max :</label>
            <input type="text" id="newPoids" name="newPoids" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
        </div>
        <div>
            <label for="newType" class="block font-medium">Nouveau Type :</label>
            <select id="newType" name="newType" class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                <option value="maritime">Maritime</option>
                <option value="aérienne">Aérienne</option>
                <option value="routière">Routière</option>
            </select>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Modifier</button>
    </form>
</main> -->
 
<!-- </body>
</html> --> 