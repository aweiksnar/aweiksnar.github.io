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
dommy.template.PElement = (function (){var obj14608 = {};return obj14608;
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
{var str_14611 = node_str.substring(base_idx);while(true){
var next_idx_14612 = dommy.template.next_css_index.call(null,str_14611,(1));var frag_14613 = (((next_idx_14612 >= (0)))?str_14611.substring((0),next_idx_14612):str_14611);var G__14610_14614 = frag_14613.charAt((0));switch (G__14610_14614) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_14613.substring((1)));

break;
case "#":
node.setAttribute("id",frag_14613.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_14613.charAt((0))))));

}
if((next_idx_14612 >= (0)))
{{
var G__14616 = str_14611.substring(next_idx_14612);
str_14611 = G__14616;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14622 = data;if(G__14622)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__14622.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14622.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14622);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14622);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__14623_14627 = cljs.core.seq.call(null,data);var chunk__14624_14628 = null;var count__14625_14629 = (0);var i__14626_14630 = (0);while(true){
if((i__14626_14630 < count__14625_14629))
{var child_14631 = cljs.core._nth.call(null,chunk__14624_14628,i__14626_14630);__GT_document_fragment.call(null,result_frag,child_14631);
{
var G__14632 = seq__14623_14627;
var G__14633 = chunk__14624_14628;
var G__14634 = count__14625_14629;
var G__14635 = (i__14626_14630 + (1));
seq__14623_14627 = G__14632;
chunk__14624_14628 = G__14633;
count__14625_14629 = G__14634;
i__14626_14630 = G__14635;
continue;
}
} else
{var temp__4126__auto___14636 = cljs.core.seq.call(null,seq__14623_14627);if(temp__4126__auto___14636)
{var seq__14623_14637__$1 = temp__4126__auto___14636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14623_14637__$1))
{var c__4309__auto___14638 = cljs.core.chunk_first.call(null,seq__14623_14637__$1);{
var G__14639 = cljs.core.chunk_rest.call(null,seq__14623_14637__$1);
var G__14640 = c__4309__auto___14638;
var G__14641 = cljs.core.count.call(null,c__4309__auto___14638);
var G__14642 = (0);
seq__14623_14627 = G__14639;
chunk__14624_14628 = G__14640;
count__14625_14629 = G__14641;
i__14626_14630 = G__14642;
continue;
}
} else
{var child_14643 = cljs.core.first.call(null,seq__14623_14637__$1);__GT_document_fragment.call(null,result_frag,child_14643);
{
var G__14644 = cljs.core.next.call(null,seq__14623_14637__$1);
var G__14645 = null;
var G__14646 = (0);
var G__14647 = (0);
seq__14623_14627 = G__14644;
chunk__14624_14628 = G__14645;
count__14625_14629 = G__14646;
i__14626_14630 = G__14647;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14649 = data;if(G__14649)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__14649.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14649.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14649);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14649);
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
dommy.template.compound_element = (function compound_element(p__14650){var vec__14670 = p__14650;var tag_name = cljs.core.nth.call(null,vec__14670,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__14670,(1),null);var children = cljs.core.nthnext.call(null,vec__14670,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__14672 = maybe_attrs;if(G__14672)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__14672.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14672.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14672);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14672);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__14673_14689 = cljs.core.seq.call(null,attrs);var chunk__14674_14690 = null;var count__14675_14691 = (0);var i__14676_14692 = (0);while(true){
if((i__14676_14692 < count__14675_14691))
{var vec__14677_14693 = cljs.core._nth.call(null,chunk__14674_14690,i__14676_14692);var k_14694 = cljs.core.nth.call(null,vec__14677_14693,(0),null);var v_14695 = cljs.core.nth.call(null,vec__14677_14693,(1),null);var G__14678_14696 = (((k_14694 instanceof cljs.core.Keyword))?k_14694.fqn:null);switch (G__14678_14696) {
case "classes":
var seq__14679_14698 = cljs.core.seq.call(null,v_14695);var chunk__14680_14699 = null;var count__14681_14700 = (0);var i__14682_14701 = (0);while(true){
if((i__14682_14701 < count__14681_14700))
{var c_14702 = cljs.core._nth.call(null,chunk__14680_14699,i__14682_14701);dommy.attrs.add_class_BANG_.call(null,n,c_14702);
{
var G__14703 = seq__14679_14698;
var G__14704 = chunk__14680_14699;
var G__14705 = count__14681_14700;
var G__14706 = (i__14682_14701 + (1));
seq__14679_14698 = G__14703;
chunk__14680_14699 = G__14704;
count__14681_14700 = G__14705;
i__14682_14701 = G__14706;
continue;
}
} else
{var temp__4126__auto___14707 = cljs.core.seq.call(null,seq__14679_14698);if(temp__4126__auto___14707)
{var seq__14679_14708__$1 = temp__4126__auto___14707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14679_14708__$1))
{var c__4309__auto___14709 = cljs.core.chunk_first.call(null,seq__14679_14708__$1);{
var G__14710 = cljs.core.chunk_rest.call(null,seq__14679_14708__$1);
var G__14711 = c__4309__auto___14709;
var G__14712 = cljs.core.count.call(null,c__4309__auto___14709);
var G__14713 = (0);
seq__14679_14698 = G__14710;
chunk__14680_14699 = G__14711;
count__14681_14700 = G__14712;
i__14682_14701 = G__14713;
continue;
}
} else
{var c_14714 = cljs.core.first.call(null,seq__14679_14708__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14714);
{
var G__14715 = cljs.core.next.call(null,seq__14679_14708__$1);
var G__14716 = null;
var G__14717 = (0);
var G__14718 = (0);
seq__14679_14698 = G__14715;
chunk__14680_14699 = G__14716;
count__14681_14700 = G__14717;
i__14682_14701 = G__14718;
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
dommy.attrs.add_class_BANG_.call(null,n,v_14695);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_14694,v_14695);

}
{
var G__14719 = seq__14673_14689;
var G__14720 = chunk__14674_14690;
var G__14721 = count__14675_14691;
var G__14722 = (i__14676_14692 + (1));
seq__14673_14689 = G__14719;
chunk__14674_14690 = G__14720;
count__14675_14691 = G__14721;
i__14676_14692 = G__14722;
continue;
}
} else
{var temp__4126__auto___14723 = cljs.core.seq.call(null,seq__14673_14689);if(temp__4126__auto___14723)
{var seq__14673_14724__$1 = temp__4126__auto___14723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14673_14724__$1))
{var c__4309__auto___14725 = cljs.core.chunk_first.call(null,seq__14673_14724__$1);{
var G__14726 = cljs.core.chunk_rest.call(null,seq__14673_14724__$1);
var G__14727 = c__4309__auto___14725;
var G__14728 = cljs.core.count.call(null,c__4309__auto___14725);
var G__14729 = (0);
seq__14673_14689 = G__14726;
chunk__14674_14690 = G__14727;
count__14675_14691 = G__14728;
i__14676_14692 = G__14729;
continue;
}
} else
{var vec__14683_14730 = cljs.core.first.call(null,seq__14673_14724__$1);var k_14731 = cljs.core.nth.call(null,vec__14683_14730,(0),null);var v_14732 = cljs.core.nth.call(null,vec__14683_14730,(1),null);var G__14684_14733 = (((k_14731 instanceof cljs.core.Keyword))?k_14731.fqn:null);switch (G__14684_14733) {
case "classes":
var seq__14685_14735 = cljs.core.seq.call(null,v_14732);var chunk__14686_14736 = null;var count__14687_14737 = (0);var i__14688_14738 = (0);while(true){
if((i__14688_14738 < count__14687_14737))
{var c_14739 = cljs.core._nth.call(null,chunk__14686_14736,i__14688_14738);dommy.attrs.add_class_BANG_.call(null,n,c_14739);
{
var G__14740 = seq__14685_14735;
var G__14741 = chunk__14686_14736;
var G__14742 = count__14687_14737;
var G__14743 = (i__14688_14738 + (1));
seq__14685_14735 = G__14740;
chunk__14686_14736 = G__14741;
count__14687_14737 = G__14742;
i__14688_14738 = G__14743;
continue;
}
} else
{var temp__4126__auto___14744__$1 = cljs.core.seq.call(null,seq__14685_14735);if(temp__4126__auto___14744__$1)
{var seq__14685_14745__$1 = temp__4126__auto___14744__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14685_14745__$1))
{var c__4309__auto___14746 = cljs.core.chunk_first.call(null,seq__14685_14745__$1);{
var G__14747 = cljs.core.chunk_rest.call(null,seq__14685_14745__$1);
var G__14748 = c__4309__auto___14746;
var G__14749 = cljs.core.count.call(null,c__4309__auto___14746);
var G__14750 = (0);
seq__14685_14735 = G__14747;
chunk__14686_14736 = G__14748;
count__14687_14737 = G__14749;
i__14688_14738 = G__14750;
continue;
}
} else
{var c_14751 = cljs.core.first.call(null,seq__14685_14745__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14751);
{
var G__14752 = cljs.core.next.call(null,seq__14685_14745__$1);
var G__14753 = null;
var G__14754 = (0);
var G__14755 = (0);
seq__14685_14735 = G__14752;
chunk__14686_14736 = G__14753;
count__14687_14737 = G__14754;
i__14688_14738 = G__14755;
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
dommy.attrs.add_class_BANG_.call(null,n,v_14732);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_14731,v_14732);

}
{
var G__14756 = cljs.core.next.call(null,seq__14673_14724__$1);
var G__14757 = null;
var G__14758 = (0);
var G__14759 = (0);
seq__14673_14689 = G__14756;
chunk__14674_14690 = G__14757;
count__14675_14691 = G__14758;
i__14676_14692 = G__14759;
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
dommy.template.node = (function node(data){if((function (){var G__14761 = data;if(G__14761)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__14761.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14761.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14761);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14761);
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