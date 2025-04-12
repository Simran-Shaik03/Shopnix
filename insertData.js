

  const quill = new Quill('#editor', {
    modules: {
      toolbar: '#toolbar'
    },
    theme: 'snow'
  });

  
  $(document).ready(function() {
    $('#productName').on('input', function() {
      $('#previewTitle').text($(this).val() || 'Product title');
    });

    $('#netPrice').on('input', function() {
      $('#previewNetPrice').text('Rs ' + ($(this).val() || '0'));
    });

    $('#listPrice').on('input', function() {
      $('#previewListPrice').text('Rs ' + ($(this).val() || '0'));
    });

    $('#productImage').on('change', function(event) {
      const reader = new FileReader();
      reader.onload = function(e) {
        $('#previewImage').attr('src', e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    });

    
    quill.on('text-change', function () {
      const html = quill.root.innerHTML;
      $('#previewDesc').html(html);
    });
  });