function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function projectTiles(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (projects) {
      // iterate projects
;(function(){
  var $$obj = projects;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var project = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"project-tile\"\u003E\u003Ca" + (" class=\"mhover\""+pug_attr("href", project.webLink, true, false)+" target=\"_blank\"") + "\u003E\u003C\u002Fa\u003E\u003Cimg" + (pug_attr("src", project.thumb, true, false)+" alt=\"Thumbnail of Project 4\"") + "\u002F\u003E\u003Ch2\u003E" + (pug_escape(null == (pug_interp = project.title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cmain\u003E" + (pug_escape(null == (pug_interp = project.description) ? "" : pug_interp)) + "\u003C\u002Fmain\u003E\u003C!-- icon list--\u003E\u003Cfooter class=\"icon-list\"\u003E\u003Ca" + (" class=\"project-icon-link mhover\""+pug_attr("href", project.githubLink, true, false)+" target=\"_blank\"") + "\u003E\u003Csvg class=\"svg-icon-github\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" role=\"img\" viewbox=\"0 0 24 24\"\u003E\u003Ctitle\u003EGitHub\u003C\u002Ftitle\u003E\u003Cpath d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca" + (" class=\"project-icon-link mhover\""+pug_attr("href", project.webLink, true, false)+" target=\"_blank\"") + "\u003E\u003Csvg class=\"svg-icon-new-window\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" x=\"0px\" y=\"0px\" viewbox=\"0 0 52 52\" xml:space=\"preserve\"\u003E\u003Ctitle\u003ENew Window\u003C\u002Ftitle\u003E\u003Cpath d=\"M48.7,2H29.6C28.8,2,28,2.5,28,3.3v3C28,7.1,28.7,8,29.6,8h7.9c0.9,0,1.4,1,0.7,1.6l-17,17   c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0l17-17c0.6-0.6,1.6-0.2,1.6,0.7v7.9c0,0.8,0.8,1.7,1.6,1.7h2.9   c0.8,0,1.5-0.9,1.5-1.7v-19C50,2.5,49.5,2,48.7,2z\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M36.3,25.5L32.9,29c-0.6,0.6-0.9,1.3-0.9,2.1v11.4c0,0.8-0.7,1.5-1.5,1.5h-21C8.7,44,8,43.3,8,42.5v-21   C8,20.7,8.7,20,9.5,20H21c0.8,0,1.6-0.3,2.1-0.9l3.4-3.4c0.6-0.6,0.2-1.7-0.7-1.7H6c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28   c2.2,0,4-1.8,4-4V26.2C38,25.3,36.9,24.9,36.3,25.5z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Ffooter\u003E\u003C!-- code list--\u003E\u003Cfooter class=\"code-list\"\u003E\u003Ccode\u003E\u003Cul\u003E";
// iterate project.langList
;(function(){
  var $$obj = project.langList;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var lang = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = lang) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var lang = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = lang) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fcode\u003E\u003C\u002Ffooter\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var project = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"project-tile\"\u003E\u003Ca" + (" class=\"mhover\""+pug_attr("href", project.webLink, true, false)+" target=\"_blank\"") + "\u003E\u003C\u002Fa\u003E\u003Cimg" + (pug_attr("src", project.thumb, true, false)+" alt=\"Thumbnail of Project 4\"") + "\u002F\u003E\u003Ch2\u003E" + (pug_escape(null == (pug_interp = project.title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cmain\u003E" + (pug_escape(null == (pug_interp = project.description) ? "" : pug_interp)) + "\u003C\u002Fmain\u003E\u003C!-- icon list--\u003E\u003Cfooter class=\"icon-list\"\u003E\u003Ca" + (" class=\"project-icon-link mhover\""+pug_attr("href", project.githubLink, true, false)+" target=\"_blank\"") + "\u003E\u003Csvg class=\"svg-icon-github\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" role=\"img\" viewbox=\"0 0 24 24\"\u003E\u003Ctitle\u003EGitHub\u003C\u002Ftitle\u003E\u003Cpath d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca" + (" class=\"project-icon-link mhover\""+pug_attr("href", project.webLink, true, false)+" target=\"_blank\"") + "\u003E\u003Csvg class=\"svg-icon-new-window\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" x=\"0px\" y=\"0px\" viewbox=\"0 0 52 52\" xml:space=\"preserve\"\u003E\u003Ctitle\u003ENew Window\u003C\u002Ftitle\u003E\u003Cpath d=\"M48.7,2H29.6C28.8,2,28,2.5,28,3.3v3C28,7.1,28.7,8,29.6,8h7.9c0.9,0,1.4,1,0.7,1.6l-17,17   c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0l17-17c0.6-0.6,1.6-0.2,1.6,0.7v7.9c0,0.8,0.8,1.7,1.6,1.7h2.9   c0.8,0,1.5-0.9,1.5-1.7v-19C50,2.5,49.5,2,48.7,2z\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M36.3,25.5L32.9,29c-0.6,0.6-0.9,1.3-0.9,2.1v11.4c0,0.8-0.7,1.5-1.5,1.5h-21C8.7,44,8,43.3,8,42.5v-21   C8,20.7,8.7,20,9.5,20H21c0.8,0,1.6-0.3,2.1-0.9l3.4-3.4c0.6-0.6,0.2-1.7-0.7-1.7H6c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28   c2.2,0,4-1.8,4-4V26.2C38,25.3,36.9,24.9,36.3,25.5z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Ffooter\u003E\u003C!-- code list--\u003E\u003Cfooter class=\"code-list\"\u003E\u003Ccode\u003E\u003Cul\u003E";
// iterate project.langList
;(function(){
  var $$obj = project.langList;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var lang = $$obj[pug_index2];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = lang) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var lang = $$obj[pug_index2];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = lang) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fcode\u003E\u003C\u002Ffooter\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }.call(this, "projects" in locals_for_with ?
        locals_for_with.projects :
        typeof projects !== 'undefined' ? projects : undefined));
    ;;return pug_html;}