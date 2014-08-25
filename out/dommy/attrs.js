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
var G__27690 = (i + class$.length);
start_from = G__27690;
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
{var temp__4124__auto___27715 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___27715))
{var class_list_27716 = temp__4124__auto___27715;var seq__27703_27717 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__27704_27718 = null;var count__27705_27719 = (0);var i__27706_27720 = (0);while(true){
if((i__27706_27720 < count__27705_27719))
{var class_27721 = cljs.core._nth.call(null,chunk__27704_27718,i__27706_27720);class_list_27716.add(class_27721);
{
var G__27722 = seq__27703_27717;
var G__27723 = chunk__27704_27718;
var G__27724 = count__27705_27719;
var G__27725 = (i__27706_27720 + (1));
seq__27703_27717 = G__27722;
chunk__27704_27718 = G__27723;
count__27705_27719 = G__27724;
i__27706_27720 = G__27725;
continue;
}
} else
{var temp__4126__auto___27726 = cljs.core.seq.call(null,seq__27703_27717);if(temp__4126__auto___27726)
{var seq__27703_27727__$1 = temp__4126__auto___27726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27703_27727__$1))
{var c__4309__auto___27728 = cljs.core.chunk_first.call(null,seq__27703_27727__$1);{
var G__27729 = cljs.core.chunk_rest.call(null,seq__27703_27727__$1);
var G__27730 = c__4309__auto___27728;
var G__27731 = cljs.core.count.call(null,c__4309__auto___27728);
var G__27732 = (0);
seq__27703_27717 = G__27729;
chunk__27704_27718 = G__27730;
count__27705_27719 = G__27731;
i__27706_27720 = G__27732;
continue;
}
} else
{var class_27733 = cljs.core.first.call(null,seq__27703_27727__$1);class_list_27716.add(class_27733);
{
var G__27734 = cljs.core.next.call(null,seq__27703_27727__$1);
var G__27735 = null;
var G__27736 = (0);
var G__27737 = (0);
seq__27703_27717 = G__27734;
chunk__27704_27718 = G__27735;
count__27705_27719 = G__27736;
i__27706_27720 = G__27737;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__27707_27738 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__27708_27739 = null;var count__27709_27740 = (0);var i__27710_27741 = (0);while(true){
if((i__27710_27741 < count__27709_27740))
{var class_27742 = cljs.core._nth.call(null,chunk__27708_27739,i__27710_27741);var class_name_27743 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_27743,class_27742)))
{} else
{elem__$1.className = (((class_name_27743 === ""))?class_27742:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_27743)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_27742)));
}
{
var G__27744 = seq__27707_27738;
var G__27745 = chunk__27708_27739;
var G__27746 = count__27709_27740;
var G__27747 = (i__27710_27741 + (1));
seq__27707_27738 = G__27744;
chunk__27708_27739 = G__27745;
count__27709_27740 = G__27746;
i__27710_27741 = G__27747;
continue;
}
} else
{var temp__4126__auto___27748 = cljs.core.seq.call(null,seq__27707_27738);if(temp__4126__auto___27748)
{var seq__27707_27749__$1 = temp__4126__auto___27748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27707_27749__$1))
{var c__4309__auto___27750 = cljs.core.chunk_first.call(null,seq__27707_27749__$1);{
var G__27751 = cljs.core.chunk_rest.call(null,seq__27707_27749__$1);
var G__27752 = c__4309__auto___27750;
var G__27753 = cljs.core.count.call(null,c__4309__auto___27750);
var G__27754 = (0);
seq__27707_27738 = G__27751;
chunk__27708_27739 = G__27752;
count__27709_27740 = G__27753;
i__27710_27741 = G__27754;
continue;
}
} else
{var class_27755 = cljs.core.first.call(null,seq__27707_27749__$1);var class_name_27756 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_27756,class_27755)))
{} else
{elem__$1.className = (((class_name_27756 === ""))?class_27755:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_27756)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_27755)));
}
{
var G__27757 = cljs.core.next.call(null,seq__27707_27749__$1);
var G__27758 = null;
var G__27759 = (0);
var G__27760 = (0);
seq__27707_27738 = G__27757;
chunk__27708_27739 = G__27758;
count__27709_27740 = G__27759;
i__27710_27741 = G__27760;
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
var G__27761__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27711_27762 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__27712_27763 = null;var count__27713_27764 = (0);var i__27714_27765 = (0);while(true){
if((i__27714_27765 < count__27713_27764))
{var c_27766 = cljs.core._nth.call(null,chunk__27712_27763,i__27714_27765);add_class_BANG_.call(null,elem__$1,c_27766);
{
var G__27767 = seq__27711_27762;
var G__27768 = chunk__27712_27763;
var G__27769 = count__27713_27764;
var G__27770 = (i__27714_27765 + (1));
seq__27711_27762 = G__27767;
chunk__27712_27763 = G__27768;
count__27713_27764 = G__27769;
i__27714_27765 = G__27770;
continue;
}
} else
{var temp__4126__auto___27771 = cljs.core.seq.call(null,seq__27711_27762);if(temp__4126__auto___27771)
{var seq__27711_27772__$1 = temp__4126__auto___27771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27711_27772__$1))
{var c__4309__auto___27773 = cljs.core.chunk_first.call(null,seq__27711_27772__$1);{
var G__27774 = cljs.core.chunk_rest.call(null,seq__27711_27772__$1);
var G__27775 = c__4309__auto___27773;
var G__27776 = cljs.core.count.call(null,c__4309__auto___27773);
var G__27777 = (0);
seq__27711_27762 = G__27774;
chunk__27712_27763 = G__27775;
count__27713_27764 = G__27776;
i__27714_27765 = G__27777;
continue;
}
} else
{var c_27778 = cljs.core.first.call(null,seq__27711_27772__$1);add_class_BANG_.call(null,elem__$1,c_27778);
{
var G__27779 = cljs.core.next.call(null,seq__27711_27772__$1);
var G__27780 = null;
var G__27781 = (0);
var G__27782 = (0);
seq__27711_27762 = G__27779;
chunk__27712_27763 = G__27780;
count__27713_27764 = G__27781;
i__27714_27765 = G__27782;
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
var G__27761 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27761__delegate.call(this,elem,classes,more_classes);};
G__27761.cljs$lang$maxFixedArity = 2;
G__27761.cljs$lang$applyTo = (function (arglist__27783){
var elem = cljs.core.first(arglist__27783);
arglist__27783 = cljs.core.next(arglist__27783);
var classes = cljs.core.first(arglist__27783);
var more_classes = cljs.core.rest(arglist__27783);
return G__27761__delegate(elem,classes,more_classes);
});
G__27761.cljs$core$IFn$_invoke$arity$variadic = G__27761__delegate;
return G__27761;
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
var G__27784 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__27784;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___27793 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___27793))
{var class_list_27794 = temp__4124__auto___27793;class_list_27794.remove(class$__$1);
} else
{var class_name_27795 = elem__$1.className;var new_class_name_27796 = dommy.attrs.remove_class_str.call(null,class_name_27795,class$__$1);if((class_name_27795 === new_class_name_27796))
{} else
{elem__$1.className = new_class_name_27796;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__27797__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27789 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__27790 = null;var count__27791 = (0);var i__27792 = (0);while(true){
if((i__27792 < count__27791))
{var c = cljs.core._nth.call(null,chunk__27790,i__27792);remove_class_BANG_.call(null,elem__$1,c);
{
var G__27798 = seq__27789;
var G__27799 = chunk__27790;
var G__27800 = count__27791;
var G__27801 = (i__27792 + (1));
seq__27789 = G__27798;
chunk__27790 = G__27799;
count__27791 = G__27800;
i__27792 = G__27801;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27789);if(temp__4126__auto__)
{var seq__27789__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27789__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__27789__$1);{
var G__27802 = cljs.core.chunk_rest.call(null,seq__27789__$1);
var G__27803 = c__4309__auto__;
var G__27804 = cljs.core.count.call(null,c__4309__auto__);
var G__27805 = (0);
seq__27789 = G__27802;
chunk__27790 = G__27803;
count__27791 = G__27804;
i__27792 = G__27805;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__27789__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__27806 = cljs.core.next.call(null,seq__27789__$1);
var G__27807 = null;
var G__27808 = (0);
var G__27809 = (0);
seq__27789 = G__27806;
chunk__27790 = G__27807;
count__27791 = G__27808;
i__27792 = G__27809;
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
var G__27797 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27797__delegate.call(this,elem,class$,classes);};
G__27797.cljs$lang$maxFixedArity = 2;
G__27797.cljs$lang$applyTo = (function (arglist__27810){
var elem = cljs.core.first(arglist__27810);
arglist__27810 = cljs.core.next(arglist__27810);
var class$ = cljs.core.first(arglist__27810);
var classes = cljs.core.rest(arglist__27810);
return G__27797__delegate(elem,class$,classes);
});
G__27797.cljs$core$IFn$_invoke$arity$variadic = G__27797__delegate;
return G__27797;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___27811 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___27811))
{var class_list_27812 = temp__4124__auto___27811;class_list_27812.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__27815){var vec__27816 = p__27815;var k = cljs.core.nth.call(null,vec__27816,(0),null);var v = cljs.core.nth.call(null,vec__27816,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__27823_27829 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__27824_27830 = null;var count__27825_27831 = (0);var i__27826_27832 = (0);while(true){
if((i__27826_27832 < count__27825_27831))
{var vec__27827_27833 = cljs.core._nth.call(null,chunk__27824_27830,i__27826_27832);var k_27834 = cljs.core.nth.call(null,vec__27827_27833,(0),null);var v_27835 = cljs.core.nth.call(null,vec__27827_27833,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_27834),v_27835);
{
var G__27836 = seq__27823_27829;
var G__27837 = chunk__27824_27830;
var G__27838 = count__27825_27831;
var G__27839 = (i__27826_27832 + (1));
seq__27823_27829 = G__27836;
chunk__27824_27830 = G__27837;
count__27825_27831 = G__27838;
i__27826_27832 = G__27839;
continue;
}
} else
{var temp__4126__auto___27840 = cljs.core.seq.call(null,seq__27823_27829);if(temp__4126__auto___27840)
{var seq__27823_27841__$1 = temp__4126__auto___27840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27823_27841__$1))
{var c__4309__auto___27842 = cljs.core.chunk_first.call(null,seq__27823_27841__$1);{
var G__27843 = cljs.core.chunk_rest.call(null,seq__27823_27841__$1);
var G__27844 = c__4309__auto___27842;
var G__27845 = cljs.core.count.call(null,c__4309__auto___27842);
var G__27846 = (0);
seq__27823_27829 = G__27843;
chunk__27824_27830 = G__27844;
count__27825_27831 = G__27845;
i__27826_27832 = G__27846;
continue;
}
} else
{var vec__27828_27847 = cljs.core.first.call(null,seq__27823_27841__$1);var k_27848 = cljs.core.nth.call(null,vec__27828_27847,(0),null);var v_27849 = cljs.core.nth.call(null,vec__27828_27847,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_27848),v_27849);
{
var G__27850 = cljs.core.next.call(null,seq__27823_27841__$1);
var G__27851 = null;
var G__27852 = (0);
var G__27853 = (0);
seq__27823_27829 = G__27850;
chunk__27824_27830 = G__27851;
count__27825_27831 = G__27852;
i__27826_27832 = G__27853;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27854){
var elem = cljs.core.first(arglist__27854);
var kvs = cljs.core.rest(arglist__27854);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27861_27867 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__27862_27868 = null;var count__27863_27869 = (0);var i__27864_27870 = (0);while(true){
if((i__27864_27870 < count__27863_27869))
{var vec__27865_27871 = cljs.core._nth.call(null,chunk__27862_27868,i__27864_27870);var k_27872 = cljs.core.nth.call(null,vec__27865_27871,(0),null);var v_27873 = cljs.core.nth.call(null,vec__27865_27871,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_27872,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27873)+"px"));
{
var G__27874 = seq__27861_27867;
var G__27875 = chunk__27862_27868;
var G__27876 = count__27863_27869;
var G__27877 = (i__27864_27870 + (1));
seq__27861_27867 = G__27874;
chunk__27862_27868 = G__27875;
count__27863_27869 = G__27876;
i__27864_27870 = G__27877;
continue;
}
} else
{var temp__4126__auto___27878 = cljs.core.seq.call(null,seq__27861_27867);if(temp__4126__auto___27878)
{var seq__27861_27879__$1 = temp__4126__auto___27878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27861_27879__$1))
{var c__4309__auto___27880 = cljs.core.chunk_first.call(null,seq__27861_27879__$1);{
var G__27881 = cljs.core.chunk_rest.call(null,seq__27861_27879__$1);
var G__27882 = c__4309__auto___27880;
var G__27883 = cljs.core.count.call(null,c__4309__auto___27880);
var G__27884 = (0);
seq__27861_27867 = G__27881;
chunk__27862_27868 = G__27882;
count__27863_27869 = G__27883;
i__27864_27870 = G__27884;
continue;
}
} else
{var vec__27866_27885 = cljs.core.first.call(null,seq__27861_27879__$1);var k_27886 = cljs.core.nth.call(null,vec__27866_27885,(0),null);var v_27887 = cljs.core.nth.call(null,vec__27866_27885,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_27886,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27887)+"px"));
{
var G__27888 = cljs.core.next.call(null,seq__27861_27879__$1);
var G__27889 = null;
var G__27890 = (0);
var G__27891 = (0);
seq__27861_27867 = G__27888;
chunk__27862_27868 = G__27889;
count__27863_27869 = G__27890;
i__27864_27870 = G__27891;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__27892){
var elem = cljs.core.first(arglist__27892);
var kvs = cljs.core.rest(arglist__27892);
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
{var G__27901 = dommy.template.__GT_node_like.call(null,elem);(G__27901[dommy.utils.as_str.call(null,k)] = v);
return G__27901;
} else
{var G__27902 = dommy.template.__GT_node_like.call(null,elem);G__27902.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__27902;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__27909__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27903_27910 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__27904_27911 = null;var count__27905_27912 = (0);var i__27906_27913 = (0);while(true){
if((i__27906_27913 < count__27905_27912))
{var vec__27907_27914 = cljs.core._nth.call(null,chunk__27904_27911,i__27906_27913);var k_27915__$1 = cljs.core.nth.call(null,vec__27907_27914,(0),null);var v_27916__$1 = cljs.core.nth.call(null,vec__27907_27914,(1),null);set_attr_BANG_.call(null,elem__$1,k_27915__$1,v_27916__$1);
{
var G__27917 = seq__27903_27910;
var G__27918 = chunk__27904_27911;
var G__27919 = count__27905_27912;
var G__27920 = (i__27906_27913 + (1));
seq__27903_27910 = G__27917;
chunk__27904_27911 = G__27918;
count__27905_27912 = G__27919;
i__27906_27913 = G__27920;
continue;
}
} else
{var temp__4126__auto___27921 = cljs.core.seq.call(null,seq__27903_27910);if(temp__4126__auto___27921)
{var seq__27903_27922__$1 = temp__4126__auto___27921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27903_27922__$1))
{var c__4309__auto___27923 = cljs.core.chunk_first.call(null,seq__27903_27922__$1);{
var G__27924 = cljs.core.chunk_rest.call(null,seq__27903_27922__$1);
var G__27925 = c__4309__auto___27923;
var G__27926 = cljs.core.count.call(null,c__4309__auto___27923);
var G__27927 = (0);
seq__27903_27910 = G__27924;
chunk__27904_27911 = G__27925;
count__27905_27912 = G__27926;
i__27906_27913 = G__27927;
continue;
}
} else
{var vec__27908_27928 = cljs.core.first.call(null,seq__27903_27922__$1);var k_27929__$1 = cljs.core.nth.call(null,vec__27908_27928,(0),null);var v_27930__$1 = cljs.core.nth.call(null,vec__27908_27928,(1),null);set_attr_BANG_.call(null,elem__$1,k_27929__$1,v_27930__$1);
{
var G__27931 = cljs.core.next.call(null,seq__27903_27922__$1);
var G__27932 = null;
var G__27933 = (0);
var G__27934 = (0);
seq__27903_27910 = G__27931;
chunk__27904_27911 = G__27932;
count__27905_27912 = G__27933;
i__27906_27913 = G__27934;
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
var G__27909 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27909__delegate.call(this,elem,k,v,kvs);};
G__27909.cljs$lang$maxFixedArity = 3;
G__27909.cljs$lang$applyTo = (function (arglist__27935){
var elem = cljs.core.first(arglist__27935);
arglist__27935 = cljs.core.next(arglist__27935);
var k = cljs.core.first(arglist__27935);
arglist__27935 = cljs.core.next(arglist__27935);
var v = cljs.core.first(arglist__27935);
var kvs = cljs.core.rest(arglist__27935);
return G__27909__delegate(elem,k,v,kvs);
});
G__27909.cljs$core$IFn$_invoke$arity$variadic = G__27909__delegate;
return G__27909;
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
var G__27944__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27940_27945 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__27941_27946 = null;var count__27942_27947 = (0);var i__27943_27948 = (0);while(true){
if((i__27943_27948 < count__27942_27947))
{var k_27949__$1 = cljs.core._nth.call(null,chunk__27941_27946,i__27943_27948);remove_attr_BANG_.call(null,elem__$1,k_27949__$1);
{
var G__27950 = seq__27940_27945;
var G__27951 = chunk__27941_27946;
var G__27952 = count__27942_27947;
var G__27953 = (i__27943_27948 + (1));
seq__27940_27945 = G__27950;
chunk__27941_27946 = G__27951;
count__27942_27947 = G__27952;
i__27943_27948 = G__27953;
continue;
}
} else
{var temp__4126__auto___27954 = cljs.core.seq.call(null,seq__27940_27945);if(temp__4126__auto___27954)
{var seq__27940_27955__$1 = temp__4126__auto___27954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27940_27955__$1))
{var c__4309__auto___27956 = cljs.core.chunk_first.call(null,seq__27940_27955__$1);{
var G__27957 = cljs.core.chunk_rest.call(null,seq__27940_27955__$1);
var G__27958 = c__4309__auto___27956;
var G__27959 = cljs.core.count.call(null,c__4309__auto___27956);
var G__27960 = (0);
seq__27940_27945 = G__27957;
chunk__27941_27946 = G__27958;
count__27942_27947 = G__27959;
i__27943_27948 = G__27960;
continue;
}
} else
{var k_27961__$1 = cljs.core.first.call(null,seq__27940_27955__$1);remove_attr_BANG_.call(null,elem__$1,k_27961__$1);
{
var G__27962 = cljs.core.next.call(null,seq__27940_27955__$1);
var G__27963 = null;
var G__27964 = (0);
var G__27965 = (0);
seq__27940_27945 = G__27962;
chunk__27941_27946 = G__27963;
count__27942_27947 = G__27964;
i__27943_27948 = G__27965;
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
var G__27944 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27944__delegate.call(this,elem,k,ks);};
G__27944.cljs$lang$maxFixedArity = 2;
G__27944.cljs$lang$applyTo = (function (arglist__27966){
var elem = cljs.core.first(arglist__27966);
arglist__27966 = cljs.core.next(arglist__27966);
var k = cljs.core.first(arglist__27966);
var ks = cljs.core.rest(arglist__27966);
return G__27944__delegate(elem,k,ks);
});
G__27944.cljs$core$IFn$_invoke$arity$variadic = G__27944__delegate;
return G__27944;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__27968 = dommy.template.__GT_node_like.call(null,elem);G__27968.style.display = ((show_QMARK_)?"":"none");
return G__27968;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__27970 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__27970,false);
return G__27970;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__27972 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__27972,true);
return G__27972;
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