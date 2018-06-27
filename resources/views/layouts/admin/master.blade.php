<!DOCTYPE html><!-- Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 4Author: KeenThemesWebsite: http://www.keenthemes.com/Contact: support@keenthemes.comFollow: www.twitter.com/keenthemesDribbble: www.dribbble.com/keenthemesLike: www.facebook.com/keenthemesPurchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemesRenew Support: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemesLicense: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.-->
<html lang="en" >
<!-- begin::Head -->
<head>
    <meta charset="utf-8" />
    <title>
        Metronic | Dashboard
    </title>
    <meta name="description" content="Latest updates and statistic charts">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <!--begin::Web font -->
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script>
        WebFont.load({            google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700"]},            active: function() {                sessionStorage.fonts = true;            }          });
    </script>
    <!--end::Web font -->        <!--begin::Base Styles -->                           <!--begin::Page Vendors -->
    <link href="{{asset('admin/default/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css') }}" rel="stylesheet" type="text/css" />
    <!--end::Page Vendors -->
    <link href="{{asset('admin/default/assets/vendors/base/vendors.bundle.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('admin/default/assets/demo/default/base/style.bundle.css')}}" rel="stylesheet" type="text/css" />
    <!--end::Base Styles -->
    <link rel="shortcut icon" href="assets/demo/default/media/img/logo/favicon.ico" />
</head>
<!-- end::Head -->        <!-- end::Body -->
<body  class="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default"  >
@include('layouts.admin.layout')
<!--begin::Base Scripts -->
<script src="{{asset('admin/default/assets/vendors/base/vendors.bundle.js')}}" type="text/javascript"></script>
<script src="{{asset('admin/default/assets/demo/default/base/scripts.bundle.js')}}" type="text/javascript"></script>
<!--end::Base Scripts -->                    <!--begin::Page Vendors -->
<script src="{{asset('admin/default/assets/vendors/custom/fullcalendar/fullcalendar.bundle.js')}}" type="text/javascript"></script>
<!--end::Page Vendors -->                                                        <!--begin::Page Snippets -->
<script src="{{asset('admin/default/assets/app/js/dashboard.js')}}" type="text/javascript"></script>
<!--end::Page Snippets -->
</body>
<!-- end::Body -->
</html>
