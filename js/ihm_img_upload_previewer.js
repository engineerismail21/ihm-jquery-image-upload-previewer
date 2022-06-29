let mItImgUplPreviewer = jQuery('.mItImgUplPreviewer');
if (mItImgUplPreviewer.length > 0) {
    mItImgUplPreviewer.each(function(){
        let uploadedType = jQuery(this).attr('data-uploaded-type');
        let fileName = jQuery(this).attr('data-file-name');
        let previewHtml = jQuery(this).find('.preview-loader').html();

        jQuery(this).html('<div class="file-uploader-box">' +
            '<div class="preview-loader">' + previewHtml + '</div>' +
            '<div class="input-box">' +
            '<input type="file" class="photo-uploader" name="' + fileName + '" ' + (uploadedType == "multiple" ? "multiple" : "") + '>' +
            '</div>' +
            '</div>');
    });

    function masterItUploadedImagePreviewer(input, parent) {
        if (input.files) {
            let previewContainer = parent.find('.preview-loader');
            previewContainer.html('');

            let noOfFiles = input.files.length;

            for (let i = 0; i < noOfFiles; i++) {
                let reader = new FileReader();

                reader.onload = function (event) {
                    previewContainer.append($($.parseHTML('<img>')).attr('src', event.target.result));
                }

                reader.readAsDataURL(input.files[i]);
            }
        }
    };

    $('input[type=file].photo-uploader').on('change', function () {
        masterItUploadedImagePreviewer(this, $(this).parents('.file-uploader-box'));
    });
}
