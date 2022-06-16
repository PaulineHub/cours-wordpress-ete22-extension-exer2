(function() 
        {
            let elmBoite__modale = document.createElement('div');
            elmBoite__modale.classList.add('boite__modale');
            let elmBody = document.querySelector('body');
            elmBody.appendChild(elmBoite__modale);

            document.querySelector('.boite__modale');
            let elmOK = document.querySelector('#mon_bouton');
            elmOK.addEventListener('mousedown', function() {
                console.log('Bravo le script fonctionne.')
            });

        })();