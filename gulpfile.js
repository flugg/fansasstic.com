var gulp         = require( 'gulp' )
var autoprefixer = require( 'gulp-autoprefixer' );
var rename       = require( 'gulp-rename' );
var sass         = require( 'gulp-ruby-sass' );
var markdown     = require( 'gulp-markdown' );
var highlight    = require( 'highlight.js' );

gulp.task( 'markdown', function () {
    return gulp.src( 'markdown/**/*.md' )
        .pipe( markdown( {
            highlight: function ( code ) {
                return highlight.highlightAuto( code ).value;
            }
        } ) )
        .pipe( gulp.dest( 'partials' ) );
} );

gulp.task( 'sass', function () {
    return sass( 'sass' )
        .on( 'error', function ( error ) {
            console.error( 'Error!', error.message );
        } )
        .pipe( autoprefixer( {
            browsers: ['last 2 versions'],
            cascade: false
        }) )
        .pipe( rename( 'main.css' ) )
        .pipe( gulp.dest( 'assets/css' ) );
} );

gulp.task( 'default', [ 'sass', 'markdown' ] );

gulp.task( 'watch', [ 'default' ], function () {
    gulp.watch( 'sass/**/*.scss', [ 'sass' ] );
    gulp.watch( 'markdown/**/*.md', [ 'markdown' ] );
} );