//comece aqui
//array vazio que terá os nomes dos alunos
var nameOfStudentArray =[];

//array para mostrar os nomes
var displayStudentArray =[];

function submit(){

for(var j=1; j<=4; j++){
    var nameOfTheStudent = document.getElementById("nameOfTheStudent" + j).value;
    console.log(nameOfTheStudent);
    nameOfStudentArray.push(nameOfTheStudent);
}
    //escrevendo o array com os nomes
    console.log(nameOfStudentArray);

    //descobrindo o comprimento do array   
    var lenghtOfNameOfStudentArray = nameOfStudentArray.length;
    console.log(lenghtOfNameOfStudentArray);

    for(var k=0; k<lenghtOfNameOfStudentArray; k++){
        displayStudentArray.push("<h4>NAME - " + nameOfStudentArray[k]+ "</h4>");
        console.log(displayStudentArray);
    }

    //imprimindo os nomes dentro do element HTML
    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

    //para remover as virgulas
    var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas);

    //imprimindo com remove commas 
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;

    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display="inline-block";
}

//criando a função sort
function sorting(){
    //organizando o array
    nameOfStudentArray.sort();

    //verificando se organizou os coteúdos
    console.log(nameOfStudentArray);

    //criando um array para guardar os nomes organizados
    var displayStudentArraySorting =[];

    var lenghtOfNameOfStudentArray = nameOfStudentArray.length;
    //imprimindo no console para conferir
    console.log(displayStudentArraySorting);

    for(var k=0; k<lenghtOfNameOfStudentArray;k++){
        displayStudentArraySorting.push("<h4>NAME - " + nameOfStudentArray[k] + "</h4>");
        console.log(displayStudentArraySorting)

        var removeCommas = displayStudentArraySorting.join(" ");
        console.log(removeCommas);

        document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
    }



}