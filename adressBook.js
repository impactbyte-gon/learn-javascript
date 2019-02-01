let addressBook = [
  {
    name: 'Haidar',
    phone: '+62-8-1993-101010',
    email: 'mhaidarhanif@gmail.com'
  },
  {
    name: 'Fajrin',
    phone: '+62-8-1010-101010',
    email: 'fajrinfajrin@gmail.com'
  }
]

const displayContacts = function() {
  console.log(addressBook)
}

const addContact = function(name, phone, email) {
  addressBook.push({
    name,
    phone,
    email
  })
}

const deleteContact = function(name) {
  addressBook = addressBook.filter(contact => {
    return contact.name !== name
  })
}

addContact('Jonathan', '+1-1010-101010', 'jonathan@gmail.com')
