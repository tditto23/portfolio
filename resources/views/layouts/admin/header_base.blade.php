<header id="m_header" class="m-grid__item    m-header "  m-minimize-offset="200" m-minimize-mobile-offset="200" >
    <div class="m-container m-container--fluid m-container--full-height">
        <div class="m-stack m-stack--ver m-stack--desktop">
            @include('layouts.admin.header_brand')
            <div class="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
                @include('layouts.admin.header_hor_menu')
                @include('layouts.admin.header_topbar')
            </div>
        </div>
    </div>
</header>