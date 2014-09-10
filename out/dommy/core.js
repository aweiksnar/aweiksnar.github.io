// Compiled by ClojureScript 0.0-2311
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3553__auto__ = elem.textContent;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__13920 = dommy.template.__GT_node_like.call(null,parent);G__13920.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__13920;
});
var append_BANG___3 = (function() { 
var G__13925__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__13921_13926 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__13922_13927 = null;var count__13923_13928 = (0);var i__13924_13929 = (0);while(true){
if((i__13924_13929 < count__13923_13928))
{var c_13930 = cljs.core._nth.call(null,chunk__13922_13927,i__13924_13929);append_BANG_.call(null,parent__$1,c_13930);
{
var G__13931 = seq__13921_13926;
var G__13932 = chunk__13922_13927;
var G__13933 = count__13923_13928;
var G__13934 = (i__13924_13929 + (1));
seq__13921_13926 = G__13931;
chunk__13922_13927 = G__13932;
count__13923_13928 = G__13933;
i__13924_13929 = G__13934;
continue;
}
} else
{var temp__4126__auto___13935 = cljs.core.seq.call(null,seq__13921_13926);if(temp__4126__auto___13935)
{var seq__13921_13936__$1 = temp__4126__auto___13935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13921_13936__$1))
{var c__4309__auto___13937 = cljs.core.chunk_first.call(null,seq__13921_13936__$1);{
var G__13938 = cljs.core.chunk_rest.call(null,seq__13921_13936__$1);
var G__13939 = c__4309__auto___13937;
var G__13940 = cljs.core.count.call(null,c__4309__auto___13937);
var G__13941 = (0);
seq__13921_13926 = G__13938;
chunk__13922_13927 = G__13939;
count__13923_13928 = G__13940;
i__13924_13929 = G__13941;
continue;
}
} else
{var c_13942 = cljs.core.first.call(null,seq__13921_13936__$1);append_BANG_.call(null,parent__$1,c_13942);
{
var G__13943 = cljs.core.next.call(null,seq__13921_13936__$1);
var G__13944 = null;
var G__13945 = (0);
var G__13946 = (0);
seq__13921_13926 = G__13943;
chunk__13922_13927 = G__13944;
count__13923_13928 = G__13945;
i__13924_13929 = G__13946;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__13925 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13925__delegate.call(this,parent,child,more_children);};
G__13925.cljs$lang$maxFixedArity = 2;
G__13925.cljs$lang$applyTo = (function (arglist__13947){
var parent = cljs.core.first(arglist__13947);
arglist__13947 = cljs.core.next(arglist__13947);
var child = cljs.core.first(arglist__13947);
var more_children = cljs.core.rest(arglist__13947);
return G__13925__delegate(parent,child,more_children);
});
G__13925.cljs$core$IFn$_invoke$arity$variadic = G__13925__delegate;
return G__13925;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__13956__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__13952_13957 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__13953_13958 = null;var count__13954_13959 = (0);var i__13955_13960 = (0);while(true){
if((i__13955_13960 < count__13954_13959))
{var c_13961 = cljs.core._nth.call(null,chunk__13953_13958,i__13955_13960);prepend_BANG_.call(null,parent__$1,c_13961);
{
var G__13962 = seq__13952_13957;
var G__13963 = chunk__13953_13958;
var G__13964 = count__13954_13959;
var G__13965 = (i__13955_13960 + (1));
seq__13952_13957 = G__13962;
chunk__13953_13958 = G__13963;
count__13954_13959 = G__13964;
i__13955_13960 = G__13965;
continue;
}
} else
{var temp__4126__auto___13966 = cljs.core.seq.call(null,seq__13952_13957);if(temp__4126__auto___13966)
{var seq__13952_13967__$1 = temp__4126__auto___13966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13952_13967__$1))
{var c__4309__auto___13968 = cljs.core.chunk_first.call(null,seq__13952_13967__$1);{
var G__13969 = cljs.core.chunk_rest.call(null,seq__13952_13967__$1);
var G__13970 = c__4309__auto___13968;
var G__13971 = cljs.core.count.call(null,c__4309__auto___13968);
var G__13972 = (0);
seq__13952_13957 = G__13969;
chunk__13953_13958 = G__13970;
count__13954_13959 = G__13971;
i__13955_13960 = G__13972;
continue;
}
} else
{var c_13973 = cljs.core.first.call(null,seq__13952_13967__$1);prepend_BANG_.call(null,parent__$1,c_13973);
{
var G__13974 = cljs.core.next.call(null,seq__13952_13967__$1);
var G__13975 = null;
var G__13976 = (0);
var G__13977 = (0);
seq__13952_13957 = G__13974;
chunk__13953_13958 = G__13975;
count__13954_13959 = G__13976;
i__13955_13960 = G__13977;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__13956 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13956__delegate.call(this,parent,child,more_children);};
G__13956.cljs$lang$maxFixedArity = 2;
G__13956.cljs$lang$applyTo = (function (arglist__13978){
var parent = cljs.core.first(arglist__13978);
arglist__13978 = cljs.core.next(arglist__13978);
var child = cljs.core.first(arglist__13978);
var more_children = cljs.core.rest(arglist__13978);
return G__13956__delegate(parent,child,more_children);
});
G__13956.cljs$core$IFn$_invoke$arity$variadic = G__13956__delegate;
return G__13956;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___13979 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___13979))
{var next_13980 = temp__4124__auto___13979;parent.insertBefore(actual_node,next_13980);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__13982 = dommy.template.__GT_node_like.call(null,parent);G__13982.innerHTML = "";
dommy.core.append_BANG_.call(null,G__13982,node_like);
return G__13982;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__13984 = elem__$1.parentNode;G__13984.removeChild(elem__$1);
return G__13984;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__13990){var vec__13991 = p__13990;var k = cljs.core.nth.call(null,vec__13991,(0),null);var v = cljs.core.nth.call(null,vec__13991,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t13992 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t13992 = (function (v,k,vec__13991,p__13990,container,key_selectors_map,template,selector_map,meta13993){
this.v = v;
this.k = k;
this.vec__13991 = vec__13991;
this.p__13990 = p__13990;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta13993 = meta13993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t13992.cljs$lang$type = true;
dommy.core.t13992.cljs$lang$ctorStr = "dommy.core/t13992";
dommy.core.t13992.cljs$lang$ctorPrWriter = ((function (vec__13991,k,v,container){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"dommy.core/t13992");
});})(vec__13991,k,v,container))
;
dommy.core.t13992.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__13991,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__13991,k,v,container))
;
dommy.core.t13992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__13991,k,v,container){
return (function (_13994){var self__ = this;
var _13994__$1 = this;return self__.meta13993;
});})(vec__13991,k,v,container))
;
dommy.core.t13992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__13991,k,v,container){
return (function (_13994,meta13993__$1){var self__ = this;
var _13994__$1 = this;return (new dommy.core.t13992(self__.v,self__.k,self__.vec__13991,self__.p__13990,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta13993__$1));
});})(vec__13991,k,v,container))
;
dommy.core.__GT_t13992 = ((function (vec__13991,k,v,container){
return (function __GT_t13992(v__$1,k__$1,vec__13991__$1,p__13990__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta13993){return (new dommy.core.t13992(v__$1,k__$1,vec__13991__$1,p__13990__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta13993));
});})(vec__13991,k,v,container))
;
}
return (new dommy.core.t13992(v,k,vec__13991,p__13990,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__13995_SHARP_){return p1__13995_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__13996_SHARP_){return !((p1__13996_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13997){var vec__13998 = p__13997;var special_mouse_event = cljs.core.nth.call(null,vec__13998,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__13998,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__13998,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__13998,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3553__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3541__auto__ = related_target;if(cljs.core.truth_(and__3541__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3541__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__13998,special_mouse_event,real_mouse_event))
});})(vec__13998,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3541__auto__ = selected_target;if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3541__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3553__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__13999){
var elem = cljs.core.first(arglist__13999);
arglist__13999 = cljs.core.next(arglist__13999);
var f = cljs.core.first(arglist__13999);
var args = cljs.core.rest(arglist__13999);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__14000_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__14000_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__14024_14047 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14048 = cljs.core.nth.call(null,vec__14024_14047,(0),null);var selector_14049 = cljs.core.nth.call(null,vec__14024_14047,(1),null);var seq__14025_14050 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__14032_14051 = null;var count__14033_14052 = (0);var i__14034_14053 = (0);while(true){
if((i__14034_14053 < count__14033_14052))
{var vec__14041_14054 = cljs.core._nth.call(null,chunk__14032_14051,i__14034_14053);var orig_type_14055 = cljs.core.nth.call(null,vec__14041_14054,(0),null);var f_14056 = cljs.core.nth.call(null,vec__14041_14054,(1),null);var seq__14035_14057 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14055,new cljs.core.PersistentArrayMap.fromArray([orig_type_14055,cljs.core.identity], true, false)));var chunk__14037_14058 = null;var count__14038_14059 = (0);var i__14039_14060 = (0);while(true){
if((i__14039_14060 < count__14038_14059))
{var vec__14042_14061 = cljs.core._nth.call(null,chunk__14037_14058,i__14039_14060);var actual_type_14062 = cljs.core.nth.call(null,vec__14042_14061,(0),null);var factory_14063 = cljs.core.nth.call(null,vec__14042_14061,(1),null);var canonical_f_14064 = (cljs.core.truth_(selector_14049)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14048,selector_14049):cljs.core.identity).call(null,factory_14063.call(null,f_14056));dommy.core.update_event_listeners_BANG_.call(null,elem_14048,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14049,actual_type_14062,f_14056], null),canonical_f_14064);
if(cljs.core.truth_(elem_14048.addEventListener))
{elem_14048.addEventListener(cljs.core.name.call(null,actual_type_14062),canonical_f_14064);
} else
{elem_14048.attachEvent(cljs.core.name.call(null,actual_type_14062),canonical_f_14064);
}
{
var G__14065 = seq__14035_14057;
var G__14066 = chunk__14037_14058;
var G__14067 = count__14038_14059;
var G__14068 = (i__14039_14060 + (1));
seq__14035_14057 = G__14065;
chunk__14037_14058 = G__14066;
count__14038_14059 = G__14067;
i__14039_14060 = G__14068;
continue;
}
} else
{var temp__4126__auto___14069 = cljs.core.seq.call(null,seq__14035_14057);if(temp__4126__auto___14069)
{var seq__14035_14070__$1 = temp__4126__auto___14069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14035_14070__$1))
{var c__4309__auto___14071 = cljs.core.chunk_first.call(null,seq__14035_14070__$1);{
var G__14072 = cljs.core.chunk_rest.call(null,seq__14035_14070__$1);
var G__14073 = c__4309__auto___14071;
var G__14074 = cljs.core.count.call(null,c__4309__auto___14071);
var G__14075 = (0);
seq__14035_14057 = G__14072;
chunk__14037_14058 = G__14073;
count__14038_14059 = G__14074;
i__14039_14060 = G__14075;
continue;
}
} else
{var vec__14043_14076 = cljs.core.first.call(null,seq__14035_14070__$1);var actual_type_14077 = cljs.core.nth.call(null,vec__14043_14076,(0),null);var factory_14078 = cljs.core.nth.call(null,vec__14043_14076,(1),null);var canonical_f_14079 = (cljs.core.truth_(selector_14049)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14048,selector_14049):cljs.core.identity).call(null,factory_14078.call(null,f_14056));dommy.core.update_event_listeners_BANG_.call(null,elem_14048,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14049,actual_type_14077,f_14056], null),canonical_f_14079);
if(cljs.core.truth_(elem_14048.addEventListener))
{elem_14048.addEventListener(cljs.core.name.call(null,actual_type_14077),canonical_f_14079);
} else
{elem_14048.attachEvent(cljs.core.name.call(null,actual_type_14077),canonical_f_14079);
}
{
var G__14080 = cljs.core.next.call(null,seq__14035_14070__$1);
var G__14081 = null;
var G__14082 = (0);
var G__14083 = (0);
seq__14035_14057 = G__14080;
chunk__14037_14058 = G__14081;
count__14038_14059 = G__14082;
i__14039_14060 = G__14083;
continue;
}
}
} else
{}
}
break;
}
{
var G__14084 = seq__14025_14050;
var G__14085 = chunk__14032_14051;
var G__14086 = count__14033_14052;
var G__14087 = (i__14034_14053 + (1));
seq__14025_14050 = G__14084;
chunk__14032_14051 = G__14085;
count__14033_14052 = G__14086;
i__14034_14053 = G__14087;
continue;
}
} else
{var temp__4126__auto___14088 = cljs.core.seq.call(null,seq__14025_14050);if(temp__4126__auto___14088)
{var seq__14025_14089__$1 = temp__4126__auto___14088;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14025_14089__$1))
{var c__4309__auto___14090 = cljs.core.chunk_first.call(null,seq__14025_14089__$1);{
var G__14091 = cljs.core.chunk_rest.call(null,seq__14025_14089__$1);
var G__14092 = c__4309__auto___14090;
var G__14093 = cljs.core.count.call(null,c__4309__auto___14090);
var G__14094 = (0);
seq__14025_14050 = G__14091;
chunk__14032_14051 = G__14092;
count__14033_14052 = G__14093;
i__14034_14053 = G__14094;
continue;
}
} else
{var vec__14044_14095 = cljs.core.first.call(null,seq__14025_14089__$1);var orig_type_14096 = cljs.core.nth.call(null,vec__14044_14095,(0),null);var f_14097 = cljs.core.nth.call(null,vec__14044_14095,(1),null);var seq__14026_14098 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14096,new cljs.core.PersistentArrayMap.fromArray([orig_type_14096,cljs.core.identity], true, false)));var chunk__14028_14099 = null;var count__14029_14100 = (0);var i__14030_14101 = (0);while(true){
if((i__14030_14101 < count__14029_14100))
{var vec__14045_14102 = cljs.core._nth.call(null,chunk__14028_14099,i__14030_14101);var actual_type_14103 = cljs.core.nth.call(null,vec__14045_14102,(0),null);var factory_14104 = cljs.core.nth.call(null,vec__14045_14102,(1),null);var canonical_f_14105 = (cljs.core.truth_(selector_14049)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14048,selector_14049):cljs.core.identity).call(null,factory_14104.call(null,f_14097));dommy.core.update_event_listeners_BANG_.call(null,elem_14048,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14049,actual_type_14103,f_14097], null),canonical_f_14105);
if(cljs.core.truth_(elem_14048.addEventListener))
{elem_14048.addEventListener(cljs.core.name.call(null,actual_type_14103),canonical_f_14105);
} else
{elem_14048.attachEvent(cljs.core.name.call(null,actual_type_14103),canonical_f_14105);
}
{
var G__14106 = seq__14026_14098;
var G__14107 = chunk__14028_14099;
var G__14108 = count__14029_14100;
var G__14109 = (i__14030_14101 + (1));
seq__14026_14098 = G__14106;
chunk__14028_14099 = G__14107;
count__14029_14100 = G__14108;
i__14030_14101 = G__14109;
continue;
}
} else
{var temp__4126__auto___14110__$1 = cljs.core.seq.call(null,seq__14026_14098);if(temp__4126__auto___14110__$1)
{var seq__14026_14111__$1 = temp__4126__auto___14110__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14026_14111__$1))
{var c__4309__auto___14112 = cljs.core.chunk_first.call(null,seq__14026_14111__$1);{
var G__14113 = cljs.core.chunk_rest.call(null,seq__14026_14111__$1);
var G__14114 = c__4309__auto___14112;
var G__14115 = cljs.core.count.call(null,c__4309__auto___14112);
var G__14116 = (0);
seq__14026_14098 = G__14113;
chunk__14028_14099 = G__14114;
count__14029_14100 = G__14115;
i__14030_14101 = G__14116;
continue;
}
} else
{var vec__14046_14117 = cljs.core.first.call(null,seq__14026_14111__$1);var actual_type_14118 = cljs.core.nth.call(null,vec__14046_14117,(0),null);var factory_14119 = cljs.core.nth.call(null,vec__14046_14117,(1),null);var canonical_f_14120 = (cljs.core.truth_(selector_14049)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14048,selector_14049):cljs.core.identity).call(null,factory_14119.call(null,f_14097));dommy.core.update_event_listeners_BANG_.call(null,elem_14048,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14049,actual_type_14118,f_14097], null),canonical_f_14120);
if(cljs.core.truth_(elem_14048.addEventListener))
{elem_14048.addEventListener(cljs.core.name.call(null,actual_type_14118),canonical_f_14120);
} else
{elem_14048.attachEvent(cljs.core.name.call(null,actual_type_14118),canonical_f_14120);
}
{
var G__14121 = cljs.core.next.call(null,seq__14026_14111__$1);
var G__14122 = null;
var G__14123 = (0);
var G__14124 = (0);
seq__14026_14098 = G__14121;
chunk__14028_14099 = G__14122;
count__14029_14100 = G__14123;
i__14030_14101 = G__14124;
continue;
}
}
} else
{}
}
break;
}
{
var G__14125 = cljs.core.next.call(null,seq__14025_14089__$1);
var G__14126 = null;
var G__14127 = (0);
var G__14128 = (0);
seq__14025_14050 = G__14125;
chunk__14032_14051 = G__14126;
count__14033_14052 = G__14127;
i__14034_14053 = G__14128;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__14129){
var elem_sel = cljs.core.first(arglist__14129);
var type_fs = cljs.core.rest(arglist__14129);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__14153_14176 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14177 = cljs.core.nth.call(null,vec__14153_14176,(0),null);var selector_14178 = cljs.core.nth.call(null,vec__14153_14176,(1),null);var seq__14154_14179 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__14161_14180 = null;var count__14162_14181 = (0);var i__14163_14182 = (0);while(true){
if((i__14163_14182 < count__14162_14181))
{var vec__14170_14183 = cljs.core._nth.call(null,chunk__14161_14180,i__14163_14182);var orig_type_14184 = cljs.core.nth.call(null,vec__14170_14183,(0),null);var f_14185 = cljs.core.nth.call(null,vec__14170_14183,(1),null);var seq__14164_14186 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14184,new cljs.core.PersistentArrayMap.fromArray([orig_type_14184,cljs.core.identity], true, false)));var chunk__14166_14187 = null;var count__14167_14188 = (0);var i__14168_14189 = (0);while(true){
if((i__14168_14189 < count__14167_14188))
{var vec__14171_14190 = cljs.core._nth.call(null,chunk__14166_14187,i__14168_14189);var actual_type_14191 = cljs.core.nth.call(null,vec__14171_14190,(0),null);var __14192 = cljs.core.nth.call(null,vec__14171_14190,(1),null);var keys_14193 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14178,actual_type_14191,f_14185], null);var canonical_f_14194 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14177),keys_14193);dommy.core.update_event_listeners_BANG_.call(null,elem_14177,dommy.utils.dissoc_in,keys_14193);
if(cljs.core.truth_(elem_14177.removeEventListener))
{elem_14177.removeEventListener(cljs.core.name.call(null,actual_type_14191),canonical_f_14194);
} else
{elem_14177.detachEvent(cljs.core.name.call(null,actual_type_14191),canonical_f_14194);
}
{
var G__14195 = seq__14164_14186;
var G__14196 = chunk__14166_14187;
var G__14197 = count__14167_14188;
var G__14198 = (i__14168_14189 + (1));
seq__14164_14186 = G__14195;
chunk__14166_14187 = G__14196;
count__14167_14188 = G__14197;
i__14168_14189 = G__14198;
continue;
}
} else
{var temp__4126__auto___14199 = cljs.core.seq.call(null,seq__14164_14186);if(temp__4126__auto___14199)
{var seq__14164_14200__$1 = temp__4126__auto___14199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14164_14200__$1))
{var c__4309__auto___14201 = cljs.core.chunk_first.call(null,seq__14164_14200__$1);{
var G__14202 = cljs.core.chunk_rest.call(null,seq__14164_14200__$1);
var G__14203 = c__4309__auto___14201;
var G__14204 = cljs.core.count.call(null,c__4309__auto___14201);
var G__14205 = (0);
seq__14164_14186 = G__14202;
chunk__14166_14187 = G__14203;
count__14167_14188 = G__14204;
i__14168_14189 = G__14205;
continue;
}
} else
{var vec__14172_14206 = cljs.core.first.call(null,seq__14164_14200__$1);var actual_type_14207 = cljs.core.nth.call(null,vec__14172_14206,(0),null);var __14208 = cljs.core.nth.call(null,vec__14172_14206,(1),null);var keys_14209 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14178,actual_type_14207,f_14185], null);var canonical_f_14210 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14177),keys_14209);dommy.core.update_event_listeners_BANG_.call(null,elem_14177,dommy.utils.dissoc_in,keys_14209);
if(cljs.core.truth_(elem_14177.removeEventListener))
{elem_14177.removeEventListener(cljs.core.name.call(null,actual_type_14207),canonical_f_14210);
} else
{elem_14177.detachEvent(cljs.core.name.call(null,actual_type_14207),canonical_f_14210);
}
{
var G__14211 = cljs.core.next.call(null,seq__14164_14200__$1);
var G__14212 = null;
var G__14213 = (0);
var G__14214 = (0);
seq__14164_14186 = G__14211;
chunk__14166_14187 = G__14212;
count__14167_14188 = G__14213;
i__14168_14189 = G__14214;
continue;
}
}
} else
{}
}
break;
}
{
var G__14215 = seq__14154_14179;
var G__14216 = chunk__14161_14180;
var G__14217 = count__14162_14181;
var G__14218 = (i__14163_14182 + (1));
seq__14154_14179 = G__14215;
chunk__14161_14180 = G__14216;
count__14162_14181 = G__14217;
i__14163_14182 = G__14218;
continue;
}
} else
{var temp__4126__auto___14219 = cljs.core.seq.call(null,seq__14154_14179);if(temp__4126__auto___14219)
{var seq__14154_14220__$1 = temp__4126__auto___14219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14154_14220__$1))
{var c__4309__auto___14221 = cljs.core.chunk_first.call(null,seq__14154_14220__$1);{
var G__14222 = cljs.core.chunk_rest.call(null,seq__14154_14220__$1);
var G__14223 = c__4309__auto___14221;
var G__14224 = cljs.core.count.call(null,c__4309__auto___14221);
var G__14225 = (0);
seq__14154_14179 = G__14222;
chunk__14161_14180 = G__14223;
count__14162_14181 = G__14224;
i__14163_14182 = G__14225;
continue;
}
} else
{var vec__14173_14226 = cljs.core.first.call(null,seq__14154_14220__$1);var orig_type_14227 = cljs.core.nth.call(null,vec__14173_14226,(0),null);var f_14228 = cljs.core.nth.call(null,vec__14173_14226,(1),null);var seq__14155_14229 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14227,new cljs.core.PersistentArrayMap.fromArray([orig_type_14227,cljs.core.identity], true, false)));var chunk__14157_14230 = null;var count__14158_14231 = (0);var i__14159_14232 = (0);while(true){
if((i__14159_14232 < count__14158_14231))
{var vec__14174_14233 = cljs.core._nth.call(null,chunk__14157_14230,i__14159_14232);var actual_type_14234 = cljs.core.nth.call(null,vec__14174_14233,(0),null);var __14235 = cljs.core.nth.call(null,vec__14174_14233,(1),null);var keys_14236 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14178,actual_type_14234,f_14228], null);var canonical_f_14237 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14177),keys_14236);dommy.core.update_event_listeners_BANG_.call(null,elem_14177,dommy.utils.dissoc_in,keys_14236);
if(cljs.core.truth_(elem_14177.removeEventListener))
{elem_14177.removeEventListener(cljs.core.name.call(null,actual_type_14234),canonical_f_14237);
} else
{elem_14177.detachEvent(cljs.core.name.call(null,actual_type_14234),canonical_f_14237);
}
{
var G__14238 = seq__14155_14229;
var G__14239 = chunk__14157_14230;
var G__14240 = count__14158_14231;
var G__14241 = (i__14159_14232 + (1));
seq__14155_14229 = G__14238;
chunk__14157_14230 = G__14239;
count__14158_14231 = G__14240;
i__14159_14232 = G__14241;
continue;
}
} else
{var temp__4126__auto___14242__$1 = cljs.core.seq.call(null,seq__14155_14229);if(temp__4126__auto___14242__$1)
{var seq__14155_14243__$1 = temp__4126__auto___14242__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14155_14243__$1))
{var c__4309__auto___14244 = cljs.core.chunk_first.call(null,seq__14155_14243__$1);{
var G__14245 = cljs.core.chunk_rest.call(null,seq__14155_14243__$1);
var G__14246 = c__4309__auto___14244;
var G__14247 = cljs.core.count.call(null,c__4309__auto___14244);
var G__14248 = (0);
seq__14155_14229 = G__14245;
chunk__14157_14230 = G__14246;
count__14158_14231 = G__14247;
i__14159_14232 = G__14248;
continue;
}
} else
{var vec__14175_14249 = cljs.core.first.call(null,seq__14155_14243__$1);var actual_type_14250 = cljs.core.nth.call(null,vec__14175_14249,(0),null);var __14251 = cljs.core.nth.call(null,vec__14175_14249,(1),null);var keys_14252 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14178,actual_type_14250,f_14228], null);var canonical_f_14253 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14177),keys_14252);dommy.core.update_event_listeners_BANG_.call(null,elem_14177,dommy.utils.dissoc_in,keys_14252);
if(cljs.core.truth_(elem_14177.removeEventListener))
{elem_14177.removeEventListener(cljs.core.name.call(null,actual_type_14250),canonical_f_14253);
} else
{elem_14177.detachEvent(cljs.core.name.call(null,actual_type_14250),canonical_f_14253);
}
{
var G__14254 = cljs.core.next.call(null,seq__14155_14243__$1);
var G__14255 = null;
var G__14256 = (0);
var G__14257 = (0);
seq__14155_14229 = G__14254;
chunk__14157_14230 = G__14255;
count__14158_14231 = G__14256;
i__14159_14232 = G__14257;
continue;
}
}
} else
{}
}
break;
}
{
var G__14258 = cljs.core.next.call(null,seq__14154_14220__$1);
var G__14259 = null;
var G__14260 = (0);
var G__14261 = (0);
seq__14154_14179 = G__14258;
chunk__14161_14180 = G__14259;
count__14162_14181 = G__14260;
i__14163_14182 = G__14261;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14262){
var elem_sel = cljs.core.first(arglist__14262);
var type_fs = cljs.core.rest(arglist__14262);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__14270_14277 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14278 = cljs.core.nth.call(null,vec__14270_14277,(0),null);var selector_14279 = cljs.core.nth.call(null,vec__14270_14277,(1),null);var seq__14271_14280 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__14272_14281 = null;var count__14273_14282 = (0);var i__14274_14283 = (0);while(true){
if((i__14274_14283 < count__14273_14282))
{var vec__14275_14284 = cljs.core._nth.call(null,chunk__14272_14281,i__14274_14283);var type_14285 = cljs.core.nth.call(null,vec__14275_14284,(0),null);var f_14286 = cljs.core.nth.call(null,vec__14275_14284,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_14285,((function (seq__14271_14280,chunk__14272_14281,count__14273_14282,i__14274_14283,vec__14275_14284,type_14285,f_14286,vec__14270_14277,elem_14278,selector_14279){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14285,this_fn);
return f_14286.call(null,e);
});})(seq__14271_14280,chunk__14272_14281,count__14273_14282,i__14274_14283,vec__14275_14284,type_14285,f_14286,vec__14270_14277,elem_14278,selector_14279))
);
{
var G__14287 = seq__14271_14280;
var G__14288 = chunk__14272_14281;
var G__14289 = count__14273_14282;
var G__14290 = (i__14274_14283 + (1));
seq__14271_14280 = G__14287;
chunk__14272_14281 = G__14288;
count__14273_14282 = G__14289;
i__14274_14283 = G__14290;
continue;
}
} else
{var temp__4126__auto___14291 = cljs.core.seq.call(null,seq__14271_14280);if(temp__4126__auto___14291)
{var seq__14271_14292__$1 = temp__4126__auto___14291;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14271_14292__$1))
{var c__4309__auto___14293 = cljs.core.chunk_first.call(null,seq__14271_14292__$1);{
var G__14294 = cljs.core.chunk_rest.call(null,seq__14271_14292__$1);
var G__14295 = c__4309__auto___14293;
var G__14296 = cljs.core.count.call(null,c__4309__auto___14293);
var G__14297 = (0);
seq__14271_14280 = G__14294;
chunk__14272_14281 = G__14295;
count__14273_14282 = G__14296;
i__14274_14283 = G__14297;
continue;
}
} else
{var vec__14276_14298 = cljs.core.first.call(null,seq__14271_14292__$1);var type_14299 = cljs.core.nth.call(null,vec__14276_14298,(0),null);var f_14300 = cljs.core.nth.call(null,vec__14276_14298,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_14299,((function (seq__14271_14280,chunk__14272_14281,count__14273_14282,i__14274_14283,vec__14276_14298,type_14299,f_14300,seq__14271_14292__$1,temp__4126__auto___14291,vec__14270_14277,elem_14278,selector_14279){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14299,this_fn);
return f_14300.call(null,e);
});})(seq__14271_14280,chunk__14272_14281,count__14273_14282,i__14274_14283,vec__14276_14298,type_14299,f_14300,seq__14271_14292__$1,temp__4126__auto___14291,vec__14270_14277,elem_14278,selector_14279))
);
{
var G__14301 = cljs.core.next.call(null,seq__14271_14292__$1);
var G__14302 = null;
var G__14303 = (0);
var G__14304 = (0);
seq__14271_14280 = G__14301;
chunk__14272_14281 = G__14302;
count__14273_14282 = G__14303;
i__14274_14283 = G__14304;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14305){
var elem_sel = cljs.core.first(arglist__14305);
var type_fs = cljs.core.rest(arglist__14305);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__14306){var vec__14308 = p__14306;var update_event_BANG_ = cljs.core.nth.call(null,vec__14308,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__3553__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__14306 = null;if (arguments.length > 2) {
  p__14306 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__14306);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__14309){
var node = cljs.core.first(arglist__14309);
arglist__14309 = cljs.core.next(arglist__14309);
var event_type = cljs.core.first(arglist__14309);
var p__14306 = cljs.core.rest(arglist__14309);
return fire_BANG___delegate(node,event_type,p__14306);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map