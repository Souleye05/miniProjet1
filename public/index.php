<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion de Cargaison</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@1.14.3/dist/full.css" rel="stylesheet">
    <!-- Ajouter le script pour Leaflet.js -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script type="module" src=""></script>
    <style>
        #map {
            height: 300px;
        }
    </style>
</head>
<body class="font-sans bg-gray-100 text-gray-900 h-screen">
    <header class="bg-blue-900 text-white py-4">
        <div class="container mx-auto flex justify-between items-center px-4">
            <div class="flex items-center">
                <img src="" alt="Logo de l'application" class="h-8 mr-2">
                <h1 class="text-2xl font-bold">Gestion de Cargaison</h1>
            </div>
            <nav>
                <ul class="flex">
                    <li class="ml-6"><a href="#" class="hover:text-gray-300">Accueil</a></li>
                    <li class="ml-6"><a href="#" class="hover:text-gray-300">Gestion des Cargaisons</a></li>
                    <li class="ml-6"><a href="#" class="hover:text-gray-300">Suivi des Colis</a></li>
                    <li class="ml-6"><a href="#" class="hover:text-gray-300">Paramètres</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="flex">
        <aside class="bg-gray-800 text-white w-1/5 py-8 px-4">
            <!-- Contenu de la barre latérale -->
            <ul>
                <li class="mb-4"><a href="?page=Gestion des Cargaisons" class="hover:text-gray-300">Gestion des Cargaisons</a></li>
                <li class="mb-4"><a href="?page=Suivi des Colis" class="hover:text-gray-300">Suivi des Colis</a></li>
                <li class="mb-4"><a href="?page=Paramètres" class="hover:text-gray-300">Paramètres</a></li>
            </ul>
        </aside>

        <main class="container mx-auto py-8 px-4 w-4/5">
            <!-- Ajoutez ici le contenu principal de chaque module -->
            <?php
            $page = isset($_GET['page']) ? $_GET['page'] : 'Gestion des Cargaisons';
        if (isset($_GET['page'])) {
            $page = $_GET['page'];
            if ($page === 'Gestion des Cargaisons') {
                include '../template/cargaison.php';
            } elseif ($page === 'Suivi des Colis') {
                include '../template/colis.php';
            }elseif ($page === 'Paramètres') {
                include '../template/parametre.php';
            }
             else {
                echo "<p>Page non trouvée.</p>";
            }
        } else {
            include '../template/cargaison.php';
        }
        ?>
        </main>
    </div>

    <footer class="bg-blue-900 text-white py-4 mt-8">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 Gestion de Cargaison. Tous droits réservés.</p>
        </div>
    </footer>
    <script type="module" src="../dist/test.js"></script>
</body>
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

</html>
