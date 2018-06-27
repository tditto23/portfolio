let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.scripts(['resources/assets/js/frontend/plugins/*'], 'public/js/frontend/plugins.js')
    .scripts(['resources/assets/js/frontend/components/*'], 'public/js/frontend/components.js')
    .scripts(['resources/assets/js/frontend/chart.js', "resources/assets/js/frontend/chart-utils.js", "resources/assets/js/frontend/events-data.js"], "public/js/frontend/charts.js")
    .scripts(['resources/assets/js/frontend/jquery.js', 'resources/assets/js/frontend/jquery.calendario.js', 'resources/assets/js/frontend/jquery.gmap.js', 'resources/assets/js/frontend/jquery.mousewheel.min.js'], "public/js/frontend/jquery.js")
    .js('resources/assets/js/frontend/holder.js', 'public/js/frontend/')
    .js('resources/assets/js/frontend/functions.js', 'public/js/frontend/')

    .sass('resources/assets/sass/frontend/main.scss', 'public/css/frontend/')
    .sass('resources/assets/sass/frontend/styles/dark.scss', 'public/css/frontend/')
    .sass('resources/assets/sass/frontend/bootstrap/bootstrap.scss', 'public/css/bootstrap/')
    .sass('resources/assets/sass/frontend/bootstrap/bootstrap-grid.scss', 'public/css/bootstrap/')
    .sass('resources/assets/sass/frontend/bootstrap/bootstrap-reboot.scss', 'public/css/bootstrap/');




