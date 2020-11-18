<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        {THEME_PAGE_TITLE}
        {THEME_META_TAGS}
    	<link rel="icon" href="{NV_BASE_SITEURL}favicon.ico" type="image/vnd.microsoft.icon" />
        <link rel="shortcut icon" href="{NV_BASE_SITEURL}favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="stylesheet" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/default.css" type="text/css" />
    <link rel="stylesheet" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/footer.css" type="text/css" />
    <link rel="stylesheet" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/eb_login.css" type="text/css" />
    <link  rel="stylesheet" type="text/css" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/style.css" />
    <link  rel="stylesheet" type="text/css" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/screen.css" />
    <link  rel="stylesheet" type="text/css" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/icons.css" />
        {THEME_CSS}
        {THEME_SITE_RSS}
        {THEME_SITE_JS}
    </head>
<body>
    <noscript>
        <div id="nojavascript">{THEME_NOJS}</div>
    </noscript>
<div id="EB-Wrapper" align="center">
<div class="header_post">
    <div id="jMenuTop">
    <div id="box-menu-top">
        <div class="box-menu">
            <div class="menu_n_home active" style="width: 36px">
                <a href="{THEME_SITE_HREF}" style="width: 27px"></a>
                <div class="icon_last"></div>
           </div>
           <!-- BEGIN: top_menu -->
            <a class="btnMenu{TOP_MENU.current}" href="{TOP_MENU.link}" title="{TOP_MENU.title}">
                <div class="btnMenuLeft icon_menu">
                <div class="btnMenuRight" >{TOP_MENU.title}</div>
                </div>
            </a>
           <!-- END: top_menu -->
        </div>
        <div class="box-menu-text">    
            <!-- BEGIN: nouser -->
            <div class="dangnhap_btn">
                <a class="dangnhap_btn" href="{THEME_LOGIN_INDEX_HREF}" rel="nofollow"><b>Đăng nhập</b></a>
            </div>
            <span class="sepera"> </span>
            <div class="dangky_btn">
                <a title="Đăng ký tài khoản" class="dangky_btn" href="{THEME_REGISTER_INDEX_HREF}"    rel="nofollow"><b>Đăng ký</b></a>
            </div>
            <!-- END: nouser -->
            <!-- BEGIN: isuser -->
            <div class="dangnhap_btn">
                <a class="dangnhap_btn" title="Thoát" href="{THEME_LOGOUT_INDEX_HREF}" rel="nofollow"><b>Thoát</b></a>
            </div>
            <span class="sepera"> </span>
            <div class="dangky_btn">
                <a title="" class="dangky_btn" href="{THEME_USERINFO_INDEX_HREF}"    rel="nofollow">Xin chào, <b>{username}</b></a>
            </div>
            <!-- END: isuser -->
        </div>
    </div>
    </div>

    <div id="header-box-search-new" style="position: relative;">
        <div class="content" style="height: 74px">
                    <div class="logo"><a title="{THEME_LOGO_TITLE}" href="{THEME_SITE_HREF}"><img src="{LOGO_SRC}" alt="{THEME_LOGO_TITLE}" /></a></div>
            <div class="search">
                <form action="{NV_BASE_SITEURL}" method="get" onsubmit="return {THEME_SEARCH_SUBMIT_ONCLICK}" class="header-frmsearch">
                    <input type="hidden" id="topmenu_search_checkss" value="{CHECKSS}" />
                    <input type="text" size="20" maxlength="{THEME_SEARCH_QUERY_MAX_LENGTH}" name="topmenu_search_query" id="topmenu_search_query"  value="" autocomplete="off" placeholder="Nhập từ khóa tìm kiếm...">
                    <input class="icons-search conten-button" type="button" value="" name="topmenu_search_submit" id="topmenu_search_submit" onclick="{THEME_SEARCH_SUBMIT_ONCLICK}"/>
                </form>
            <div class="support-text" >
                <a rel="nofollow" href="ymsgr:sendIM?vinades_kinhdoanh" title="Hỗ trợ trực tuyến qua Yahoo Messenger!" class="yahoo_help" style="color: #999;">Kinh doanh 1</a>
                <a rel="nofollow" href="ymsgr:sendIM?vinades_kinhdoanh" title="Hỗ trợ trực tuyến qua Yahoo Messenger!" class="yahoo_help" style="color: #999;">Kinh doanh 2</a>
                <a rel="nofollow" href="ymsgr:sendIM?vinades_kinhdoanh" title="Hỗ trợ trực tuyến qua Yahoo Messenger!" class="yahoo_help" style="color: #999;">Kinh doanh 3</a>
            </div>
            </div>
        </div>
        <div class="clearfix"></div>
         <div class="hr"><hr /></div>
    </div>
</div>