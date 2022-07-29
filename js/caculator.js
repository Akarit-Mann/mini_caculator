
let outPutScreem = document.getElementById("outPut");

function display (num) {
    outPutScreem.value += num;
}

function caculate () {
    try {

        outPutScreem.value = eval(outPutScreem.value);
        
    }
    catch (err) {

        alert("try Again You enter wrong things");

    }

}

function Clear(){
    outPutScreem.value = "";
}

function del (){
    outPutScreem.value = outPutScreem.value.slice(0,-1)
}