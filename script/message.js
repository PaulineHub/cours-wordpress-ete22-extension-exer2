(function() 
        {
            let elmBoite__modale;
            function creer_boite_modale()
            {
                let elmBoite__modale = document.createElement('div');
                let elmBoite__X = document.createElement('div');
                elmBoite__modale.appendChild(elmBoite__X);
                elmBoite__modale.classList.add('boite__modale');
                let elmBody = document.querySelector('body');
                elmBody.appendChild(elmBoite__modale);
            }
            creer_boite_modale()

            //document.querySelector('.boite__modale');
            let elmOK = document.querySelector('#mon_bouton');
            elmOK.addEventListener('mousedown', function() {
                console.log('Bravo le script fonctionne.');
                elmBoite__modale.classList.add('boite__modale__ouvrir')
            });

        })();