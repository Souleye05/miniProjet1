// interface Cargaison {
//     code: string;
//     type: string;
//     limitationType: string;
//     poids?: number;
//     produit?: string;
//     dateDepart: string;
//     dateArrivee: string;
//     lieuDepart: { lat: number, lng: number };
//     lieuArrivee: { lat: number, lng: number };
//     distance: number;
// }

// async function loadCargaisons() {
//     const response = await fetch('/miniProjet/template/api.php');
//     const cargaisons = await response.json();
//     renderCargaisons(cargaisons);
// }

// function renderCargaisons(cargaisons: Cargaison[]) {
//     const cargaisonList = document.getElementById('cargaisonList');
//     if (cargaisonList) {
//         cargaisonList.innerHTML = cargaisons.map((c, index) => `
//             <div class="card">
//                 <div class="card-body">
//                     <h3 class="card-title">${c.code} - ${c.type}</h3>
//                     <p>${c.dateDepart} - ${c.dateArrivee}</p>
//                     <button class="btn btn-sm btn-secondary" onclick="editCargaison(${index})">Modifier</button>
//                     <button class="btn btn-sm btn-error" onclick="deleteCargaison(${index})">Supprimer</button>
//                 </div>
//             </div>
//         `).join('');
//     }
// }

// async function saveCargaison(action: 'add' | 'edit' | 'delete', cargaison?: Cargaison, index?: number) {
//     const response = await fetch('/miniProjet/template/api.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ action, cargaison, index })
//     });

//     const result = await response.json();
//     if (result.status === 'success') {
//         loadCargaisons();
//     }
// }

// function editCargaison(index: number) {
//     // Populate form with cargaison data and open modal
// }

// function deleteCargaison(index: number) {
//     saveCargaison('delete', undefined, index);
// }

// loadCargaisons();
