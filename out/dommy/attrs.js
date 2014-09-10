// Compiled by ClojureScript 0.0-2311
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3541__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__3541__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3541__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__14324 = (i + class$.length);
start_from = G__14324;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___14349 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___14349))
{var class_list_14350 = temp__4124__auto___14349;var seq__14337_14351 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14338_14352 = null;var count__14339_14353 = (0);var i__14340_14354 = (0);while(true){
if((i__14340_14354 < count__14339_14353))
{var class_14355 = cljs.core._nth.call(null,chunk__14338_14352,i__14340_14354);class_list_14350.add(class_14355);
{
var G__14356 = seq__14337_14351;
var G__14357 = chunk__14338_14352;
var G__14358 = count__14339_14353;
var G__14359 = (i__14340_14354 + (1));
seq__14337_14351 = G__14356;
chunk__14338_14352 = G__14357;
count__14339_14353 = G__14358;
i__14340_14354 = G__14359;
continue;
}
} else
{var temp__4126__auto___14360 = cljs.core.seq.call(null,seq__14337_14351);if(temp__4126__auto___14360)
{var seq__14337_14361__$1 = temp__4126__auto___14360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14337_14361__$1))
{var c__4309__auto___14362 = cljs.core.chunk_first.call(null,seq__14337_14361__$1);{
var G__14363 = cljs.core.chunk_rest.call(null,seq__14337_14361__$1);
var G__14364 = c__4309__auto___14362;
var G__14365 = cljs.core.count.call(null,c__4309__auto___14362);
var G__14366 = (0);
seq__14337_14351 = G__14363;
chunk__14338_14352 = G__14364;
count__14339_14353 = G__14365;
i__14340_14354 = G__14366;
continue;
}
} else
{var class_14367 = cljs.core.first.call(null,seq__14337_14361__$1);class_list_14350.add(class_14367);
{
var G__14368 = cljs.core.next.call(null,seq__14337_14361__$1);
var G__14369 = null;
var G__14370 = (0);
var G__14371 = (0);
seq__14337_14351 = G__14368;
chunk__14338_14352 = G__14369;
count__14339_14353 = G__14370;
i__14340_14354 = G__14371;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__14341_14372 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14342_14373 = null;var count__14343_14374 = (0);var i__14344_14375 = (0);while(true){
if((i__14344_14375 < count__14343_14374))
{var class_14376 = cljs.core._nth.call(null,chunk__14342_14373,i__14344_14375);var class_name_14377 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14377,class_14376)))
{} else
{elem__$1.className = (((class_name_14377 === ""))?class_14376:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_14377)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_14376)));
}
{
var G__14378 = seq__14341_14372;
var G__14379 = chunk__14342_14373;
var G__14380 = count__14343_14374;
var G__14381 = (i__14344_14375 + (1));
seq__14341_14372 = G__14378;
chunk__14342_14373 = G__14379;
count__14343_14374 = G__14380;
i__14344_14375 = G__14381;
continue;
}
} else
{var temp__4126__auto___14382 = cljs.core.seq.call(null,seq__14341_14372);if(temp__4126__auto___14382)
{var seq__14341_14383__$1 = temp__4126__auto___14382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14341_14383__$1))
{var c__4309__auto___14384 = cljs.core.chunk_first.call(null,seq__14341_14383__$1);{
var G__14385 = cljs.core.chunk_rest.call(null,seq__14341_14383__$1);
var G__14386 = c__4309__auto___14384;
var G__14387 = cljs.core.count.call(null,c__4309__auto___14384);
var G__14388 = (0);
seq__14341_14372 = G__14385;
chunk__14342_14373 = G__14386;
count__14343_14374 = G__14387;
i__14344_14375 = G__14388;
continue;
}
} else
{var class_14389 = cljs.core.first.call(null,seq__14341_14383__$1);var class_name_14390 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14390,class_14389)))
{} else
{elem__$1.className = (((class_name_14390 === ""))?class_14389:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_14390)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_14389)));
}
{
var G__14391 = cljs.core.next.call(null,seq__14341_14383__$1);
var G__14392 = null;
var G__14393 = (0);
var G__14394 = (0);
seq__14341_14372 = G__14391;
chunk__14342_14373 = G__14392;
count__14343_14374 = G__14393;
i__14344_14375 = G__14394;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__14395__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14345_14396 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14346_14397 = null;var count__14347_14398 = (0);var i__14348_14399 = (0);while(true){
if((i__14348_14399 < count__14347_14398))
{var c_14400 = cljs.core._nth.call(null,chunk__14346_14397,i__14348_14399);add_class_BANG_.call(null,elem__$1,c_14400);
{
var G__14401 = seq__14345_14396;
var G__14402 = chunk__14346_14397;
var G__14403 = count__14347_14398;
var G__14404 = (i__14348_14399 + (1));
seq__14345_14396 = G__14401;
chunk__14346_14397 = G__14402;
count__14347_14398 = G__14403;
i__14348_14399 = G__14404;
continue;
}
} else
{var temp__4126__auto___14405 = cljs.core.seq.call(null,seq__14345_14396);if(temp__4126__auto___14405)
{var seq__14345_14406__$1 = temp__4126__auto___14405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14345_14406__$1))
{var c__4309__auto___14407 = cljs.core.chunk_first.call(null,seq__14345_14406__$1);{
var G__14408 = cljs.core.chunk_rest.call(null,seq__14345_14406__$1);
var G__14409 = c__4309__auto___14407;
var G__14410 = cljs.core.count.call(null,c__4309__auto___14407);
var G__14411 = (0);
seq__14345_14396 = G__14408;
chunk__14346_14397 = G__14409;
count__14347_14398 = G__14410;
i__14348_14399 = G__14411;
continue;
}
} else
{var c_14412 = cljs.core.first.call(null,seq__14345_14406__$1);add_class_BANG_.call(null,elem__$1,c_14412);
{
var G__14413 = cljs.core.next.call(null,seq__14345_14406__$1);
var G__14414 = null;
var G__14415 = (0);
var G__14416 = (0);
seq__14345_14396 = G__14413;
chunk__14346_14397 = G__14414;
count__14347_14398 = G__14415;
i__14348_14399 = G__14416;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__14395 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14395__delegate.call(this,elem,classes,more_classes);};
G__14395.cljs$lang$maxFixedArity = 2;
G__14395.cljs$lang$applyTo = (function (arglist__14417){
var elem = cljs.core.first(arglist__14417);
arglist__14417 = cljs.core.next(arglist__14417);
var classes = cljs.core.first(arglist__14417);
var more_classes = cljs.core.rest(arglist__14417);
return G__14395__delegate(elem,classes,more_classes);
});
G__14395.cljs$core$IFn$_invoke$arity$variadic = G__14395__delegate;
return G__14395;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__14418 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__14418;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___14427 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___14427))
{var class_list_14428 = temp__4124__auto___14427;class_list_14428.remove(class$__$1);
} else
{var class_name_14429 = elem__$1.className;var new_class_name_14430 = dommy.attrs.remove_class_str.call(null,class_name_14429,class$__$1);if((class_name_14429 === new_class_name_14430))
{} else
{elem__$1.className = new_class_name_14430;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__14431__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14423 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__14424 = null;var count__14425 = (0);var i__14426 = (0);while(true){
if((i__14426 < count__14425))
{var c = cljs.core._nth.call(null,chunk__14424,i__14426);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14432 = seq__14423;
var G__14433 = chunk__14424;
var G__14434 = count__14425;
var G__14435 = (i__14426 + (1));
seq__14423 = G__14432;
chunk__14424 = G__14433;
count__14425 = G__14434;
i__14426 = G__14435;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14423);if(temp__4126__auto__)
{var seq__14423__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14423__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__14423__$1);{
var G__14436 = cljs.core.chunk_rest.call(null,seq__14423__$1);
var G__14437 = c__4309__auto__;
var G__14438 = cljs.core.count.call(null,c__4309__auto__);
var G__14439 = (0);
seq__14423 = G__14436;
chunk__14424 = G__14437;
count__14425 = G__14438;
i__14426 = G__14439;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__14423__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14440 = cljs.core.next.call(null,seq__14423__$1);
var G__14441 = null;
var G__14442 = (0);
var G__14443 = (0);
seq__14423 = G__14440;
chunk__14424 = G__14441;
count__14425 = G__14442;
i__14426 = G__14443;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__14431 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14431__delegate.call(this,elem,class$,classes);};
G__14431.cljs$lang$maxFixedArity = 2;
G__14431.cljs$lang$applyTo = (function (arglist__14444){
var elem = cljs.core.first(arglist__14444);
arglist__14444 = cljs.core.next(arglist__14444);
var class$ = cljs.core.first(arglist__14444);
var classes = cljs.core.rest(arglist__14444);
return G__14431__delegate(elem,class$,classes);
});
G__14431.cljs$core$IFn$_invoke$arity$variadic = G__14431__delegate;
return G__14431;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___14445 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___14445))
{var class_list_14446 = temp__4124__auto___14445;class_list_14446.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__14449){var vec__14450 = p__14449;var k = cljs.core.nth.call(null,vec__14450,(0),null);var v = cljs.core.nth.call(null,vec__14450,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__14457_14463 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__14458_14464 = null;var count__14459_14465 = (0);var i__14460_14466 = (0);while(true){
if((i__14460_14466 < count__14459_14465))
{var vec__14461_14467 = cljs.core._nth.call(null,chunk__14458_14464,i__14460_14466);var k_14468 = cljs.core.nth.call(null,vec__14461_14467,(0),null);var v_14469 = cljs.core.nth.call(null,vec__14461_14467,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_14468),v_14469);
{
var G__14470 = seq__14457_14463;
var G__14471 = chunk__14458_14464;
var G__14472 = count__14459_14465;
var G__14473 = (i__14460_14466 + (1));
seq__14457_14463 = G__14470;
chunk__14458_14464 = G__14471;
count__14459_14465 = G__14472;
i__14460_14466 = G__14473;
continue;
}
} else
{var temp__4126__auto___14474 = cljs.core.seq.call(null,seq__14457_14463);if(temp__4126__auto___14474)
{var seq__14457_14475__$1 = temp__4126__auto___14474;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14457_14475__$1))
{var c__4309__auto___14476 = cljs.core.chunk_first.call(null,seq__14457_14475__$1);{
var G__14477 = cljs.core.chunk_rest.call(null,seq__14457_14475__$1);
var G__14478 = c__4309__auto___14476;
var G__14479 = cljs.core.count.call(null,c__4309__auto___14476);
var G__14480 = (0);
seq__14457_14463 = G__14477;
chunk__14458_14464 = G__14478;
count__14459_14465 = G__14479;
i__14460_14466 = G__14480;
continue;
}
} else
{var vec__14462_14481 = cljs.core.first.call(null,seq__14457_14475__$1);var k_14482 = cljs.core.nth.call(null,vec__14462_14481,(0),null);var v_14483 = cljs.core.nth.call(null,vec__14462_14481,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_14482),v_14483);
{
var G__14484 = cljs.core.next.call(null,seq__14457_14475__$1);
var G__14485 = null;
var G__14486 = (0);
var G__14487 = (0);
seq__14457_14463 = G__14484;
chunk__14458_14464 = G__14485;
count__14459_14465 = G__14486;
i__14460_14466 = G__14487;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14488){
var elem = cljs.core.first(arglist__14488);
var kvs = cljs.core.rest(arglist__14488);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14495_14501 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__14496_14502 = null;var count__14497_14503 = (0);var i__14498_14504 = (0);while(true){
if((i__14498_14504 < count__14497_14503))
{var vec__14499_14505 = cljs.core._nth.call(null,chunk__14496_14502,i__14498_14504);var k_14506 = cljs.core.nth.call(null,vec__14499_14505,(0),null);var v_14507 = cljs.core.nth.call(null,vec__14499_14505,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14506,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14507)+"px"));
{
var G__14508 = seq__14495_14501;
var G__14509 = chunk__14496_14502;
var G__14510 = count__14497_14503;
var G__14511 = (i__14498_14504 + (1));
seq__14495_14501 = G__14508;
chunk__14496_14502 = G__14509;
count__14497_14503 = G__14510;
i__14498_14504 = G__14511;
continue;
}
} else
{var temp__4126__auto___14512 = cljs.core.seq.call(null,seq__14495_14501);if(temp__4126__auto___14512)
{var seq__14495_14513__$1 = temp__4126__auto___14512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14495_14513__$1))
{var c__4309__auto___14514 = cljs.core.chunk_first.call(null,seq__14495_14513__$1);{
var G__14515 = cljs.core.chunk_rest.call(null,seq__14495_14513__$1);
var G__14516 = c__4309__auto___14514;
var G__14517 = cljs.core.count.call(null,c__4309__auto___14514);
var G__14518 = (0);
seq__14495_14501 = G__14515;
chunk__14496_14502 = G__14516;
count__14497_14503 = G__14517;
i__14498_14504 = G__14518;
continue;
}
} else
{var vec__14500_14519 = cljs.core.first.call(null,seq__14495_14513__$1);var k_14520 = cljs.core.nth.call(null,vec__14500_14519,(0),null);var v_14521 = cljs.core.nth.call(null,vec__14500_14519,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14520,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14521)+"px"));
{
var G__14522 = cljs.core.next.call(null,seq__14495_14513__$1);
var G__14523 = null;
var G__14524 = (0);
var G__14525 = (0);
seq__14495_14501 = G__14522;
chunk__14496_14502 = G__14523;
count__14497_14503 = G__14524;
i__14498_14504 = G__14525;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__14526){
var elem = cljs.core.first(arglist__14526);
var kvs = cljs.core.rest(arglist__14526);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__14535 = dommy.template.__GT_node_like.call(null,elem);(G__14535[dommy.utils.as_str.call(null,k)] = v);
return G__14535;
} else
{var G__14536 = dommy.template.__GT_node_like.call(null,elem);G__14536.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__14536;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__14543__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14537_14544 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__14538_14545 = null;var count__14539_14546 = (0);var i__14540_14547 = (0);while(true){
if((i__14540_14547 < count__14539_14546))
{var vec__14541_14548 = cljs.core._nth.call(null,chunk__14538_14545,i__14540_14547);var k_14549__$1 = cljs.core.nth.call(null,vec__14541_14548,(0),null);var v_14550__$1 = cljs.core.nth.call(null,vec__14541_14548,(1),null);set_attr_BANG_.call(null,elem__$1,k_14549__$1,v_14550__$1);
{
var G__14551 = seq__14537_14544;
var G__14552 = chunk__14538_14545;
var G__14553 = count__14539_14546;
var G__14554 = (i__14540_14547 + (1));
seq__14537_14544 = G__14551;
chunk__14538_14545 = G__14552;
count__14539_14546 = G__14553;
i__14540_14547 = G__14554;
continue;
}
} else
{var temp__4126__auto___14555 = cljs.core.seq.call(null,seq__14537_14544);if(temp__4126__auto___14555)
{var seq__14537_14556__$1 = temp__4126__auto___14555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14537_14556__$1))
{var c__4309__auto___14557 = cljs.core.chunk_first.call(null,seq__14537_14556__$1);{
var G__14558 = cljs.core.chunk_rest.call(null,seq__14537_14556__$1);
var G__14559 = c__4309__auto___14557;
var G__14560 = cljs.core.count.call(null,c__4309__auto___14557);
var G__14561 = (0);
seq__14537_14544 = G__14558;
chunk__14538_14545 = G__14559;
count__14539_14546 = G__14560;
i__14540_14547 = G__14561;
continue;
}
} else
{var vec__14542_14562 = cljs.core.first.call(null,seq__14537_14556__$1);var k_14563__$1 = cljs.core.nth.call(null,vec__14542_14562,(0),null);var v_14564__$1 = cljs.core.nth.call(null,vec__14542_14562,(1),null);set_attr_BANG_.call(null,elem__$1,k_14563__$1,v_14564__$1);
{
var G__14565 = cljs.core.next.call(null,seq__14537_14556__$1);
var G__14566 = null;
var G__14567 = (0);
var G__14568 = (0);
seq__14537_14544 = G__14565;
chunk__14538_14545 = G__14566;
count__14539_14546 = G__14567;
i__14540_14547 = G__14568;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__14543 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14543__delegate.call(this,elem,k,v,kvs);};
G__14543.cljs$lang$maxFixedArity = 3;
G__14543.cljs$lang$applyTo = (function (arglist__14569){
var elem = cljs.core.first(arglist__14569);
arglist__14569 = cljs.core.next(arglist__14569);
var k = cljs.core.first(arglist__14569);
arglist__14569 = cljs.core.next(arglist__14569);
var v = cljs.core.first(arglist__14569);
var kvs = cljs.core.rest(arglist__14569);
return G__14543__delegate(elem,k,v,kvs);
});
G__14543.cljs$core$IFn$_invoke$arity$variadic = G__14543__delegate;
return G__14543;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(dommy.utils.as_str.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__14578__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14574_14579 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__14575_14580 = null;var count__14576_14581 = (0);var i__14577_14582 = (0);while(true){
if((i__14577_14582 < count__14576_14581))
{var k_14583__$1 = cljs.core._nth.call(null,chunk__14575_14580,i__14577_14582);remove_attr_BANG_.call(null,elem__$1,k_14583__$1);
{
var G__14584 = seq__14574_14579;
var G__14585 = chunk__14575_14580;
var G__14586 = count__14576_14581;
var G__14587 = (i__14577_14582 + (1));
seq__14574_14579 = G__14584;
chunk__14575_14580 = G__14585;
count__14576_14581 = G__14586;
i__14577_14582 = G__14587;
continue;
}
} else
{var temp__4126__auto___14588 = cljs.core.seq.call(null,seq__14574_14579);if(temp__4126__auto___14588)
{var seq__14574_14589__$1 = temp__4126__auto___14588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14574_14589__$1))
{var c__4309__auto___14590 = cljs.core.chunk_first.call(null,seq__14574_14589__$1);{
var G__14591 = cljs.core.chunk_rest.call(null,seq__14574_14589__$1);
var G__14592 = c__4309__auto___14590;
var G__14593 = cljs.core.count.call(null,c__4309__auto___14590);
var G__14594 = (0);
seq__14574_14579 = G__14591;
chunk__14575_14580 = G__14592;
count__14576_14581 = G__14593;
i__14577_14582 = G__14594;
continue;
}
} else
{var k_14595__$1 = cljs.core.first.call(null,seq__14574_14589__$1);remove_attr_BANG_.call(null,elem__$1,k_14595__$1);
{
var G__14596 = cljs.core.next.call(null,seq__14574_14589__$1);
var G__14597 = null;
var G__14598 = (0);
var G__14599 = (0);
seq__14574_14579 = G__14596;
chunk__14575_14580 = G__14597;
count__14576_14581 = G__14598;
i__14577_14582 = G__14599;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__14578 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14578__delegate.call(this,elem,k,ks);};
G__14578.cljs$lang$maxFixedArity = 2;
G__14578.cljs$lang$applyTo = (function (arglist__14600){
var elem = cljs.core.first(arglist__14600);
arglist__14600 = cljs.core.next(arglist__14600);
var k = cljs.core.first(arglist__14600);
var ks = cljs.core.rest(arglist__14600);
return G__14578__delegate(elem,k,ks);
});
G__14578.cljs$core$IFn$_invoke$arity$variadic = G__14578__delegate;
return G__14578;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__14602 = dommy.template.__GT_node_like.call(null,elem);G__14602.style.display = ((show_QMARK_)?"":"none");
return G__14602;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__14604 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14604,false);
return G__14604;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__14606 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14606,true);
return G__14606;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){var r = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map