fileInputButton = document.getElementById("fileInput");
refTextField = document.getElementById("referenceText");
fileSendButton = document.getElementById("csvSendButton");

fileInputButton.addEventListener("click", fileInput);
fileSendButton.addEventListener("click", sendFile);


async function fileInput(){
    // メインプロセスへイベントを起こす
    const response = await window.myAPI.fileOpen();

    refTextField.textContent = response;
    // 読み込み結果を処理する
    
}

async function sendFile() {
    const response = await window.myAPI.fileSend();

    console.log(response);
}