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
    // $.ajax({
    //     url: './json/data_member.json',
    //     type: 'GET',
    //     dataType: 'json',
    //     success: function (json) {
    //         var length = json.length;
    //         for (var i = 0; i < length; i++) {
    //             memberPosition.push(json[i].position);
    //             memberNamae.push(json[i].namae);
    //             memberName.push(json[i].name);
    //             memberInfo.push(json[i].text);
    //             memberBg.push(json[i].bg);
    //         }
    //     },
    //     error:function(e){
    //         const json=[
    //             {
    //                 "position" : "General Partner",
    //                 "namae"    : "馬場嵜 聡",
    //                 "name"     : "Satoshi Babasaki",
    //                 "text"     : "リクルート、Incubate Fundを経て、Sevenwoods Investmentを創業。リクルートでは経営企画部にてネットビジネス本部及び海外子会社Quipperなど新規事業領域の事業統括を担当。Incubate Fundではアソシエイトとして新規投資案件の発掘および投資先企業の経営支援に従事。 Sevenwoods Investmentでは、国内向けシードVCの他、日本及び米国にてシードVC向けファンド・オブ・ファンズの運用を担当している。東京大学卒。",
    //                 "bg"       : "#102C5A"
    //             },
            
    //             {
    //                 "position" : "General Partner",
    //                 "namae"    : "ショーン チャオ",
    //                 "name"     : "Sean Qiao",
    //                 "text"     : "Infinity Venture Partners、起業を経てSevenwoods Investmentを創業。 Infinity Venture Partnersでは、国内外にて日中英でファンドレイズ、ファンド管理、新規投資案件のリサーチ・発掘、投資業務全般及び投資先企業の経営支援に従事。同時に300-500名のCEO・投資家を対象とした完全招待制ITカンファレンス「IVS（Infinity Ventures Summit）」を企画·運営。Sevenwoods Investmentでは日米にて自身のVCファンドを運用しながらファンド・オブ・ファンズにてシードステージのVCファンドの発掘及び投資を行っている。UC Berkeley（応用数学科＆生産管理工学科）卒。",
    //                 "bg"       : "#5A1010"
    //             },
            
    //             {
    //                 "position" : "General Partner",
    //                 "namae"    : "上杉 修平",
    //                 "name"     : "Shuhei Uesugi",
    //                 "text"     : "East ventures、Incubate Fund、Candleのインターンを経て、Sevenwoods Investmentへ参画。Candleでは新規事業部にてメディア事業の立ち上げに従事し、タイミーを輩出したKBC実行委員会にてアクセラレーションプログラムの運営に従事。Sevenwoods Investmentではアソシエイトとしてファンド管理、新規投資案件のリサーチ・発掘、投資業務全般及び投資先企業の経営支援に従事。2018年、国内史上最年少VCファンドマネージャーとして当時20歳でVCファンド「Upstart Ventures」の代表パートナーに就任。慶應義塾大学（総合政策学部）在学。",
    //                 "bg"       : "#3E105A"
    //             },
            
    //             {
    //                 "position" : "Associate",
    //                 "namae"    : "神津 宏光",
    //                 "name"     : "Hiromitsu Kozu",
    //                 "text"     : "起業、ITベンチャーを経て、Sevenwoods Investmentへ参画。学生時代に遊休資産を活用した飲食店を3店舗経営。その後、新卒でモバイルゲーム開発のバンク・オブ・イノベーションに入社し、マーケティング担当として上場を経験。担当ゲームタイトルの包括的なマーケティング戦略の立案・実行を担い、累計1,000万DLを達成した。その他、個人としても海外フェスのマーケティングを管掌し、総動員数7.5万人を集客するなど、オンライン・オフラインでの豊富なマーケティング経験を持つ。 現在はSevenwoods Investmentでの投資業務の他、ベンチャー企業の経営を行っている。",
    //                 "bg"       : "#104F5A"
    //             },
            
    //             {
    //                 "position" : "Associate",
    //                 "namae"    : "沼沢 想太",
    //                 "name"     : "Sota Numazawa",
    //                 "text"     : "起業、アクセンチュアを経て、Sevenwoods Investmentへ参画。新卒で国内大手ハウスメーカーに勤め土地開発業務に従事する傍ら、友人とC向けエンタメメディア等複数のサービスを立ち上げる。アクセンチュアでは、戦略事業本部にて通信・メディア・ハイテク及び自動車産業へのコンサルティング業務に従事。海外での新規ビジネス創出支援から、デジタルトランスフォーメーション、大手グローバルCVCの業務デューデリジェンス等、最先端テクノロジーを絡めたグローバルプロジェクトを中心に担う。プロジェクトでの功績が認められ社内表彰も受賞。Sevenwoods Investmentではファンド管理から新規投資案件のリサーチ・発掘、投資業務全般及び投資先企業の経営支援に従事している。国際基督教大学卒。",
    //                 "bg"       : "#14360A"
    //             },
            
    //             {
    //                 "position" : "General Partner",
    //                 "namae"    : "笠井 レオ",
    //                 "name"     : "Reo Kasai",
    //                 "text"     : "インキュベイトファンド、IF Angel代表パートナーを経て、2018年Sevenwoods Investmentジェネラルパートナー及びReo Asset Managementジェネラルパートナーに就任。インキュベイトファンドでは国内外の新規投資案件の発掘、および投資先企業の経営支援に従事。2015年、国内史上最年少VCファンドマネージャーとして当時22歳でVCファンド「IF Angel」を設立。20代若手起業家の会社創業期に特化した投資を行ない、運用開始17ヶ月でファンド全額を投資回収し高いリターンを叩き出した実績をもつ。2018年6月にSevenwoods Investment及びReo Asset Managementを創業後は、VCファンドを自身で運用するだけでなく、若手ファンドマネージャーを中心に独立支援、ファンド出資及び育成を行うファンドオブファンズを組成し、日本及び米国にて多数の有望なVCファンドの発掘及び出資を行っている。主な投資実績として、終活ねっと（2018年DMMにより子会社化）を始め、多数の若手ベンチャー企業を支援。",
    //                 "bg"       : "#362A0A"
    //             }
    //         ];
    //         var length = json.length;
    //         for (var i = 0; i < length; i++) {
    //             memberPosition.push(json[i].position);
    //             memberNamae.push(json[i].namae);
    //             memberName.push(json[i].name);
    //             memberInfo.push(json[i].text);
    //             memberBg.push(json[i].bg);
    //         }
    //         console.log(e)
    //     }
    // });

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
