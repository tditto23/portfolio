/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs4/dt-1.10.16
 *
 * Included libraries:
 *   DataTables 1.10.16
 */

/*!
 DataTables 1.10.16
 ©2008-2017 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,G){E||(E=window);G||(G="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(G,E,E.document)}:h(jQuery,window,document)})(function(h,E,G,k){function X(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()), d[c]=e,"o"===b[1]&&X(a[e])});a._hungarianMap=d}function I(a,b,c){a._hungarianMap||X(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),I(a[d],b[d],c)):b[d]=b[e]})}function Ca(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords"); a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&cb(a)}function db(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX= a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&I(m.models.oSearch,a[b])}function eb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function fb(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute", top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function gb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!== e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Da(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:G.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);ja(a,d,h(b).data())}function ja(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig= e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(eb(c),I(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=Q(g),i=b.mRender?Q(b.mRender):null,c=function(a){return"string"=== typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return R(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass= d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function Y(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ea(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&ka(a);r(a,null,"column-sizing",[a])}function Z(a,b){var c=la(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function $(a,b){var c= la(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function aa(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function la(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Fa(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,t;e=0;for(f=b.length;e<f;e++)if(l=b[e],t=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){t[i]=== k&&(t[i]=B(a,i,e,"type"));q=d[g](t[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function hb(a,b,c,d){var e,f,g,j,i,n,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var q=n.targets!==k?n.targets:n.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Da(a);d(q[f],n)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],n);else if("string"===typeof q[f]){j=0;for(i=l.length;j< i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&d(j,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function M(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ga(a,e,c,d);return e}function ma(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ha(a,e);return M(a, c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(J(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function ib(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData, d,{settings:a,row:b,col:c})}function Ia(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function Q(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=Q(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a, b,f){var g,j;if(""!==f){j=Ia(f);for(var i=0,n=j.length;i<n;i++){f=j[i].match(ba);g=j[i].match(U);if(f){j[i]=j[i].replace(ba,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(n=a.length;i<n;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(U,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function R(a){if(h.isPlainObject(a))return R(a._); if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=Ia(e),f;f=e[e.length-1];for(var g,j,i=0,n=e.length-1;i<n;i++){g=e[i].match(ba);j=e[i].match(U);if(g){e[i]=e[i].replace(ba,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(n=d.length;j<n;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(U, ""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(U))a[f.replace(U,"")](d);else a[f.replace(ba,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ja(a){return D(a.aoData,"_aData")}function na(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function oa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function ca(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild); c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ha(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Ka(a,e)}}function Ha(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,n,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],t=function(a,b){if("string"===typeof a){var c=a.indexOf("@"); -1!==c&&(c=a.substring(c+1),R(a)(d,b.getAttribute(c)))}},m=function(a){if(c===k||c===i)j=l[i],n=h.trim(a.innerHTML),j&&j._bAttrSrc?(R(j.mData._)(d,n),t(j.mData.sort,a),t(j.mData.type,a),t(j.mData.filter,a)):q?(j._setter||(j._setter=R(j.mData)),j._setter(d,n)):d[i]=n;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)m(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)m(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&R(a.rowId)(d,b);return{data:d,cells:e}} function Ga(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,n,l,q;if(null===e.nTr){j=c||G.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Ka(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){n=a.aoColumns[l];i=c?d[l]:G.createElement(n.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||n.mRender||n.mData!==l)&&(!h.isPlainObject(n.mData)||n.mData._!==l+".display"))i.innerHTML=B(a,b,l,"display");n.sClass&&(i.className+=" "+n.sClass);n.bVisible&&!c?j.appendChild(i):!n.bVisible&&c&&i.parentNode.removeChild(i); n.fnCreatedCell&&n.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}r(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role","row")}function Ka(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?qa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function jb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0=== h("th, td",g).length,n=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),La(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Ma(a,"header")(a,d,f,n);i&&da(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH); if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function ea(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,n;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=i=1,j[d][f]===k){a.appendChild(g[d][f].cell); for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<i;c++)j[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",n)}}}}function N(a){var b=r(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart= -1);var g=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!kb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:n;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ga(a,l);l=q.nTr;if(0!==e){var t=d[c%e];q._sRowStripe!=t&&(h(l).removeClass(q._sRowStripe).addClass(t),q._sRowStripe=t)}r(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords: f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:aa(a),"class":a.oClasses.sRowEmpty}).html(c))[0];r(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ja(a),g,n,i]);r(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ja(a),g,n,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));r(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function S(a,b){var c=a.oFeatures,d=c.bFilter; c.bSort&&lb(a);d?fa(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;N(a);a._drawHold=!1}function mb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,n,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0]; n=f[k+1];if("'"==n||'"'==n){l="";for(q=2;f[k+q]!=n;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),i.id=n[0].substr(1,n[0].length-1),i.className=n[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=nb(a);else if("f"==j&&d.bFilter)g=ob(a);else if("r"==j&&d.bProcessing)g=pb(a);else if("t"==j)g=qb(a);else if("i"==j&&d.bInfo)g=rb(a);else if("p"== j&&d.bPaginate)g=sb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(n=i.length;q<n;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function da(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,n,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan"); q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;n=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][n+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ra(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],da(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function sa(a,b,c){r(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={}, e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){r(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);delete g.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&J(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=r(a,null,"xhr", [a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?J(a,0,"Invalid JSON response",1):4===b.readyState&&J(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;r(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)}function kb(a){return a.bAjaxDataGet?(a.iDraw++,C(a, !0),sa(a,tb(a),function(b){ub(a,b)}),!1):!0}function tb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,n,l,k=V(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var t=function(a,b){j.push({name:a,value:b})};t("sEcho",a.iDraw);t("iColumns",c);t("sColumns",D(b,"sName").join(","));t("iDisplayStart",g);t("iDisplayLength",i);var pa={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g], l=f[g],i="function"==typeof n.mData?"function":n.mData,pa.columns.push({data:i,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),t("mDataProp_"+g,i),d.bFilter&&(t("sSearch_"+g,l.sSearch),t("bRegex_"+g,l.bRegex),t("bSearchable_"+g,n.bSearchable)),d.bSort&&t("bSortable_"+g,n.bSortable);d.bFilter&&(t("sSearch",e.sSearch),t("bRegex",e.bRegex));d.bSort&&(h.each(k,function(a,b){pa.order.push({column:b.col,dir:b.dir});t("iSortCol_"+a,b.col);t("sSortDir_"+ a,b.dir)}),t("iSortingCols",k.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:pa:b?j:pa}function ub(a,b){var c=ta(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}na(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)M(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;N(a);a._bInitComplete|| ua(a,b);a.bAjaxDataGet=!0;C(a,!1)}function ta(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?Q(c)(b):b}function ob(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value? "":this.value;b!=e.sSearch&&(fa(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,N(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Na(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==G.activeElement&&i.val(e.sSearch)}catch(d){}}); return b[0]}function fa(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Fa(a);if("ssp"!=y(a)){vb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)wb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);xb(a)}else f(b);a.bFiltered=!0;r(a,null,"search",[a])}function xb(a){for(var b= m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,n=c.length;i<n;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function wb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Oa(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function vb(a,b,c,d,e,f){var d=Oa(b,d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==m.ext.search.length&&(c=!0);j=yb(a);if(0>=b.length)a.aiDisplay= g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Oa(a,b,c,d){a=b?a:Pa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function yb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1; d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(va.innerHTML=i,i=Wb?va.textContent:va.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function zb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex, caseInsensitive:a.bCaseInsensitive}}function Ab(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function rb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Bb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Bb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+ 1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Cb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Cb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a, f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ga(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){mb(a);jb(a);ea(a,a.aoHeader);ea(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ea(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));r(a,null,"preInit",[a]);S(a);e=y(a);if("ssp"!=e||g)"ajax"==e?sa(a,[],function(c){var f=ta(a,c);for(b=0;b<f.length;b++)M(a,f[b]);a.iInitDisplayStart= d;S(a);C(a,!1);ua(a,c)},a):(C(a,!1),ua(a))}else setTimeout(function(){ga(a)},200)}function ua(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&Y(a);r(a,null,"plugin-init",[a,b]);r(a,"aoInitComplete","init",[a,b])}function Qa(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Ra(a);r(a,null,"length",[a,c])}function nb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]= new Option("number"===typeof d[g]?a.fnFormatNumber(d[g]):d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Qa(a,h(this).val());N(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function sb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){N(a)}, b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Ma(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Sa(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1=== e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:J(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(r(a,null,"page",[a]),c&&N(a));return b}function pb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display", b?"block":"none");r(a,null,"processing",[a,b])}function qb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>", {"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left", 0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],t=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(t.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=t;a.aoDrawCallback.push({fn:ka,sName:"scrolling"});return i[0]}function ka(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,n=j.children("table"), j=a.nScrollBody,l=h(j),q=j.style,t=h(a.nScrollFoot).children("div"),m=t.children("table"),o=h(a.nTHead),p=h(a.nTable),s=p[0],r=s.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,T=x.bScrollOversize,Xb=D(a.aoColumns,"nTh"),O,K,P,w,Ta=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};K=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==K&&a.scrollBarVis!==k)a.scrollBarVis=K,Y(a);else{a.scrollBarVis=K;p.children("thead, tfoot").remove(); u&&(P=u.clone().prependTo(p),O=u.find("tr"),P=P.find("tr"));w=o.clone().prependTo(p);o=o.find("tr");K=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ra(a,w),function(b,c){B=Z(a,b);c.style.width=a.aoColumns[B].sWidth});u&&H(function(a){a.style.width=""},P);f=p.outerWidth();if(""===c){r.width="100%";if(T&&(p.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=v(p.outerWidth()-b);f=p.outerWidth()}else""!==d&&(r.width= v(d),f=p.outerWidth());H(C,K);H(function(a){z.push(a.innerHTML);Ta.push(v(h(a).css("width")))},K);H(function(a,b){if(h.inArray(a,Xb)!==-1)a.style.width=Ta[b]},o);h(K).height(0);u&&(H(C,P),H(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},P),H(function(a,b){a.style.width=y[b]},O),h(P).height(0));H(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+z[b]+"</div>";a.style.width=Ta[b]},K);u&&H(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+ A[b]+"</div>";a.style.width=y[b]},P);if(p.outerWidth()<f){O=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(T&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=v(O-b);(""===c||""!==d)&&J(a,1,"Possible column misalignment",6)}else O="100%";q.width=v(O);g.width=v(O);u&&(a.nScrollFoot.style.width=v(O));!e&&T&&(q.height=v(s.offsetHeight+b));c=p.outerWidth();n[0].style.width=v(c);i.width=v(c);d=p.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+ (x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(m[0].style.width=v(c),t[0].style.width=v(c),t[0].style[e]=d?b+"px":"0px");p.children("colgroup").insertBefore(p.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function H(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ea(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll, e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=la(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,t=!1,m,o,p=a.oBrowser,d=p.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)o=c[i[m]],null!==o.sWidth&&(o.sWidth=Db(o.sWidthOrig,k),t=!0);if(d||!t&&!f&&!e&&j==aa(a)&&j==n.length)for(m=0;m<j;m++)i=Z(a,m),null!==i&&(c[i].sWidth=v(n.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var s=h("<tr/>").appendTo(j.find("tbody")); j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");n=ra(a,j.find("thead")[0]);for(m=0;m<i.length;m++)o=c[i[m]],n[m].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?v(o.sWidthOrig):"",o.sWidthOrig&&f&&h(n[m]).append(h("<div/>").css({width:o.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)t=i[m],o=c[t],h(Eb(a,t)).clone(!1).append(o.sContentPadding).appendTo(s);h("[name]", j).removeAttr("name");o=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(n[m]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(n[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=v(k-g);b.style.width=v(e);o.remove()}l&&(b.style.width= v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Na(function(){Y(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Db(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||G.body),d=c[0].offsetWidth;c.remove();return d}function Eb(a,b){var c=Fb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Fb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(Yb, ""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function V(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){i=n[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType|| "string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:n[a][1],index:n[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function lb(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Fa(a);h=V(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Gb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g= 0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,o=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=o[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Hb(a){for(var b,c,d=a.aoColumns,e=V(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g, "");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Ua(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b, D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);S(a);"function"==typeof d&&d(a)}function La(a,b,c,d){var e=a.aoColumns[c];Va(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Ua(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Ua(a,c,b.shiftKey,d))})} function wa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=V(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Gb(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,$(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j], c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function xa(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:zb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:zb(a.aoPreSearchCols[d])}})};r(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a, b)}}function Ib(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=r(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!== k&&h.extend(a.oPreviousSearch,Ab(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Ab(g.search))}r(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function ya(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function J(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+ " - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&r(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Jb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e], h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Va(a,b,c){h(a).on("click.DT",b,function(b){a.blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function r(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+ ".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Ra(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Ma(a,b){var c=a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ha(a,b){var c=[],c=Kb.numbers_length,d=Math.floor(c/2);b<=c?c=W(0,b):a<=d?(c=W(0, c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=W(b-(c-2),b):(c=W(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function cb(a){h.each({num:function(b){return za(b,a)},"num-fmt":function(b){return za(b,a,Wa)},"html-num":function(b){return za(b,a,Aa)},"html-num-fmt":function(b){return za(b,a,Aa,Wa)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Lb(a){return function(){var b= [ya(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new s(ya(this[x.iApiIndex])):new s(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing= function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&ka(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)}; this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase(); return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return ya(this[x.iApiIndex])}; this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in m.ext.internal)e&&(this[e]=Lb(e));this.each(function(){var e={},g=1<d?Jb(e,a,!0): a,j=0,i,e=this.getAttribute("id"),n=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())J(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{db(l);eb(l.column);I(l,l,!0);I(l.column,l.column,!0);I(l,h.extend(g,q.data()));var t=m.settings,j=0;for(i=t.length;j<i;j++){var o=t[j];if(o.nTable==this||o.nTHead.parentNode==this||o.nTFoot&&o.nTFoot.parentNode==this){var s=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||s)return o.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){o.oInstance.fnDestroy(); break}else{J(o,0,"Cannot reinitialise DataTable",3);return}}if(o.sTableId==this.id){t.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+m.ext._unique++;var p=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:e,sTableId:e});p.nTable=this;p.oApi=b.internal;p.oInit=g;t.push(p);p.oInstance=1===b.length?b:q.dataTable();db(g);g.oLanguage&&Ca(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]); g=Jb(h.extend(!0,{},l),g);F(p.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(p,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"], ["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);F(p.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(p.oLanguage,g,"fnInfoCallback");z(p,"aoDrawCallback",g.fnDrawCallback,"user");z(p,"aoServerParams",g.fnServerParams,"user");z(p,"aoStateSaveParams",g.fnStateSaveParams,"user");z(p,"aoStateLoadParams",g.fnStateLoadParams,"user");z(p,"aoStateLoaded",g.fnStateLoaded,"user");z(p,"aoRowCallback", g.fnRowCallback,"user");z(p,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(p,"aoHeaderCallback",g.fnHeaderCallback,"user");z(p,"aoFooterCallback",g.fnFooterCallback,"user");z(p,"aoInitComplete",g.fnInitComplete,"user");z(p,"aoPreDrawCallback",g.fnPreDrawCallback,"user");p.rowIdFn=Q(g.rowId);fb(p);var u=p.oClasses;h.extend(u,m.ext.classes,g.oClasses);q.addClass(u.sTable);p.iInitDisplayStart===k&&(p.iInitDisplayStart=g.iDisplayStart,p._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(p.bDeferLoading= !0,e=h.isArray(g.iDeferLoading),p._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,p._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=p.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Ca(a);I(l.oLanguage,a);h.extend(true,v,a);ga(p)},error:function(){ga(p)}}),n=!0);null===g.asStripeClasses&&(p.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=p.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&& (h("tbody tr",this).removeClass(e.join(" ")),p.asDestroyStripes=e.slice());e=[];t=this.getElementsByTagName("thead");0!==t.length&&(da(p.aoHeader,t[0]),e=ra(p));if(null===g.aoColumns){t=[];j=0;for(i=e.length;j<i;j++)t.push(null)}else t=g.aoColumns;j=0;for(i=t.length;j<i;j++)Da(p,e?e[j]:null);hb(p,g.aoColumnDefs,t,function(a,b){ja(p,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=p.aoColumns[a];if(c.mData=== a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};ja(p,a)}}})}var T=p.oFeatures,e=function(){if(g.aaSorting===k){var a=p.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=p.aoColumns[j].asSorting[0]}wa(p);T.bSort&&z(p,"aoDrawCallback",function(){if(p.bSorted){var a=V(p),b={};h.each(a,function(a,c){b[c.src]=c.dir});r(p,null,"order",[p,a,b]);Hb(p)}}); z(p,"aoDrawCallback",function(){(p.bSorted||y(p)==="ssp"||T.bDeferRender)&&wa(p)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));p.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));p.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(p.oScroll.sX!==""||p.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter); else if(b.length>0){p.nTFoot=b[0];da(p.aoFooter,p.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)M(p,g.aaData[j]);else(p.bDeferLoading||y(p)=="dom")&&ma(p,h(p.nTBody).children("tr"));p.aiDisplay=p.aiDisplayMaster.slice();p.bInitialised=true;n===false&&ga(p)};g.bStateSave?(T.bStateSave=!0,z(p,"aoDrawCallback",xa,"state_save"),Ib(p,g,e)):e()}});b=null;return this},x,s,o,u,Xa={},Mb=/[\r\n]/g,Aa=/<.*?>/g,Zb=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,$b=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),Wa=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,L=function(a){return!a||!0===a||"-"===a?!0:!1},Nb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Ob=function(a,b){Xa[b]||(Xa[b]=RegExp(Pa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Xa[b],"."):a},Ya=function(a,b,c){var d="string"===typeof a;if(L(a))return!0;b&&d&&(a=Ob(a,b));c&&d&&(a=a.replace(Wa,""));return!isNaN(parseFloat(a))&&isFinite(a)},Pb=function(a,b,c){return L(a)?!0:!(L(a)||"string"=== typeof a)?null:Ya(a.replace(Aa,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<f;e++)a[e]&&d.push(a[e][b]);return d},ia=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},W=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Qb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]); return b},qa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};m.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,j)},c)):(d=g,a.apply(b,j))}},escapeRegex:function(a){return a.replace($b, "\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ba=/\[.*?\]$/,U=/\(\)$/,Pa=m.util.escapeRegex,va=h("<div>")[0],Wb=va.textContent!==k,Yb=/<.*?>/g,Na=m.util.throttle,Rb=[],w=Array.prototype,ac=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};s=function(a,b){if(!(this instanceof s))return new s(a,b);var c=[],d=function(a){(a=ac(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=qa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};s.extend(this,this,Rb)};m.Api=s;h.extend(s.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length}, each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new s(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new s(this.context,b)},flatten:function(){var a=[];return new s(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0, d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,j,h,n,l=this.context,m,o,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(j=l.length;g<j;g++){var r=new s(l[g]);if("table"===b)f=c.call(r,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(r,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){o=this[g];"column-rows"===b&&(m=Ba(l[g],u.opts));h=0;for(n=o.length;h<n;h++)f=o[h],f= "cell"===b?c.call(r,l[g],f.row,f.column,g,h):c.call(r,l[g],f,g,h,m),f!==k&&e.push(f)}}return e.length||d?(a=new s(l,a?e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new s(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})}, pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return gb(this,a,b,0,this.length,1)},reduceRight:w.reduceRight||function(a,b){return gb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new s(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new s(this.context,qa(this))},unshift:w.unshift});s.extend=function(a, b,c){if(c.length&&b&&(b instanceof s||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=b.apply(a,arguments);s.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,s.extend(a,b[f.name],f.propExt)}};s.register=o=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)s.register(a[c],b);else for(var e=a.split("."),f=Rb,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!== e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var n=f.length;i<n;i++)if(f[i].name===g){i=f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};s.registerPlural=u=function(a,b,c){s.register(a,c);s.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof s?a.length?h.isArray(a[0])?new s(a.context,a[0]):a[0]:k:a})};o("tables()",function(a){var b;if(a){b=s;var c=this.context;if("number"=== typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,d);return c[a]}).toArray();b=new b(a)}else b=this;return b});o("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new s(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()", "table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});o("draw()",function(a){return this.iterator("table",function(b){"page"===a?N(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),S(b,!1===a))})});o("page()",function(a){return a=== k?this.page.info().page:this.iterator("table",function(b){Sa(b,a)})});o("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});o("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength: k:this.iterator("table",function(b){Qa(b,a)})});var Sb=function(a,b,c){if(c){var d=new s(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))S(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();sa(a,[],function(c){na(a);for(var c=ta(a,c),d=0,e=c.length;d<e;d++)M(a,c[d]);S(a,b);C(a,!1)})}};o("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});o("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});o("ajax.reload()",function(a, b){return this.iterator("table",function(c){Sb(c,!1===b,a)})});o("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});o("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Sb(c,!1===b,a)})});var Za=function(a,b,c,d,e){var f=[],g,j,i,n,l,m;i=typeof b;if(!b||"string"===i||"function"=== i||b.length===k)b=[b];i=0;for(n=b.length;i<n;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):[b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(n=a.length;i<n;i++)f=a[i](d,e,f)}return qa(f)},$a=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},ab=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]= a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Ba=function(a,b){var c,d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:W(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c< d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};o("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=$a(b),c=this.iterator("table",function(c){var e=b,f;return Za("row",a,function(a){var b=Nb(a);if(b!==null&&!e)return[b];f||(f=Ba(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null}); b=Qb(ia(c.aoData,f,"nTr"));if(a.nodeName){if(a._DT_RowIndex!==k)return[a._DT_RowIndex];if(a._DT_CellIndex)return[a._DT_CellIndex.row];b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){var i=c.aIds[a.replace(/^#/,"")];if(i!==k)return[i.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});o("rows().nodes()",function(){return this.iterator("row",function(a, b){return a.aoData[b].nTr||k},1)});o("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ia(a.aoData,b,"_aData")},1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){ca(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",function(a, b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new s(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,n,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(n=l.length;i< n;i++)l[i]._DT_CellIndex.row=g}oa(b.aiDisplayMaster,c);oa(b.aiDisplay,c);oa(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;Ra(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});o("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(ma(b,c)[0]):h.push(M(b,c));return h},1),c=this.rows(-1); c.pop();h.merge(c,b);return c});o("row()",function(a,b){return ab(this.rows(a,b))});o("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;b[0].aoData[this[0]]._aData=a;ca(b[0],this[0],"data");return this});o("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});o("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&& "TR"===a.nodeName.toUpperCase()?ma(b,a)[0]:M(b,a)});return this.row(b[0])});var bb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Tb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new s(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g, "_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=aa(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&bb(f,c)}))}}};o("row().child()",function(a,b){var c=this.context; if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)bb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=aa(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);c._detailsShow&& c._details.insertAfter(c.nTr)}return this});o(["row().child.show()","row().child().show()"],function(){Tb(this,!0);return this});o(["row().child.hide()","row().child().hide()"],function(){Tb(this,!1);return this});o(["row().child.remove()","row().child().remove()"],function(){bb(this);return this});o("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var bc=/^([^:]+):(name|visIdx|visible)$/,Ub=function(a,b,c,d,e){for(var c= [],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};o("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=$a(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return Za("column",e,function(a){var b=Nb(a);if(a==="")return W(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Ba(c,f);return h.map(g,function(b,f){return a(f,Ub(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(bc):"";if(k)switch(k[2]){case "visIdx":case "visible":b= parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[Z(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()", "column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Ub,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});u("columns().cache()","column().cache()", function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ia(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ia(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,i,n,l;if(a!==k&&g.bVisible!==a){if(a){var m= h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(n=j.length;i<n;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[m]||null)}else h(D(b.aoData,"anCells",c)).detach();g.bVisible=a;ea(b,b.aoHeader);ea(b,b.aoFooter);xa(b)}});a!==k&&(this.iterator("column",function(c,e){r(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?$(b,c):c},1)});o("columns.adjust()", function(){return this.iterator("table",function(a){Y(a)},1)});o("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return Z(c,b);if("fromData"===a||"toVisible"===a)return $(c,b)}});o("column()",function(a,b){return ab(this.columns(a,b))});o("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=$a(c),f= b.aoData,g=Ba(b,e),j=Qb(ia(f,g,"anCells")),i=h([].concat.apply([],j)),l,n=b.aoColumns.length,m,o,u,s,r,v;return Za("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){m=[];o=0;for(u=g.length;o<u;o++){l=g[o];for(s=0;s<n;s++){r={row:l,column:s};if(c){v=f[l];a(r,B(b,l,s),v.anCells?v.anCells[s]:null)&&m.push(r)}else m.push(r)}}return m}if(h.isPlainObject(a))return[a];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length|| !a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b,c),e=this.rows(a,c),f,g,j,i,n,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(n=d[b].length;i<n;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&& a.anCells?a.anCells[c]:k},1)});o("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a, b,c){return{row:b,column:c,columnVisible:$(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){ca(b,c,a,d)})});o("cell()",function(a,b,c){return ab(this.cells(a,b,c))});o("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;ib(b[0],c[0].row,c[0].column,a);ca(b[0],c[0].row,"data",c[0].column);return this});o("order()",function(a,b){var c=this.context;if(a===k)return 0!== c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});o("order.listener()",function(a,b,c){return this.iterator("table",function(d){La(d,a,b,c)})});o("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});o(["columns().order()", "column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});o("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&fa(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a, b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),fa(e,e.oPreviousSearch,1))})});o("state()",function(){return this.context.length?this.context[0].oSavedState:null});o("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});o("state.loaded()",function(){return this.context.length? this.context[0].oLoadedState:null});o("state.save()",function(){return this.iterator("table",function(a){xa(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof m.Api)return!0;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot? h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new s(c):c};m.camelToHungarian=I;o("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){o(b+"()",function(){var a=Array.prototype.slice.call(arguments); a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});o("clear()",function(){return this.iterator("table",function(a){na(a)})});o("settings()",function(){return new s(this.context,this.context)});o("init()",function(){var a=this.context;return a.length?a[0].oInit:null});o("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});o("destroy()",function(a){a=a|| !1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),o;b.bDestroying=!0;r(b,"aoDestroyCallback","destroy",[b]);a||(new s(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j)); b.aaSorting=[];b.aaSortingFixed=[];wa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(o=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%o])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c, 1)})});h.each(["column","row","cell"],function(a,b){o(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,n){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,n)})})});o("i18n()",function(a,b,c){var d=this.context[0],a=Q(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.16";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow= {nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null, sWidthOrig:null};m.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+ "_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries", sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"}; X(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};X(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null, bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[], aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null, aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength, b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=x={buttons:{},classes:{},build:"bs4/dt-1.10.16",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}}, order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd", sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead", sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Kb=m.ext.pager;h.extend(Kb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ha(a, b)]},simple_numbers:function(a,b){return["previous",ha(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ha(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ha(a,b),"last"]},_numbers:ha,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},n,l,m=0,o=function(b,d){var k,s,u,r,v=function(b){Sa(a,b.data.action,true)};k=0;for(s=d.length;k<s;k++){r=d[k];if(h.isArray(r)){u= h("<"+(r.DT_el||"div")+"/>").appendTo(b);o(u,r)}else{n=null;l="";switch(r){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":n=j.sFirst;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":n=j.sPrevious;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":n=j.sNext;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":n=j.sLast;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:n=r+1;l=e===r?g.sPageButtonActive:""}if(n!==null){u=h("<a>",{"class":g.sPageButton+ " "+l,"aria-controls":a.sTableId,"aria-label":i[r],"data-dt-idx":m,tabindex:a.iTabIndex,id:c===0&&typeof r==="string"?a.sTableId+"_"+r:null}).html(n).appendTo(b);Va(u,{action:r},v);m++}}}},s;try{s=h(b).find(G.activeElement).data("dt-idx")}catch(u){}o(h(b).empty(),d);s!==k&&h(b).find("[data-dt-idx="+s+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return Ya(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!Zb.test(a))return null;var b=Date.parse(a); return null!==b&&!isNaN(b)||L(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return Ya(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Pb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Pb(a,c,!0)?"html-num-fmt"+c:null},function(a){return L(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return L(a)?a:"string"===typeof a?a.replace(Mb," ").replace(Aa,""):""},string:function(a){return L(a)? a:"string"===typeof a?a.replace(Mb," "):a}});var za=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Ob(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){return Date.parse(a)||-Infinity},"html-pre":function(a){return L(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return L(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a< b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});cb("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b); h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Vb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g, "&quot;"):a};m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Vb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:Vb}}};h.extend(m.ext.internal,{_fnExternApiFunc:Lb,_fnBuildAjax:sa,_fnAjaxUpdate:kb,_fnAjaxParameters:tb,_fnAjaxUpdateDraw:ub, _fnAjaxDataSrc:ta,_fnAddColumn:Da,_fnColumnOptions:ja,_fnAdjustColumnSizing:Y,_fnVisibleToColumnIndex:Z,_fnColumnIndexToVisible:$,_fnVisbleColumns:aa,_fnGetColumns:la,_fnColumnTypes:Fa,_fnApplyColumnDefs:hb,_fnHungarianMap:X,_fnCamelToHungarian:I,_fnLanguageCompat:Ca,_fnBrowserDetect:fb,_fnAddData:M,_fnAddTr:ma,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:ib, _fnSplitObjNotation:Ia,_fnGetObjectDataFn:Q,_fnSetObjectDataFn:R,_fnGetDataMaster:Ja,_fnClearTable:na,_fnDeleteIndex:oa,_fnInvalidate:ca,_fnGetRowElements:Ha,_fnCreateTr:Ga,_fnBuildHead:jb,_fnDrawHead:ea,_fnDraw:N,_fnReDraw:S,_fnAddOptionsHtml:mb,_fnDetectHeader:da,_fnGetUniqueThs:ra,_fnFeatureHtmlFilter:ob,_fnFilterComplete:fa,_fnFilterCustom:xb,_fnFilterColumn:wb,_fnFilter:vb,_fnFilterCreateSearch:Oa,_fnEscapeRegex:Pa,_fnFilterData:yb,_fnFeatureHtmlInfo:rb,_fnUpdateInfo:Bb,_fnInfoMacros:Cb,_fnInitialise:ga, _fnInitComplete:ua,_fnLengthChange:Qa,_fnFeatureHtmlLength:nb,_fnFeatureHtmlPaginate:sb,_fnPageChange:Sa,_fnFeatureHtmlProcessing:pb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:qb,_fnScrollDraw:ka,_fnApplyToChildren:H,_fnCalculateColumnWidths:Ea,_fnThrottle:Na,_fnConvertToWidth:Db,_fnGetWidestNode:Eb,_fnGetMaxLenString:Fb,_fnStringToCss:v,_fnSortFlatten:V,_fnSort:lb,_fnSortAria:Hb,_fnSortListener:Ua,_fnSortAttachListener:La,_fnSortingClasses:wa,_fnSortData:Gb,_fnSaveState:xa,_fnLoadState:Ib,_fnSettingsFromNode:ya, _fnLog:J,_fnMap:F,_fnBindAction:Va,_fnCallbackReg:z,_fnCallbackFire:r,_fnLengthOverflow:Ra,_fnRenderer:Ma,_fnDataSource:y,_fnRowAttributes:Ka,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});


/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,d){a||(a=window);if(!d||!d.fn.dataTable)d=require("datatables.net")(a,d).$;return b(d,a,a.document)}:b(jQuery,window,document)})(function(b,a,d,m){var f=b.fn.dataTable;b.extend(!0,f.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>", renderer:"bootstrap"});b.extend(f.ext.classes,{sWrapper:"dataTables_wrapper container-fluid dt-bootstrap4",sFilterInput:"form-control form-control-sm",sLengthSelect:"form-control form-control-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"});f.ext.renderer.pageButton.bootstrap=function(a,h,r,s,j,n){var o=new f.Api(a),t=a.oClasses,k=a.oLanguage.oPaginate,u=a.oLanguage.oAria.paginate||{},e,g,p=0,q=function(d,f){var l,h,i,c,m=function(a){a.preventDefault();!b(a.currentTarget).hasClass("disabled")&& o.page()!=a.data.action&&o.page(a.data.action).draw("page")};l=0;for(h=f.length;l<h;l++)if(c=f[l],b.isArray(c))q(d,c);else{g=e="";switch(c){case "ellipsis":e="&#x2026;";g="disabled";break;case "first":e=k.sFirst;g=c+(0<j?"":" disabled");break;case "previous":e=k.sPrevious;g=c+(0<j?"":" disabled");break;case "next":e=k.sNext;g=c+(j<n-1?"":" disabled");break;case "last":e=k.sLast;g=c+(j<n-1?"":" disabled");break;default:e=c+1,g=j===c?"active":""}e&&(i=b("<li>",{"class":t.sPageButton+" "+g,id:0===r&& "string"===typeof c?a.sTableId+"_"+c:null}).append(b("<a>",{href:"#","aria-controls":a.sTableId,"aria-label":u[c],"data-dt-idx":p,tabindex:a.iTabIndex,"class":"page-link"}).html(e)).appendTo(d),a.oApi._fnBindAction(i,{action:c},m),p++)}},i;try{i=b(h).find(d.activeElement).data("dt-idx")}catch(v){}q(b(h).empty().html('<ul class="pagination"/>').children("ul"),s);i!==m&&b(h).find("[data-dt-idx="+i+"]").focus()};return f});



/*!
 * bootstrap-fileinput v4.4.7
 * http://plugins.krajee.com/file-input
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2017, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(window.jQuery)}(function(e){"use strict";e.fn.fileinputLocales={},e.fn.fileinputThemes={},String.prototype.setTokens=function(e){var t,i,a=this.toString();for(t in e)e.hasOwnProperty(t)&&(i=new RegExp("{"+t+"}","g"),a=a.replace(i,e[t]));return a};var t,i;t={FRAMES:".kv-preview-thumb",SORT_CSS:"file-sortable",OBJECT_PARAMS:'<param name="controller" value="true" />\n<param name="allowFullScreen" value="true" />\n<param name="allowScriptAccess" value="always" />\n<param name="autoPlay" value="false" />\n<param name="autoStart" value="false" />\n<param name="quality" value="high" />\n',DEFAULT_PREVIEW:'<div class="file-preview-other">\n<span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>',MODAL_ID:"kvFileinputModal",MODAL_EVENTS:["show","shown","hide","hidden","loaded"],objUrl:window.URL||window.webkitURL,compare:function(e,t,i){return void 0!==e&&(i?e===t:e.match(t))},isIE:function(e){if("Microsoft Internet Explorer"!==navigator.appName)return!1;if(10===e)return new RegExp("msie\\s"+e,"i").test(navigator.userAgent);var t,i=document.createElement("div");return i.innerHTML="<!--[if IE "+e+"]> <i></i> <![endif]-->",t=i.getElementsByTagName("i").length,document.body.appendChild(i),i.parentNode.removeChild(i),t},initModal:function(t){var i=e("body");i.length&&t.appendTo(i)},isEmpty:function(t,i){return void 0===t||null===t||0===t.length||i&&""===e.trim(t)},isArray:function(e){return Array.isArray(e)||"[object Array]"===Object.prototype.toString.call(e)},ifSet:function(e,t,i){return i=i||"",t&&"object"==typeof t&&e in t?t[e]:i},cleanArray:function(e){return e instanceof Array||(e=[]),e.filter(function(e){return void 0!==e&&null!==e})},spliceArray:function(e,t){var i,a=0,r=[];if(!(e instanceof Array))return[];for(i=0;i<e.length;i++)i!==t&&(r[a]=e[i],a++);return r},getNum:function(e,t){return t=t||0,"number"==typeof e?e:("string"==typeof e&&(e=parseFloat(e)),isNaN(e)?t:e)},hasFileAPISupport:function(){return!(!window.File||!window.FileReader)},hasDragDropSupport:function(){var e=document.createElement("div");return!t.isIE(9)&&(void 0!==e.draggable||void 0!==e.ondragstart&&void 0!==e.ondrop)},hasFileUploadSupport:function(){return t.hasFileAPISupport()&&window.FormData},hasBlobSupport:function(){try{return!!window.Blob&&Boolean(new Blob)}catch(e){return!1}},hasArrayBufferViewSupport:function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}},dataURI2Blob:function(e){var i,a,r,n,o,l,s=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,d=t.hasBlobSupport(),c=(d||s)&&window.atob&&window.ArrayBuffer&&window.Uint8Array;if(!c)return null;for(i=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):decodeURIComponent(e.split(",")[1]),a=new ArrayBuffer(i.length),r=new Uint8Array(a),n=0;n<i.length;n+=1)r[n]=i.charCodeAt(n);return o=e.split(",")[0].split(":")[1].split(";")[0],d?new Blob([t.hasArrayBufferViewSupport()?r:a],{type:o}):(l=new s,l.append(a),l.getBlob(o))},arrayBuffer2String:function(e){if(window.TextDecoder)return new TextDecoder("utf-8").decode(e);var t,i,a,r,n=Array.prototype.slice.apply(new Uint8Array(e)),o="",l=0;for(t=n.length;t>l;)switch(i=n[l++],i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:o+=String.fromCharCode(i);break;case 12:case 13:a=n[l++],o+=String.fromCharCode((31&i)<<6|63&a);break;case 14:a=n[l++],r=n[l++],o+=String.fromCharCode((15&i)<<12|(63&a)<<6|(63&r)<<0)}return o},isHtml:function(e){var t=document.createElement("div");t.innerHTML=e;for(var i=t.childNodes,a=i.length;a--;)if(1===i[a].nodeType)return!0;return!1},isSvg:function(e){return e.match(/^\s*<\?xml/i)&&(e.match(/<!DOCTYPE svg/i)||e.match(/<svg/i))},getMimeType:function(e,t,i){switch(e){case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":return"image/jpeg";case"89504E47":return"image/png";case"47494638":return"image/gif";case"49492a00":return"image/tiff";case"52494646":return"image/webp";case"66747970":return"video/3gp";case"4f676753":return"video/ogg";case"1a45dfa3":return"video/mkv";case"000001ba":case"000001b3":return"video/mpeg";case"3026b275":return"video/wmv";case"25504446":return"application/pdf";case"25215053":return"application/ps";case"504b0304":case"504b0506":case"504b0508":return"application/zip";case"377abcaf":return"application/7z";case"75737461":return"application/tar";case"7801730d":return"application/dmg";default:switch(e.substring(0,6)){case"435753":return"application/x-shockwave-flash";case"494433":return"audio/mp3";case"425a68":return"application/bzip";default:switch(e.substring(0,4)){case"424d":return"image/bmp";case"fffb":return"audio/mp3";case"4d5a":return"application/exe";case"1f9d":case"1fa0":return"application/zip";case"1f8b":return"application/gzip";default:return t&&!t.match(/[^\u0000-\u007f]/)?"application/text-plain":i}}}},addCss:function(e,t){e.removeClass(t).addClass(t)},getElement:function(i,a,r){return t.isEmpty(i)||t.isEmpty(i[a])?r:e(i[a])},uniqId:function(){return Math.round((new Date).getTime())+"_"+Math.round(100*Math.random())},htmlEncode:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},replaceTags:function(t,i){var a=t;return i?(e.each(i,function(e,t){"function"==typeof t&&(t=t()),a=a.split(e).join(t)}),a):a},cleanMemory:function(e){var i=e.is("img")?e.attr("src"):e.find("source").attr("src");t.objUrl.revokeObjectURL(i)},findFileName:function(e){var t=e.lastIndexOf("/");return-1===t&&(t=e.lastIndexOf("\\")),e.split(e.substring(t,t+1)).pop()},checkFullScreen:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement},toggleFullScreen:function(e){var i=document,a=i.documentElement;a&&e&&!t.checkFullScreen()?a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):i.exitFullscreen?i.exitFullscreen():i.msExitFullscreen?i.msExitFullscreen():i.mozCancelFullScreen?i.mozCancelFullScreen():i.webkitExitFullscreen&&i.webkitExitFullscreen()},moveArray:function(e,t,i){if(i>=e.length)for(var a=i-e.length;a--+1;)e.push(void 0);return e.splice(i,0,e.splice(t,1)[0]),e},cleanZoomCache:function(e){var t=e.closest(".kv-zoom-cache-theme");t.length||(t=e.closest(".kv-zoom-cache")),t.remove()},setOrientation:function(e,t){var i,a,r,n=new DataView(e),o=0,l=1;if(65496!==n.getUint16(o)||e.length<2)return void(t&&t());for(o+=2,i=n.byteLength;i-2>o;)switch(a=n.getUint16(o),o+=2,a){case 65505:r=n.getUint16(o),i=r-o,o+=2;break;case 274:l=n.getUint16(o+6,!1),i=0}t&&t(l)},validateOrientation:function(e,i){if(window.FileReader&&window.DataView){var a,r=new FileReader;r.onloadend=function(){a=r.result,t.setOrientation(a,i)},r.readAsArrayBuffer(e)}},adjustOrientedImage:function(e,t){var i,a,r;if(e.hasClass("is-portrait-gt4")){if(t)return void e.css({width:e.parent().height()});e.css({height:"auto",width:e.height()}),i=e.parent().offset().top,a=e.offset().top,r=i-a,e.css("margin-top",r)}},closeButton:function(e){return e=e?"close "+e:"close",'<button type="button" class="'+e+'" aria-label="Close">\n  <span aria-hidden="true">&times;</span>\n</button>'}},i=function(i,a){var r=this;r.$element=e(i),r.$parent=r.$element.parent(),r._validate()&&(r.isPreviewable=t.hasFileAPISupport(),r.isIE9=t.isIE(9),r.isIE10=t.isIE(10),(r.isPreviewable||r.isIE9)&&(r._init(a),r._listen()),r.$element.removeClass("file-loading"))},i.prototype={constructor:i,_cleanup:function(){var e=this;e.reader=null,e.formdata={},e.uploadCount=0,e.uploadStatus={},e.uploadLog=[],e.uploadAsyncCount=0,e.loadedImages=[],e.totalImagesCount=0,e.ajaxRequests=[],e.clearStack(),e.fileInputCleared=!1,e.fileBatchCompleted=!0,e.isPreviewable||(e.showPreview=!1),e.isError=!1,e.ajaxAborted=!1,e.cancelling=!1},_init:function(i,a){var r,n,o,l,s=this,d=s.$element;s.options=i,e.each(i,function(e,i){switch(e){case"minFileCount":case"maxFileCount":case"minFileSize":case"maxFileSize":case"maxFilePreviewSize":case"resizeImageQuality":case"resizeIfSizeMoreThan":case"progressUploadThreshold":case"initialPreviewCount":case"zoomModalHeight":case"minImageHeight":case"maxImageHeight":case"minImageWidth":case"maxImageWidth":s[e]=t.getNum(i);break;default:s[e]=i}}),s.rtl&&(l=s.previewZoomButtonIcons.prev,s.previewZoomButtonIcons.prev=s.previewZoomButtonIcons.next,s.previewZoomButtonIcons.next=l),a||s._cleanup(),s.$form=d.closest("form"),s._initTemplateDefaults(),s.uploadFileAttr=t.isEmpty(d.attr("name"))?"file_data":d.attr("name"),o=s._getLayoutTemplate("progress"),s.progressTemplate=o.replace("{class}",s.progressClass),s.progressCompleteTemplate=o.replace("{class}",s.progressCompleteClass),s.progressErrorTemplate=o.replace("{class}",s.progressErrorClass),s.dropZoneEnabled=t.hasDragDropSupport()&&s.dropZoneEnabled,s.isDisabled=d.attr("disabled")||d.attr("readonly"),s.isDisabled&&d.attr("disabled",!0),s.isAjaxUpload=t.hasFileUploadSupport()&&!t.isEmpty(s.uploadUrl),s.isClickable=s.browseOnZoneClick&&s.showPreview&&(s.isAjaxUpload&&s.dropZoneEnabled||!t.isEmpty(s.defaultPreviewContent)),s.slug="function"==typeof i.slugCallback?i.slugCallback:s._slugDefault,s.mainTemplate=s.showCaption?s._getLayoutTemplate("main1"):s._getLayoutTemplate("main2"),s.captionTemplate=s._getLayoutTemplate("caption"),s.previewGenericTemplate=s._getPreviewTemplate("generic"),!s.imageCanvas&&s.resizeImage&&(s.maxImageWidth||s.maxImageHeight)&&(s.imageCanvas=document.createElement("canvas"),s.imageCanvasContext=s.imageCanvas.getContext("2d")),t.isEmpty(d.attr("id"))&&d.attr("id",t.uniqId()),s.namespace=".fileinput_"+d.attr("id").replace(/-/g,"_"),void 0===s.$container?s.$container=s._createContainer():s._refreshContainer(),n=s.$container,s.$dropZone=n.find(".file-drop-zone"),s.$progress=n.find(".kv-upload-progress"),s.$btnUpload=n.find(".fileinput-upload"),s.$captionContainer=t.getElement(i,"elCaptionContainer",n.find(".file-caption")),s.$caption=t.getElement(i,"elCaptionText",n.find(".file-caption-name")),t.isEmpty(s.msgPlaceholder)||(r=d.attr("multiple")?s.filePlural:s.fileSingle,s.$caption.attr("placeholder",s.msgPlaceholder.replace("{files}",r))),s.$captionIcon=s.$captionContainer.find(".file-caption-icon"),s.$previewContainer=t.getElement(i,"elPreviewContainer",n.find(".file-preview")),s.$preview=t.getElement(i,"elPreviewImage",n.find(".file-preview-thumbnails")),s.$previewStatus=t.getElement(i,"elPreviewStatus",n.find(".file-preview-status")),s.$errorContainer=t.getElement(i,"elErrorContainer",s.$previewContainer.find(".kv-fileinput-error")),s._validateDisabled(),t.isEmpty(s.msgErrorClass)||t.addCss(s.$errorContainer,s.msgErrorClass),a||(s.$errorContainer.hide(),s.previewInitId="preview-"+t.uniqId(),s._initPreviewCache(),s._initPreview(!0),s._initPreviewActions(),s._setFileDropZoneTitle(),s.$parent.hasClass("file-loading")&&(s.$container.insertBefore(s.$parent),s.$parent.remove())),d.attr("disabled")&&s.disable(),s._initZoom(),s.hideThumbnailContent&&t.addCss(s.$preview,"hide-content")},_initTemplateDefaults:function(){var i,a,r,n,o,l,s,d,c,p,u,f,m,v,g,h,w,_,b,C,y,x,T,E,S,k,F,I,P,A,D,z,$,j,U,B,R,L,O=this;i='{preview}\n<div class="kv-upload-progress kv-hidden"></div><div class="clearfix"></div>\n<div class="input-group {class}">\n  {caption}\n<div class="input-group-btn input-group-append">\n      {remove}\n      {cancel}\n      {upload}\n      {browse}\n    </div>\n</div>',a='{preview}\n<div class="kv-upload-progress kv-hidden"></div>\n<div class="clearfix"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n',r='<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>',o=t.closeButton("fileinput-remove"),n='<i class="glyphicon glyphicon-file"></i>',l='<div class="file-caption form-control {class}" tabindex="500">\n  <span class="file-caption-icon"></span>\n  <input class="file-caption-name" onkeydown="return false;" onpaste="return false;">\n</div>',s='<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</button>',d='<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</a>',c='<div tabindex="500" class="{css}" {status}>{icon} {label}</div>',p='<div id="'+t.MODAL_ID+'" class="file-zoom-dialog modal fade" tabindex="-1" aria-labelledby="'+t.MODAL_ID+'Label"></div>',u='<div class="modal-dialog modal-lg{rtl}" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title">{heading}</h5>\n      <span class="kv-zoom-title"></span>\n      <div class="kv-zoom-actions">{toggleheader}{fullscreen}{borderless}{close}</div>\n    </div>\n    <div class="modal-body">\n      <div class="floating-buttons"></div>\n      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>\n{prev} {next}\n    </div>\n  </div>\n</div>\n',f='<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {status}\n     </div>\n</div>',m=" <samp>({sizeText})</samp>",v='<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">\n        <div class="file-caption-info">{caption}</div>\n        <div class="file-size-info">{size}</div>\n    </div>\n    {progress}\n{indicator}\n{actions}\n</div>',g='<div class="file-actions">\n    <div class="file-footer-buttons">\n        {download} {upload} {delete} {zoom} {other}    </div>\n</div>\n{drag}\n<div class="clearfix"></div>',h='<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n',w='<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>',_='<a class="kv-file-download {downloadClass}" title="{downloadTitle}" href="{downloadUrl}" download="{caption}" target="_blank">{downloadIcon}</a>',b='<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>',C='<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>',y='<div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>',x='<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}"',T=x+'><div class="kv-file-content">\n',E=x+' title="{caption}"><div class="kv-file-content">\n',S="</div>{footer}\n</div>\n",k="{content}\n",F='<div class="kv-preview-data file-preview-html" title="{caption}" {style}>{data}</div>\n',I='<img src="{data}" class="file-preview-image kv-preview-data" title="{caption}" alt="{caption}" {style}>\n',P='<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly {style}>{data}</textarea>\n',A='<iframe class="kv-preview-data file-preview-office" src="https://docs.google.com/gview?url={data}&embedded=true" {style}></iframe>',D='<video class="kv-preview-data file-preview-video" controls {style}>\n<source src="{data}" type="{type}">\n'+t.DEFAULT_PREVIEW+"\n</video>\n",z='<audio class="kv-preview-data file-preview-audio" controls {style}>\n<source src="{data}" type="{type}">\n'+t.DEFAULT_PREVIEW+"\n</audio>\n",$='<embed class="kv-preview-data file-preview-flash" src="{data}" type="application/x-shockwave-flash" {style}>\n',U='<embed class="kv-preview-data file-preview-pdf" src="{data}" type="application/pdf" {style}>\n',j='<object class="kv-preview-data file-preview-object file-object {typeCss}" data="{data}" type="{type}" {style}>\n<param name="movie" value="{caption}" />\n'+t.OBJECT_PARAMS+" "+t.DEFAULT_PREVIEW+"\n</object>\n",B='<div class="kv-preview-data file-preview-other-frame" {style}>\n'+t.DEFAULT_PREVIEW+"\n</div>\n",R='<div class="kv-zoom-cache" style="display:none">{zoomContent}</div>',L={width:"100%",height:"100%","min-height":"480px"},O.defaults={layoutTemplates:{main1:i,main2:a,preview:r,close:o,fileIcon:n,caption:l,modalMain:p,modal:u,progress:f,size:m,footer:v,indicator:y,actions:g,actionDelete:h,actionUpload:w,actionDownload:_,actionZoom:b,actionDrag:C,btnDefault:s,btnLink:d,btnBrowse:c,zoomCache:R},previewMarkupTags:{tagBefore1:T,tagBefore2:E,tagAfter:S},previewContentTemplates:{generic:k,html:F,image:I,text:P,office:A,video:D,audio:z,flash:$,object:j,pdf:U,other:B},allowedPreviewTypes:["image","html","text","video","audio","flash","pdf","object"],previewTemplates:{},previewSettings:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:{width:"213px",height:"160px"},text:{width:"213px",height:"160px"},office:{width:"213px",height:"160px"},video:{width:"213px",height:"160px"},audio:{width:"100%",height:"30px"},flash:{width:"213px",height:"160px"},object:{width:"213px",height:"160px"},pdf:{width:"213px",height:"160px"},other:{width:"213px",height:"160px"}},previewSettingsSmall:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:{width:"100%",height:"160px"},text:{width:"100%",height:"160px"},office:{width:"100%",height:"160px"},video:{width:"100%",height:"auto"},audio:{width:"100%",height:"30px"},flash:{width:"100%",height:"auto"},object:{width:"100%",height:"auto"},pdf:{width:"100%",height:"160px"},other:{width:"100%",height:"160px"}},previewZoomSettings:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:L,text:L,office:{width:"100%",height:"100%","max-width":"100%","min-height":"480px"},video:{width:"auto",height:"100%","max-width":"100%"},audio:{width:"100%",height:"30px"},flash:{width:"auto",height:"480px"},object:{width:"auto",height:"100%","max-width":"100%","min-height":"480px"},pdf:L,other:{width:"auto",height:"100%","min-height":"480px"}},fileTypeSettings:{image:function(e,i){return t.compare(e,"image.*")&&!t.compare(e,/(tiff?|wmf)$/i)||t.compare(i,/\.(gif|png|jpe?g)$/i)},html:function(e,i){return t.compare(e,"text/html")||t.compare(i,/\.(htm|html)$/i)},office:function(e,i){return t.compare(e,/(word|excel|powerpoint|office|iwork-pages|tiff?)$/i)||t.compare(i,/\.(rtf|docx?|xlsx?|pptx?|pps|potx?|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i)},text:function(e,i){return t.compare(e,"text.*")||t.compare(i,/\.(xml|javascript)$/i)||t.compare(i,/\.(txt|md|csv|nfo|ini|json|php|js|css)$/i)},video:function(e,i){return t.compare(e,"video.*")&&(t.compare(e,/(ogg|mp4|mp?g|mov|webm|3gp)$/i)||t.compare(i,/\.(og?|mp4|webm|mp?g|mov|3gp)$/i))},audio:function(e,i){return t.compare(e,"audio.*")&&(t.compare(i,/(ogg|mp3|mp?g|wav)$/i)||t.compare(i,/\.(og?|mp3|mp?g|wav)$/i))},flash:function(e,i){return t.compare(e,"application/x-shockwave-flash",!0)||t.compare(i,/\.(swf)$/i)},pdf:function(e,i){return t.compare(e,"application/pdf",!0)||t.compare(i,/\.(pdf)$/i)},object:function(){return!0},other:function(){return!0}},fileActionSettings:{showRemove:!0,showUpload:!0,showDownload:!0,showZoom:!0,showDrag:!0,removeIcon:'<i class="glyphicon glyphicon-trash"></i>',removeClass:"btn btn-kv btn-default btn-outline-secondary",removeErrorClass:"btn btn-kv btn-danger",removeTitle:"Remove file",uploadIcon:'<i class="glyphicon glyphicon-upload"></i>',uploadClass:"btn btn-kv btn-default btn-outline-secondary",uploadTitle:"Upload file",uploadRetryIcon:'<i class="glyphicon glyphicon-repeat"></i>',uploadRetryTitle:"Retry upload",downloadIcon:'<i class="glyphicon glyphicon-download"></i>',downloadClass:"btn btn-kv btn-default btn-outline-secondary",downloadTitle:"Download file",zoomIcon:'<i class="glyphicon glyphicon-zoom-in"></i>',zoomClass:"btn btn-kv btn-default btn-outline-secondary",zoomTitle:"View Details",dragIcon:'<i class="glyphicon glyphicon-move"></i>',dragClass:"text-info",dragTitle:"Move / Rearrange",dragSettings:{},indicatorNew:'<i class="glyphicon glyphicon-plus-sign text-warning"></i>',indicatorSuccess:'<i class="glyphicon glyphicon-ok-sign text-success"></i>',indicatorError:'<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',indicatorLoading:'<i class="glyphicon glyphicon-hourglass text-muted"></i>',indicatorNewTitle:"Not uploaded yet",indicatorSuccessTitle:"Uploaded",indicatorErrorTitle:"Upload Error",indicatorLoadingTitle:"Uploading ..."}},e.each(O.defaults,function(t,i){return"allowedPreviewTypes"===t?void(void 0===O.allowedPreviewTypes&&(O.allowedPreviewTypes=i)):void(O[t]=e.extend(!0,{},i,O[t]))}),O._initPreviewTemplates()},_initPreviewTemplates:function(){var i,a=this,r=a.defaults,n=a.previewMarkupTags,o=n.tagAfter;e.each(r.previewContentTemplates,function(e,r){t.isEmpty(a.previewTemplates[e])&&(i=n.tagBefore2,"generic"!==e&&"image"!==e&&"html"!==e&&"text"!==e||(i=n.tagBefore1),a.previewTemplates[e]=i+r+o)})},_initPreviewCache:function(){var i=this;i.previewCache={data:{},init:function(){var e=i.initialPreview;e.length>0&&!t.isArray(e)&&(e=e.split(i.initialPreviewDelimiter)),i.previewCache.data={content:e,config:i.initialPreviewConfig,tags:i.initialPreviewThumbTags}},count:function(){return i.previewCache.data&&i.previewCache.data.content?i.previewCache.data.content.length:0},get:function(a,r){var n,o,l,s,d,c,p,u="init_"+a,f=i.previewCache.data,m=f.config[a],v=f.content[a],g=i.previewInitId+"-"+u,h=t.ifSet("previewAsData",m,i.initialPreviewAsData),w=function(e,a,r,n,o,l,s,d,c){return d=" file-preview-initial "+t.SORT_CSS+(d?" "+d:""),i._generatePreviewTemplate(e,a,r,n,o,!1,null,d,l,s,c)};return v?(r=void 0===r?!0:r,l=t.ifSet("type",m,i.initialPreviewFileType||"generic"),d=t.ifSet("filename",m,t.ifSet("caption",m)),c=t.ifSet("filetype",m,l),s=i.previewCache.footer(a,r,m&&m.size||null),p=t.ifSet("frameClass",m),n=h?w(l,v,d,c,g,s,u,p):w("generic",v,d,c,g,s,u,p,l).setTokens({content:f.content[a]}),f.tags.length&&f.tags[a]&&(n=t.replaceTags(n,f.tags[a])),t.isEmpty(m)||t.isEmpty(m.frameAttr)||(o=e(document.createElement("div")).html(n),o.find(".file-preview-initial").attr(m.frameAttr),n=o.html(),o.remove()),n):""},add:function(e,a,r,n){var o,l=i.previewCache.data;return t.isArray(e)||(e=e.split(i.initialPreviewDelimiter)),n?(o=l.content.push(e)-1,l.config[o]=a,l.tags[o]=r):(o=e.length-1,l.content=e,l.config=a,l.tags=r),i.previewCache.data=l,o},set:function(e,a,r,n){var o,l,s=i.previewCache.data;if(e&&e.length&&(t.isArray(e)||(e=e.split(i.initialPreviewDelimiter)),l=e.filter(function(e){return null!==e}),l.length)){if(void 0===s.content&&(s.content=[]),void 0===s.config&&(s.config=[]),void 0===s.tags&&(s.tags=[]),n){for(o=0;o<e.length;o++)e[o]&&s.content.push(e[o]);for(o=0;o<a.length;o++)a[o]&&s.config.push(a[o]);for(o=0;o<r.length;o++)r[o]&&s.tags.push(r[o])}else s.content=e,s.config=a,s.tags=r;i.previewCache.data=s}},unset:function(e){var a=i.previewCache.count();if(a){if(1===a)return i.previewCache.data.content=[],i.previewCache.data.config=[],i.previewCache.data.tags=[],i.initialPreview=[],i.initialPreviewConfig=[],void(i.initialPreviewThumbTags=[]);i.previewCache.data.content=t.spliceArray(i.previewCache.data.content,e),i.previewCache.data.config=t.spliceArray(i.previewCache.data.config,e),i.previewCache.data.tags=t.spliceArray(i.previewCache.data.tags,e)}},out:function(){var e,t,a="",r=i.previewCache.count();if(0===r)return{content:"",caption:""};for(t=0;r>t;t++)a+=i.previewCache.get(t);return e=i._getMsgSelected(r),{content:a,caption:e}},footer:function(e,a,r){var n=i.previewCache.data||{};if(t.isEmpty(n.content))return"";(t.isEmpty(n.config)||t.isEmpty(n.config[e]))&&(n.config[e]={}),a=void 0===a?!0:a;var o,l=n.config[e],s=t.ifSet("caption",l),d=t.ifSet("width",l,"auto"),c=t.ifSet("url",l,!1),p=t.ifSet("key",l,null),u=i.fileActionSettings,f=i.initialPreviewShowDelete||!1,m=l.downloadUrl||i.initialPreviewDownloadUrl||"",v=l.filename||l.caption||"",g=!!m,h=t.ifSet("showDelete",l,t.ifSet("showDelete",u,f)),w=t.ifSet("showDownload",l,t.ifSet("showDownload",u,g)),_=t.ifSet("showZoom",l,t.ifSet("showZoom",u,!0)),b=t.ifSet("showDrag",l,t.ifSet("showDrag",u,!0)),C=c===!1&&a;return w=w&&l.downloadUrl!==!1&&!!m,o=i._renderFileActions(!1,w,h,_,b,C,c,p,!0,m,v),i._getLayoutTemplate("footer").setTokens({progress:i._renderThumbProgress(),actions:o,caption:s,size:i._getSize(r),width:d,indicator:""})}},i.previewCache.init()},_handler:function(e,t,i){var a=this,r=a.namespace,n=t.split(" ").join(r+" ")+r;e&&e.length&&e.off(n).on(n,i)},_log:function(e){var t=this,i=t.$element.attr("id");i&&(e='"'+i+'": '+e),"undefined"!=typeof window.console.log?window.console.log(e):window.alert(e)},_validate:function(){var e=this,t="file"===e.$element.attr("type");return t||e._log('The input "type" must be set to "file" for initializing the "bootstrap-fileinput" plugin.'),t},_errorsExist:function(){var t,i=this,a=i.$errorContainer.find("li");return a.length?!0:(t=e(document.createElement("div")).html(i.$errorContainer.html()),t.find(".kv-error-close").remove(),t.find("ul").remove(),!!e.trim(t.text()).length)},_errorHandler:function(e,t){var i=this,a=e.target.error,r=function(e){i._showError(e.replace("{name}",t))};r(a.code===a.NOT_FOUND_ERR?i.msgFileNotFound:a.code===a.SECURITY_ERR?i.msgFileSecured:a.code===a.NOT_READABLE_ERR?i.msgFileNotReadable:a.code===a.ABORT_ERR?i.msgFilePreviewAborted:i.msgFilePreviewError)},_addError:function(e){var t=this,i=t.$errorContainer;e&&i.length&&(i.html(t.errorCloseButton+e),t._handler(i.find(".kv-error-close"),"click",function(){setTimeout(function(){t.showPreview&&!t.getFrames().length&&t.clear(),i.fadeOut("slow")},10)}))},_setValidationError:function(e){var i=this;e=(e?e+" ":"")+"has-error",i.$container.removeClass(e).addClass("has-error"),t.addCss(i.$captionContainer,"is-invalid")},_resetErrors:function(e){var t=this,i=t.$errorContainer;t.isError=!1,t.$container.removeClass("has-error"),t.$captionContainer.removeClass("is-invalid"),i.html(""),e?i.fadeOut("slow"):i.hide()},_showFolderError:function(e){var t,i=this,a=i.$errorContainer;e&&(t=i.msgFoldersNotAllowed.replace("{n}",e),i._addError(t),i._setValidationError(),a.fadeIn(800),i._raise("filefoldererror",[e,t]))},_showUploadError:function(e,t,i){var a=this,r=a.$errorContainer,n=i||"fileuploaderror",o=t&&t.id?'<li data-file-id="'+t.id+'">'+e+"</li>":"<li>"+e+"</li>";return 0===r.find("ul").length?a._addError("<ul>"+o+"</ul>"):r.find("ul").append(o),r.fadeIn(800),a._raise(n,[t,e]),a._setValidationError("file-input-new"),!0},_showError:function(e,t,i){var a=this,r=a.$errorContainer,n=i||"fileerror";return t=t||{},t.reader=a.reader,a._addError(e),r.fadeIn(800),a._raise(n,[t,e]),a.isAjaxUpload||a._clearFileInput(),a._setValidationError("file-input-new"),a.$btnUpload.attr("disabled",!0),!0},_noFilesError:function(e){var t=this,i=t.minFileCount>1?t.filePlural:t.fileSingle,a=t.msgFilesTooLess.replace("{n}",t.minFileCount).replace("{files}",i),r=t.$errorContainer;t._addError(a),t.isError=!0,t._updateFileDetails(0),r.fadeIn(800),t._raise("fileerror",[e,a]),t._clearFileInput(),t._setValidationError()},_parseError:function(t,i,a,r){var n,o=this,l=e.trim(a+""),s=void 0!==i.responseJSON&&void 0!==i.responseJSON.error?i.responseJSON.error:i.responseText;return o.cancelling&&o.msgUploadAborted&&(l=o.msgUploadAborted),o.showAjaxErrorDetails&&s&&(s=e.trim(s.replace(/\n\s*\n/g,"\n")),n=s.length?"<pre>"+s+"</pre>":"",l+=l?n:s),l||(l=o.msgAjaxError.replace("{operation}",t)),o.cancelling=!1,r?"<b>"+r+": </b>"+l:l},_parseFileType:function(e,i){var a,r,n,o,l=this,s=l.allowedPreviewTypes||[];if("application/text-plain"===e)return"text";for(o=0;o<s.length;o++)if(n=s[o],a=l.fileTypeSettings[n],r=a(e,i)?n:"",!t.isEmpty(r))return r;return"other"},_getPreviewIcon:function(t){var i,a=this,r=null;return t&&t.indexOf(".")>-1&&(i=t.split(".").pop(),a.previewFileIconSettings&&(r=a.previewFileIconSettings[i]||a.previewFileIconSettings[i.toLowerCase()]||null),a.previewFileExtSettings&&e.each(a.previewFileExtSettings,function(e,t){return a.previewFileIconSettings[e]&&t(i)?void(r=a.previewFileIconSettings[e]):void 0})),r},_parseFilePreviewIcon:function(e,t){var i=this,a=i._getPreviewIcon(t)||i.previewFileIcon,r=e;return r.indexOf("{previewFileIcon}")>-1&&(r=r.setTokens({previewFileIconClass:i.previewFileIconClass,previewFileIcon:a})),r},_raise:function(t,i){var a=this,r=e.Event(t);if(void 0!==i?a.$element.trigger(r,i):a.$element.trigger(r),r.isDefaultPrevented()||r.result===!1)return!1;switch(t){case"filebatchuploadcomplete":case"filebatchuploadsuccess":case"fileuploaded":case"fileclear":case"filecleared":case"filereset":case"fileerror":case"filefoldererror":case"fileuploaderror":case"filebatchuploaderror":case"filedeleteerror":case"filecustomerror":case"filesuccessremove":break;default:a.ajaxAborted||(a.ajaxAborted=r.result)}return!0},_listenFullScreen:function(e){var t,i,a=this,r=a.$modal;r&&r.length&&(t=r&&r.find(".btn-fullscreen"),i=r&&r.find(".btn-borderless"),t.length&&i.length&&(t.removeClass("active").attr("aria-pressed","false"),i.removeClass("active").attr("aria-pressed","false"),e?t.addClass("active").attr("aria-pressed","true"):i.addClass("active").attr("aria-pressed","true"),r.hasClass("file-zoom-fullscreen")?a._maximizeZoomDialog():e?a._maximizeZoomDialog():i.removeClass("active").attr("aria-pressed","false")))},_listen:function(){var i,a=this,r=a.$element,n=a.$form,o=a.$container;a._handler(r,"change",e.proxy(a._change,a)),a.showBrowse&&a._handler(a.$btnFile,"click",e.proxy(a._browse,a)),a._handler(o.find(".fileinput-remove:not([disabled])"),"click",e.proxy(a.clear,a)),a._handler(o.find(".fileinput-cancel"),"click",e.proxy(a.cancel,a)),a._initDragDrop(),a._handler(n,"reset",e.proxy(a.clear,a)),a.isAjaxUpload||a._handler(n,"submit",e.proxy(a._submitForm,a)),a._handler(a.$container.find(".fileinput-upload"),"click",e.proxy(a._uploadClick,a)),a._handler(e(window),"resize",function(){a._listenFullScreen(screen.width===window.innerWidth&&screen.height===window.innerHeight)}),i="webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",a._handler(e(document),i,function(){a._listenFullScreen(t.checkFullScreen())}),a._autoFitContent(),a._initClickable()},_autoFitContent:function(){var t,i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a=this,r=400>i?a.previewSettingsSmall||a.defaults.previewSettingsSmall:a.previewSettings||a.defaults.previewSettings;e.each(r,function(e,i){t=".file-preview-frame .file-preview-"+e,a.$preview.find(t+".kv-preview-data,"+t+" .kv-preview-data").css(i)})},_initClickable:function(){var i,a=this;a.isClickable&&(i=a.isAjaxUpload?a.$dropZone:a.$preview.find(".file-default-preview"),t.addCss(i,"clickable"),i.attr("tabindex",-1),a._handler(i,"click",function(t){var r=e(t.target);i.find(".kv-fileinput-error:visible").length||r.parents(".file-preview-thumbnails").length&&!r.parents(".file-default-preview").length||(a.$element.trigger("click"),i.blur())}))},_initDragDrop:function(){var t=this,i=t.$dropZone;t.isAjaxUpload&&t.dropZoneEnabled&&t.showPreview&&(t._handler(i,"dragenter dragover",e.proxy(t._zoneDragEnter,t)),t._handler(i,"dragleave",e.proxy(t._zoneDragLeave,t)),t._handler(i,"drop",e.proxy(t._zoneDrop,t)),t._handler(e(document),"dragenter dragover drop",t._zoneDragDropInit))},_zoneDragDropInit:function(e){e.stopPropagation(),e.preventDefault()},_zoneDragEnter:function(i){var a=this,r=e.inArray("Files",i.originalEvent.dataTransfer.types)>-1;return a._zoneDragDropInit(i),a.isDisabled||!r?(i.originalEvent.dataTransfer.effectAllowed="none",void(i.originalEvent.dataTransfer.dropEffect="none")):void t.addCss(a.$dropZone,"file-highlighted")},_zoneDragLeave:function(e){var t=this;t._zoneDragDropInit(e),t.isDisabled||t.$dropZone.removeClass("file-highlighted")},_zoneDrop:function(e){var i=this;e.preventDefault(),i.isDisabled||t.isEmpty(e.originalEvent.dataTransfer.files)||(i._change(e,"dragdrop"),i.$dropZone.removeClass("file-highlighted"));},_uploadClick:function(e){var i,a=this,r=a.$container.find(".fileinput-upload"),n=!r.hasClass("disabled")&&t.isEmpty(r.attr("disabled"));if(!e||!e.isDefaultPrevented()){if(!a.isAjaxUpload)return void(n&&"submit"!==r.attr("type")&&(i=r.closest("form"),i.length&&i.trigger("submit"),e.preventDefault()));e.preventDefault(),n&&a.upload()}},_submitForm:function(){var e=this;return e._isFileSelectionValid()&&!e._abort({})},_clearPreview:function(){var i=this,a=i.$preview,r=i.showUploadedThumbs?i.getFrames(":not(.file-preview-success)"):i.getFrames();r.each(function(){var i=e(this);i.remove(),t.cleanZoomCache(a.find("#zoom-"+i.attr("id")))}),i.getFrames().length&&i.showPreview||i._resetUpload(),i._validateDefaultPreview()},_initSortable:function(){var i,a=this,r=a.$preview,n="."+t.SORT_CSS;window.KvSortable&&0!==r.find(n).length&&(i={handle:".drag-handle-init",dataIdAttr:"data-preview-id",scroll:!1,draggable:n,onSort:function(i){var r=i.oldIndex,n=i.newIndex,o=0;a.initialPreview=t.moveArray(a.initialPreview,r,n),a.initialPreviewConfig=t.moveArray(a.initialPreviewConfig,r,n),a.previewCache.init(),a.getFrames(".file-preview-initial").each(function(){e(this).attr("data-fileindex","init_"+o),o++}),a._raise("filesorted",{previewId:e(i.item).attr("id"),oldIndex:r,newIndex:n,stack:a.initialPreviewConfig})}},r.data("kvsortable")&&r.kvsortable("destroy"),e.extend(!0,i,a.fileActionSettings.dragSettings),r.kvsortable(i))},_setPreviewContent:function(e){var t=this;t.$preview.html(e),t._autoFitContent()},_initPreview:function(e){var i,a=this,r=a.initialCaption||"";return a.previewCache.count()?(i=a.previewCache.out(),r=e&&a.initialCaption?a.initialCaption:i.caption,a._setPreviewContent(i.content),a._setInitThumbAttr(),a._setCaption(r),a._initSortable(),void(t.isEmpty(i.content)||a.$container.removeClass("file-input-new"))):(a._clearPreview(),void(e?a._setCaption(r):a._initCaption()))},_getZoomButton:function(e){var t=this,i=t.previewZoomButtonIcons[e],a=t.previewZoomButtonClasses[e],r=' title="'+(t.previewZoomButtonTitles[e]||"")+'" ',n=r+("close"===e?' data-dismiss="modal" aria-hidden="true"':"");return"fullscreen"!==e&&"borderless"!==e&&"toggleheader"!==e||(n+=' data-toggle="button" aria-pressed="false" autocomplete="off"'),'<button type="button" class="'+a+" btn-"+e+'"'+n+">"+i+"</button>"},_getModalContent:function(){var e=this;return e._getLayoutTemplate("modal").setTokens({rtl:e.rtl?" kv-rtl":"",zoomFrameClass:e.frameClass,heading:e.msgZoomModalHeading,prev:e._getZoomButton("prev"),next:e._getZoomButton("next"),toggleheader:e._getZoomButton("toggleheader"),fullscreen:e._getZoomButton("fullscreen"),borderless:e._getZoomButton("borderless"),close:e._getZoomButton("close")})},_listenModalEvent:function(e){var i=this,a=i.$modal,r=function(e){return{sourceEvent:e,previewId:a.data("previewId"),modal:a}};a.on(e+".bs.modal",function(n){var o=a.find(".btn-fullscreen"),l=a.find(".btn-borderless");i._raise("filezoom"+e,r(n)),"shown"===e&&(l.removeClass("active").attr("aria-pressed","false"),o.removeClass("active").attr("aria-pressed","false"),a.hasClass("file-zoom-fullscreen")&&(i._maximizeZoomDialog(),t.checkFullScreen()?o.addClass("active").attr("aria-pressed","true"):l.addClass("active").attr("aria-pressed","true")))})},_initZoom:function(){var i,a=this,r=a._getLayoutTemplate("modalMain"),n="#"+t.MODAL_ID;a.showPreview&&(a.$modal=e(n),a.$modal&&a.$modal.length||(i=e(document.createElement("div")).html(r).insertAfter(a.$container),a.$modal=e(n).insertBefore(i),i.remove()),t.initModal(a.$modal),a.$modal.html(a._getModalContent()),e.each(t.MODAL_EVENTS,function(e,t){a._listenModalEvent(t)}))},_initZoomButtons:function(){var t,i,a=this,r=a.$modal.data("previewId")||"",n=a.getFrames().toArray(),o=n.length,l=a.$modal.find(".btn-prev"),s=a.$modal.find(".btn-next");return n.length<2?(l.hide(),void s.hide()):(l.show(),s.show(),void(o&&(t=e(n[0]),i=e(n[o-1]),l.removeAttr("disabled"),s.removeAttr("disabled"),t.length&&t.attr("id")===r&&l.attr("disabled",!0),i.length&&i.attr("id")===r&&s.attr("disabled",!0))))},_maximizeZoomDialog:function(){var t=this,i=t.$modal,a=i.find(".modal-header:visible"),r=i.find(".modal-footer:visible"),n=i.find(".modal-body"),o=e(window).height(),l=0;i.addClass("file-zoom-fullscreen"),a&&a.length&&(o-=a.outerHeight(!0)),r&&r.length&&(o-=r.outerHeight(!0)),n&&n.length&&(l=n.outerHeight(!0)-n.height(),o-=l),i.find(".kv-zoom-body").height(o)},_resizeZoomDialog:function(e){var i=this,a=i.$modal,r=a.find(".btn-fullscreen"),n=a.find(".btn-borderless");if(a.hasClass("file-zoom-fullscreen"))t.toggleFullScreen(!1),e?r.hasClass("active")||(a.removeClass("file-zoom-fullscreen"),i._resizeZoomDialog(!0),n.hasClass("active")&&n.removeClass("active").attr("aria-pressed","false")):r.hasClass("active")?r.removeClass("active").attr("aria-pressed","false"):(a.removeClass("file-zoom-fullscreen"),i.$modal.find(".kv-zoom-body").css("height",i.zoomModalHeight));else{if(!e)return void i._maximizeZoomDialog();t.toggleFullScreen(!0)}a.focus()},_setZoomContent:function(i,a){var r,n,o,l,s,d,c,p,u,f,m=this,v=i.attr("id"),g=m.$modal,h=g.find(".btn-prev"),w=g.find(".btn-next"),_=g.find(".btn-fullscreen"),b=g.find(".btn-borderless"),C=g.find(".btn-toggleheader"),y=m.$preview.find("#zoom-"+v);n=y.attr("data-template")||"generic",r=y.find(".kv-file-content"),o=r.length?r.html():"",u=i.data("caption")||"",f=i.data("size")||"",l=u+" "+f,g.find(".kv-zoom-title").attr("title",e("<div/>").html(l).text()).html(l),s=g.find(".kv-zoom-body"),g.removeClass("kv-single-content"),a?(p=s.addClass("file-thumb-loading").clone().insertAfter(s),s.html(o).hide(),p.fadeOut("fast",function(){s.fadeIn("fast",function(){s.removeClass("file-thumb-loading")}),p.remove()})):s.html(o),c=m.previewZoomSettings[n],c&&(d=s.find(".kv-preview-data"),t.addCss(d,"file-zoom-detail"),e.each(c,function(e,t){d.css(e,t),(d.attr("width")&&"width"===e||d.attr("height")&&"height"===e)&&d.removeAttr(e)})),g.data("previewId",v);var x=s.find("img");x.length&&t.adjustOrientedImage(x,!0),m._handler(h,"click",function(){m._zoomSlideShow("prev",v)}),m._handler(w,"click",function(){m._zoomSlideShow("next",v)}),m._handler(_,"click",function(){m._resizeZoomDialog(!0)}),m._handler(b,"click",function(){m._resizeZoomDialog(!1)}),m._handler(C,"click",function(){var e,t=g.find(".modal-header"),i=g.find(".modal-body .floating-buttons"),a=t.find(".kv-zoom-actions"),r=function(e){var i=m.$modal.find(".kv-zoom-body"),a=m.zoomModalHeight;g.hasClass("file-zoom-fullscreen")&&(a=i.outerHeight(!0),e||(a-=t.outerHeight(!0))),i.css("height",e?a+e:a)};t.is(":visible")?(e=t.outerHeight(!0),t.slideUp("slow",function(){a.find(".btn").appendTo(i),r(e)})):(i.find(".btn").appendTo(a),t.slideDown("slow",function(){r()})),g.focus()}),m._handler(g,"keydown",function(e){var t=e.which||e.keyCode;37!==t||h.attr("disabled")||m._zoomSlideShow("prev",v),39!==t||w.attr("disabled")||m._zoomSlideShow("next",v)})},_zoomPreview:function(e){var i,a=this,r=a.$modal;if(!e.length)throw"Cannot zoom to detailed preview!";t.initModal(r),r.html(a._getModalContent()),i=e.closest(t.FRAMES),a._setZoomContent(i),r.modal("show"),a._initZoomButtons()},_zoomSlideShow:function(t,i){var a,r,n,o=this,l=o.$modal.find(".kv-zoom-actions .btn-"+t),s=o.getFrames().toArray(),d=s.length;if(!l.attr("disabled")){for(r=0;d>r;r++)if(e(s[r]).attr("id")===i){n="prev"===t?r-1:r+1;break}0>n||n>=d||!s[n]||(a=e(s[n]),a.length&&o._setZoomContent(a,!0),o._initZoomButtons(),o._raise("filezoom"+t,{previewId:i,modal:o.$modal}))}},_initZoomButton:function(){var t=this;t.$preview.find(".kv-file-zoom").each(function(){var i=e(this);t._handler(i,"click",function(){t._zoomPreview(i)})})},_clearObjects:function(t){t.find("video audio").each(function(){this.pause(),e(this).remove()}),t.find("img object div").each(function(){e(this).remove()})},_clearFileInput:function(){var i,a,r,n=this,o=n.$element;n.fileInputCleared=!0,t.isEmpty(o.val())||(n.isIE9||n.isIE10?(i=o.closest("form"),a=e(document.createElement("form")),r=e(document.createElement("div")),o.before(r),i.length?i.after(a):r.after(a),a.append(o).trigger("reset"),r.before(o).remove(),a.remove()):o.val(""))},_resetUpload:function(){var e=this;e.uploadCache={content:[],config:[],tags:[],append:!0},e.uploadCount=0,e.uploadStatus={},e.uploadLog=[],e.uploadAsyncCount=0,e.loadedImages=[],e.totalImagesCount=0,e.$btnUpload.removeAttr("disabled"),e._setProgress(0),e.$progress.hide(),e._resetErrors(!1),e.ajaxAborted=!1,e.ajaxRequests=[],e._resetCanvas(),e.cacheInitialPreview={},e.overwriteInitial&&(e.initialPreview=[],e.initialPreviewConfig=[],e.initialPreviewThumbTags=[],e.previewCache.data={content:[],config:[],tags:[]})},_resetCanvas:function(){var e=this;e.canvas&&e.imageCanvasContext&&e.imageCanvasContext.clearRect(0,0,e.canvas.width,e.canvas.height)},_hasInitialPreview:function(){var e=this;return!e.overwriteInitial&&e.previewCache.count()},_resetPreview:function(){var e,t,i=this;i.previewCache.count()?(e=i.previewCache.out(),i._setPreviewContent(e.content),i._setInitThumbAttr(),t=i.initialCaption?i.initialCaption:e.caption,i._setCaption(t)):(i._clearPreview(),i._initCaption()),i.showPreview&&(i._initZoom(),i._initSortable())},_clearDefaultPreview:function(){var e=this;e.$preview.find(".file-default-preview").remove()},_validateDefaultPreview:function(){var e=this;e.showPreview&&!t.isEmpty(e.defaultPreviewContent)&&(e._setPreviewContent('<div class="file-default-preview">'+e.defaultPreviewContent+"</div>"),e.$container.removeClass("file-input-new"),e._initClickable())},_resetPreviewThumbs:function(e){var t,i=this;return e?(i._clearPreview(),void i.clearStack()):void(i._hasInitialPreview()?(t=i.previewCache.out(),i._setPreviewContent(t.content),i._setInitThumbAttr(),i._setCaption(t.caption),i._initPreviewActions()):i._clearPreview())},_getLayoutTemplate:function(e){var i=this,a=i.layoutTemplates[e];return t.isEmpty(i.customLayoutTags)?a:t.replaceTags(a,i.customLayoutTags)},_getPreviewTemplate:function(e){var i=this,a=i.previewTemplates[e];return t.isEmpty(i.customPreviewTags)?a:t.replaceTags(a,i.customPreviewTags)},_getOutData:function(e,t,i){var a=this;return e=e||{},t=t||{},i=i||a.filestack.slice(0)||{},{form:a.formdata,files:i,filenames:a.filenames,filescount:a.getFilesCount(),extra:a._getExtraData(),response:t,reader:a.reader,jqXHR:e}},_getMsgSelected:function(e){var t=this,i=1===e?t.fileSingle:t.filePlural;return e>0?t.msgSelected.replace("{n}",e).replace("{files}",i):t.msgNoFilesSelected},_getFrame:function(t){var i=this,a=e("#"+t);return a.length?a:(i._log('Invalid thumb frame with id: "'+t+'".'),null)},_getThumbs:function(e){return e=e||"",this.getFrames(":not(.file-preview-initial)"+e)},_getExtraData:function(e,t){var i=this,a=i.uploadExtraData;return"function"==typeof i.uploadExtraData&&(a=i.uploadExtraData(e,t)),a},_initXhr:function(e,t,i){var a=this;return e.upload&&e.upload.addEventListener("progress",function(e){var r=0,n=e.total,o=e.loaded||e.position;e.lengthComputable&&(r=Math.floor(o/n*100)),t?a._setAsyncUploadStatus(t,r,i):a._setProgress(r)},!1),e},_mergeAjaxCallback:function(e,t,i){var a,r=this,n=r.ajaxSettings,o=r.mergeAjaxCallbacks;"delete"===i&&(n=r.ajaxDeleteSettings,o=r.mergeAjaxDeleteCallbacks),a=n[e],o&&"function"==typeof a?"before"===o?n[e]=function(){a.apply(this,arguments),t.apply(this,arguments)}:n[e]=function(){t.apply(this,arguments),a.apply(this,arguments)}:n[e]=t,"delete"===i?r.ajaxDeleteSettings=n:r.ajaxSettings=n},_ajaxSubmit:function(t,i,a,r,n,o){var l,s=this;s._raise("filepreajax",[n,o])&&(s._uploadExtra(n,o),s._mergeAjaxCallback("beforeSend",t),s._mergeAjaxCallback("success",i),s._mergeAjaxCallback("complete",a),s._mergeAjaxCallback("error",r),l=e.extend(!0,{},{xhr:function(){var t=e.ajaxSettings.xhr();return s._initXhr(t,n,s.getFileStack().length)},url:o&&s.uploadUrlThumb?s.uploadUrlThumb:s.uploadUrl,type:"POST",dataType:"json",data:s.formdata,cache:!1,processData:!1,contentType:!1},s.ajaxSettings),s.ajaxRequests.push(e.ajax(l)))},_mergeArray:function(e,i){var a=this,r=t.cleanArray(a[e]),n=t.cleanArray(i);a[e]=r.concat(n)},_initUploadSuccess:function(i,a,r){var n,o,l,s,d,c,p,u,f,m=this;m.showPreview&&"object"==typeof i&&!e.isEmptyObject(i)&&void 0!==i.initialPreview&&i.initialPreview.length>0&&(m.hasInitData=!0,c=i.initialPreview||[],p=i.initialPreviewConfig||[],u=i.initialPreviewThumbTags||[],n=void 0===i.append||i.append,c.length>0&&!t.isArray(c)&&(c=c.split(m.initialPreviewDelimiter)),m._mergeArray("initialPreview",c),m._mergeArray("initialPreviewConfig",p),m._mergeArray("initialPreviewThumbTags",u),void 0!==a?r?(f=a.attr("data-fileindex"),m.uploadCache.content[f]=c[0],m.uploadCache.config[f]=p[0]||[],m.uploadCache.tags[f]=u[0]||[],m.uploadCache.append=n):(l=m.previewCache.add(c,p[0],u[0],n),o=m.previewCache.get(l,!1),s=e(document.createElement("div")).html(o).hide().insertAfter(a),d=s.find(".kv-zoom-cache"),d&&d.length&&d.insertAfter(a),a.fadeOut("slow",function(){var e=s.find(".file-preview-frame");e&&e.length&&e.insertBefore(a).fadeIn("slow").css("display:inline-block"),m._initPreviewActions(),m._clearFileInput(),t.cleanZoomCache(m.$preview.find("#zoom-"+a.attr("id"))),a.remove(),s.remove(),m._initSortable()})):(m.previewCache.set(c,p,u,n),m._initPreview(),m._initPreviewActions()))},_initSuccessThumbs:function(){var i=this;i.showPreview&&i._getThumbs(t.FRAMES+".file-preview-success").each(function(){var a=e(this),r=i.$preview,n=a.find(".kv-file-remove");n.removeAttr("disabled"),i._handler(n,"click",function(){var e=a.attr("id"),n=i._raise("filesuccessremove",[e,a.attr("data-fileindex")]);t.cleanMemory(a),n!==!1&&a.fadeOut("slow",function(){t.cleanZoomCache(r.find("#zoom-"+e)),a.remove(),i.getFrames().length||i.reset()})})})},_checkAsyncComplete:function(){var t,i,a=this;for(i=0;i<a.filestack.length;i++)if(a.filestack[i]&&(t=a.previewInitId+"-"+i,-1===e.inArray(t,a.uploadLog)))return!1;return a.uploadAsyncCount===a.uploadLog.length},_uploadExtra:function(t,i){var a=this,r=a._getExtraData(t,i);0!==r.length&&e.each(r,function(e,t){a.formdata.append(e,t)})},_uploadSingle:function(i,a){var r,n,o,l,s,d,c,p,u,f,m,v=this,g=v.getFileStack().length,h=new FormData,w=v.previewInitId+"-"+i,_=v.filestack.length>0||!e.isEmptyObject(v.uploadExtraData),b=e("#"+w).find(".file-thumb-progress"),C={id:w,index:i};v.formdata=h,v.showPreview&&(n=e("#"+w+":not(.file-preview-initial)"),l=n.find(".kv-file-upload"),s=n.find(".kv-file-remove"),b.show()),0===g||!_||l&&l.hasClass("disabled")||v._abort(C)||(m=function(e,t){d||v.updateStack(e,void 0),v.uploadLog.push(t),v._checkAsyncComplete()&&(v.fileBatchCompleted=!0)},o=function(){var e,i,a,r=v.uploadCache,n=0,o=v.cacheInitialPreview;v.fileBatchCompleted&&(o&&o.content&&(n=o.content.length),setTimeout(function(){var l=0===v.getFileStack(!0).length;if(v.showPreview){if(v.previewCache.set(r.content,r.config,r.tags,r.append),n){for(i=0;i<r.content.length;i++)a=i+n,o.content[a]=r.content[i],o.config.length&&(o.config[a]=r.config[i]),o.tags.length&&(o.tags[a]=r.tags[i]);v.initialPreview=t.cleanArray(o.content),v.initialPreviewConfig=t.cleanArray(o.config),v.initialPreviewThumbTags=t.cleanArray(o.tags)}else v.initialPreview=r.content,v.initialPreviewConfig=r.config,v.initialPreviewThumbTags=r.tags;v.cacheInitialPreview={},v.hasInitData&&(v._initPreview(),v._initPreviewActions())}v.unlock(l),l&&v._clearFileInput(),e=v.$preview.find(".file-preview-initial"),v.uploadAsync&&e.length&&(t.addCss(e,t.SORT_CSS),v._initSortable()),v._raise("filebatchuploadcomplete",[v.filestack,v._getExtraData()]),v.uploadCount=0,v.uploadStatus={},v.uploadLog=[],v._setProgress(101),v.ajaxAborted=!1},100))},c=function(o){r=v._getOutData(o),v.fileBatchCompleted=!1,a||(v.ajaxAborted=!1),v.showPreview&&(n.hasClass("file-preview-success")||(v._setThumbStatus(n,"Loading"),t.addCss(n,"file-uploading")),l.attr("disabled",!0),s.attr("disabled",!0)),a||v.lock(),v._raise("filepreupload",[r,w,i]),e.extend(!0,C,r),v._abort(C)&&(o.abort(),a||(v._setThumbStatus(n,"New"),n.removeClass("file-uploading"),l.removeAttr("disabled"),s.removeAttr("disabled"),v.unlock()),v._setProgressCancelled())},p=function(o,s,c){var p=v.showPreview&&n.attr("id")?n.attr("id"):w;r=v._getOutData(c,o),e.extend(!0,C,r),setTimeout(function(){t.isEmpty(o)||t.isEmpty(o.error)?(v.showPreview&&(v._setThumbStatus(n,"Success"),l.hide(),v._initUploadSuccess(o,n,a),v._setProgress(101,b)),v._raise("fileuploaded",[r,p,i]),a?m(i,p):v.updateStack(i,void 0)):(d=!0,v._showUploadError(o.error,C),v._setPreviewError(n,i,v.filestack[i],v.retryErrorUploads),v.retryErrorUploads||l.hide(),a&&m(i,p),v._setProgress(101,e("#"+p).find(".file-thumb-progress"),v.msgUploadError))},100)},u=function(){setTimeout(function(){v.showPreview&&(l.removeAttr("disabled"),s.removeAttr("disabled"),n.removeClass("file-uploading")),a?o():(v.unlock(!1),v._clearFileInput()),v._initSuccessThumbs()},100)},f=function(t,r,o){var s=v.ajaxOperations.uploadThumb,c=v._parseError(s,t,o,a&&v.filestack[i].name?v.filestack[i].name:null);d=!0,setTimeout(function(){a&&m(i,w),v.uploadStatus[w]=100,v._setPreviewError(n,i,v.filestack[i],v.retryErrorUploads),v.retryErrorUploads||l.hide(),e.extend(!0,C,v._getOutData(t)),v._setProgress(101,b,v.msgAjaxProgressError.replace("{operation}",s)),v._setProgress(101,e("#"+w).find(".file-thumb-progress"),v.msgUploadError),v._showUploadError(c,C)},100)},h.append(v.uploadFileAttr,v.filestack[i],v.filenames[i]),h.append("file_id",i),v._ajaxSubmit(c,p,u,f,w,i))},_uploadBatch:function(){var i,a,r,n,o,l=this,s=l.filestack,d=s.length,c={},p=l.filestack.length>0||!e.isEmptyObject(l.uploadExtraData);l.formdata=new FormData,0!==d&&p&&!l._abort(c)&&(o=function(){e.each(s,function(e){l.updateStack(e,void 0)}),l._clearFileInput()},i=function(i){l.lock();var a=l._getOutData(i);l.ajaxAborted=!1,l.showPreview&&l._getThumbs().each(function(){var i=e(this),a=i.find(".kv-file-upload"),r=i.find(".kv-file-remove");i.hasClass("file-preview-success")||(l._setThumbStatus(i,"Loading"),t.addCss(i,"file-uploading")),a.attr("disabled",!0),r.attr("disabled",!0)}),l._raise("filebatchpreupload",[a]),l._abort(a)&&(i.abort(),l._getThumbs().each(function(){var t=e(this),i=t.find(".kv-file-upload"),a=t.find(".kv-file-remove");t.hasClass("file-preview-loading")&&(l._setThumbStatus(t,"New"),t.removeClass("file-uploading")),i.removeAttr("disabled"),a.removeAttr("disabled")}),l._setProgressCancelled())},a=function(i,a,r){var n=l._getOutData(r,i),s=0,d=l._getThumbs(":not(.file-preview-success)"),c=t.isEmpty(i)||t.isEmpty(i.errorkeys)?[]:i.errorkeys;t.isEmpty(i)||t.isEmpty(i.error)?(l._raise("filebatchuploadsuccess",[n]),o(),l.showPreview?(d.each(function(){var t=e(this);l._setThumbStatus(t,"Success"),t.removeClass("file-uploading"),t.find(".kv-file-upload").hide().removeAttr("disabled")}),l._initUploadSuccess(i)):l.reset(),l._setProgress(101)):(l.showPreview&&(d.each(function(){var t=e(this),i=t.attr("data-fileindex");t.removeClass("file-uploading"),t.find(".kv-file-upload").removeAttr("disabled"),t.find(".kv-file-remove").removeAttr("disabled"),0===c.length||-1!==e.inArray(s,c)?(l._setPreviewError(t,i,l.filestack[i],l.retryErrorUploads),l.retryErrorUploads||(t.find(".kv-file-upload").hide(),l.updateStack(i,void 0))):(t.find(".kv-file-upload").hide(),l._setThumbStatus(t,"Success"),l.updateStack(i,void 0)),t.hasClass("file-preview-error")&&!l.retryErrorUploads||s++}),l._initUploadSuccess(i)),l._showUploadError(i.error,n,"filebatchuploaderror"),l._setProgress(101,l.$progress,l.msgUploadError))},n=function(){l.unlock(),l._initSuccessThumbs(),l._clearFileInput(),l._raise("filebatchuploadcomplete",[l.filestack,l._getExtraData()])},r=function(t,i,a){var r=l._getOutData(t),n=l.ajaxOperations.uploadBatch,o=l._parseError(n,t,a);l._showUploadError(o,r,"filebatchuploaderror"),l.uploadFileCount=d-1,l.showPreview&&(l._getThumbs().each(function(){var t=e(this),i=t.attr("data-fileindex");t.removeClass("file-uploading"),void 0!==l.filestack[i]&&l._setPreviewError(t)}),l._getThumbs().removeClass("file-uploading"),l._getThumbs(" .kv-file-upload").removeAttr("disabled"),l._getThumbs(" .kv-file-delete").removeAttr("disabled"),l._setProgress(101,l.$progress,l.msgAjaxProgressError.replace("{operation}",n)))},e.each(s,function(e,i){t.isEmpty(s[e])||l.formdata.append(l.uploadFileAttr,i,l.filenames[e])}),l._ajaxSubmit(i,a,n,r))},_uploadExtraOnly:function(){var e,i,a,r,n=this,o={};n.formdata=new FormData,n._abort(o)||(e=function(e){n.lock();var t=n._getOutData(e);n._raise("filebatchpreupload",[t]),n._setProgress(50),o.data=t,o.xhr=e,n._abort(o)&&(e.abort(),n._setProgressCancelled())},i=function(e,i,a){var r=n._getOutData(a,e);t.isEmpty(e)||t.isEmpty(e.error)?(n._raise("filebatchuploadsuccess",[r]),n._clearFileInput(),n._initUploadSuccess(e),n._setProgress(101)):n._showUploadError(e.error,r,"filebatchuploaderror")},a=function(){n.unlock(),n._clearFileInput(),n._raise("filebatchuploadcomplete",[n.filestack,n._getExtraData()])},r=function(e,t,i){var a=n._getOutData(e),r=n.ajaxOperations.uploadExtra,l=n._parseError(r,e,i);o.data=a,n._showUploadError(l,a,"filebatchuploaderror"),n._setProgress(101,n.$progress,n.msgAjaxProgressError.replace("{operation}",r))},n._ajaxSubmit(e,i,a,r))},_deleteFileIndex:function(i){var a=this,r=i.attr("data-fileindex");"init_"===r.substring(0,5)&&(r=parseInt(r.replace("init_","")),a.initialPreview=t.spliceArray(a.initialPreview,r),a.initialPreviewConfig=t.spliceArray(a.initialPreviewConfig,r),a.initialPreviewThumbTags=t.spliceArray(a.initialPreviewThumbTags,r),a.getFrames().each(function(){var t=e(this),i=t.attr("data-fileindex");"init_"===i.substring(0,5)&&(i=parseInt(i.replace("init_","")),i>r&&(i--,t.attr("data-fileindex","init_"+i)))}),a.uploadAsync&&(a.cacheInitialPreview=a.getPreview()))},_initFileActions:function(){var i=this,a=i.$preview;i.showPreview&&(i._initZoomButton(),i.getFrames(" .kv-file-remove").each(function(){var r,n,o,l,s=e(this),d=s.closest(t.FRAMES),c=d.attr("id"),p=d.attr("data-fileindex");i._handler(s,"click",function(){return l=i._raise("filepreremove",[c,p]),l!==!1&&i._validateMinCount()?(r=d.hasClass("file-preview-error"),t.cleanMemory(d),void d.fadeOut("slow",function(){t.cleanZoomCache(a.find("#zoom-"+c)),i.updateStack(p,void 0),i._clearObjects(d),d.remove(),c&&r&&i.$errorContainer.find('li[data-file-id="'+c+'"]').fadeOut("fast",function(){e(this).remove(),i._errorsExist()||i._resetErrors()}),i._clearFileInput();var l=i.getFileStack(!0),s=i.previewCache.count(),u=l.length,f=i.showPreview&&i.getFrames().length;0!==u||0!==s||f?(n=s+u,o=n>1?i._getMsgSelected(n):l[0]?i._getFileNames()[0]:"",i._setCaption(o)):i.reset(),i._raise("fileremoved",[c,p])})):!1})}),i.getFrames(" .kv-file-upload").each(function(){var a=e(this);i._handler(a,"click",function(){var e=a.closest(t.FRAMES),r=e.attr("data-fileindex");i.$progress.hide(),e.hasClass("file-preview-error")&&!i.retryErrorUploads||i._uploadSingle(r,!1)})}))},_initPreviewActions:function(){var i=this,a=i.$preview,r=i.deleteExtraData||{},n=t.FRAMES+" .kv-file-remove",o=i.fileActionSettings,l=o.removeClass,s=o.removeErrorClass,d=function(){var e=i.isAjaxUpload?i.previewCache.count():i.$element.get(0).files.length;a.find(t.FRAMES).length||e||(i._setCaption(""),i.reset(),i.initialCaption="")};i._initZoomButton(),a.find(n).each(function(){var n,o,c,p=e(this),u=p.data("url")||i.deleteUrl,f=p.data("key");if(!t.isEmpty(u)&&void 0!==f){var m,v,g,h,w=p.closest(t.FRAMES),_=i.previewCache.data,b=w.attr("data-fileindex");b=parseInt(b.replace("init_","")),g=t.isEmpty(_.config)&&t.isEmpty(_.config[b])?null:_.config[b],h=t.isEmpty(g)||t.isEmpty(g.extra)?r:g.extra,"function"==typeof h&&(h=h()),v={id:p.attr("id"),key:f,extra:h},n=function(e){i.ajaxAborted=!1,i._raise("filepredelete",[f,e,h]),i._abort()?e.abort():(p.removeClass(s),t.addCss(w,"file-uploading"),t.addCss(p,"disabled "+l))},o=function(e,r,n){var o,c;return t.isEmpty(e)||t.isEmpty(e.error)?(w.removeClass("file-uploading").addClass("file-deleted"),void w.fadeOut("slow",function(){b=parseInt(w.attr("data-fileindex").replace("init_","")),i.previewCache.unset(b),i._deleteFileIndex(w),o=i.previewCache.count(),c=o>0?i._getMsgSelected(o):"",i._setCaption(c),i._raise("filedeleted",[f,n,h]),t.cleanZoomCache(a.find("#zoom-"+w.attr("id"))),i._clearObjects(w),w.remove(),d()})):(v.jqXHR=n,v.response=e,i._showError(e.error,v,"filedeleteerror"),w.removeClass("file-uploading"),p.removeClass("disabled "+l).addClass(s),void d())},c=function(e,t,a){var r=i.ajaxOperations.deleteThumb,n=i._parseError(r,e,a);v.jqXHR=e,v.response={},i._showError(n,v,"filedeleteerror"),w.removeClass("file-uploading"),p.removeClass("disabled "+l).addClass(s),d()},i._mergeAjaxCallback("beforeSend",n,"delete"),i._mergeAjaxCallback("success",o,"delete"),i._mergeAjaxCallback("error",c,"delete"),m=e.extend(!0,{},{url:u,type:"POST",dataType:"json",data:e.extend(!0,{},{key:f},h)},i.ajaxDeleteSettings),i._handler(p,"click",function(){return i._validateMinCount()?(i.ajaxAborted=!1,i._raise("filebeforedelete",[f,h]),void(i.ajaxAborted instanceof Promise?i.ajaxAborted.then(function(t){t||e.ajax(m)}):i.ajaxAborted||e.ajax(m))):!1})}})},_hideFileIcon:function(){var e=this;e.overwriteInitial&&e.$captionContainer.removeClass("icon-visible")},_showFileIcon:function(){var e=this;t.addCss(e.$captionContainer,"icon-visible")},_getSize:function(t){var i,a,r,n=this,o=parseFloat(t),l=n.fileSizeGetter;return e.isNumeric(t)&&e.isNumeric(o)?("function"==typeof l?r=l(o):0===o?r="0.00 B":(i=Math.floor(Math.log(o)/Math.log(1024)),a=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],r=1*(o/Math.pow(1024,i)).toFixed(2)+" "+a[i]),n._getLayoutTemplate("size").replace("{sizeText}",r)):""},_generatePreviewTemplate:function(i,a,r,n,o,l,s,d,c,p,u){var f,m,v=this,g=v.slug(r),h="",w="",_=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,b=400>_?v.previewSettingsSmall[i]||v.defaults.previewSettingsSmall[i]:v.previewSettings[i]||v.defaults.previewSettings[i],C=c||v._renderFileFooter(g,s,"auto",l),y=v._getPreviewIcon(r),x="type-default",T=y&&v.preferIconicPreview,E=y&&v.preferIconicZoomPreview;return b&&e.each(b,function(e,t){w+=e+":"+t+";"}),m=function(a,l,s,c){var f=s?"zoom-"+o:o,m=v._getPreviewTemplate(a),h=(d||"")+" "+c;return v.frameClass&&(h=v.frameClass+" "+h),s&&(h=h.replace(" "+t.SORT_CSS,"")),m=v._parseFilePreviewIcon(m,r),"text"===a&&(l=t.htmlEncode(l)),"object"!==i||n||e.each(v.defaults.fileTypeSettings,function(e,t){"object"!==e&&"other"!==e&&t(r,n)&&(x="type-"+e)}),m.setTokens({previewId:f,caption:g,frameClass:h,type:n,fileindex:p,typeCss:x,footer:C,data:l,template:u||i,style:w?'style="'+w+'"':""})},p=p||o.slice(o.lastIndexOf("-")+1),v.fileActionSettings.showZoom&&(h=m(E?"other":i,a,!0,"kv-zoom-thumb")),h="\n"+v._getLayoutTemplate("zoomCache").replace("{zoomContent}",h),f=m(T?"other":i,a,!1,"kv-preview-thumb"),f+h},_previewDefault:function(i,a,r){var n=this,o=n.$preview;if(n.showPreview){var l,s=i?i.name:"",d=i?i.type:"",c=i.size||0,p=n.slug(s),u=r===!0&&!n.isAjaxUpload,f=t.objUrl.createObjectURL(i);n._clearDefaultPreview(),l=n._generatePreviewTemplate("other",f,s,d,a,u,c),o.append("\n"+l),n._setThumbAttr(a,p,c),r===!0&&n.isAjaxUpload&&n._setThumbStatus(e("#"+a),"Error")}},_previewFile:function(e,i,a,r,n,o){if(this.showPreview){var l,s=this,d=i?i.name:"",c=o.type,p=o.name,u=s._parseFileType(c,d),f=s.allowedPreviewTypes,m=s.allowedPreviewMimeTypes,v=s.$preview,g=i.size||0,h=f&&f.indexOf(u)>=0,w=m&&-1!==m.indexOf(c),_="text"===u||"html"===u||"image"===u?a.target.result:n;if("html"===u&&s.purifyHtml&&window.DOMPurify&&(_=window.DOMPurify.sanitize(_)),h||w){l=s._generatePreviewTemplate(u,_,d,c,r,!1,g),s._clearDefaultPreview(),v.append("\n"+l);var b=v.find("#"+r+" img");b.length&&s.autoOrientImage?t.validateOrientation(i,function(e){if(!e)return void s._validateImage(r,p,c,g,_);var a=v.find("#zoom-"+r+" img"),n="rotate-"+e;e>4&&(n+=b.width()>b.height()?" is-portrait-gt4":" is-landscape-gt4"),t.addCss(b,n),t.addCss(a,n),s._raise("fileimageoriented",{$img:b,file:i}),s._validateImage(r,p,c,g,_),t.adjustOrientedImage(b)}):s._validateImage(r,p,c,g,_)}else s._previewDefault(i,r);s._setThumbAttr(r,p,g),s._initSortable()}},_setThumbAttr:function(t,i,a){var r=this,n=e("#"+t);n.length&&(a=a&&a>0?r._getSize(a):"",n.data({caption:i,size:a}))},_setInitThumbAttr:function(){var e,i,a,r,n=this,o=n.previewCache.data,l=n.previewCache.count();if(0!==l)for(var s=0;l>s;s++)e=o.config[s],r=n.previewInitId+"-init_"+s,i=t.ifSet("caption",e,t.ifSet("filename",e)),a=t.ifSet("size",e),n._setThumbAttr(r,i,a)},_slugDefault:function(e){return t.isEmpty(e)?"":String(e).replace(/[\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g,"_")},_updateFileDetails:function(e){var i=this,a=i.$element,r=i.getFileStack(),n=t.isIE(9)&&t.findFileName(a.val())||a[0].files[0]&&a[0].files[0].name||r.length&&r[0].name||"",o=i.slug(n),l=i.isAjaxUpload?r.length:e,s=i.previewCache.count()+l,d=1===l?o:i._getMsgSelected(s);i.isError?(i.$previewContainer.removeClass("file-thumb-loading"),i.$previewStatus.html(""),i.$captionContainer.removeClass("icon-visible")):i._showFileIcon(),i._setCaption(d,i.isError),i.$container.removeClass("file-input-new file-input-ajax-new"),1===arguments.length&&i._raise("fileselect",[e,o]),i.previewCache.count()&&i._initPreviewActions()},_setThumbStatus:function(e,t){var i=this;if(i.showPreview){var a="indicator"+t,r=a+"Title",n="file-preview-"+t.toLowerCase(),o=e.find(".file-upload-indicator"),l=i.fileActionSettings;e.removeClass("file-preview-success file-preview-error file-preview-loading"),"Success"===t&&e.find(".file-drag-handle").remove(),o.html(l[a]),o.attr("title",l[r]),e.addClass(n),"Error"!==t||i.retryErrorUploads||e.find(".kv-file-upload").attr("disabled",!0)}},_setProgressCancelled:function(){var e=this;e._setProgress(101,e.$progress,e.msgCancelled)},_setProgress:function(e,i,a){var r,n=this,o=Math.min(e,100),l=n.progressUploadThreshold,s=100>=e?n.progressTemplate:n.progressCompleteTemplate,d=100>o?n.progressTemplate:a?n.progressErrorTemplate:s;i=i||n.$progress,t.isEmpty(d)||(r=l&&o>l&&100>=e?d.setTokens({percent:l,status:n.msgUploadThreshold}):d.setTokens({percent:o,status:e>100?n.msgUploadEnd:o+"%"}),i.html(r),a&&i.find('[role="progressbar"]').html(a))},_setFileDropZoneTitle:function(){var e,i=this,a=i.$container.find(".file-drop-zone"),r=i.dropZoneTitle;i.isClickable&&(e=t.isEmpty(i.$element.attr("multiple"))?i.fileSingle:i.filePlural,r+=i.dropZoneClickTitle.replace("{files}",e)),a.find("."+i.dropZoneTitleClass).remove(),i.isAjaxUpload&&i.showPreview&&0!==a.length&&!(i.getFileStack().length>0)&&i.dropZoneEnabled&&(0===a.find(t.FRAMES).length&&t.isEmpty(i.defaultPreviewContent)&&a.prepend('<div class="'+i.dropZoneTitleClass+'">'+r+"</div>"),i.$container.removeClass("file-input-new"),t.addCss(i.$container,"file-input-ajax-new"))},_setAsyncUploadStatus:function(t,i,a){var r=this,n=0;r._setProgress(i,e("#"+t).find(".file-thumb-progress")),r.uploadStatus[t]=i,e.each(r.uploadStatus,function(e,t){n+=t}),r._setProgress(Math.floor(n/a))},_validateMinCount:function(){var e=this,t=e.isAjaxUpload?e.getFileStack().length:e.$element.get(0).files.length;return e.validateInitialCount&&e.minFileCount>0&&e._getFileCount(t-1)<e.minFileCount?(e._noFilesError({}),!1):!0},_getFileCount:function(e){var t=this,i=0;return t.validateInitialCount&&!t.overwriteInitial&&(i=t.previewCache.count(),e+=i),e},_getFileId:function(e){var t,i=this,a=i.generateFileId;return"function"==typeof a?a(e,event):e?(t=String(e.webkitRelativePath||e.fileName||e.name||null),t?e.size+"-"+t.replace(/[^0-9a-zA-Z_-]/gim,""):null):null},_getFileName:function(e){return e&&e.name?this.slug(e.name):void 0},_getFileIds:function(e){var t=this;return t.fileids.filter(function(t){return e?void 0!==t:void 0!==t&&null!==t})},_getFileNames:function(e){var t=this;return t.filenames.filter(function(t){return e?void 0!==t:void 0!==t&&null!==t})},_setPreviewError:function(e,t,i,a){var r=this;if(void 0!==t&&r.updateStack(t,i),r.showPreview){if(r.removeFromPreviewOnError&&!a)return void e.remove();r._setThumbStatus(e,"Error"),r._refreshUploadButton(e,a)}},_refreshUploadButton:function(e,t){var i=this,a=e.find(".kv-file-upload"),r=i.fileActionSettings,n=r.uploadIcon,o=r.uploadTitle;a.length&&(t&&(n=r.uploadRetryIcon,o=r.uploadRetryTitle),a.attr("title",o).html(n))},_checkDimensions:function(e,i,a,r,n,o,l){var s,d,c,p,u=this,f="Small"===i?"min":"max",m=u[f+"Image"+o];!t.isEmpty(m)&&a.length&&(c=a[0],d="Width"===o?c.naturalWidth||c.width:c.naturalHeight||c.height,p="Small"===i?d>=m:m>=d,p||(s=u["msgImage"+o+i].setTokens({name:n,size:m}),u._showUploadError(s,l),u._setPreviewError(r,e,null)))},_validateImage:function(t,i,a,r,n){var o,l,s,d,c=this,p=c.$preview,u=p.find("#"+t),f=u.attr("data-fileindex"),m=u.find("img");i=i||"Untitled",m.one("load",function(){l=u.width(),s=p.width(),l>s&&m.css("width","100%"),o={ind:f,id:t},c._checkDimensions(f,"Small",m,u,i,"Width",o),c._checkDimensions(f,"Small",m,u,i,"Height",o),c.resizeImage||(c._checkDimensions(f,"Large",m,u,i,"Width",o),c._checkDimensions(f,"Large",m,u,i,"Height",o)),c._raise("fileimageloaded",[t]);try{d=window.piexif?window.piexif.load(n):null}catch(e){d=null}c.loadedImages.push({ind:f,img:m,thumb:u,pid:t,typ:a,siz:r,validated:!1,imgData:n,exifObj:d}),u.data("exif",d),c._validateAllImages()}).one("error",function(){c._raise("fileimageloaderror",[t])}).each(function(){this.complete?e(this).trigger("load"):this.error&&e(this).trigger("error")})},_validateAllImages:function(){var e,t,i,a=this,r={val:0},n=a.loadedImages.length,o=a.resizeIfSizeMoreThan;if(n===a.totalImagesCount&&(a._raise("fileimagesloaded"),a.resizeImage))for(e=0;e<a.loadedImages.length;e++)t=a.loadedImages[e],t.validated||(i=t.siz,i&&i>1e3*o&&a._getResizedImage(t,r,n),a.loadedImages[e].validated=!0)},_getResizedImage:function(i,a,r){var n,o,l,s,d,c,p,u=this,f=e(i.img)[0],m=f.naturalWidth,v=f.naturalHeight,g=1,h=u.maxImageWidth||m,w=u.maxImageHeight||v,_=!(!m||!v),b=u.imageCanvas,C=u.imageCanvasContext,y=i.typ,x=i.pid,T=i.ind,E=i.thumb,S=i.exifObj;if(d=function(e,t,i){u.isAjaxUpload?u._showUploadError(e,t,i):u._showError(e,t,i),u._setPreviewError(E,T)},(!u.filestack[T]||!_||h>=m&&w>=v)&&(_&&u.filestack[T]&&u._raise("fileimageresized",[x,T]),a.val++,a.val===r&&u._raise("fileimagesresized"),!_))return void d(u.msgImageResizeError,{id:x,index:T},"fileimageresizeerror");y=y||u.resizeDefaultImageType,o=m>h,l=v>w,g="width"===u.resizePreference?o?h/m:l?w/v:1:l?w/v:o?h/m:1,u._resetCanvas(),m*=g,v*=g,b.width=m,b.height=v;try{C.drawImage(f,0,0,m,v),s=b.toDataURL(y,u.resizeQuality),S&&(p=window.piexif.dump(S),s=window.piexif.insert(p,s)),n=t.dataURI2Blob(s),u.filestack[T]=n,u._raise("fileimageresized",[x,T]),a.val++,a.val===r&&u._raise("fileimagesresized",[void 0,void 0]),n instanceof Blob||d(u.msgImageResizeError,{id:x,index:T},"fileimageresizeerror")}catch(k){a.val++,a.val===r&&u._raise("fileimagesresized",[void 0,void 0]),c=u.msgImageResizeException.replace("{errors}",k.message),d(c,{id:x,index:T},"fileimageresizeexception")}},_initBrowse:function(e){var t=this;t.showBrowse?(t.$btnFile=e.find(".btn-file"),t.$btnFile.append(t.$element)):t.$element.hide()},_initCaption:function(){var e=this,i=e.initialCaption||"";return e.overwriteInitial||t.isEmpty(i)?(e.$caption.val(""),!1):(e._setCaption(i),!0)},_setCaption:function(i,a){var r,n,o,l,s,d=this,c=d.getFileStack();if(d.$caption.length){if(d.$captionContainer.removeClass("icon-visible"),a)r=e("<div>"+d.msgValidationError+"</div>").text(),l=c.length,s=l?1===l&&c[0]?d._getFileNames()[0]:d._getMsgSelected(l):d._getMsgSelected(d.msgNo),n=t.isEmpty(i)?s:i,o='<span class="'+d.msgValidationErrorClass+'">'+d.msgValidationErrorIcon+"</span>";else{if(t.isEmpty(i))return;r=e("<div>"+i+"</div>").text(),n=r,o=d._getLayoutTemplate("fileIcon")}d.$captionContainer.addClass("icon-visible"),d.$caption.attr("title",r).val(n),d.$captionIcon.html(o)}},_createContainer:function(){var t=this,i={"class":"file-input file-input-new"+(t.rtl?" kv-rtl":"")},a=e(document.createElement("div")).attr(i).html(t._renderMain());return t.$element.before(a),t._initBrowse(a),t.theme&&a.addClass("theme-"+t.theme),a},_refreshContainer:function(){var e=this,t=e.$container;t.before(e.$element),t.html(e._renderMain()),e._initBrowse(t),e._validateDisabled()},_validateDisabled:function(){var e=this;e.$caption.attr({readonly:e.isDisabled})},_renderMain:function(){var e=this,t=e.isAjaxUpload&&e.dropZoneEnabled?" file-drop-zone":"file-drop-disabled",i=e.showClose?e._getLayoutTemplate("close"):"",a=e.showPreview?e._getLayoutTemplate("preview").setTokens({"class":e.previewClass,dropClass:t}):"",r=e.isDisabled?e.captionClass+" file-caption-disabled":e.captionClass,n=e.captionTemplate.setTokens({"class":r+" kv-fileinput-caption"});return e.mainTemplate.setTokens({"class":e.mainClass+(!e.showBrowse&&e.showCaption?" no-browse":""),preview:a,close:i,caption:n,upload:e._renderButton("upload"),remove:e._renderButton("remove"),cancel:e._renderButton("cancel"),browse:e._renderButton("browse")})},_renderButton:function(e){var i=this,a=i._getLayoutTemplate("btnDefault"),r=i[e+"Class"],n=i[e+"Title"],o=i[e+"Icon"],l=i[e+"Label"],s=i.isDisabled?" disabled":"",d="button";switch(e){case"remove":if(!i.showRemove)return"";break;case"cancel":if(!i.showCancel)return"";r+=" kv-hidden";break;case"upload":if(!i.showUpload)return"";i.isAjaxUpload&&!i.isDisabled?a=i._getLayoutTemplate("btnLink").replace("{href}",i.uploadUrl):d="submit";break;case"browse":if(!i.showBrowse)return"";a=i._getLayoutTemplate("btnBrowse");break;default:return""}return r+="browse"===e?" btn-file":" fileinput-"+e+" fileinput-"+e+"-button",t.isEmpty(l)||(l=' <span class="'+i.buttonLabelClass+'">'+l+"</span>"),a.setTokens({type:d,css:r,title:n,status:s,icon:o,label:l})},_renderThumbProgress:function(){var e=this;return'<div class="file-thumb-progress kv-hidden">'+e.progressTemplate.setTokens({percent:"0",status:e.msgUploadBegin})+"</div>"},_renderFileFooter:function(e,i,a,r){var n,o=this,l=o.fileActionSettings,s=l.showRemove,d=l.showDrag,c=l.showUpload,p=l.showZoom,u=o._getLayoutTemplate("footer"),f=o._getLayoutTemplate("indicator"),m=r?l.indicatorError:l.indicatorNew,v=r?l.indicatorErrorTitle:l.indicatorNewTitle,g=f.setTokens({indicator:m,indicatorTitle:v});return i=o._getSize(i),n=o.isAjaxUpload?u.setTokens({actions:o._renderFileActions(c,!1,s,p,d,!1,!1,!1),caption:e,size:i,width:a,progress:o._renderThumbProgress(),indicator:g}):u.setTokens({actions:o._renderFileActions(!1,!1,!1,p,d,!1,!1,!1),caption:e,size:i,width:a,progress:"",indicator:g}),n=t.replaceTags(n,o.previewThumbTags)},_renderFileActions:function(e,t,i,a,r,n,o,l,s,d,c){if(!(e||t||i||a||r))return"";var p,u=this,f=o===!1?"":' data-url="'+o+'"',m=l===!1?"":' data-key="'+l+'"',v="",g="",h="",w="",_="",b=u._getLayoutTemplate("actions"),C=u.fileActionSettings,y=u.otherActionButtons.setTokens({dataKey:m,key:l}),x=n?C.removeClass+" disabled":C.removeClass;return i&&(v=u._getLayoutTemplate("actionDelete").setTokens({removeClass:x,removeIcon:C.removeIcon,removeTitle:C.removeTitle,dataUrl:f,dataKey:m,key:l})),e&&(g=u._getLayoutTemplate("actionUpload").setTokens({uploadClass:C.uploadClass,uploadIcon:C.uploadIcon,uploadTitle:C.uploadTitle})),t&&(h=u._getLayoutTemplate("actionDownload").setTokens({downloadClass:C.downloadClass,downloadIcon:C.downloadIcon,downloadTitle:C.downloadTitle,downloadUrl:d||u.initialPreviewDownloadUrl}),h=h.setTokens({filename:c,key:l})),a&&(w=u._getLayoutTemplate("actionZoom").setTokens({zoomClass:C.zoomClass,zoomIcon:C.zoomIcon,zoomTitle:C.zoomTitle})),r&&s&&(p="drag-handle-init "+C.dragClass,_=u._getLayoutTemplate("actionDrag").setTokens({dragClass:p,dragTitle:C.dragTitle,dragIcon:C.dragIcon})),b.setTokens({"delete":v,upload:g,download:h,zoom:w,drag:_,other:y})},_browse:function(e){var t=this;t._raise("filebrowse"),e&&e.isDefaultPrevented()||(t.isError&&!t.isAjaxUpload&&t.clear(),t.$captionContainer.focus())},_filterDuplicate:function(e,t,i){var a=this,r=a._getFileId(e);r&&i&&i.indexOf(r)>-1||(i||(i=[]),t.push(e),i.push(r))},_change:function(i){var a=this,r=a.$element;if(!a.isAjaxUpload&&t.isEmpty(r.val())&&a.fileInputCleared)return void(a.fileInputCleared=!1);a.fileInputCleared=!1;var n,o,l,s,d=[],c=arguments.length>1,p=a.isAjaxUpload,u=c?i.originalEvent.dataTransfer.files:r.get(0).files,f=a.filestack.length,m=t.isEmpty(r.attr("multiple")),v=m&&f>0,g=0,h=a._getFileIds(),w=function(t,i,r,n){var o=e.extend(!0,{},a._getOutData({},{},u),{id:r,index:n}),l={id:r,index:n,file:i,files:u};return a.isAjaxUpload?a._showUploadError(t,o):a._showError(t,l)};if(a.reader=null,a._resetUpload(),a._hideFileIcon(),a.isAjaxUpload&&a.$container.find(".file-drop-zone ."+a.dropZoneTitleClass).remove(),c?e.each(u,function(e,t){t&&!t.type&&void 0!==t.size&&t.size%4096===0?g++:a._filterDuplicate(t,d,h)}):(u=i.target&&void 0===i.target.files?i.target.value?[{name:i.target.value.replace(/^.+\\/,"")}]:[]:i.target.files||{},p?e.each(u,function(e,t){a._filterDuplicate(t,d,h)}):d=u),t.isEmpty(d)||0===d.length)return p||a.clear(),a._showFolderError(g),void a._raise("fileselectnone");if(a._resetErrors(),s=d.length,o=a._getFileCount(a.isAjaxUpload?a.getFileStack().length+s:s),a.maxFileCount>0&&o>a.maxFileCount){if(!a.autoReplace||s>a.maxFileCount)return l=a.autoReplace&&s>a.maxFileCount?s:o,n=a.msgFilesTooMany.replace("{m}",a.maxFileCount).replace("{n}",l),a.isError=w(n,null,null,null),a.$captionContainer.removeClass("icon-visible"),a._setCaption("",!0),void a.$container.removeClass("file-input-new file-input-ajax-new");o>a.maxFileCount&&a._resetPreviewThumbs(p)}else!p||v?(a._resetPreviewThumbs(!1),v&&a.clearStack()):!p||0!==f||a.previewCache.count()&&!a.overwriteInitial||a._resetPreviewThumbs(!0);a.isPreviewable?a.readFiles(d):a._updateFileDetails(1),a._showFolderError(g)},_abort:function(t){var i,a=this;return a.ajaxAborted&&"object"==typeof a.ajaxAborted&&void 0!==a.ajaxAborted.message?(i=e.extend(!0,{},a._getOutData(),t),i.abortData=a.ajaxAborted.data||{},i.abortMessage=a.ajaxAborted.message,a._setProgress(101,a.$progress,a.msgCancelled),a._showUploadError(a.ajaxAborted.message,i,"filecustomerror"),a.cancel(),!0):!!a.ajaxAborted},_resetFileStack:function(){var i=this,a=0,r=[],n=[],o=[];i._getThumbs().each(function(){var l,s=e(this),d=s.attr("data-fileindex"),c=i.filestack[d],p=s.attr("id");"-1"!==d&&-1!==d&&(void 0!==c?(r[a]=c,n[a]=i._getFileName(c),o[a]=i._getFileId(c),s.attr({id:i.previewInitId+"-"+a,"data-fileindex":a}),a++):(l="uploaded-"+t.uniqId(),s.attr({id:l,"data-fileindex":"-1"}),i.$preview.find("#zoom-"+p).attr("id","zoom-"+l)))}),i.filestack=r,i.filenames=n,i.fileids=o},_isFileSelectionValid:function(e){var t=this;return e=e||0,t.required&&!t.getFilesCount()?(t.$errorContainer.html(""),t._showUploadError(t.msgFileRequired),!1):t.minFileCount>0&&t._getFileCount(e)<t.minFileCount?(t._noFilesError({}),!1):!0},clearStack:function(){var e=this;return e.filestack=[],e.filenames=[],e.fileids=[],e.$element},updateStack:function(e,t){var i=this;return i.filestack[e]=t,i.filenames[e]=i._getFileName(t),i.fileids[e]=t&&i._getFileId(t)||null,i.$element},addToStack:function(e){var t=this;return t.filestack.push(e),t.filenames.push(t._getFileName(e)),t.fileids.push(t._getFileId(e)),t.$element},getFileStack:function(e){var t=this;return t.filestack.filter(function(t){return e?void 0!==t:void 0!==t&&null!==t})},getFilesCount:function(){var e=this,t=e.isAjaxUpload?e.getFileStack().length:e.$element.get(0).files.length;return e._getFileCount(t)},readFiles:function(i){this.reader=new FileReader;var a,r=this,n=r.$element,o=r.$preview,l=r.reader,s=r.$previewContainer,d=r.$previewStatus,c=r.msgLoading,p=r.msgProgress,u=r.previewInitId,f=i.length,m=r.fileTypeSettings,v=r.filestack.length,g=r.allowedFileTypes,h=g?g.length:0,w=r.allowedFileExtensions,_=t.isEmpty(w)?"":w.join(", "),b=r.maxFilePreviewSize&&parseFloat(r.maxFilePreviewSize),C=o.length&&(!b||isNaN(b)),y=function(t,n,o,l){var s,d=e.extend(!0,{},r._getOutData({},{},i),{id:o,index:l}),c={id:o,index:l,file:n,files:i};r._previewDefault(n,o,!0),r.isAjaxUpload?(r.addToStack(void 0),setTimeout(function(){a(l+1)},100)):f=0,r._initFileActions(),s=e("#"+o),s.find(".kv-file-upload").hide(),r.removeFromPreviewOnError&&s.remove(),r.isError=r.isAjaxUpload?r._showUploadError(t,d):r._showError(t,c),r._updateFileDetails(f)};r.loadedImages=[],r.totalImagesCount=0,e.each(i,function(e,t){var i=r.fileTypeSettings.image;i&&i(t.type)&&r.totalImagesCount++}),a=function(x){if(t.isEmpty(n.attr("multiple"))&&(f=1),x>=f)return r.isAjaxUpload&&r.filestack.length>0?r._raise("filebatchselected",[r.getFileStack()]):r._raise("filebatchselected",[i]),s.removeClass("file-thumb-loading"),void d.html("");var T,E,S,k,F,I,P,A,D,z,$,j,U=v+x,B=u+"-"+U,R=i[x],L=m.text,O=m.image,M=m.html,Z=R.name?r.slug(R.name):"",N=(R.size||0)/1e3,H="",V=t.objUrl.createObjectURL(R),W=0,q="",K=0,Y=function(){var e=p.setTokens({index:x+1,files:f,percent:50,name:Z});setTimeout(function(){d.html(e),r._updateFileDetails(f),a(x+1)},100),r._raise("fileloaded",[R,B,x,l])};if(h>0)for(E=0;h>E;E++)I=g[E],P=r.msgFileTypes[I]||I,q+=0===E?P:", "+P;if(Z===!1)return void a(x+1);if(0===Z.length)return S=r.msgInvalidFileName.replace("{name}",t.htmlEncode(R.name)),void y(S,R,B,x);if(t.isEmpty(w)||(H=new RegExp("\\.("+w.join("|")+")$","i")),T=N.toFixed(2),r.maxFileSize>0&&N>r.maxFileSize)return S=r.msgSizeTooLarge.setTokens({name:Z,size:T,maxSize:r.maxFileSize}),void y(S,R,B,x);if(null!==r.minFileSize&&N<=t.getNum(r.minFileSize))return S=r.msgSizeTooSmall.setTokens({name:Z,size:T,minSize:r.minFileSize}),void y(S,R,B,x);if(!t.isEmpty(g)&&t.isArray(g)){for(E=0;E<g.length;E+=1)k=g[E],A=m[k],W+=A&&"function"==typeof A&&A(R.type,R.name)?1:0;if(0===W)return S=r.msgInvalidFileType.setTokens({name:Z,types:q}),void y(S,R,B,x)}return 0!==W||t.isEmpty(w)||!t.isArray(w)||t.isEmpty(H)||(F=t.compare(Z,H),W+=t.isEmpty(F)?0:F.length,0!==W)?r.showPreview?!C&&N>b?(r.addToStack(R),s.addClass("file-thumb-loading"),r._previewDefault(R,B),r._initFileActions(),r._updateFileDetails(f),void a(x+1)):(o.length&&void 0!==FileReader?(D=L(R.type,Z),z=M(R.type,Z),$=O(R.type,Z),d.html(c.replace("{index}",x+1).replace("{files}",f)),s.addClass("file-thumb-loading"),l.onerror=function(e){r._errorHandler(e,Z)},l.onload=function(i){var a,n,o,s,d,c,p=[],u=function(e){var t=new FileReader;t.onerror=function(e){r._errorHandler(e,Z)},t.onload=function(e){r._previewFile(x,R,e,B,V,n),r._initFileActions(),Y()},e?t.readAsText(R,r.textEncoding):t.readAsDataURL(R)};if(n={name:Z,type:R.type},e.each(m,function(e,t){"object"!==e&&"other"!==e&&t(R.type,Z)&&K++}),0===K){for(o=new Uint8Array(i.target.result),E=0;E<o.length;E++)s=o[E].toString(16),p.push(s);if(a=p.join("").toLowerCase().substring(0,8),c=t.getMimeType(a,"",""),t.isEmpty(c)&&(d=t.arrayBuffer2String(l.result),c=t.isSvg(d)?"image/svg+xml":t.getMimeType(a,d,R.type)),n={name:Z,type:c},D=L(c,""),z=M(c,""),$=O(c,""),j=D||z,j||$)return void u(j)}r._previewFile(x,R,i,B,V,n),r._initFileActions(),Y()},l.onprogress=function(e){if(e.lengthComputable){var t=e.loaded/e.total*100,i=Math.ceil(t);S=p.setTokens({index:x+1,files:f,percent:i,name:Z}),setTimeout(function(){d.html(S)},100)}},D||z?l.readAsText(R,r.textEncoding):$?l.readAsDataURL(R):l.readAsArrayBuffer(R)):(r._previewDefault(R,B),setTimeout(function(){a(x+1),r._updateFileDetails(f)},100),r._raise("fileloaded",[R,B,x,l])),void r.addToStack(R)):(r.isAjaxUpload&&r.addToStack(R),setTimeout(function(){a(x+1),r._updateFileDetails(f)},100),void r._raise("fileloaded",[R,B,x,l])):(S=r.msgInvalidFileExtension.setTokens({name:Z,extensions:_}),void y(S,R,B,x))},a(0),r._updateFileDetails(f,!1)},lock:function(){var e=this;return e._resetErrors(),e.disable(),e.showRemove&&e.$container.find(".fileinput-remove").hide(),e.showCancel&&e.$container.find(".fileinput-cancel").show(),e._raise("filelock",[e.filestack,e._getExtraData()]),e.$element},unlock:function(e){var t=this;return void 0===e&&(e=!0),t.enable(),t.showCancel&&t.$container.find(".fileinput-cancel").hide(),t.showRemove&&t.$container.find(".fileinput-remove").show(),e&&t._resetFileStack(),t._raise("fileunlock",[t.filestack,t._getExtraData()]),t.$element},cancel:function(){var t,i=this,a=i.ajaxRequests,r=a.length;if(r>0)for(t=0;r>t;t+=1)i.cancelling=!0,a[t].abort();return i._setProgressCancelled(),i._getThumbs().each(function(){var t=e(this),a=t.attr("data-fileindex");t.removeClass("file-uploading"),void 0!==i.filestack[a]&&(t.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"),t.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")),i.unlock()}),i.$element},clear:function(){var i,a=this;if(a._raise("fileclear"))return a.$btnUpload.removeAttr("disabled"),a._getThumbs().find("video,audio,img").each(function(){t.cleanMemory(e(this))}),a._resetUpload(),a.clearStack(),a._clearFileInput(),a._resetErrors(!0),a._hasInitialPreview()?(a._showFileIcon(),a._resetPreview(),a._initPreviewActions(),a.$container.removeClass("file-input-new")):(a._getThumbs().each(function(){a._clearObjects(e(this))}),a.isAjaxUpload&&(a.previewCache.data={}),a.$preview.html(""),i=!a.overwriteInitial&&a.initialCaption.length>0?a.initialCaption:"",a.$caption.attr("title","").val(i),t.addCss(a.$container,"file-input-new"),a._validateDefaultPreview()),0===a.$container.find(t.FRAMES).length&&(a._initCaption()||a.$captionContainer.removeClass("icon-visible")),a._hideFileIcon(),a._raise("filecleared"),a.$captionContainer.focus(),a._setFileDropZoneTitle(),a.$element},reset:function(){var e=this;if(e._raise("filereset"))return e._resetPreview(),e.$container.find(".fileinput-filename").text(""),t.addCss(e.$container,"file-input-new"),(e.getFrames().length||e.isAjaxUpload&&e.dropZoneEnabled)&&e.$container.removeClass("file-input-new"),e.clearStack(),e.formdata={},e._setFileDropZoneTitle(),e.$element},disable:function(){var e=this;return e.isDisabled=!0,e._raise("filedisabled"),e.$element.attr("disabled","disabled"),e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"),e.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled",!0),t.addCss(e.$container.find(".btn-file"),"disabled"),e._initDragDrop(),e.$element},enable:function(){var e=this;return e.isDisabled=!1,e._raise("fileenabled"),e.$element.removeAttr("disabled"),e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"),e.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"),e.$container.find(".btn-file").removeClass("disabled"),e._initDragDrop(),e.$element},upload:function(){var i,a,r,n=this,o=n.getFileStack().length,l=!e.isEmptyObject(n._getExtraData());if(n.isAjaxUpload&&!n.isDisabled&&n._isFileSelectionValid(o)){if(n._resetUpload(),0===o&&!l)return void n._showUploadError(n.msgUploadEmpty);if(n.$progress.show(),n.uploadCount=0,n.uploadStatus={},n.uploadLog=[],n.lock(),n._setProgress(2),0===o&&l)return void n._uploadExtraOnly();if(r=n.filestack.length,n.hasInitData=!1,!n.uploadAsync)return n._uploadBatch(),n.$element;for(a=n._getOutData(),n._raise("filebatchpreupload",[a]),n.fileBatchCompleted=!1,n.uploadCache={content:[],config:[],tags:[],append:!0},n.uploadAsyncCount=n.getFileStack().length,i=0;r>i;i++)n.uploadCache.content[i]=null,n.uploadCache.config[i]=null,n.uploadCache.tags[i]=null;for(n.$preview.find(".file-preview-initial").removeClass(t.SORT_CSS),n._initSortable(),n.cacheInitialPreview=n.getPreview(),i=0;r>i;i++)n.filestack[i]&&n._uploadSingle(i,!0)}},destroy:function(){var t=this,i=t.$form,a=t.$container,r=t.$element,n=t.namespace;return e(document).off(n),e(window).off(n),i&&i.length&&i.off(n),t.isAjaxUpload&&t._clearFileInput(),t._cleanup(),t._initPreviewCache(),r.insertBefore(a).off(n).removeData(),a.off().remove(),r},refresh:function(i,a){var r=this,n=r.$element;return i="object"!=typeof i||t.isEmpty(i)?r.options:e.extend(!0,{},r.options,i),r._init(i,!0),r._listen(),a&&n.trigger("change"+r.namespace),n},zoom:function(e){var i=this,a=i._getFrame(e),r=i.$modal;a&&(t.initModal(r),r.html(i._getModalContent()),i._setZoomContent(a),r.modal("show"),i._initZoomButtons())},getExif:function(e){var t=this,i=t._getFrame(e);return i&&i.data("exif")||null},getFrames:function(e){var i=this;return e=e||"",i.$preview.find(t.FRAMES+e)},getPreview:function(){var e=this;return{content:e.initialPreview,config:e.initialPreviewConfig,tags:e.initialPreviewThumbTags}}},e.fn.fileinput=function(a){if(t.hasFileAPISupport()||t.isIE(9)){var r=Array.apply(null,arguments),n=[];switch(r.shift(),this.each(function(){var o,l=e(this),s=l.data("fileinput"),d="object"==typeof a&&a,c=d.theme||l.data("theme"),p={},u={},f=d.language||l.data("language")||e.fn.fileinput.defaults.language||"en";s||(c&&(u=e.fn.fileinputThemes[c]||{}),"en"===f||t.isEmpty(e.fn.fileinputLocales[f])||(p=e.fn.fileinputLocales[f]||{}),o=e.extend(!0,{},e.fn.fileinput.defaults,u,e.fn.fileinputLocales.en,p,d,l.data()),s=new i(this,o),l.data("fileinput",s)),"string"==typeof a&&n.push(s[a].apply(s,r))}),n.length){case 0:return this;case 1:return n[0];default:return n}}},e.fn.fileinput.defaults={language:"en",showCaption:!0,showBrowse:!0,showPreview:!0,showRemove:!0,showUpload:!0,showCancel:!0,showClose:!0,showUploadedThumbs:!0,browseOnZoneClick:!1,autoReplace:!1,autoOrientImage:!0,required:!1,rtl:!1,hideThumbnailContent:!1,generateFileId:null,previewClass:"",captionClass:"",frameClass:"krajee-default",mainClass:"file-caption-main",mainTemplate:null,purifyHtml:!0,fileSizeGetter:null,initialCaption:"",initialPreview:[],initialPreviewDelimiter:"*$$*",initialPreviewAsData:!1,initialPreviewFileType:"image",initialPreviewConfig:[],initialPreviewThumbTags:[],previewThumbTags:{},initialPreviewShowDelete:!0,initialPreviewDownloadUrl:"",removeFromPreviewOnError:!1,deleteUrl:"",deleteExtraData:{},overwriteInitial:!0,previewZoomButtonIcons:{prev:'<i class="glyphicon glyphicon-triangle-left"></i>',next:'<i class="glyphicon glyphicon-triangle-right"></i>',toggleheader:'<i class="glyphicon glyphicon-resize-vertical"></i>',fullscreen:'<i class="glyphicon glyphicon-fullscreen"></i>',borderless:'<i class="glyphicon glyphicon-resize-full"></i>',close:'<i class="glyphicon glyphicon-remove"></i>'},previewZoomButtonClasses:{prev:"btn btn-navigate",next:"btn btn-navigate",toggleheader:"btn btn-kv btn-default btn-outline-secondary",fullscreen:"btn btn-kv btn-default btn-outline-secondary",borderless:"btn btn-kv btn-default btn-outline-secondary",close:"btn btn-kv btn-default btn-outline-secondary"},preferIconicPreview:!1,preferIconicZoomPreview:!1,allowedPreviewTypes:void 0,allowedPreviewMimeTypes:null,allowedFileTypes:null,allowedFileExtensions:null,defaultPreviewContent:null,customLayoutTags:{},customPreviewTags:{},previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',previewFileIconClass:"file-other-icon",previewFileIconSettings:{},previewFileExtSettings:{},buttonLabelClass:"d-none d-sm-inline-block",browseIcon:'<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',browseClass:"btn btn-primary",removeIcon:'<i class="glyphicon glyphicon-trash"></i>',removeClass:"btn btn-default btn-secondary",cancelIcon:'<i class="glyphicon glyphicon-ban-circle"></i>',cancelClass:"btn btn-default btn-secondary",uploadIcon:'<i class="glyphicon glyphicon-upload"></i>',uploadClass:"btn btn-default btn-secondary",uploadUrl:null,uploadUrlThumb:null,uploadAsync:!0,uploadExtraData:{},zoomModalHeight:480,minImageWidth:null,minImageHeight:null,maxImageWidth:null,maxImageHeight:null,resizeImage:!1,resizePreference:"width",resizeQuality:.92,resizeDefaultImageType:"image/jpeg",resizeIfSizeMoreThan:0,minFileSize:0,maxFileSize:0,maxFilePreviewSize:25600,minFileCount:0,maxFileCount:0,validateInitialCount:!1,msgValidationErrorClass:"text-danger",msgValidationErrorIcon:'<i class="glyphicon glyphicon-exclamation-sign"></i> ',msgErrorClass:"file-error-message",progressThumbClass:"progress-bar bg-success progress-bar-success progress-bar-striped active",progressClass:"progress-bar bg-success progress-bar-success progress-bar-striped active",progressCompleteClass:"progress-bar bg-success progress-bar-success",progressErrorClass:"progress-bar bg-danger progress-bar-danger",progressUploadThreshold:99,previewFileType:"image",elCaptionContainer:null,elCaptionText:null,elPreviewContainer:null,elPreviewImage:null,elPreviewStatus:null,elErrorContainer:null,errorCloseButton:t.closeButton("kv-error-close"),slugCallback:null,dropZoneEnabled:!0,dropZoneTitleClass:"file-drop-zone-title",fileActionSettings:{},otherActionButtons:"",textEncoding:"UTF-8",ajaxSettings:{},ajaxDeleteSettings:{},showAjaxErrorDetails:!0,mergeAjaxCallbacks:!1,mergeAjaxDeleteCallbacks:!1,retryErrorUploads:!0},e.fn.fileinputLocales.en={fileSingle:"file",filePlural:"files",browseLabel:"Browse &hellip;",removeLabel:"Remove",removeTitle:"Clear selected files",cancelLabel:"Cancel",cancelTitle:"Abort ongoing upload",uploadLabel:"Upload",uploadTitle:"Upload selected files",msgNo:"No",msgNoFilesSelected:"No files selected",msgCancelled:"Cancelled",msgPlaceholder:"Select {files}...",msgZoomModalHeading:"Detailed Preview",msgFileRequired:"You must select a file to upload.",msgSizeTooSmall:'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',msgSizeTooLarge:'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',msgFilesTooLess:"You must select at least <b>{n}</b> {files} to upload.",msgFilesTooMany:"Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",msgFileNotFound:'File "{name}" not found!',msgFileSecured:'Security restrictions prevent reading the file "{name}".',msgFileNotReadable:'File "{name}" is not readable.',msgFilePreviewAborted:'File preview aborted for "{name}".',msgFilePreviewError:'An error occurred while reading the file "{name}".',msgInvalidFileName:'Invalid or unsupported characters in file name "{name}".',msgInvalidFileType:'Invalid type for file "{name}". Only "{types}" files are supported.',msgInvalidFileExtension:'Invalid extension for file "{name}". Only "{extensions}" files are supported.',msgFileTypes:{image:"image",html:"HTML",text:"text",video:"video",audio:"audio",flash:"flash",pdf:"PDF",object:"object"},msgUploadAborted:"The file upload was aborted",msgUploadThreshold:"Processing...",msgUploadBegin:"Initializing...",msgUploadEnd:"Done",msgUploadEmpty:"No valid data available for upload.",msgUploadError:"Error",msgValidationError:"Validation Error",msgLoading:"Loading file {index} of {files} &hellip;",msgProgress:"Loading file {index} of {files} - {name} - {percent}% completed.",msgSelected:"{n} {files} selected",msgFoldersNotAllowed:"Drag & drop files only! {n} folder(s) dropped were skipped.",msgImageWidthSmall:'Width of image file "{name}" must be at least {size} px.',msgImageHeightSmall:'Height of image file "{name}" must be at least {size} px.',msgImageWidthLarge:'Width of image file "{name}" cannot exceed {size} px.',msgImageHeightLarge:'Height of image file "{name}" cannot exceed {size} px.',msgImageResizeError:"Could not get the image dimensions to resize.",msgImageResizeException:"Error while resizing the image.<pre>{errors}</pre>",msgAjaxError:"Something went wrong with the {operation} operation. Please try again later!",msgAjaxProgressError:"{operation} failed",ajaxOperations:{deleteThumb:"file delete",uploadThumb:"file upload",uploadBatch:"batch file upload",uploadExtra:"form data upload"},dropZoneTitle:"Drag & drop files here &hellip;",dropZoneClickTitle:"<br>(or click to select {files})",previewZoomButtonTitles:{prev:"View previous file",next:"View next file",toggleheader:"Toggle header",fullscreen:"Toggle full screen",borderless:"Toggle borderless mode",close:"Close detailed preview"}},e.fn.fileinput.Constructor=i,e(document).ready(function(){var t=e("input.file[type=file]");t.length&&t.fileinput()})});
/*
 * Bootstrap-select v1.12.13 (https://github.com/heimrichhannot/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/heimrichhannot/bootstrap-select/LICENSE)
 */
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(b(c))})}else{if(typeof module==="object"&&module.exports){module.exports=b(require("jquery"))}else{b(a.jQuery)}}}(this,function(a){(function(g){if(!String.prototype.includes){(function(){var q={}.toString;var n=(function(){try{var u={};var t=Object.defineProperty;var r=t(u,u,u)&&t}catch(s){}return r}());var p="".indexOf;var o=function(w){if(this==null){throw new TypeError()}var u=String(this);if(w&&q.call(w)=="[object RegExp]"){throw new TypeError()}var s=u.length;var t=String(w);var v=t.length;var r=arguments.length>1?arguments[1]:undefined;var y=r?Number(r):0;if(y!=y){y=0}var x=Math.min(Math.max(y,0),s);if(v+x>s){return false}return p.call(u,t,y)!=-1};if(n){n(String.prototype,"includes",{value:o,configurable:true,writable:true,})}else{String.prototype.includes=o}}())}if(!String.prototype.startsWith){(function(){var n=(function(){try{var t={};var s=Object.defineProperty;var q=s(t,t,t)&&s}catch(r){}return q}());var p={}.toString;var o=function(x){if(this==null){throw new TypeError()}var u=String(this);if(x&&p.call(x)=="[object RegExp]"){throw new TypeError()}var q=u.length;var y=String(x);var s=y.length;var t=arguments.length>1?arguments[1]:undefined;var w=t?Number(t):0;if(w!=w){w=0}var r=Math.min(Math.max(w,0),q);if(s+r>q){return false}var v=-1;while(++v<s){if(u.charCodeAt(r+v)!=y.charCodeAt(v)){return false}}return true};if(n){n(String.prototype,"startsWith",{value:o,configurable:true,writable:true,})}else{String.prototype.startsWith=o}}())}if(!Object.keys){Object.keys=function(q,n,p){p=[];for(n in q){p.hasOwnProperty.call(q,n)&&p.push(n)}return p}}var e={useDefault:false,_set:g.valHooks.select.set,};g.valHooks.select.set=function(n,o){if(o&&!e.useDefault){g(n).data("selected",true)}return e._set.apply(this,arguments)};var m=null;g.fn.triggerNative=function(n){var o=this[0],p;if(o.dispatchEvent){if(typeof Event==="function"){p=new Event(n,{bubbles:true,})}else{p=document.createEvent("Event");p.initEvent(n,true,false)}o.dispatchEvent(p)}else{if(o.fireEvent){p=document.createEventObject();p.eventType=n;o.fireEvent("on"+n,p)}else{this.trigger(n)}}};g.expr.pseudos.icontains=function(q,n,p){var r=g(q).find("span.dropdown-item-inner");var o=(r.data("tokens")||r.text()).toString().toUpperCase();return o.includes(p[3].toUpperCase())};g.expr.pseudos.ibegins=function(q,n,p){var r=g(q).find("span.dropdown-item-inner");var o=(r.data("tokens")||r.text()).toString().toUpperCase();return o.startsWith(p[3].toUpperCase())};g.expr.pseudos.aicontains=function(q,n,p){var r=g(q).find("span.dropdown-item-inner");var o=(r.data("tokens")||r.data("normalizedText")||r.text()).toString().toUpperCase();return o.includes(p[3].toUpperCase())};g.expr.pseudos.aibegins=function(q,n,p){var r=g(q).find("span.dropdown-item-inner");var o=(r.data("tokens")||r.data("normalizedText")||r.text()).toString().toUpperCase();return o.startsWith(p[3].toUpperCase())};function c(o){var n=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"},];g.each(n,function(){o=o?o.replace(this.re,this.ch):""});return o}var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;",};var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x60;":"`",};var f=function(r){var o=function(s){return r[s]};var q="(?:"+Object.keys(r).join("|")+")";var p=RegExp(q);var n=RegExp(q,"g");return function(s){s=s==null?"":""+s;return p.test(s)?s.replace(n,o):s}};var l=f(h);var i=f(b);var k=function(p,o){if(!e.useDefault){g.valHooks.select.set=e._set;e.useDefault=true}this.$element=g(p);this.$newElement=null;this.$button=null;this.$menu=null;this.$lis=null;this.options=o;if(this.options.title===null){this.options.title=this.$element.attr("title")}var n=this.options.windowPadding;if(typeof n==="number"){this.options.windowPadding=[n,n,n,n]}this.val=k.prototype.val;this.render=k.prototype.render;this.refresh=k.prototype.refresh;this.setStyle=k.prototype.setStyle;this.selectAll=k.prototype.selectAll;this.deselectAll=k.prototype.deselectAll;this.destroy=k.prototype.destroy;this.remove=k.prototype.remove;this.show=k.prototype.show;this.hide=k.prototype.hide;this.init()};k.VERSION="1.12.2";k.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(o,n){return(o==1)?"{0} item selected":"{0} items selected"},maxOptionsText:function(n,o){return[(n==1)?"Limit reached ({n} item max)":"Limit reached ({n} items max)",(o==1)?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)",]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:false,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default btn-light",size:"auto",title:null,selectedTextFormat:"values",width:false,container:false,hideDisabled:false,showSubtext:false,showIcon:true,showContent:true,dropupAuto:true,header:false,liveSearch:false,liveSearchPlaceholder:null,liveSearchNormalize:false,liveSearchStyle:"contains",actionsBox:false,iconBase:"fa",tickIcon:"icon-line-check",showTick:false,template:{caret:'<span class="caret"></span>',},maxOptions:false,mobile:false,selectOnTab:false,dropdownAlignRight:false,windowPadding:0,};k.prototype={constructor:k,init:function(){var n=this,o=this.$element.attr("id");this.$element.addClass("bs-select-hidden");this.liObj={};this.multiple=this.$element.prop("multiple");this.autofocus=this.$element.prop("autofocus");this.$newElement=this.createView();this.$element.after(this.$newElement).appendTo(this.$newElement);this.$button=this.$newElement.children("button");this.$menu=this.$newElement.children(".dropdown-menu");this.$menuInner=this.$menu.children(".inner");this.$searchbox=this.$menu.find("input");this.$element.removeClass("bs-select-hidden");if(this.options.dropdownAlignRight===true){this.$menu.addClass("dropdown-menu-right")}if(typeof o!=="undefined"){this.$button.attr("data-id",o);g('label[for="'+o+'"]').click(function(p){p.preventDefault();n.$button.focus()})}this.checkDisabled();this.clickListener();if(this.options.liveSearch){this.liveSearchListener()}this.render();this.setStyle();this.setWidth();if(this.options.container){this.selectPosition()}this.$menu.data("this",this);this.$newElement.data("this",this);if(this.options.mobile){this.mobile()}this.$newElement.on({"hide.bs.dropdown":function(p){n.$menuInner.attr("aria-expanded",false);n.$element.trigger("hide.bs.select",p)},"hidden.bs.dropdown":function(p){n.$element.trigger("hidden.bs.select",p)},"show.bs.dropdown":function(p){n.$menuInner.attr("aria-expanded",true);n.$element.trigger("show.bs.select",p)},"shown.bs.dropdown":function(p){n.$element.trigger("shown.bs.select",p)},});if(n.$element[0].hasAttribute("required")){this.$element.on("invalid",function(){n.$button.addClass("bs-invalid").focus();n.$element.on({"focus.bs.select":function(){n.$button.focus();n.$element.off("focus.bs.select")},"shown.bs.select":function(){n.$element.val(n.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){if(this.validity.valid){n.$button.removeClass("bs-invalid")}n.$element.off("rendered.bs.select")},})})}setTimeout(function(){n.$element.trigger("loaded.bs.select")})},createDropdown:function(){var s=(this.multiple||this.options.showTick)?" show-tick":"",o=this.$element.parent().hasClass("input-group")?" input-group-btn":"",u=this.autofocus?" autofocus":"";var t=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"";var r=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+l(this.options.liveSearchPlaceholder)+'"')+' role="textbox" aria-label="Search"></div>':"";var q=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default btn-light">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default btn-light">'+this.options.deselectAllText+"</button></div></div>":"";var n=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default btn-light">'+this.options.doneButtonText+"</button></div></div>":"";var p='<div class="btn-group bootstrap-select'+s+o+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+u+' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open" role="combobox">'+t+r+q+'<div class="dropdown-menu inner" role="listbox" aria-expanded="false"></div>'+n+"</div></div>";return g(p)},createView:function(){var o=this.createDropdown(),n=this.createLi();o.find("div.inner")[0].innerHTML=n;return o},reloadLi:function(){var n=this.createLi();this.$menuInner[0].innerHTML=n},createLi:function(){var u=this,t=[],x=0,n=document.createElement("option"),q=-1;var p=function(B,z,A,y){A="dropdown-item "+(A||"");return'<a tabindex="0"'+((typeof A!=="undefined"&&""!==A)?' class="'+A+'"':"")+((typeof z!=="undefined"&&null!==z)?' data-original-index="'+z+'"':"")+((typeof y!=="undefined"&&null!==y)?'data-optgroup="'+y+'"':"")+">"+B+"</a>"};var r=function(A,z,y){return"<div"+((typeof z!=="undefined"&&""!==z)?' class="'+z+'"':"")+((typeof y!=="undefined"&&null!==y)?' data-optgroup="'+y+'"':"")+">"+A+"</div>"};var v=function(B,y,A,z){y="dropdown-item-inner "+(y||"");return"<span"+(typeof y!=="undefined"?' class="'+y+'"':"")+(A?' style="'+A+'"':"")+(u.options.liveSearchNormalize?' data-normalized-text="'+c(l(g(B).html()))+'"':"")+(typeof z!=="undefined"||z!==null?' data-tokens="'+z+'"':"")+' role="option">'+B+'<span class="'+u.options.iconBase+" "+u.options.tickIcon+' check-mark"></span></span>'};if(this.options.title&&!this.multiple){q--;if(!this.$element.find(".bs-title-option").length){var s=this.$element[0];n.className="bs-title-option";n.innerHTML=this.options.title;n.value="";s.insertBefore(n,s.firstChild);var w=g(s.options[s.selectedIndex]);if(w.attr("selected")===undefined&&this.$element.data("selected")===undefined){n.selected=true}}}var o=this.$element.find("option");o.each(function(C){var B=g(this);q++;if(B.hasClass("bs-title-option")){return}var E=this.className||"",A=l(this.style.cssText),F=B.data("content")?B.data("content"):B.html(),H=B.data("tokens")?B.data("tokens"):null,R=typeof B.data("subtext")!=="undefined"?'<small class="text-muted">'+B.data("subtext")+"</small>":"",O=typeof B.data("icon")!=="undefined"?'<span class="'+u.options.iconBase+" "+B.data("icon")+'"></span> ':"",J=B.parent(),z=J[0].tagName==="OPTGROUP",M=z&&J[0].disabled,G=this.disabled||M,y;if(O!==""&&G){O="<span>"+O+"</span>"}if(u.options.hideDisabled&&(G&&!z||M)){y=B.data("prevHiddenIndex");B.next().data("prevHiddenIndex",(y!==undefined?y:C));q--;return}if(!B.data("content")){F=O+'<span class="text">'+F+R+"</span>"}if(z&&B.data("divider")!==true){if(u.options.hideDisabled&&G){if(J.data("allOptionsDisabled")===undefined){var N=J.children();J.data("allOptionsDisabled",N.filter(":disabled").length===N.length)}if(J.data("allOptionsDisabled")){q--;return}}var P=" "+J[0].className||"";if(B.index()===0){x+=1;var D=J[0].label,Q=typeof J.data("subtext")!=="undefined"?'<small class="text-muted">'+J.data("subtext")+"</small>":"",K=J.data("icon")?'<span class="'+u.options.iconBase+" "+J.data("icon")+'"></span> ':"";D=K+'<span class="text">'+l(D)+Q+"</span>";if(C!==0&&t.length>0){q++;t.push(r("","dropdown-divider",x+"div"))}q++;t.push(r(D,"dropdown-header"+P,x))}if(u.options.hideDisabled&&G){q--;return}t.push(p(v(F,"opt "+E+P,A,H),C,"",x))}else{if(B.data("divider")===true){t.push(r("","dropdown-divider",x+"div"))}else{if(B.data("hidden")===true){y=B.data("prevHiddenIndex");B.next().data("prevHiddenIndex",(y!==undefined?y:C));t.push(p(v(F,E,A,H),C,"hidden is-hidden"))}else{var I=this.previousElementSibling&&this.previousElementSibling.tagName==="OPTGROUP";if(!I&&u.options.hideDisabled){y=B.data("prevHiddenIndex");if(y!==undefined){var L=o.eq(y)[0].previousElementSibling;if(L&&L.tagName==="OPTGROUP"&&!L.disabled){I=true}}}if(I){q++;t.push(r("","dropdown-divider",x+"div"))}t.push(p(v(F,E,A,H),C))}}}u.liObj[C]=q});if(!this.multiple&&this.$element.find("option:selected").length===0&&!this.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")}return t.join("")},findLis:function(){if(this.$lis==null){this.$lis=this.$menu.find("a, .dropdown-header, .dropdown-divider")}return this.$lis},render:function(r){var q=this,n,o=this.$element.find("option");if(r!==false){o.each(function(w){var x=q.findLis().eq(q.liObj[w]);q.setDisabled(w,this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled,x);q.setSelected(w,this.selected,x)})}this.togglePlaceholder();this.tabIndex();var p=o.map(function(){if(this.selected){if(q.options.hideDisabled&&(this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled)){return}var y=g(this),x=y.data("icon")&&q.options.showIcon?'<i class="'+q.options.iconBase+" "+y.data("icon")+'"></i> ':"",w;if(q.options.showSubtext&&y.data("subtext")&&!q.multiple){w=' <small class="text-muted">'+y.data("subtext")+"</small>"}else{w=""}if(typeof y.attr("title")!=="undefined"){return y.attr("title")}else{if(y.data("content")&&q.options.showContent){return y.data("content").toString()}else{return x+y.html()+w}}}}).toArray();var t=!this.multiple?p[0]:p.join(this.options.multipleSeparator);if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var s=this.options.selectedTextFormat.split(">");if((s.length>1&&p.length>s[1])||(s.length==1&&p.length>=2)){n=this.options.hideDisabled?", [disabled]":"";var u=o.not('[data-divider="true"], [data-hidden="true"]'+n).length,v=(typeof this.options.countSelectedText==="function")?this.options.countSelectedText(p.length,u):this.options.countSelectedText;t=v.replace("{0}",p.length.toString()).replace("{1}",u.toString())}}if(this.options.title==undefined){this.options.title=this.$element.attr("title")}if(this.options.selectedTextFormat=="static"){t=this.options.title}if(!t){t=typeof this.options.title!=="undefined"?this.options.title:this.options.noneSelectedText}this.$button.attr("title",i(g.trim(t.replace(/<[^>]*>?/g,""))));this.$button.children(".filter-option").html(t);this.$element.trigger("rendered.bs.select")},setStyle:function(p,o){if(this.$element.attr("class")){this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""))}var n=p?p:this.options.style;if(o=="add"){this.$button.addClass(n)}else{if(o=="remove"){this.$button.removeClass(n)}else{this.$button.removeClass(this.options.style);this.$button.addClass(n)}}},updatePosition:function(){var n=this.$menu.get(0).ownerDocument.createEvent("HTMLEvents");n.initEvent("resize",true,false);this.$menu.get(0).ownerDocument.dispatchEvent(n)},liHeight:function(t){if(!t&&(this.options.size===false||this.sizeInfo)){return}var r=document.createElement("div"),n=document.createElement("div"),x=document.createElement("ul"),F=document.createElement("a"),E=document.createElement("a"),J=document.createElement("span"),D=document.createElement("span"),I=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(true):null,y=this.options.liveSearch?document.createElement("div"):null,z=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(true):null,q=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(true):null;D.className="text";r.className=this.$menu[0].parentNode.className+" show open";n.className="dropdown-menu open show";x.className="dropdown-menu inner";F.className="dropdown-divider";J.className="dropdown-item-inner";D.appendChild(document.createTextNode("Inner text"));J.appendChild(D);E.appendChild(J);x.appendChild(E);x.appendChild(F);if(I){n.appendChild(I)}if(y){var B=document.createElement("input");y.className="bs-searchbox";B.className="form-control";y.appendChild(B);n.appendChild(y)}if(z){n.appendChild(z)}n.appendChild(x);if(q){n.appendChild(q)}r.appendChild(n);document.body.appendChild(r);var p=J.offsetHeight,H=I?I.offsetHeight:0,A=y?y.offsetHeight:0,w=z?z.offsetHeight:0,s=q?q.offsetHeight:0,C=g(F).outerHeight(true),o=typeof getComputedStyle==="function"?getComputedStyle(n):false,u=o?null:g(n),G={vert:parseInt(o?o.paddingTop:u.css("paddingTop"))+parseInt(o?o.paddingBottom:u.css("paddingBottom"))+parseInt(o?o.borderTopWidth:u.css("borderTopWidth"))+parseInt(o?o.borderBottomWidth:u.css("borderBottomWidth")),horiz:parseInt(o?o.paddingLeft:u.css("paddingLeft"))+parseInt(o?o.paddingRight:u.css("paddingRight"))+parseInt(o?o.borderLeftWidth:u.css("borderLeftWidth"))+parseInt(o?o.borderRightWidth:u.css("borderRightWidth")),},v={vert:G.vert+parseInt(o?o.marginTop:u.css("marginTop"))+parseInt(o?o.marginBottom:u.css("marginBottom"))+2,horiz:G.horiz+parseInt(o?o.marginLeft:u.css("marginLeft"))+parseInt(o?o.marginRight:u.css("marginRight"))+2,};document.body.removeChild(r);this.sizeInfo={liHeight:p,headerHeight:H,searchHeight:A,actionsHeight:w,doneButtonHeight:s,dividerHeight:C,menuPadding:G,menuExtras:v,}},setSize:function(){this.findLis();this.liHeight();if(this.options.header){this.$menu.css("padding-top",0)}if(this.options.size===false){return}var y=this,v=this.$menu,r=this.$menuInner,D=g(window),L=this.$newElement[0].offsetHeight,N=this.$newElement[0].offsetWidth,s=this.sizeInfo.liHeight,H=this.sizeInfo.headerHeight,A=this.sizeInfo.searchHeight,x=this.sizeInfo.actionsHeight,t=this.sizeInfo.doneButtonHeight,z=this.sizeInfo.dividerHeight,G=this.sizeInfo.menuPadding,w=this.sizeInfo.menuExtras,E=this.options.hideDisabled?".disabled":"",F,n,B,p,M,K,u,J,I=function(){var R=y.$newElement.offset(),P=g(y.options.container),Q;if(y.options.container&&!P.is("body")){Q=P.offset();Q.top+=parseInt(P.css("borderTopWidth"));Q.left+=parseInt(P.css("borderLeftWidth"))}else{Q={top:0,left:0}}var O=y.options.windowPadding;M=R.top-Q.top-D.scrollTop();K=D.height()-M-L-Q.top-O[2];u=R.left-Q.left-D.scrollLeft();J=D.width()-u-N-Q.left-O[1];M-=O[0];u-=O[3]};I();if(this.options.size==="auto"){var q=function(){var R,Q=function(U,T){return function(V){if(T){return(V.classList?V.classList.contains(U):g(V).hasClass(U))}else{return !(V.classList?V.classList.contains(U):g(V).hasClass(U))}}},P=y.$menuInner[0].getElementsByTagName("a"),O=Array.prototype.filter?Array.prototype.filter.call(P,Q("d-none",false)):y.$lis.not(".d-none"),S=Array.prototype.filter?Array.prototype.filter.call(O,Q("dropdown-header",true)):O.filter(".dropdown-header");I();F=K-w.vert;n=J-w.horiz;if(y.options.container){if(!v.data("height")){v.data("height",v.height())}B=v.data("height");if(!v.data("width")){v.data("width",v.width())}p=v.data("width")}else{B=v.height();p=v.width()}if(y.options.dropupAuto){y.$newElement.toggleClass("dropup",M>K&&(F-w.vert)<B)}if(y.$newElement.hasClass("dropup")){F=M-w.vert}if(y.options.dropdownAlignRight==="auto"){v.toggleClass("dropdown-menu-right",u>J&&(n-w.horiz)<(p-N))}if((O.length+S.length)>3){R=s*3+w.vert-2}else{R=0}v.css({"max-height":F+"px",overflow:"hidden","min-height":R+H+A+x+t+"px",});r.css({"max-height":F-H-A-x-t-G.vert+"px","overflow-y":"auto","min-height":Math.max(R-G.vert,0)+"px",})};q();this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",q);D.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",q)}else{if(this.options.size&&this.options.size!="auto"&&this.$lis.not(E).length>this.options.size){var C=this.$lis.not(".dropdown-divider").not(E).children().slice(0,this.options.size).last().parent().index(),o=this.$lis.slice(0,C+1).filter(".dropdown-divider").length;F=s*this.options.size+o*z+G.vert;if(y.options.container){if(!v.data("height")){v.data("height",v.height())}B=v.data("height")}else{B=v.height()}if(y.options.dropupAuto){this.$newElement.toggleClass("dropup",M>K&&(F-w.vert)<B)}v.css({"max-height":F+H+A+x+t+"px",overflow:"hidden","min-height":"",});r.css({"max-height":F-G.vert+"px","overflow-y":"auto","min-height":"",})}}},setWidth:function(){if(this.options.width==="auto"){this.$menu.css("min-width","0");var o=this.$menu.parent().clone().appendTo("body"),n=this.options.container?this.$newElement.clone().appendTo("body"):o,p=o.children(".dropdown-menu").outerWidth(),q=n.css("width","auto").children("button").outerWidth();o.remove();n.remove();this.$newElement.css("width",Math.max(p,q)+"px")}else{if(this.options.width==="fit"){this.$menu.css("min-width","");this.$newElement.css("width","").addClass("fit-width")}else{if(this.options.width){this.$menu.css("min-width","");this.$newElement.css("width",this.options.width)}else{this.$menu.css("min-width","");this.$newElement.css("width","")}}}if(this.$newElement.hasClass("fit-width")&&this.options.width!=="fit"){this.$newElement.removeClass("fit-width")}},selectPosition:function(){this.$bsContainer=g('<div class="bs-container" />');var o=this,p=g(this.options.container),s,r,q,n=function(t){o.$bsContainer.addClass(t.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",t.hasClass("dropup"));s=t.offset();if(!p.is("body")){r=p.offset();r.top+=parseInt(p.css("borderTopWidth"))-p.scrollTop();r.left+=parseInt(p.css("borderLeftWidth"))-p.scrollLeft()}else{r={top:0,left:0}}q=t.hasClass("dropup")?0:t[0].offsetHeight;o.$bsContainer.css({top:s.top-r.top+q,left:s.left-r.left,width:t[0].offsetWidth,})};this.$button.on("click",function(){var t=g(this);if(o.isDisabled()){return}n(o.$newElement);o.$bsContainer.appendTo(o.options.container).toggleClass("open",!t.hasClass("open")).append(o.$menu)});g(window).on("resize scroll",function(){n(o.$newElement)});this.$element.on("hide.bs.select",function(){o.$menu.data("height",o.$menu.height());o.$bsContainer.detach()})},setSelected:function(n,p,o){if(!o){this.togglePlaceholder();o=this.findLis().eq(this.liObj[n])}o.toggleClass("selected",p).find("span.dropdown-item-inner").attr("aria-selected",p)},setDisabled:function(n,p,o){if(!o){o=this.findLis().eq(this.liObj[n])}if(p){o.addClass("disabled").children("span.dropdown-item-inner").attr("href","#").attr("tabindex",-1).attr("aria-disabled",true)}else{o.removeClass("disabled").children("span.dropdown-item-inner").removeAttr("href").attr("tabindex",0).attr("aria-disabled",false)}},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var n=this;if(this.isDisabled()){this.$newElement.addClass("disabled");this.$button.addClass("disabled").attr("tabindex",-1).attr("aria-disabled",true)}else{if(this.$button.hasClass("disabled")){this.$newElement.removeClass("disabled");this.$button.removeClass("disabled").attr("aria-disabled",false)}if(this.$button.attr("tabindex")==-1&&!this.$element.data("tabindex")){this.$button.removeAttr("tabindex")}}this.$button.click(function(){return !n.isDisabled()})},togglePlaceholder:function(){var n=this.$element.val();this.$button.toggleClass("bs-placeholder",n===null||n===""||(n.constructor===Array&&n.length===0))},tabIndex:function(){if(this.$element.data("tabindex")!==this.$element.attr("tabindex")&&(this.$element.attr("tabindex")!==-98&&this.$element.attr("tabindex")!=="-98")){this.$element.data("tabindex",this.$element.attr("tabindex"));this.$button.attr("tabindex",this.$element.data("tabindex"))}this.$element.attr("tabindex",-98)},clickListener:function(){var n=this,o=g(document);o.data("spaceSelect",false);this.$button.on("keyup",function(p){if(/(32)/.test(p.keyCode.toString(10))&&o.data("spaceSelect")){p.preventDefault();o.data("spaceSelect",false)}});this.$button.on("click",function(){n.setSize()});this.$element.on("shown.bs.select",function(){if(!n.options.liveSearch&&!n.multiple){n.$menuInner.find("a.selected").focus()}else{if(!n.multiple){var p=n.liObj[n.$element[0].selectedIndex];if(typeof p!=="number"||n.options.size===false){return}var q=n.$lis.eq(p)[0].offsetTop-n.$menuInner[0].offsetTop;q=q-n.$menuInner[0].offsetHeight/2+n.sizeInfo.liHeight/2;n.$menuInner[0].scrollTop=q}}});this.$menuInner.on("click","a",function(G){var v=g(this).find("span.dropdown-item-inner"),q=v.parent().data("originalIndex"),E=n.$element.val(),x=n.$element.prop("selectedIndex"),y=true;if(n.multiple&&n.options.maxOptions!==1){G.stopPropagation()}G.preventDefault();if(!n.isDisabled()&&!v.parent().hasClass("disabled")){var C=n.$element.find("option"),D=C.eq(q),s=D.prop("selected"),B=D.parent("optgroup"),I=n.options.maxOptions,z=B.data("maxOptions")||false;if(!n.multiple){C.prop("selected",false);D.prop("selected",true);n.$menuInner.find(".selected").removeClass("selected").find("span.dropdown-item-inner").attr("aria-selected",false);n.setSelected(q,true)}else{D.prop("selected",!s);n.setSelected(q,!s);v.blur();if(I!==false||z!==false){var r=I<C.filter(":selected").length,u=z<B.find("option:selected").length;if((I&&r)||(z&&u)){if(I&&I==1){C.prop("selected",false);D.prop("selected",true);n.$menuInner.find(".selected").removeClass("selected");n.setSelected(q,true)}else{if(z&&z==1){B.find("option:selected").prop("selected",false);D.prop("selected",true);var F=v.parent().data("optgroup");n.$menuInner.find('[data-optgroup="'+F+'"]').removeClass("selected");n.setSelected(q,true)}else{var p=typeof n.options.maxOptionsText==="string"?[n.options.maxOptionsText,n.options.maxOptionsText]:n.options.maxOptionsText,t=typeof p==="function"?p(I,z):p,H=t[0].replace("{n}",I),w=t[1].replace("{n}",z),A=g('<div class="notify"></div>');if(t[2]){H=H.replace("{var}",t[2][I>1?0:1]);w=w.replace("{var}",t[2][z>1?0:1])}D.prop("selected",false);n.$menu.append(A);if(I&&r){A.append(g("<div>"+H+"</div>"));y=false;n.$element.trigger("maxReached.bs.select")}if(z&&u){A.append(g("<div>"+w+"</div>"));y=false;n.$element.trigger("maxReachedGrp.bs.select")}setTimeout(function(){n.setSelected(q,false)},10);A.delay(750).fadeOut(300,function(){g(this).remove()})}}}}}if(!n.multiple||(n.multiple&&n.options.maxOptions===1)){n.$button.focus()}else{if(n.options.liveSearch){n.$searchbox.focus()}}if(y){if((E!=n.$element.val()&&n.multiple)||(x!=n.$element.prop("selectedIndex")&&!n.multiple)){m=[q,D.prop("selected"),s];n.$element.triggerNative("change")}}}});this.$menu.on("click","a.disabled span.dropdown-item-inner , .popover-title, .popover-title :not(.close)",function(p){if(p.currentTarget==this){p.preventDefault();p.stopPropagation();if(n.options.liveSearch&&!g(p.target).hasClass("close")){n.$searchbox.focus()}else{n.$button.focus()}}});this.$menuInner.on("click",".dropdown-divider, .dropdown-header",function(p){p.preventDefault();p.stopPropagation();if(n.options.liveSearch){n.$searchbox.focus()}else{n.$button.focus()}});this.$menu.on("click",".popover-title .close",function(){n.$button.click()});this.$searchbox.on("click",function(p){p.stopPropagation()});this.$menu.on("click",".actions-btn",function(p){if(n.options.liveSearch){n.$searchbox.focus()}else{n.$button.focus()}p.preventDefault();p.stopPropagation();if(g(this).hasClass("bs-select-all")){n.selectAll()}else{n.deselectAll()}});this.$element.change(function(){n.render(false);n.$element.trigger("changed.bs.select",m);m=null})},liveSearchListener:function(){var o=this,n=g('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api",function(){o.$menuInner.find(".active").removeClass("active");if(!!o.$searchbox.val()){o.$searchbox.val("");o.$lis.not(".is-hidden").removeClass("d-none");if(!!n.parent().length){n.remove()}}if(!o.multiple){o.$menuInner.find(".selected").addClass("active")}setTimeout(function(){o.$searchbox.focus()},10)});this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(p){p.stopPropagation()});this.$searchbox.on("input propertychange",function(){o.$lis.not(".is-hidden").removeClass("d-none");o.$lis.filter(".active").removeClass("active");n.remove();if(o.$searchbox.val()){var q=o.$lis.not(".is-hidden, .dropdown-divider, .dropdown-header"),p;if(o.options.liveSearchNormalize){p=q.not(":a"+o._searchStyle()+'("'+c(o.$searchbox.val())+'")')}else{p=q.not(":"+o._searchStyle()+'("'+o.$searchbox.val()+'")')}if(p.length===q.length){n.html(o.options.noneResultsText.replace("{0}",'"'+l(o.$searchbox.val())+'"'));o.$menuInner.append(n);o.$lis.addClass("d-none")}else{p.addClass("d-none");var s=o.$lis.not(".d-none"),r;s.each(function(t){var u=g(this);if(u.hasClass("dropdown-divider")){if(r===undefined){u.addClass("d-none")}else{if(r){r.addClass("d-none")}r=u}}else{if(u.hasClass("dropdown-header")&&s.eq(t+1).data("optgroup")!==u.data("optgroup")){u.addClass("d-none")}else{r=null}}});if(r){r.addClass("d-none")}q.not(".d-none").first().addClass("active");o.$menuInner.scrollTop(0)}o.updatePosition()}})},_searchStyle:function(){var n={begins:"ibegins",startsWith:"ibegins",};return n[this.options.liveSearchStyle]||"icontains"},val:function(n){if(typeof n!=="undefined"){this.$element.val(n);this.render();return this.$element}else{return this.$element.val()}},changeAll:function(o){if(!this.multiple){return}if(typeof o==="undefined"){o=true}this.findLis();var n=this.$element.find("option"),t=this.$lis.not(".dropdown-divider, .dropdown-header, .disabled, .d-none"),p=t.length,s=[];if(o){if(t.filter(".selected").length===t.length){return}}else{if(t.filter(".selected").length===0){return}}t.toggleClass("selected",o);for(var q=0;q<p;q++){var r=t[q].getAttribute("data-original-index");s[s.length]=n.eq(r)[0]}g(s).prop("selected",o);this.render(false);this.togglePlaceholder();this.$element.triggerNative("change")},selectAll:function(){return this.changeAll(true)},deselectAll:function(){return this.changeAll(false)},toggle:function(n){n=n||window.event;if(n){n.stopPropagation()}this.$button.trigger("click")},keydown:function(x){var y=g(this),s=y.is("input")?y.parent().parent():y.parent(),w,u=s.data("this"),v,q,z,p=":not(.disabled, .d-none, .dropdown-header, .dropdown-divider)",r={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",};z=u.$newElement.hasClass("open")||u.$newElement.hasClass("show");if(!z&&(x.keyCode>=48&&x.keyCode<=57||x.keyCode>=96&&x.keyCode<=105||x.keyCode>=65&&x.keyCode<=90)){if(!u.options.container){u.setSize();u.$menu.parent().addClass("open show");z=true}else{u.$button.trigger("click")}u.$searchbox.focus();return}if(u.options.liveSearch){if(/(^9$|27)/.test(x.keyCode.toString(10))&&z){x.preventDefault();x.stopPropagation();u.$menuInner.click();u.$button.focus()}}if(/(38|40)/.test(x.keyCode.toString(10))){w=u.$lis.filter(p);if(!w.length){return}if(!u.options.liveSearch){v=w.index(w.filter(":focus"))}else{v=w.index(w.filter(".active"))}q=u.$menuInner.data("prevIndex");if(x.keyCode==38){if((u.options.liveSearch||v==q)&&v!=-1){v--}if(v<0){v+=w.length}}else{if(x.keyCode==40){if(u.options.liveSearch||v==q){v++}v=v%w.length}}u.$menuInner.data("prevIndex",v);if(!u.options.liveSearch){w.eq(v).focus()}else{x.preventDefault();if(!y.hasClass("dropdown-toggle")){w.removeClass("active").eq(v).addClass("active").children("span.dropdown-item-inner").focus();y.focus()}}}else{if(!y.is("input")){var n=[],t,A;w=u.$lis.filter(p);w.each(function(B){if(g.trim(g(this).children("span.dropdown-item-inner").text().toLowerCase()).substring(0,1)==r[x.keyCode]){n.push(B)}});t=g(document).data("keycount");t++;g(document).data("keycount",t);A=g.trim(g(":focus").text().toLowerCase()).substring(0,1);if(A!=r[x.keyCode]){t=1;g(document).data("keycount",t)}else{if(t>=n.length){g(document).data("keycount",0);if(t>n.length){t=1}}}w.eq(n[t-1]).children("span.dropdown-item-inner").focus()}}if((/(13|32)/.test(x.keyCode.toString(10))||(/(^9$)/.test(x.keyCode.toString(10))&&u.options.selectOnTab))&&z){if(!/(32)/.test(x.keyCode.toString(10))){x.preventDefault()}if(!u.options.liveSearch){var o=g(":focus");o.click();o.focus();x.preventDefault();g(document).data("spaceSelect",true)}else{if(!/(32)/.test(x.keyCode.toString(10))){u.$menuInner.find("a.active").click();y.focus()}}g(document).data("keycount",0)}if((/(^9$|27)/.test(x.keyCode.toString(10))&&z&&(u.multiple||u.options.liveSearch))||(/(27)/.test(x.keyCode.toString(10))&&!z)){u.$menu.parent().removeClass("open");if(u.options.container){u.$newElement.removeClass("open")}u.$button.focus()}},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null;this.liObj={};this.reloadLi();this.render();this.checkDisabled();this.liHeight(true);this.setStyle();this.setWidth();if(this.$lis){this.$searchbox.trigger("propertychange")}this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove();this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove();if(this.$bsContainer){this.$bsContainer.remove()}else{this.$menu.remove()}this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")},};function j(p){var n=arguments;var r=p;[].shift.apply(n);var q;var o=this.each(function(){var w=g(this);if(w.is("select")){var v=w.data("selectpicker"),t=typeof r=="object"&&r;if(!v){var s=g.extend({},k.DEFAULTS,g.fn.selectpicker.defaults||{},w.data(),t);s.template=g.extend({},k.DEFAULTS.template,(g.fn.selectpicker.defaults?g.fn.selectpicker.defaults.template:{}),w.data().template,t.template);w.data("selectpicker",(v=new k(this,s)))}else{if(t){for(var u in t){if(t.hasOwnProperty(u)){v.options[u]=t[u]}}}}if(typeof r=="string"){if(v[r] instanceof Function){q=v[r].apply(v,n)}else{q=v.options[r]}}}});if(typeof q!=="undefined"){return q}else{return o}}var d=g.fn.selectpicker;g.fn.selectpicker=j;g.fn.selectpicker.Constructor=k;g.fn.selectpicker.noConflict=function(){g.fn.selectpicker=d;return this};g(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',k.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',function(n){n.stopPropagation()});g(window).on("load.bs.select.data-api",function(){g(".selectpicker").each(function(){var n=g(this);j.call(n,n.data())})})})(a)}));
/* ========================================================================
 * bootstrap-switch - v3.3.2
 * http://www.bootstrap-switch.org
 * ========================================================================*/
(function(){var t=[].slice;!function(e,i){"use strict";var n;return n=function(){function t(t,i){null==i&&(i={}),this.$element=e(t),this.options=e.extend({},e.fn.bootstrapSwitch.defaults,{state:this.$element.is(":checked"),size:this.$element.data("size"),animate:this.$element.data("animate"),disabled:this.$element.is(":disabled"),readonly:this.$element.is("[readonly]"),indeterminate:this.$element.data("indeterminate"),inverse:this.$element.data("inverse"),radioAllOff:this.$element.data("radio-all-off"),onColor:this.$element.data("on-color"),offColor:this.$element.data("off-color"),onText:this.$element.data("on-text"),offText:this.$element.data("off-text"),labelText:this.$element.data("label-text"),handleWidth:this.$element.data("handle-width"),labelWidth:this.$element.data("label-width"),baseClass:this.$element.data("base-class"),wrapperClass:this.$element.data("wrapper-class")},i),this.prevOptions={},this.$wrapper=e("<div>",{"class":function(t){return function(){var e;return e=[""+t.options.baseClass].concat(t._getClasses(t.options.wrapperClass)),e.push(t.options.state?t.options.baseClass+"-on":t.options.baseClass+"-off"),null!=t.options.size&&e.push(t.options.baseClass+"-"+t.options.size),t.options.disabled&&e.push(t.options.baseClass+"-disabled"),t.options.readonly&&e.push(t.options.baseClass+"-readonly"),t.options.indeterminate&&e.push(t.options.baseClass+"-indeterminate"),t.options.inverse&&e.push(t.options.baseClass+"-inverse"),t.$element.attr("id")&&e.push(t.options.baseClass+"-id-"+t.$element.attr("id")),e.join(" ")}}(this)()}),this.$container=e("<div>",{"class":this.options.baseClass+"-container"}),this.$on=e("<span>",{html:this.options.onText,"class":this.options.baseClass+"-handle-on "+this.options.baseClass+"-"+this.options.onColor}),this.$off=e("<span>",{html:this.options.offText,"class":this.options.baseClass+"-handle-off "+this.options.baseClass+"-"+this.options.offColor}),this.$label=e("<span>",{html:this.options.labelText,"class":this.options.baseClass+"-label"}),this.$element.on("init.bootstrapSwitch",function(e){return function(){return e.options.onInit.apply(t,arguments)}}(this)),this.$element.on("switchChange.bootstrapSwitch",function(i){return function(n){return!1===i.options.onSwitchChange.apply(t,arguments)?i.$element.is(":radio")?e("[name='"+i.$element.attr("name")+"']").trigger("previousState.bootstrapSwitch",!0):i.$element.trigger("previousState.bootstrapSwitch",!0):void 0}}(this)),this.$container=this.$element.wrap(this.$container).parent(),this.$wrapper=this.$container.wrap(this.$wrapper).parent(),this.$element.before(this.options.inverse?this.$off:this.$on).before(this.$label).before(this.options.inverse?this.$on:this.$off),this.options.indeterminate&&this.$element.prop("indeterminate",!0),this._init(),this._elementHandlers(),this._handleHandlers(),this._labelHandlers(),this._formHandler(),this._externalLabelHandler(),this.$element.trigger("init.bootstrapSwitch",this.options.state)}return t.prototype._constructor=t,t.prototype.setPrevOptions=function(){return this.prevOptions=e.extend(!0,{},this.options)},t.prototype.state=function(t,i){return"undefined"==typeof t?this.options.state:this.options.disabled||this.options.readonly?this.$element:this.options.state&&!this.options.radioAllOff&&this.$element.is(":radio")?this.$element:(this.$element.is(":radio")?e("[name='"+this.$element.attr("name")+"']").trigger("setPreviousOptions.bootstrapSwitch"):this.$element.trigger("setPreviousOptions.bootstrapSwitch"),this.options.indeterminate&&this.indeterminate(!1),t=!!t,this.$element.prop("checked",t).trigger("change.bootstrapSwitch",i),this.$element)},t.prototype.toggleState=function(t){return this.options.disabled||this.options.readonly?this.$element:this.options.indeterminate?(this.indeterminate(!1),this.state(!0)):this.$element.prop("checked",!this.options.state).trigger("change.bootstrapSwitch",t)},t.prototype.size=function(t){return"undefined"==typeof t?this.options.size:(null!=this.options.size&&this.$wrapper.removeClass(this.options.baseClass+"-"+this.options.size),t&&this.$wrapper.addClass(this.options.baseClass+"-"+t),this._width(),this._containerPosition(),this.options.size=t,this.$element)},t.prototype.animate=function(t){return"undefined"==typeof t?this.options.animate:(t=!!t,t===this.options.animate?this.$element:this.toggleAnimate())},t.prototype.toggleAnimate=function(){return this.options.animate=!this.options.animate,this.$wrapper.toggleClass(this.options.baseClass+"-animate"),this.$element},t.prototype.disabled=function(t){return"undefined"==typeof t?this.options.disabled:(t=!!t,t===this.options.disabled?this.$element:this.toggleDisabled())},t.prototype.toggleDisabled=function(){return this.options.disabled=!this.options.disabled,this.$element.prop("disabled",this.options.disabled),this.$wrapper.toggleClass(this.options.baseClass+"-disabled"),this.$element},t.prototype.readonly=function(t){return"undefined"==typeof t?this.options.readonly:(t=!!t,t===this.options.readonly?this.$element:this.toggleReadonly())},t.prototype.toggleReadonly=function(){return this.options.readonly=!this.options.readonly,this.$element.prop("readonly",this.options.readonly),this.$wrapper.toggleClass(this.options.baseClass+"-readonly"),this.$element},t.prototype.indeterminate=function(t){return"undefined"==typeof t?this.options.indeterminate:(t=!!t,t===this.options.indeterminate?this.$element:this.toggleIndeterminate())},t.prototype.toggleIndeterminate=function(){return this.options.indeterminate=!this.options.indeterminate,this.$element.prop("indeterminate",this.options.indeterminate),this.$wrapper.toggleClass(this.options.baseClass+"-indeterminate"),this._containerPosition(),this.$element},t.prototype.inverse=function(t){return"undefined"==typeof t?this.options.inverse:(t=!!t,t===this.options.inverse?this.$element:this.toggleInverse())},t.prototype.toggleInverse=function(){var t,e;return this.$wrapper.toggleClass(this.options.baseClass+"-inverse"),e=this.$on.clone(!0),t=this.$off.clone(!0),this.$on.replaceWith(t),this.$off.replaceWith(e),this.$on=t,this.$off=e,this.options.inverse=!this.options.inverse,this.$element},t.prototype.onColor=function(t){var e;return e=this.options.onColor,"undefined"==typeof t?e:(null!=e&&this.$on.removeClass(this.options.baseClass+"-"+e),this.$on.addClass(this.options.baseClass+"-"+t),this.options.onColor=t,this.$element)},t.prototype.offColor=function(t){var e;return e=this.options.offColor,"undefined"==typeof t?e:(null!=e&&this.$off.removeClass(this.options.baseClass+"-"+e),this.$off.addClass(this.options.baseClass+"-"+t),this.options.offColor=t,this.$element)},t.prototype.onText=function(t){return"undefined"==typeof t?this.options.onText:(this.$on.html(t),this._width(),this._containerPosition(),this.options.onText=t,this.$element)},t.prototype.offText=function(t){return"undefined"==typeof t?this.options.offText:(this.$off.html(t),this._width(),this._containerPosition(),this.options.offText=t,this.$element)},t.prototype.labelText=function(t){return"undefined"==typeof t?this.options.labelText:(this.$label.html(t),this._width(),this.options.labelText=t,this.$element)},t.prototype.handleWidth=function(t){return"undefined"==typeof t?this.options.handleWidth:(this.options.handleWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.labelWidth=function(t){return"undefined"==typeof t?this.options.labelWidth:(this.options.labelWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.baseClass=function(t){return this.options.baseClass},t.prototype.wrapperClass=function(t){return"undefined"==typeof t?this.options.wrapperClass:(t||(t=e.fn.bootstrapSwitch.defaults.wrapperClass),this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")),this.$wrapper.addClass(this._getClasses(t).join(" ")),this.options.wrapperClass=t,this.$element)},t.prototype.radioAllOff=function(t){return"undefined"==typeof t?this.options.radioAllOff:(t=!!t,t===this.options.radioAllOff?this.$element:(this.options.radioAllOff=t,this.$element))},t.prototype.onInit=function(t){return"undefined"==typeof t?this.options.onInit:(t||(t=e.fn.bootstrapSwitch.defaults.onInit),this.options.onInit=t,this.$element)},t.prototype.onSwitchChange=function(t){return"undefined"==typeof t?this.options.onSwitchChange:(t||(t=e.fn.bootstrapSwitch.defaults.onSwitchChange),this.options.onSwitchChange=t,this.$element)},t.prototype.destroy=function(){var t;return t=this.$element.closest("form"),t.length&&t.off("reset.bootstrapSwitch").removeData("bootstrap-switch"),this.$container.children().not(this.$element).remove(),this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"),this.$element},t.prototype._width=function(){var t,e;return t=this.$on.add(this.$off),t.add(this.$label).css("width",""),e="auto"===this.options.handleWidth?Math.max(this.$on.width(),this.$off.width()):this.options.handleWidth,t.width(e),this.$label.width(function(t){return function(i,n){return"auto"!==t.options.labelWidth?t.options.labelWidth:e>n?e:n}}(this)),this._handleWidth=this.$on.outerWidth(),this._labelWidth=this.$label.outerWidth(),this.$container.width(2*this._handleWidth+this._labelWidth),this.$wrapper.width(this._handleWidth+this._labelWidth)},t.prototype._containerPosition=function(t,e){return null==t&&(t=this.options.state),this.$container.css("margin-left",function(e){return function(){var i;return i=[0,"-"+e._handleWidth+"px"],e.options.indeterminate?"-"+e._handleWidth/2+"px":t?e.options.inverse?i[1]:i[0]:e.options.inverse?i[0]:i[1]}}(this)),e?setTimeout(function(){return e()},50):void 0},t.prototype._init=function(){var t,e;return t=function(t){return function(){return t.setPrevOptions(),t._width(),t._containerPosition(null,function(){return t.options.animate?t.$wrapper.addClass(t.options.baseClass+"-animate"):void 0})}}(this),this.$wrapper.is(":visible")?t():e=i.setInterval(function(n){return function(){return n.$wrapper.is(":visible")?(t(),i.clearInterval(e)):void 0}}(this),50)},t.prototype._elementHandlers=function(){return this.$element.on({"setPreviousOptions.bootstrapSwitch":function(t){return function(e){return t.setPrevOptions()}}(this),"previousState.bootstrapSwitch":function(t){return function(e){return t.options=t.prevOptions,t.options.indeterminate&&t.$wrapper.addClass(t.options.baseClass+"-indeterminate"),t.$element.prop("checked",t.options.state).trigger("change.bootstrapSwitch",!0)}}(this),"change.bootstrapSwitch":function(t){return function(i,n){var o;return i.preventDefault(),i.stopImmediatePropagation(),o=t.$element.is(":checked"),t._containerPosition(o),o!==t.options.state?(t.options.state=o,t.$wrapper.toggleClass(t.options.baseClass+"-off").toggleClass(t.options.baseClass+"-on"),n?void 0:(t.$element.is(":radio")&&e("[name='"+t.$element.attr("name")+"']").not(t.$element).prop("checked",!1).trigger("change.bootstrapSwitch",!0),t.$element.trigger("switchChange.bootstrapSwitch",[o]))):void 0}}(this),"focus.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.addClass(t.options.baseClass+"-focused")}}(this),"blur.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.removeClass(t.options.baseClass+"-focused")}}(this),"keydown.bootstrapSwitch":function(t){return function(e){if(e.which&&!t.options.disabled&&!t.options.readonly)switch(e.which){case 37:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!1);case 39:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!0)}}}(this)})},t.prototype._handleHandlers=function(){return this.$on.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!1),t.$element.trigger("focus.bootstrapSwitch")}}(this)),this.$off.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!0),t.$element.trigger("focus.bootstrapSwitch")}}(this))},t.prototype._labelHandlers=function(){return this.$label.on({click:function(t){return t.stopPropagation()},"mousedown.bootstrapSwitch touchstart.bootstrapSwitch":function(t){return function(e){return t._dragStart||t.options.disabled||t.options.readonly?void 0:(e.preventDefault(),e.stopPropagation(),t._dragStart=(e.pageX||e.originalEvent.touches[0].pageX)-parseInt(t.$container.css("margin-left"),10),t.options.animate&&t.$wrapper.removeClass(t.options.baseClass+"-animate"),t.$element.trigger("focus.bootstrapSwitch"))}}(this),"mousemove.bootstrapSwitch touchmove.bootstrapSwitch":function(t){return function(e){var i;if(null!=t._dragStart&&(e.preventDefault(),i=(e.pageX||e.originalEvent.touches[0].pageX)-t._dragStart,!(i<-t._handleWidth||i>0)))return t._dragEnd=i,t.$container.css("margin-left",t._dragEnd+"px")}}(this),"mouseup.bootstrapSwitch touchend.bootstrapSwitch":function(t){return function(e){var i;if(t._dragStart)return e.preventDefault(),t.options.animate&&t.$wrapper.addClass(t.options.baseClass+"-animate"),t._dragEnd?(i=t._dragEnd>-(t._handleWidth/2),t._dragEnd=!1,t.state(t.options.inverse?!i:i)):t.state(!t.options.state),t._dragStart=!1}}(this),"mouseleave.bootstrapSwitch":function(t){return function(e){return t.$label.trigger("mouseup.bootstrapSwitch")}}(this)})},t.prototype._externalLabelHandler=function(){var t;return t=this.$element.closest("label"),t.on("click",function(e){return function(i){return i.preventDefault(),i.stopImmediatePropagation(),i.target===t[0]?e.toggleState():void 0}}(this))},t.prototype._formHandler=function(){var t;return t=this.$element.closest("form"),t.data("bootstrap-switch")?void 0:t.on("reset.bootstrapSwitch",function(){return i.setTimeout(function(){return t.find("input").filter(function(){return e(this).data("bootstrap-switch")}).each(function(){return e(this).bootstrapSwitch("state",this.checked)})},1)}).data("bootstrap-switch",!0)},t.prototype._getClasses=function(t){var i,n,o,s;if(!e.isArray(t))return[this.options.baseClass+"-"+t];for(n=[],o=0,s=t.length;s>o;o++)i=t[o],n.push(this.options.baseClass+"-"+i);return n},t}(),e.fn.bootstrapSwitch=function(){var i,o,s;return o=arguments[0],i=2<=arguments.length?t.call(arguments,1):[],s=this,this.each(function(){var t,a;return t=e(this),a=t.data("bootstrap-switch"),a||t.data("bootstrap-switch",a=new n(this,o)),"string"==typeof o?s=a[o].apply(a,i):void 0}),s},e.fn.bootstrapSwitch.Constructor=n,e.fn.bootstrapSwitch.defaults={state:!0,size:null,animate:!0,disabled:!1,readonly:!1,indeterminate:!1,inverse:!1,radioAllOff:!1,onColor:"primary",offColor:"default",onText:"ON",offText:"OFF",labelText:"&nbsp;",handleWidth:"auto",labelWidth:"auto",baseClass:"bootstrap-switch",wrapperClass:"wrapper",onInit:function(){},onSwitchChange:function(){}}}(window.jQuery,window)}).call(this);
/*!
 * Datepicker for Bootstrap v1.7.0-dev (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(0<=this[c].valueOf()-b&&this[c].valueOf()-b<864e5)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a.data(b,"datepicker",this),this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return Number(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.setViewMode(this.o.startView),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(b){return a.each(r.viewModes,function(c,d){return b===c||-1!==a.inArray(b,d.names)?(b=c,!1):void 0}),b},_resolveDaysOfWeek:function(b){return a.isArray(b)||(b=b.split(/[,\s]*/)),a.map(b,Number)},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;var d=a(c);return d.length>0}catch(e){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView),e.minViewMode=this._resolveViewName(e.minViewMode),e.maxViewMode=this._resolveViewName(e.maxViewMode),e.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,e.startView)),e.multidate!==!0&&(e.multidate=Number(e.multidate)||!1,e.multidate!==!1&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-(1/0)&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-(1/0)),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=this._resolveDaysOfWeek(e.daysOfWeekDisabled||[]),e.daysOfWeekHighlighted=this._resolveDaysOfWeek(e.daysOfWeekHighlighted||[]),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=e.datesDisabled.split(",")),e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)});var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,function(a){return/^left|right$/.test(a)}),e.orientation.x=i[0]||"auto",i=a.grep(h,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.inputField.length?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[this.picker,".prev, .next",{click:a.proxy(this.navArrowsClick,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,viewMode:this.viewMode,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){return this.inputField.prop("disabled")||this.inputField.prop("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this)},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){if(!a)return a;var b=new Date(a.getTime()+6e4*a.getTimezoneOffset());return b.getTimezoneOffset()!==a.getTimezoneOffset()&&(b=new Date(a.getTime()+6e4*b.getTimezoneOffset())),b},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&c(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate())},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return a!==b?new Date(a):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,a.map(b,this._utc_to_local)),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){return this._process_options({datesDisabled:a}),this.update(),this},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container),f=e.width(),g="body"===this.o.container?a(document).scrollTop():e.scrollTop(),h=e.offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+this.o.zIndexOffset,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;"body"!==this.o.container&&(o+=g),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>f?(this.picker.addClass("datepicker-orient-right"),n+=m-b):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left");var p,q=this.o.orientation.y;if("auto"===q&&(p=-g+o-c,q=0>p?"bottom":"top"),this.picker.addClass("datepicker-orient-"+q),"top"===q?o-=c+parseInt(this.picker.css("padding-top")):o+=l,this.o.rtl){var r=f-(n+m);this.picker.css({top:o,right:r,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.o.updateViewDate&&(this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate),d?(this.setValue(),this.element.change()):this.dates.length&&String(b)!==String(this.dates)&&d&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&b.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',-1!==a.inArray(b,this.o.daysOfWeekDisabled)&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)},fillMonths:function(){for(var a=this._utc_to_local(this.viewDate),b="",c=0;12>c;){var d=a&&a.getMonth()===c?" focused":"";b+='<span class="month'+d+'">'+q[this.o.language].monthsShort[c++]+"</span>"}this.picker.find(".datepicker-months td").html(b)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],f=this.viewDate.getUTCFullYear(),g=this.viewDate.getUTCMonth(),h=d();return b.getUTCFullYear()<f||b.getUTCFullYear()===f&&b.getUTCMonth()<g?c.push("old"):(b.getUTCFullYear()>f||b.getUTCFullYear()===f&&b.getUTCMonth()>g)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&e(b,h)&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;for(k="",l=this.picker.find(c),m=parseInt(g/e,10)*e,o=parseInt(h/f,10)*f,p=parseInt(i/f,10)*f,n=a.map(this.dates,function(a){return parseInt(a.getUTCFullYear()/f,10)*f}),l.find(".datepicker-switch").text(m+"-"+(m+9*f)),q=m-f,r=-1;11>r;r+=1)s=[d],t=null,-1===r?s.push("old"):10===r&&s.push("new"),-1!==a.inArray(q,n)&&s.push("active"),(o>q||q>p)&&s.push("disabled"),q===this.viewDate.getFullYear()&&s.push("focused"),j!==a.noop&&(u=j(new Date(q,0,1)),u===b?u={}:"boolean"==typeof u?u={enabled:u}:"string"==typeof u&&(u={classes:u}),u.enabled===!1&&s.push("disabled"),u.classes&&(s=s.concat(u.classes.split(/\s+/))),u.tooltip&&(t=u.tooltip)),k+='<span class="'+s.join(" ")+'"'+(t?' title="'+t+'"':"")+">"+q+"</span>",q+=f;l.find("td").html(k)},fill:function(){var d,e,f=new Date(this.viewDate),g=f.getUTCFullYear(),h=f.getUTCMonth(),i=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),j=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),k=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,m=q[this.o.language].today||q.en.today||"",n=q[this.o.language].clear||q.en.clear||"",o=q[this.o.language].titleFormat||q.en.titleFormat;if(!isNaN(g)&&!isNaN(h)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f,o,this.o.language)),this.picker.find("tfoot .today").text(m).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(n).toggle(this.o.clearBtn!==!1),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var p=c(g,h,0),s=p.getUTCDate();p.setUTCDate(s-(p.getUTCDay()-this.o.weekStart+7)%7);var t=new Date(p);p.getUTCFullYear()<100&&t.setUTCFullYear(p.getUTCFullYear()),t.setUTCDate(t.getUTCDate()+42),t=t.valueOf();for(var u,v,w=[];p.valueOf()<t;){if(u=p.getUTCDay(),u===this.o.weekStart&&(w.push("<tr>"),this.o.calendarWeeks)){var x=new Date(+p+(this.o.weekStart-u-7)%7*864e5),y=new Date(Number(x)+(11-x.getUTCDay())%7*864e5),z=new Date(Number(z=c(y.getUTCFullYear(),0,1))+(11-z.getUTCDay())%7*864e5),A=(y-z)/864e5/7+1;w.push('<td class="cw">'+A+"</td>")}v=this.getClassNames(p),v.push("day"),this.o.beforeShowDay!==a.noop&&(e=this.o.beforeShowDay(this._utc_to_local(p)),e===b?e={}:"boolean"==typeof e?e={enabled:e}:"string"==typeof e&&(e={classes:e}),e.enabled===!1&&v.push("disabled"),e.classes&&(v=v.concat(e.classes.split(/\s+/))),e.tooltip&&(d=e.tooltip)),v=a.isFunction(a.uniqueSort)?a.uniqueSort(v):a.unique(v),w.push('<td class="'+v.join(" ")+'"'+(d?' title="'+d+'"':"")+(this.o.dateCells?' data-date="'+p.getTime().toString()+'"':"")+">"+p.getUTCDate()+"</td>"),d=null,u===this.o.weekEnd&&w.push("</tr>"),p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(w.join(""));var B=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",C=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?B:g).end().find("tbody span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===g&&C.eq(b.getUTCMonth()).addClass("active")}),(i>g||g>k)&&C.addClass("disabled"),g===i&&C.slice(0,j).addClass("disabled"),g===k&&C.slice(l+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var D=this;a.each(C,function(c,d){var e=new Date(g,c,1),f=D.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),f.enabled!==!1||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,1,g,i,k,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,10,g,i,k,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,100,g,i,k,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a,b,c=new Date(this.viewDate),d=c.getUTCFullYear(),e=c.getUTCMonth();switch(this.viewMode){case 0:a=this.o.startDate!==-(1/0)&&d<=this.o.startDate.getUTCFullYear()&&e<=this.o.startDate.getUTCMonth(),b=this.o.endDate!==1/0&&d>=this.o.endDate.getUTCFullYear()&&e>=this.o.endDate.getUTCMonth();break;case 1:case 2:case 3:case 4:a=this.o.startDate!==-(1/0)&&d<=this.o.startDate.getUTCFullYear(),b=this.o.endDate!==1/0&&d>=this.o.endDate.getUTCFullYear()}this.picker.find(".prev").toggleClass("disabled",a),this.picker.find(".next").toggleClass("disabled",b)}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h,i;e=a(b.target),e.hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),e.hasClass("today")&&!e.hasClass("day")&&(this.setViewMode(0),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("day")&&(g=Number(e.text()),h=this.viewDate.getUTCFullYear(),i=this.viewDate.getUTCMonth(),(e.hasClass("old")||e.hasClass("new"))&&(f=e.hasClass("old")?-1:1,i=(i+f+12)%12,(-1===f&&11===i||1===f&&0===i)&&(h+=f,this.o.updateViewDate&&this._trigger("changeYear",this.viewDate)),this.o.updateViewDate&&this._trigger("changeMonth",this.viewDate)),this._setDate(c(h,i,g))),(e.hasClass("month")||e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),g=1,1===this.viewMode?(i=e.parent().find("span").index(e),h=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(i)):(i=0,h=Number(e.text()),this.viewDate.setUTCFullYear(h)),this._trigger(r.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(c(h,i,g)):(this.setViewMode(this.viewMode-1),this.fill()))),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},navArrowsClick:function(b){var c=a(b.target),d=c.hasClass("prev")?-1:1;0!==this.viewMode&&(d*=12*r.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,d),this._trigger(r.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),(!b&&this.o.updateViewDate||"view"===b)&&(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),c=(c+12)%12;else{for(var j=0;i>j;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void((40===a.keyCode||27===a.keyCode)&&(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"),c&&this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"),c&&this._trigger("changeMonth",this.viewDate)):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))},setViewMode:function(a){this.viewMode=a,this.picker.children("div").hide().filter(".datepicker-"+r.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var l=function(b,c){a.data(b,"datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,this.keepEmptyValues=c.keepEmptyValues,delete c.keepEmptyValues,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a.data(b,"datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(c){if(!this.updating){this.updating=!0;var d=a.data(c.target,"datepicker");if(d!==b){var e=d.getUTCDate(),f=this.keepEmptyValues,g=a.inArray(c.target,this.inputs),h=g-1,i=g+1,j=this.inputs.length;if(-1!==g){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b!==d&&f||b.setUTCDate(e)}),e<this.dates[h])for(;h>=0&&e<this.dates[h];)this.pickers[h--].setUTCDate(e);else if(e>this.dates[i])for(;j>i&&e>this.dates[i];)this.pickers[i++].setUTCDate(e);this.updateDates(),delete this.updating}}}},destroy:function(){a.map(this.pickers,function(a){a.destroy()}),a(this.inputs).off("changeDate",this.dateUpdated),delete this.element.data().datepicker},remove:f("destroy")};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,dateCells:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"}},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(e,f,g,h){function i(a,b){return b===!0&&(b=10),100>a&&(a+=2e3,a>(new Date).getFullYear()+b&&(a-=100)),a}function j(){var a=this.slice(0,l[o].length),b=l[o].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!e)return b;if(e instanceof Date)return e;if("string"==typeof f&&(f=r.parseFormat(f)),f.toValue)return f.toValue(e,f,g);var l,m,n,o,p,s={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},t={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(e in t&&(e=t[e]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(e)){for(l=e.match(/([\-+]\d+)([dmwy])/gi),e=new Date,o=0;o<l.length;o++)m=l[o].match(/([\-+]\d+)([dmwy])/i),n=Number(m[1]),p=s[m[2].toLowerCase()],e=k.prototype[p](e,n);return c(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}l=e&&e.match(this.nonpunctuation)||[],e=new Date;var u,v,w={},x=["yyyy","yy","M","MM","m","mm","d","dd"],y={yyyy:function(a,b){return a.setUTCFullYear(h?i(b,h):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};y.yy=y.yyyy,y.M=y.MM=y.mm=y.m,y.dd=y.d,e=d();var z=f.parts.slice();if(l.length!==z.length&&(z=a(z).filter(function(b,c){return-1!==a.inArray(c,x)}).toArray()),l.length===z.length){var A;for(o=0,A=z.length;A>o;o++){if(u=parseInt(l[o],10),m=z[o],isNaN(u))switch(m){case"MM":v=a(q[g].months).filter(j),u=a.inArray(v[0],q[g].months)+1;break;case"M":v=a(q[g].monthsShort).filter(j),u=a.inArray(v[0],q[g].monthsShort)+1}w[m]=u}var B,C;for(o=0;o<x.length;o++)C=x[o],C in w&&!isNaN(w[C])&&(B=new Date(e),y[C](B,w[C]),isNaN(B)||(e=B))}return e},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",
a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.7.0-dev",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});
/**
* @version: 2.1.30
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2017 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Follow the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Make globaly available as well
        define(['moment', 'jquery'], function (moment, jquery) {
            if (!jquery.fn) jquery.fn = {}; // webpack server rendering
            return factory(moment, jquery);
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = (typeof window != 'undefined' && typeof window.moment != 'undefined') ? window.moment : require('moment');
        module.exports = factory(moment, jQuery);
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
}(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyClass = 'btn-success';
        this.cancelClass = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: moment.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template = '<div class="daterangepicker dropdown-menu">' +
                '<div class="calendar left">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini form-control" type="text" name="daterangepicker_start" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="calendar right">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini form-control" type="text" name="daterangepicker_end" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="ranges">' +
                    '<div class="range_inputs">' +
                        '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                        '<button class="cancelBtn" type="button"></button>' +
                    '</div>' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string')
                this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string'){
                //Support unicode chars in the custom range name.
                var elem = document.createElement('textarea');
                elem.innerHTML = options.locale.customRangeLabel;
                var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml;
            }
        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyClass === 'string')
            this.applyClass = options.applyClass;

        if (typeof options.cancelClass === 'string')
            this.cancelClass = options.cancelClass;

        if (typeof options.dateLimit === 'object')
            this.dateLimit = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.showCustomRangeLabel === 'boolean')
            this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function')
            this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or dateLimit
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.dateLimit && maxDate && start.clone().add(this.dateLimit).isAfter(maxDate))
                    maxDate = start.clone().add(this.dateLimit);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day')) 
                  || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply && typeof options.ranges !== 'object') {
            this.container.find('.ranges').hide();
        } else if (this.autoApply) {
            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
        }

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.calendar.left').addClass('single');
            this.container.find('.calendar.left').show();
            this.container.find('.calendar.right').hide();
            this.container.find('.daterangepicker_input input, .daterangepicker_input > i').hide();
            if (this.timePicker) {
                this.container.find('.ranges ul').hide();
            } else {
                this.container.find('.ranges').hide();
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //swap the position of the predefined ranges if opens right
        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
            this.container.find('.ranges').prependTo( this.container.find('.calendar.left').parent() );
        }

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyClass.length)
            this.container.find('.applyBtn').addClass(this.applyClass);
        if (this.cancelClass.length)
            this.container.find('.cancelBtn').addClass(this.cancelClass);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))
            .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
            .on('focus.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsFocused, this))
            .on('blur.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsBlurred, this))
            .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this))
            .on('keydown.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsKeydown, this));

        this.container.find('.ranges')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
            .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this) //IE 11 compatibility
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
            this.element.on('keydown.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.element.trigger('change');
        } else if (this.element.is('input') && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format));
            this.element.trigger('change');
        }

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.add(1,'d').startOf('day').subtract(1,'second');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate.clone();

            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.dateLimit);

            this.previousRightTime = this.endDate.clone();

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        isCustomDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate) {
                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
                this.container.find('input[name="daterangepicker_start"]').addClass('active');
            } else {
                this.container.find('input[name="daterangepicker_end"]').addClass('active');
                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
            }
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
              this.rightCalendar.month = this.maxDate.clone().date(2);
              this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? {left: 'chevron-left', right: 'chevron-right'} : {left: 'chevron-right', right: 'chevron-left'};

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><i class="fa fa-' + arrow.left + ' glyphicon glyphicon-' + arrow.left + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
                var minYear = (minDate && minDate.year()) || (currentYear - 50);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><i class="fa fa-' + arrow.right + ' glyphicon glyphicon-' + arrow.right + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the dateLimit setting in order to
            //grey out end dates beyond the dateLimit
            if (this.endDate == null && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string')
                            classes.push(isCustom);
                        else
                            Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
                maxDate = this.startDate.clone().add(this.dateLimit);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.calendar.right .calendar-time div');
                if (timeSelector.html() != '') {

                    selected.hour(timeSelector.find('.hourselect option:selected').val() || selected.hour());
                    selected.minute(timeSelector.find('.minuteselect option:selected').val() || selected.minute());
                    selected.second(timeSelector.find('.secondselect option:selected').val() || selected.second());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                }

                if (selected.isBefore(this.startDate))
                    selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate))
                    selected = maxDate.clone();

            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

        },

        updateFormInputs: function() {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
            if (this.endDate)
                this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                            - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate, this.endDate, this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        hoverRange: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            var label = e.target.getAttribute('data-range-key');

            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
            }

        },

        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            //if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
            //    return;

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            //have the text inputs above calendars reflect the date being hovered over
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            if (this.endDate && !this.container.find('input[name=daterangepicker_start]').is(":focus")) {
                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
            } else if (!this.endDate && !this.container.find('input[name=daterangepicker_end]').is(":focus")) {
                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
            }

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.calendar tbody td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else { // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();

        },

        calculateChosenLabel: function () {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
              if (this.timePicker) {
                    var format = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD hh:mm";
                    //ignore times when comparing dates if time picker seconds is not enabled
                    if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        formInputsChanged: function(e) {
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

            if (start.isValid() && end.isValid()) {

                if (isRight && end.isBefore(start))
                    start = end.clone();

                this.setStartDate(start);
                this.setEndDate(end);

                if (isRight) {
                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
                } else {
                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
                }

            }

            this.updateView();
        },

        formInputsFocused: function(e) {

            // Highlight the focused input
            this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass('active');
            $(e.target).addClass('active');

            // Set the state such that if the user goes back to using a mouse, 
            // the calendars are aware we're selecting the end of the range, not
            // the start. This allows someone to edit the end of a date range without
            // re-selecting the beginning, by clicking on the end date input then
            // using the calendar.
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            if (isRight) {
                this.endDate = null;
                this.setStartDate(this.startDate.clone());
                this.updateView();
            }

        },

        formInputsBlurred: function(e) {

            // this function has one purpose right now: if you tab from the first
            // text input to the second in the UI, the endDate is nulled so that
            // you can click another, but if you tab out without clicking anything
            // or changing the input value, the old endDate should be retained

            if (!this.endDate) {
                var val = this.container.find('input[name="daterangepicker_end"]').val();
                var end = moment(val, this.locale.format);
                if (end.isValid()) {
                    this.setEndDate(end);
                    this.updateView();
                }
            }

        },

        formInputsKeydown: function(e) {
            // This function ensures that if the 'enter' key was pressed in the input, then the calendars
            // are updated with the startDate and endDate.
            // This behaviour is automatic in Chrome/Firefox/Edge but not in IE 11 hence why this exists.
            // Other browsers and versions of IE are untested and the behaviour is unknown.
            if (e.keyCode === 13) {
                // Prevent the calendar from being updated twice on Chrome/Firefox/Edge
                e.preventDefault(); 
                this.formInputsChanged(e);
            }
        },


        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }

            //hide on esc and prevent propagation
            if (e.keyCode === 27) {
                e.preventDefault();
                e.stopPropagation();

                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
                this.element.trigger('change');
            } else if (this.element.is('input') && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format));
                this.element.trigger('change');
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        var implementOptions = $.extend(true, {}, $.fn.daterangepicker.defaultOptions, options);
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, implementOptions, callback));
        });
        return this;
    };

    return DateRangePicker;

}));
//! moment.js
//! version : 2.20.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        }
        else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function mod(n, x) {
    return ((n % x) + x) % x;
}

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = require;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {}
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, tmpLocale, parentConfig = baseConfig;
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100, h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
        case 'year': output = monthDiff(this, that) / 12; break;
        case 'month': output = monthDiff(this, that); break;
        case 'quarter': output = monthDiff(this, that) / 3; break;
        case 'second': output = (this - that) / 1e3; break; // 1000
        case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
        case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
        case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
        case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default: output = this - that;
    }

    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this._d.valueOf()).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function clone$1 () {
    return createDuration(this);
}

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function sign(x) {
    return ((x > 0) - (x < 0)) || +x;
}

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return totalSign + 'P' +
        (Y ? ymSign + Y + 'Y' : '') +
        (M ? ymSign + M + 'M' : '') +
        (D ? daysSign + D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? hmsSign + h + 'H' : '') +
        (m ? hmsSign + m + 'M' : '') +
        (s ? hmsSign + s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.clone          = clone$1;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.20.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

// currently HTML5 input type only supports 24-hour formats
hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',                             // <input type="date" />
    TIME: 'HH:mm',                                  // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
    WEEK: 'YYYY-[W]WW',                             // <input type="week" />
    MONTH: 'YYYY-MM'                                // <input type="month" />
};

return hooks;

})));
﻿// Ion.RangeSlider | version 2.2.0 | https://github.com/IonDen/ion.rangeSlider
;(function(f){"function"===typeof define&&define.amd?define(["jquery"],function(n){return f(n,document,window,navigator)}):"object"===typeof exports?f(require("jquery"),document,window,navigator):f(jQuery,document,window,navigator)})(function(f,n,k,r,p){var t=0,m=function(){var a=r.userAgent,b=/msie\s\d+/i;return 0<a.search(b)&&(a=b.exec(a).toString(),a=a.split(" ")[1],9>a)?(f("html").addClass("lt-ie9"),!0):!1}();Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,d=[].slice;if("function"!=
typeof b)throw new TypeError;var c=d.call(arguments,1),e=function(){if(this instanceof e){var g=function(){};g.prototype=b.prototype;var g=new g,l=b.apply(g,c.concat(d.call(arguments)));return Object(l)===l?l:g}return b.apply(a,c.concat(d.call(arguments)))};return e});Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){if(null==this)throw new TypeError('"this" is null or not defined');var d=Object(this),c=d.length>>>0;if(0===c)return-1;var e=+b||0;Infinity===Math.abs(e)&&(e=0);if(e>=c)return-1;
for(e=Math.max(0<=e?e:c-Math.abs(e),0);e<c;){if(e in d&&d[e]===a)return e;e++}return-1});var q=function(a,b,d){this.VERSION="2.2.0";this.input=a;this.plugin_count=d;this.old_to=this.old_from=this.update_tm=this.calc_count=this.current_plugin=0;this.raf_id=this.old_min_interval=null;this.no_diapason=this.force_redraw=this.dragging=!1;this.has_tab_index=!0;this.is_update=this.is_key=!1;this.is_start=!0;this.is_click=this.is_resize=this.is_active=this.is_finish=!1;b=b||{};this.$cache={win:f(k),body:f(n.body),
input:f(a),cont:null,rs:null,min:null,max:null,from:null,to:null,single:null,bar:null,line:null,s_single:null,s_from:null,s_to:null,shad_single:null,shad_from:null,shad_to:null,edge:null,grid:null,grid_labels:[]};this.coords={x_gap:0,x_pointer:0,w_rs:0,w_rs_old:0,w_handle:0,p_gap:0,p_gap_left:0,p_gap_right:0,p_step:0,p_pointer:0,p_handle:0,p_single_fake:0,p_single_real:0,p_from_fake:0,p_from_real:0,p_to_fake:0,p_to_real:0,p_bar_x:0,p_bar_w:0,grid_gap:0,big_num:0,big:[],big_w:[],big_p:[],big_x:[]};
this.labels={w_min:0,w_max:0,w_from:0,w_to:0,w_single:0,p_min:0,p_max:0,p_from_fake:0,p_from_left:0,p_to_fake:0,p_to_left:0,p_single_fake:0,p_single_left:0};var c=this.$cache.input;a=c.prop("value");var e;d={type:"single",min:10,max:100,from:null,to:null,step:1,min_interval:0,max_interval:0,drag_interval:!1,values:[],p_values:[],from_fixed:!1,from_min:null,from_max:null,from_shadow:!1,to_fixed:!1,to_min:null,to_max:null,to_shadow:!1,prettify_enabled:!0,prettify_separator:" ",prettify:null,force_edges:!1,
keyboard:!0,grid:!1,grid_margin:!0,grid_num:4,grid_snap:!1,hide_min_max:!1,hide_from_to:!1,prefix:"",postfix:"",max_postfix:"",decorate_both:!0,values_separator:" \u2014 ",input_values_separator:";",disable:!1,block:!1,extra_classes:"",scope:null,onStart:null,onChange:null,onFinish:null,onUpdate:null};"INPUT"!==c[0].nodeName&&console&&console.warn&&console.warn("Base element should be <input>!",c[0]);c={type:c.data("type"),min:c.data("min"),max:c.data("max"),from:c.data("from"),to:c.data("to"),step:c.data("step"),
min_interval:c.data("minInterval"),max_interval:c.data("maxInterval"),drag_interval:c.data("dragInterval"),values:c.data("values"),from_fixed:c.data("fromFixed"),from_min:c.data("fromMin"),from_max:c.data("fromMax"),from_shadow:c.data("fromShadow"),to_fixed:c.data("toFixed"),to_min:c.data("toMin"),to_max:c.data("toMax"),to_shadow:c.data("toShadow"),prettify_enabled:c.data("prettifyEnabled"),prettify_separator:c.data("prettifySeparator"),force_edges:c.data("forceEdges"),keyboard:c.data("keyboard"),
grid:c.data("grid"),grid_margin:c.data("gridMargin"),grid_num:c.data("gridNum"),grid_snap:c.data("gridSnap"),hide_min_max:c.data("hideMinMax"),hide_from_to:c.data("hideFromTo"),prefix:c.data("prefix"),postfix:c.data("postfix"),max_postfix:c.data("maxPostfix"),decorate_both:c.data("decorateBoth"),values_separator:c.data("valuesSeparator"),input_values_separator:c.data("inputValuesSeparator"),disable:c.data("disable"),block:c.data("block"),extra_classes:c.data("extraClasses")};c.values=c.values&&c.values.split(",");
for(e in c)c.hasOwnProperty(e)&&(c[e]!==p&&""!==c[e]||delete c[e]);a!==p&&""!==a&&(a=a.split(c.input_values_separator||b.input_values_separator||";"),a[0]&&a[0]==+a[0]&&(a[0]=+a[0]),a[1]&&a[1]==+a[1]&&(a[1]=+a[1]),b&&b.values&&b.values.length?(d.from=a[0]&&b.values.indexOf(a[0]),d.to=a[1]&&b.values.indexOf(a[1])):(d.from=a[0]&&+a[0],d.to=a[1]&&+a[1]));f.extend(d,b);f.extend(d,c);this.options=d;this.update_check={};this.validate();this.result={input:this.$cache.input,slider:null,min:this.options.min,
max:this.options.max,from:this.options.from,from_percent:0,from_value:null,to:this.options.to,to_percent:0,to_value:null};this.init()};q.prototype={init:function(a){this.no_diapason=!1;this.coords.p_step=this.convertToPercent(this.options.step,!0);this.target="base";this.toggleInput();this.append();this.setMinMax();a?(this.force_redraw=!0,this.calc(!0),this.callOnUpdate()):(this.force_redraw=!0,this.calc(!0),this.callOnStart());this.updateScene()},append:function(){this.$cache.input.before('<span class="irs js-irs-'+
this.plugin_count+" "+this.options.extra_classes+'"></span>');this.$cache.input.prop("readonly",!0);this.$cache.cont=this.$cache.input.prev();this.result.slider=this.$cache.cont;this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>');
this.$cache.rs=this.$cache.cont.find(".irs");this.$cache.min=this.$cache.cont.find(".irs-min");this.$cache.max=this.$cache.cont.find(".irs-max");this.$cache.from=this.$cache.cont.find(".irs-from");this.$cache.to=this.$cache.cont.find(".irs-to");this.$cache.single=this.$cache.cont.find(".irs-single");this.$cache.bar=this.$cache.cont.find(".irs-bar");this.$cache.line=this.$cache.cont.find(".irs-line");this.$cache.grid=this.$cache.cont.find(".irs-grid");"single"===this.options.type?(this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'),
this.$cache.edge=this.$cache.cont.find(".irs-bar-edge"),this.$cache.s_single=this.$cache.cont.find(".single"),this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.shad_single=this.$cache.cont.find(".shadow-single")):(this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'),this.$cache.s_from=this.$cache.cont.find(".from"),
this.$cache.s_to=this.$cache.cont.find(".to"),this.$cache.shad_from=this.$cache.cont.find(".shadow-from"),this.$cache.shad_to=this.$cache.cont.find(".shadow-to"),this.setTopHandler());this.options.hide_from_to&&(this.$cache.from[0].style.display="none",this.$cache.to[0].style.display="none",this.$cache.single[0].style.display="none");this.appendGrid();this.options.disable?(this.appendDisableMask(),this.$cache.input[0].disabled=!0):(this.$cache.input[0].disabled=!1,this.removeDisableMask(),this.bindEvents());
this.options.disable||(this.options.block?this.appendDisableMask():this.removeDisableMask());this.options.drag_interval&&(this.$cache.bar[0].style.cursor="ew-resize")},setTopHandler:function(){var a=this.options.max,b=this.options.to;this.options.from>this.options.min&&b===a?this.$cache.s_from.addClass("type_last"):b<a&&this.$cache.s_to.addClass("type_last")},changeLevel:function(a){switch(a){case "single":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_single_fake);this.$cache.s_single.addClass("state_hover");
break;case "from":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake);this.$cache.s_from.addClass("state_hover");this.$cache.s_from.addClass("type_last");this.$cache.s_to.removeClass("type_last");break;case "to":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_to_fake);this.$cache.s_to.addClass("state_hover");this.$cache.s_to.addClass("type_last");this.$cache.s_from.removeClass("type_last");break;case "both":this.coords.p_gap_left=this.toFixed(this.coords.p_pointer-
this.coords.p_from_fake),this.coords.p_gap_right=this.toFixed(this.coords.p_to_fake-this.coords.p_pointer),this.$cache.s_to.removeClass("type_last"),this.$cache.s_from.removeClass("type_last")}},appendDisableMask:function(){this.$cache.cont.append('<span class="irs-disable-mask"></span>');this.$cache.cont.addClass("irs-disabled")},removeDisableMask:function(){this.$cache.cont.remove(".irs-disable-mask");this.$cache.cont.removeClass("irs-disabled")},remove:function(){this.$cache.cont.remove();this.$cache.cont=
null;this.$cache.line.off("keydown.irs_"+this.plugin_count);this.$cache.body.off("touchmove.irs_"+this.plugin_count);this.$cache.body.off("mousemove.irs_"+this.plugin_count);this.$cache.win.off("touchend.irs_"+this.plugin_count);this.$cache.win.off("mouseup.irs_"+this.plugin_count);m&&(this.$cache.body.off("mouseup.irs_"+this.plugin_count),this.$cache.body.off("mouseleave.irs_"+this.plugin_count));this.$cache.grid_labels=[];this.coords.big=[];this.coords.big_w=[];this.coords.big_p=[];this.coords.big_x=
[];cancelAnimationFrame(this.raf_id)},bindEvents:function(){if(!this.no_diapason){this.$cache.body.on("touchmove.irs_"+this.plugin_count,this.pointerMove.bind(this));this.$cache.body.on("mousemove.irs_"+this.plugin_count,this.pointerMove.bind(this));this.$cache.win.on("touchend.irs_"+this.plugin_count,this.pointerUp.bind(this));this.$cache.win.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this));this.$cache.line.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"));
this.$cache.line.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"));this.$cache.line.on("focus.irs_"+this.plugin_count,this.pointerFocus.bind(this));this.options.drag_interval&&"double"===this.options.type?(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"both")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"both"))):(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),
this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")));"single"===this.options.type?(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.shad_single.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,
"single")),this.$cache.s_single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.edge.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_single.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))):(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.from.on("touchstart.irs_"+
this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,
"click")),this.$cache.from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("mousedown.irs_"+
this.plugin_count,this.pointerClick.bind(this,"click")));if(this.options.keyboard)this.$cache.line.on("keydown.irs_"+this.plugin_count,this.key.bind(this,"keyboard"));m&&(this.$cache.body.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.body.on("mouseleave.irs_"+this.plugin_count,this.pointerUp.bind(this)))}},pointerFocus:function(a){if(!this.target){var b="single"===this.options.type?this.$cache.single:this.$cache.from;a=b.offset().left;a+=b.width()/2-1;this.pointerClick("single",
{preventDefault:function(){},pageX:a})}},pointerMove:function(a){this.dragging&&(this.coords.x_pointer=(a.pageX||a.originalEvent.touches&&a.originalEvent.touches[0].pageX)-this.coords.x_gap,this.calc())},pointerUp:function(a){this.current_plugin===this.plugin_count&&this.is_active&&(this.is_active=!1,this.$cache.cont.find(".state_hover").removeClass("state_hover"),this.force_redraw=!0,m&&f("*").prop("unselectable",!1),this.updateScene(),this.restoreOriginalMinInterval(),(f.contains(this.$cache.cont[0],
a.target)||this.dragging)&&this.callOnFinish(),this.dragging=!1)},pointerDown:function(a,b){b.preventDefault();var d=b.pageX||b.originalEvent.touches&&b.originalEvent.touches[0].pageX;2!==b.button&&("both"===a&&this.setTempMinInterval(),a||(a=this.target||"from"),this.current_plugin=this.plugin_count,this.target=a,this.dragging=this.is_active=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=d-this.coords.x_gap,this.calcPointerPercent(),this.changeLevel(a),m&&f("*").prop("unselectable",
!0),this.$cache.line.trigger("focus"),this.updateScene())},pointerClick:function(a,b){b.preventDefault();var d=b.pageX||b.originalEvent.touches&&b.originalEvent.touches[0].pageX;2!==b.button&&(this.current_plugin=this.plugin_count,this.target=a,this.is_click=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=+(d-this.coords.x_gap).toFixed(),this.force_redraw=!0,this.calc(),this.$cache.line.trigger("focus"))},key:function(a,b){if(!(this.current_plugin!==this.plugin_count||b.altKey||
b.ctrlKey||b.shiftKey||b.metaKey)){switch(b.which){case 83:case 65:case 40:case 37:b.preventDefault();this.moveByKey(!1);break;case 87:case 68:case 38:case 39:b.preventDefault(),this.moveByKey(!0)}return!0}},moveByKey:function(a){var b=this.coords.p_pointer,d=(this.options.max-this.options.min)/100,d=this.options.step/d;this.coords.x_pointer=this.toFixed(this.coords.w_rs/100*(a?b+d:b-d));this.is_key=!0;this.calc()},setMinMax:function(){if(this.options)if(this.options.hide_min_max)this.$cache.min[0].style.display=
"none",this.$cache.max[0].style.display="none";else{if(this.options.values.length)this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));else{var a=this._prettify(this.options.min),b=this._prettify(this.options.max);this.result.min_pretty=a;this.result.max_pretty=b;this.$cache.min.html(this.decorate(a,this.options.min));this.$cache.max.html(this.decorate(b,this.options.max))}this.labels.w_min=this.$cache.min.outerWidth(!1);
this.labels.w_max=this.$cache.max.outerWidth(!1)}},setTempMinInterval:function(){var a=this.result.to-this.result.from;null===this.old_min_interval&&(this.old_min_interval=this.options.min_interval);this.options.min_interval=a},restoreOriginalMinInterval:function(){null!==this.old_min_interval&&(this.options.min_interval=this.old_min_interval,this.old_min_interval=null)},calc:function(a){if(this.options){this.calc_count++;if(10===this.calc_count||a)this.calc_count=0,this.coords.w_rs=this.$cache.rs.outerWidth(!1),
this.calcHandlePercent();if(this.coords.w_rs){this.calcPointerPercent();a=this.getHandleX();"both"===this.target&&(this.coords.p_gap=0,a=this.getHandleX());"click"===this.target&&(this.coords.p_gap=this.coords.p_handle/2,a=this.getHandleX(),this.target=this.options.drag_interval?"both_one":this.chooseHandle(a));switch(this.target){case "base":var b=(this.options.max-this.options.min)/100;a=(this.result.from-this.options.min)/b;b=(this.result.to-this.options.min)/b;this.coords.p_single_real=this.toFixed(a);
this.coords.p_from_real=this.toFixed(a);this.coords.p_to_real=this.toFixed(b);this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max);this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real);this.coords.p_from_fake=
this.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);this.target=null;break;case "single":if(this.options.from_fixed)break;this.coords.p_single_real=this.convertToRealPercent(a);this.coords.p_single_real=this.calcWithStep(this.coords.p_single_real);this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max);this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real);
break;case "from":if(this.options.from_fixed)break;this.coords.p_from_real=this.convertToRealPercent(a);this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real);this.coords.p_from_real>this.coords.p_to_real&&(this.coords.p_from_real=this.coords.p_to_real);this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from");this.coords.p_from_real=
this.checkMaxInterval(this.coords.p_from_real,this.coords.p_to_real,"from");this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);break;case "to":if(this.options.to_fixed)break;this.coords.p_to_real=this.convertToRealPercent(a);this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real);this.coords.p_to_real<this.coords.p_from_real&&(this.coords.p_to_real=this.coords.p_from_real);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);
this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to");this.coords.p_to_real=this.checkMaxInterval(this.coords.p_to_real,this.coords.p_from_real,"to");this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case "both":if(this.options.from_fixed||this.options.to_fixed)break;a=this.toFixed(a+.001*this.coords.p_handle);this.coords.p_from_real=this.convertToRealPercent(a)-this.coords.p_gap_left;this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real);
this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from");this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_real=this.convertToRealPercent(a)+this.coords.p_gap_right;this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,
this.options.to_max);this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to");this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case "both_one":if(!this.options.from_fixed&&!this.options.to_fixed){var d=this.convertToRealPercent(a);a=this.result.to_percent-this.result.from_percent;var c=a/2,b=d-c,d=d+c;0>b&&(b=0,d=b+a);100<d&&(d=100,b=d-a);this.coords.p_from_real=this.calcWithStep(b);this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,
this.options.from_min,this.options.from_max);this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_real=this.calcWithStep(d);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real)}}"single"===this.options.type?(this.coords.p_bar_x=this.coords.p_handle/2,this.coords.p_bar_w=this.coords.p_single_fake,this.result.from_percent=this.coords.p_single_real,
this.result.from=this.convertToValue(this.coords.p_single_real),this.result.from_pretty=this._prettify(this.result.from),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from])):(this.coords.p_bar_x=this.toFixed(this.coords.p_from_fake+this.coords.p_handle/2),this.coords.p_bar_w=this.toFixed(this.coords.p_to_fake-this.coords.p_from_fake),this.result.from_percent=this.coords.p_from_real,this.result.from=this.convertToValue(this.coords.p_from_real),this.result.from_pretty=
this._prettify(this.result.from),this.result.to_percent=this.coords.p_to_real,this.result.to=this.convertToValue(this.coords.p_to_real),this.result.to_pretty=this._prettify(this.result.to),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from],this.result.to_value=this.options.values[this.result.to]));this.calcMinMax();this.calcLabels()}}},calcPointerPercent:function(){this.coords.w_rs?(0>this.coords.x_pointer||isNaN(this.coords.x_pointer)?this.coords.x_pointer=
0:this.coords.x_pointer>this.coords.w_rs&&(this.coords.x_pointer=this.coords.w_rs),this.coords.p_pointer=this.toFixed(this.coords.x_pointer/this.coords.w_rs*100)):this.coords.p_pointer=0},convertToRealPercent:function(a){return a/(100-this.coords.p_handle)*100},convertToFakePercent:function(a){return a/100*(100-this.coords.p_handle)},getHandleX:function(){var a=100-this.coords.p_handle,b=this.toFixed(this.coords.p_pointer-this.coords.p_gap);0>b?b=0:b>a&&(b=a);return b},calcHandlePercent:function(){this.coords.w_handle=
"single"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1);this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100)},chooseHandle:function(a){return"single"===this.options.type?"single":a>=this.coords.p_from_real+(this.coords.p_to_real-this.coords.p_from_real)/2?this.options.to_fixed?"from":"to":this.options.from_fixed?"to":"from"},calcMinMax:function(){this.coords.w_rs&&(this.labels.p_min=this.labels.w_min/this.coords.w_rs*100,this.labels.p_max=
this.labels.w_max/this.coords.w_rs*100)},calcLabels:function(){this.coords.w_rs&&!this.options.hide_from_to&&("single"===this.options.type?(this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=this.coords.p_single_fake+this.coords.p_handle/2-this.labels.p_single_fake/2):(this.labels.w_from=this.$cache.from.outerWidth(!1),this.labels.p_from_fake=this.labels.w_from/this.coords.w_rs*100,this.labels.p_from_left=
this.coords.p_from_fake+this.coords.p_handle/2-this.labels.p_from_fake/2,this.labels.p_from_left=this.toFixed(this.labels.p_from_left),this.labels.p_from_left=this.checkEdges(this.labels.p_from_left,this.labels.p_from_fake),this.labels.w_to=this.$cache.to.outerWidth(!1),this.labels.p_to_fake=this.labels.w_to/this.coords.w_rs*100,this.labels.p_to_left=this.coords.p_to_fake+this.coords.p_handle/2-this.labels.p_to_fake/2,this.labels.p_to_left=this.toFixed(this.labels.p_to_left),this.labels.p_to_left=
this.checkEdges(this.labels.p_to_left,this.labels.p_to_fake),this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=(this.labels.p_from_left+this.labels.p_to_left+this.labels.p_to_fake)/2-this.labels.p_single_fake/2,this.labels.p_single_left=this.toFixed(this.labels.p_single_left)),this.labels.p_single_left=this.checkEdges(this.labels.p_single_left,this.labels.p_single_fake))},updateScene:function(){this.raf_id&&
(cancelAnimationFrame(this.raf_id),this.raf_id=null);clearTimeout(this.update_tm);this.update_tm=null;this.options&&(this.drawHandles(),this.is_active?this.raf_id=requestAnimationFrame(this.updateScene.bind(this)):this.update_tm=setTimeout(this.updateScene.bind(this),300))},drawHandles:function(){this.coords.w_rs=this.$cache.rs.outerWidth(!1);if(this.coords.w_rs){this.coords.w_rs!==this.coords.w_rs_old&&(this.target="base",this.is_resize=!0);if(this.coords.w_rs!==this.coords.w_rs_old||this.force_redraw)this.setMinMax(),
this.calc(!0),this.drawLabels(),this.options.grid&&(this.calcGridMargin(),this.calcGridLabels()),this.force_redraw=!0,this.coords.w_rs_old=this.coords.w_rs,this.drawShadow();if(this.coords.w_rs&&(this.dragging||this.force_redraw||this.is_key)){if(this.old_from!==this.result.from||this.old_to!==this.result.to||this.force_redraw||this.is_key){this.drawLabels();this.$cache.bar[0].style.left=this.coords.p_bar_x+"%";this.$cache.bar[0].style.width=this.coords.p_bar_w+"%";if("single"===this.options.type)this.$cache.s_single[0].style.left=
this.coords.p_single_fake+"%";else{this.$cache.s_from[0].style.left=this.coords.p_from_fake+"%";this.$cache.s_to[0].style.left=this.coords.p_to_fake+"%";if(this.old_from!==this.result.from||this.force_redraw)this.$cache.from[0].style.left=this.labels.p_from_left+"%";if(this.old_to!==this.result.to||this.force_redraw)this.$cache.to[0].style.left=this.labels.p_to_left+"%"}this.$cache.single[0].style.left=this.labels.p_single_left+"%";this.writeToInput();this.old_from===this.result.from&&this.old_to===
this.result.to||this.is_start||(this.$cache.input.trigger("change"),this.$cache.input.trigger("input"));this.old_from=this.result.from;this.old_to=this.result.to;this.is_resize||this.is_update||this.is_start||this.is_finish||this.callOnChange();if(this.is_key||this.is_click)this.is_click=this.is_key=!1,this.callOnFinish();this.is_finish=this.is_resize=this.is_update=!1}this.force_redraw=this.is_click=this.is_key=this.is_start=!1}}},drawLabels:function(){if(this.options){var a=this.options.values.length,
b=this.options.p_values;if(!this.options.hide_from_to)if("single"===this.options.type){if(a)a=this.decorate(b[this.result.from]);else{var d=this._prettify(this.result.from);a=this.decorate(d,this.result.from)}this.$cache.single.html(a);this.calcLabels();this.$cache.min[0].style.visibility=this.labels.p_single_left<this.labels.p_min+1?"hidden":"visible";this.$cache.max[0].style.visibility=this.labels.p_single_left+this.labels.p_single_fake>100-this.labels.p_max-1?"hidden":"visible"}else{a?(this.options.decorate_both?
(a=this.decorate(b[this.result.from]),a+=this.options.values_separator,a+=this.decorate(b[this.result.to])):a=this.decorate(b[this.result.from]+this.options.values_separator+b[this.result.to]),d=this.decorate(b[this.result.from]),b=this.decorate(b[this.result.to])):(d=this._prettify(this.result.from),b=this._prettify(this.result.to),this.options.decorate_both?(a=this.decorate(d,this.result.from),a+=this.options.values_separator,a+=this.decorate(b,this.result.to)):a=this.decorate(d+this.options.values_separator+
b,this.result.to),d=this.decorate(d,this.result.from),b=this.decorate(b,this.result.to));this.$cache.single.html(a);this.$cache.from.html(d);this.$cache.to.html(b);this.calcLabels();a=Math.min(this.labels.p_single_left,this.labels.p_from_left);d=this.labels.p_single_left+this.labels.p_single_fake;var b=this.labels.p_to_left+this.labels.p_to_fake,c=Math.max(d,b);this.labels.p_from_left+this.labels.p_from_fake>=this.labels.p_to_left?(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility=
"hidden",this.$cache.single[0].style.visibility="visible",this.result.from===this.result.to?("from"===this.target?this.$cache.from[0].style.visibility="visible":"to"===this.target?this.$cache.to[0].style.visibility="visible":this.target||(this.$cache.from[0].style.visibility="visible"),this.$cache.single[0].style.visibility="hidden",c=b):(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",c=Math.max(d,b))):(this.$cache.from[0].style.visibility=
"visible",this.$cache.to[0].style.visibility="visible",this.$cache.single[0].style.visibility="hidden");this.$cache.min[0].style.visibility=a<this.labels.p_min+1?"hidden":"visible";this.$cache.max[0].style.visibility=c>100-this.labels.p_max-1?"hidden":"visible"}}},drawShadow:function(){var a=this.options,b=this.$cache,d="number"===typeof a.from_min&&!isNaN(a.from_min),c="number"===typeof a.from_max&&!isNaN(a.from_max),e="number"===typeof a.to_min&&!isNaN(a.to_min),g="number"===typeof a.to_max&&!isNaN(a.to_max);
"single"===a.type?a.from_shadow&&(d||c)?(d=this.convertToPercent(d?a.from_min:a.min),c=this.convertToPercent(c?a.from_max:a.max)-d,d=this.toFixed(d-this.coords.p_handle/100*d),c=this.toFixed(c-this.coords.p_handle/100*c),d+=this.coords.p_handle/2,b.shad_single[0].style.display="block",b.shad_single[0].style.left=d+"%",b.shad_single[0].style.width=c+"%"):b.shad_single[0].style.display="none":(a.from_shadow&&(d||c)?(d=this.convertToPercent(d?a.from_min:a.min),c=this.convertToPercent(c?a.from_max:a.max)-
d,d=this.toFixed(d-this.coords.p_handle/100*d),c=this.toFixed(c-this.coords.p_handle/100*c),d+=this.coords.p_handle/2,b.shad_from[0].style.display="block",b.shad_from[0].style.left=d+"%",b.shad_from[0].style.width=c+"%"):b.shad_from[0].style.display="none",a.to_shadow&&(e||g)?(e=this.convertToPercent(e?a.to_min:a.min),a=this.convertToPercent(g?a.to_max:a.max)-e,e=this.toFixed(e-this.coords.p_handle/100*e),a=this.toFixed(a-this.coords.p_handle/100*a),e+=this.coords.p_handle/2,b.shad_to[0].style.display=
"block",b.shad_to[0].style.left=e+"%",b.shad_to[0].style.width=a+"%"):b.shad_to[0].style.display="none")},writeToInput:function(){"single"===this.options.type?(this.options.values.length?this.$cache.input.prop("value",this.result.from_value):this.$cache.input.prop("value",this.result.from),this.$cache.input.data("from",this.result.from)):(this.options.values.length?this.$cache.input.prop("value",this.result.from_value+this.options.input_values_separator+this.result.to_value):this.$cache.input.prop("value",
this.result.from+this.options.input_values_separator+this.result.to),this.$cache.input.data("from",this.result.from),this.$cache.input.data("to",this.result.to))},callOnStart:function(){this.writeToInput();if(this.options.onStart&&"function"===typeof this.options.onStart)if(this.options.scope)this.options.onStart.call(this.options.scope,this.result);else this.options.onStart(this.result)},callOnChange:function(){this.writeToInput();if(this.options.onChange&&"function"===typeof this.options.onChange)if(this.options.scope)this.options.onChange.call(this.options.scope,
this.result);else this.options.onChange(this.result)},callOnFinish:function(){this.writeToInput();if(this.options.onFinish&&"function"===typeof this.options.onFinish)if(this.options.scope)this.options.onFinish.call(this.options.scope,this.result);else this.options.onFinish(this.result)},callOnUpdate:function(){this.writeToInput();if(this.options.onUpdate&&"function"===typeof this.options.onUpdate)if(this.options.scope)this.options.onUpdate.call(this.options.scope,this.result);else this.options.onUpdate(this.result)},
toggleInput:function(){this.$cache.input.toggleClass("irs-hidden-input");this.has_tab_index?this.$cache.input.prop("tabindex",-1):this.$cache.input.removeProp("tabindex");this.has_tab_index=!this.has_tab_index},convertToPercent:function(a,b){var d=this.options.max-this.options.min;return d?this.toFixed((b?a:a-this.options.min)/(d/100)):(this.no_diapason=!0,0)},convertToValue:function(a){var b=this.options.min,d=this.options.max,c=b.toString().split(".")[1],e=d.toString().split(".")[1],g,l,f=0,h=0;
if(0===a)return this.options.min;if(100===a)return this.options.max;c&&(f=g=c.length);e&&(f=l=e.length);g&&l&&(f=g>=l?g:l);0>b&&(h=Math.abs(b),b=+(b+h).toFixed(f),d=+(d+h).toFixed(f));a=(d-b)/100*a+b;(b=this.options.step.toString().split(".")[1])?a=+a.toFixed(b.length):(a/=this.options.step,a*=this.options.step,a=+a.toFixed(0));h&&(a-=h);h=b?+a.toFixed(b.length):this.toFixed(a);h<this.options.min?h=this.options.min:h>this.options.max&&(h=this.options.max);return h},calcWithStep:function(a){var b=
Math.round(a/this.coords.p_step)*this.coords.p_step;100<b&&(b=100);100===a&&(b=100);return this.toFixed(b)},checkMinInterval:function(a,b,d){var c=this.options;if(!c.min_interval)return a;a=this.convertToValue(a);b=this.convertToValue(b);"from"===d?b-a<c.min_interval&&(a=b-c.min_interval):a-b<c.min_interval&&(a=b+c.min_interval);return this.convertToPercent(a)},checkMaxInterval:function(a,b,d){var c=this.options;if(!c.max_interval)return a;a=this.convertToValue(a);b=this.convertToValue(b);"from"===
d?b-a>c.max_interval&&(a=b-c.max_interval):a-b>c.max_interval&&(a=b+c.max_interval);return this.convertToPercent(a)},checkDiapason:function(a,b,d){a=this.convertToValue(a);var c=this.options;"number"!==typeof b&&(b=c.min);"number"!==typeof d&&(d=c.max);a<b&&(a=b);a>d&&(a=d);return this.convertToPercent(a)},toFixed:function(a){a=a.toFixed(20);return+a},_prettify:function(a){return this.options.prettify_enabled?this.options.prettify&&"function"===typeof this.options.prettify?this.options.prettify(a):
this.prettify(a):a},prettify:function(a){return a.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1"+this.options.prettify_separator)},checkEdges:function(a,b){if(!this.options.force_edges)return this.toFixed(a);0>a?a=0:a>100-b&&(a=100-b);return this.toFixed(a)},validate:function(){var a=this.options,b=this.result,d=a.values,c=d.length,e;"string"===typeof a.min&&(a.min=+a.min);"string"===typeof a.max&&(a.max=+a.max);"string"===typeof a.from&&(a.from=+a.from);"string"===typeof a.to&&(a.to=+a.to);
"string"===typeof a.step&&(a.step=+a.step);"string"===typeof a.from_min&&(a.from_min=+a.from_min);"string"===typeof a.from_max&&(a.from_max=+a.from_max);"string"===typeof a.to_min&&(a.to_min=+a.to_min);"string"===typeof a.to_max&&(a.to_max=+a.to_max);"string"===typeof a.grid_num&&(a.grid_num=+a.grid_num);a.max<a.min&&(a.max=a.min);if(c)for(a.p_values=[],a.min=0,a.max=c-1,a.step=1,a.grid_num=a.max,a.grid_snap=!0,e=0;e<c;e++){var g=+d[e];isNaN(g)?g=d[e]:(d[e]=g,g=this._prettify(g));a.p_values.push(g)}if("number"!==
typeof a.from||isNaN(a.from))a.from=a.min;if("number"!==typeof a.to||isNaN(a.to))a.to=a.max;"single"===a.type?(a.from<a.min&&(a.from=a.min),a.from>a.max&&(a.from=a.max)):(a.from<a.min&&(a.from=a.min),a.from>a.max&&(a.from=a.max),a.to<a.min&&(a.to=a.min),a.to>a.max&&(a.to=a.max),this.update_check.from&&(this.update_check.from!==a.from&&a.from>a.to&&(a.from=a.to),this.update_check.to!==a.to&&a.to<a.from&&(a.to=a.from)),a.from>a.to&&(a.from=a.to),a.to<a.from&&(a.to=a.from));if("number"!==typeof a.step||
isNaN(a.step)||!a.step||0>a.step)a.step=1;"number"===typeof a.from_min&&a.from<a.from_min&&(a.from=a.from_min);"number"===typeof a.from_max&&a.from>a.from_max&&(a.from=a.from_max);"number"===typeof a.to_min&&a.to<a.to_min&&(a.to=a.to_min);"number"===typeof a.to_max&&a.from>a.to_max&&(a.to=a.to_max);if(b){b.min!==a.min&&(b.min=a.min);b.max!==a.max&&(b.max=a.max);if(b.from<b.min||b.from>b.max)b.from=a.from;if(b.to<b.min||b.to>b.max)b.to=a.to}if("number"!==typeof a.min_interval||isNaN(a.min_interval)||
!a.min_interval||0>a.min_interval)a.min_interval=0;if("number"!==typeof a.max_interval||isNaN(a.max_interval)||!a.max_interval||0>a.max_interval)a.max_interval=0;a.min_interval&&a.min_interval>a.max-a.min&&(a.min_interval=a.max-a.min);a.max_interval&&a.max_interval>a.max-a.min&&(a.max_interval=a.max-a.min)},decorate:function(a,b){var d="",c=this.options;c.prefix&&(d+=c.prefix);d+=a;c.max_postfix&&(c.values.length&&a===c.p_values[c.max]?(d+=c.max_postfix,c.postfix&&(d+=" ")):b===c.max&&(d+=c.max_postfix,
c.postfix&&(d+=" ")));c.postfix&&(d+=c.postfix);return d},updateFrom:function(){this.result.from=this.options.from;this.result.from_percent=this.convertToPercent(this.result.from);this.result.from_pretty=this._prettify(this.result.from);this.options.values&&(this.result.from_value=this.options.values[this.result.from])},updateTo:function(){this.result.to=this.options.to;this.result.to_percent=this.convertToPercent(this.result.to);this.result.to_pretty=this._prettify(this.result.to);this.options.values&&
(this.result.to_value=this.options.values[this.result.to])},updateResult:function(){this.result.min=this.options.min;this.result.max=this.options.max;this.updateFrom();this.updateTo()},appendGrid:function(){if(this.options.grid){var a=this.options,b;var d=a.max-a.min;var c=a.grid_num,e=4,g="";this.calcGridMargin();if(a.grid_snap)if(50<d){c=50/a.step;var f=this.toFixed(a.step/.5)}else c=d/a.step,f=this.toFixed(a.step/(d/100));else f=this.toFixed(100/c);4<c&&(e=3);7<c&&(e=2);14<c&&(e=1);28<c&&(e=0);
for(d=0;d<c+1;d++){var k=e;var h=this.toFixed(f*d);100<h&&(h=100);this.coords.big[d]=h;var m=(h-f*(d-1))/(k+1);for(b=1;b<=k&&0!==h;b++){var n=this.toFixed(h-m*b);g+='<span class="irs-grid-pol small" style="left: '+n+'%"></span>'}g+='<span class="irs-grid-pol" style="left: '+h+'%"></span>';b=this.convertToValue(h);b=a.values.length?a.p_values[b]:this._prettify(b);g+='<span class="irs-grid-text js-grid-text-'+d+'" style="left: '+h+'%">'+b+"</span>"}this.coords.big_num=Math.ceil(c+1);this.$cache.cont.addClass("irs-with-grid");
this.$cache.grid.html(g);this.cacheGridLabels()}},cacheGridLabels:function(){var a,b=this.coords.big_num;for(a=0;a<b;a++){var d=this.$cache.grid.find(".js-grid-text-"+a);this.$cache.grid_labels.push(d)}this.calcGridLabels()},calcGridLabels:function(){var a;var b=[];var d=[],c=this.coords.big_num;for(a=0;a<c;a++)this.coords.big_w[a]=this.$cache.grid_labels[a].outerWidth(!1),this.coords.big_p[a]=this.toFixed(this.coords.big_w[a]/this.coords.w_rs*100),this.coords.big_x[a]=this.toFixed(this.coords.big_p[a]/
2),b[a]=this.toFixed(this.coords.big[a]-this.coords.big_x[a]),d[a]=this.toFixed(b[a]+this.coords.big_p[a]);this.options.force_edges&&(b[0]<-this.coords.grid_gap&&(b[0]=-this.coords.grid_gap,d[0]=this.toFixed(b[0]+this.coords.big_p[0]),this.coords.big_x[0]=this.coords.grid_gap),d[c-1]>100+this.coords.grid_gap&&(d[c-1]=100+this.coords.grid_gap,b[c-1]=this.toFixed(d[c-1]-this.coords.big_p[c-1]),this.coords.big_x[c-1]=this.toFixed(this.coords.big_p[c-1]-this.coords.grid_gap)));this.calcGridCollision(2,
b,d);this.calcGridCollision(4,b,d);for(a=0;a<c;a++)b=this.$cache.grid_labels[a][0],this.coords.big_x[a]!==Number.POSITIVE_INFINITY&&(b.style.marginLeft=-this.coords.big_x[a]+"%")},calcGridCollision:function(a,b,d){var c,e=this.coords.big_num;for(c=0;c<e;c+=a){var g=c+a/2;if(g>=e)break;var f=this.$cache.grid_labels[g][0];f.style.visibility=d[c]<=b[g]?"visible":"hidden"}},calcGridMargin:function(){this.options.grid_margin&&(this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&(this.coords.w_handle=
"single"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100),this.coords.grid_gap=this.toFixed(this.coords.p_handle/2-.1),this.$cache.grid[0].style.width=this.toFixed(100-this.coords.p_handle)+"%",this.$cache.grid[0].style.left=this.coords.grid_gap+"%"))},update:function(a){this.input&&(this.is_update=!0,this.options.from=this.result.from,this.options.to=this.result.to,this.update_check.from=
this.result.from,this.update_check.to=this.result.to,this.options=f.extend(this.options,a),this.validate(),this.updateResult(a),this.toggleInput(),this.remove(),this.init(!0))},reset:function(){this.input&&(this.updateResult(),this.update())},destroy:function(){this.input&&(this.toggleInput(),this.$cache.input.prop("readonly",!1),f.data(this.input,"ionRangeSlider",null),this.remove(),this.options=this.input=null)}};f.fn.ionRangeSlider=function(a){return this.each(function(){f.data(this,"ionRangeSlider")||
f.data(this,"ionRangeSlider",new q(this,a,t++))})};(function(){for(var a=0,b=["ms","moz","webkit","o"],d=0;d<b.length&&!k.requestAnimationFrame;++d)k.requestAnimationFrame=k[b[d]+"RequestAnimationFrame"],k.cancelAnimationFrame=k[b[d]+"CancelAnimationFrame"]||k[b[d]+"CancelRequestAnimationFrame"];k.requestAnimationFrame||(k.requestAnimationFrame=function(b,d){var c=(new Date).getTime(),e=Math.max(0,16-(c-a)),f=k.setTimeout(function(){b(c+e)},e);a=c+e;return f});k.cancelAnimationFrame||(k.cancelAnimationFrame=
function(a){clearTimeout(a)})})()});
;(function ( $, window, undefined ) {

    /** Default settings */
    var defaults = {
        active: null,
        event: 'click',
        disabled: [],
        collapsible: 'accordion',
        startCollapsed: false,
        rotate: false,
        setHash: false,
        animation: 'default',
        animationQueue: false,
        duration: 500,
        scrollToAccordion: false,
        scrollToAccordionOffset: 0,
        accordionTabElement: '<div></div>',
        activate: function(){},
        deactivate: function(){},
        load: function(){},
        activateState: function(){},
        classes: {
            stateDefault: 'responsive-tabs-default',
            stateActive: 'responsive-tabs-active',
            stateDisabled: 'responsive-tabs-disabled',
            stateExcluded: 'responsive-tabs-excluded',
            container: 'responsive-tabs',
            ul: 'responsive-tabs-nav',
            tab: 'responsive-tabs-tab',
            anchor: 'responsive-tabs-anchor',
            panel: 'responsive-tabs-panel',
            accordionTitle: 'responsive-tabs-accordion-title'
        }
    };

    /**
     * Responsive Tabs
     * @constructor
     * @param {object} element - The HTML element the validator should be bound to
     * @param {object} options - An option map
     */
    function ResponsiveTabs(element, options) {
        this.element = element; // Selected DOM element
        this.$element = $(element); // Selected jQuery element

        this.tabs = []; // Create tabs array
        this.state = ''; // Define the plugin state (tabs/accordion)
        this.rotateInterval = 0; // Define rotate interval
        this.$queue = $({});

        // Extend the defaults with the passed options
        this.options = $.extend( {}, defaults, options);

        this.init();
    }


    /**
     * This function initializes the tab plugin
     */
    ResponsiveTabs.prototype.init = function () {
        var _this = this;

        // Load all the elements
        this.tabs = this._loadElements();
        this._loadClasses();
        this._loadEvents();

        // Window resize bind to check state
        $(window).on('resize', function(e) {
            _this._setState(e);
        });

        // Hashchange event
        $(window).on('hashchange', function(e) {
            var tabRef = _this._getTabRefBySelector(window.location.hash);
            var oTab = _this._getTab(tabRef);

            // Check if a tab is found that matches the hash
            if(tabRef >= 0 && !oTab._ignoreHashChange && !oTab.disabled) {
                // If so, open the tab and auto close the current one
                _this._openTab(e, _this._getTab(tabRef), true);
            }
        });

        // Start rotate event if rotate option is defined
        if(this.options.rotate !== false) {
            this.startRotation();
        }

        // --------------------
        // Define plugin events
        //

        // Activate: this event is called when a tab is selected
        this.$element.bind('tabs-activate', function(e, oTab) {
            _this.options.activate.call(this, e, oTab);
        });
        // Deactivate: this event is called when a tab is closed
        this.$element.bind('tabs-deactivate', function(e, oTab) {
            _this.options.deactivate.call(this, e, oTab);
        });
        // Activate State: this event is called when the plugin switches states
        this.$element.bind('tabs-activate-state', function(e, state) {
            _this.options.activateState.call(this, e, state);
        });

        // Load: this event is called when the plugin has been loaded
        this.$element.bind('tabs-load', function(e) {
            var startTab;

            _this._setState(e); // Set state

            // Check if the panel should be collaped on load
            if(_this.options.startCollapsed !== true && !(_this.options.startCollapsed === 'accordion' && _this.state === 'accordion')) {

                startTab = _this._getStartTab();

                // Open the initial tab
                _this._openTab(e, startTab); // Open first tab

                // Call the callback function
                _this.options.load.call(this, e, startTab); // Call the load callback
            }
        });
        // Trigger loaded event
        this.$element.trigger('tabs-load');
    };

    //
    // PRIVATE FUNCTIONS
    //

    /**
     * This function loads the tab elements and stores them in an array
     * @returns {Array} Array of tab elements
     */
    ResponsiveTabs.prototype._loadElements = function() {
        var _this = this;
        var $ul = this.$element.children('ul');
        var tabs = [];
        var id = 0;

        // Add the classes to the basic html elements
        this.$element.addClass(_this.options.classes.container); // Tab container
        $ul.addClass(_this.options.classes.ul); // List container

        // Get tab buttons and store their data in an array
        $('li', $ul).each(function() {
            var $tab = $(this);
            var isExcluded = $tab.hasClass(_this.options.classes.stateExcluded);
            var $anchor, $panel, $accordionTab, $accordionAnchor, panelSelector;

            // Check if the tab should be excluded
            if(!isExcluded) {

                $anchor = $('a', $tab);
                panelSelector = $anchor.attr('href');
                $panel = $(panelSelector);
                $accordionTab = $(_this.options.accordionTabElement).insertBefore($panel);
                $accordionAnchor = $('<a></a>').attr('href', panelSelector).html($anchor.html()).appendTo($accordionTab);

                var oTab = {
                    _ignoreHashChange: false,
                    id: id,
                    disabled: ($.inArray(id, _this.options.disabled) !== -1),
                    tab: $(this),
                    anchor: $('a', $tab),
                    panel: $panel,
                    selector: panelSelector,
                    accordionTab: $accordionTab,
                    accordionAnchor: $accordionAnchor,
                    active: false
                };

                // 1up the ID
                id++;
                // Add to tab array
                tabs.push(oTab);
            }
        });
        return tabs;
    };


    /**
     * This function adds classes to the tab elements based on the options
     */
    ResponsiveTabs.prototype._loadClasses = function() {
        for (var i=0; i<this.tabs.length; i++) {
            this.tabs[i].tab.addClass(this.options.classes.stateDefault).addClass(this.options.classes.tab);
            this.tabs[i].anchor.addClass(this.options.classes.anchor);
            this.tabs[i].panel.addClass(this.options.classes.stateDefault).addClass(this.options.classes.panel);
            this.tabs[i].accordionTab.addClass(this.options.classes.accordionTitle);
            this.tabs[i].accordionAnchor.addClass(this.options.classes.anchor);
            if(this.tabs[i].disabled) {
                this.tabs[i].tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
                this.tabs[i].accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
           }
        }
    };

    /**
     * This function adds events to the tab elements
     */
    ResponsiveTabs.prototype._loadEvents = function() {
        var _this = this;

        // Define activate event on a tab element
        var fActivate = function(e) {
            var current = _this._getCurrentTab(); // Fetch current tab
            var activatedTab = e.data.tab;

            e.preventDefault();

            // Make sure this tab isn't disabled
            if(!activatedTab.disabled) {

                // Check if hash has to be set in the URL location
                if(_this.options.setHash) {
                    // Set the hash using the history api if available to tackle Chromes repaint bug on hash change
                    if(history.pushState) {
                        history.pushState(null, null, activatedTab.selector);
                    } else {
                        // Otherwise fallback to the hash update for sites that don't support the history api
                        window.location.hash = activatedTab.selector;
                    }
                }

                e.data.tab._ignoreHashChange = true;

                // Check if the activated tab isnt the current one or if its collapsible. If not, do nothing
                if(current !== activatedTab || _this._isCollapisble()) {
                    // The activated tab is either another tab of the current one. If it's the current tab it is collapsible
                    // Either way, the current tab can be closed
                    _this._closeTab(e, current);

                    // Check if the activated tab isnt the current one or if it isnt collapsible
                    if(current !== activatedTab || !_this._isCollapisble()) {
                        _this._openTab(e, activatedTab, false, true);
                    }
                }
            }
        };

        // Loop tabs
        for (var i=0; i<this.tabs.length; i++) {
            // Add activate function to the tab and accordion selection element
            this.tabs[i].anchor.on(_this.options.event, {tab: _this.tabs[i]}, fActivate);
            this.tabs[i].accordionAnchor.on(_this.options.event, {tab: _this.tabs[i]}, fActivate);
        }
    };

    /**
     * This function gets the tab that should be opened at start
     * @returns {Object} Tab object
     */
    ResponsiveTabs.prototype._getStartTab = function() {
        var tabRef = this._getTabRefBySelector(window.location.hash);
        var startTab;

        // Check if the page has a hash set that is linked to a tab
        if(tabRef >= 0 && !this._getTab(tabRef).disabled) {
            // If so, set the current tab to the linked tab
            startTab = this._getTab(tabRef);
        } else if(this.options.active > 0 && !this._getTab(this.options.active).disabled) {
            startTab = this._getTab(this.options.active);
        } else {
            // If not, just get the first one
            startTab = this._getTab(0);
        }

        return startTab;
    };

    /**
     * This function sets the current state of the plugin
     * @param {Event} e - The event that triggers the state change
     */
    ResponsiveTabs.prototype._setState = function(e) {
        var $ul = $('ul', this.$element);
        var oldState = this.state;
        var startCollapsedIsState = (typeof this.options.startCollapsed === 'string');
        var startTab;

        // The state is based on the visibility of the tabs list
        if($ul.is(':visible')){
            // Tab list is visible, so the state is 'tabs'
            this.state = 'tabs';
        } else {
            // Tab list is invisible, so the state is 'accordion'
            this.state = 'accordion';
        }

        // If the new state is different from the old state
        if(this.state !== oldState) {
            // If so, the state activate trigger must be called
            this.$element.trigger('tabs-activate-state', {oldState: oldState, newState: this.state});

            // Check if the state switch should open a tab
            if(oldState && startCollapsedIsState && this.options.startCollapsed !== this.state && this._getCurrentTab() === undefined) {
                // Get initial tab
                startTab = this._getStartTab(e);
                // Open the initial tab
                this._openTab(e, startTab); // Open first tab
            }
        }
    };

    /**
     * This function opens a tab
     * @param {Event} e - The event that triggers the tab opening
     * @param {Object} oTab - The tab object that should be opened
     * @param {Boolean} closeCurrent - Defines if the current tab should be closed
     * @param {Boolean} stopRotation - Defines if the tab rotation loop should be stopped
     */
    ResponsiveTabs.prototype._openTab = function(e, oTab, closeCurrent, stopRotation) {
        var _this = this;
        var scrollOffset;

        // Check if the current tab has to be closed
        if(closeCurrent) {
            this._closeTab(e, this._getCurrentTab());
        }

        // Check if the rotation has to be stopped when activated
        if(stopRotation && this.rotateInterval > 0) {
            this.stopRotation();
        }

        // Set this tab to active
        oTab.active = true;
        // Set active classes to the tab button and accordion tab button
        oTab.tab.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);
        oTab.accordionTab.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);

        // Run panel transiton
        _this._doTransition(oTab.panel, _this.options.animation, 'open', function() {
            // When finished, set active class to the panel
            oTab.panel.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);

            // And if enabled and state is accordion, scroll to the accordion tab
            if(_this.getState() === 'accordion' && _this.options.scrollToAccordion && (!_this._isInView(oTab.accordionTab) || _this.options.animation !== 'default')) {

                // Add offset element's height to scroll position
                scrollOffset = oTab.accordionTab.offset().top - _this.options.scrollToAccordionOffset;

                // Check if the animation option is enabled, and if the duration isn't 0
                if(_this.options.animation !== 'default' && _this.options.duration > 0) {
                    // If so, set scrollTop with animate and use the 'animation' duration
                    $('html, body').animate({
                        scrollTop: scrollOffset
                    }, _this.options.duration);
                } else {
                    //  If not, just set scrollTop
                    $('html, body').scrollTop(scrollOffset);
                }
            }
        });

        this.$element.trigger('tabs-activate', oTab);
    };

    /**
     * This function closes a tab
     * @param {Event} e - The event that is triggered when a tab is closed
     * @param {Object} oTab - The tab object that should be closed
     */
    ResponsiveTabs.prototype._closeTab = function(e, oTab) {
        var _this = this;
        var doQueueOnState = typeof _this.options.animationQueue === 'string';
        var doQueue;

        if(oTab !== undefined) {
            if(doQueueOnState && _this.getState() === _this.options.animationQueue) {
                doQueue = true;
            } else if(doQueueOnState) {
                doQueue = false;
            } else {
                doQueue = _this.options.animationQueue;
            }

            // Deactivate tab
            oTab.active = false;
            // Set default class to the tab button
            oTab.tab.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);

            // Run panel transition
            _this._doTransition(oTab.panel, _this.options.animation, 'close', function() {
                // Set default class to the accordion tab button and tab panel
                oTab.accordionTab.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);
                oTab.panel.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);
            }, !doQueue);

            this.$element.trigger('tabs-deactivate', oTab);
        }
    };

    /**
     * This function runs an effect on a panel
     * @param {Element} panel - The HTML element of the tab panel
     * @param {String} method - The transition method reference
     * @param {String} state - The state (open/closed) that the panel should transition to
     * @param {Function} callback - The callback function that is called after the transition
     * @param {Boolean} dequeue - Defines if the event queue should be dequeued after the transition
     */
    ResponsiveTabs.prototype._doTransition = function(panel, method, state, callback, dequeue) {
        var effect;
        var _this = this;

        // Get effect based on method
        switch(method) {
            case 'slide':
                effect = (state === 'open') ? 'slideDown' : 'slideUp';
                break;
            case 'fade':
                effect = (state === 'open') ? 'fadeIn' : 'fadeOut';
                break;
            default:
                effect = (state === 'open') ? 'show' : 'hide';
                // When default is used, set the duration to 0
                _this.options.duration = 0;
                break;
        }

        // Add the transition to a custom queue
        this.$queue.queue('responsive-tabs',function(next){
            // Run the transition on the panel
            panel[effect]({
                duration: _this.options.duration,
                complete: function() {
                    // Call the callback function
                    callback.call(panel, method, state);
                    // Run the next function in the queue
                    next();
                }
            });
        });

        // When the panel is openend, dequeue everything so the animation starts
        if(state === 'open' || dequeue) {
            this.$queue.dequeue('responsive-tabs');
        }

    };

    /**
     * This function returns the collapsibility of the tab in this state
     * @returns {Boolean} The collapsibility of the tab
     */
    ResponsiveTabs.prototype._isCollapisble = function() {
        return (typeof this.options.collapsible === 'boolean' && this.options.collapsible) || (typeof this.options.collapsible === 'string' && this.options.collapsible === this.getState());
    };

    /**
     * This function returns a tab by numeric reference
     * @param {Integer} numRef - Numeric tab reference
     * @returns {Object} Tab object
     */
    ResponsiveTabs.prototype._getTab = function(numRef) {
        return this.tabs[numRef];
    };

    /**
     * This function returns the numeric tab reference based on a hash selector
     * @param {String} selector - Hash selector
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getTabRefBySelector = function(selector) {
        // Loop all tabs
        for (var i=0; i<this.tabs.length; i++) {
            // Check if the hash selector is equal to the tab selector
            if(this.tabs[i].selector === selector) {
                return i;
            }
        }
        // If none is found return a negative index
        return -1;
    };

    /**
     * This function returns the current tab element
     * @returns {Object} Current tab element
     */
    ResponsiveTabs.prototype._getCurrentTab = function() {
        return this._getTab(this._getCurrentTabRef());
    };

    /**
     * This function returns the next tab's numeric reference
     * @param {Integer} currentTabRef - Current numeric tab reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getNextTabRef = function(currentTabRef) {
        var tabRef = (currentTabRef || this._getCurrentTabRef());
        var nextTabRef = (tabRef === this.tabs.length - 1) ? 0 : tabRef + 1;
        return (this._getTab(nextTabRef).disabled) ? this._getNextTabRef(nextTabRef) : nextTabRef;
    };

    /**
     * This function returns the previous tab's numeric reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getPreviousTabRef = function() {
        return (this._getCurrentTabRef() === 0) ? this.tabs.length - 1 : this._getCurrentTabRef() - 1;
    };

    /**
     * This function returns the current tab's numeric reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getCurrentTabRef = function() {
        // Loop all tabs
        for (var i=0; i<this.tabs.length; i++) {
            // If this tab is active, return it
            if(this.tabs[i].active) {
                return i;
            }
        }
        // No tabs have been found, return negative index
        return -1;
    };

    //
    // HELPER FUNCTIONS
    //

    ResponsiveTabs.prototype._isInView = function($element) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $element.offset().top,
            elemBottom = elemTop + $element.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    };

    //
    // PUBLIC FUNCTIONS
    //

    /**
     * This function activates a tab
     * @param {Integer} tabRef - Numeric tab reference
     * @param {Boolean} stopRotation - Defines if the tab rotation should stop after activation
     */
    ResponsiveTabs.prototype.activate = function(tabRef, stopRotation) {
        var e = jQuery.Event('tabs-activate');
        var oTab = this._getTab(tabRef);
        if(!oTab.disabled) {
            this._openTab(e, oTab, true, stopRotation || true);
        }
    };

    /**
     * This function deactivates a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.deactivate = function(tabRef) {
        var e = jQuery.Event('tabs-dectivate');
        var oTab = this._getTab(tabRef);
        if(!oTab.disabled) {
            this._closeTab(e, oTab);
        }
    };

    /**
     * This function enables a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.enable = function(tabRef) {
        var oTab = this._getTab(tabRef);
        if(oTab){
            oTab.disabled = false;
            oTab.tab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled);
            oTab.accordionTab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled);
        }
    };

    /**
     * This function disable a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.disable = function(tabRef) {
        var oTab = this._getTab(tabRef);
        if(oTab){
            oTab.disabled = true;
            oTab.tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
            oTab.accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
        }
    };

    /**
     * This function gets the current state of the plugin
     * @returns {String} State of the plugin
     */
    ResponsiveTabs.prototype.getState = function() {
        return this.state;
    };

    /**
     * This function starts the rotation of the tabs
     * @param {Integer} speed - The speed of the rotation
     */
    ResponsiveTabs.prototype.startRotation = function(speed) {
        var _this = this;
        // Make sure not all tabs are disabled
        if(this.tabs.length > this.options.disabled.length) {
            this.rotateInterval = setInterval(function(){
                var e = jQuery.Event('rotate');
                _this._openTab(e, _this._getTab(_this._getNextTabRef()), true);
            }, speed || (($.isNumeric(_this.options.rotate)) ? _this.options.rotate : 4000) );
        } else {
            throw new Error("Rotation is not possible if all tabs are disabled");
        }
    };

    /**
     * This function stops the rotation of the tabs
     */
    ResponsiveTabs.prototype.stopRotation = function() {
        window.clearInterval(this.rotateInterval);
        this.rotateInterval = 0;
    };

    /**
     * This function can be used to get/set options
     * @return {any} Option value
     */
    ResponsiveTabs.prototype.option = function(key, value) {
        if(value) {
            this.options[key] = value;
        }
        return this.options[key];
    };

    /** jQuery wrapper */
    $.fn.responsiveTabs = function ( options ) {
        var args = arguments;
        var instance;

        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'responsivetabs')) {
                    $.data(this, 'responsivetabs', new ResponsiveTabs( this, options ));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            instance = $.data(this[0], 'responsivetabs');

            // Allow instances to be destroyed via the 'destroy' method
            if (options === 'destroy') {
                // TODO: destroy instance classes, etc
                $.data(this, 'responsivetabs', null);
            }

            if (instance instanceof ResponsiveTabs && typeof instance[options] === 'function') {
                return instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
            } else {
                return this;
            }
        }
    };

}(jQuery, window));
/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()});b.$results.find(".select2-results__option[aria-selected]").each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):h-g<0&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");if("true"===c.attr("aria-selected"))return void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{}));d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2");a(".select2.select2-container--open").each(function(){var b=a(this);this!=d[0]&&b.data("element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===e.$search.val()){var b=e.$searchContainer.prev(".select2-selection__choice");if(b.length>0){var d=b.data("data");e.searchRemoveChoice(d),a.preventDefault()}}});var f=document.documentMode,g=f&&f<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(g)return void e.$selection.off("input.search input.searchcheck");e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),void 0!==a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(null!=(b=c.data(a[0],"data")))return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/* -----------------------------------------------------------
   Select Splitter
   + https://github.com/xavierfaucon/bootstrap-selectsplitter
----------------------------------------------------------- */
+function(e){"use strict";function t(t){return this.each(function(){var l=e(this),s=l.data("selectsplitter"),o="object"==typeof t&&t;(s||"destroy"!=t)&&(s||l.data("selectsplitter",s=new r(this,o)),"string"==typeof t&&s[t]())})}var r=function(e,t){this.init("selectsplitter",e,t)};r.DEFAULTS={template:'<div class="row" data-selectsplitter-wrapper-selector><div class="col-xs-12 col-sm-6"><select class="form-control" data-selectsplitter-firstselect-selector></select></div> <!-- Add the extra clearfix for only the required viewport --><div class="clearfix visible-xs-block"></div><div class="col-xs-12 col-sm-6"><select class="form-control" data-selectsplitter-secondselect-selector></select></div></div>'},r.prototype.init=function(t,l,s){var o=this;o.type=t,o.$element=e(l),o.$element.hide(),o.options=e.extend({},r.DEFAULTS,s),o.fullCategoryList={};var a=0,n=0;o.$element.find("optgroup").each(function(){o.fullCategoryList[e(this).attr("label")]={};var t=e(this),r=0,l={};e(this).find("option").each(function(){var t=e(this).attr("value"),s=e(this).text();l[e(this).index()]={x:t,y:s},r++}),r>n&&(n=r),o.fullCategoryList[t.attr("label")]=l,a++});var i="";for(var c in o.fullCategoryList)o.fullCategoryList.hasOwnProperty(c)&&(i=i+"<option>"+c+"</option>");o.$element.after(o.options.template),o.$wrapper=o.$element.next("div[data-selectsplitter-wrapper-selector]"),o.$firstSelect=e("select[data-selectsplitter-firstselect-selector]",o.$wrapper),o.$secondSelect=e("select[data-selectsplitter-secondselect-selector]",o.$wrapper);var d=Math.max(a,n,2);d=Math.min(d,10),o.$firstSelect.attr("size",d),o.$secondSelect.attr("size",d),o.$firstSelect.append(i),o.$firstSelect.on("change",e.proxy(o.updateParentCategory,o)),o.$secondSelect.on("change",e.proxy(o.updateChildCategory,o)),o.$selectedOption="",o.currentParentCategory="",o.currentChildCategory="",o.$element.find("option[selected=selected]").length&&(o.$selectedOption=o.$element.find("option[selected=selected]"),o.currentParentCategory=o.$selectedOption.closest("optgroup").attr("label"),o.currentChildCategory=o.$selectedOption.attr("value"),o.$firstSelect.find("option:contains("+o.currentParentCategory+")").attr("selected","selected"),o.$firstSelect.trigger("change"))},r.prototype.updateParentCategory=function(){var e=this;e.currentParentCategory=e.$firstSelect.val(),e.$secondSelect.empty();var t="";for(var r in e.fullCategoryList[e.currentParentCategory])e.fullCategoryList[e.currentParentCategory].hasOwnProperty(r)&&(t=t+'<option value="'+e.fullCategoryList[e.currentParentCategory][r].x+'">'+e.fullCategoryList[e.currentParentCategory][r].y+"</option>");e.$secondSelect.append(t),e.$selectedOption&&e.$secondSelect.find('option[value="'+e.$selectedOption.attr("value")+'"]').attr("selected","selected")},r.prototype.updateChildCategory=function(t){var r=this;r.currentChildCategory=e(t.target).val(),r.$element.find("option[selected=selected]").removeAttr("selected"),r.$element.find('option[value="'+r.currentChildCategory+'"]').attr("selected","selected"),r.$element.trigger("change"),r.$selectedOption=r.$element.find("option[selected=selected]")},r.prototype.destroy=function(){var e=this;e.$wrapper.remove(),e.$element.removeData(e.type),e.$element.show()},e.fn.selectsplitter=t,e.fn.selectsplitter.Constructor=r}(jQuery);
/*!
 * bootstrap-star-rating v4.0.3
 * http://plugins.krajee.com/star-rating
 *
 * Author: Kartik Visweswaran
 * Copyright: 2013 - 2017, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-star-rating/blob/master/LICENSE.md
 */!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(window.jQuery)}(function(e){"use strict";e.fn.ratingLocales={},e.fn.ratingThemes={};var t,a;t={NAMESPACE:".rating",DEFAULT_MIN:0,DEFAULT_MAX:5,DEFAULT_STEP:.5,isEmpty:function(t,a){return null===t||void 0===t||0===t.length||a&&""===e.trim(t)},getCss:function(e,t){return e?" "+t:""},addCss:function(e,t){e.removeClass(t).addClass(t)},getDecimalPlaces:function(e){var t=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},applyPrecision:function(e,t){return parseFloat(e.toFixed(t))},handler:function(e,a,n,r,i){var l=i?a:a.split(" ").join(t.NAMESPACE+" ")+t.NAMESPACE;r||e.off(l),e.on(l,n)}},a=function(t,a){var n=this;n.$element=e(t),n._init(a)},a.prototype={constructor:a,_parseAttr:function(e,a){var n,r,i,l,s=this,o=s.$element,c=o.attr("type");if("range"===c||"number"===c){switch(r=a[e]||o.data(e)||o.attr(e),e){case"min":i=t.DEFAULT_MIN;break;case"max":i=t.DEFAULT_MAX;break;default:i=t.DEFAULT_STEP}n=t.isEmpty(r)?i:r,l=parseFloat(n)}else l=parseFloat(a[e]);return isNaN(l)?i:l},_parseValue:function(e){var t=this,a=parseFloat(e);return isNaN(a)&&(a=t.clearValue),!t.zeroAsNull||0!==a&&"0"!==a?a:null},_setDefault:function(e,a){var n=this;t.isEmpty(n[e])&&(n[e]=a)},_initSlider:function(e){var a=this,n=a.$element.val();a.initialValue=t.isEmpty(n)?0:n,a._setDefault("min",a._parseAttr("min",e)),a._setDefault("max",a._parseAttr("max",e)),a._setDefault("step",a._parseAttr("step",e)),(isNaN(a.min)||t.isEmpty(a.min))&&(a.min=t.DEFAULT_MIN),(isNaN(a.max)||t.isEmpty(a.max))&&(a.max=t.DEFAULT_MAX),(isNaN(a.step)||t.isEmpty(a.step)||0===a.step)&&(a.step=t.DEFAULT_STEP),a.diff=a.max-a.min},_initHighlight:function(e){var t,a=this,n=a._getCaption();e||(e=a.$element.val()),t=a.getWidthFromValue(e)+"%",a.$filledStars.width(t),a.cache={caption:n,width:t,val:e}},_getContainerCss:function(){var e=this;return"rating-container"+t.getCss(e.theme,"theme-"+e.theme)+t.getCss(e.rtl,"rating-rtl")+t.getCss(e.size,"rating-"+e.size)+t.getCss(e.animate,"rating-animate")+t.getCss(e.disabled||e.readonly,"rating-disabled")+t.getCss(e.containerClass,e.containerClass)},_checkDisabled:function(){var e=this,t=e.$element,a=e.options;e.disabled=void 0===a.disabled?t.attr("disabled")||!1:a.disabled,e.readonly=void 0===a.readonly?t.attr("readonly")||!1:a.readonly,e.inactive=e.disabled||e.readonly,t.attr({disabled:e.disabled,readonly:e.readonly})},_addContent:function(e,t){var a=this,n=a.$container,r="clear"===e;return a.rtl?r?n.append(t):n.prepend(t):r?n.prepend(t):n.append(t)},_generateRating:function(){var a,n,r,i=this,l=i.$element;n=i.$container=e(document.createElement("div")).insertBefore(l),t.addCss(n,i._getContainerCss()),i.$rating=a=e(document.createElement("div")).attr("class","rating-stars").appendTo(n).append(i._getStars("empty")).append(i._getStars("filled")),i.$emptyStars=a.find(".empty-stars"),i.$filledStars=a.find(".filled-stars"),i._renderCaption(),i._renderClear(),i._initHighlight(),n.append(l),i.rtl&&(r=Math.max(i.$emptyStars.outerWidth(),i.$filledStars.outerWidth()),i.$emptyStars.width(r)),l.appendTo(a)},_getCaption:function(){var e=this;return e.$caption&&e.$caption.length?e.$caption.html():e.defaultCaption},_setCaption:function(e){var t=this;t.$caption&&t.$caption.length&&t.$caption.html(e)},_renderCaption:function(){var a,n=this,r=n.$element.val(),i=n.captionElement?e(n.captionElement):"";if(n.showCaption){if(a=n.fetchCaption(r),i&&i.length)return t.addCss(i,"caption"),i.html(a),void(n.$caption=i);n._addContent("caption",'<div class="caption">'+a+"</div>"),n.$caption=n.$container.find(".caption")}},_renderClear:function(){var a,n=this,r=n.clearElement?e(n.clearElement):"";if(n.showClear){if(a=n._getClearClass(),r.length)return t.addCss(r,a),r.attr({title:n.clearButtonTitle}).html(n.clearButton),void(n.$clear=r);n._addContent("clear",'<div class="'+a+'" title="'+n.clearButtonTitle+'">'+n.clearButton+"</div>"),n.$clear=n.$container.find("."+n.clearButtonBaseClass)}},_getClearClass:function(){var e=this;return e.clearButtonBaseClass+" "+(e.inactive?"":e.clearButtonActiveClass)},_toggleHover:function(e){var t,a,n,r=this;e&&(r.hoverChangeStars&&(t=r.getWidthFromValue(r.clearValue),a=e.val<=r.clearValue?t+"%":e.width,r.$filledStars.css("width",a)),r.hoverChangeCaption&&(n=e.val<=r.clearValue?r.fetchCaption(r.clearValue):e.caption,n&&r._setCaption(n+"")))},_init:function(t){var a,n=this,r=n.$element.addClass("rating-input");return n.options=t,e.each(t,function(e,t){n[e]=t}),(n.rtl||"rtl"===r.attr("dir"))&&(n.rtl=!0,r.attr("dir","rtl")),n.starClicked=!1,n.clearClicked=!1,n._initSlider(t),n._checkDisabled(),n.displayOnly&&(n.inactive=!0,n.showClear=!1,n.showCaption=!1),n._generateRating(),n._initEvents(),n._listen(),a=n._parseValue(r.val()),r.val(a),r.removeClass("rating-loading")},_initEvents:function(){var e=this;e.events={_getTouchPosition:function(a){var n=t.isEmpty(a.pageX)?a.originalEvent.touches[0].pageX:a.pageX;return n-e.$rating.offset().left},_listenClick:function(e,t){return e.stopPropagation(),e.preventDefault(),e.handled===!0?!1:(t(e),void(e.handled=!0))},_noMouseAction:function(t){return!e.hoverEnabled||e.inactive||t&&t.isDefaultPrevented()},initTouch:function(a){var n,r,i,l,s,o,c,u,d=e.clearValue||0,p="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch;p&&!e.inactive&&(n=a.originalEvent,r=t.isEmpty(n.touches)?n.changedTouches:n.touches,i=e.events._getTouchPosition(r[0]),"touchend"===a.type?(e._setStars(i),u=[e.$element.val(),e._getCaption()],e.$element.trigger("change").trigger("rating:change",u),e.starClicked=!0):(l=e.calculate(i),s=l.val<=d?e.fetchCaption(d):l.caption,o=e.getWidthFromValue(d),c=l.val<=d?o+"%":l.width,e._setCaption(s),e.$filledStars.css("width",c)))},starClick:function(t){var a,n;e.events._listenClick(t,function(t){return e.inactive?!1:(a=e.events._getTouchPosition(t),e._setStars(a),n=[e.$element.val(),e._getCaption()],e.$element.trigger("change").trigger("rating.change",n),void(e.starClicked=!0))})},clearClick:function(t){e.events._listenClick(t,function(){e.inactive||(e.clear(),e.clearClicked=!0)})},starMouseMove:function(t){var a,n;e.events._noMouseAction(t)||(e.starClicked=!1,a=e.events._getTouchPosition(t),n=e.calculate(a),e._toggleHover(n),e.$element.trigger("rating:hover",[n.val,n.caption,"stars"]))},starMouseLeave:function(t){var a;e.events._noMouseAction(t)||e.starClicked||(a=e.cache,e._toggleHover(a),e.$element.trigger("rating:hoverleave",["stars"]))},clearMouseMove:function(t){var a,n,r,i;!e.events._noMouseAction(t)&&e.hoverOnClear&&(e.clearClicked=!1,a='<span class="'+e.clearCaptionClass+'">'+e.clearCaption+"</span>",n=e.clearValue,r=e.getWidthFromValue(n)||0,i={caption:a,width:r,val:n},e._toggleHover(i),e.$element.trigger("rating:hover",[n,a,"clear"]))},clearMouseLeave:function(t){var a;e.events._noMouseAction(t)||e.clearClicked||!e.hoverOnClear||(a=e.cache,e._toggleHover(a),e.$element.trigger("rating:hoverleave",["clear"]))},resetForm:function(t){t&&t.isDefaultPrevented()||e.inactive||e.reset()}}},_listen:function(){var a=this,n=a.$element,r=n.closest("form"),i=a.$rating,l=a.$clear,s=a.events;return t.handler(i,"touchstart touchmove touchend",e.proxy(s.initTouch,a)),t.handler(i,"click touchstart",e.proxy(s.starClick,a)),t.handler(i,"mousemove",e.proxy(s.starMouseMove,a)),t.handler(i,"mouseleave",e.proxy(s.starMouseLeave,a)),a.showClear&&l.length&&(t.handler(l,"click touchstart",e.proxy(s.clearClick,a)),t.handler(l,"mousemove",e.proxy(s.clearMouseMove,a)),t.handler(l,"mouseleave",e.proxy(s.clearMouseLeave,a))),r.length&&t.handler(r,"reset",e.proxy(s.resetForm,a),!0),n},_getStars:function(e){var t,a=this,n='<span class="'+e+'-stars">';for(t=1;t<=a.stars;t++)n+='<span class="star">'+a[e+"Star"]+"</span>";return n+"</span>"},_setStars:function(e){var t=this,a=arguments.length?t.calculate(e):t.calculate(),n=t.$element,r=t._parseValue(a.val);return n.val(r),t.$filledStars.css("width",a.width),t._setCaption(a.caption),t.cache=a,n},showStars:function(e){var t=this,a=t._parseValue(e);return t.$element.val(a),t._setStars()},calculate:function(e){var a=this,n=t.isEmpty(a.$element.val())?0:a.$element.val(),r=arguments.length?a.getValueFromPosition(e):n,i=a.fetchCaption(r),l=a.getWidthFromValue(r);return l+="%",{caption:i,width:l,val:r}},getValueFromPosition:function(e){var a,n,r=this,i=t.getDecimalPlaces(r.step),l=r.$rating.width();return n=r.diff*e/(l*r.step),n=r.rtl?Math.floor(n):Math.ceil(n),a=t.applyPrecision(parseFloat(r.min+n*r.step),i),a=Math.max(Math.min(a,r.max),r.min),r.rtl?r.max-a:a},getWidthFromValue:function(e){var t,a,n=this,r=n.min,i=n.max,l=n.$emptyStars;return!e||r>=e||r===i?0:(a=l.outerWidth(),t=a?l.width()/a:1,e>=i?100:(e-r)*t*100/(i-r))},fetchCaption:function(e){var a,n,r,i,l,s=this,o=parseFloat(e)||s.clearValue,c=s.starCaptions,u=s.starCaptionClasses;return o&&o!==s.clearValue&&(o=t.applyPrecision(o,t.getDecimalPlaces(s.step))),i="function"==typeof u?u(o):u[o],r="function"==typeof c?c(o):c[o],n=t.isEmpty(r)?s.defaultCaption.replace(/\{rating}/g,o):r,a=t.isEmpty(i)?s.clearCaptionClass:i,l=o===s.clearValue?s.clearCaption:n,'<span class="'+a+'">'+l+"</span>"},destroy:function(){var a=this,n=a.$element;return t.isEmpty(a.$container)||a.$container.before(n).remove(),e.removeData(n.get(0)),n.off("rating").removeClass("rating rating-input")},create:function(e){var t=this,a=e||t.options||{};return t.destroy().rating(a)},clear:function(){var e=this,t='<span class="'+e.clearCaptionClass+'">'+e.clearCaption+"</span>";return e.inactive||e._setCaption(t),e.showStars(e.clearValue).trigger("change").trigger("rating:clear")},reset:function(){var e=this;return e.showStars(e.initialValue).trigger("rating:reset")},update:function(e){var t=this;return arguments.length?t.showStars(e):t.$element},refresh:function(t){var a=this,n=a.$element;return t?a.destroy().rating(e.extend(!0,a.options,t)).trigger("rating:refresh"):n}},e.fn.rating=function(n){var r=Array.apply(null,arguments),i=[];switch(r.shift(),this.each(function(){var l,s=e(this),o=s.data("rating"),c="object"==typeof n&&n,u=c.theme||s.data("theme"),d=c.language||s.data("language")||"en",p={},g={};o||(u&&(p=e.fn.ratingThemes[u]||{}),"en"===d||t.isEmpty(e.fn.ratingLocales[d])||(g=e.fn.ratingLocales[d]),l=e.extend(!0,{},e.fn.rating.defaults,p,e.fn.ratingLocales.en,g,c,s.data()),o=new a(this,l),s.data("rating",o)),"string"==typeof n&&i.push(o[n].apply(o,r))}),i.length){case 0:return this;case 1:return void 0===i[0]?this:i[0];default:return i}},e.fn.rating.defaults={theme:"",language:"en",stars:5,filledStar:'<i class="icon-star3"></i>',emptyStar:'<i class="icon-star-empty"></i>',containerClass:"",size:"md",animate:!0,displayOnly:!1,rtl:!1,showClear:!0,showCaption:!0,starCaptionClasses:{.5:"badge badge-danger badge-danger",1:"badge badge-danger badge-danger",1.5:"badge badge-warning badge-warning",2:"badge badge-warning badge-warning",2.5:"badge badge-info badge-info",3:"badge badge-info badge-info",3.5:"badge badge-primary badge-primary",4:"badge badge-primary badge-primary",4.5:"badge badge-success badge-success",5:"badge badge-success badge-success"},clearButton:'<i class="icon-minus-sign"></i>',clearButtonBaseClass:"clear-rating",clearButtonActiveClass:"clear-rating-active",clearCaptionClass:"badge badge-default",clearValue:null,captionElement:null,clearElement:null,hoverEnabled:!0,hoverChangeCaption:!0,hoverChangeStars:!0,hoverOnClear:!0,zeroAsNull:!0},e.fn.ratingLocales.en={defaultCaption:"{rating} Stars",starCaptions:{.5:"Half Star",1:"One Star",1.5:"One & Half Star",2:"Two Stars",2.5:"Two & Half Stars",3:"Three Stars",3.5:"Three & Half Stars",4:"Four Stars",4.5:"Four & Half Stars",5:"Five Stars"},clearButtonTitle:"Clear",clearCaption:"Not Rated"},e.fn.rating.Constructor=a,e(document).ready(function(){var t=e("input.rating");t.length&&t.removeClass("rating-loading").addClass("rating-loading").rating()})});




/*!
 * Krajee SVG Theme Configuration for bootstrap-star-rating.
 * This file must be loaded after 'star-rating.js'.
 *
 * @see http://github.com/kartik-v/bootstrap-star-rating
 * @author Kartik Visweswaran <kartikv2@gmail.com>
 */!function(a){"use strict";a.fn.ratingThemes["krajee-svg"]={filledStar:'<span class="krajee-icon krajee-icon-star"></span>',emptyStar:'<span class="krajee-icon krajee-icon-star"></span>',clearButton:'<span class="krajee-icon-clear"></span>'}}(window.jQuery);
//! moment.js
//! version : 2.20.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        }
        else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function mod(n, x) {
    return ((n % x) + x) % x;
}

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = require;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {}
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, tmpLocale, parentConfig = baseConfig;
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100, h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
        case 'year': output = monthDiff(this, that) / 12; break;
        case 'month': output = monthDiff(this, that); break;
        case 'quarter': output = monthDiff(this, that) / 3; break;
        case 'second': output = (this - that) / 1e3; break; // 1000
        case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
        case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
        case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
        case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default: output = this - that;
    }

    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this._d.valueOf()).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function clone$1 () {
    return createDuration(this);
}

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function sign(x) {
    return ((x > 0) - (x < 0)) || +x;
}

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return totalSign + 'P' +
        (Y ? ymSign + Y + 'Y' : '') +
        (M ? ymSign + M + 'M' : '') +
        (D ? daysSign + D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? hmsSign + h + 'H' : '') +
        (m ? hmsSign + m + 'M' : '') +
        (s ? hmsSign + s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.clone          = clone$1;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.20.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

// currently HTML5 input type only supports 24-hour formats
hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',                             // <input type="date" />
    TIME: 'HH:mm',                                  // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
    WEEK: 'YYYY-[W]WW',                             // <input type="week" />
    MONTH: 'YYYY-MM'                                // <input type="month" />
};

return hooks;

})));

/*@preserve
 * Tempus Dominus Bootstrap4 v5.0.0-alpha14 (https://tempusdominus.github.io/bootstrap-4/)
 * Copyright 2016-2017 Jonathan Peterson
 * Licensed under MIT (https://github.com/tempusdominus/bootstrap-3/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Tempus Dominus Bootstrap4's requires jQuery. jQuery must be included before Tempus Dominus Bootstrap4's JavaScript.");if(+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1===b[0]&&9===b[1]&&b[2]<1||b[0]>=4)throw new Error("Tempus Dominus Bootstrap4's requires at least jQuery v1.9.1 but less than v4.0.0")}(jQuery),"undefined"==typeof moment)throw new Error("Tempus Dominus Bootstrap4's requires moment.js. Moment.js must be included before Tempus Dominus Bootstrap4's JavaScript.");var version=moment.version.split(".");if(version[0]<=2&&version[1]<17||version[0]>=3)throw new Error("Tempus Dominus Bootstrap4's requires at least moment.js v2.17.0 but less than v3.0.0");+function(){function a(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function b(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(a,b){var d="datetimepicker",f="5.0.0-alpha12",g=""+d,h="."+g,i=g+".",j=".data-api",k={DATA_TOGGLE:'[data-toggle="'+g+'"]'},l={INPUT:d+"-input"},m={CHANGE:"change"+h,BLUR:"blur"+h,KEYUP:"keyup"+h,KEYDOWN:"keydown"+h,FOCUS:"focus"+h,CLICK_DATA_API:"click"+h+j,UPDATE:i+"update",ERROR:i+"error",HIDE:i+"hide",SHOW:i+"show"},n=[{CLASS_NAME:"days",NAV_FUNCTION:"M",NAV_STEP:1},{CLASS_NAME:"months",NAV_FUNCTION:"y",NAV_STEP:1},{CLASS_NAME:"years",NAV_FUNCTION:"y",NAV_STEP:10},{CLASS_NAME:"decades",NAV_FUNCTION:"y",NAV_STEP:100}],o={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t",delete:46,46:"delete"},p=["times","days","months","years","decades"],q={},r={},s=0,t={timeZone:"",format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:b.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"icon-clock",date:"icon-calendar",up:"icon-arrow-up",down:"icon-arrow-down",previous:"icon-chevron-left",next:"icon-chevron-right",today:"icon-calendar-check-o",clear:"icon-delete",close:"icon-times"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time",selectDate:"Select Date"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",buttons:{showToday:!1,showClear:!1,showClose:!1},widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,keyBinds:{up:function(){if(!this.widget)return!1;var a=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")?this.date(a.clone().subtract(7,"d")):this.date(a.clone().add(this.stepping(),"m")),!0},down:function(){if(!this.widget)return this.show(),!1;var a=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")?this.date(a.clone().add(7,"d")):this.date(a.clone().subtract(this.stepping(),"m")),!0},"control up":function(){if(!this.widget)return!1;var a=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")?this.date(a.clone().subtract(1,"y")):this.date(a.clone().add(1,"h")),!0},"control down":function(){if(!this.widget)return!1;var a=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")?this.date(a.clone().add(1,"y")):this.date(a.clone().subtract(1,"h")),!0},left:function(){if(!this.widget)return!1;var a=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")&&this.date(a.clone().subtract(1,"d")),!0},right:function(){if(!this.widget)return!1;var a=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")&&this.date(a.clone().add(1,"d")),!0},pageUp:function(){if(!this.widget)return!1;var a=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")&&this.date(a.clone().subtract(1,"M")),!0},pageDown:function(){if(!this.widget)return!1;var a=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")&&this.date(a.clone().add(1,"M")),!0},enter:function(){return this.hide(),!0},escape:function(){return!!this.widget&&(this.hide(),!0)},"control space":function(){return!!this.widget&&(this.widget.find(".timepicker").is(":visible")&&this.widget.find('.btn[data-action="togglePeriod"]').click(),!0)},t:function(){return this.date(this.getMoment()),!0},delete:function(){return!!this.widget&&(this.clear(),!0)}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1,allowMultidate:!1,multidateSeparator:","},u=function(){function i(a,b){c(this,i),this._options=this._getOptions(b),this._element=a,this._dates=[],this._datesFormatted=[],this._viewDate=null,this.unset=!0,this.component=!1,this.widget=!1,this.use24Hours=null,this.actualFormat=null,this.parseFormats=null,this.currentViewMode=null,this._int()}return i.prototype._int=function(){var b=this._element.data("target-input");this._element.is("input")?this.input=this._element:void 0!==b&&("nearest"===b?this.input=this._element.find("input"):this.input=a(b)),this._dates=[],this._dates[0]=this.getMoment(),this._viewDate=this.getMoment().clone(),a.extend(!0,this._options,this._dataToOptions()),this.options(this._options),this._initFormatting(),void 0!==this.input&&this.input.is("input")&&0!==this.input.val().trim().length?this._setValue(this._parseInputDate(this.input.val().trim()),0):this._options.defaultDate&&void 0!==this.input&&void 0===this.input.attr("placeholder")&&this._setValue(this._options.defaultDate,0),this._options.inline&&this.show()},i.prototype._update=function(){this.widget&&(this._fillDate(),this._fillTime())},i.prototype._setValue=function(a,b){var c=this.unset?null:this._dates[b],d="";if(!a)return this._options.allowMultidate&&1!==this._dates.length?(d=this._element.data("date")+",",d=d.replace(c.format(this.actualFormat)+",","").replace(",,","").replace(/,\s*$/,""),this._dates.splice(b,1),this._datesFormatted.splice(b,1)):(this.unset=!0,this._dates=[],this._datesFormatted=[]),void 0!==this.input&&(this.input.val(d),this.input.trigger("input")),this._element.data("date",d),this._notifyEvent({type:i.Event.CHANGE,date:!1,oldDate:c}),void this._update();if(a=a.clone().locale(this._options.locale),this._hasTimeZone()&&a.tz(this._options.timeZone),1!==this._options.stepping&&a.minutes(Math.round(a.minutes()/this._options.stepping)*this._options.stepping).seconds(0),this._isValid(a)){if(this._dates[b]=a,this._datesFormatted[b]=a.format("YYYY-MM-DD"),this._viewDate=a.clone(),this._options.allowMultidate&&this._dates.length>1){for(var e=0;e<this._dates.length;e++)d+=""+this._dates[e].format(this.actualFormat)+this._options.multidateSeparator;d=d.replace(/,\s*$/,"")}else d=this._dates[b].format(this.actualFormat);void 0!==this.input&&(this.input.val(d),this.input.trigger("input")),this._element.data("date",d),this.unset=!1,this._update(),this._notifyEvent({type:i.Event.CHANGE,date:this._dates[b].clone(),oldDate:c})}else this._options.keepInvalid?this._notifyEvent({type:i.Event.CHANGE,date:a,oldDate:c}):void 0!==this.input&&(this.input.val(""+(this.unset?"":this._dates[b].format(this.actualFormat))),this.input.trigger("input")),this._notifyEvent({type:i.Event.ERROR,date:a,oldDate:c})},i.prototype._change=function(b){var c=a(b.target).val().trim(),d=c?this._parseInputDate(c):null;return this._setValue(d),b.stopImmediatePropagation(),!1},i.prototype._getOptions=function(b){return b=a.extend(!0,{},t,b)},i.prototype._hasTimeZone=function(){return void 0!==b.tz&&void 0!==this._options.timeZone&&null!==this._options.timeZone&&""!==this._options.timeZone},i.prototype._isEnabled=function(a){if("string"!=typeof a||a.length>1)throw new TypeError("isEnabled expects a single character string parameter");switch(a){case"y":return this.actualFormat.indexOf("Y")!==-1;case"M":return this.actualFormat.indexOf("M")!==-1;case"d":return this.actualFormat.toLowerCase().indexOf("d")!==-1;case"h":case"H":return this.actualFormat.toLowerCase().indexOf("h")!==-1;case"m":return this.actualFormat.indexOf("m")!==-1;case"s":return this.actualFormat.indexOf("s")!==-1;default:return!1}},i.prototype._hasTime=function(){return this._isEnabled("h")||this._isEnabled("m")||this._isEnabled("s")},i.prototype._hasDate=function(){return this._isEnabled("y")||this._isEnabled("M")||this._isEnabled("d")},i.prototype._dataToOptions=function(){var b=this._element.data(),c={};return b.dateOptions&&b.dateOptions instanceof Object&&(c=a.extend(!0,c,b.dateOptions)),a.each(this._options,function(a){var d="date"+a.charAt(0).toUpperCase()+a.slice(1);void 0!==b[d]?c[a]=b[d]:delete c[a]}),c},i.prototype._notifyEvent=function(a){a.type===i.Event.CHANGE&&a.date&&a.date.isSame(a.oldDate)||!a.date&&!a.oldDate||this._element.trigger(a)},i.prototype._viewUpdate=function(a){"y"===a&&(a="YYYY"),this._notifyEvent({type:i.Event.UPDATE,change:a,viewDate:this._viewDate.clone()})},i.prototype._showMode=function(a){this.widget&&(a&&(this.currentViewMode=Math.max(s,Math.min(3,this.currentViewMode+a))),this.widget.find(".datepicker > div").hide().filter(".datepicker-"+n[this.currentViewMode].CLASS_NAME).show())},i.prototype._isInDisabledDates=function(a){return this._options.disabledDates[a.format("YYYY-MM-DD")]===!0},i.prototype._isInEnabledDates=function(a){return this._options.enabledDates[a.format("YYYY-MM-DD")]===!0},i.prototype._isInDisabledHours=function(a){return this._options.disabledHours[a.format("H")]===!0},i.prototype._isInEnabledHours=function(a){return this._options.enabledHours[a.format("H")]===!0},i.prototype._isValid=function(b,c){if(!b.isValid())return!1;if(this._options.disabledDates&&"d"===c&&this._isInDisabledDates(b))return!1;if(this._options.enabledDates&&"d"===c&&!this._isInEnabledDates(b))return!1;if(this._options.minDate&&b.isBefore(this._options.minDate,c))return!1;if(this._options.maxDate&&b.isAfter(this._options.maxDate,c))return!1;if(this._options.daysOfWeekDisabled&&"d"===c&&this._options.daysOfWeekDisabled.indexOf(b.day())!==-1)return!1;if(this._options.disabledHours&&("h"===c||"m"===c||"s"===c)&&this._isInDisabledHours(b))return!1;if(this._options.enabledHours&&("h"===c||"m"===c||"s"===c)&&!this._isInEnabledHours(b))return!1;if(this._options.disabledTimeIntervals&&("h"===c||"m"===c||"s"===c)){var d=!1;if(a.each(this._options.disabledTimeIntervals,function(){if(b.isBetween(this[0],this[1]))return d=!0,!1}),d)return!1}return!0},i.prototype._parseInputDate=function(a){return void 0===this._options.parseInputDate?b.isMoment(a)||(a=this.getMoment(a)):a=this._options.parseInputDate(a),a},i.prototype._keydown=function(a){var b=null,c=void 0,d=void 0,e=void 0,f=void 0,g=[],h={},i=a.which,j="p";q[i]=j;for(c in q)q.hasOwnProperty(c)&&q[c]===j&&(g.push(c),parseInt(c,10)!==i&&(h[c]=!0));for(c in this._options.keyBinds)if(this._options.keyBinds.hasOwnProperty(c)&&"function"==typeof this._options.keyBinds[c]&&(e=c.split(" "),e.length===g.length&&o[i]===e[e.length-1])){for(f=!0,d=e.length-2;d>=0;d--)if(!(o[e[d]]in h)){f=!1;break}if(f){b=this._options.keyBinds[c];break}}b&&b.call(this.widget)&&(a.stopPropagation(),a.preventDefault())},i.prototype._keyup=function(a){q[a.which]="r",r[a.which]&&(r[a.which]=!1,a.stopPropagation(),a.preventDefault())},i.prototype._indexGivenDates=function(b){var c={},d=this;return a.each(b,function(){var a=d._parseInputDate(this);a.isValid()&&(c[a.format("YYYY-MM-DD")]=!0)}),!!Object.keys(c).length&&c},i.prototype._indexGivenHours=function(b){var c={};return a.each(b,function(){c[this]=!0}),!!Object.keys(c).length&&c},i.prototype._initFormatting=function(){var a=this._options.format||"L LT",b=this;this.actualFormat=a.replace(/(\[[^\[]*])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){return b._dates[0].localeData().longDateFormat(a)||a}),this.parseFormats=this._options.extraFormats?this._options.extraFormats.slice():[],this.parseFormats.indexOf(a)<0&&this.parseFormats.indexOf(this.actualFormat)<0&&this.parseFormats.push(this.actualFormat),this.use24Hours=this.actualFormat.toLowerCase().indexOf("a")<1&&this.actualFormat.replace(/\[.*?]/g,"").indexOf("h")<1,this._isEnabled("y")&&(s=2),this._isEnabled("M")&&(s=1),this._isEnabled("d")&&(s=0),this.currentViewMode=Math.max(s,this.currentViewMode),this.unset||this._setValue(this._dates[0],0)},i.prototype._getLastPickedDate=function(){return this._dates[this._getLastPickedDateIndex()]},i.prototype._getLastPickedDateIndex=function(){return this._dates.length-1},i.prototype.getMoment=function(a){var c=void 0;return c=void 0===a||null===a?b():this._hasTimeZone()?b.tz(a,this.parseFormats,this._options.useStrict,this._options.timeZone):b(a,this.parseFormats,this._options.useStrict),this._hasTimeZone()&&c.tz(this._options.timeZone),c},i.prototype.toggle=function(){return this.widget?this.hide():this.show()},i.prototype.ignoreReadonly=function(a){if(0===arguments.length)return this._options.ignoreReadonly;if("boolean"!=typeof a)throw new TypeError("ignoreReadonly () expects a boolean parameter");this._options.ignoreReadonly=a},i.prototype.options=function(b){if(0===arguments.length)return a.extend(!0,{},this._options);if(!(b instanceof Object))throw new TypeError("options() this.options parameter should be an object");a.extend(!0,this._options,b);var c=this;a.each(this._options,function(a,b){void 0!==c[a]&&c[a](b)})},i.prototype.date=function(a,c){if(c=c||0,0===arguments.length)return this.unset?null:this._options.allowMultidate?this._dates.join(this._options.multidateSeparator):this._dates[c].clone();if(!(null===a||"string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");this._setValue(null===a?null:this._parseInputDate(a),c)},i.prototype.format=function(a){if(0===arguments.length)return this._options.format;if("string"!=typeof a&&("boolean"!=typeof a||a!==!1))throw new TypeError("format() expects a string or boolean:false parameter "+a);this._options.format=a,this.actualFormat&&this._initFormatting()},i.prototype.timeZone=function(a){if(0===arguments.length)return this._options.timeZone;if("string"!=typeof a)throw new TypeError("newZone() expects a string parameter");this._options.timeZone=a},i.prototype.dayViewHeaderFormat=function(a){if(0===arguments.length)return this._options.dayViewHeaderFormat;if("string"!=typeof a)throw new TypeError("dayViewHeaderFormat() expects a string parameter");this._options.dayViewHeaderFormat=a},i.prototype.extraFormats=function(a){if(0===arguments.length)return this._options.extraFormats;if(a!==!1&&!(a instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");this._options.extraFormats=a,this.parseFormats&&this._initFormatting()},i.prototype.disabledDates=function(b){if(0===arguments.length)return this._options.disabledDates?a.extend({},this._options.disabledDates):this._options.disabledDates;if(!b)return this._options.disabledDates=!1,this._update(),!0;if(!(b instanceof Array))throw new TypeError("disabledDates() expects an array parameter");this._options.disabledDates=this._indexGivenDates(b),this._options.enabledDates=!1,this._update()},i.prototype.enabledDates=function(b){if(0===arguments.length)return this._options.enabledDates?a.extend({},this._options.enabledDates):this._options.enabledDates;if(!b)return this._options.enabledDates=!1,this._update(),!0;if(!(b instanceof Array))throw new TypeError("enabledDates() expects an array parameter");this._options.enabledDates=this._indexGivenDates(b),this._options.disabledDates=!1,this._update()},i.prototype.daysOfWeekDisabled=function(a){if(0===arguments.length)return this._options.daysOfWeekDisabled.splice(0);if("boolean"==typeof a&&!a)return this._options.daysOfWeekDisabled=!1,this._update(),!0;if(!(a instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(this._options.daysOfWeekDisabled=a.reduce(function(a,b){return b=parseInt(b,10),b>6||b<0||isNaN(b)?a:(a.indexOf(b)===-1&&a.push(b),a)},[]).sort(),this._options.useCurrent&&!this._options.keepInvalid)for(var b=0;b<this._dates.length;b++){for(var c=0;!this._isValid(this._dates[b],"d");){if(this._dates[b].add(1,"d"),31===c)throw"Tried 31 times to find a valid date";c++}this._setValue(this._dates[b],b)}this._update()},i.prototype.maxDate=function(a){if(0===arguments.length)return this._options.maxDate?this._options.maxDate.clone():this._options.maxDate;if("boolean"==typeof a&&a===!1)return this._options.maxDate=!1,this._update(),!0;"string"==typeof a&&("now"!==a&&"moment"!==a||(a=this.getMoment()));var b=this._parseInputDate(a);if(!b.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+a);if(this._options.minDate&&b.isBefore(this._options.minDate))throw new TypeError("maxDate() date parameter is before this.options.minDate: "+b.format(this.actualFormat));this._options.maxDate=b;for(var c=0;c<this._dates.length;c++)this._options.useCurrent&&!this._options.keepInvalid&&this._dates[c].isAfter(a)&&this._setValue(this._options.maxDate,c);this._viewDate.isAfter(b)&&(this._viewDate=b.clone().subtract(this._options.stepping,"m")),this._update()},i.prototype.minDate=function(a){if(0===arguments.length)return this._options.minDate?this._options.minDate.clone():this._options.minDate;if("boolean"==typeof a&&a===!1)return this._options.minDate=!1,this._update(),!0;"string"==typeof a&&("now"!==a&&"moment"!==a||(a=this.getMoment()));var b=this._parseInputDate(a);if(!b.isValid())throw new TypeError("minDate() Could not parse date parameter: "+a);if(this._options.maxDate&&b.isAfter(this._options.maxDate))throw new TypeError("minDate() date parameter is after this.options.maxDate: "+b.format(this.actualFormat));this._options.minDate=b;for(var c=0;c<this._dates.length;c++)this._options.useCurrent&&!this._options.keepInvalid&&this._dates[c].isBefore(a)&&this._setValue(this._options.minDate,c);this._viewDate.isBefore(b)&&(this._viewDate=b.clone().add(this._options.stepping,"m")),this._update()},i.prototype.defaultDate=function(a){if(0===arguments.length)return this._options.defaultDate?this._options.defaultDate.clone():this._options.defaultDate;if(!a)return this._options.defaultDate=!1,!0;"string"==typeof a&&(a="now"===a||"moment"===a?this.getMoment():this.getMoment(a));var b=this._parseInputDate(a);if(!b.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+a);if(!this._isValid(b))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");this._options.defaultDate=b,(this._options.defaultDate&&this._options.inline||void 0!==this.input&&""===this.input.val().trim())&&this._setValue(this._options.defaultDate,0)},i.prototype.locale=function(a){if(0===arguments.length)return this._options.locale;if(!b.localeData(a))throw new TypeError("locale() locale "+a+" is not loaded from moment locales!");for(var c=0;c<this._dates.length;c++)this._dates[c].locale(this._options.locale);this._viewDate.locale(this._options.locale),this.actualFormat&&this._initFormatting(),this.widget&&(this.hide(),this.show())},i.prototype.stepping=function(a){return 0===arguments.length?this._options.stepping:(a=parseInt(a,10),(isNaN(a)||a<1)&&(a=1),void(this._options.stepping=a))},i.prototype.useCurrent=function(a){var b=["year","month","day","hour","minute"];if(0===arguments.length)return this._options.useCurrent;if("boolean"!=typeof a&&"string"!=typeof a)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof a&&b.indexOf(a.toLowerCase())===-1)throw new TypeError("useCurrent() expects a string parameter of "+b.join(", "));this._options.useCurrent=a},i.prototype.collapse=function(a){if(0===arguments.length)return this._options.collapse;if("boolean"!=typeof a)throw new TypeError("collapse() expects a boolean parameter");return this._options.collapse===a||(this._options.collapse=a,void(this.widget&&(this.hide(),this.show())))},i.prototype.icons=function(b){if(0===arguments.length)return a.extend({},this._options.icons);if(!(b instanceof Object))throw new TypeError("icons() expects parameter to be an Object");a.extend(this._options.icons,b),this.widget&&(this.hide(),this.show())},i.prototype.tooltips=function(b){if(0===arguments.length)return a.extend({},this._options.tooltips);if(!(b instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");a.extend(this._options.tooltips,b),this.widget&&(this.hide(),this.show())},i.prototype.useStrict=function(a){if(0===arguments.length)return this._options.useStrict;if("boolean"!=typeof a)throw new TypeError("useStrict() expects a boolean parameter");this._options.useStrict=a},i.prototype.sideBySide=function(a){if(0===arguments.length)return this._options.sideBySide;if("boolean"!=typeof a)throw new TypeError("sideBySide() expects a boolean parameter");this._options.sideBySide=a,this.widget&&(this.hide(),this.show())},i.prototype.viewMode=function(a){if(0===arguments.length)return this._options.viewMode;if("string"!=typeof a)throw new TypeError("viewMode() expects a string parameter");if(i.ViewModes.indexOf(a)===-1)throw new TypeError("viewMode() parameter must be one of ("+i.ViewModes.join(", ")+") value");this._options.viewMode=a,this.currentViewMode=Math.max(i.ViewModes.indexOf(a)-1,i.MinViewModeNumber),this._showMode()},i.prototype.calendarWeeks=function(a){if(0===arguments.length)return this._options.calendarWeeks;if("boolean"!=typeof a)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");this._options.calendarWeeks=a,this._update()},i.prototype.buttons=function(b){if(0===arguments.length)return a.extend({},this._options.buttons);if(!(b instanceof Object))throw new TypeError("buttons() expects parameter to be an Object");if(a.extend(this._options.buttons,b),"boolean"!=typeof this._options.buttons.showToday)throw new TypeError("buttons.showToday expects a boolean parameter");if("boolean"!=typeof this._options.buttons.showClear)throw new TypeError("buttons.showClear expects a boolean parameter");if("boolean"!=typeof this._options.buttons.showClose)throw new TypeError("buttons.showClose expects a boolean parameter");this.widget&&(this.hide(),this.show())},i.prototype.keepOpen=function(a){if(0===arguments.length)return this._options.keepOpen;if("boolean"!=typeof a)throw new TypeError("keepOpen() expects a boolean parameter");this._options.keepOpen=a},i.prototype.focusOnShow=function(a){if(0===arguments.length)return this._options.focusOnShow;if("boolean"!=typeof a)throw new TypeError("focusOnShow() expects a boolean parameter");this._options.focusOnShow=a},i.prototype.inline=function(a){if(0===arguments.length)return this._options.inline;if("boolean"!=typeof a)throw new TypeError("inline() expects a boolean parameter");this._options.inline=a},i.prototype.clear=function(){this._setValue(null)},i.prototype.keyBinds=function(a){return 0===arguments.length?this._options.keyBinds:void(this._options.keyBinds=a)},i.prototype.debug=function(a){if("boolean"!=typeof a)throw new TypeError("debug() expects a boolean parameter");this._options.debug=a},i.prototype.allowInputToggle=function(a){if(0===arguments.length)return this._options.allowInputToggle;if("boolean"!=typeof a)throw new TypeError("allowInputToggle() expects a boolean parameter");this._options.allowInputToggle=a},i.prototype.keepInvalid=function(a){if(0===arguments.length)return this._options.keepInvalid;if("boolean"!=typeof a)throw new TypeError("keepInvalid() expects a boolean parameter");this._options.keepInvalid=a},i.prototype.datepickerInput=function(a){if(0===arguments.length)return this._options.datepickerInput;if("string"!=typeof a)throw new TypeError("datepickerInput() expects a string parameter");this._options.datepickerInput=a},i.prototype.parseInputDate=function(a){if(0===arguments.length)return this._options.parseInputDate;if("function"!=typeof a)throw new TypeError("parseInputDate() should be as function");this._options.parseInputDate=a},i.prototype.disabledTimeIntervals=function(b){if(0===arguments.length)return this._options.disabledTimeIntervals?a.extend({},this._options.disabledTimeIntervals):this._options.disabledTimeIntervals;if(!b)return this._options.disabledTimeIntervals=!1,this._update(),!0;if(!(b instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");this._options.disabledTimeIntervals=b,this._update()},i.prototype.disabledHours=function(b){if(0===arguments.length)return this._options.disabledHours?a.extend({},this._options.disabledHours):this._options.disabledHours;if(!b)return this._options.disabledHours=!1,this._update(),!0;if(!(b instanceof Array))throw new TypeError("disabledHours() expects an array parameter");if(this._options.disabledHours=this._indexGivenHours(b),this._options.enabledHours=!1,this._options.useCurrent&&!this._options.keepInvalid)for(var c=0;c<this._dates.length;c++){for(var d=0;!this._isValid(this._dates[c],"h");){if(this._dates[c].add(1,"h"),24===d)throw"Tried 24 times to find a valid date";d++}this._setValue(this._dates[c],c)}this._update()},i.prototype.enabledHours=function(b){if(0===arguments.length)return this._options.enabledHours?a.extend({},this._options.enabledHours):this._options.enabledHours;if(!b)return this._options.enabledHours=!1,this._update(),!0;if(!(b instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(this._options.enabledHours=this._indexGivenHours(b),this._options.disabledHours=!1,this._options.useCurrent&&!this._options.keepInvalid)for(var c=0;c<this._dates.length;c++){for(var d=0;!this._isValid(this._dates[c],"h");){if(this._dates[c].add(1,"h"),24===d)throw"Tried 24 times to find a valid date";d++}this._setValue(this._dates[c],c)}this._update()},i.prototype.viewDate=function(a){if(0===arguments.length)return this._viewDate.clone();if(!a)return this._viewDate=(this._dates[0]||this.getMoment()).clone(),!0;if(!("string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");this._viewDate=this._parseInputDate(a),this._viewUpdate()},i.prototype.allowMultidate=function(a){if("boolean"!=typeof a)throw new TypeError("allowMultidate() expects a boolean parameter");this._options.allowMultidate=a},i.prototype.multidateSeparator=function(a){if(0===arguments.length)return this._options.multidateSeparator;if("string"!=typeof a||a.length>1)throw new TypeError("multidateSeparator expects a single character string parameter");this._options.multidateSeparator=a},e(i,null,[{key:"NAME",get:function(){return d}},{key:"VERSION",get:function(){return f}},{key:"DATA_KEY",get:function(){return g}},{key:"EVENT_KEY",get:function(){return h}},{key:"DATA_API_KEY",get:function(){return j}},{key:"DatePickerModes",get:function(){return n}},{key:"ViewModes",get:function(){return p}},{key:"MinViewModeNumber",get:function(){return s}},{key:"Event",get:function(){return m}},{key:"Selector",get:function(){return k}},{key:"Default",get:function(){return t},set:function(a){t=a}},{key:"ClassName",get:function(){return l}}]),i}();return u}(jQuery,moment);(function(e){var g=e.fn[f.NAME],h=["top","bottom","auto"],i=["left","right","auto"],j=["default","top","bottom"],k=function(a){var b=a.data("target"),c=void 0;return b||(b=a.attr("href")||"",b=/^#[a-z]/i.test(b)?b:null),c=e(b),0===c.length?c:(c.data(f.DATA_KEY)||e.extend({},c.data(),e(this).data()),c)},l=function(g){function k(b,d){c(this,k);var e=a(this,g.call(this,b,d));return e._init(),e}return b(k,g),k.prototype._init=function(){if(this._element.hasClass("input-group")){var a=this._element.find(".datepickerbutton");0===a.length?this.component=this._element.find(".input-group-append"):this.component=a}},k.prototype._getDatePickerTemplate=function(){var a=e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action","previous").append(e("<span>").addClass(this._options.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",""+(this._options.calendarWeeks?"6":"5"))).append(e("<th>").addClass("next").attr("data-action","next").append(e("<span>").addClass(this._options.icons.next)))),b=e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan",""+(this._options.calendarWeeks?"8":"7"))));return[e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table table-sm").append(a).append(e("<tbody>"))),e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(a.clone()).append(b.clone())),e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(a.clone()).append(b.clone())),e("<div>").addClass("datepicker-decades").append(e("<table>").addClass("table-condensed").append(a.clone()).append(b.clone()))]},k.prototype._getTimePickerMainTemplate=function(){var a=e("<tr>"),b=e("<tr>"),c=e("<tr>");return this._isEnabled("h")&&(a.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(e("<span>").addClass(this._options.icons.up)))),b.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:this._options.tooltips.pickHour}).attr("data-action","showHours"))),c.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(e("<span>").addClass(this._options.icons.down))))),this._isEnabled("m")&&(this._isEnabled("h")&&(a.append(e("<td>").addClass("separator")),b.append(e("<td>").addClass("separator").html(":")),c.append(e("<td>").addClass("separator"))),a.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(e("<span>").addClass(this._options.icons.up)))),b.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:this._options.tooltips.pickMinute}).attr("data-action","showMinutes"))),c.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(e("<span>").addClass(this._options.icons.down))))),this._isEnabled("s")&&(this._isEnabled("m")&&(a.append(e("<td>").addClass("separator")),
b.append(e("<td>").addClass("separator").html(":")),c.append(e("<td>").addClass("separator"))),a.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(e("<span>").addClass(this._options.icons.up)))),b.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:this._options.tooltips.pickSecond}).attr("data-action","showSeconds"))),c.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(e("<span>").addClass(this._options.icons.down))))),this.use24Hours||(a.append(e("<td>").addClass("separator")),b.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:this._options.tooltips.togglePeriod}))),c.append(e("<td>").addClass("separator"))),e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([a,b,c]))},k.prototype._getTimePickerTemplate=function(){var a=e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")),b=e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")),c=e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")),d=[this._getTimePickerMainTemplate()];return this._isEnabled("h")&&d.push(a),this._isEnabled("m")&&d.push(b),this._isEnabled("s")&&d.push(c),d},k.prototype._getToolbar=function(){var a=[];return this._options.buttons.showToday&&a.push(e("<td>").append(e("<a>").attr({"data-action":"today",title:this._options.tooltips.today}).append(e("<span>").addClass(this._options.icons.today)))),!this._options.sideBySide&&this._hasDate()&&this._hasTime()&&a.push(e("<td>").append(e("<a>").attr({"data-action":"togglePicker",title:this._options.tooltips.selectTime}).append(e("<span>").addClass(this._options.icons.time)))),this._options.buttons.showClear&&a.push(e("<td>").append(e("<a>").attr({"data-action":"clear",title:this._options.tooltips.clear}).append(e("<span>").addClass(this._options.icons.clear)))),this._options.buttons.showClose&&a.push(e("<td>").append(e("<a>").attr({"data-action":"close",title:this._options.tooltips.close}).append(e("<span>").addClass(this._options.icons.close)))),0===a.length?"":e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(a)))},k.prototype._getTemplate=function(){var a=e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),b=e("<div>").addClass("datepicker").append(this._getDatePickerTemplate()),c=e("<div>").addClass("timepicker").append(this._getTimePickerTemplate()),d=e("<ul>").addClass("list-unstyled"),f=e("<li>").addClass("picker-switch"+(this._options.collapse?" accordion-toggle":"")).append(this._getToolbar());return this._options.inline&&a.removeClass("dropdown-menu"),this.use24Hours&&a.addClass("usetwentyfour"),this._isEnabled("s")&&!this.use24Hours&&a.addClass("wider"),this._options.sideBySide&&this._hasDate()&&this._hasTime()?(a.addClass("timepicker-sbs"),"top"===this._options.toolbarPlacement&&a.append(f),a.append(e("<div>").addClass("row").append(b.addClass("col-md-6")).append(c.addClass("col-md-6"))),"bottom"!==this._options.toolbarPlacement&&"default"!==this._options.toolbarPlacement||a.append(f),a):("top"===this._options.toolbarPlacement&&d.append(f),this._hasDate()&&d.append(e("<li>").addClass(this._options.collapse&&this._hasTime()?"collapse":"").addClass(this._options.collapse&&this._hasTime()&&"time"===this._options.viewMode?"":"show").append(b)),"default"===this._options.toolbarPlacement&&d.append(f),this._hasTime()&&d.append(e("<li>").addClass(this._options.collapse&&this._hasDate()?"collapse":"").addClass(this._options.collapse&&this._hasDate()&&"time"===this._options.viewMode?"show":"").append(c)),"bottom"===this._options.toolbarPlacement&&d.append(f),a.append(d))},k.prototype._place=function(a){var b=a&&a.data&&a.data.picker||this,c=b._options.widgetPositioning.vertical,d=b._options.widgetPositioning.horizontal,f=void 0,g=(b.component||b._element).position(),h=(b.component||b._element).offset();if(b._options.widgetParent)f=b._options.widgetParent.append(b.widget);else if(b._element.is("input"))f=b._element.after(b.widget).parent();else{if(b._options.inline)return void(f=b._element.append(b.widget));f=b._element,b._element.children().first().after(b.widget)}if("auto"===c&&(c=h.top+1.5*b.widget.height()>=e(window).height()+e(window).scrollTop()&&b.widget.height()+b._element.outerHeight()<h.top?"top":"bottom"),"auto"===d&&(d=f.width()<h.left+b.widget.outerWidth()/2&&h.left+b.widget.outerWidth()>e(window).width()?"right":"left"),"top"===c?b.widget.addClass("top").removeClass("bottom"):b.widget.addClass("bottom").removeClass("top"),"right"===d?b.widget.addClass("float-right"):b.widget.removeClass("float-right"),"relative"!==f.css("position")&&(f=f.parents().filter(function(){return"relative"===e(this).css("position")}).first()),0===f.length)throw new Error("datetimepicker component should be placed within a relative positioned container");b.widget.css({top:"top"===c?"auto":g.top+b._element.outerHeight()+"px",bottom:"top"===c?f.outerHeight()-(f===b._element?0:g.top)+"px":"auto",left:"left"===d?(f===b._element?0:g.left)+"px":"auto",right:"left"===d?"auto":f.outerWidth()-b._element.outerWidth()-(f===b._element?0:g.left)+"px"})},k.prototype._fillDow=function(){var a=e("<tr>"),b=this._viewDate.clone().startOf("w").startOf("d");for(this._options.calendarWeeks===!0&&a.append(e("<th>").addClass("cw").text("#"));b.isBefore(this._viewDate.clone().endOf("w"));)a.append(e("<th>").addClass("dow").text(b.format("dd"))),b.add(1,"d");this.widget.find(".datepicker-days thead").append(a)},k.prototype._fillMonths=function(){for(var a=[],b=this._viewDate.clone().startOf("y").startOf("d");b.isSame(this._viewDate,"y");)a.push(e("<span>").attr("data-action","selectMonth").addClass("month").text(b.format("MMM"))),b.add(1,"M");this.widget.find(".datepicker-months td").empty().append(a)},k.prototype._updateMonths=function(){var a=this.widget.find(".datepicker-months"),b=a.find("th"),c=a.find("tbody").find("span"),d=this;b.eq(0).find("span").attr("title",this._options.tooltips.prevYear),b.eq(1).attr("title",this._options.tooltips.selectYear),b.eq(2).find("span").attr("title",this._options.tooltips.nextYear),a.find(".disabled").removeClass("disabled"),this._isValid(this._viewDate.clone().subtract(1,"y"),"y")||b.eq(0).addClass("disabled"),b.eq(1).text(this._viewDate.year()),this._isValid(this._viewDate.clone().add(1,"y"),"y")||b.eq(2).addClass("disabled"),c.removeClass("active"),this._getLastPickedDate().isSame(this._viewDate,"y")&&!this.unset&&c.eq(this._getLastPickedDate().month()).addClass("active"),c.each(function(a){d._isValid(d._viewDate.clone().month(a),"M")||e(this).addClass("disabled")})},k.prototype._getStartEndYear=function(a,b){var c=a/10,d=Math.floor(b/a)*a,e=d+9*c,f=Math.floor(b/c)*c;return[d,e,f]},k.prototype._updateYears=function(){var a=this.widget.find(".datepicker-years"),b=a.find("th"),c=this._getStartEndYear(10,this._viewDate.year()),d=this._viewDate.clone().year(c[0]),e=this._viewDate.clone().year(c[1]),f="";for(b.eq(0).find("span").attr("title",this._options.tooltips.prevDecade),b.eq(1).attr("title",this._options.tooltips.selectDecade),b.eq(2).find("span").attr("title",this._options.tooltips.nextDecade),a.find(".disabled").removeClass("disabled"),this._options.minDate&&this._options.minDate.isAfter(d,"y")&&b.eq(0).addClass("disabled"),b.eq(1).text(d.year()+"-"+e.year()),this._options.maxDate&&this._options.maxDate.isBefore(e,"y")&&b.eq(2).addClass("disabled"),f+='<span data-action="selectYear" class="year old">'+(d.year()-1)+"</span>";!d.isAfter(e,"y");)f+='<span data-action="selectYear" class="year'+(d.isSame(this._getLastPickedDate(),"y")&&!this.unset?" active":"")+(this._isValid(d,"y")?"":" disabled")+'">'+d.year()+"</span>",d.add(1,"y");f+='<span data-action="selectYear" class="year old">'+d.year()+"</span>",a.find("td").html(f)},k.prototype._updateDecades=function(){var a=this.widget.find(".datepicker-decades"),b=a.find("th"),c=this._getStartEndYear(100,this._viewDate.year()),d=this._viewDate.clone().year(c[0]),e=this._viewDate.clone().year(c[1]),f=!1,g=!1,h=void 0,i="";for(b.eq(0).find("span").attr("title",this._options.tooltips.prevCentury),b.eq(2).find("span").attr("title",this._options.tooltips.nextCentury),a.find(".disabled").removeClass("disabled"),(0===d.year()||this._options.minDate&&this._options.minDate.isAfter(d,"y"))&&b.eq(0).addClass("disabled"),b.eq(1).text(d.year()+"-"+e.year()),this._options.maxDate&&this._options.maxDate.isBefore(e,"y")&&b.eq(2).addClass("disabled"),i+=d.year()-10<0?"<span>&nbsp;</span>":'<span data-action="selectDecade" class="decade old" data-selection="'+(d.year()+6)+'">'+(d.year()-10)+"</span>";!d.isAfter(e,"y");)h=d.year()+11,f=this._options.minDate&&this._options.minDate.isAfter(d,"y")&&this._options.minDate.year()<=h,g=this._options.maxDate&&this._options.maxDate.isAfter(d,"y")&&this._options.maxDate.year()<=h,i+='<span data-action="selectDecade" class="decade'+(this._getLastPickedDate().isAfter(d)&&this._getLastPickedDate().year()<=h?" active":"")+(this._isValid(d,"y")||f||g?"":" disabled")+'" data-selection="'+(d.year()+6)+'">'+d.year()+"</span>",d.add(10,"y");i+='<span data-action="selectDecade" class="decade old" data-selection="'+(d.year()+6)+'">'+d.year()+"</span>",a.find("td").html(i)},k.prototype._fillDate=function(){var a=this.widget.find(".datepicker-days"),b=a.find("th"),c=[],d=void 0,f=void 0,g=void 0,h=void 0;if(this._hasDate()){for(b.eq(0).find("span").attr("title",this._options.tooltips.prevMonth),b.eq(1).attr("title",this._options.tooltips.selectMonth),b.eq(2).find("span").attr("title",this._options.tooltips.nextMonth),a.find(".disabled").removeClass("disabled"),b.eq(1).text(this._viewDate.format(this._options.dayViewHeaderFormat)),this._isValid(this._viewDate.clone().subtract(1,"M"),"M")||b.eq(0).addClass("disabled"),this._isValid(this._viewDate.clone().add(1,"M"),"M")||b.eq(2).addClass("disabled"),d=this._viewDate.clone().startOf("M").startOf("w").startOf("d"),h=0;h<42;h++){if(0===d.weekday()&&(f=e("<tr>"),this._options.calendarWeeks&&f.append('<td class="cw">'+d.week()+"</td>"),c.push(f)),g="",d.isBefore(this._viewDate,"M")&&(g+=" old"),d.isAfter(this._viewDate,"M")&&(g+=" new"),this._options.allowMultidate){var i=this._datesFormatted.indexOf(d.format("YYYY-MM-DD"));i!==-1&&d.isSame(this._datesFormatted[i],"d")&&!this.unset&&(g+=" active")}else d.isSame(this._getLastPickedDate(),"d")&&!this.unset&&(g+=" active");this._isValid(d,"d")||(g+=" disabled"),d.isSame(this.getMoment(),"d")&&(g+=" today"),0!==d.day()&&6!==d.day()||(g+=" weekend"),f.append('<td data-action="selectDay" data-day="'+d.format("L")+'" class="day'+g+'">'+d.date()+"</td>"),d.add(1,"d")}a.find("tbody").empty().append(c),this._updateMonths(),this._updateYears(),this._updateDecades()}},k.prototype._fillHours=function(){var a=this.widget.find(".timepicker-hours table"),b=this._viewDate.clone().startOf("d"),c=[],d=e("<tr>");for(this._viewDate.hour()>11&&!this.use24Hours&&b.hour(12);b.isSame(this._viewDate,"d")&&(this.use24Hours||this._viewDate.hour()<12&&b.hour()<12||this._viewDate.hour()>11);)b.hour()%4===0&&(d=e("<tr>"),c.push(d)),d.append('<td data-action="selectHour" class="hour'+(this._isValid(b,"h")?"":" disabled")+'">'+b.format(this.use24Hours?"HH":"hh")+"</td>"),b.add(1,"h");a.empty().append(c)},k.prototype._fillMinutes=function(){for(var a=this.widget.find(".timepicker-minutes table"),b=this._viewDate.clone().startOf("h"),c=[],d=1===this._options.stepping?5:this._options.stepping,f=e("<tr>");this._viewDate.isSame(b,"h");)b.minute()%(4*d)===0&&(f=e("<tr>"),c.push(f)),f.append('<td data-action="selectMinute" class="minute'+(this._isValid(b,"m")?"":" disabled")+'">'+b.format("mm")+"</td>"),b.add(d,"m");a.empty().append(c)},k.prototype._fillSeconds=function(){for(var a=this.widget.find(".timepicker-seconds table"),b=this._viewDate.clone().startOf("m"),c=[],d=e("<tr>");this._viewDate.isSame(b,"m");)b.second()%20===0&&(d=e("<tr>"),c.push(d)),d.append('<td data-action="selectSecond" class="second'+(this._isValid(b,"s")?"":" disabled")+'">'+b.format("ss")+"</td>"),b.add(5,"s");a.empty().append(c)},k.prototype._fillTime=function(){var a=void 0,b=void 0,c=this.widget.find(".timepicker span[data-time-component]");this.use24Hours||(a=this.widget.find(".timepicker [data-action=togglePeriod]"),b=this._getLastPickedDate().clone().add(this._getLastPickedDate().hours()>=12?-12:12,"h"),a.text(this._getLastPickedDate().format("A")),this._isValid(b,"h")?a.removeClass("disabled"):a.addClass("disabled")),c.filter("[data-time-component=hours]").text(this._getLastPickedDate().format(""+(this.use24Hours?"HH":"hh"))),c.filter("[data-time-component=minutes]").text(this._getLastPickedDate().format("mm")),c.filter("[data-time-component=seconds]").text(this._getLastPickedDate().format("ss")),this._fillHours(),this._fillMinutes(),this._fillSeconds()},k.prototype._doAction=function(a,b){var c=this._getLastPickedDate();if(e(a.currentTarget).is(".disabled"))return!1;switch(b=b||e(a.currentTarget).data("action")){case"next":var d=f.DatePickerModes[this.currentViewMode].NAV_FUNCTION;this._viewDate.add(f.DatePickerModes[this.currentViewMode].NAV_STEP,d),this._fillDate(),this._viewUpdate(d);break;case"previous":var g=f.DatePickerModes[this.currentViewMode].NAV_FUNCTION;this._viewDate.subtract(f.DatePickerModes[this.currentViewMode].NAV_STEP,g),this._fillDate(),this._viewUpdate(g);break;case"pickerSwitch":this._showMode(1);break;case"selectMonth":var h=e(a.target).closest("tbody").find("span").index(e(a.target));this._viewDate.month(h),this.currentViewMode===f.MinViewModeNumber?(this._setValue(c.clone().year(this._viewDate.year()).month(this._viewDate.month()),this._getLastPickedDateIndex()),this._options.inline||this.hide()):(this._showMode(-1),this._fillDate()),this._viewUpdate("M");break;case"selectYear":var i=parseInt(e(a.target).text(),10)||0;this._viewDate.year(i),this.currentViewMode===f.MinViewModeNumber?(this._setValue(c.clone().year(this._viewDate.year()),this._getLastPickedDateIndex()),this._options.inline||this.hide()):(this._showMode(-1),this._fillDate()),this._viewUpdate("YYYY");break;case"selectDecade":var j=parseInt(e(a.target).data("selection"),10)||0;this._viewDate.year(j),this.currentViewMode===f.MinViewModeNumber?(this._setValue(c.clone().year(this._viewDate.year()),this._getLastPickedDateIndex()),this._options.inline||this.hide()):(this._showMode(-1),this._fillDate()),this._viewUpdate("YYYY");break;case"selectDay":var k=this._viewDate.clone();e(a.target).is(".old")&&k.subtract(1,"M"),e(a.target).is(".new")&&k.add(1,"M"),this._setValue(k.date(parseInt(e(a.target).text(),10)),this._getLastPickedDateIndex()),this._hasTime()||this._options.keepOpen||this._options.inline||this.hide();break;case"incrementHours":var l=c.clone().add(1,"h");this._isValid(l,"h")&&this._setValue(l,this._getLastPickedDateIndex());break;case"incrementMinutes":var m=c.clone().add(this._options.stepping,"m");this._isValid(m,"m")&&this._setValue(m,this._getLastPickedDateIndex());break;case"incrementSeconds":var n=c.clone().add(1,"s");this._isValid(n,"s")&&this._setValue(n,this._getLastPickedDateIndex());break;case"decrementHours":var o=c.clone().subtract(1,"h");this._isValid(o,"h")&&this._setValue(o,this._getLastPickedDateIndex());break;case"decrementMinutes":var p=c.clone().subtract(this._options.stepping,"m");this._isValid(p,"m")&&this._setValue(p,this._getLastPickedDateIndex());break;case"decrementSeconds":var q=c.clone().subtract(1,"s");this._isValid(q,"s")&&this._setValue(q,this._getLastPickedDateIndex());break;case"togglePeriod":this._setValue(c.clone().add(c.hours()>=12?-12:12,"h"),this._getLastPickedDateIndex());break;case"togglePicker":var r=e(a.target),s=r.closest("a"),t=r.closest("ul"),u=t.find(".show"),v=t.find(".collapse:not(.show)"),w=r.is("span")?r:r.find("span"),x=void 0;if(u&&u.length){if(x=u.data("collapse"),x&&x.transitioning)return!0;u.collapse?(u.collapse("hide"),v.collapse("show")):(u.removeClass("show"),v.addClass("show")),w.toggleClass(this._options.icons.time+" "+this._options.icons.date),w.hasClass(this._options.icons.date)?s.attr("title",this._options.tooltips.selectDate):s.attr("title",this._options.tooltips.selectTime)}break;case"showPicker":this.widget.find(".timepicker > div:not(.timepicker-picker)").hide(),this.widget.find(".timepicker .timepicker-picker").show();break;case"showHours":this.widget.find(".timepicker .timepicker-picker").hide(),this.widget.find(".timepicker .timepicker-hours").show();break;case"showMinutes":this.widget.find(".timepicker .timepicker-picker").hide(),this.widget.find(".timepicker .timepicker-minutes").show();break;case"showSeconds":this.widget.find(".timepicker .timepicker-picker").hide(),this.widget.find(".timepicker .timepicker-seconds").show();break;case"selectHour":var y=parseInt(e(a.target).text(),10);this.use24Hours||(c.hours()>=12?12!==y&&(y+=12):12===y&&(y=0)),this._setValue(c.clone().hours(y),this._getLastPickedDateIndex()),this._doAction(a,"showPicker");break;case"selectMinute":this._setValue(c.clone().minutes(parseInt(e(a.target).text(),10)),this._getLastPickedDateIndex()),this._doAction(a,"showPicker");break;case"selectSecond":this._setValue(c.clone().seconds(parseInt(e(a.target).text(),10)),this._getLastPickedDateIndex()),this._doAction(a,"showPicker");break;case"clear":this.clear();break;case"today":var z=this.getMoment();this._isValid(z,"d")&&this._setValue(z,this._getLastPickedDateIndex())}return!1},k.prototype.hide=function(){var a=!1;this.widget&&(this.widget.find(".collapse").each(function(){var b=e(this).data("collapse");return!b||!b.transitioning||(a=!0,!1)}),a||(this.component&&this.component.hasClass("btn")&&this.component.toggleClass("active"),this.widget.hide(),e(window).off("resize",this._place()),this.widget.off("click","[data-action]"),this.widget.off("mousedown",!1),this.widget.remove(),this.widget=!1,this._notifyEvent({type:f.Event.HIDE,date:this._getLastPickedDate().clone()}),void 0!==this.input&&this.input.blur(),this._viewDate=this._getLastPickedDate().clone()))},k.prototype.show=function(){var a=void 0,b={year:function(a){return a.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(a){return a.date(1).hours(0).seconds(0).minutes(0)},day:function(a){return a.hours(0).seconds(0).minutes(0)},hour:function(a){return a.seconds(0).minutes(0)},minute:function(a){return a.seconds(0)}};if(void 0!==this.input){if(this.input.prop("disabled")||!this._options.ignoreReadonly&&this.input.prop("readonly")||this.widget)return;void 0!==this.input.val()&&0!==this.input.val().trim().length?this._setValue(this._parseInputDate(this.input.val().trim()),0):this.unset&&this._options.useCurrent&&(a=this.getMoment(),"string"==typeof this._options.useCurrent&&(a=b[this._options.useCurrent](a)),this._setValue(a,0))}else this.unset&&this._options.useCurrent&&(a=this.getMoment(),"string"==typeof this._options.useCurrent&&(a=b[this._options.useCurrent](a)),this._setValue(a,0));this.widget=this._getTemplate(),this._fillDow(),this._fillMonths(),this.widget.find(".timepicker-hours").hide(),this.widget.find(".timepicker-minutes").hide(),this.widget.find(".timepicker-seconds").hide(),this._update(),this._showMode(),e(window).on("resize",{picker:this},this._place),this.widget.on("click","[data-action]",e.proxy(this._doAction,this)),this.widget.on("mousedown",!1),this.component&&this.component.hasClass("btn")&&this.component.toggleClass("active"),this._place(),this.widget.show(),void 0!==this.input&&this._options.focusOnShow&&!this.input.is(":focus")&&this.input.focus(),this._notifyEvent({type:f.Event.SHOW})},k.prototype.destroy=function(){this.hide(),this._element.removeData(f.DATA_KEY),this._element.removeData("date")},k.prototype.disable=function(){this.hide(),this.component&&this.component.hasClass("btn")&&this.component.addClass("disabled"),void 0!==this.input&&this.input.prop("disabled",!0)},k.prototype.enable=function(){this.component&&this.component.hasClass("btn")&&this.component.removeClass("disabled"),void 0!==this.input&&this.input.prop("disabled",!1)},k.prototype.toolbarPlacement=function(a){if(0===arguments.length)return this._options.toolbarPlacement;if("string"!=typeof a)throw new TypeError("toolbarPlacement() expects a string parameter");if(j.indexOf(a)===-1)throw new TypeError("toolbarPlacement() parameter must be one of ("+j.join(", ")+") value");this._options.toolbarPlacement=a,this.widget&&(this.hide(),this.show())},k.prototype.widgetPositioning=function(a){if(0===arguments.length)return e.extend({},this._options.widgetPositioning);if("[object Object]"!=={}.toString.call(a))throw new TypeError("widgetPositioning() expects an object variable");if(a.horizontal){if("string"!=typeof a.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(a.horizontal=a.horizontal.toLowerCase(),i.indexOf(a.horizontal)===-1)throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+i.join(", ")+")");this._options.widgetPositioning.horizontal=a.horizontal}if(a.vertical){if("string"!=typeof a.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(a.vertical=a.vertical.toLowerCase(),h.indexOf(a.vertical)===-1)throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+h.join(", ")+")");this._options.widgetPositioning.vertical=a.vertical}this._update()},k.prototype.widgetParent=function(a){if(0===arguments.length)return this._options.widgetParent;if("string"==typeof a&&(a=e(a)),null!==a&&"string"!=typeof a&&!(a instanceof e))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");this._options.widgetParent=a,this.widget&&(this.hide(),this.show())},k._jQueryHandleThis=function(a,b,c){var g=e(a).data(f.DATA_KEY);if("object"===("undefined"==typeof b?"undefined":d(b))&&e.extend({},f.Default,b),g||(g=new k(e(a),b),e(a).data(f.DATA_KEY,g)),"string"==typeof b){if(void 0===g[b])throw new Error('No method named "'+b+'"');return void 0===c?g[b]():g[b](c)}},k._jQueryInterface=function(a,b){return 1===this.length?k._jQueryHandleThis(this[0],a,b):this.each(function(){k._jQueryHandleThis(this,a,b)})},k}(f);return e(document).on(f.Event.CLICK_DATA_API,f.Selector.DATA_TOGGLE,function(){var a=k(e(this));0!==a.length&&l._jQueryInterface.call(a,"toggle")}).on(f.Event.CHANGE,"."+f.ClassName.INPUT,function(a){var b=k(e(this));0!==b.length&&l._jQueryInterface.call(b,"_change",a)}).on(f.Event.BLUR,"."+f.ClassName.INPUT,function(a){var b=k(e(this)),c=b.data(f.DATA_KEY);0!==b.length&&(c._options.debug||window.debug||l._jQueryInterface.call(b,"hide",a))}).on(f.Event.KEYDOWN,"."+f.ClassName.INPUT,function(a){var b=k(e(this));0!==b.length&&l._jQueryInterface.call(b,"_keydown",a)}).on(f.Event.KEYUP,"."+f.ClassName.INPUT,function(a){var b=k(e(this));0!==b.length&&l._jQueryInterface.call(b,"_keyup",a)}).on(f.Event.FOCUS,"."+f.ClassName.INPUT,function(a){var b=k(e(this)),c=b.data(f.DATA_KEY);0!==b.length&&c._options.allowInputToggle&&l._jQueryInterface.call(b,c,a)}),e.fn[f.NAME]=l._jQueryInterface,e.fn[f.NAME].Constructor=l,e.fn[f.NAME].noConflict=function(){return e.fn[f.NAME]=g,l._jQueryInterface},l})(jQuery)}();
/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("bloodhound", [ "jquery" ], function(a0) {
            return root["Bloodhound"] = factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        root["Bloodhound"] = factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var VERSION = "0.11.1";
    var tokenizers = function() {
        "use strict";
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
            }
        };
        function whitespace(str) {
            str = _.toStr(str);
            return str ? str.split(/\s+/) : [];
        }
        function nonword(str) {
            str = _.toStr(str);
            return str ? str.split(/\W+/) : [];
        }
        function getObjTokenizer(tokenizer) {
            return function setKey(keys) {
                keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(keys, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));
                    });
                    return tokens;
                };
            };
        }
    }();
    var LruCache = function() {
        "use strict";
        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
            this.reset();
            if (this.maxSize <= 0) {
                this.set = this.get = $.noop;
            }
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                    this.size--;
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            },
            reset: function reset() {
                this.size = 0;
                this.hash = {};
                this.list = new List();
            }
        });
        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        "use strict";
        var LOCAL_STORAGE;
        try {
            LOCAL_STORAGE = window.localStorage;
            LOCAL_STORAGE.setItem("~~~", "!");
            LOCAL_STORAGE.removeItem("~~~");
        } catch (err) {
            LOCAL_STORAGE = null;
        }
        function PersistentStorage(namespace, override) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
            this.ls = override || LOCAL_STORAGE;
            !this.ls && this._noop();
        }
        _.mixin(PersistentStorage.prototype, {
            _prefix: function(key) {
                return this.prefix + key;
            },
            _ttlKey: function(key) {
                return this._prefix(key) + this.ttlKey;
            },
            _noop: function() {
                this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;
            },
            _safeSet: function(key, val) {
                try {
                    this.ls.setItem(key, val);
                } catch (err) {
                    if (err.name === "QuotaExceededError") {
                        this.clear();
                        this._noop();
                    }
                }
            },
            get: function(key) {
                if (this.isExpired(key)) {
                    this.remove(key);
                }
                return decode(this.ls.getItem(this._prefix(key)));
            },
            set: function(key, val, ttl) {
                if (_.isNumber(ttl)) {
                    this._safeSet(this._ttlKey(key), encode(now() + ttl));
                } else {
                    this.ls.removeItem(this._ttlKey(key));
                }
                return this._safeSet(this._prefix(key), encode(val));
            },
            remove: function(key) {
                this.ls.removeItem(this._ttlKey(key));
                this.ls.removeItem(this._prefix(key));
                return this;
            },
            clear: function() {
                var i, keys = gatherMatchingKeys(this.keyMatcher);
                for (i = keys.length; i--; ) {
                    this.remove(keys[i]);
                }
                return this;
            },
            isExpired: function(key) {
                var ttl = decode(this.ls.getItem(this._ttlKey(key)));
                return _.isNumber(ttl) && now() > ttl ? true : false;
            }
        });
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return $.parseJSON(val);
        }
        function gatherMatchingKeys(keyMatcher) {
            var i, key, keys = [], len = LOCAL_STORAGE.length;
            for (i = 0; i < len; i++) {
                if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
                    keys.push(key.replace(keyMatcher, ""));
                }
            }
            return keys;
        }
    }();
    var Transport = function() {
        "use strict";
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, sharedCache = new LruCache(10);
        function Transport(o) {
            o = o || {};
            this.cancelled = false;
            this.lastReq = null;
            this._send = o.transport;
            this._get = o.limiter ? o.limiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
        };
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
        };
        _.mixin(Transport.prototype, {
            _fingerprint: function fingerprint(o) {
                o = o || {};
                return o.url + o.type + $.param(o.data || {});
            },
            _get: function(o, cb) {
                var that = this, fingerprint, jqXhr;
                fingerprint = this._fingerprint(o);
                if (this.cancelled || fingerprint !== this.lastReq) {
                    return;
                }
                if (jqXhr = pendingRequests[fingerprint]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    cb(null, resp);
                    that._cache.set(fingerprint, resp);
                }
                function fail() {
                    cb(true);
                }
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[fingerprint];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(o, cb) {
                var resp, fingerprint;
                cb = cb || $.noop;
                o = _.isString(o) ? {
                    url: o
                } : o || {};
                fingerprint = this._fingerprint(o);
                this.cancelled = false;
                this.lastReq = fingerprint;
                if (resp = this._cache.get(fingerprint)) {
                    cb(null, resp);
                } else {
                    this._get(o, cb);
                }
            },
            cancel: function() {
                this.cancelled = true;
            }
        });
        return Transport;
    }();
    var SearchIndex = window.SearchIndex = function() {
        "use strict";
        var CHILDREN = "c", IDS = "i";
        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.identify = o.identify || _.stringify;
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    that.datums[id = that.identify(datum)] = datum;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
                            node[IDS].push(id);
                        }
                    });
                });
            },
            get: function get(ids) {
                var that = this;
                return _.map(ids, function(id) {
                    return that.datums[id];
                });
            },
            search: function search(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node[CHILDREN][ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node[IDS].slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        matches = [];
                        return false;
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            all: function all() {
                var values = [];
                for (var key in this.datums) {
                    values.push(this.datums[key]);
                }
                return values;
            },
            reset: function reset() {
                this.datums = {};
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }
        function newNode() {
            var node = {};
            node[IDS] = [];
            node[CHILDREN] = {};
            return node;
        }
        function unique(array) {
            var seen = {}, uniques = [];
            for (var i = 0, len = array.length; i < len; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort();
            arrayB = arrayB.sort();
            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;
            while (ai < lenArrayA && bi < lenArrayB) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
        }
    }();
    var Prefetch = function() {
        "use strict";
        var keys;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        function Prefetch(o) {
            this.url = o.url;
            this.ttl = o.ttl;
            this.cache = o.cache;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = o.transport;
            this.thumbprint = o.thumbprint;
            this.storage = new PersistentStorage(o.cacheKey);
        }
        _.mixin(Prefetch.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            store: function store(data) {
                if (!this.cache) {
                    return;
                }
                this.storage.set(keys.data, data, this.ttl);
                this.storage.set(keys.protocol, location.protocol, this.ttl);
                this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);
            },
            fromCache: function fromCache() {
                var stored = {}, isExpired;
                if (!this.cache) {
                    return null;
                }
                stored.data = this.storage.get(keys.data);
                stored.protocol = this.storage.get(keys.protocol);
                stored.thumbprint = this.storage.get(keys.thumbprint);
                isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            fromNetwork: function(cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                settings = this.prepare(this._settings());
                this.transport(settings).fail(onError).done(onResponse);
                function onError() {
                    cb(true);
                }
                function onResponse(resp) {
                    cb(null, that.transform(resp));
                }
            },
            clear: function clear() {
                this.storage.clear();
                return this;
            }
        });
        return Prefetch;
    }();
    var Remote = function() {
        "use strict";
        function Remote(o) {
            this.url = o.url;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = new Transport({
                cache: o.cache,
                limiter: o.limiter,
                transport: o.transport
            });
        }
        _.mixin(Remote.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            get: function get(query, cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                query = query || "";
                settings = this.prepare(query, this._settings());
                return this.transport.get(settings, onResponse);
                function onResponse(err, resp) {
                    err ? cb([]) : cb(that.transform(resp));
                }
            },
            cancelLastRequest: function cancelLastRequest() {
                this.transport.cancel();
            }
        });
        return Remote;
    }();
    var oParser = function() {
        "use strict";
        return function parse(o) {
            var defaults, sorter;
            defaults = {
                initialize: true,
                identify: _.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                sufficient: 5,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            };
            o = _.mixin(defaults, o || {});
            !o.datumTokenizer && $.error("datumTokenizer is required");
            !o.queryTokenizer && $.error("queryTokenizer is required");
            sorter = o.sorter;
            o.sorter = sorter ? function(x) {
                return x.sort(sorter);
            } : _.identity;
            o.local = _.isFunction(o.local) ? o.local() : o.local;
            o.prefetch = parsePrefetch(o.prefetch);
            o.remote = parseRemote(o.remote);
            return o;
        };
        function parsePrefetch(o) {
            var defaults;
            if (!o) {
                return null;
            }
            defaults = {
                url: null,
                ttl: 24 * 60 * 60 * 1e3,
                cache: true,
                cacheKey: null,
                thumbprint: "",
                prepare: _.identity,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("prefetch requires url to be set");
            o.transform = o.filter || o.transform;
            o.cacheKey = o.cacheKey || o.url;
            o.thumbprint = VERSION + o.thumbprint;
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            return o;
        }
        function parseRemote(o) {
            var defaults;
            if (!o) {
                return;
            }
            defaults = {
                url: null,
                cache: true,
                prepare: null,
                replace: null,
                wildcard: null,
                limiter: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("remote requires url to be set");
            o.transform = o.filter || o.transform;
            o.prepare = toRemotePrepare(o);
            o.limiter = toLimiter(o);
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            delete o.replace;
            delete o.wildcard;
            delete o.rateLimitBy;
            delete o.rateLimitWait;
            return o;
        }
        function toRemotePrepare(o) {
            var prepare, replace, wildcard;
            prepare = o.prepare;
            replace = o.replace;
            wildcard = o.wildcard;
            if (prepare) {
                return prepare;
            }
            if (replace) {
                prepare = prepareByReplace;
            } else if (o.wildcard) {
                prepare = prepareByWildcard;
            } else {
                prepare = idenityPrepare;
            }
            return prepare;
            function prepareByReplace(query, settings) {
                settings.url = replace(settings.url, query);
                return settings;
            }
            function prepareByWildcard(query, settings) {
                settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
                return settings;
            }
            function idenityPrepare(query, settings) {
                return settings;
            }
        }
        function toLimiter(o) {
            var limiter, method, wait;
            limiter = o.limiter;
            method = o.rateLimitBy;
            wait = o.rateLimitWait;
            if (!limiter) {
                limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);
            }
            return limiter;
            function debounce(wait) {
                return function debounce(fn) {
                    return _.debounce(fn, wait);
                };
            }
            function throttle(wait) {
                return function throttle(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
        function callbackToDeferred(fn) {
            return function wrapper(o) {
                var deferred = $.Deferred();
                fn(o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var Bloodhound = function() {
        "use strict";
        var old;
        old = window && window.Bloodhound;
        function Bloodhound(o) {
            o = oParser(o);
            this.sorter = o.sorter;
            this.identify = o.identify;
            this.sufficient = o.sufficient;
            this.local = o.local;
            this.remote = o.remote ? new Remote(o.remote) : null;
            this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
            this.index = new SearchIndex({
                identify: this.identify,
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            o.initialize !== false && this.initialize();
        }
        Bloodhound.noConflict = function noConflict() {
            window && (window.Bloodhound = old);
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            __ttAdapter: function ttAdapter() {
                var that = this;
                return this.remote ? withAsync : withoutAsync;
                function withAsync(query, sync, async) {
                    return that.search(query, sync, async);
                }
                function withoutAsync(query, sync) {
                    return that.search(query, sync);
                }
            },
            _loadPrefetch: function loadPrefetch() {
                var that = this, deferred, serialized;
                deferred = $.Deferred();
                if (!this.prefetch) {
                    deferred.resolve();
                } else if (serialized = this.prefetch.fromCache()) {
                    this.index.bootstrap(serialized);
                    deferred.resolve();
                } else {
                    this.prefetch.fromNetwork(done);
                }
                return deferred.promise();
                function done(err, data) {
                    if (err) {
                        return deferred.reject();
                    }
                    that.add(data);
                    that.prefetch.store(that.index.serialize());
                    deferred.resolve();
                }
            },
            _initialize: function initialize() {
                var that = this, deferred;
                this.clear();
                (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
                return this.initPromise;
                function addLocalToIndex() {
                    that.add(that.local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
                return this;
            },
            get: function get(ids) {
                ids = _.isArray(ids) ? ids : [].slice.call(arguments);
                return this.index.get(ids);
            },
            search: function search(query, sync, async) {
                var that = this, local;
                local = this.sorter(this.index.search(query));
                sync(this.remote ? local.slice() : local);
                if (this.remote && local.length < this.sufficient) {
                    this.remote.get(query, processRemote);
                } else if (this.remote) {
                    this.remote.cancelLastRequest();
                }
                return this;
                function processRemote(remote) {
                    var nonDuplicates = [];
                    _.each(remote, function(r) {
                        !_.some(local, function(l) {
                            return that.identify(r) === that.identify(l);
                        }) && nonDuplicates.push(r);
                    });
                    async && async(nonDuplicates);
                }
            },
            all: function all() {
                return this.index.all();
            },
            clear: function clear() {
                this.index.reset();
                return this;
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.prefetch && this.prefetch.clear();
                return this;
            },
            clearRemoteCache: function clearRemoteCache() {
                Transport.resetCache();
                return this;
            },
            ttAdapter: function ttAdapter() {
                return this.__ttAdapter();
            }
        });
        return Bloodhound;
    }();
    return Bloodhound;
});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("typeahead.js", [ "jquery" ], function(a0) {
            return factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var WWW = function() {
        "use strict";
        var defaultClassNames = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return build;
        function build(o) {
            var www, classes;
            classes = _.mixin({}, defaultClassNames, o);
            www = {
                css: buildCss(),
                classes: classes,
                html: buildHtml(classes),
                selectors: buildSelectors(classes)
            };
            return {
                css: www.css,
                html: www.html,
                classes: www.classes,
                selectors: www.selectors,
                mixin: function(o) {
                    _.mixin(o, www);
                }
            };
        }
        function buildHtml(c) {
            return {
                wrapper: '<span class="' + c.wrapper + '"></span>',
                menu: '<div class="' + c.menu + '"></div>'
            };
        }
        function buildSelectors(classes) {
            var selectors = {};
            _.each(classes, function(v, k) {
                selectors[k] = "." + v;
            });
            return selectors;
        }
        function buildCss() {
            var css = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                menu: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            if (_.isMsie()) {
                _.mixin(css.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                });
            }
            return css;
        }
    }();
    var EventBus = function() {
        "use strict";
        var namespace, deprecationMap;
        namespace = "typeahead:";
        deprecationMap = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        };
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            _trigger: function(type, args) {
                var $e;
                $e = $.Event(namespace + type);
                (args = args || []).unshift($e);
                this.$el.trigger.apply(this.$el, args);
                return $e;
            },
            before: function(type) {
                var args, $e;
                args = [].slice.call(arguments, 1);
                $e = this._trigger("before" + type, args);
                return $e.isDefaultPrevented();
            },
            trigger: function(type) {
                var deprecatedType;
                this._trigger(type, [].slice.call(arguments, 1));
                if (deprecatedType = deprecationMap[type]) {
                    this._trigger(deprecatedType, [].slice.call(arguments, 1));
                }
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o, www) {
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            www.mixin(this);
            this.$hint = $(o.hint);
            this.$input = $(o.input);
            this.query = this.$input.val();
            this.queryWhenFocused = this.hasFocus() ? this.query : null;
            this.$overflowHelper = buildOverflowHelper(this.$input);
            this._checkLanguageDirection();
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
        }
        Input.normalizeQuery = function(str) {
            return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.queryWhenFocused = this.query;
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._setQuery(this.getInputValue());
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault;
                switch (keyName) {
                  case "up":
                  case "down":
                    preventDefault = !withModifier($e);
                    break;

                  default:
                    preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                  case "tab":
                    trigger = !withModifier($e);
                    break;

                  default:
                    trigger = true;
                }
                return trigger;
            },
            _checkLanguageDirection: function checkLanguageDirection() {
                var dir = (this.$input.css("direction") || "ltr").toLowerCase();
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.$hint.attr("dir", dir);
                    this.trigger("langDirChanged", dir);
                }
            },
            _setQuery: function setQuery(val, silent) {
                var areEquivalent, hasDifferentWhitespace;
                areEquivalent = areQueriesEquivalent(val, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
                this.query = val;
                if (!silent && !areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (!silent && hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            bind: function() {
                var that = this, onBlur, onFocus, onKeydown, onInput;
                onBlur = _.bind(this._onBlur, this);
                onFocus = _.bind(this._onFocus, this);
                onKeydown = _.bind(this._onKeydown, this);
                onInput = _.bind(this._onInput, this);
                this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
                if (!_.isMsie() || _.isMsie() > 9) {
                    this.$input.on("input.tt", onInput);
                } else {
                    this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                        if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                            return;
                        }
                        _.defer(_.bind(that._onInput, that, $e));
                    });
                }
                return this;
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getLangDir: function getLangDir() {
                return this.dir;
            },
            getQuery: function getQuery() {
                return this.query || "";
            },
            setQuery: function setQuery(val, silent) {
                this.setInputValue(val);
                this._setQuery(val, silent);
            },
            hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
                return this.query !== this.queryWhenFocused;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value) {
                this.$input.val(value);
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            hasFocus: function hasFocus() {
                return this.$input.is(":focus");
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$overflowHelper.remove();
                this.$hint = this.$input = this.$overflowHelper = $("<div>");
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var keys, nameGenerator;
        keys = {
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        };
        nameGenerator = _.getIdGenerator();
        function Dataset(o, www) {
            o = o || {};
            o.templates = o.templates || {};
            o.templates.notFound = o.templates.notFound || o.templates.empty;
            if (!o.source) {
                $.error("missing source");
            }
            if (!o.node) {
                $.error("missing node");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            www.mixin(this);
            this.highlight = !!o.highlight;
            this.name = o.name || nameGenerator();
            this.limit = o.limit || 5;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
            this._resetLastSuggestion();
            this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
        }
        Dataset.extractData = function extractData(el) {
            var $el = $(el);
            if ($el.data(keys.obj)) {
                return {
                    val: $el.data(keys.val) || "",
                    obj: $el.data(keys.obj) || null
                };
            }
            return null;
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _overwrite: function overwrite(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (this.async && this.templates.pending) {
                    this._renderPending(query);
                } else if (!this.async && this.templates.notFound) {
                    this._renderNotFound(query);
                } else {
                    this._empty();
                }
                this.trigger("rendered", this.name, suggestions, false);
            },
            _append: function append(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length && this.$lastSuggestion.length) {
                    this._appendSuggestions(query, suggestions);
                } else if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (!this.$lastSuggestion.length && this.templates.notFound) {
                    this._renderNotFound(query);
                }
                this.trigger("rendered", this.name, suggestions, true);
            },
            _renderSuggestions: function renderSuggestions(query, suggestions) {
                var $fragment;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                this.$lastSuggestion = $fragment.children().last();
                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
            },
            _appendSuggestions: function appendSuggestions(query, suggestions) {
                var $fragment, $lastSuggestion;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                $lastSuggestion = $fragment.children().last();
                this.$lastSuggestion.after($fragment);
                this.$lastSuggestion = $lastSuggestion;
            },
            _renderPending: function renderPending(query) {
                var template = this.templates.pending;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _renderNotFound: function renderNotFound(query) {
                var template = this.templates.notFound;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _empty: function empty() {
                this.$el.empty();
                this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
                var that = this, fragment;
                fragment = document.createDocumentFragment();
                _.each(suggestions, function getSuggestionNode(suggestion) {
                    var $el, context;
                    context = that._injectQuery(query, suggestion);
                    $el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
                    fragment.appendChild($el[0]);
                });
                this.highlight && highlight({
                    className: this.classes.highlight,
                    node: fragment,
                    pattern: query
                });
                return $(fragment);
            },
            _getFooter: function getFooter(query, suggestions) {
                return this.templates.footer ? this.templates.footer({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _getHeader: function getHeader(query, suggestions) {
                return this.templates.header ? this.templates.header({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _resetLastSuggestion: function resetLastSuggestion() {
                this.$lastSuggestion = $();
            },
            _injectQuery: function injectQuery(query, obj) {
                return _.isObject(obj) ? _.mixin({
                    _query: query
                }, obj) : obj;
            },
            update: function update(query) {
                var that = this, canceled = false, syncCalled = false, rendered = 0;
                this.cancel();
                this.cancel = function cancel() {
                    canceled = true;
                    that.cancel = $.noop;
                    that.async && that.trigger("asyncCanceled", query);
                };
                this.source(query, sync, async);
                !syncCalled && sync([]);
                function sync(suggestions) {
                    if (syncCalled) {
                        return;
                    }
                    syncCalled = true;
                    suggestions = (suggestions || []).slice(0, that.limit);
                    rendered = suggestions.length;
                    that._overwrite(query, suggestions);
                    if (rendered < that.limit && that.async) {
                        that.trigger("asyncRequested", query);
                    }
                }
                function async(suggestions) {
                    suggestions = suggestions || [];
                    if (!canceled && rendered < that.limit) {
                        that.cancel = $.noop;
                        rendered += suggestions.length;
                        that._append(query, suggestions.slice(0, that.limit - rendered));
                        that.async && that.trigger("asyncReceived", query);
                    }
                }
            },
            cancel: $.noop,
            clear: function clear() {
                this._empty();
                this.cancel();
                this.trigger("cleared");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = $("<div>");
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || _.stringify;
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                notFound: templates.notFound && _.templatify(templates.notFound),
                pending: templates.pending && _.templatify(templates.pending),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return $("<div>").text(displayFn(context));
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Menu = function() {
        "use strict";
        function Menu(o, www) {
            var that = this;
            o = o || {};
            if (!o.node) {
                $.error("node is required");
            }
            www.mixin(this);
            this.$node = $(o.node);
            this.query = null;
            this.datasets = _.map(o.datasets, initializeDataset);
            function initializeDataset(oDataset) {
                var node = that.$node.find(oDataset.node).first();
                oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
                return new Dataset(oDataset, www);
            }
        }
        _.mixin(Menu.prototype, EventEmitter, {
            _onSelectableClick: function onSelectableClick($e) {
                this.trigger("selectableClicked", $($e.currentTarget));
            },
            _onRendered: function onRendered(type, dataset, suggestions, async) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetRendered", dataset, suggestions, async);
            },
            _onCleared: function onCleared() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetCleared");
            },
            _propagate: function propagate() {
                this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function allDatasetsEmpty() {
                return _.every(this.datasets, isDatasetEmpty);
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _getSelectables: function getSelectables() {
                return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function _removeCursor() {
                var $selectable = this.getActiveSelectable();
                $selectable && $selectable.removeClass(this.classes.cursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, nodeScrollTop, nodeHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                nodeScrollTop = this.$node.scrollTop();
                nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$node.scrollTop(nodeScrollTop + elTop);
                } else if (nodeHeight < elBottom) {
                    this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
                }
            },
            bind: function() {
                var that = this, onSelectableClick;
                onSelectableClick = _.bind(this._onSelectableClick, this);
                this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
                _.each(this.datasets, function(dataset) {
                    dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
                });
                return this;
            },
            isOpen: function isOpen() {
                return this.$node.hasClass(this.classes.open);
            },
            open: function open() {
                this.$node.addClass(this.classes.open);
            },
            close: function close() {
                this.$node.removeClass(this.classes.open);
                this._removeCursor();
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.attr("dir", dir);
            },
            selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
                var $selectables, $oldCursor, oldIndex, newIndex;
                $oldCursor = this.getActiveSelectable();
                $selectables = this._getSelectables();
                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
                newIndex = oldIndex + delta;
                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
                newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
                return newIndex === -1 ? null : $selectables.eq(newIndex);
            },
            setCursor: function setCursor($selectable) {
                this._removeCursor();
                if ($selectable = $selectable && $selectable.first()) {
                    $selectable.addClass(this.classes.cursor);
                    this._ensureVisible($selectable);
                }
            },
            getSelectableData: function getSelectableData($el) {
                return $el && $el.length ? Dataset.extractData($el) : null;
            },
            getActiveSelectable: function getActiveSelectable() {
                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                return $selectable.length ? $selectable : null;
            },
            getTopSelectable: function getTopSelectable() {
                var $selectable = this._getSelectables().first();
                return $selectable.length ? $selectable : null;
            },
            update: function update(query) {
                var isValidUpdate = query !== this.query;
                if (isValidUpdate) {
                    this.query = query;
                    _.each(this.datasets, updateDataset);
                }
                return isValidUpdate;
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.query = null;
                this.$node.addClass(this.classes.empty);
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            destroy: function destroy() {
                this.$node.off(".tt");
                this.$node = $("<div>");
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Menu;
    }();
    var DefaultMenu = function() {
        "use strict";
        var s = Menu.prototype;
        function DefaultMenu() {
            Menu.apply(this, [].slice.call(arguments, 0));
        }
        _.mixin(DefaultMenu.prototype, Menu.prototype, {
            open: function open() {
                !this._allDatasetsEmpty() && this._show();
                return s.open.apply(this, [].slice.call(arguments, 0));
            },
            close: function close() {
                this._hide();
                return s.close.apply(this, [].slice.call(arguments, 0));
            },
            _onRendered: function onRendered() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onRendered.apply(this, [].slice.call(arguments, 0));
            },
            _onCleared: function onCleared() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onCleared.apply(this, [].slice.call(arguments, 0));
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
                return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
            },
            _hide: function hide() {
                this.$node.hide();
            },
            _show: function show() {
                this.$node.css("display", "block");
            }
        });
        return DefaultMenu;
    }();
    var Typeahead = function() {
        "use strict";
        function Typeahead(o, www) {
            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            if (!o.menu) {
                $.error("missing menu");
            }
            if (!o.eventBus) {
                $.error("missing event bus");
            }
            www.mixin(this);
            this.eventBus = o.eventBus;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.input = o.input;
            this.menu = o.menu;
            this.enabled = true;
            this.active = false;
            this.input.hasFocus() && this.activate();
            this.dir = this.input.getLangDir();
            this._hacks();
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
            onFocused = c(this, "activate", "open", "_onFocused");
            onBlurred = c(this, "deactivate", "_onBlurred");
            onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
            onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
            onEscKeyed = c(this, "isActive", "_onEscKeyed");
            onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
            onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
            onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
            onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
            onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
            onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
            this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
        }
        _.mixin(Typeahead.prototype, {
            _hacks: function hacks() {
                var $input, $menu;
                $input = this.input.$input || $("<div>");
                $menu = this.menu.$node || $("<div>");
                $input.on("blur.tt", function($e) {
                    var active, isActive, hasActive;
                    active = document.activeElement;
                    isActive = $menu.is(active);
                    hasActive = $menu.has(active).length > 0;
                    if (_.isMsie() && (isActive || hasActive)) {
                        $e.preventDefault();
                        $e.stopImmediatePropagation();
                        _.defer(function() {
                            $input.focus();
                        });
                    }
                });
                $menu.on("mousedown.tt", function($e) {
                    $e.preventDefault();
                });
            },
            _onSelectableClicked: function onSelectableClicked(type, $el) {
                this.select($el);
            },
            _onDatasetCleared: function onDatasetCleared() {
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered(type, dataset, suggestions, async) {
                this._updateHint();
                this.eventBus.trigger("render", suggestions, async, dataset);
            },
            _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
                this.eventBus.trigger("asyncrequest", query, dataset);
            },
            _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
                this.eventBus.trigger("asynccancel", query, dataset);
            },
            _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
                this.eventBus.trigger("asyncreceive", query, dataset);
            },
            _onFocused: function onFocused() {
                this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function onBlurred() {
                if (this.input.hasQueryChangedSinceLastFocus()) {
                    this.eventBus.trigger("change", this.input.getQuery());
                }
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                } else if ($selectable = this.menu.getTopSelectable()) {
                    this.autocomplete($selectable) && $e.preventDefault();
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.close();
            },
            _onUpKeyed: function onUpKeyed() {
                this.moveCursor(-1);
            },
            _onDownKeyed: function onDownKeyed() {
                this.moveCursor(+1);
            },
            _onLeftKeyed: function onLeftKeyed() {
                if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onRightKeyed: function onRightKeyed() {
                if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
            },
            _onLangDirChanged: function onLangDirChanged(e, dir) {
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.menu.setLanguageDirection(dir);
                }
            },
            _openIfActive: function openIfActive() {
                this.isActive() && this.open();
            },
            _minLengthMet: function minLengthMet(query) {
                query = _.isString(query) ? query : this.input.getQuery() || "";
                return query.length >= this.minLength;
            },
            _updateHint: function updateHint() {
                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                $selectable = this.menu.getTopSelectable();
                data = this.menu.getSelectableData($selectable);
                val = this.input.getInputValue();
                if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(data.val);
                    match && this.input.setHint(val + match[1]);
                } else {
                    this.input.clearHint();
                }
            },
            isEnabled: function isEnabled() {
                return this.enabled;
            },
            enable: function enable() {
                this.enabled = true;
            },
            disable: function disable() {
                this.enabled = false;
            },
            isActive: function isActive() {
                return this.active;
            },
            activate: function activate() {
                if (this.isActive()) {
                    return true;
                } else if (!this.isEnabled() || this.eventBus.before("active")) {
                    return false;
                } else {
                    this.active = true;
                    this.eventBus.trigger("active");
                    return true;
                }
            },
            deactivate: function deactivate() {
                if (!this.isActive()) {
                    return true;
                } else if (this.eventBus.before("idle")) {
                    return false;
                } else {
                    this.active = false;
                    this.close();
                    this.eventBus.trigger("idle");
                    return true;
                }
            },
            isOpen: function isOpen() {
                return this.menu.isOpen();
            },
            open: function open() {
                if (!this.isOpen() && !this.eventBus.before("open")) {
                    this.menu.open();
                    this._updateHint();
                    this.eventBus.trigger("open");
                }
                return this.isOpen();
            },
            close: function close() {
                if (this.isOpen() && !this.eventBus.before("close")) {
                    this.menu.close();
                    this.input.clearHint();
                    this.input.resetInputValue();
                    this.eventBus.trigger("close");
                }
                return !this.isOpen();
            },
            setVal: function setVal(val) {
                this.input.setQuery(_.toStr(val));
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            select: function select($selectable) {
                var data = this.menu.getSelectableData($selectable);
                if (data && !this.eventBus.before("select", data.obj)) {
                    this.input.setQuery(data.val, true);
                    this.eventBus.trigger("select", data.obj);
                    this.close();
                    return true;
                }
                return false;
            },
            autocomplete: function autocomplete($selectable) {
                var query, data, isValid;
                query = this.input.getQuery();
                data = this.menu.getSelectableData($selectable);
                isValid = data && query !== data.val;
                if (isValid && !this.eventBus.before("autocomplete", data.obj)) {
                    this.input.setQuery(data.val);
                    this.eventBus.trigger("autocomplete", data.obj);
                    return true;
                }
                return false;
            },
            moveCursor: function moveCursor(delta) {
                var query, $candidate, data, payload, cancelMove;
                query = this.input.getQuery();
                $candidate = this.menu.selectableRelativeToCursor(delta);
                data = this.menu.getSelectableData($candidate);
                payload = data ? data.obj : null;
                cancelMove = this._minLengthMet() && this.menu.update(query);
                if (!cancelMove && !this.eventBus.before("cursorchange", payload)) {
                    this.menu.setCursor($candidate);
                    if (data) {
                        this.input.setInputValue(data.val);
                    } else {
                        this.input.resetInputValue();
                        this._updateHint();
                    }
                    this.eventBus.trigger("cursorchange", payload);
                    return true;
                }
                return false;
            },
            destroy: function destroy() {
                this.input.destroy();
                this.menu.destroy();
            }
        });
        return Typeahead;
        function c(ctx) {
            var methods = [].slice.call(arguments, 1);
            return function() {
                var args = [].slice.call(arguments);
                _.each(methods, function(method) {
                    return ctx[method].apply(ctx, args);
                });
            };
        }
    }();
    (function() {
        "use strict";
        var old, keys, methods;
        old = $.fn.typeahead;
        keys = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        methods = {
            initialize: function initialize(o, datasets) {
                var www;
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                www = WWW(o.classNames);
                return this.each(attach);
                function attach() {
                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    $input = $(this);
                    $wrapper = $(www.html.wrapper);
                    $hint = $elOrNull(o.hint);
                    $menu = $elOrNull(o.menu);
                    defaultHint = o.hint !== false && !$hint;
                    defaultMenu = o.menu !== false && !$menu;
                    defaultHint && ($hint = buildHintFromInput($input, www));
                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
                    $hint && $hint.val("");
                    $input = prepInput($input, www);
                    if (defaultHint || defaultMenu) {
                        $wrapper.css(www.css.wrapper);
                        $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
                        $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
                    }
                    MenuConstructor = defaultMenu ? DefaultMenu : Menu;
                    eventBus = new EventBus({
                        el: $input
                    });
                    input = new Input({
                        hint: $hint,
                        input: $input
                    }, www);
                    menu = new MenuConstructor({
                        node: $menu,
                        datasets: datasets
                    }, www);
                    typeahead = new Typeahead({
                        input: input,
                        menu: menu,
                        eventBus: eventBus,
                        minLength: o.minLength
                    }, www);
                    $input.data(keys.www, www);
                    $input.data(keys.typeahead, typeahead);
                }
            },
            isEnabled: function isEnabled() {
                var enabled;
                ttEach(this.first(), function(t) {
                    enabled = t.isEnabled();
                });
                return enabled;
            },
            enable: function enable() {
                ttEach(this, function(t) {
                    t.enable();
                });
                return this;
            },
            disable: function disable() {
                ttEach(this, function(t) {
                    t.disable();
                });
                return this;
            },
            isActive: function isActive() {
                var active;
                ttEach(this.first(), function(t) {
                    active = t.isActive();
                });
                return active;
            },
            activate: function activate() {
                ttEach(this, function(t) {
                    t.activate();
                });
                return this;
            },
            deactivate: function deactivate() {
                ttEach(this, function(t) {
                    t.deactivate();
                });
                return this;
            },
            isOpen: function isOpen() {
                var open;
                ttEach(this.first(), function(t) {
                    open = t.isOpen();
                });
                return open;
            },
            open: function open() {
                ttEach(this, function(t) {
                    t.open();
                });
                return this;
            },
            close: function close() {
                ttEach(this, function(t) {
                    t.close();
                });
                return this;
            },
            select: function select(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.select($el);
                });
                return success;
            },
            autocomplete: function autocomplete(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.autocomplete($el);
                });
                return success;
            },
            moveCursor: function moveCursoe(delta) {
                var success = false;
                ttEach(this.first(), function(t) {
                    success = t.moveCursor(delta);
                });
                return success;
            },
            val: function val(newVal) {
                var query;
                if (!arguments.length) {
                    ttEach(this.first(), function(t) {
                        query = t.getVal();
                    });
                    return query;
                } else {
                    ttEach(this, function(t) {
                        t.setVal(newVal);
                    });
                    return this;
                }
            },
            destroy: function destroy() {
                ttEach(this, function(typeahead, $input) {
                    revert($input);
                    typeahead.destroy();
                });
                return this;
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
        function ttEach($els, fn) {
            $els.each(function() {
                var $input = $(this), typeahead;
                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
            });
        }
        function buildHintFromInput($input, www) {
            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly", true).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
        }
        function prepInput($input, www) {
            $input.data(keys.attrs, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass(www.classes.input).attr({
                autocomplete: "off",
                spellcheck: false
            });
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input;
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function revert($input) {
            var www, $wrapper;
            www = $input.data(keys.www);
            $wrapper = $input.parent().filter(www.selectors.wrapper);
            _.each($input.data(keys.attrs), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
            if ($wrapper.length) {
                $input.detach().insertAfter($wrapper);
                $wrapper.remove();
            }
        }
        function $elOrNull(obj) {
            var isValid, $el;
            isValid = _.isJQuery(obj) || _.isElement(obj);
            $el = isValid ? $(obj).first() : [];
            return $el.length ? $el : null;
        }
    })();
});