$(document).ready(function () {
    $('#storeName').on('input', function () {
      $('#previewStoreName').text($(this).val() || 'Store Name');
    });

    $('#storeTitle').on('input', function () {
      $('#previewStoreTitle').text($(this).val() || 'Store Title');
    });

    $('#supportEmail').on('input', function () {
      $('#previewEmail').text($(this).val() || 'example@email.com');
    });

    $('#supportPhone').on('input', function () {
      $('#previewPhone').text($(this).val() || '9999999999');
    });

    $('#supportToggle').on('change', function () {
      if ($(this).is(':checked')) {
        $('#supportFields').slideDown();
        $('#previewEmail, #previewPhone').show();
      } else {
        $('#supportFields').slideUp();
        $('#previewEmail, #previewPhone').hide();
      }
    });

    $('#logoUpload').on('change', function (e) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#previewLogo').attr('src', e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    });

    $('#faviconUpload').on('change', function (e) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#previewFavicon').attr('src', e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    });
  });