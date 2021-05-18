/**
 * @version 0.1
 */

const $ = function(str){
    return document.querySelector(str);
}


EventTarget.prototype.$addEventListener = function(actions,func){
    let arr = actions.split(" ");
    for(let i=0; i<arr.length; i++){
        this.addEventListener(arr[i],func);
    }
};


const $filedownload = function(str,fileName,extension){
    let blob = new Blob([str],{type:"text/"+extension});//issue?
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName +'.'+ extension;
    link.click();
    link.remove();
}

