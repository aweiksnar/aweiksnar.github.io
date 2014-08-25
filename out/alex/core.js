// Compiled by ClojureScript 0.0-2311
goog.provide('alex.core');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
cljs.core.enable_console_print_BANG_.call(null);
alex.core.wooly_img = document.getElementById("wooly");
alex.core.wooly_speech = document.getElementById("wooly-speech");
alex.core.site_main_title = document.getElementById("site-main-title");
alex.core.site_bottom_menu = document.getElementById("site-bottom-menu");
alex.core.log = (function log(stuff){return console.log(stuff);
});
alex.core.pos = (function pos(side,el){return side.call(null,dommy.core.bounding_client_rect.call(null,el));
});
alex.core.half_height = (function half_height(elem){return (elem.height / (2));
});
/**
* @param {...*} var_args
*/
alex.core.toggle_elems = (function() { 
var toggle_elems__delegate = function (elems){var seq__29039 = cljs.core.seq.call(null,elems);var chunk__29040 = null;var count__29041 = (0);var i__29042 = (0);while(true){
if((i__29042 < count__29041))
{var elem = cljs.core._nth.call(null,chunk__29040,i__29042);dommy.core.toggle_BANG_.call(null,elem);
{
var G__29043 = seq__29039;
var G__29044 = chunk__29040;
var G__29045 = count__29041;
var G__29046 = (i__29042 + (1));
seq__29039 = G__29043;
chunk__29040 = G__29044;
count__29041 = G__29045;
i__29042 = G__29046;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29039);if(temp__4126__auto__)
{var seq__29039__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29039__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__29039__$1);{
var G__29047 = cljs.core.chunk_rest.call(null,seq__29039__$1);
var G__29048 = c__4309__auto__;
var G__29049 = cljs.core.count.call(null,c__4309__auto__);
var G__29050 = (0);
seq__29039 = G__29047;
chunk__29040 = G__29048;
count__29041 = G__29049;
i__29042 = G__29050;
continue;
}
} else
{var elem = cljs.core.first.call(null,seq__29039__$1);dommy.core.toggle_BANG_.call(null,elem);
{
var G__29051 = cljs.core.next.call(null,seq__29039__$1);
var G__29052 = null;
var G__29053 = (0);
var G__29054 = (0);
seq__29039 = G__29051;
chunk__29040 = G__29052;
count__29041 = G__29053;
i__29042 = G__29054;
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
var toggle_elems = function (var_args){
var elems = null;if (arguments.length > 0) {
  elems = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return toggle_elems__delegate.call(this,elems);};
toggle_elems.cljs$lang$maxFixedArity = 0;
toggle_elems.cljs$lang$applyTo = (function (arglist__29055){
var elems = cljs.core.seq(arglist__29055);
return toggle_elems__delegate(elems);
});
toggle_elems.cljs$core$IFn$_invoke$arity$variadic = toggle_elems__delegate;
return toggle_elems;
})()
;
alex.core.str_px = (function str_px(s){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+"px");
});
alex.core.elem_is_empty = (function elem_is_empty(elem){return cljs.core.empty_QMARK_.call(null,dommy.core.html.call(null,elem));
});
alex.core.add_text_to_right_side_BANG_ = (function add_text_to_right_side_BANG_(args_map){var map__29057 = args_map;var map__29057__$1 = ((cljs.core.seq_QMARK_.call(null,map__29057))?cljs.core.apply.call(null,cljs.core.hash_map,map__29057):map__29057);var delay_time = cljs.core.get.call(null,map__29057__$1,new cljs.core.Keyword(null,"delay-time","delay-time",1390409728));var text = cljs.core.get.call(null,map__29057__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var text_elem = cljs.core.get.call(null,map__29057__$1,new cljs.core.Keyword(null,"text-elem","text-elem",-291915976));var target_elem = cljs.core.get.call(null,map__29057__$1,new cljs.core.Keyword(null,"target-elem","target-elem",431821740));dommy.core.set_text_BANG_.call(null,text_elem,text);
return dommy.core.set_style_BANG_.call(null,text_elem,new cljs.core.Keyword(null,"top","top",-1856271961),alex.core.str_px.call(null,(alex.core.pos.call(null,new cljs.core.Keyword(null,"top","top",-1856271961),target_elem) + alex.core.half_height.call(null,target_elem))),new cljs.core.Keyword(null,"left","left",-399115937),alex.core.str_px.call(null,alex.core.pos.call(null,new cljs.core.Keyword(null,"right","right",-452581833),target_elem)));
});
alex.core.show_wooly_message_BANG_ = (function show_wooly_message_BANG_(message,delay_time){return setTimeout((function (){return alex.core.add_text_to_right_side_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target-elem","target-elem",431821740),alex.core.wooly_img,new cljs.core.Keyword(null,"text-elem","text-elem",-291915976),alex.core.wooly_speech,new cljs.core.Keyword(null,"text","text",-1790561697),message], null));
}),delay_time);
});
alex.core.toggle_wooly_transition_BANG_ = (function toggle_wooly_transition_BANG_(){dommy.core.toggle_class_BANG_.call(null,alex.core.wooly_img,"moved-top-left");
alex.core.toggle_elems.call(null,alex.core.site_main_title,alex.core.site_bottom_menu);
if(alex.core.elem_is_empty.call(null,alex.core.wooly_speech))
{return alex.core.show_wooly_message_BANG_.call(null,"hey don't click on me",(1000));
} else
{return dommy.core.set_text_BANG_.call(null,alex.core.wooly_speech,"");
}
});
dommy.core.listen_BANG_.call(null,alex.core.wooly_img,new cljs.core.Keyword(null,"click","click",1912301393),alex.core.toggle_wooly_transition_BANG_);

//# sourceMappingURL=core.js.map