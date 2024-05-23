<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion de Cargaison</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
    <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"  rel="stylesheet" /> -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="tailwind.css">
</head>
<body class="bg-white">
    <div class="container mx-auto p-4">
        <!-- <header class="flex items-center justify-between p-4 bg-white shadow-md">
            <div class="flex items-center space-x-4">
                <h1 class="text-xl font-bold">GP-Monde</h1>
            </div>
            <div class="flex items-center space-x-4">
                <div class="text-xl font-bold" id="currentDate"></div>
            </div>
        </header> -->

        <div class="navbar bg-base-100 rounded-box">
            <div class="navbar-start w-16">
                <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Dashboard</a></li>
                    <li><a id="linkCargo">Cargaison</a></li>
                    <li><a id="linkProduit">Produits / Colis</a></li>
                </ul>
                </div>
            </div>
            <div class="flex-1">
              <a class="btn btn-ghost text-xl">GP-Monde</a>
            </div>
            <div class="flex-none gap-2">
              <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
              </div>
              <div class="flex items-center space-x-4">
                <div class="text-xl font-bold" id="currentDate" ></div>
            </div>
              <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a class="justify-between">
                      Profile
                      <span class="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>

        <div class="">
            <!-- <nav class="w-1/4 p-4 bg-white shadow-md">
                <ul class="space-y-4">
                    <li><a href="#" class="block p-2 rounded bg-purple-600 text-white">Dashboard</a></li>
                    <li><a href="#" class="block p-2 rounded bg-purple-600 text-white" id="linkCargo">Cargaison</a></li>
                    <li><a href="#" class="block p-2 rounded bg-purple-600 text-white" id="linkProduit">Produits / Colis</a></li>
                </ul>
            </nav> -->
            <hr class="bg-base-100 w-full mt-5">
            <section class="w-3/4">
                <div class="container p-4 mx-auto mt-4" id="cargaison">
                    <div class="flex space-x-32">
                        <h1 class="text-3xl font-bold mb-6">Gestion de Cargaisons</h1>
                        <div class="flex space-x-6 rounded-sm">
                            <a class="flex flex-col items-center" href="#">
                                <img class="h-14 w-14 rounded-full p-[1.5px] border-2 border-neutral-500 flex justify-center items-center hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-out" src="../images/images.jpeg" alt="Cargaison Maritime">
                                <p class="text-xs w-14 text-center">Aérienne</p>
                            </a>
                            <a class="flex flex-col items-center" href="#">
                                <img class="h-14 w-14 rounded-full p-[1.5px] border-2 border-neutral-500 flex justify-center items-center hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-out" src="../images/téléchargement (1).jpeg" alt="Cargaison Maritime">
                                <p class="text-xs w-14 text-center">Maritime</p>
                            </a>
                            <a class="flex flex-col items-center" href="#">
                                <img class="h-14 w-14 rounded-full p-[1.5px] border-2 border-neutral-500 flex justify-center items-center hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-out" src="../images/camion.jpeg" alt="Cargaison Maritime">
                                <p class="text-xs w-14 text-center">Routière</p>
                            </a>
                        </div>
                    </div>
                               <!-- formulaire d'ajout cargaison -->
                    <form id="formAddCargaison" class="mb-4 p-6 bg-white rounded-lg shadow-md hidden">
                        <h2 class="text-2xl font-bold mb-4">Ajouter une Cargaison</h2>
                        <div class="mb-4">
                            <label for="typeCargaison" class="block text-sm font-medium text-gray-700">Type de Cargaison:</label>
                            <select id="typeCargaison" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                                <option value="maritime">Maritime</option>
                                <option value="aerienne">Aérienne</option>
                                <option value="routier">Routier</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="distance" class="block text-sm font-medium text-gray-700">Distance (km):</label>
                            <input type="number" id="distance" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" required>
                        </div>
                        <div class="mb-4">
                            <label for="frais" class="block text-sm font-medium text-gray-700">Frais (fcfa/kg):</label>
                            <input type="number" id="frais" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" required>
                        </div>
                        <div class="mb-4">
                            <label for="image" class="block text-sm font-medium text-gray-700">Image URL:</label>
                            <input type="text" id="image" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" required>
                        </div>
                        <button type="submit" class="w-full bg-purple-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Ajouter Cargaison</button>
                    </form>
                    
                    <!-- <input type="text" id="filterInput" placeholder="Filtrer les cargaisons par type..." class="mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 w-full">
                    <table class="min-w-full bg-white rounded-lg shadow-md">
                        <thead class="bg-gray-200">
                            <tr>
                                <th class="py-3 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700">Image</th>
                                <th class="py-3 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700">Type</th>
                                <th class="py-3 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700">Distance (km)</th>
                                <th class="py-3 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700">Frais (fcfa/kg)</th>
                            </tr>
                        </thead>
                        <tbody id="cargaisonTableBody"> -->
                            <!-- Les cargaisons seront ajoutées ici -->
                        <!-- </tbody>
                    </table> -->
                </div>
            </section>
                 
                    <div class="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                        <div class="drawer-content">
                          <!-- Page content here -->

                <div class="flex overflow-x-auto"></div>
                <div class="overflow-x-auto">
                    <table class="table">
                      <!-- head -->
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Départ</th>
                          <th>Arrivé</th>
                          <th>Distance</th>
                          <th>details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- row 1 -->
                        <tr>
                          <td>
                            <div class="flex items-center gap-3">
                              <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="https://www.inc-conso.fr/sites/default/files/avion-800_1.png" alt="Cargaison Maritime">
                                </div>
                              </div>
                              <div>
                                <div class="font-bold">Cargaison</div>
                                <div class="text-sm opacity-50">Aérienne</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Zemlak, Daniel and Leannon
                            <br/>
                            <span class="badge badge-ghost badge-sm">12/02/2024</span>
                          </td>
                          <td>
                            Zemlak, Daniel and Leannon
                            <br/>
                            <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                          </td>
                          <td>Purple</td>
                          <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                          </th>
                        </tr>
                        <!-- row 2 -->
                        <tr>
                          <td>
                            <div class="flex items-center gap-3">
                              <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="https://www.actu-environnement.com/images/illustrations/news/36586_large.jpg" alt="Cargaison Maritime">
                                </div>
                              </div>
                              <div>
                                <div class="font-bold">Cargaison</div>
                                <div class="text-sm opacity-50">Maritime</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Carroll Group
                            <br/>
                            <span class="badge badge-ghost badge-sm">12/02/2024</span>
                          </td>
                          <td>Red</td>
                          <td>Red</td>
                          <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                          </th>
                        </tr>
                        <!-- row 3 -->
                        <tr>
                          <td>
                            <div class="flex items-center gap-3">
                              <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                <img src="../images/camion.jpeg" alt="Cargaison Maritime">
                                </div>
                              </div>
                              <div>
                                <div class="font-bold">Cargaison</div>
                                <div class="text-sm opacity-50">Routier</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Rowe-Schoen
                            <br/>
                            <span class="badge badge-ghost badge-sm">12/02/2024</span>
                          </td>
                          <td>Crimson</td>
                          <td>Crimson</td>
                          <th>
                            <button class="btn btn-ghost btn-xdrawer-overlays ">details</button>
                          </th>
                        </tr>   
                      </tbody>
                    </table>
                  </div>

                          <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
                        </div> 
                        <div class="drawer-side">
                          <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
                          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            <!-- Sidebar content here -->
                             <!-- My detail's card -->
                  <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                          </ul>
                        </div>
                      </div>
                </div>
            

                <!-- Ajout cargaison -->
            <main class="w-3/4 p-4 hidden" id="produit">
                <section class="bg-white p-4 rounded shadow-md mb-4">
                    <h2 class="text-2xl font-bold mb-4">Ajouter dans une cargaison</h2>
                    <form id="productForm" class="grid grid-cols-2 gap-4">
                        <div class="col-span-2">
                            <label for="cargaisonType" class="block text-sm font-medium text-gray-700">Type de cargaison</label>
                            <select id="cargaisonType" name="cargaisonType" class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                <option value="aerienne">Aérienne</option>
                                <option value="maritime">Maritime</option>
                                <option value="routier">Routier</option>
                            </select>
                        </div>
                        <div class="col-span-2">
                            <label for="productType" class="block text-sm font-medium text-gray-700">Type de produit</label>
                            <select id="productType" name="productType" class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                <option value="alimentaire">Alimentaire</option>
                                <option value="chimique">Chimique</option>
                                <option value="fragile">Matériel Fragile</option>
                                <option value="incassable">Matériel Incassable</option>
                            </select>
                        </div>
                        <div>
                            <label for="productName" class="block text-sm font-medium text-gray-700">Nom du produit</label>
                            <input type="text" id="productName" name="productName" class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        <div>
                            <label for="productWeight" class="block text-sm font-medium text-gray-700">Poids du produit (kg)</label>
                            <input type="number" id="productWeight" name="productWeight" class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        <div class="hidden" id="toxique">
                            <label for="toxicite" class="block text-sm font-medium text-gray-700">Degré de toxicité</label>
                            <input type="number" name="toxicite" class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        <div class="col-span-2">
                            <button type="submit" class="mt-2 p-2 bg-purple-600 text-white rounded">Ajouter</button>
                            
                        </div>
                    </form>
                </section>

                <section class="bg-white p-4 rounded shadow-md">
                    <h2 class="text-2xl font-bold mb-4">Produits dans les cargaisons</h2>
                    <div id="cargaisonProducts" class="grid grid-cols-3 gap-4">
                        <!-- Les produits ajoutés apparaîtront ici -->
                    </div>
                </section>
                
            </main>
        </div>
    </div>
    <!-- Footer -->
    <!-- <footer class="footer items-center p-4 bg-neutral text-neutral-content fixed bottom-0">
        <aside class="items-center grid-flow-col">
          <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
          <p>Copyright © 2024 - All right reserved</p>
        </aside> 
        <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
          </a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </nav>
      </footer> -->

    <script type="module" src="../dist/test.js"></script>
</body>
</html>
