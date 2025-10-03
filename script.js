<script>
    // S'assurer que le script s'exécute après le chargement complet du DOM
    document.addEventListener('DOMContentLoaded', function() {

        // ==========================================================
        // ===== Validation simple du formulaire (sans alert()) =====
        // ==========================================================
        const form = document.querySelector('.login-form form');
        const input = document.getElementById('login-input');
        const errorMessage = document.getElementById('error-message');

        form.addEventListener('submit', function(e) {
            // Utiliser trim() pour vérifier si le champ est vide ou ne contient que des espaces
            if (input.value.trim() === '') {
                e.preventDefault(); // Empêche l'envoi du formulaire

                // Affiche le message d'erreur personnalisé au lieu d'utiliser alert()
                errorMessage.classList.remove('hidden');
                input.focus();

                // Cache le message d'erreur après 3 secondes
                setTimeout(() => {
                    errorMessage.classList.add('hidden');
                }, 3000);

            } else {
                // Si la validation réussit, s'assurer que le message est caché
                errorMessage.classList.add('hidden');
                // Le formulaire est soumis ici (action="#")
            }
        });

        // ====================================================
        // ===== Slider automatique pour les publicités =====
        // ====================================================
        const ads = document.querySelectorAll('.ad-slide');
        let currentAd = 0;
        const totalAds = ads.length;

        function showNextAd() {
            // Masquer tous les slides
            ads.forEach(ad => {
                // Utiliser la classe Tailwind 'opacity-0' pour masquer avec transition
                ad.classList.remove('opacity-100');
                ad.classList.add('opacity-0');
            });

            // Afficher le slide actuel
            ads[currentAd].classList.remove('opacity-0');
            ads[currentAd].classList.add('opacity-100');

            // Passer au slide suivant
            currentAd = (currentAd + 1) % totalAds;
        }

        // Démarrer l'animation uniquement s'il y a plus d'une publicité
        if (totalAds > 1) {
             // Afficher immédiatement la première pub avant le démarrage du cycle
             ads[currentAd].classList.add('opacity-100');
             // Faire tourner toutes les 4 secondes (ajusté pour une meilleure lecture)
             setInterval(showNextAd, 4000);
        } else if (totalAds === 1) {
            // Si un seul élément, s'assurer qu'il est visible
            ads[0].classList.add('opacity-100');
        }
    });
</script>
