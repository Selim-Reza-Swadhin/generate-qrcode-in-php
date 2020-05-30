$("form#generateQrForm").on("submit",function (e) {
    e.preventDefault();
   let qrText = $("#qrText").val();
   $.post("generate-qr-script.php",{generateQr:'generateQr',qrText:qrText},function (response) {
        let data = response.split('^');
        let generateQrImgPath = data[1];
        $("#generatedQrImg").attr("src",generateQrImgPath);
   })
});
