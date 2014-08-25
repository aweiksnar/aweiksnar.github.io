// Compiled by ClojureScript 0.0-2311
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);
dommy.template.PElement = (function (){var obj27974 = {};return obj27974;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3541__auto__ = this$;if(and__3541__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3541__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4180__auto__ = (((this$ == null))?null:this$);return (function (){var or__3553__auto__ = (dommy.template._elem[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (dommy.template._elem["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < (0)))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = dommy.utils.as_str.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,(0));var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":node_str
));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= (0)))
{var str_27977 = node_str.substring(base_idx);while(true){
var next_idx_27978 = dommy.template.next_css_index.call(null,str_27977,(1));var frag_27979 = (((next_idx_27978 >= (0)))?str_27977.substring((0),next_idx_27978):str_27977);var G__27976_27980 = frag_27979.charAt((0));switch (G__27976_27980) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_27979.substring((1)));

break;
case "#":
node.setAttribute("id",frag_27979.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_27979.charAt((0))))));

}
if((next_idx_27978 >= (0)))
{{
var G__27982 = str_27977.substring(next_idx_27978);
str_27977 = G__27982;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__27988 = data;if(G__27988)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__27988.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__27988.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__27988);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__27988);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__27989_27993 = cljs.core.seq.call(null,data);var chunk__27990_27994 = null;var count__27991_27995 = (0);var i__27992_27996 = (0);while(true){
if((i__27992_27996 < count__27991_27995))
{var child_27997 = cljs.core._nth.call(null,chunk__27990_27994,i__27992_27996);__GT_document_fragment.call(null,result_frag,child_27997);
{
var G__27998 = seq__27989_27993;
var G__27999 = chunk__27990_27994;
var G__28000 = count__27991_27995;
var G__28001 = (i__27992_27996 + (1));
seq__27989_27993 = G__27998;
chunk__27990_27994 = G__27999;
count__27991_27995 = G__28000;
i__27992_27996 = G__28001;
continue;
}
} else
{var temp__4126__auto___28002 = cljs.core.seq.call(null,seq__27989_27993);if(temp__4126__auto___28002)
{var seq__27989_28003__$1 = temp__4126__auto___28002;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27989_28003__$1))
{var c__4309__auto___28004 = cljs.core.chunk_first.call(null,seq__27989_28003__$1);{
var G__28005 = cljs.core.chunk_rest.call(null,seq__27989_28003__$1);
var G__28006 = c__4309__auto___28004;
var G__28007 = cljs.core.count.call(null,c__4309__auto___28004);
var G__28008 = (0);
seq__27989_27993 = G__28005;
chunk__27990_27994 = G__28006;
count__27991_27995 = G__28007;
i__27992_27996 = G__28008;
continue;
}
} else
{var child_28009 = cljs.core.first.call(null,seq__27989_28003__$1);__GT_document_fragment.call(null,result_frag,child_28009);
{
var G__28010 = cljs.core.next.call(null,seq__27989_28003__$1);
var G__28011 = null;
var G__28012 = (0);
var G__28013 = (0);
seq__27989_27993 = G__28010;
chunk__27990_27994 = G__28011;
count__27991_27995 = G__28012;
i__27992_27996 = G__28013;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);

}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__28015 = data;if(G__28015)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__28015.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28015.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28015);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28015);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__28016){var vec__28036 = p__28016;var tag_name = cljs.core.nth.call(null,vec__28036,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__28036,(1),null);var children = cljs.core.nthnext.call(null,vec__28036,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__28038 = maybe_attrs;if(G__28038)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__28038.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28038.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28038);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28038);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__28039_28055 = cljs.core.seq.call(null,attrs);var chunk__28040_28056 = null;var count__28041_28057 = (0);var i__28042_28058 = (0);while(true){
if((i__28042_28058 < count__28041_28057))
{var vec__28043_28059 = cljs.core._nth.call(null,chunk__28040_28056,i__28042_28058);var k_28060 = cljs.core.nth.call(null,vec__28043_28059,(0),null);var v_28061 = cljs.core.nth.call(null,vec__28043_28059,(1),null);var G__28044_28062 = (((k_28060 instanceof cljs.core.Keyword))?k_28060.fqn:null);switch (G__28044_28062) {
case "classes":
var seq__28045_28064 = cljs.core.seq.call(null,v_28061);var chunk__28046_28065 = null;var count__28047_28066 = (0);var i__28048_28067 = (0);while(true){
if((i__28048_28067 < count__28047_28066))
{var c_28068 = cljs.core._nth.call(null,chunk__28046_28065,i__28048_28067);dommy.attrs.add_class_BANG_.call(null,n,c_28068);
{
var G__28069 = seq__28045_28064;
var G__28070 = chunk__28046_28065;
var G__28071 = count__28047_28066;
var G__28072 = (i__28048_28067 + (1));
seq__28045_28064 = G__28069;
chunk__28046_28065 = G__28070;
count__28047_28066 = G__28071;
i__28048_28067 = G__28072;
continue;
}
} else
{var temp__4126__auto___28073 = cljs.core.seq.call(null,seq__28045_28064);if(temp__4126__auto___28073)
{var seq__28045_28074__$1 = temp__4126__auto___28073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28045_28074__$1))
{var c__4309__auto___28075 = cljs.core.chunk_first.call(null,seq__28045_28074__$1);{
var G__28076 = cljs.core.chunk_rest.call(null,seq__28045_28074__$1);
var G__28077 = c__4309__auto___28075;
var G__28078 = cljs.core.count.call(null,c__4309__auto___28075);
var G__28079 = (0);
seq__28045_28064 = G__28076;
chunk__28046_28065 = G__28077;
count__28047_28066 = G__28078;
i__28048_28067 = G__28079;
continue;
}
} else
{var c_28080 = cljs.core.first.call(null,seq__28045_28074__$1);dommy.attrs.add_class_BANG_.call(null,n,c_28080);
{
var G__28081 = cljs.core.next.call(null,seq__28045_28074__$1);
var G__28082 = null;
var G__28083 = (0);
var G__28084 = (0);
seq__28045_28064 = G__28081;
chunk__28046_28065 = G__28082;
count__28047_28066 = G__28083;
i__28048_28067 = G__28084;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_28061);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_28060,v_28061);

}
{
var G__28085 = seq__28039_28055;
var G__28086 = chunk__28040_28056;
var G__28087 = count__28041_28057;
var G__28088 = (i__28042_28058 + (1));
seq__28039_28055 = G__28085;
chunk__28040_28056 = G__28086;
count__28041_28057 = G__28087;
i__28042_28058 = G__28088;
continue;
}
} else
{var temp__4126__auto___28089 = cljs.core.seq.call(null,seq__28039_28055);if(temp__4126__auto___28089)
{var seq__28039_28090__$1 = temp__4126__auto___28089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28039_28090__$1))
{var c__4309__auto___28091 = cljs.core.chunk_first.call(null,seq__28039_28090__$1);{
var G__28092 = cljs.core.chunk_rest.call(null,seq__28039_28090__$1);
var G__28093 = c__4309__auto___28091;
var G__28094 = cljs.core.count.call(null,c__4309__auto___28091);
var G__28095 = (0);
seq__28039_28055 = G__28092;
chunk__28040_28056 = G__28093;
count__28041_28057 = G__28094;
i__28042_28058 = G__28095;
continue;
}
} else
{var vec__28049_28096 = cljs.core.first.call(null,seq__28039_28090__$1);var k_28097 = cljs.core.nth.call(null,vec__28049_28096,(0),null);var v_28098 = cljs.core.nth.call(null,vec__28049_28096,(1),null);var G__28050_28099 = (((k_28097 instanceof cljs.core.Keyword))?k_28097.fqn:null);switch (G__28050_28099) {
case "classes":
var seq__28051_28101 = cljs.core.seq.call(null,v_28098);var chunk__28052_28102 = null;var count__28053_28103 = (0);var i__28054_28104 = (0);while(true){
if((i__28054_28104 < count__28053_28103))
{var c_28105 = cljs.core._nth.call(null,chunk__28052_28102,i__28054_28104);dommy.attrs.add_class_BANG_.call(null,n,c_28105);
{
var G__28106 = seq__28051_28101;
var G__28107 = chunk__28052_28102;
var G__28108 = count__28053_28103;
var G__28109 = (i__28054_28104 + (1));
seq__28051_28101 = G__28106;
chunk__28052_28102 = G__28107;
count__28053_28103 = G__28108;
i__28054_28104 = G__28109;
continue;
}
} else
{var temp__4126__auto___28110__$1 = cljs.core.seq.call(null,seq__28051_28101);if(temp__4126__auto___28110__$1)
{var seq__28051_28111__$1 = temp__4126__auto___28110__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28051_28111__$1))
{var c__4309__auto___28112 = cljs.core.chunk_first.call(null,seq__28051_28111__$1);{
var G__28113 = cljs.core.chunk_rest.call(null,seq__28051_28111__$1);
var G__28114 = c__4309__auto___28112;
var G__28115 = cljs.core.count.call(null,c__4309__auto___28112);
var G__28116 = (0);
seq__28051_28101 = G__28113;
chunk__28052_28102 = G__28114;
count__28053_28103 = G__28115;
i__28054_28104 = G__28116;
continue;
}
} else
{var c_28117 = cljs.core.first.call(null,seq__28051_28111__$1);dommy.attrs.add_class_BANG_.call(null,n,c_28117);
{
var G__28118 = cljs.core.next.call(null,seq__28051_28111__$1);
var G__28119 = null;
var G__28120 = (0);
var G__28121 = (0);
seq__28051_28101 = G__28118;
chunk__28052_28102 = G__28119;
count__28053_28103 = G__28120;
i__28054_28104 = G__28121;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_28098);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_28097,v_28098);

}
{
var G__28122 = cljs.core.next.call(null,seq__28039_28090__$1);
var G__28123 = null;
var G__28124 = (0);
var G__28125 = (0);
seq__28039_28055 = G__28122;
chunk__28040_28056 = G__28123;
count__28041_28057 = G__28124;
i__28042_28058 = G__28125;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Comment.prototype.dommy$template$PElement$ = true;
Comment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Element.prototype.dommy$template$PElement$ = true;
Element.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
if(typeof HTMLElement !== 'undefined')
{HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof DocumentFragment !== 'undefined')
{DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Document !== 'undefined')
{Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof HTMLDocument !== 'undefined')
{HTMLDocument.prototype.dommy$template$PElement$ = true;
HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof SVGElement !== 'undefined')
{SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Window !== 'undefined')
{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
dommy.template.node = (function node(data){if((function (){var G__28127 = data;if(G__28127)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__28127.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28127.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28127);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28127);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map