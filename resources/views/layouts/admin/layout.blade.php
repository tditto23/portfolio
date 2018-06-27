<!-- begin:: Page -->
<div class="m-grid m-grid--hor m-grid--root m-page">
@include('layouts.admin.header_base')
<!-- begin::Body -->
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
        @include('layouts.admin.aside_left')
        <div class="m-grid__item m-grid__item--fluid m-wrapper">
            @include('layouts.admin.subheader_default')
            <div class="m-content">
                @yield('content')
            </div>
        </div>
    </div>
    <!-- end:: Body -->
@include('layouts.admin.footer_default')
</div>
<!-- end:: Page -->
@include('layouts.admin.quick_sidebar')
@include('layouts.admin.scroll_top')
@include('layouts.admin.tooltips')