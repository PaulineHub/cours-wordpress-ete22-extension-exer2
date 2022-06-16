(function() 
        {
            let elmBoite__modale;
            let elmBoite__X;

            function creer_boite_modale()
            {
                elmBoite__modale = document.createElement('div');
                elmBoite__X = document.createElement('button');
                elmBoite__modale.appendChild(elmBoite__X);
                elmBoite__X.classList.add('boite__X');
                elmBoite__X.innerHTML = "X";
                elmBoite__modale.classList.add('boite__modale');
                let elmBody = document.querySelector('body');
                elmBody.appendChild(elmBoite__modale);
            }
            creer_boite_modale()

            //document.querySelector('.boite__modale');
            let elmOK = document.querySelector('#mon_bouton');

            elmOK.addEventListener('mousedown', function() {
                console.log('Bravo le script fonctionne.');
                elmBoite__modale.classList.add('boite__modale__ouvrir');
            });

            elmBoite__X.addEventListener('mousedown', function() {
                elmBoite__modale.classList.remove('boite__modale__ouvrir')
            })

        })();