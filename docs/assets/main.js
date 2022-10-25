/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getOffset(el) {
  var rect = el.getBoundingClientRect();
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
  } else {// console.log("width large")
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
  $('.btn-send-info').click(function () {
    var username = $.trim($('#username').val());
    var phone_number = $.trim($('#phone_number').val());

    if (username == '') {
      $('#username_error').text('Không để trống!');
    } else {
      $('#username_error').text('').hide();
    }

    if (phone_number == '' || !/^[0-9]{10}$/.test(phone_number)) {
      $('#phone_error').text('Số điện thoại không đúng định dạng!');
    } else {
      $('#phone_error').text('');
    }
  });
  $("#ads-form").on('click', 'input:checkbox', function () {
    $(this).closest('p').toggleClass('active', this.checked);
  }); // close modal

  $(".close-modal").click(function () {
    $(".modal").removeClass('show');
  });
  $(".btn-open-modal-order").click(function () {
    $("#modal-order").addClass("show");
  });
  $(function () {
    var $win = $(".modal");
    var $box = $(".modal-content");
    $win.on("click.Bst", function (event) {
      if ($box.has(event.target).length == 0 && !$box.is(event.target)) {
        $(".modal").removeClass('show');
      } else {}
    });
  }); // close modal

  $(".btn-number-4").click(function () {
    $("#number-max").val(4);
  });
}); // function validate form

$(function () {
  set_($('#number-max'), 100); //return 3 maximum digites

  function set_(_this, max) {
    var block = _this.parent();

    block.find(".increase").click(function () {
      var currentVal = parseInt(_this.val());
      console.log(currentVal);

      if (currentVal != NaN && currentVal + 1 <= max) {
        _this.val(currentVal + 1); // $('#total-order').val((currentVal + 1) * parseInt(price));


        var num_price = (currentVal + 1) * parseInt(price);
        var price_num = num_price.toLocaleString(); // console.log(price_num);

        $('#total-order').val(price_num + ' VND');
      }
    });
    block.find(".decrease").click(function () {
      var currentVal = parseInt(_this.val());

      if (currentVal != NaN && currentVal > 1) {
        _this.val(currentVal - 1); // $('#total-order').val((currentVal - 1) * parseInt(price));


        var num_price = (currentVal - 1) * parseInt(price);
        var price_num = num_price.toLocaleString(); // console.log(price_num);

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
    } else {
      var currentVal = parseInt(_this.val());
    }
  });
}); //update main js validate form

var messagesName = 'Họ tên bắt buộc';
var messagesPhone = 'Số điện thoại bắt buộc';
$(document).ready(function () {
  jQuery.validator.addMethod("checkphone", function (phone_number, element) {
    var regExp = /(0)(3|5|7|8|9)+([0-9]{8})\b/;
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number.length == 10 && phone_number.match(regExp);
  }, "SĐT không hợp lệ!");
  setCookieUtm();

  if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    messagesName = '*';
    messagesPhone = '*';
  }
  /* ------------------ form fix top header ------------------ */


  var formTopFields = [{
    name: 'fullName',
    rules: {
      required: true
    },
    messages: 'Họ tên bắt buộc'
  }, {
    name: 'phone',
    rules: {
      required: true,
      checkphone: true
    },
    messages: 'Số điện thoại bắt buộc'
  }];
  createOpp("#form-fix-top", formTopFields);
  /* ------------------ form header ------------------ */

  var headerFields = [{
    name: 'fullName',
    rules: {
      required: true
    },
    messages: messagesName
  }, {
    name: 'phone',
    rules: {
      required: true,
      checkphone: true
    },
    messages: messagesName
  }];
  createOpp("#ads-form-header", headerFields);
  /* ------------------ form info ------------------ */

  var infoFields = [{
    name: 'fullName',
    rules: {
      required: true
    },
    messages: 'Họ tên bắt buộc'
  }, {
    name: 'phone',
    rules: {
      required: true,
      checkphone: true
    },
    messages: 'Số điện thoại bắt buộc'
  }];
  createOpp("#ads-form", infoFields);
  /* ------------------ form register ------------------ */

  var registerFields = [{
    name: 'phone',
    rules: {
      required: true,
      checkphone: true
    },
    messages: 'Số điện thoại bắt buộc'
  }];
  createOpp("#form-register", registerFields);
  /* ------------------ form form-order ------------------ */

  var orderFields = [{
    name: 'fullName',
    rules: {
      required: true
    },
    messages: 'Họ tên bắt buộc'
  }, {
    name: 'phone',
    rules: {
      required: true,
      checkphone: true
    },
    messages: 'Số điện thoại bắt buộc'
  }, {
    name: 'address',
    rules: {
      required: false
    },
    messages: 'Địa chỉ bắt buộc'
  }, {
    name: 'quantity',
    rules: {
      required: false
    },
    messages: ''
  }];
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

    var _iterator = _createForOfIteratorHelper(fields),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        rulesForm[v.name] = v.rules;
        messagesError[v.name] = {
          required: v.messages
        };
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    $(idForm).validate({
      ignore: ":hidden",
      rules: rulesForm,
      messages: messagesError,
      submitHandler: function submitHandler(form) {
        $('#loading-request').show();
        $(form).find('buton').prop('disabled', true);
        var dataPost = {};
        var utmCode = getCookieUtm('utm_code');

        if (utmCode === undefined) {
          utmCode = '';
        }

        dataPost.advertisingSource = utmCode;

        var _iterator2 = _createForOfIteratorHelper(fields),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var v = _step2.value;
            dataPost[v.name] = $(idForm).find('.' + v.name).val();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        $.ajax({
          type: "POST",
          url: "php/action.php",
          data: dataPost,
          success: function success(response) {
            $('#loading-request').hide();
            $(form).find('buton').prop('disabled', false);

            if (response.success === true) {
              var _iterator3 = _createForOfIteratorHelper(fields),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var v = _step3.value;

                  if (v.name === 'quantity') {
                    $(idForm).find('.' + v.name).val(1);
                  } else {
                    $(idForm).find('.' + v.name).val('');
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
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
  var domain = window.location.hostname;
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var utm_source = urlParams.get('utm_source');
  var utm_medium = urlParams.get('utm_medium');
  var utm_campaign = urlParams.get('utm_campaign');
  var utm_adgroup = urlParams.get('utm_adgroup');
  var utm_adset = urlParams.get('utm_adset');
  var utm_code = urlParams.get('utm_code');

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
  var domain = window.location.hostname;
  return $.cookie(domain + prefixKey + '-' + key);
}

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/otp.scss":
/*!**********************!*\
  !*** ./src/otp.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/docs/assets/main": 0,
/******/ 			"docs/assets/otp": 0,
/******/ 			"docs/assets/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktailwind_html_boilerplate"] = self["webpackChunktailwind_html_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["docs/assets/otp","docs/assets/main"], () => (__webpack_require__("./src/app.js")))
/******/ 	__webpack_require__.O(undefined, ["docs/assets/otp","docs/assets/main"], () => (__webpack_require__("./src/app.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["docs/assets/otp","docs/assets/main"], () => (__webpack_require__("./src/otp.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;