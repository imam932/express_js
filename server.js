// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { Contact } = require('./models'); // new require for db object

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

app.get('/api/contacts', async (req, res) => {
  // TODO: retreive contacts and send to requester
    try {
       const contacts = await Contact.findAll();    
        return res.send(contacts)
    } catch (error) {
        return res.send(error)
    }

//   return db.Contact.findAll()
//   .then((contacts) => res.send(contacts))
//   .catch((err) => {
//     console.log('There was an error querying contacts', JSON.stringify(err))
//     return res.send(err)
//   });
});

app.post('/api/contacts', async (req, res) => {
  const { firstName, lastName, phone, email } = req.body

    try {
        const contact = await Contact.create({ firstName, lastName, phone, email });
        return res.send(contact)
    } catch (error) {
        return res.status(400).send(error)
    }

//   return db.Contact.create({ firstName, lastName, phone, email })
//     .then((contact) => {
//         console.log(contact)
//         res.send(contact)
//     })
//     .catch((err) => {
//       console.log('***There was an error creating a contact', JSON.stringify(contact))
//       return res.status(400).send(err)
//     })
});

app.delete('/api/contacts/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  // TODO: find and delete contact by id
    // return res.send(req.params.id)
    try {
        const contact = await Contact.findByPk(id);
        contact.destroy();
        return res.send(id)
    } catch (error) {
        res.status(400).send(error);
    }

//   return db.Contact.findByPk(id)
//   .then((contact) => contact.destroy())
//   .then(() => res.send({ id }))
//   .catch((err) => {
//     console.log('***Error deleting contact', JSON.stringify(err))
//     res.status(400).send(err)
//   })
});

app.put('/api/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  // TODO: find and update contact by id
  return db.Contact.findByPk(id)
  .then((contact) => {
    const { firstName, lastName, phone, email } = req.body
    return contact.update({ firstName, lastName, phone, email })
      .then(() => res.send(contact))
      .catch((err) => {
        console.log('***Error updating contact', JSON.stringify(err))
        res.status(400).send(err)
      })
  });  
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});