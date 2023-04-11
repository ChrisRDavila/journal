

//export default function 

// Business Logic for AddressBook ---------
function AddressBook() {
  this.Entry = {};
  this.currentId = 0;
}

// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts[contact.id] = contact;
// };

// AddressBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;cd
// };

// AddressBook.prototype.findContact = function(id) {
//   if (this.contacts[id] !== undefined) {
//     return this.contacts[id];
//   }
//   return false;
// };

// AddressBook.prototype.deleteContact = function(id) {
//   if (this.contacts[id] === undefined) {
//     return false;
//   }
//   delete this.contacts[id];
//   return true;
// };

// Business Logic for Contacts ---------
function Journal(firstName, lastName, title, body, Entry, getTeaser) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
  this.body = body;
  this.Entry = Entry;
  this.getTeaser = getTeaser 
}

Journal.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

function Entry(wourdCount, numbervowel, numberconsonants) {
  this.wourdCount = wourdCount;
  this.numbervowel = numbervowel;
  this.numberconsonants = numberconsonants;
}
function wordCount(str) {
  return str.split(' ').filter(function(num) {
   return num != ''
  }).length;
 };


function countVowel(str) {
  let vowelsCount = 0;
  const vowelArray = ['a', 'e', 'i', 'o', 'u']
  for (let element of str){
    if (vowelArray.includes(element)) {
      vowelsCount ++;
    }
  }
  return vowelsCount;
}


function consonantCount(str) {
  let consCount = 0;
  let consArray = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  for (let element of str) {
    if (consArray.includes(element)) {
      consCount ++;
    }
  }
  return consCount;
}

function getTeaser(firstEight) {
  
}

