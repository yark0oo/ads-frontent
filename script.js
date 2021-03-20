$(document).ready(function() {

    var arrayAds = new Array();

    $("#add").click(function() {
        
        $("#modal").show();
    });

    $("#close").click(function() {
        
        $("#modal").hide();
    });








    $("#new").click(function() {
       
        var ad = {
            text: $("input[name='text']").val(),
            name: $("input[name='name']").val(),
            phone: $("input[name='phone']").val()
        }

        $.ajax({
            type: 'POST',
            url: 'http://localhost/api.php?add',
            data:ad,
            success: function(data) {
                init();
            }
        });

        

        $("#modal").hide();
    });


    function renderAds() {
        $("#content").html('');

        arrayAds.map(ad => {
            var adHTML = 
            '<div class="Ads__box">' +
                '<div class="Box__info">' + ad.text + '</div>' +
                '<div class="Box__name">' + ad.contactName + '</div>' +
                '<div class="Box__phone">' + ad.contactPhone + '</div>' +
            '</div>';
        
            $("#content").append(adHTML);
        });
    }


    init();

    function init() {
        arrayAds=[];

        $.ajax({
            type: 'GET',
            url: 'http://localhost/api.php?all',
            success: function(data) {
                console.log(data);

                data.map(element => {
                    console.log(element);
                    var ad = {
                        text: element.text,
                        contactName: element.name,
                        contactPhone: element.phone
                    }

                    arrayAds.push(ad);
                    renderAds();
                });
            }
        });
    }
});