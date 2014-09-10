// Compiled by ClojureScript 0.0-2311
goog.provide('alex.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
cljs.core.enable_console_print_BANG_.call(null);
alex.core.wooly_img = document.getElementById("wooly");
alex.core.wooly_speech = document.getElementById("wooly-speech");
alex.core.site_main_title = document.getElementById("site-main-title");
alex.core.site_bottom_menu = document.getElementById("site-bottom-menu");
alex.core.pos = (function pos(side,elem){return side.call(null,dommy.core.bounding_client_rect.call(null,elem));
});
alex.core.half_height = (function half_height(elem){return (elem.height / (2));
});
alex.core.str_px = (function str_px(s){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+"px");
});
alex.core.add_text_to_right_side_BANG_ = (function add_text_to_right_side_BANG_(args_map){var map__19152 = args_map;var map__19152__$1 = ((cljs.core.seq_QMARK_.call(null,map__19152))?cljs.core.apply.call(null,cljs.core.hash_map,map__19152):map__19152);var text = cljs.core.get.call(null,map__19152__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var text_elem = cljs.core.get.call(null,map__19152__$1,new cljs.core.Keyword(null,"text-elem","text-elem",-291915976));var target_elem = cljs.core.get.call(null,map__19152__$1,new cljs.core.Keyword(null,"target-elem","target-elem",431821740));dommy.core.set_text_BANG_.call(null,text_elem,text);
return dommy.core.set_style_BANG_.call(null,text_elem,new cljs.core.Keyword(null,"top","top",-1856271961),alex.core.str_px.call(null,(alex.core.pos.call(null,new cljs.core.Keyword(null,"top","top",-1856271961),target_elem) + alex.core.half_height.call(null,target_elem))),new cljs.core.Keyword(null,"left","left",-399115937),alex.core.str_px.call(null,alex.core.pos.call(null,new cljs.core.Keyword(null,"right","right",-452581833),target_elem)));
});
alex.core.events = (function events(elem,type){var out = cljs.core.async.chan.call(null);dommy.core.listen_BANG_.call(null,elem,type,((function (out){
return (function (e){return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);
return out;
});
alex.core.init_wooly_transition = (function init_wooly_transition(){var clicks = alex.core.events.call(null,alex.core.wooly_img,"click");var c__5878__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto__,clicks){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto__,clicks){
return (function (state_19224){var state_val_19225 = (state_19224[(1)]);if((state_val_19225 === (8)))
{var inst_19198 = (state_19224[(7)]);var inst_19199 = (state_19224[(8)]);var inst_19217 = (state_19224[(2)]);var inst_19218 = cljs.core.not.call(null,inst_19198);var inst_19219 = cljs.core.not.call(null,inst_19199);var inst_19198__$1 = inst_19218;var inst_19199__$1 = inst_19219;var state_19224__$1 = (function (){var statearr_19226 = state_19224;(statearr_19226[(7)] = inst_19198__$1);
(statearr_19226[(8)] = inst_19199__$1);
(statearr_19226[(9)] = inst_19217);
return statearr_19226;
})();var statearr_19227_19243 = state_19224__$1;(statearr_19227_19243[(2)] = null);
(statearr_19227_19243[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19225 === (7)))
{var inst_19215 = dommy.core.set_text_BANG_.call(null,alex.core.wooly_speech,"");var state_19224__$1 = state_19224;var statearr_19228_19244 = state_19224__$1;(statearr_19228_19244[(2)] = inst_19215);
(statearr_19228_19244[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19225 === (6)))
{var inst_19210 = [new cljs.core.Keyword(null,"target-elem","target-elem",431821740),new cljs.core.Keyword(null,"text-elem","text-elem",-291915976),new cljs.core.Keyword(null,"text","text",-1790561697)];var inst_19211 = [alex.core.wooly_img,alex.core.wooly_speech,"hey don't click on me"];var inst_19212 = cljs.core.PersistentHashMap.fromArrays(inst_19210,inst_19211);var inst_19213 = alex.core.add_text_to_right_side_BANG_.call(null,inst_19212);var state_19224__$1 = state_19224;var statearr_19229_19245 = state_19224__$1;(statearr_19229_19245[(2)] = inst_19213);
(statearr_19229_19245[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19225 === (5)))
{var inst_19198 = (state_19224[(7)]);var inst_19208 = (state_19224[(2)]);var state_19224__$1 = (function (){var statearr_19230 = state_19224;(statearr_19230[(10)] = inst_19208);
return statearr_19230;
})();if(cljs.core.truth_(inst_19198))
{var statearr_19231_19246 = state_19224__$1;(statearr_19231_19246[(1)] = (6));
} else
{var statearr_19232_19247 = state_19224__$1;(statearr_19232_19247[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19225 === (4)))
{var inst_19198 = (state_19224[(7)]);var inst_19199 = (state_19224[(8)]);var inst_19202 = (state_19224[(2)]);var inst_19203 = dommy.core.toggle_class_BANG_.call(null,alex.core.wooly_img,"moved-top-left",inst_19198);var inst_19204 = dommy.core.toggle_BANG_.call(null,alex.core.site_main_title,inst_19199);var inst_19205 = dommy.core.toggle_BANG_.call(null,alex.core.site_bottom_menu,inst_19199);var inst_19206 = cljs.core.async.timeout.call(null,(1000));var state_19224__$1 = (function (){var statearr_19233 = state_19224;(statearr_19233[(11)] = inst_19203);
(statearr_19233[(12)] = inst_19204);
(statearr_19233[(13)] = inst_19202);
(statearr_19233[(14)] = inst_19205);
return statearr_19233;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19224__$1,(5),inst_19206);
} else
{if((state_val_19225 === (3)))
{var inst_19222 = (state_19224[(2)]);var state_19224__$1 = state_19224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19224__$1,inst_19222);
} else
{if((state_val_19225 === (2)))
{var state_19224__$1 = state_19224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19224__$1,(4),clicks);
} else
{if((state_val_19225 === (1)))
{var inst_19198 = true;var inst_19199 = false;var state_19224__$1 = (function (){var statearr_19234 = state_19224;(statearr_19234[(7)] = inst_19198);
(statearr_19234[(8)] = inst_19199);
return statearr_19234;
})();var statearr_19235_19248 = state_19224__$1;(statearr_19235_19248[(2)] = null);
(statearr_19235_19248[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__5878__auto__,clicks))
;return ((function (switch__5863__auto__,c__5878__auto__,clicks){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_19239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19239[(0)] = state_machine__5864__auto__);
(statearr_19239[(1)] = (1));
return statearr_19239;
});
var state_machine__5864__auto____1 = (function (state_19224){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_19224);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e19240){if((e19240 instanceof Object))
{var ex__5867__auto__ = e19240;var statearr_19241_19249 = state_19224;(statearr_19241_19249[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19224);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19250 = state_19224;
state_19224 = G__19250;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_19224){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_19224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto__,clicks))
})();var state__5880__auto__ = (function (){var statearr_19242 = f__5879__auto__.call(null);(statearr_19242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto__);
return statearr_19242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto__,clicks))
);
return c__5878__auto__;
});
alex.core.init_wooly_transition.call(null);

//# sourceMappingURL=core.js.map