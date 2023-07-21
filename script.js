// Site internet qui présente les événements et sujets concernant les thèmes du Bio et de l'environnement

//Prise en compte des données de connexion de l'utilisateur déjà inscrit
const el1 = document.getElementById('connexion-custom-form')
el1.addEventListener('submit', (event) =>{
  event.preventDefault()

  let email = event.target.email.value
  let pwd = event.target.password.value

  if (email && pwd) {
    alert(`Bonjour, vous allez être redirigé vers la page des abonnés.`)
    }
    else {
    alert(`Suite à un problème technique la à la page des abonnés est indisponible.`)
    }
 })

//Prise en compte des informations du formulaire nouveau client
const el2 = document.getElementById('register-custom-form')
el2.addEventListener('submit', (event) =>{
  event.preventDefault()

  let civility = event.target.female.checked ? 'female' : 'male'
  let name = event.target.name.value
  let cgv = event.target.cgv.checked
  

  let myCivility = civility === 'female' ? 'Madame' : 'Monsieur'
  let myName = name.toUpperCase()

  if (cgv) {
    alert(`Merci pour votre enregistrement ${myCivility} ${myName}, \n vous recevrez prochainement notre newsletter.`)
    }
    else {
    alert(`Merci de cocher la case des conditions générales ${myCivility} ${myName}, pour valider votre enregistrement.`)
    }
 })


