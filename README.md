# Simple API with Express

## simple async with try catch :thumbsup:

```
try {
       const contacts = await Contact.findAll();    
        return res.send(contacts)
    } catch (error) {
        return res.send(error)
    }
```