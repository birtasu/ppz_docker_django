$('document').ready(function(){
    var form = $('#new_protocol');

    form.on('submit', function(e){
        e.preventDefault();
        var instrument = $('#instrument').val();
        var shift = $('#shift').val();
        var theme =  $("#theme").val();
        var table_preview = $('.table_preview tbody');
        var unique_nmb = getUniqueNmb();

        var data = {};
        data.instrument = instrument;
        data.shift = shift;
        data.theme = theme;
        data.unique_nmb = unique_nmb;
        data["csrfmiddlewaretoken"] = getCookie('csrftoken');

         $.ajax({
             url: '/new_protocol/',
             type: 'POST',
             data: data,
             cache: true,
             success: function (data) {
                 console.log("OK");
                 if(data.status == 'Normal'){
                    $('.table_preview_container').show();
                    table_preview.append('<tr><td>'+ instrument +'</td><td>'+ theme +'</td><td>'+ shift +'</td><td><span class="fa fa-trash table_preview_del_row" data-unique_nmb="'+ unique_nmb +'"></span></td></tr>');
                 }
             },
             error: function(){
                 console.log("error")
             }
         })
    });

    $('html').on('click', '.table_preview_del_row', function(){
        var a = $(this);
        var csrftoken = getCookie('csrftoken');
        var unique_nmb = a.data('unique_nmb');
        var data = {};

        data["csrfmiddlewaretoken"] = csrftoken;
        data["unique_nmb"] = unique_nmb;

        $.ajax({
            url: '/preview_del_row/',
            type: 'POST',
            data: data,
            success: function (data) {
                a.closest("tr").remove();
                if ($('.table_preview tr').length <=1){
                    $('.table_preview_container').hide();
                }
            },
            error: function(){
                alert('error');
            }
        })

    });

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    function getUniqueNmb(){
        var date = new Date();
        var components = [
            date.getYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];

        return components.join("");
    }
});