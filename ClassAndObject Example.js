class invoice {
    invoiceNumber = 0;
    invoiceAmount = 0;
}

class person {
    firstName = "";
    lastName = "";
    email = "";
    invoices = [];

    fullName() {
        return firstName.trim() + " " + lastName.trim();
    }

    getInvoiceTotal() {
        var total = 0;
        for (let index = 0; index < invoices.length; index++) {
            total = total + invoices[index].invoiceAmount;
        }
        return total;
    }
}

var namesArray = [];

function SavePerson(firstName, lastName, email) {
    var p = new person();
    p.firstName = firstName;
    p.LastName = lastName;
    p.email = email;
    
    var inv1 = new invoice();
    inv1.invoiceNumber = 1;
    inv1.invoiceAmount = 500;
    p.invoices.push(inv1);
    
    var inv1 = new invoice();
    inv1.invoiceNumber = 2;
    inv1.invoiceAmount = 25;
    p.invoices.push(inv1);

    namesArray.push(p);
}

function ListPeople() {
    for (var index = 0; index < namesArray.length; index++) {
        var p = namesArray[i];
        console.log(p.fullName() 
            + " "
            + p.email
            + " invoice total: $" 
            + p.getInvoiceTotal());
    }
}