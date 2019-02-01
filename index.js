console.log('Address Book')

// -----------------------------------------------------------------------------
// DATA

let contacts = [
  {
    name: 'Haidar',
    phone: '+62-8-1993-101010',
    email: 'mhaidarhanif@gmail.com'
  },
  {
    name: 'Tony',
    phone: '+1-8-1993-101010',
    email: 'tony@stark.com'
  }
]

// -----------------------------------------------------------------------------
// PROGRAM

const addressBook = {
  displayContacts: function() {
    contacts.forEach(contact => {
      console.log(contact)
    })
  },

  addContact: function(name, phone, email) {
    console.log('ADD CONTACT')
    console.log(name, phone, email)

    contacts.push({
      name,
      phone,
      email
    })
  }
}

// -----------------------------------------------------------------------------
// RUN

addressBook.displayContacts()
addressBook.addContact('Steve', '+1-10101010', 'steve@rogers.com')
addressBook.displayContacts()
