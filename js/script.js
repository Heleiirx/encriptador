window.onload = function focusElement() {
    document.getElementById("inputEncriptar").focus();

    /*-----------------funcionamiento MODAL-------------*/
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
} 

function copy(){
    let content = document.getElementById('respuesta').innerHTML;
    let modal = document.getElementById("myModal");
    
    navigator.clipboard.writeText(content).then(() => {
        modal.style.display = "block";
        console.log("Text copied to clipboard..."); //If success
    }).catch(err => {
        console.log('Something went wrong', err);//If error
    })
}

function encriptar() {
    var str;
    var arr;

    console.log("encriptar")
    str = document.getElementById("inputEncriptar").value;
    arr = Array.from(str);
    console.log(arr);

    var textoEncriptado =[]; 

    for (let i = 0; i<arr.length; i++) {
        if (arr[i]=="e") {
            textoEncriptado.push("enter"); 
        }
        else if(arr[i]=="i"){
            textoEncriptado.push("imes");
        }
        else if(arr[i]=="a"){
            textoEncriptado.push("ai");
        }
        else if(arr[i]=="o"){
            textoEncriptado.push("ober")
        }
        else if(arr[i]=="u"){
            textoEncriptado.push("ufat")
        }
        else{
            textoEncriptado.push(arr[i]);
        }
        console.log (textoEncriptado);
    }

    var encriptadoFinal = textoEncriptado.join("");
    document.getElementById("monoInicio").innerHTML = "<p class='aviso respuesta' id='respuesta'>" + encriptadoFinal + "</p>";
}

function desencriptar() {
    let str;
    let arr;

    console.log("desencriptar");
    str = document.getElementById("inputEncriptar").value;
    arr = Array.from(str);

    for(let i = 0; i<arr.length; i++){
        if (arr[i] == "e") {
            console.log("if")
            arr.splice(i,5,"e");
            console.log( "textoDesencriptado:::> "+ arr);
        }
        else if(arr[i]=="i"){
            arr.splice(i,4,"i");
        }
        else if(arr[i]=="o"){
            arr.splice(i,4,"o");
        }
        else if (arr[i] == "a") {
            arr.splice(i, 2, "a");
        }
        else if (arr[i] == "u") {
            arr.splice(i, 4, "u");
        }
        else {
            console.log("else")
            console.log("textoDesencriptado:::> " + arr);
        }
        console.log(arr);

    }
    document.getElementById("monoInicio").innerHTML = "<p class='aviso respuesta' id='respuesta'>" + (arr.join("")) + "</p>";

}

function toLower() {
    let txtInput = document.getElementById("inputEncriptar").value;
    document.getElementById("inputEncriptar").value = txtInput.replace(/[^a-z]/,'');
}

// this.value = this.value.replace(/[^a-zA-Z0-9]/,'')
