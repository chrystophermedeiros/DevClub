/*

[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, 
coletando dados sobre o salário e número de filhos. A prefeitura deseja 
saber: 
- média do salário da população; 
- média do número de filhos; 
- maior salário; 
- O final da leitura de dados se dará com a entrada de 
um salário negativo. - Faça isso usando uma função!




*/

const people = [{
        numberOfClhidren: 2,
        salary: 2000
    },

    {
        numberOfClhidren: 5,
        salary: 2500
    },

    {
        numberOfClhidren: 8,
        salary: 3500
    },
    {
        numberOfClhidren: 4,
        salary: 1000
    },
    {
        numberOfClhidren: 1,
        salary: 2500
    },
    {
        numberOfClhidren: 0,
        salary: 200
    },
    {
        numberOfClhidren: 1,
        salary: -2500
    },


]

/*
function findAverageAndhighesSlary(peopleInformation) {
    let averageSalary = 0
    let avarageChildren = 0
    let highestSalary = 0

    for (let i = 0; i <= peopleInformation.length; i++) {
        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberOfClhidren
        if (salary > highestSalary) highestSalary = salary

        if (salary < 0) {
            console.log(`Média de salário R$${(averageSalary / i ).toFixed(0)}`);
            console.log(`Média de de filhos = ${(avarageChildren / i).toFixed(0)}`);
            console.log(`Maior salário é R$${highestSalary}`);
            break
        } else {
            averageSalary = averageSalary + salary;
            avarageChildren += children
        }


    }
}
*/

function findAverageAndhighesSlary(peopleInformation) {
    let i = 0;
    let averageSalary = 0
    let averageChildren = 0
    let highestSalaray = 0

    while (peopleInformation[i].salary > 0) {
        averageSalary += peopleInformation[i].salary
        averageChildren += peopleInformation[i].numberOfClhidren
        peopleInformation[i].salary > highestSalaray ? highestSalaray = peopleInformation[i].salary : highestSalaray = highestSalaray
        i++
    }

    console.log(`Média de salário R$${(averageSalary / i ).toFixed(0)}`);
    console.log(`Média de de filhos = ${(averageChildren / i).toFixed(0)}`);
    console.log(`Maior salário é R$${highestSalaray}`);
}

findAverageAndhighesSlary(people)