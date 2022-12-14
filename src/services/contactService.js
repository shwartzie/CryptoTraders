import img from '../images/Avatar.png'
import { storageService } from './storageService'
import { utilService } from './utilService.js'
export const contactService = {
    getContacts,
    getContactById,
    deleteContact,
    saveContact,
    getEmptyContact,
    query,
    getContctBalance,
    getType,
    saveContacts
}

const STORAGE_KEY = 'contacts'

const gDefaultContacts = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "fullname": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": [],
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "fullname": "Hallie Mclean",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": [],
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "fullname": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": [],
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "fullname": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": [],
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "fullname": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "phone": "+1 (807) 551-3258",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": [],
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "fullname": "Shana Pope",
        "email": "shanapope@renovize.com",
        "phone": "+1 (970) 527-3082",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "fullname": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "phone": "+1 (952) 501-2678",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "fullname": "Holder Bean",
        "email": "holderbean@renovize.com",
        "phone": "+1 (989) 503-2663",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "fullname": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "fullname": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "fullname": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "fullname": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "fullname": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "phone": "+1 (963) 471-3181",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a56640298ab77236845b82b",
        "fullname": "Glenna Santana",
        "email": "glennasantana@renovize.com",
        "phone": "+1 (860) 467-2376",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "fullname": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "fullname": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "fullname": "Grace James",
        "email": "gracejames@renovize.com",
        "phone": "+1 (959) 525-2529",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "fullname": "Tanner Gates",
        "email": "tannergates@renovize.com",
        "phone": "+1 (978) 591-2291",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "fullname": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812",
        "imgUrl": `${img}`,
        "balance": {
            "bitcoin": _genterateRandomInt(1, 100),
            "ethereum" : _genterateRandomInt(1, 100)
        }, 
        "movements": {
            "sells": _generateRandomAmount(),
            "buys": _generateRandomAmount(),
            "trades": _generateRandomAmount(),
            "datesWhenTraded": _generateRandomAmountOfDates(),
            "transfers": _generateRandomAmount(),
            "profit": _generateRandomAmount()
        }
    }
];

function getType () {
    return {
        CONTACT: 'contact'
    }
}

function _generateRandomAmount (a = 1, b = 1000) {
    const container = []
    for(let i = 0; i < 10; i++) {
        container.push(utilService.getRandomInt(a, b))
    }
    return container
}

function _genterateRandomInt(a = 1, b = 100) {
    return utilService.getRandomInt(a, b)
}

function _generateRandomAmountOfDates() {
    const container = []
    for(let i = 0; i < utilService.getRandomInt(5, 15); i++) {
        const timestamp = utilService.getRandomInt(100000, 1000000000)
        container.push(new Date(timestamp))
    }
    return container
}

const gContacts = loadContacts()


function query(filterBy) {
    let contactsToReturn = storageService.load(STORAGE_KEY) || gContacts;
    if (filterBy) {
        var { fullname, phone } = filterBy
        contactsToReturn = gContacts.filter(
            contact => contact.fullname.toLowerCase().includes(fullname.toLowerCase())
                && contact.phone.toLowerCase().includes(phone.toLowerCase())
        )
    }
    return Promise.resolve([...contactsToReturn]);
}


function loadContacts() {
    let contacts = storageService.load(STORAGE_KEY)
    if (!contacts || !contacts.length) contacts = gDefaultContacts
    storageService.store(STORAGE_KEY, contacts)
    return contacts
}

function saveContacts (contacts) {
    storageService.store(STORAGE_KEY, contacts)
    return Promise.resolve([...contacts]);
}

function sort(arr) {
    return arr.sort((a, b) => {
        if (a.fullname.toLocaleLowerCase() < b.fullname.toLocaleLowerCase()) {
            return -1;
        }
        if (a.fullname.toLocaleLowerCase() > b.fullname.toLocaleLowerCase()) {
            return 1;
        }

        return 0;
    })
}

function getContacts(filterBy = null) {
    return new Promise((resolve, reject) => {
        var contactsToReturn = gContacts;
        if (filterBy && filterBy.term) {
            contactsToReturn = filter(filterBy.term)
        }
        resolve(sort(contactsToReturn))
    })
}

function getContactById(id) {
    return new Promise((resolve, reject) => {
        const contact = gContacts.find(contact => contact._id === id)
        contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
    return new Promise((resolve, reject) => {
        const index = gContacts.findIndex(contact => contact._id === id)
        if (index !== -1) {
            gContacts.splice(index, 1)
        }

        resolve(gContacts)
    })
}

function _updateContact(contact) {
    return new Promise((resolve, reject) => {
        const index = gContacts.findIndex(c => contact._id === c._id)
        if (index !== -1) {
            gContacts[index] = contact
            storageService.store(STORAGE_KEY, gContacts)
        }
        resolve(contact)
    })
}

function _addContact(contact) {
    return new Promise((resolve, reject) => {
        contact._id = utilService.makeId()
        gContacts.push(contact)
        storageService.store(STORAGE_KEY, gContacts)
        resolve(contact)
    })
}

function saveContact(contact) {
    return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
    return {
        fullname: '',
        email: '',
        phone: '',
        balance: {
            bitcoin: 0,
            ethereum: 0
        },
        movements: {
            sells: 0,
            buys: 0,
            trades: 0,
            datesWhenTraded: [],
            transfers: [],
            profit: 0
        }
    }
}

function filter(term) {
    term = term.toLocaleLowerCase()
    return gContacts.filter(contact => {
        return contact.fullname.toLocaleLowerCase().includes(term) ||
            contact.phone.toLocaleLowerCase().includes(term) ||
            contact.email.toLocaleLowerCase().includes(term)
    })
}

function getContctBalance(contactId) {
    const contact = getContactById(contactId)
    return contact.balance
}

