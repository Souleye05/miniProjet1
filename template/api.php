
<?php
function lireJSON($filename) {
    $json_data = file_get_contents($filename);
    if ($json_data === false) {
        error_log("Erreur de lecture du fichier $filename");
        return [];
    }
    return json_decode($json_data, true);
}

function ecrireJSON($filename, $data) {
    $json_data = json_encode($data, JSON_PRETTY_PRINT);
    if (file_put_contents($filename, $json_data) === false) {
        error_log("Erreur d'écriture dans le fichier $filename");
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['action']) && $data['action'] == 'addCargaison') {
        $newCargaison = [
            "idcargo" => uniqid(),
            "numero" => $data['numero'],
            "type" => $data['type'],
            "poids" => $data['poids'],
            "lieu_depart" => $data['lieu_depart'],
            "lieu_arrivee" => $data['lieu_arrivee'],
            "date_depart" => $data['date_depart'],
            "date_arrivee" => $data['date_arrivee'],
            "distance_km" => $data['distance_km']
        ];

        error_log("Nouvelle cargaison: " . print_r($newCargaison, true));

        $currentData = lireJSON('../public/data/cargos.json');
        var_dump($currentData);
        if ($currentData === null) {
            error_log("Erreur de décodage JSON pour le fichier");
            echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
            exit;
        }

        $currentData['cargaisons'][] = $newCargaison;
        ecrireJSON('../public/data/cargos.json', $currentData);

        // Re-lire le fichier pour vérifier
        $verifData = lireJSON('../public/data/cargos.json');
        error_log("Données après écriture: " . print_r($verifData, true));

        echo json_encode(["status" => "success", "message" => "Cargaison ajoutée avec succès"]);
        exit;
    } else {
        echo json_encode(["status" => "error", "message" => "Action non reconnue"]);
        exit;
    }
}

