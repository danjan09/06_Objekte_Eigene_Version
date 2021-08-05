
/***** Erinnerung: Arrays *******/
// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[2]);

// arr = [["Ich","bin","Max"],["Ich","bin","Moritz"]];
// output(arr[0][2]);
// output(arr[1][2]);



/***** Objekte 2 Hierarchie *******/

let baikal ={
        wert:"10",
        deep:{
                deeper:{
                        deepest:"Das Licht - auf 1642m!"
                }
        }
}

output(baikal.wert);
output(baikal.deep.deeper.deepest);


/***** Objekte 1 Daten/Funktionen *******/

let person = 
{
        firstName:"Max",
        familyName:"König",
        salary:[12000,16000],
        hasPermission: true,
        sayHello:
                function(){
                        return  "Hi, ich bin " + this.familyName + "!";  // this -> von innen zugreifen
                }
};



// output(person);
// output(person.firstName);
// output(person.familyName);
// output(person.salary[0]);
// output(person.hasPermission);
// output(person.sayHello());

const txt =     "Ich bin " + person.firstName + " " +
                person.familyName + " und verdiene " +
                person.salary[1] + " p.a."
// output(txt);


/** Ausgabe */
function output(outputStr) {
        console.log(outputStr);
}