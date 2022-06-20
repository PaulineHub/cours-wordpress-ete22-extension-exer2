(function() 
        {
            let elmBody = document.querySelector('body');
            let elmBoite__modale;
            let elmBoite__X;
            let elmBoite__contenu;

            function creer_boite_modale()
            {
                elmBoite__modale = document.createElement('div');
                elmBoite__contenu = document.createElement('div');
                elmBoite__contenu.classList.add('elmBoite__contenu');
                elmBoite__X = document.createElement('button');
                elmBoite__modale.appendChild(elmBoite__contenu);
                elmBoite__modale.appendChild(elmBoite__X);
                elmBoite__X.classList.add('boite__X');
                elmBoite__X.innerHTML = "X";
                elmBoite__modale.classList.add('boite__modale');
                let elmBody = document.querySelector('body');
                let mon_petit_contenu = document.querySelector('.code_adresse').innerHTML;
                elmBoite__contenu.innerHTML = mon_petit_contenu;

                elmBody.appendChild(elmBoite__modale);
                //elmBoite__contenu.innerHTML = "ceci est un test"
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