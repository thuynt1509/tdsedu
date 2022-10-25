/*!
 * thuynt
 * 
 * 
 * @author thuynt
 * @version 2.0.0
 * Copyright 2021. MIT licensed.
 */var playingVideo = false;
var done = false;
var iterator = 0;
var pausedVideo = "";
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function fnIsAppleMobile() {
  if (navigator && navigator.userAgent && navigator.userAgent != null) {
    var strUserAgent = navigator.userAgent.toLowerCase();
    var arrMatches = strUserAgent.match(/(iphone|ipod|ipad|android)/);
    if (arrMatches != null) return false; // true is not autoplay on mobile
  } // End if (navigator && navigator.userAgent)


  return false;
} // End Function fnIsAppleMobile


var players = new Array();
var player = null;
var displayed = false;

window.onYouTubeIframeAPIReady = function () {
  console.log('api ready');
  let intervalCheckInViewPort = setInterval(() => {
    if (isInViewport($(".youtube-video")[0])) {
      var videoYoutubeDOM = $('.youtube-video')[0];
      var getYtID = $(videoYoutubeDOM).data('video-id');
      var getHeight = $(videoYoutubeDOM).data('video-height');

      if (!getHeight || getHeight % 1 !== 0 || getHeight < 200) {
        getHeight = "390";
      }

      iterator++;
      $(videoYoutubeDOM).attr('id', 'player' + iterator);
      player = createPlayer({
        id: 'player' + iterator,
        height: getHeight,
        width: '100%',
        videoId: getYtID,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
      clearInterval(intervalCheckInViewPort);
      displayed = true;
    }
  }, 100);

  if ($('.youtube-video').length != 0) {
    if (!fnIsAppleMobile()) {
      var that = $('.youtube-video').eq(0);
      $(window).scroll(function () {
        var top_of_element = that.offset().top;
        var bottom_of_element = that.offset().top + that.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          if (player && pausedVideo == '' && typeof player.playVideo === 'function') {// player.playVideo();
            //player.mute();
          } else {
            if (player && typeof player.pauseVideo === 'function') {
              player.pauseVideo();
            }
          }
        } else {
          //player.stopVideo();
          if (player && typeof player.pauseVideo === 'function') {
            player.pauseVideo();
          }
        }
      });
    }
  } else {
    console.log("videos not loaded");
  }
};

function createPlayer(playerInfo) {
  // Uncomment to play the first video if it is already in the viewport. This is different from data-autoplay!

  /*
  if(playerInfo.id.slice(-1)=='1')
      playerVars = { 'autoplay': 1, 'controls': 0, 'rel': 0, 'showinfo': 0, 'loop': 1, 'modestbranding': 1 };
  else
      playerVars = { 'autoplay': 0, 'controls': 0, 'rel': 0, 'showinfo': 0, 'loop': 1, 'modestbranding': 1 };
  */
  playerVars = {
    'autoplay': 1,
    'controls': 1,
    'rel': 0,
    'showinfo': 1,
    'loop': 1,
    'modestbranding': 0
  };
  return new YT.Player(playerInfo.id, {
    height: playerInfo.height,
    width: playerInfo.width,
    videoId: playerInfo.videoId,
    autoplay: 1,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function onPlayerReady(event) {
  // Play/pause video's which do not auto play for seamless playback
  event.target.playVideo();
  console.log("onPlayerReady");
  player.playVideo();
}

function onPlayerStateChange(event) {// if (event.data === 2) {
  //     pausedVideo = 'player1';//event.target.a.id;
  // }
  // if (event.data === 1) {
  //     pausedVideo = "";
  // }
  // if (event.data == YT.PlayerState.ENDED) {
  //     pausedVideo = 'player1';
  // }
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //     done = true;
  // }
}

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    // since im using jquery
    el = el[0];
  }

  var rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.right > 0 && rect.left < (window.innerWidth || document.documentElement.clientWidth) && rect.top < (window.innerHeight || document.documentElement.clientHeight);
}