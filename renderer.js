fileInputButton = document.getElementById("fileInput");
refTextField = document.getElementById("referenceText");
fileSendButton = document.getElementById("csvSendButton");
fileList = document.getElementById("fileList");
triggerList = document.getElementsByClassName("clickableList")
createGraphButton = document.getElementById("createGraphButton");


fileInputButton.addEventListener("click", fileInput);
fileSendButton.addEventListener("click", sendFile);
createGraphButton.addEventListener("click", createGraph);

async function createGraph() {
    const response = await window.myAPI.pythonGraph();
    console.log("hoge")
    console.log(response)
    item = JSON.parse(response);
    Bokeh.embed.embed_item(item);
};

async function fileInput(){
    // メインプロセスへイベントを起こす
    const response = await window.myAPI.fileOpen();

    refTextField.textContent = response;
    // 読み込み結果を処理する
    
}

async function sendFile() {
    const response = await window.myAPI.fileSend();

    // 子要素をすべて削除
    while(fileList.firstChild){
        fileList.removeChild(fileList.firstChild);
    };

    response.forEach((i) => {
        let tmp = document.createElement("li");
        tmp.textContent = i;
        tmp.className = "clickableList";
        tmp.addEventListener("click", sendSignal);
        fileList.appendChild(tmp);
    });

    console.log(fileList);

}

function sendSignal(e) {
    // クリックした要素の表示を送る
    console.log(e.srcElement.textContent);
}