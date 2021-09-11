const admin = require('firebase-admin')
const serviceKey = require('./par3-golf-academy-firebase-adminsdk-pzp3z-08ee01028b.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceKey)
})

const db = admin.firestore()
db.collection('users').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => { 
      console.log(doc.id, '=>', doc.data().clientID)
    })
  })
  .catch((err) => {
    console.log('Error getting documents', err)
  })
