class Client {
  constructor(
    username,
    password,
    society,
    contact,
    addres,
    zipcode,
    city,
    phone,
    fax,
    max_outstanding
  ) {
    this.username = username;
    this.password = password;
    this.society = society;
    this.contact = contact;
    this.addres = addres;
    this.zipcode = zipcode;
    this.city = city;
    this.phone = phone;
    this.city = city;
    this.fax = fax;
    this.max_outstanding = max_outstanding;
  }
}

module.exports = Client;
