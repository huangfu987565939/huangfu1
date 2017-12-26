var gulp = require('gulp');
var sass=require("gulp-sass");
var connect=require("gulp-connect");
var concat=require("gulp-concat");
var uglify = require('gulp-uglify');

 gulp.task('hello',function(){ 
 	console.log('hello world!');

}) ;
gulp.task('default',['hello']);
gulp.task("copy-index",function(){
	return gulp.src(["html/**.html"]).pipe(gulp.dest("dist/html")).pipe(connect.reload());
});
gulp.task("images",function(){
	return gulp.src("img/*.{jpg,png,gif}").pipe(gulp.dest("dist/img"))
});
gulp.task("data",function(){
	return gulp.src(["json/*.json"]).pipe(gulp.dest("dist/json"));
	//([‘xml/*.xml’,‘json/*.json’,'!json/b.json']).
});
gulp.task("watch",function(){
	gulp.watch("html/**.html",["copy-index"]);
	gulp.watch("img/**/*.{jpg,png,gif}",["img"]);
	gulp.watch(["json/*.json"],["data"]);
	gulp.watch('css/**/*.scss',['sass']);
	gulp.watch("img/*.{img,png,gif}",["images"]);
	gulp.watch(["js/**.js"],["scripts"]);
});
gulp.task("sass",function(){
	return gulp.src("css/**.scss").pipe(sass()).pipe(gulp.dest("dist/css"))
});
gulp.task("sever",function(){
	connect.server({
		root:"dist",
		livereload:true
	});

});
gulp.task("default",["sever","watch"]);
gulp.task("scripts",function(){
	return gulp.src(["js/**.js"])
	.pipe(gulp.dest("dist/js"));
});