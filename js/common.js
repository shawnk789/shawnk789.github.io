$(function () {

    //contents
    var $window = $(window),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $header = $('header'),
        $footer = $('footer');

    //data
    var windowW = $window.width(),
        windowH = $window.height(),
        wrapperH = $wrapper.outerHeight(),
        headerH = $header.outerHeight(),
        footerH = $footer.outerHeight(),
        scrollT = $window.scrollTop();

    //value
    var breakpoint01 = 768;

    //json
    var memberPosition = [],
        memberNamae = [],
        memberName = [],
        memberInfo = [],
        memberBg = [];
    $.ajax({
        url: './json/data_member.json',
        type: 'GET',
        dataType: 'json',
        success: function (json) {
            var length = json.length;
            for (var i = 0; i < length; i++) {
                memberPosition.push(json[i].position);
                memberNamae.push(json[i].namae);
                memberName.push(json[i].name);
                memberInfo.push(json[i].text);
                memberBg.push(json[i].bg);
            }
        }
    });

    //path
    var transitionEvent = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

    //bodyFix
    $wrapper.append('<div id="bk"></div>');
    var $bk = $('#bk');
    var bodyState = false,
        bodyFixPosition = $window.scrollTop();
    function bodyFix() {
        if (bodyState == false) {
            bodyFixPosition = $window.scrollTop();
            $body.addClass('fixed').css('top', -bodyFixPosition);
            $bk.fadeIn(700, 'easeOutQuart');
            bodyState = true;
        } else {
            $body.removeClass('fixed').css('top', '0');
            $window.scrollTop(bodyFixPosition);
            $bk.fadeOut(700, 'easeOutQuart');
            bodyState = false;
        }
    }
    $bk.on('click', function () {
        $headerMenu.click();
    });

    //noscroll
    function scrollControl(event) {
        event.preventDefault();
    }
    function noScroll() {
        document.addEventListener("mousewheel", scrollControl, { passive: false });
        document.addEventListener("touchmove", scrollControl, { passive: false });
    }
    function returnScroll() {
        document.removeEventListener("mousewheel", scrollControl, { passive: false });
        document.removeEventListener('touchmove', scrollControl, { passive: false });
    }

    //topPage
    var topPage;
    if ($body.hasClass('topPage')) {
        topPage = true;
    } else {
        topPage = false;
    }
    var startPosition = scrollT;
    function topPageScroll() {
        var currentPosition = $(window).scrollTop();
        if (topPage == true && scrollT < windowH) {
            if (currentPosition >= startPosition) {
                $('html,body').not(':animated').stop().animate({ scrollTop: windowH }, 1300, 'easeOutQuart');
            }
            startPosition = currentPosition;
        }
    }

    //header
    var $menu = $header.find('.menu'),
        $open = $header.find('.open'),
        $openNav = $open.find('.nav'),
        $openNavLi = $openNav.find('li'),
        $close = $open.find('.close');
    $menu.on('click', function () {
        $open.css({
            width: windowW,
            height: windowH
        })
        $open.fadeIn(800, 'easeOutQuart');
        noScroll();
    });
    $close.on('click', function () {
        $open.fadeOut(800, 'easeOutQuart', function () {
            returnScroll();
        });
    })
    $openNavLi.on('click', function () {
        var thisLink = $(this).data('link');
        if (topPage == true) {
            var thisLinkT = $(thisLink).offset().top;
            $open.fadeOut(800, 'easeOutQuart', function () {
                returnScroll();
                $('html, body').animate({ scrollTop: thisLinkT }, 1000, 'easeOutQuart');
            });
        } else {
            var url = '/' + thisLink;
            window.location.href = url;
        }
    });

    //kv
    var $kv = $('#kv');
    function kvHeight() {
        $kv.css('height', windowH);
    }

    //about
    var $about = $('#about');
    function aboutHeight() {
        $about.css('height', windowH);
    }

    //member
    var $member = $('#member'),
        $infoDetail = $member.find('.infoDetail'),
        $memberPh = $infoDetail.find('.memberPh'),
        $memberPhImg = $memberPh.find('img'),
        $detail = $infoDetail.find('.detail'),
        $detailPosition = $detail.find('.position'),
        $detailPositionSpan = $detailPosition.find('.fadeIn'),
        $detailNamae = $detail.find('.namae'),
        $detailNamaeSpan = $detailNamae.find('.fadeIn'),
        $detailName = $detail.find('.name'),
        $detailNameSpan = $detailName.find('.fadeIn'),
        $detailInfo = $detail.find('.info'),
        $detailInfoSpan = $detailInfo.find('.fadeIn'),
        $detailNext = $detail.find('.next'),
        $detailNextSpan = $detailNext.find('.fadeIn'),
        $detailNextWrap = $detailNextSpan.find('.nextWrap'),
        $memberList = $member.find('.memberList'),
        $memberListLi = $memberList.find('li');
    var memberListLiLength = $memberListLi.length;
    function memberFirst() {
        var currentNum = '01';
        $infoDetail.attr('data-number', '01');
        $infoDetail.css('background', memberBg[0]);
        $detailPositionSpan.text(memberPosition[0]);
        $detailNamaeSpan.text(memberNamae[0]);
        $detailNameSpan.text(memberName[0]);
        $detailInfoSpan.text(memberInfo[0]);
    }
    $memberListLi.on('click', function () {
        var memberT = $member.offset().top,
            num = $memberListLi.index(this),
            thisNumber = num + 1,
            thisNumber = ('00' + thisNumber).slice(-2),
            imgPath = './images/member_ph' + thisNumber + '.jpg',
            bgClass = 'member' + thisNumber;
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('html, body').animate({ scrollTop: memberT }, 1000, 'easeOutQuart', function () {
            $memberPh.addClass('slide');
            $detailPositionSpan.removeClass('animation');
            $detailNamaeSpan.removeClass('animation');
            $detailNameSpan.removeClass('animation');
            $detailInfoSpan.removeClass('animation');
            $detailNextSpan.removeClass('animation');
            $detailInfoSpan.on(transitionEvent, function () {
                $detailPositionSpan.text(memberPosition[num]);
                $detailNamaeSpan.text(memberNamae[num]);
                $detailNameSpan.text(memberName[num]);
                $detailInfoSpan.text(memberInfo[num]);
                $memberPhImg.attr('src', imgPath);
                $infoDetail.css('background', memberBg[num]);
                $(this).off(transitionEvent);
                $infoDetail.on(transitionEvent, function () {
                    $infoDetail.data('number', thisNumber);
                    $memberPh.removeClass('slide');
                    $detailPositionSpan.addClass('animation');
                    $detailNamaeSpan.addClass('animation');
                    $detailNameSpan.addClass('animation');
                    $detailInfoSpan.addClass('animation');
                    $detailNextSpan.addClass('animation');
                    $(this).off(transitionEvent);
                });
            });
        });
    });
    $detailNextWrap.on('click', function () {
        var dataNumber = $infoDetail.data('number'),
            num = Number(dataNumber),
            numNext;
        if (num == memberListLiLength) {
            numNext = 0;
        } else {
            numNext = num;
        }
        $memberListLi.eq(numNext).click();
        console.log(numNext);
    });

    //pagetop
    $("#pagetop").on("click", toTop);
    function toTop() {
        $('html,body').animate({ scrollTop: 0 }, 1000, 'easeOutQuart');
    }

    //pageLink
    $('a[href^=#]').on('click', pageLink);
    function pageLink() {
        headerH = $header.outerHeight();
        var href = $(this).attr('href'),
            target = $(href == '#' || href == '' ? 'html' : href),
            targetPosition = target.offset().top;
        position = targetPosition;
        if (position > wrapperH - windowH) {
            position = wrapperH - windowH;
        }
        $('html, body').animate({ scrollTop: position }, 1000, 'easeOutQuart');
        return false;
    }

    //anotherPageLink
    function anotherPageLink() {
        var urlHash = location.hash;
        if (urlHash) {
            $('body,html').stop().scrollTop(0);
            var target = $(urlHash);
            var position = target.offset().top;
            $('body,html').stop().animate({ scrollTop: position }, 1000);
        }
    }

    //fadeIn
    var $fadeIn = $('.fadeIn');
    function fadeIn() {
        $fadeIn.each(function () {
            var fadeInPosition = $(this).offset().top;
            if (scrollT >= fadeInPosition - windowH + (windowH / 4)) {
                $(this).addClass('animation');
            } else {
                if ($(this).hasClass('repeat')) {
                    $(this).removeClass('animation');
                }
            }
        });
    }

    //overImg
    $('.overImg a img').hover(function () {
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
    }, function () {
        if (!$(this).hasClass('currentPage')) {
            $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
    });

    //telLink
    function telLink() {
        var $tel = $('.tel');
        $tel.each(function () {
            var str = $(this).html();
            if ($(this).children().is('img')) {
                $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
            } else {
                $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
            }
        });
    }

    //dateAcquisition
    function dateAcquisition() {
        windowW = $window.width();
        windowH = $window.height();
        wrapperH = $wrapper.outerHeight();
        headerH = $header.outerHeight();
        footerH = $footer.outerHeight();
        scrollT = $window.scrollTop();
    }

    //resize
    $window.resize(function () {
        dateAcquisition();
        fadeIn();
        kvHeight();
        aboutHeight();
    });

    //scroll
    $window.on('scroll', function () {
        dateAcquisition();
        fadeIn();
    });

    //touchmove
    $window.on('touchmove', function () {
        dateAcquisition();
        fadeIn();
    });

    //load
    $window.on('load', function () {
        memberFirst();
        dateAcquisition();
        kvHeight();
        aboutHeight();
        anotherPageLink();
    });
    fadeIn();
    kvHeight();
    aboutHeight();

    //smartphone
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
        telLink();
    }

});
