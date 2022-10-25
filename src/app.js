

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

$(document).ready(function () {
    var $theWindowSize = $(this).width();
    var item1 = $("#slide1").html(); 
    var item2 = $("#slide2").html(); 
    $(window).scroll(function () {
        if ($('#box-reason').length > 0) {
            if ($(this).scrollTop() + 300 < getOffset($('#box-reason')[0]).top) {
             $("#box-ads-header").removeClass("hidden-form");
            } else {
              $("#box-ads-header").addClass("hidden-form");
            }
          }
    });
    if ($(window).width() < 567) {
        $("#box-tt").empty().append(item1).append(item2);
    }
    else {
        // console.log("width large")
    }
    $(".loading-start").hide();
    $(".lst-detail-info li").click(function () {
        $(this).toggleClass("active");
    });

    $(window).scroll(function () {
        if ($('#box-reason').length > 0) {
          if ($(this).scrollTop() + 300 < getOffset($('#box-reason')[0]).top) {
           $(".header").removeClass("block");
           $(".header").addClass("hidden");
          } else {
            $(".header").addClass("block");
            $(".header").removeClass("hidden");
          }
        }
        if ($('#box-showform').length > 0) {
            if ($(this).scrollTop() + 300 < getOffset($('#box-showform')[0]).top) {
             $("#form-fix-top").removeClass("hidden");
            } else {
              $("#form-fix-top").addClass("hidden");
            }
          }
      });

    $("#btn-close-ads").click(function () {
        $(".box-ads-header").addClass('close-ads');
    });

    $('.btn-send-info').click(function(){
        var username    = $.trim($('#username').val());
        var phone_number    = $.trim($('#phone_number').val());
        if (username == ''){
            $('#username_error').text('Không để trống!');
        }
        else{
            $('#username_error').text('').hide();
        }

        if (phone_number == '' ||  !/^[0-9]{10}$/.test(phone_number)){
            $('#phone_error').text('Số điện thoại không đúng định dạng!');
        }
        else {
            $('#phone_error').text('');
        }
    });
    $("#ads-form").on('click', 'input:checkbox', function() {
        $(this).closest('p').toggleClass('active', this.checked);
    });
    // close modal
    $(".close-modal").click(function () {
        $(".modal").removeClass('show');
    });
    $(".btn-open-modal-order").click(function () {
        $("#modal-order").addClass("show");
    });
    $(function(){				
        var $win = $(".modal"); 
        var $box = $(".modal-content");
        
         $win.on("click.Bst", function(event){		
            if ( 
                $box.has(event.target).length == 0 
            &&
                !$box.is(event.target) 
            ){
                $(".modal").removeClass('show');
            } else {
               
            }
        });
    });
    // close modal

    $(".btn-number-4").click(function(){
        $("#number-max").val(4);
    });
});
// function validate form

$(function () {
    set_($('#number-max'), 100); //return 3 maximum digites

    function set_(_this, max) {
        var block = _this.parent();

        block.find(".increase").click(function () {
            var currentVal = parseInt(_this.val());
            console.log(currentVal);

            if (currentVal != NaN && currentVal + 1 <= max) {
                _this.val(currentVal + 1);

                // $('#total-order').val((currentVal + 1) * parseInt(price));
                var num_price = (currentVal + 1) * parseInt(price);
                var price_num = num_price.toLocaleString();
                // console.log(price_num);
                $('#total-order').val(price_num + ' VND');
            }
        });
        block.find(".decrease").click(function () {
            var currentVal = parseInt(_this.val());

            if (currentVal != NaN && currentVal > 1) {
                _this.val(currentVal - 1);

                // $('#total-order').val((currentVal - 1) * parseInt(price));
                var num_price = (currentVal - 1) * parseInt(price);
                var price_num = num_price.toLocaleString();
                // console.log(price_num);
                $('#total-order').val(price_num + ' VND');
            }
        });
    }
});
$(function () {
    $(".input-number").keypress(function (e) {
        if (e.which != 13 && e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#errmsg").html("Chỉ nhập số").stop().show().fadeOut("slow");
            return false;
        }else{
            var currentVal = parseInt(_this.val());
        }
    });
});


//update main js validate form
var messagesName = 'Họ tên bắt buộc';
var messagesPhone = 'Số điện thoại bắt buộc';
$(document).ready(function () {

    jQuery.validator.addMethod("checkphone", function (phone_number, element) {
        var regExp = /(0)(3|5|7|8|9)+([0-9]{8})\b/;
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length ==10 &&
              phone_number.match(regExp);
      }, "SĐT không hợp lệ!");
        
    setCookieUtm();

    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        messagesName = '*';
        messagesPhone = '*';
    }
    /* ------------------ form fix top header ------------------ */
    let formTopFields = [
        {name: 'fullName',  rules: {required: true}, messages: 'Họ tên bắt buộc'},
        {name: 'phone', rules: {required: true, checkphone: true}, messages: 'Số điện thoại bắt buộc'}
    ];
    createOpp("#form-fix-top", formTopFields);

    /* ------------------ form header ------------------ */
    let headerFields = [
        {name: 'fullName',  rules: {required: true}, messages: messagesName},
        {name: 'phone', rules: {required: true, checkphone: true}, messages: messagesName}
    ];
    createOpp("#ads-form-header", headerFields);

    /* ------------------ form info ------------------ */
    let infoFields = [
        {name: 'fullName',  rules: {required: true}, messages: 'Họ tên bắt buộc'},
        {name: 'phone', rules: {required: true, checkphone: true}, messages: 'Số điện thoại bắt buộc'}
    ];
    createOpp("#ads-form", infoFields);

    /* ------------------ form register ------------------ */
    let registerFields = [
        {name: 'phone', rules: {required: true, checkphone: true}, messages: 'Số điện thoại bắt buộc'},
    ];
    createOpp("#form-register", registerFields);

    /* ------------------ form form-order ------------------ */
    let orderFields = [
        {name: 'fullName',  rules: {required: true}, messages: 'Họ tên bắt buộc'},
        {name: 'phone', rules: {required: true, checkphone: true}, messages: 'Số điện thoại bắt buộc'},
        {name: 'address',  rules: {required: false}, messages: 'Địa chỉ bắt buộc'},
        {name: 'quantity',  rules: {required: false}, messages: ''}
    ];
    createOpp("#form-order", orderFields);

    $(document).on("click", "#close-modal", function () {
        $('#modal-notif').modal('hide');
    });

    $(document).on("change", "#number-max", function () {
        if ($(this).val() < 1) {
            $(this).val(1);
        }
        var num_price = parseInt($(this).val()) * parseInt(price);
        var price_num = num_price.toLocaleString();
        $('#total-order').val(price_num + ' VND');
    });
});

/**
 *
 * @param idForm : # + idFrom
 * @param fields
 * [{name: ten truwng, required: tru, messages: 'truonng bat buoc'}]
 */
 function createOpp(idForm, fields) {
    if (fields.length > 0 && $(idForm).length > 0) {
      var rulesForm = {};
      var messagesError = {};
  
      for (const v of fields) {
        rulesForm[v.name] = v.rules;
        messagesError[v.name] = {
          required: v.messages
        };
      }
  
      $(idForm).validate({
        ignore: ":hidden",
        rules: rulesForm,
        messages: messagesError,
        submitHandler: function (form) {
          $('#loading-request').show();
          $(form).find('buton').prop('disabled', true);
          var dataPost = {};
          let utmCode = getCookieUtm('utm_code');
  
          if (utmCode === undefined) {
            utmCode = '';
          }
  
          dataPost.advertisingSource = utmCode;
  
          for (const v of fields) {
            dataPost[v.name] = $(idForm).find('.' + v.name).val();
          }
  
          $.ajax({
            type: "POST",
            url: "php/action.php",
            data: dataPost,
            success: function (response) {
              $('#loading-request').hide();
              $(form).find('buton').prop('disabled', false);
  
              if (response.success === true) {
                for (const v of fields) {
                  if (v.name === 'quantity') {
                    $(idForm).find('.' + v.name).val(1);
                  } else {
                    $(idForm).find('.' + v.name).val('');
                  }
                }
  
                $('#modal-success').addClass('show');
              } else {
                $('#modal-notif').addClass('show');
              }
            }
          });
          return false;
        }
      });
    }
  }

function setCookieUtm() {
    const domain = window.location.hostname;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const utm_source = urlParams.get('utm_source');
    const utm_medium = urlParams.get('utm_medium');
    const utm_campaign = urlParams.get('utm_campaign');
    const utm_adgroup = urlParams.get('utm_adgroup');
    const utm_adset = urlParams.get('utm_adset');
    const utm_code = urlParams.get('utm_code');

    if (utm_source != null && utm_source != '') {
        $.cookie(domain + prefixKey + '-utm_source', utm_source, {
            expires: expiresCookie
        });
    }

    if (utm_medium != null && utm_medium != '') {
        $.cookie(domain + prefixKey + '-utm_medium', utm_medium, {
            expires: expiresCookie
        });
    }

    if (utm_campaign != null && utm_campaign != '') {
        $.cookie(domain + prefixKey + '-utm_campaign', utm_campaign, {
            expires: expiresCookie
        });
    }

    if (utm_adgroup != null && utm_adgroup != '') {
        $.cookie(domain + prefixKey + '-utm_adgroup', utm_adgroup, {
            expires: expiresCookie
        });
    }

    if (utm_source != null && utm_source != '') {
        $.cookie(domain + prefixKey + '_utm_source', utm_source, {
            expires: expiresCookie
        });
    }
    if (utm_adset != null && utm_adset != '') {
        $.cookie(domain + prefixKey + '-utm_adset', utm_adset, {
            expires: expiresCookie
        });
    }

    if (utm_code != null && utm_code != '') {
        $.cookie(domain + prefixKey + '-utm_code', utm_code, {
            expires: expiresCookie
        });
    }
}

function getCookieUtm(key) {
    const domain = window.location.hostname;
    return $.cookie(domain + prefixKey + '-' + key);
}

