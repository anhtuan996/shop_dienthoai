jQuery(document).ready(function ()
{
    //begin
    jQuery().ajaxSend(function (r, s)
    {
        jQuery("#loading-layer").show();
        s.setRequestHeader('TOKEN', TOKEN);
    });
    jQuery().ajaxStop(function (r, s)
    {
        jQuery("#loading-layer").fadeOut("slow");
    });
    jQuery().ajaxComplete(function (r, s)
    {
        jQuery("#loading-layer").fadeOut("slow");
    });
    if (window.IS_ADMIN)
    {

        jQuery(".div_admin_config_form").css("display", "");
    }

});
wish_re_val = 0;
count_regist = 0;
is_hided_blockUI = 0;
function isEmail(email)
{
    return eLibs.isEmail(email);
}

function login_error(message)
{
    if (message)
        message_all = message;
    else message_all = 'Bạn phải đăng nhập mới được dùng chức năng này';

    var str_openid = '';
    str_height = 99;

    if (OPENID_ON)
    {
        str_openid = '<div class="othrAcc" style="margin-left:70px;border-bottom:1px solid #cbcac8"> Đăng nhập dùng nick : <a class="google" href="' + OID_URL_GOG + '" title="Đăng nhập vào ÉnBạc bằng nick Google tại Google.com">Google</a> hoặc <a class="yahoo" href="' + OID_URL + '" title="Đăng nhập vào ÉnBạc bằng nick Yahoo tại Yahoo.com">Yahoo</a></div>';
        var str_height = 130;
    }
    jQuery.blockUI({message:'<div style="width:410px; border:1px solid #d1d4d3; background-color:#fff; padding:1px;" align="left"><div style=" height:26px; background-color:#17437a" align="left"><span style=" line-height:26px;color: #fff; padding-left:10px;">Thông báo !</span><img src="style/images/i_close2.gif" width="13" height="13" id="close_box" title="Close..." style="cursor:pointer; padding:2px; margin-top:3px; _margin-top:0px; margin-left:300px; _margin-left:300px; position:absolute" /></div><div style=" background:url(style/images/bg_log_faile.gif) repeat-x bottom; min-height:99px;height:' + str_height + 'px; "><div style="background:url(style/images/icon_log_login.gif) no-repeat 10px 10px; min-height:90px;_height:90px;"><div style="margin-left:76px; padding-top:20px;">' + message_all + '</div><div style="margin-top:10px;" align="center"><input type="button" name="sign_in" class="btnLogLogin"  id="login" value="Đăng nhập" /><input type="button" name="sign_in" class="btnLogOut"  id="no" value="Đóng" /></div></div>' + str_openid + '</div></div>', css:{ border:'none', padding:0}});

    jQuery('#overlay').click(function ()
    {
        jQuery.unblockUI();
    });
    jQuery('#login').mouseover(function ()
    {
        jQuery(this).toggleClass("btnLogLoginOver");
        jQuery(this).removeClass("btnLogLogin");
    });
    jQuery('#login').mouseout(function ()
    {
        jQuery(this).toggleClass("btnLogLogin");
        jQuery(this).removeClass("btnLogLoginOver");
    });
    jQuery('#no').mouseover(function ()
    {
        jQuery(this).toggleClass("btnLogOutOver");
        jQuery(this).removeClass("btnLogOut");

    });
    jQuery('#no').mouseout(function ()
    {
        jQuery(this).toggleClass("btnLogOut");
        jQuery(this).removeClass("btnLogOutOver");
    });

    jQuery('#close_box').click(function ()
    {
        jQuery.unblockUI();
    });

    closeBlockUI();

    jQuery('#login').click(function ()
    {
        // update the block message
        login_div();
    });

    jQuery('#no').click(function ()
    {
        jQuery.unblockUI();
        return false;
    });
}

function login_div()
{
    ebLogin.showLoginForm();
    return false;
}
function log_success(message_all, livetime)
{
    jQuery.blockUI({message:'<div style="width:360px; border:1px solid #d1d4d3; background-color:#fff; padding:1px;" align="left"><div style=" height:26px; background-color:#17437a" align="left"><span style=" line-height:26px;color: #fff; padding-left:10px;">Thông báo !</span></div><div style=" background:url(style/images/bg_log_faile.gif) repeat-x bottom; min-height:119px;_height:119px;"><div style="background:url(style/images/icon_log_success.gif) no-repeat 10px 20px; min-height:119px;_height:119px;"><div style="margin-left:76px; padding-top:40px">' + message_all + '</div></div></div></div>', css:{ border:'none', padding:0}});
    jQuery('div.blockUI').click(function ()
    {
        jQuery.unblockUI();
    });
    if (livetime)
        livetime_all = livetime;
    else livetime_all = 2000;
    setTimeout(jQuery.unblockUI, livetime_all);
}
function log_success_(message_all, livetime)
{
    var html = '<div id="cart-check-out-step1" style="margin:0 auto;width:420px;text-align:left"><div style="background-color: transparent;"><div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container"><div class="classic-popup_eb"><div class="classic-popup-top_eb"><div class="right_eb"><div class="bg_eb"></div></div></div><div class="classic-popup-main_eb"><div class="classic-popup-title_eb"><div class="fl_eb">Thông báo !</div><a onclick="jQuery.unblockUI();" title="Đóng" class="classic-popup-close_eb" href="javascript:void(0)">x</a><div class="c_eb"></div></div><div class="classic-popup-content_eb"><div class="content_eb" style="padding:0px"><div id="cError"></div><div class="gold-content"><div class="gold-right"><div class="row" style="overflow:hidden;">';
    html+='<div style="height: 95px;width: 125px;background: url(_css/shop_new/images/blacklist_cf.png) no-repeat 38px -178px !important;"></div><div style="height: 40px;width: 225px;margin-left:130px; margin-top: -50px">'+message_all+'</div>';
    html+='</div></div><div class="c"></div></div></div></div></div><div class="classic-popup-bottom_eb"><div class="right_eb"><div class="bg_eb"></div></div></div></div></div></div></div>';
    jQuery.blockUI({message: html, css: { border:'none', padding:0}});
       jQuery('body').block({ message:html, centerY	: false,
           overlayCSS:{
               opacity:0.5,
               background:'#000000'
           },
           css: {
               top:(jQuery(window).scrollTop() + 150) +  'px',
               border: 'none',
               width : 'auto',
               'background-color' : 'transparent'
           }
       });
    jQuery('div.blockUI').click(function ()
    {
        jQuery.unblockUI();
    });
    if (livetime)
        livetime_all = livetime;
    else livetime_all = 2000;
    setTimeout(jQuery.unblockUI, livetime_all);
}
function log_faile(message_all, livetime)
{
    is_hided_blockUI = 0;
    jQuery.blockUI({message:'<div id="bound_log_faile" style="width:360px;border:1px solid #d1d4d3; background-color:#fff; padding:1px;" align="left"><div style=" height:26px; background-color:#c12000" align="left"><span style=" line-height:26px;color: #fff; padding-left:10px;">Thông báo !</span></div><div style=" background:url(style/images/bg_log_faile.gif) repeat-x bottom; min-height:119px;_height:119px;"><div style="background:url(style/images/icon_log_faile.gif) no-repeat 10px 20px; min-height:119px;_height:119px;"><div style="margin-left:76px; padding-top:40px">' + message_all + '</div></div></div></div>', css:{ border:'none', padding:0}});
    jQuery('div.blockUI').click(function ()
    {
        jQuery.unblockUI();
        is_hided_blockUI = 1;
    });
    if (livetime)
        livetime_all = livetime;
    else livetime_all = 2000;
    setTimeout(hide_blockUI, livetime_all);
}
function hide_blockUI()
{
    if (is_hided_blockUI) return;
    jQuery.unblockUI();
}

function mini_block_faile(id_block, message)
{
    jQuery(id_block).block({
        message:message,
        css:{ border:'1px solid #f00', padding:'10px' }
    });
    setTimeout(function ()
    {
        jQuery(id_block).unblock();
    }, 2000);
}

function closeBlockUI()
{
    jQuery(window).keydown(function (e)
    {
        if (e.which == 27)
        {
            jQuery.unblockUI();
        }
    });
}

function getValueId(id, type, svalue)
{
    if (document.getElementById(id))
    {

        if (typeof(type) == 'undefined')
        {
            var type = 'value';
        }

        if (typeof(svalue) == 'undefined')
        {
            var svalue = '';
        }

        if (type == 'value')
        {
            return document.getElementById(id).value;
        }
        else if (type == 'checked')
        {
            return document.getElementById(id).checked;
        }
        else if (type == 'assign')
        {
            return document.getElementById(id).value = svalue;
        }
        else
        {
            return '';
        }
    }
}
function MM_preloadImages()
{ //v3.0
    var d = document;
    if (d.images)
    {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
        for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0)
            {
                d.MM_p[j] = new Image;
                d.MM_p[j++].src = a[i];
            }
    }
}

function getVar(href_val)
{
    var arr_view = new Array();
    if (href_val)
    {
        var view = href_val.replace(/^.*#/, '');
    }
    else
    {
        var view = (window && window.location && window.location.hash) ? window.location.hash : '#inbox';
        view = view.replace(/^.*#/, '');
    }
    arr_view = view.split('/');
    return arr_view;
}

Array.prototype.inArray = function (value)
{
    var i;
    for (i = 0; i < this.length; i++)
    {
        if (this[i] == value)
        {
            return true;
        }
    }
    return false;
};

function remove_save_img(id, item_id, is_first_img)
{
}

function Shuffle_arr(v)
{
    for (var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
}
function in_array(needle, haystack, argStrict)
{

    var key = '', strict = !!argStrict;

    if (strict)
    {
        for (key in haystack)
        {
            if (haystack[key] === needle)
            {
                return true;
            }
        }
    }
    else
    {
        for (key in haystack)
        {
            if (haystack[key] == needle)
            {
                return true;
            }
        }
    }

    return false;
}

function number_format(Num)
{
    return eLibs.number_format(Num);
}

if (typeof ebLib == 'undefined')
{
    var ebLib = {
        version:"1.0.0", date:"03-11-2011", author:"Ngannv", curCacheKey:'',
        conf:function ()
        {
            var doc = document, win = window, n = navigator, ua = n.userAgent;this.isOpera = win.opera && opera.buildNumber; this.isWebKit = /WebKit/.test(ua); this.isIE = !this.isWebKit && !this.isOpera && (/MSIE/gi).test(ua) && (/Explorer/gi).test(n.appName); this.isIE6 = this.isIE && /MSIE [56]/.test(ua); this.isIE7 = this.isIE && /MSIE [7]/.test(ua); this.isGecko = !this.isWebKit && /Gecko/.test(ua); this.isMac = ua.indexOf("Mac") != -1; this.isAir = /adobeair/i.test(ua); this.isChrome = ua.toLowerCase().indexOf("chrome") != -1; this.isFireFox = ua.toLowerCase().indexOf('firefox') != -1; this.isSafari = ua.toLowerCase().indexOf('safari') != -1;
        },
        isEmail:function (email)
        {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            return reg.test(email);
        },
        joinContentPopup:function (str)
        {
            var store = [str]; return function extend(other) { if (other != null && 'string' == typeof other) { store.push(other); return extend; } return store.join(''); }
        },
        showPopupForm:function (html, w)
        {
            if (!w || w == undefined) { w = 800; } jQuery('body').block({message:html, overlayCSS:{ opacity:0.5, background:'#000000' }, centerY:false, css:{ top:(jQuery(window).scrollTop() + 50) + 'px', border:'none', width:w + 'px', 'background-color':'transparent' }});

        }
    };
    window.ebLib = ebLib;
    ebLib.conf();
}
/***
 * by ngannv: convert lại số đã format khi nhập vào text box trước khi xử lý
 * @param numberDot= số định dạng 250.000.000;
 * @return {*} 250000000
 */
ebLib.reNumberFormat = function (numberDot)
{
    return numberDot.replace(/\./g, '');
};
ebLib.ajax = function (act, code, data, callBack, cache)
{
    if (callBack == undefined) { callBack = ''; } var data = data; var ajax_url = WEB_DIR + 'ajax.php?act=' + act + '&code=' + code; var cacheKey = ajax_url + data; if (jQuery.jCache.hasItem(cacheKey) && cache != undefined) { ebLib.curCacheKey = cacheKey; return eval(callBack(jQuery.jCache.getItem(cacheKey))); } jQuery.ajax({type:'POST', url:ajax_url, data:data, dataType:'json', success:function (json) { if (cache != undefined) { ebLib.curCacheKey = cacheKey; jQuery.jCache.setItem(cacheKey, json); } eval(callBack(json)); } });
};
ebLib.goTopStart = function () { jQuery('body').append('<a href="javascript:void(0)" onclick="jQuery(\'html,body\').animate({scrollTop: 0},1000);" class="go_top" style="display:none"></a>'); jQuery(window).scroll(function () { var top = jQuery(window).scrollTop(); if (top > 0) { if (ebLib.isIE6 || ebLib.isIE7) { var height = jQuery(window).height(); top = top + height - 60; jQuery('.go_top').css('top', top); } jQuery('.go_top').show(); } else { jQuery('.go_top').hide() } }); };
ebLib.scrollTo = function (elementId) { var target = jQuery(elementId);target = target.length && target || jQuery('[name=' + elementId.slice(1) + ']'); if (target.length) { var targetOffset = target.offset().top; jQuery('html,body').animate({scrollTop:targetOffset}, 500); return false; } };
ebLib.checkFileExt = function (fileName, fileTypes) { if (!fileName) return false; var dots = fileName.split("."); var fileType = dots[dots.length - 1]; for (var i in fileTypes) { if (fileType.toLowerCase() == fileTypes[i].toString().toLowerCase()) { return true; } } return false; };
ebLib.number_format=function(num){
    return eLibs.number_format(num);
};
/*
 Move from header.js*/
clicked1 = false;
if (CUR_CITY == 'undefined' || CUR_CITY == '' || CUR_CITY == null)
{
    var CUR_CITY = 0;
}

function fn_new_mes(newMes, newComment, url)
{
    var strMess = '';
    if (newMes > 0 || newComment > 0)
    {
        if (newMes > 0 && newComment > 0)
        {
            strMess += 'Bạn có <a href="' + WEB_DIR + 'message.html">' + newMes + ' tin nhắn</a> và <a href="' + WEB_DIR + 'personal.html?cmd=comment">' + newComment + ' phản hồi giao dịch </a> mới';
        }
        else if (newMes > 0)
        {
            strMess += 'Bạn có <a href="' + WEB_DIR + 'message.html">' + newMes + ' tin nhắn</a> mới';
        }
        else if (newComment > 0)
        {
            strMess += 'Bạn có <a href="' + WEB_DIR + 'personal.html?cmd=comment">' + newComment + ' phản hồi giao dịch</a> mới';
        }
    }
    else
    {
        return false;
    }
}
function close_thongbao()
{
    jQuery("#jNotification").hide();
    jQuery.cookie('close_thongbao', 1, {expires:1});
}
function close_thongbao1()
{
    jQuery("#jNotif").hide();
    jQuery.cookie('close_thongbao', 1, {expires:1});
}

function close_viewcity()
{
    jQuery("#alertViewCity").hide(); jQuery("#alertViewMsg").show(); jQuery.cookie('close_viewcity', 1, {expires:1});
}


function list_city(url, container)
{ 
	var current_url = encodeURIComponent(window.location.href);
    /*Ngannv add 24.09.2011*/
    var listCityMain=[22,26,15,29,8,55];
    if (!url || url == 'undefined' || url == '')
    {
        url = 'url'
    }
    if (!container || container == 'undefined' || container == '')
    {
        container = '#all_city_list'
    }
    //var html='<div class="nt"></div>';
    var html = '';

    var tp0_url = '';

    if (url == 'bdsurl')
    {
        tp0_url = 'bds0/';
    }
    if (container == '#all_city_list')
    {
        html += '<div style="text-align:center;height:30px"><a href="' + WEB_DIR + tp0_url + 'Toan-Quoc?rel='+current_url+'">- Toàn quốc -</a></div>';
    }
    html += '<div class="RegionPanel">';
    html += '<div class="close_city"><a href="javascript:void(0)" onclick="close_list_city();"><img src="style/images/verify_close.gif"/> </a></div>';
    html += '<div class="border_nt"><ul class="ul_mb"><div class="region_name">Miền Bắc</div>';

    for (var i in cities_eb['NORTHEN'])
    {
        if (cities_eb['NORTHEN'][i]['name'])
        {

            html += '<li><a rel="nofollow" id="city_' + cities_eb['NORTHEN'][i]['id'] + '"';
            if (cities_eb['NORTHEN'][i]['id'] == CUR_CITY)
            {
                html += ' class="sel" ';
            }else if(in_array(cities_eb['NORTHEN'][i]['id'],listCityMain)){
                html += ' style="color:#007abc;font-weight:700;" ';

            }
            html += 'href="' + WEB_DIR + cities_eb['NORTHEN'][i][url] + '?rel='+current_url+'">' + cities_eb['NORTHEN'][i]['name'] + '</a></li>';
        }
    }
    html += '</ul><ul class="ul_mt"><div class="region_name">Miền Trung</div>';

    for (var i in cities_eb['MIDDLE'])
    {
        if (cities_eb['MIDDLE'][i]['name'])
        {

            html += '<li><a rel="nofollow" id="city_' + cities_eb['MIDDLE'][i]['id'] + '"';
            if (cities_eb['MIDDLE'][i]['id'] == CUR_CITY)
            {
                html += ' class="sel" ';
            }else if(in_array(cities_eb['MIDDLE'][i]['id'],listCityMain)){
                html += ' style="color:#007abc;font-weight:700;" ';

            }
            html += 'href="' + WEB_DIR + cities_eb['MIDDLE'][i][url] + '?rel='+current_url+'">' + cities_eb['MIDDLE'][i]['name'] + '</a></li>';
        }
    }
    html += '</ul><ul class="ul_mn"><div class="region_name">Miền Nam</div>';
    for (var i in cities_eb['SOUTHEN'])
    {
        if (cities_eb['SOUTHEN'][i]['name'])
        {

            html += '<li><a rel="nofollow" id="city_' + cities_eb['SOUTHEN'][i]['id'] + '"';
            if (cities_eb['SOUTHEN'][i]['id'] == CUR_CITY)
            {
                html += ' class="sel" ';
            }else if(in_array(cities_eb['SOUTHEN'][i]['id'],listCityMain)){
                html += ' style="color:#007abc;font-weight:700;" ';

            }
            html += 'href="' + WEB_DIR + cities_eb['SOUTHEN'][i][url] + '?rel='+current_url+'">' + cities_eb['SOUTHEN'][i]['name'] + '</a></li>';
        }
    }
    html += '</ul></div></div>';
//    return html;
    jQuery(container).html(html);
    jQuery(container).slideToggle("fast");
}
function close_list_city()
{
    jQuery("#all_city_list").hide('fast');
    jQuery("#OtherCityList").hide('fast');
}

function getNoteItem()
{
    if (IS_LOGIN)
    {
        jQuery.ajax({
            type:"POST",
            url:WEB_DIR + "ajax.php?act=personal&code=getNoteItem",
            data:"",
            dataType:'json',
            success:function (json)
            {
                if (json.liked_count)
                {
                    jQuery(".liked_notice_count").text(json.liked_count);
                }
            }
        });
    }
}
/**
 * hàm lấy danh sách các sản phẩm đã đánh dấu cho template Tp.HCM
 * @return
 */
function getNoteItemHcm()
{

    if (IS_LOGIN)
    {
        jQuery.ajax({
            type:"POST",
            url:WEB_DIR + "ajax.php?act=personal&code=getNoteItem",
            data:"",
            dataType:'json',
            success:function (json)
            {
                if (json.msg == 'success')
                {

                    if (json.data && json.data != '')
                    {
                        var data = jQuery('#hcm-wish-list').html();
                        data += '<ul class="notif" id="uNoteItem"> <div class="arrow"></div> <li class="notifTop">';
                        data += '<span class="xx"> Các tin đã đánh dấu </span>';
                        data += '<a href="' + WEB_DIR + 'wish_list.html"  class="seeAll">';
                        data += 'Xem tất cả &raquo;</a> </li>';

                        for (var i in json.data)
                        {
                            if (json.data[i]['des'] != undefined)
                            {
                                data += '<li> <img src="' + json.data[i]['img56'] + '" class="notiImg radius3"/>';
                                data += '<a href="' + json.data[i]['href'] + '" class="aContent">';
                                data += '<div class="notiContent"> <div class="cTitle">' + json.data[i]['title'] + '</div>';
                                data += json.data[i]['des'] + ' </div> </a></li>';

                            }
                        }
                        data += '</ul>';

                        jQuery('#hcm-wish-list').html(data);

                    }
                }
            }
        });
    }
}
function choiceCityPopup()
{
    //accessUrl được t
    var list_city_top = {};
    var list_city = '<ul class="listCityPopupHidden">';
    list_city += '</ul> ';
    var city_def = '<li><a href="Ha-Noi' + hrefUrl + '">Hà Nội</a> </li>';
    city_def += '<li><a href="Hai-Phong' + hrefUrl + '">Hải Phòng</a></li>';
    city_def += '<li><a href="Quang-Ninh' + hrefUrl + '">Quảng Ninh</a></li>';
    city_def += '<li><a href="Da-Nang' + hrefUrl + '">Đà Nẵng</a></li>';
    city_def += '<li><a href="Ho-Chi-Minh' + hrefUrl + '">Tp Hồ Chí Minh</a></li>';
    city_def += '<li><a href="Nha-Trang' + hrefUrl + '">Nha Trang</a></li>';
    city_def += '<li><a href="Vung-Tau' + hrefUrl + '">Vũng Tàu</a></li>';
    city_def += '<li class="other_city"><a href="Can-Tho' + hrefUrl + '">Cần Thơ</a></li>';
    city_def += '';
    var city_popup = ebLib.joinContentPopup('<div id="cart-check-out-step1" style="margin:0 auto;width:325px;text-align:left">')
        ('<div style="background-color: transparent;">')
        ('<div style="padding: 0px; color: black; font-size: 12px; height: auto; display: block;" id="popup-container">')
        ('<div class="classic-popup_eb" style="padding: 0">')('<div class="classic-popup-top_eb">')('<div class="right_eb">')('<div class="bg_eb"></div>')('</div>')('</div>')
        ('<div class="classic-popup-main_eb">')
        ('<div id="city_popup_titlle"><div class="icon-eb"></div> <span>Chọn Tỉnh Thành</span></div>')
        ('<div class="classic-popup-content_eb" style="border-radius:0 0 3px 3px;box-shadow: 1px 0px 0px #666;padding-bottom: 5px;">')
        ('<div class="content_eb" style="padding: 0">')
        ('<div class="listCityPopupContainer"><ul id="choiceCityContainer">' + city_def + '</ul>')
        ('<div style="position: relative;"> <div id="OtherCityList" style="overflow: hidden;" ></div></div> </div>')
        ('</div>')('</div>')('</div>')('<div class="classic-popup-bottom_eb">')('<div class="right_eb">')('<div class="bg_eb"></div>')('</div>')('</div>')('</div>')('</div>')('</div>')
        ('</div>')();

    ebLib.showPopupForm(city_popup, '', 140);
}
function ajax_paging(url_path,div_id,curent_url_path){
    jQuery.jCache.maxSize = 10;
    if(document.getElementById(div_id)){
        var cache_key 			= escape(url_path);
        var current_cache_key 	= escape(curent_url_path);

        if (jQuery.jCache.hasItem(cache_key)){
            if(current_cache_key!=cache_key)
                jQuery.jCache.setItem(current_cache_key,document.getElementById(div_id).innerHTML);
            jQuery("#"+div_id).html(jQuery.jCache.getItem(cache_key));
            return;
        }

        jQuery.ajax({
            url: url_path,
            cache: true,
            success: function(html){
                if(html!='' && html!='undefined'){
                    if(current_cache_key!=cache_key)
                        jQuery.jCache.setItem(current_cache_key,document.getElementById(div_id).innerHTML);
                    jQuery.jCache.setItem(cache_key, html);
                    jQuery("#"+div_id).html(html);
                }
            }
        });
    }
}
function countClick(link, item_id){
    if(item_id == ''){
        //window.location = link;
        window.open(link, '_blank');
    }else{
        jQuery.ajax({
            url: WEB_DIR + "ajax.php?act=item&code=countClick",
            type: "POST",
            data: "item_id="+item_id,
            dataType: 'json',
            success: function(data){
                window.location = link;
            }
        });
    }
}
function toggle(div_id) {
    var el = document.getElementById(div_id);
    if ( el.style.display == 'none' ) {	el.style.display = 'block';}
    else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar) {
    if (typeof window.innerWidth != 'undefined') {
        viewportheight = window.innerHeight;
    } else {
        viewportheight = document.documentElement.clientHeight;
    }
    if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
        blanket_height = viewportheight;
    } else {
        if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
            blanket_height = document.body.parentNode.clientHeight;
        } else {
            blanket_height = document.body.parentNode.scrollHeight;
        }
    }
    var blanket = document.getElementById('blanket');
    blanket.style.height = blanket_height + 'px';
    var popUpDiv = document.getElementById(popUpDivVar);
    popUpDiv_height=blanket_height/2-150;//150 is half popup's height
    popUpDiv.style.top = popUpDiv_height + 'px';
}
function window_pos(popUpDivVar) {
    if (typeof window.innerWidth != 'undefined') {
        viewportwidth = window.innerHeight;
    } else {
        viewportwidth = document.documentElement.clientHeight;
    }
    if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
        window_width = viewportwidth;
    } else {
        if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
            window_width = document.body.parentNode.clientWidth;
        } else {
            window_width = document.body.parentNode.scrollWidth;
        }
    }
    var popUpDiv = document.getElementById(popUpDivVar);
    window_width=window_width/2-150;//150 is half popup's width
    window_width=window_width;
    popUpDiv.style.left = window_width + 'px';
    popUpDiv.style.top =  '100px';
}
function popup(windowname) {
    blanket_size(windowname);
    window_pos(windowname);
    toggle('blanket');
    toggle(windowname);
}