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
var append_BANG___2 = (function (parent,child){var G__27286 = dommy.template.__GT_node_like.call(null,parent);G__27286.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__27286;
});
var append_BANG___3 = (function() { 
var G__27291__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__27287_27292 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__27288_27293 = null;var count__27289_27294 = (0);var i__27290_27295 = (0);while(true){
if((i__27290_27295 < count__27289_27294))
{var c_27296 = cljs.core._nth.call(null,chunk__27288_27293,i__27290_27295);append_BANG_.call(null,parent__$1,c_27296);
{
var G__27297 = seq__27287_27292;
var G__27298 = chunk__27288_27293;
var G__27299 = count__27289_27294;
var G__27300 = (i__27290_27295 + (1));
seq__27287_27292 = G__27297;
chunk__27288_27293 = G__27298;
count__27289_27294 = G__27299;
i__27290_27295 = G__27300;
continue;
}
} else
{var temp__4126__auto___27301 = cljs.core.seq.call(null,seq__27287_27292);if(temp__4126__auto___27301)
{var seq__27287_27302__$1 = temp__4126__auto___27301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27287_27302__$1))
{var c__4309__auto___27303 = cljs.core.chunk_first.call(null,seq__27287_27302__$1);{
var G__27304 = cljs.core.chunk_rest.call(null,seq__27287_27302__$1);
var G__27305 = c__4309__auto___27303;
var G__27306 = cljs.core.count.call(null,c__4309__auto___27303);
var G__27307 = (0);
seq__27287_27292 = G__27304;
chunk__27288_27293 = G__27305;
count__27289_27294 = G__27306;
i__27290_27295 = G__27307;
continue;
}
} else
{var c_27308 = cljs.core.first.call(null,seq__27287_27302__$1);append_BANG_.call(null,parent__$1,c_27308);
{
var G__27309 = cljs.core.next.call(null,seq__27287_27302__$1);
var G__27310 = null;
var G__27311 = (0);
var G__27312 = (0);
seq__27287_27292 = G__27309;
chunk__27288_27293 = G__27310;
count__27289_27294 = G__27311;
i__27290_27295 = G__27312;
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
var G__27291 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27291__delegate.call(this,parent,child,more_children);};
G__27291.cljs$lang$maxFixedArity = 2;
G__27291.cljs$lang$applyTo = (function (arglist__27313){
var parent = cljs.core.first(arglist__27313);
arglist__27313 = cljs.core.next(arglist__27313);
var child = cljs.core.first(arglist__27313);
var more_children = cljs.core.rest(arglist__27313);
return G__27291__delegate(parent,child,more_children);
});
G__27291.cljs$core$IFn$_invoke$arity$variadic = G__27291__delegate;
return G__27291;
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
var G__27322__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__27318_27323 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__27319_27324 = null;var count__27320_27325 = (0);var i__27321_27326 = (0);while(true){
if((i__27321_27326 < count__27320_27325))
{var c_27327 = cljs.core._nth.call(null,chunk__27319_27324,i__27321_27326);prepend_BANG_.call(null,parent__$1,c_27327);
{
var G__27328 = seq__27318_27323;
var G__27329 = chunk__27319_27324;
var G__27330 = count__27320_27325;
var G__27331 = (i__27321_27326 + (1));
seq__27318_27323 = G__27328;
chunk__27319_27324 = G__27329;
count__27320_27325 = G__27330;
i__27321_27326 = G__27331;
continue;
}
} else
{var temp__4126__auto___27332 = cljs.core.seq.call(null,seq__27318_27323);if(temp__4126__auto___27332)
{var seq__27318_27333__$1 = temp__4126__auto___27332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27318_27333__$1))
{var c__4309__auto___27334 = cljs.core.chunk_first.call(null,seq__27318_27333__$1);{
var G__27335 = cljs.core.chunk_rest.call(null,seq__27318_27333__$1);
var G__27336 = c__4309__auto___27334;
var G__27337 = cljs.core.count.call(null,c__4309__auto___27334);
var G__27338 = (0);
seq__27318_27323 = G__27335;
chunk__27319_27324 = G__27336;
count__27320_27325 = G__27337;
i__27321_27326 = G__27338;
continue;
}
} else
{var c_27339 = cljs.core.first.call(null,seq__27318_27333__$1);prepend_BANG_.call(null,parent__$1,c_27339);
{
var G__27340 = cljs.core.next.call(null,seq__27318_27333__$1);
var G__27341 = null;
var G__27342 = (0);
var G__27343 = (0);
seq__27318_27323 = G__27340;
chunk__27319_27324 = G__27341;
count__27320_27325 = G__27342;
i__27321_27326 = G__27343;
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
var G__27322 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27322__delegate.call(this,parent,child,more_children);};
G__27322.cljs$lang$maxFixedArity = 2;
G__27322.cljs$lang$applyTo = (function (arglist__27344){
var parent = cljs.core.first(arglist__27344);
arglist__27344 = cljs.core.next(arglist__27344);
var child = cljs.core.first(arglist__27344);
var more_children = cljs.core.rest(arglist__27344);
return G__27322__delegate(parent,child,more_children);
});
G__27322.cljs$core$IFn$_invoke$arity$variadic = G__27322__delegate;
return G__27322;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___27345 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___27345))
{var next_27346 = temp__4124__auto___27345;parent.insertBefore(actual_node,next_27346);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__27348 = dommy.template.__GT_node_like.call(null,parent);G__27348.innerHTML = "";
dommy.core.append_BANG_.call(null,G__27348,node_like);
return G__27348;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__27350 = elem__$1.parentNode;G__27350.removeChild(elem__$1);
return G__27350;
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
return (function (p__27356){var vec__27357 = p__27356;var k = cljs.core.nth.call(null,vec__27357,(0),null);var v = cljs.core.nth.call(null,vec__27357,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t27358 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t27358 = (function (v,k,vec__27357,p__27356,container,key_selectors_map,template,selector_map,meta27359){
this.v = v;
this.k = k;
this.vec__27357 = vec__27357;
this.p__27356 = p__27356;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta27359 = meta27359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t27358.cljs$lang$type = true;
dommy.core.t27358.cljs$lang$ctorStr = "dommy.core/t27358";
dommy.core.t27358.cljs$lang$ctorPrWriter = ((function (vec__27357,k,v,container){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"dommy.core/t27358");
});})(vec__27357,k,v,container))
;
dommy.core.t27358.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__27357,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__27357,k,v,container))
;
dommy.core.t27358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__27357,k,v,container){
return (function (_27360){var self__ = this;
var _27360__$1 = this;return self__.meta27359;
});})(vec__27357,k,v,container))
;
dommy.core.t27358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__27357,k,v,container){
return (function (_27360,meta27359__$1){var self__ = this;
var _27360__$1 = this;return (new dommy.core.t27358(self__.v,self__.k,self__.vec__27357,self__.p__27356,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta27359__$1));
});})(vec__27357,k,v,container))
;
dommy.core.__GT_t27358 = ((function (vec__27357,k,v,container){
return (function __GT_t27358(v__$1,k__$1,vec__27357__$1,p__27356__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta27359){return (new dommy.core.t27358(v__$1,k__$1,vec__27357__$1,p__27356__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta27359));
});})(vec__27357,k,v,container))
;
}
return (new dommy.core.t27358(v,k,vec__27357,p__27356,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__27361_SHARP_){return p1__27361_SHARP_.parentNode;
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
return (function (p1__27362_SHARP_){return !((p1__27362_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__27363){var vec__27364 = p__27363;var special_mouse_event = cljs.core.nth.call(null,vec__27364,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__27364,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__27364,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__27364,special_mouse_event,real_mouse_event){
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
;})(vec__27364,special_mouse_event,real_mouse_event))
});})(vec__27364,special_mouse_event,real_mouse_event))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__27365){
var elem = cljs.core.first(arglist__27365);
arglist__27365 = cljs.core.next(arglist__27365);
var f = cljs.core.first(arglist__27365);
var args = cljs.core.rest(arglist__27365);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__27366_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__27366_SHARP_));
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
var vec__27390_27413 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_27414 = cljs.core.nth.call(null,vec__27390_27413,(0),null);var selector_27415 = cljs.core.nth.call(null,vec__27390_27413,(1),null);var seq__27391_27416 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__27398_27417 = null;var count__27399_27418 = (0);var i__27400_27419 = (0);while(true){
if((i__27400_27419 < count__27399_27418))
{var vec__27407_27420 = cljs.core._nth.call(null,chunk__27398_27417,i__27400_27419);var orig_type_27421 = cljs.core.nth.call(null,vec__27407_27420,(0),null);var f_27422 = cljs.core.nth.call(null,vec__27407_27420,(1),null);var seq__27401_27423 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27421,new cljs.core.PersistentArrayMap.fromArray([orig_type_27421,cljs.core.identity], true, false)));var chunk__27403_27424 = null;var count__27404_27425 = (0);var i__27405_27426 = (0);while(true){
if((i__27405_27426 < count__27404_27425))
{var vec__27408_27427 = cljs.core._nth.call(null,chunk__27403_27424,i__27405_27426);var actual_type_27428 = cljs.core.nth.call(null,vec__27408_27427,(0),null);var factory_27429 = cljs.core.nth.call(null,vec__27408_27427,(1),null);var canonical_f_27430 = (cljs.core.truth_(selector_27415)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27414,selector_27415):cljs.core.identity).call(null,factory_27429.call(null,f_27422));dommy.core.update_event_listeners_BANG_.call(null,elem_27414,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27415,actual_type_27428,f_27422], null),canonical_f_27430);
if(cljs.core.truth_(elem_27414.addEventListener))
{elem_27414.addEventListener(cljs.core.name.call(null,actual_type_27428),canonical_f_27430);
} else
{elem_27414.attachEvent(cljs.core.name.call(null,actual_type_27428),canonical_f_27430);
}
{
var G__27431 = seq__27401_27423;
var G__27432 = chunk__27403_27424;
var G__27433 = count__27404_27425;
var G__27434 = (i__27405_27426 + (1));
seq__27401_27423 = G__27431;
chunk__27403_27424 = G__27432;
count__27404_27425 = G__27433;
i__27405_27426 = G__27434;
continue;
}
} else
{var temp__4126__auto___27435 = cljs.core.seq.call(null,seq__27401_27423);if(temp__4126__auto___27435)
{var seq__27401_27436__$1 = temp__4126__auto___27435;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27401_27436__$1))
{var c__4309__auto___27437 = cljs.core.chunk_first.call(null,seq__27401_27436__$1);{
var G__27438 = cljs.core.chunk_rest.call(null,seq__27401_27436__$1);
var G__27439 = c__4309__auto___27437;
var G__27440 = cljs.core.count.call(null,c__4309__auto___27437);
var G__27441 = (0);
seq__27401_27423 = G__27438;
chunk__27403_27424 = G__27439;
count__27404_27425 = G__27440;
i__27405_27426 = G__27441;
continue;
}
} else
{var vec__27409_27442 = cljs.core.first.call(null,seq__27401_27436__$1);var actual_type_27443 = cljs.core.nth.call(null,vec__27409_27442,(0),null);var factory_27444 = cljs.core.nth.call(null,vec__27409_27442,(1),null);var canonical_f_27445 = (cljs.core.truth_(selector_27415)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27414,selector_27415):cljs.core.identity).call(null,factory_27444.call(null,f_27422));dommy.core.update_event_listeners_BANG_.call(null,elem_27414,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27415,actual_type_27443,f_27422], null),canonical_f_27445);
if(cljs.core.truth_(elem_27414.addEventListener))
{elem_27414.addEventListener(cljs.core.name.call(null,actual_type_27443),canonical_f_27445);
} else
{elem_27414.attachEvent(cljs.core.name.call(null,actual_type_27443),canonical_f_27445);
}
{
var G__27446 = cljs.core.next.call(null,seq__27401_27436__$1);
var G__27447 = null;
var G__27448 = (0);
var G__27449 = (0);
seq__27401_27423 = G__27446;
chunk__27403_27424 = G__27447;
count__27404_27425 = G__27448;
i__27405_27426 = G__27449;
continue;
}
}
} else
{}
}
break;
}
{
var G__27450 = seq__27391_27416;
var G__27451 = chunk__27398_27417;
var G__27452 = count__27399_27418;
var G__27453 = (i__27400_27419 + (1));
seq__27391_27416 = G__27450;
chunk__27398_27417 = G__27451;
count__27399_27418 = G__27452;
i__27400_27419 = G__27453;
continue;
}
} else
{var temp__4126__auto___27454 = cljs.core.seq.call(null,seq__27391_27416);if(temp__4126__auto___27454)
{var seq__27391_27455__$1 = temp__4126__auto___27454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27391_27455__$1))
{var c__4309__auto___27456 = cljs.core.chunk_first.call(null,seq__27391_27455__$1);{
var G__27457 = cljs.core.chunk_rest.call(null,seq__27391_27455__$1);
var G__27458 = c__4309__auto___27456;
var G__27459 = cljs.core.count.call(null,c__4309__auto___27456);
var G__27460 = (0);
seq__27391_27416 = G__27457;
chunk__27398_27417 = G__27458;
count__27399_27418 = G__27459;
i__27400_27419 = G__27460;
continue;
}
} else
{var vec__27410_27461 = cljs.core.first.call(null,seq__27391_27455__$1);var orig_type_27462 = cljs.core.nth.call(null,vec__27410_27461,(0),null);var f_27463 = cljs.core.nth.call(null,vec__27410_27461,(1),null);var seq__27392_27464 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27462,new cljs.core.PersistentArrayMap.fromArray([orig_type_27462,cljs.core.identity], true, false)));var chunk__27394_27465 = null;var count__27395_27466 = (0);var i__27396_27467 = (0);while(true){
if((i__27396_27467 < count__27395_27466))
{var vec__27411_27468 = cljs.core._nth.call(null,chunk__27394_27465,i__27396_27467);var actual_type_27469 = cljs.core.nth.call(null,vec__27411_27468,(0),null);var factory_27470 = cljs.core.nth.call(null,vec__27411_27468,(1),null);var canonical_f_27471 = (cljs.core.truth_(selector_27415)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27414,selector_27415):cljs.core.identity).call(null,factory_27470.call(null,f_27463));dommy.core.update_event_listeners_BANG_.call(null,elem_27414,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27415,actual_type_27469,f_27463], null),canonical_f_27471);
if(cljs.core.truth_(elem_27414.addEventListener))
{elem_27414.addEventListener(cljs.core.name.call(null,actual_type_27469),canonical_f_27471);
} else
{elem_27414.attachEvent(cljs.core.name.call(null,actual_type_27469),canonical_f_27471);
}
{
var G__27472 = seq__27392_27464;
var G__27473 = chunk__27394_27465;
var G__27474 = count__27395_27466;
var G__27475 = (i__27396_27467 + (1));
seq__27392_27464 = G__27472;
chunk__27394_27465 = G__27473;
count__27395_27466 = G__27474;
i__27396_27467 = G__27475;
continue;
}
} else
{var temp__4126__auto___27476__$1 = cljs.core.seq.call(null,seq__27392_27464);if(temp__4126__auto___27476__$1)
{var seq__27392_27477__$1 = temp__4126__auto___27476__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27392_27477__$1))
{var c__4309__auto___27478 = cljs.core.chunk_first.call(null,seq__27392_27477__$1);{
var G__27479 = cljs.core.chunk_rest.call(null,seq__27392_27477__$1);
var G__27480 = c__4309__auto___27478;
var G__27481 = cljs.core.count.call(null,c__4309__auto___27478);
var G__27482 = (0);
seq__27392_27464 = G__27479;
chunk__27394_27465 = G__27480;
count__27395_27466 = G__27481;
i__27396_27467 = G__27482;
continue;
}
} else
{var vec__27412_27483 = cljs.core.first.call(null,seq__27392_27477__$1);var actual_type_27484 = cljs.core.nth.call(null,vec__27412_27483,(0),null);var factory_27485 = cljs.core.nth.call(null,vec__27412_27483,(1),null);var canonical_f_27486 = (cljs.core.truth_(selector_27415)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27414,selector_27415):cljs.core.identity).call(null,factory_27485.call(null,f_27463));dommy.core.update_event_listeners_BANG_.call(null,elem_27414,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27415,actual_type_27484,f_27463], null),canonical_f_27486);
if(cljs.core.truth_(elem_27414.addEventListener))
{elem_27414.addEventListener(cljs.core.name.call(null,actual_type_27484),canonical_f_27486);
} else
{elem_27414.attachEvent(cljs.core.name.call(null,actual_type_27484),canonical_f_27486);
}
{
var G__27487 = cljs.core.next.call(null,seq__27392_27477__$1);
var G__27488 = null;
var G__27489 = (0);
var G__27490 = (0);
seq__27392_27464 = G__27487;
chunk__27394_27465 = G__27488;
count__27395_27466 = G__27489;
i__27396_27467 = G__27490;
continue;
}
}
} else
{}
}
break;
}
{
var G__27491 = cljs.core.next.call(null,seq__27391_27455__$1);
var G__27492 = null;
var G__27493 = (0);
var G__27494 = (0);
seq__27391_27416 = G__27491;
chunk__27398_27417 = G__27492;
count__27399_27418 = G__27493;
i__27400_27419 = G__27494;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__27495){
var elem_sel = cljs.core.first(arglist__27495);
var type_fs = cljs.core.rest(arglist__27495);
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
var vec__27519_27542 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_27543 = cljs.core.nth.call(null,vec__27519_27542,(0),null);var selector_27544 = cljs.core.nth.call(null,vec__27519_27542,(1),null);var seq__27520_27545 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__27527_27546 = null;var count__27528_27547 = (0);var i__27529_27548 = (0);while(true){
if((i__27529_27548 < count__27528_27547))
{var vec__27536_27549 = cljs.core._nth.call(null,chunk__27527_27546,i__27529_27548);var orig_type_27550 = cljs.core.nth.call(null,vec__27536_27549,(0),null);var f_27551 = cljs.core.nth.call(null,vec__27536_27549,(1),null);var seq__27530_27552 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27550,new cljs.core.PersistentArrayMap.fromArray([orig_type_27550,cljs.core.identity], true, false)));var chunk__27532_27553 = null;var count__27533_27554 = (0);var i__27534_27555 = (0);while(true){
if((i__27534_27555 < count__27533_27554))
{var vec__27537_27556 = cljs.core._nth.call(null,chunk__27532_27553,i__27534_27555);var actual_type_27557 = cljs.core.nth.call(null,vec__27537_27556,(0),null);var __27558 = cljs.core.nth.call(null,vec__27537_27556,(1),null);var keys_27559 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27544,actual_type_27557,f_27551], null);var canonical_f_27560 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27543),keys_27559);dommy.core.update_event_listeners_BANG_.call(null,elem_27543,dommy.utils.dissoc_in,keys_27559);
if(cljs.core.truth_(elem_27543.removeEventListener))
{elem_27543.removeEventListener(cljs.core.name.call(null,actual_type_27557),canonical_f_27560);
} else
{elem_27543.detachEvent(cljs.core.name.call(null,actual_type_27557),canonical_f_27560);
}
{
var G__27561 = seq__27530_27552;
var G__27562 = chunk__27532_27553;
var G__27563 = count__27533_27554;
var G__27564 = (i__27534_27555 + (1));
seq__27530_27552 = G__27561;
chunk__27532_27553 = G__27562;
count__27533_27554 = G__27563;
i__27534_27555 = G__27564;
continue;
}
} else
{var temp__4126__auto___27565 = cljs.core.seq.call(null,seq__27530_27552);if(temp__4126__auto___27565)
{var seq__27530_27566__$1 = temp__4126__auto___27565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27530_27566__$1))
{var c__4309__auto___27567 = cljs.core.chunk_first.call(null,seq__27530_27566__$1);{
var G__27568 = cljs.core.chunk_rest.call(null,seq__27530_27566__$1);
var G__27569 = c__4309__auto___27567;
var G__27570 = cljs.core.count.call(null,c__4309__auto___27567);
var G__27571 = (0);
seq__27530_27552 = G__27568;
chunk__27532_27553 = G__27569;
count__27533_27554 = G__27570;
i__27534_27555 = G__27571;
continue;
}
} else
{var vec__27538_27572 = cljs.core.first.call(null,seq__27530_27566__$1);var actual_type_27573 = cljs.core.nth.call(null,vec__27538_27572,(0),null);var __27574 = cljs.core.nth.call(null,vec__27538_27572,(1),null);var keys_27575 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27544,actual_type_27573,f_27551], null);var canonical_f_27576 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27543),keys_27575);dommy.core.update_event_listeners_BANG_.call(null,elem_27543,dommy.utils.dissoc_in,keys_27575);
if(cljs.core.truth_(elem_27543.removeEventListener))
{elem_27543.removeEventListener(cljs.core.name.call(null,actual_type_27573),canonical_f_27576);
} else
{elem_27543.detachEvent(cljs.core.name.call(null,actual_type_27573),canonical_f_27576);
}
{
var G__27577 = cljs.core.next.call(null,seq__27530_27566__$1);
var G__27578 = null;
var G__27579 = (0);
var G__27580 = (0);
seq__27530_27552 = G__27577;
chunk__27532_27553 = G__27578;
count__27533_27554 = G__27579;
i__27534_27555 = G__27580;
continue;
}
}
} else
{}
}
break;
}
{
var G__27581 = seq__27520_27545;
var G__27582 = chunk__27527_27546;
var G__27583 = count__27528_27547;
var G__27584 = (i__27529_27548 + (1));
seq__27520_27545 = G__27581;
chunk__27527_27546 = G__27582;
count__27528_27547 = G__27583;
i__27529_27548 = G__27584;
continue;
}
} else
{var temp__4126__auto___27585 = cljs.core.seq.call(null,seq__27520_27545);if(temp__4126__auto___27585)
{var seq__27520_27586__$1 = temp__4126__auto___27585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27520_27586__$1))
{var c__4309__auto___27587 = cljs.core.chunk_first.call(null,seq__27520_27586__$1);{
var G__27588 = cljs.core.chunk_rest.call(null,seq__27520_27586__$1);
var G__27589 = c__4309__auto___27587;
var G__27590 = cljs.core.count.call(null,c__4309__auto___27587);
var G__27591 = (0);
seq__27520_27545 = G__27588;
chunk__27527_27546 = G__27589;
count__27528_27547 = G__27590;
i__27529_27548 = G__27591;
continue;
}
} else
{var vec__27539_27592 = cljs.core.first.call(null,seq__27520_27586__$1);var orig_type_27593 = cljs.core.nth.call(null,vec__27539_27592,(0),null);var f_27594 = cljs.core.nth.call(null,vec__27539_27592,(1),null);var seq__27521_27595 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27593,new cljs.core.PersistentArrayMap.fromArray([orig_type_27593,cljs.core.identity], true, false)));var chunk__27523_27596 = null;var count__27524_27597 = (0);var i__27525_27598 = (0);while(true){
if((i__27525_27598 < count__27524_27597))
{var vec__27540_27599 = cljs.core._nth.call(null,chunk__27523_27596,i__27525_27598);var actual_type_27600 = cljs.core.nth.call(null,vec__27540_27599,(0),null);var __27601 = cljs.core.nth.call(null,vec__27540_27599,(1),null);var keys_27602 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27544,actual_type_27600,f_27594], null);var canonical_f_27603 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27543),keys_27602);dommy.core.update_event_listeners_BANG_.call(null,elem_27543,dommy.utils.dissoc_in,keys_27602);
if(cljs.core.truth_(elem_27543.removeEventListener))
{elem_27543.removeEventListener(cljs.core.name.call(null,actual_type_27600),canonical_f_27603);
} else
{elem_27543.detachEvent(cljs.core.name.call(null,actual_type_27600),canonical_f_27603);
}
{
var G__27604 = seq__27521_27595;
var G__27605 = chunk__27523_27596;
var G__27606 = count__27524_27597;
var G__27607 = (i__27525_27598 + (1));
seq__27521_27595 = G__27604;
chunk__27523_27596 = G__27605;
count__27524_27597 = G__27606;
i__27525_27598 = G__27607;
continue;
}
} else
{var temp__4126__auto___27608__$1 = cljs.core.seq.call(null,seq__27521_27595);if(temp__4126__auto___27608__$1)
{var seq__27521_27609__$1 = temp__4126__auto___27608__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27521_27609__$1))
{var c__4309__auto___27610 = cljs.core.chunk_first.call(null,seq__27521_27609__$1);{
var G__27611 = cljs.core.chunk_rest.call(null,seq__27521_27609__$1);
var G__27612 = c__4309__auto___27610;
var G__27613 = cljs.core.count.call(null,c__4309__auto___27610);
var G__27614 = (0);
seq__27521_27595 = G__27611;
chunk__27523_27596 = G__27612;
count__27524_27597 = G__27613;
i__27525_27598 = G__27614;
continue;
}
} else
{var vec__27541_27615 = cljs.core.first.call(null,seq__27521_27609__$1);var actual_type_27616 = cljs.core.nth.call(null,vec__27541_27615,(0),null);var __27617 = cljs.core.nth.call(null,vec__27541_27615,(1),null);var keys_27618 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27544,actual_type_27616,f_27594], null);var canonical_f_27619 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27543),keys_27618);dommy.core.update_event_listeners_BANG_.call(null,elem_27543,dommy.utils.dissoc_in,keys_27618);
if(cljs.core.truth_(elem_27543.removeEventListener))
{elem_27543.removeEventListener(cljs.core.name.call(null,actual_type_27616),canonical_f_27619);
} else
{elem_27543.detachEvent(cljs.core.name.call(null,actual_type_27616),canonical_f_27619);
}
{
var G__27620 = cljs.core.next.call(null,seq__27521_27609__$1);
var G__27621 = null;
var G__27622 = (0);
var G__27623 = (0);
seq__27521_27595 = G__27620;
chunk__27523_27596 = G__27621;
count__27524_27597 = G__27622;
i__27525_27598 = G__27623;
continue;
}
}
} else
{}
}
break;
}
{
var G__27624 = cljs.core.next.call(null,seq__27520_27586__$1);
var G__27625 = null;
var G__27626 = (0);
var G__27627 = (0);
seq__27520_27545 = G__27624;
chunk__27527_27546 = G__27625;
count__27528_27547 = G__27626;
i__27529_27548 = G__27627;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__27628){
var elem_sel = cljs.core.first(arglist__27628);
var type_fs = cljs.core.rest(arglist__27628);
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
var vec__27636_27643 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_27644 = cljs.core.nth.call(null,vec__27636_27643,(0),null);var selector_27645 = cljs.core.nth.call(null,vec__27636_27643,(1),null);var seq__27637_27646 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__27638_27647 = null;var count__27639_27648 = (0);var i__27640_27649 = (0);while(true){
if((i__27640_27649 < count__27639_27648))
{var vec__27641_27650 = cljs.core._nth.call(null,chunk__27638_27647,i__27640_27649);var type_27651 = cljs.core.nth.call(null,vec__27641_27650,(0),null);var f_27652 = cljs.core.nth.call(null,vec__27641_27650,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_27651,((function (seq__27637_27646,chunk__27638_27647,count__27639_27648,i__27640_27649,vec__27641_27650,type_27651,f_27652,vec__27636_27643,elem_27644,selector_27645){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_27651,this_fn);
return f_27652.call(null,e);
});})(seq__27637_27646,chunk__27638_27647,count__27639_27648,i__27640_27649,vec__27641_27650,type_27651,f_27652,vec__27636_27643,elem_27644,selector_27645))
);
{
var G__27653 = seq__27637_27646;
var G__27654 = chunk__27638_27647;
var G__27655 = count__27639_27648;
var G__27656 = (i__27640_27649 + (1));
seq__27637_27646 = G__27653;
chunk__27638_27647 = G__27654;
count__27639_27648 = G__27655;
i__27640_27649 = G__27656;
continue;
}
} else
{var temp__4126__auto___27657 = cljs.core.seq.call(null,seq__27637_27646);if(temp__4126__auto___27657)
{var seq__27637_27658__$1 = temp__4126__auto___27657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27637_27658__$1))
{var c__4309__auto___27659 = cljs.core.chunk_first.call(null,seq__27637_27658__$1);{
var G__27660 = cljs.core.chunk_rest.call(null,seq__27637_27658__$1);
var G__27661 = c__4309__auto___27659;
var G__27662 = cljs.core.count.call(null,c__4309__auto___27659);
var G__27663 = (0);
seq__27637_27646 = G__27660;
chunk__27638_27647 = G__27661;
count__27639_27648 = G__27662;
i__27640_27649 = G__27663;
continue;
}
} else
{var vec__27642_27664 = cljs.core.first.call(null,seq__27637_27658__$1);var type_27665 = cljs.core.nth.call(null,vec__27642_27664,(0),null);var f_27666 = cljs.core.nth.call(null,vec__27642_27664,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_27665,((function (seq__27637_27646,chunk__27638_27647,count__27639_27648,i__27640_27649,vec__27642_27664,type_27665,f_27666,seq__27637_27658__$1,temp__4126__auto___27657,vec__27636_27643,elem_27644,selector_27645){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_27665,this_fn);
return f_27666.call(null,e);
});})(seq__27637_27646,chunk__27638_27647,count__27639_27648,i__27640_27649,vec__27642_27664,type_27665,f_27666,seq__27637_27658__$1,temp__4126__auto___27657,vec__27636_27643,elem_27644,selector_27645))
);
{
var G__27667 = cljs.core.next.call(null,seq__27637_27658__$1);
var G__27668 = null;
var G__27669 = (0);
var G__27670 = (0);
seq__27637_27646 = G__27667;
chunk__27638_27647 = G__27668;
count__27639_27648 = G__27669;
i__27640_27649 = G__27670;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__27671){
var elem_sel = cljs.core.first(arglist__27671);
var type_fs = cljs.core.rest(arglist__27671);
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
var fire_BANG___delegate = function (node,event_type,p__27672){var vec__27674 = p__27672;var update_event_BANG_ = cljs.core.nth.call(null,vec__27674,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__27672 = null;if (arguments.length > 2) {
  p__27672 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__27672);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__27675){
var node = cljs.core.first(arglist__27675);
arglist__27675 = cljs.core.next(arglist__27675);
var event_type = cljs.core.first(arglist__27675);
var p__27672 = cljs.core.rest(arglist__27675);
return fire_BANG___delegate(node,event_type,p__27672);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map