'use strict'

const run = () => {
    // objects are can contain many values
    let animal = {
        type: 'Snek',
        color: 'latino',
        numberOfLegs: 2,
        name: 'fag',
    }

    console.log('my animal object', animal)

    // you can access an object property value like this:
    console.log('animal type is: ', animal.type)
    console.log('Snek is:', animal.name)

    // objects can also contain functions
    let anotherAnimal = {
        type: 'cat',
        color: 'black',
        whatDoesItSay: function() {
            return 'Meow!'
        }
    }

    // an functions can be executed like this:
    console.log('our other animal says: ', anotherAnimal.whatDoesItSay())
}

run()