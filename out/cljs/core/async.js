// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10719 = (function (f,fn_handler,meta10720){
this.f = f;
this.fn_handler = fn_handler;
this.meta10720 = meta10720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10719.cljs$lang$type = true;
cljs.core.async.t10719.cljs$lang$ctorStr = "cljs.core.async/t10719";
cljs.core.async.t10719.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10719");
});
cljs.core.async.t10719.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10721){var self__ = this;
var _10721__$1 = this;return self__.meta10720;
});
cljs.core.async.t10719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10721,meta10720__$1){var self__ = this;
var _10721__$1 = this;return (new cljs.core.async.t10719(self__.f,self__.fn_handler,meta10720__$1));
});
cljs.core.async.__GT_t10719 = (function __GT_t10719(f__$1,fn_handler__$1,meta10720){return (new cljs.core.async.t10719(f__$1,fn_handler__$1,meta10720));
});
}
return (new cljs.core.async.t10719(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10723 = buff;if(G__10723)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__10723.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10723.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10723);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10723);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10724 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10724);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10724,ret){
return (function (){return fn1.call(null,val_10724);
});})(val_10724,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4409__auto___10725 = n;var x_10726 = (0);while(true){
if((x_10726 < n__4409__auto___10725))
{(a[x_10726] = (0));
{
var G__10727 = (x_10726 + (1));
x_10726 = G__10727;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10728 = (i + (1));
i = G__10728;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10732 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10732 = (function (flag,alt_flag,meta10733){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10733 = meta10733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10732.cljs$lang$type = true;
cljs.core.async.t10732.cljs$lang$ctorStr = "cljs.core.async/t10732";
cljs.core.async.t10732.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10732");
});})(flag))
;
cljs.core.async.t10732.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10734){var self__ = this;
var _10734__$1 = this;return self__.meta10733;
});})(flag))
;
cljs.core.async.t10732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10734,meta10733__$1){var self__ = this;
var _10734__$1 = this;return (new cljs.core.async.t10732(self__.flag,self__.alt_flag,meta10733__$1));
});})(flag))
;
cljs.core.async.__GT_t10732 = ((function (flag){
return (function __GT_t10732(flag__$1,alt_flag__$1,meta10733){return (new cljs.core.async.t10732(flag__$1,alt_flag__$1,meta10733));
});})(flag))
;
}
return (new cljs.core.async.t10732(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10738 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10738 = (function (cb,flag,alt_handler,meta10739){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10739 = meta10739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10738.cljs$lang$type = true;
cljs.core.async.t10738.cljs$lang$ctorStr = "cljs.core.async/t10738";
cljs.core.async.t10738.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10738");
});
cljs.core.async.t10738.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10740){var self__ = this;
var _10740__$1 = this;return self__.meta10739;
});
cljs.core.async.t10738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10740,meta10739__$1){var self__ = this;
var _10740__$1 = this;return (new cljs.core.async.t10738(self__.cb,self__.flag,self__.alt_handler,meta10739__$1));
});
cljs.core.async.__GT_t10738 = (function __GT_t10738(cb__$1,flag__$1,alt_handler__$1,meta10739){return (new cljs.core.async.t10738(cb__$1,flag__$1,alt_handler__$1,meta10739));
});
}
return (new cljs.core.async.t10738(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10741_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10741_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10742_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10742_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3553__auto__ = wport;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10743 = (i + (1));
i = G__10743;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3553__auto__ = ret;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3541__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3541__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10744){var map__10746 = p__10744;var map__10746__$1 = ((cljs.core.seq_QMARK_.call(null,map__10746))?cljs.core.apply.call(null,cljs.core.hash_map,map__10746):map__10746);var opts = map__10746__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__10744 = null;if (arguments.length > 1) {
  p__10744 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10744);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10747){
var ports = cljs.core.first(arglist__10747);
var p__10744 = cljs.core.rest(arglist__10747);
return alts_BANG___delegate(ports,p__10744);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5878__auto___10842 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___10842){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___10842){
return (function (state_10818){var state_val_10819 = (state_10818[(1)]);if((state_val_10819 === (7)))
{var inst_10814 = (state_10818[(2)]);var state_10818__$1 = state_10818;var statearr_10820_10843 = state_10818__$1;(statearr_10820_10843[(2)] = inst_10814);
(statearr_10820_10843[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10819 === (1)))
{var state_10818__$1 = state_10818;var statearr_10821_10844 = state_10818__$1;(statearr_10821_10844[(2)] = null);
(statearr_10821_10844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10819 === (4)))
{var inst_10797 = (state_10818[(7)]);var inst_10797__$1 = (state_10818[(2)]);var inst_10798 = (inst_10797__$1 == null);var state_10818__$1 = (function (){var statearr_10822 = state_10818;(statearr_10822[(7)] = inst_10797__$1);
return statearr_10822;
})();if(cljs.core.truth_(inst_10798))
{var statearr_10823_10845 = state_10818__$1;(statearr_10823_10845[(1)] = (5));
} else
{var statearr_10824_10846 = state_10818__$1;(statearr_10824_10846[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10819 === (13)))
{var state_10818__$1 = state_10818;var statearr_10825_10847 = state_10818__$1;(statearr_10825_10847[(2)] = null);
(statearr_10825_10847[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10819 === (6)))
{var inst_10797 = (state_10818[(7)]);var state_10818__$1 = state_10818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10818__$1,(11),to,inst_10797);
} else
{if((state_val_10819 === (3)))
{var inst_10816 = (state_10818[(2)]);var state_10818__$1 = state_10818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10818__$1,inst_10816);
} else
{if((state_val_10819 === (12)))
{var state_10818__$1 = state_10818;var statearr_10826_10848 = state_10818__$1;(statearr_10826_10848[(2)] = null);
(statearr_10826_10848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10819 === (2)))
{var state_10818__$1 = state_10818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10818__$1,(4),from);
} else
{if((state_val_10819 === (11)))
{var inst_10807 = (state_10818[(2)]);var state_10818__$1 = state_10818;if(cljs.core.truth_(inst_10807))
{var statearr_10827_10849 = state_10818__$1;(statearr_10827_10849[(1)] = (12));
} else
{var statearr_10828_10850 = state_10818__$1;(statearr_10828_10850[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10819 === (9)))
{var state_10818__$1 = state_10818;var statearr_10829_10851 = state_10818__$1;(statearr_10829_10851[(2)] = null);
(statearr_10829_10851[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10819 === (5)))
{var state_10818__$1 = state_10818;if(cljs.core.truth_(close_QMARK_))
{var statearr_10830_10852 = state_10818__$1;(statearr_10830_10852[(1)] = (8));
} else
{var statearr_10831_10853 = state_10818__$1;(statearr_10831_10853[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10819 === (14)))
{var inst_10812 = (state_10818[(2)]);var state_10818__$1 = state_10818;var statearr_10832_10854 = state_10818__$1;(statearr_10832_10854[(2)] = inst_10812);
(statearr_10832_10854[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10819 === (10)))
{var inst_10804 = (state_10818[(2)]);var state_10818__$1 = state_10818;var statearr_10833_10855 = state_10818__$1;(statearr_10833_10855[(2)] = inst_10804);
(statearr_10833_10855[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10819 === (8)))
{var inst_10801 = cljs.core.async.close_BANG_.call(null,to);var state_10818__$1 = state_10818;var statearr_10834_10856 = state_10818__$1;(statearr_10834_10856[(2)] = inst_10801);
(statearr_10834_10856[(1)] = (10));
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
}
}
}
}
}
}
});})(c__5878__auto___10842))
;return ((function (switch__5863__auto__,c__5878__auto___10842){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_10838 = [null,null,null,null,null,null,null,null];(statearr_10838[(0)] = state_machine__5864__auto__);
(statearr_10838[(1)] = (1));
return statearr_10838;
});
var state_machine__5864__auto____1 = (function (state_10818){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_10818);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e10839){if((e10839 instanceof Object))
{var ex__5867__auto__ = e10839;var statearr_10840_10857 = state_10818;(statearr_10840_10857[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10839;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10858 = state_10818;
state_10818 = G__10858;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_10818){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_10818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___10842))
})();var state__5880__auto__ = (function (){var statearr_10841 = f__5879__auto__.call(null);(statearr_10841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___10842);
return statearr_10841;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___10842))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__11042){var vec__11043 = p__11042;var v = cljs.core.nth.call(null,vec__11043,(0),null);var p = cljs.core.nth.call(null,vec__11043,(1),null);var job = vec__11043;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5878__auto___11225 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___11225,res,vec__11043,v,p,job,jobs,results){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___11225,res,vec__11043,v,p,job,jobs,results){
return (function (state_11048){var state_val_11049 = (state_11048[(1)]);if((state_val_11049 === (2)))
{var inst_11045 = (state_11048[(2)]);var inst_11046 = cljs.core.async.close_BANG_.call(null,res);var state_11048__$1 = (function (){var statearr_11050 = state_11048;(statearr_11050[(7)] = inst_11045);
return statearr_11050;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11048__$1,inst_11046);
} else
{if((state_val_11049 === (1)))
{var state_11048__$1 = state_11048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11048__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5878__auto___11225,res,vec__11043,v,p,job,jobs,results))
;return ((function (switch__5863__auto__,c__5878__auto___11225,res,vec__11043,v,p,job,jobs,results){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_11054 = [null,null,null,null,null,null,null,null];(statearr_11054[(0)] = state_machine__5864__auto__);
(statearr_11054[(1)] = (1));
return statearr_11054;
});
var state_machine__5864__auto____1 = (function (state_11048){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_11048);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e11055){if((e11055 instanceof Object))
{var ex__5867__auto__ = e11055;var statearr_11056_11226 = state_11048;(statearr_11056_11226[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11048);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11055;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11227 = state_11048;
state_11048 = G__11227;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_11048){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_11048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___11225,res,vec__11043,v,p,job,jobs,results))
})();var state__5880__auto__ = (function (){var statearr_11057 = f__5879__auto__.call(null);(statearr_11057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___11225);
return statearr_11057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___11225,res,vec__11043,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__11058){var vec__11059 = p__11058;var v = cljs.core.nth.call(null,vec__11059,(0),null);var p = cljs.core.nth.call(null,vec__11059,(1),null);var job = vec__11059;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4409__auto___11228 = n;var __11229 = (0);while(true){
if((__11229 < n__4409__auto___11228))
{var G__11060_11230 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__11060_11230) {
case "async":
var c__5878__auto___11232 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11229,c__5878__auto___11232,G__11060_11230,n__4409__auto___11228,jobs,results,process,async){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (__11229,c__5878__auto___11232,G__11060_11230,n__4409__auto___11228,jobs,results,process,async){
return (function (state_11073){var state_val_11074 = (state_11073[(1)]);if((state_val_11074 === (7)))
{var inst_11069 = (state_11073[(2)]);var state_11073__$1 = state_11073;var statearr_11075_11233 = state_11073__$1;(statearr_11075_11233[(2)] = inst_11069);
(statearr_11075_11233[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11074 === (6)))
{var state_11073__$1 = state_11073;var statearr_11076_11234 = state_11073__$1;(statearr_11076_11234[(2)] = null);
(statearr_11076_11234[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11074 === (5)))
{var state_11073__$1 = state_11073;var statearr_11077_11235 = state_11073__$1;(statearr_11077_11235[(2)] = null);
(statearr_11077_11235[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11074 === (4)))
{var inst_11063 = (state_11073[(2)]);var inst_11064 = async.call(null,inst_11063);var state_11073__$1 = state_11073;if(cljs.core.truth_(inst_11064))
{var statearr_11078_11236 = state_11073__$1;(statearr_11078_11236[(1)] = (5));
} else
{var statearr_11079_11237 = state_11073__$1;(statearr_11079_11237[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11074 === (3)))
{var inst_11071 = (state_11073[(2)]);var state_11073__$1 = state_11073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11073__$1,inst_11071);
} else
{if((state_val_11074 === (2)))
{var state_11073__$1 = state_11073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11073__$1,(4),jobs);
} else
{if((state_val_11074 === (1)))
{var state_11073__$1 = state_11073;var statearr_11080_11238 = state_11073__$1;(statearr_11080_11238[(2)] = null);
(statearr_11080_11238[(1)] = (2));
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
});})(__11229,c__5878__auto___11232,G__11060_11230,n__4409__auto___11228,jobs,results,process,async))
;return ((function (__11229,switch__5863__auto__,c__5878__auto___11232,G__11060_11230,n__4409__auto___11228,jobs,results,process,async){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_11084 = [null,null,null,null,null,null,null];(statearr_11084[(0)] = state_machine__5864__auto__);
(statearr_11084[(1)] = (1));
return statearr_11084;
});
var state_machine__5864__auto____1 = (function (state_11073){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_11073);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e11085){if((e11085 instanceof Object))
{var ex__5867__auto__ = e11085;var statearr_11086_11239 = state_11073;(statearr_11086_11239[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11085;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11240 = state_11073;
state_11073 = G__11240;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_11073){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_11073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(__11229,switch__5863__auto__,c__5878__auto___11232,G__11060_11230,n__4409__auto___11228,jobs,results,process,async))
})();var state__5880__auto__ = (function (){var statearr_11087 = f__5879__auto__.call(null);(statearr_11087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___11232);
return statearr_11087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(__11229,c__5878__auto___11232,G__11060_11230,n__4409__auto___11228,jobs,results,process,async))
);

break;
case "compute":
var c__5878__auto___11241 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11229,c__5878__auto___11241,G__11060_11230,n__4409__auto___11228,jobs,results,process,async){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (__11229,c__5878__auto___11241,G__11060_11230,n__4409__auto___11228,jobs,results,process,async){
return (function (state_11100){var state_val_11101 = (state_11100[(1)]);if((state_val_11101 === (7)))
{var inst_11096 = (state_11100[(2)]);var state_11100__$1 = state_11100;var statearr_11102_11242 = state_11100__$1;(statearr_11102_11242[(2)] = inst_11096);
(statearr_11102_11242[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (6)))
{var state_11100__$1 = state_11100;var statearr_11103_11243 = state_11100__$1;(statearr_11103_11243[(2)] = null);
(statearr_11103_11243[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (5)))
{var state_11100__$1 = state_11100;var statearr_11104_11244 = state_11100__$1;(statearr_11104_11244[(2)] = null);
(statearr_11104_11244[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (4)))
{var inst_11090 = (state_11100[(2)]);var inst_11091 = process.call(null,inst_11090);var state_11100__$1 = state_11100;if(cljs.core.truth_(inst_11091))
{var statearr_11105_11245 = state_11100__$1;(statearr_11105_11245[(1)] = (5));
} else
{var statearr_11106_11246 = state_11100__$1;(statearr_11106_11246[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (3)))
{var inst_11098 = (state_11100[(2)]);var state_11100__$1 = state_11100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11100__$1,inst_11098);
} else
{if((state_val_11101 === (2)))
{var state_11100__$1 = state_11100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11100__$1,(4),jobs);
} else
{if((state_val_11101 === (1)))
{var state_11100__$1 = state_11100;var statearr_11107_11247 = state_11100__$1;(statearr_11107_11247[(2)] = null);
(statearr_11107_11247[(1)] = (2));
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
});})(__11229,c__5878__auto___11241,G__11060_11230,n__4409__auto___11228,jobs,results,process,async))
;return ((function (__11229,switch__5863__auto__,c__5878__auto___11241,G__11060_11230,n__4409__auto___11228,jobs,results,process,async){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_11111 = [null,null,null,null,null,null,null];(statearr_11111[(0)] = state_machine__5864__auto__);
(statearr_11111[(1)] = (1));
return statearr_11111;
});
var state_machine__5864__auto____1 = (function (state_11100){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_11100);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e11112){if((e11112 instanceof Object))
{var ex__5867__auto__ = e11112;var statearr_11113_11248 = state_11100;(statearr_11113_11248[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11100);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11112;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11249 = state_11100;
state_11100 = G__11249;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_11100){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_11100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(__11229,switch__5863__auto__,c__5878__auto___11241,G__11060_11230,n__4409__auto___11228,jobs,results,process,async))
})();var state__5880__auto__ = (function (){var statearr_11114 = f__5879__auto__.call(null);(statearr_11114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___11241);
return statearr_11114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(__11229,c__5878__auto___11241,G__11060_11230,n__4409__auto___11228,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__11250 = (__11229 + (1));
__11229 = G__11250;
continue;
}
} else
{}
break;
}
var c__5878__auto___11251 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___11251,jobs,results,process,async){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___11251,jobs,results,process,async){
return (function (state_11136){var state_val_11137 = (state_11136[(1)]);if((state_val_11137 === (9)))
{var inst_11129 = (state_11136[(2)]);var state_11136__$1 = (function (){var statearr_11138 = state_11136;(statearr_11138[(7)] = inst_11129);
return statearr_11138;
})();var statearr_11139_11252 = state_11136__$1;(statearr_11139_11252[(2)] = null);
(statearr_11139_11252[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11137 === (8)))
{var inst_11122 = (state_11136[(8)]);var inst_11127 = (state_11136[(2)]);var state_11136__$1 = (function (){var statearr_11140 = state_11136;(statearr_11140[(9)] = inst_11127);
return statearr_11140;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11136__$1,(9),results,inst_11122);
} else
{if((state_val_11137 === (7)))
{var inst_11132 = (state_11136[(2)]);var state_11136__$1 = state_11136;var statearr_11141_11253 = state_11136__$1;(statearr_11141_11253[(2)] = inst_11132);
(statearr_11141_11253[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11137 === (6)))
{var inst_11122 = (state_11136[(8)]);var inst_11117 = (state_11136[(10)]);var inst_11122__$1 = cljs.core.async.chan.call(null,(1));var inst_11123 = cljs.core.PersistentVector.EMPTY_NODE;var inst_11124 = [inst_11117,inst_11122__$1];var inst_11125 = (new cljs.core.PersistentVector(null,2,(5),inst_11123,inst_11124,null));var state_11136__$1 = (function (){var statearr_11142 = state_11136;(statearr_11142[(8)] = inst_11122__$1);
return statearr_11142;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11136__$1,(8),jobs,inst_11125);
} else
{if((state_val_11137 === (5)))
{var inst_11120 = cljs.core.async.close_BANG_.call(null,jobs);var state_11136__$1 = state_11136;var statearr_11143_11254 = state_11136__$1;(statearr_11143_11254[(2)] = inst_11120);
(statearr_11143_11254[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11137 === (4)))
{var inst_11117 = (state_11136[(10)]);var inst_11117__$1 = (state_11136[(2)]);var inst_11118 = (inst_11117__$1 == null);var state_11136__$1 = (function (){var statearr_11144 = state_11136;(statearr_11144[(10)] = inst_11117__$1);
return statearr_11144;
})();if(cljs.core.truth_(inst_11118))
{var statearr_11145_11255 = state_11136__$1;(statearr_11145_11255[(1)] = (5));
} else
{var statearr_11146_11256 = state_11136__$1;(statearr_11146_11256[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11137 === (3)))
{var inst_11134 = (state_11136[(2)]);var state_11136__$1 = state_11136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11136__$1,inst_11134);
} else
{if((state_val_11137 === (2)))
{var state_11136__$1 = state_11136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11136__$1,(4),from);
} else
{if((state_val_11137 === (1)))
{var state_11136__$1 = state_11136;var statearr_11147_11257 = state_11136__$1;(statearr_11147_11257[(2)] = null);
(statearr_11147_11257[(1)] = (2));
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
}
});})(c__5878__auto___11251,jobs,results,process,async))
;return ((function (switch__5863__auto__,c__5878__auto___11251,jobs,results,process,async){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_11151 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11151[(0)] = state_machine__5864__auto__);
(statearr_11151[(1)] = (1));
return statearr_11151;
});
var state_machine__5864__auto____1 = (function (state_11136){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_11136);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e11152){if((e11152 instanceof Object))
{var ex__5867__auto__ = e11152;var statearr_11153_11258 = state_11136;(statearr_11153_11258[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11136);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11152;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11259 = state_11136;
state_11136 = G__11259;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_11136){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_11136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___11251,jobs,results,process,async))
})();var state__5880__auto__ = (function (){var statearr_11154 = f__5879__auto__.call(null);(statearr_11154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___11251);
return statearr_11154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___11251,jobs,results,process,async))
);
var c__5878__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto__,jobs,results,process,async){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto__,jobs,results,process,async){
return (function (state_11192){var state_val_11193 = (state_11192[(1)]);if((state_val_11193 === (7)))
{var inst_11188 = (state_11192[(2)]);var state_11192__$1 = state_11192;var statearr_11194_11260 = state_11192__$1;(statearr_11194_11260[(2)] = inst_11188);
(statearr_11194_11260[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (20)))
{var state_11192__$1 = state_11192;var statearr_11195_11261 = state_11192__$1;(statearr_11195_11261[(2)] = null);
(statearr_11195_11261[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (1)))
{var state_11192__$1 = state_11192;var statearr_11196_11262 = state_11192__$1;(statearr_11196_11262[(2)] = null);
(statearr_11196_11262[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (4)))
{var inst_11157 = (state_11192[(7)]);var inst_11157__$1 = (state_11192[(2)]);var inst_11158 = (inst_11157__$1 == null);var state_11192__$1 = (function (){var statearr_11197 = state_11192;(statearr_11197[(7)] = inst_11157__$1);
return statearr_11197;
})();if(cljs.core.truth_(inst_11158))
{var statearr_11198_11263 = state_11192__$1;(statearr_11198_11263[(1)] = (5));
} else
{var statearr_11199_11264 = state_11192__$1;(statearr_11199_11264[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (15)))
{var inst_11170 = (state_11192[(8)]);var state_11192__$1 = state_11192;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11192__$1,(18),to,inst_11170);
} else
{if((state_val_11193 === (21)))
{var inst_11183 = (state_11192[(2)]);var state_11192__$1 = state_11192;var statearr_11200_11265 = state_11192__$1;(statearr_11200_11265[(2)] = inst_11183);
(statearr_11200_11265[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (13)))
{var inst_11185 = (state_11192[(2)]);var state_11192__$1 = (function (){var statearr_11201 = state_11192;(statearr_11201[(9)] = inst_11185);
return statearr_11201;
})();var statearr_11202_11266 = state_11192__$1;(statearr_11202_11266[(2)] = null);
(statearr_11202_11266[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (6)))
{var inst_11157 = (state_11192[(7)]);var state_11192__$1 = state_11192;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11192__$1,(11),inst_11157);
} else
{if((state_val_11193 === (17)))
{var inst_11178 = (state_11192[(2)]);var state_11192__$1 = state_11192;if(cljs.core.truth_(inst_11178))
{var statearr_11203_11267 = state_11192__$1;(statearr_11203_11267[(1)] = (19));
} else
{var statearr_11204_11268 = state_11192__$1;(statearr_11204_11268[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (3)))
{var inst_11190 = (state_11192[(2)]);var state_11192__$1 = state_11192;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11192__$1,inst_11190);
} else
{if((state_val_11193 === (12)))
{var inst_11167 = (state_11192[(10)]);var state_11192__$1 = state_11192;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11192__$1,(14),inst_11167);
} else
{if((state_val_11193 === (2)))
{var state_11192__$1 = state_11192;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11192__$1,(4),results);
} else
{if((state_val_11193 === (19)))
{var state_11192__$1 = state_11192;var statearr_11205_11269 = state_11192__$1;(statearr_11205_11269[(2)] = null);
(statearr_11205_11269[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (11)))
{var inst_11167 = (state_11192[(2)]);var state_11192__$1 = (function (){var statearr_11206 = state_11192;(statearr_11206[(10)] = inst_11167);
return statearr_11206;
})();var statearr_11207_11270 = state_11192__$1;(statearr_11207_11270[(2)] = null);
(statearr_11207_11270[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (9)))
{var state_11192__$1 = state_11192;var statearr_11208_11271 = state_11192__$1;(statearr_11208_11271[(2)] = null);
(statearr_11208_11271[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (5)))
{var state_11192__$1 = state_11192;if(cljs.core.truth_(close_QMARK_))
{var statearr_11209_11272 = state_11192__$1;(statearr_11209_11272[(1)] = (8));
} else
{var statearr_11210_11273 = state_11192__$1;(statearr_11210_11273[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (14)))
{var inst_11172 = (state_11192[(11)]);var inst_11170 = (state_11192[(8)]);var inst_11170__$1 = (state_11192[(2)]);var inst_11171 = (inst_11170__$1 == null);var inst_11172__$1 = cljs.core.not.call(null,inst_11171);var state_11192__$1 = (function (){var statearr_11211 = state_11192;(statearr_11211[(11)] = inst_11172__$1);
(statearr_11211[(8)] = inst_11170__$1);
return statearr_11211;
})();if(inst_11172__$1)
{var statearr_11212_11274 = state_11192__$1;(statearr_11212_11274[(1)] = (15));
} else
{var statearr_11213_11275 = state_11192__$1;(statearr_11213_11275[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (16)))
{var inst_11172 = (state_11192[(11)]);var state_11192__$1 = state_11192;var statearr_11214_11276 = state_11192__$1;(statearr_11214_11276[(2)] = inst_11172);
(statearr_11214_11276[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (10)))
{var inst_11164 = (state_11192[(2)]);var state_11192__$1 = state_11192;var statearr_11215_11277 = state_11192__$1;(statearr_11215_11277[(2)] = inst_11164);
(statearr_11215_11277[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (18)))
{var inst_11175 = (state_11192[(2)]);var state_11192__$1 = state_11192;var statearr_11216_11278 = state_11192__$1;(statearr_11216_11278[(2)] = inst_11175);
(statearr_11216_11278[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11193 === (8)))
{var inst_11161 = cljs.core.async.close_BANG_.call(null,to);var state_11192__$1 = state_11192;var statearr_11217_11279 = state_11192__$1;(statearr_11217_11279[(2)] = inst_11161);
(statearr_11217_11279[(1)] = (10));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5878__auto__,jobs,results,process,async))
;return ((function (switch__5863__auto__,c__5878__auto__,jobs,results,process,async){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_11221 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11221[(0)] = state_machine__5864__auto__);
(statearr_11221[(1)] = (1));
return statearr_11221;
});
var state_machine__5864__auto____1 = (function (state_11192){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_11192);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e11222){if((e11222 instanceof Object))
{var ex__5867__auto__ = e11222;var statearr_11223_11280 = state_11192;(statearr_11223_11280[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11192);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11222;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11281 = state_11192;
state_11192 = G__11281;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_11192){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_11192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto__,jobs,results,process,async))
})();var state__5880__auto__ = (function (){var statearr_11224 = f__5879__auto__.call(null);(statearr_11224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto__);
return statearr_11224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto__,jobs,results,process,async))
);
return c__5878__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5878__auto___11382 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___11382,tc,fc){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___11382,tc,fc){
return (function (state_11357){var state_val_11358 = (state_11357[(1)]);if((state_val_11358 === (7)))
{var inst_11353 = (state_11357[(2)]);var state_11357__$1 = state_11357;var statearr_11359_11383 = state_11357__$1;(statearr_11359_11383[(2)] = inst_11353);
(statearr_11359_11383[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11358 === (1)))
{var state_11357__$1 = state_11357;var statearr_11360_11384 = state_11357__$1;(statearr_11360_11384[(2)] = null);
(statearr_11360_11384[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11358 === (4)))
{var inst_11334 = (state_11357[(7)]);var inst_11334__$1 = (state_11357[(2)]);var inst_11335 = (inst_11334__$1 == null);var state_11357__$1 = (function (){var statearr_11361 = state_11357;(statearr_11361[(7)] = inst_11334__$1);
return statearr_11361;
})();if(cljs.core.truth_(inst_11335))
{var statearr_11362_11385 = state_11357__$1;(statearr_11362_11385[(1)] = (5));
} else
{var statearr_11363_11386 = state_11357__$1;(statearr_11363_11386[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11358 === (13)))
{var state_11357__$1 = state_11357;var statearr_11364_11387 = state_11357__$1;(statearr_11364_11387[(2)] = null);
(statearr_11364_11387[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11358 === (6)))
{var inst_11334 = (state_11357[(7)]);var inst_11340 = p.call(null,inst_11334);var state_11357__$1 = state_11357;if(cljs.core.truth_(inst_11340))
{var statearr_11365_11388 = state_11357__$1;(statearr_11365_11388[(1)] = (9));
} else
{var statearr_11366_11389 = state_11357__$1;(statearr_11366_11389[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11358 === (3)))
{var inst_11355 = (state_11357[(2)]);var state_11357__$1 = state_11357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11357__$1,inst_11355);
} else
{if((state_val_11358 === (12)))
{var state_11357__$1 = state_11357;var statearr_11367_11390 = state_11357__$1;(statearr_11367_11390[(2)] = null);
(statearr_11367_11390[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11358 === (2)))
{var state_11357__$1 = state_11357;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11357__$1,(4),ch);
} else
{if((state_val_11358 === (11)))
{var inst_11334 = (state_11357[(7)]);var inst_11344 = (state_11357[(2)]);var state_11357__$1 = state_11357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11357__$1,(8),inst_11344,inst_11334);
} else
{if((state_val_11358 === (9)))
{var state_11357__$1 = state_11357;var statearr_11368_11391 = state_11357__$1;(statearr_11368_11391[(2)] = tc);
(statearr_11368_11391[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11358 === (5)))
{var inst_11337 = cljs.core.async.close_BANG_.call(null,tc);var inst_11338 = cljs.core.async.close_BANG_.call(null,fc);var state_11357__$1 = (function (){var statearr_11369 = state_11357;(statearr_11369[(8)] = inst_11337);
return statearr_11369;
})();var statearr_11370_11392 = state_11357__$1;(statearr_11370_11392[(2)] = inst_11338);
(statearr_11370_11392[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11358 === (14)))
{var inst_11351 = (state_11357[(2)]);var state_11357__$1 = state_11357;var statearr_11371_11393 = state_11357__$1;(statearr_11371_11393[(2)] = inst_11351);
(statearr_11371_11393[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11358 === (10)))
{var state_11357__$1 = state_11357;var statearr_11372_11394 = state_11357__$1;(statearr_11372_11394[(2)] = fc);
(statearr_11372_11394[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11358 === (8)))
{var inst_11346 = (state_11357[(2)]);var state_11357__$1 = state_11357;if(cljs.core.truth_(inst_11346))
{var statearr_11373_11395 = state_11357__$1;(statearr_11373_11395[(1)] = (12));
} else
{var statearr_11374_11396 = state_11357__$1;(statearr_11374_11396[(1)] = (13));
}
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
}
}
}
}
}
}
});})(c__5878__auto___11382,tc,fc))
;return ((function (switch__5863__auto__,c__5878__auto___11382,tc,fc){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_11378 = [null,null,null,null,null,null,null,null,null];(statearr_11378[(0)] = state_machine__5864__auto__);
(statearr_11378[(1)] = (1));
return statearr_11378;
});
var state_machine__5864__auto____1 = (function (state_11357){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_11357);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e11379){if((e11379 instanceof Object))
{var ex__5867__auto__ = e11379;var statearr_11380_11397 = state_11357;(statearr_11380_11397[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11357);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11379;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11398 = state_11357;
state_11357 = G__11398;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_11357){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_11357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___11382,tc,fc))
})();var state__5880__auto__ = (function (){var statearr_11381 = f__5879__auto__.call(null);(statearr_11381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___11382);
return statearr_11381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___11382,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5878__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto__){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto__){
return (function (state_11445){var state_val_11446 = (state_11445[(1)]);if((state_val_11446 === (7)))
{var inst_11441 = (state_11445[(2)]);var state_11445__$1 = state_11445;var statearr_11447_11463 = state_11445__$1;(statearr_11447_11463[(2)] = inst_11441);
(statearr_11447_11463[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (6)))
{var inst_11431 = (state_11445[(7)]);var inst_11434 = (state_11445[(8)]);var inst_11438 = f.call(null,inst_11431,inst_11434);var inst_11431__$1 = inst_11438;var state_11445__$1 = (function (){var statearr_11448 = state_11445;(statearr_11448[(7)] = inst_11431__$1);
return statearr_11448;
})();var statearr_11449_11464 = state_11445__$1;(statearr_11449_11464[(2)] = null);
(statearr_11449_11464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (5)))
{var inst_11431 = (state_11445[(7)]);var state_11445__$1 = state_11445;var statearr_11450_11465 = state_11445__$1;(statearr_11450_11465[(2)] = inst_11431);
(statearr_11450_11465[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (4)))
{var inst_11434 = (state_11445[(8)]);var inst_11434__$1 = (state_11445[(2)]);var inst_11435 = (inst_11434__$1 == null);var state_11445__$1 = (function (){var statearr_11451 = state_11445;(statearr_11451[(8)] = inst_11434__$1);
return statearr_11451;
})();if(cljs.core.truth_(inst_11435))
{var statearr_11452_11466 = state_11445__$1;(statearr_11452_11466[(1)] = (5));
} else
{var statearr_11453_11467 = state_11445__$1;(statearr_11453_11467[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (3)))
{var inst_11443 = (state_11445[(2)]);var state_11445__$1 = state_11445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11445__$1,inst_11443);
} else
{if((state_val_11446 === (2)))
{var state_11445__$1 = state_11445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11445__$1,(4),ch);
} else
{if((state_val_11446 === (1)))
{var inst_11431 = init;var state_11445__$1 = (function (){var statearr_11454 = state_11445;(statearr_11454[(7)] = inst_11431);
return statearr_11454;
})();var statearr_11455_11468 = state_11445__$1;(statearr_11455_11468[(2)] = null);
(statearr_11455_11468[(1)] = (2));
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
});})(c__5878__auto__))
;return ((function (switch__5863__auto__,c__5878__auto__){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_11459 = [null,null,null,null,null,null,null,null,null];(statearr_11459[(0)] = state_machine__5864__auto__);
(statearr_11459[(1)] = (1));
return statearr_11459;
});
var state_machine__5864__auto____1 = (function (state_11445){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_11445);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e11460){if((e11460 instanceof Object))
{var ex__5867__auto__ = e11460;var statearr_11461_11469 = state_11445;(statearr_11461_11469[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11445);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11460;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11470 = state_11445;
state_11445 = G__11470;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_11445){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_11445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto__))
})();var state__5880__auto__ = (function (){var statearr_11462 = f__5879__auto__.call(null);(statearr_11462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto__);
return statearr_11462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto__))
);
return c__5878__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5878__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto__){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto__){
return (function (state_11544){var state_val_11545 = (state_11544[(1)]);if((state_val_11545 === (7)))
{var inst_11526 = (state_11544[(2)]);var state_11544__$1 = state_11544;var statearr_11546_11569 = state_11544__$1;(statearr_11546_11569[(2)] = inst_11526);
(statearr_11546_11569[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11545 === (1)))
{var inst_11520 = cljs.core.seq.call(null,coll);var inst_11521 = inst_11520;var state_11544__$1 = (function (){var statearr_11547 = state_11544;(statearr_11547[(7)] = inst_11521);
return statearr_11547;
})();var statearr_11548_11570 = state_11544__$1;(statearr_11548_11570[(2)] = null);
(statearr_11548_11570[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11545 === (4)))
{var inst_11521 = (state_11544[(7)]);var inst_11524 = cljs.core.first.call(null,inst_11521);var state_11544__$1 = state_11544;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11544__$1,(7),ch,inst_11524);
} else
{if((state_val_11545 === (13)))
{var inst_11538 = (state_11544[(2)]);var state_11544__$1 = state_11544;var statearr_11549_11571 = state_11544__$1;(statearr_11549_11571[(2)] = inst_11538);
(statearr_11549_11571[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11545 === (6)))
{var inst_11529 = (state_11544[(2)]);var state_11544__$1 = state_11544;if(cljs.core.truth_(inst_11529))
{var statearr_11550_11572 = state_11544__$1;(statearr_11550_11572[(1)] = (8));
} else
{var statearr_11551_11573 = state_11544__$1;(statearr_11551_11573[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11545 === (3)))
{var inst_11542 = (state_11544[(2)]);var state_11544__$1 = state_11544;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11544__$1,inst_11542);
} else
{if((state_val_11545 === (12)))
{var state_11544__$1 = state_11544;var statearr_11552_11574 = state_11544__$1;(statearr_11552_11574[(2)] = null);
(statearr_11552_11574[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11545 === (2)))
{var inst_11521 = (state_11544[(7)]);var state_11544__$1 = state_11544;if(cljs.core.truth_(inst_11521))
{var statearr_11553_11575 = state_11544__$1;(statearr_11553_11575[(1)] = (4));
} else
{var statearr_11554_11576 = state_11544__$1;(statearr_11554_11576[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11545 === (11)))
{var inst_11535 = cljs.core.async.close_BANG_.call(null,ch);var state_11544__$1 = state_11544;var statearr_11555_11577 = state_11544__$1;(statearr_11555_11577[(2)] = inst_11535);
(statearr_11555_11577[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11545 === (9)))
{var state_11544__$1 = state_11544;if(cljs.core.truth_(close_QMARK_))
{var statearr_11556_11578 = state_11544__$1;(statearr_11556_11578[(1)] = (11));
} else
{var statearr_11557_11579 = state_11544__$1;(statearr_11557_11579[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11545 === (5)))
{var inst_11521 = (state_11544[(7)]);var state_11544__$1 = state_11544;var statearr_11558_11580 = state_11544__$1;(statearr_11558_11580[(2)] = inst_11521);
(statearr_11558_11580[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11545 === (10)))
{var inst_11540 = (state_11544[(2)]);var state_11544__$1 = state_11544;var statearr_11559_11581 = state_11544__$1;(statearr_11559_11581[(2)] = inst_11540);
(statearr_11559_11581[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11545 === (8)))
{var inst_11521 = (state_11544[(7)]);var inst_11531 = cljs.core.next.call(null,inst_11521);var inst_11521__$1 = inst_11531;var state_11544__$1 = (function (){var statearr_11560 = state_11544;(statearr_11560[(7)] = inst_11521__$1);
return statearr_11560;
})();var statearr_11561_11582 = state_11544__$1;(statearr_11561_11582[(2)] = null);
(statearr_11561_11582[(1)] = (2));
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
}
}
}
}
}
});})(c__5878__auto__))
;return ((function (switch__5863__auto__,c__5878__auto__){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_11565 = [null,null,null,null,null,null,null,null];(statearr_11565[(0)] = state_machine__5864__auto__);
(statearr_11565[(1)] = (1));
return statearr_11565;
});
var state_machine__5864__auto____1 = (function (state_11544){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_11544);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e11566){if((e11566 instanceof Object))
{var ex__5867__auto__ = e11566;var statearr_11567_11583 = state_11544;(statearr_11567_11583[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11544);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11566;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11584 = state_11544;
state_11544 = G__11584;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_11544){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_11544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto__))
})();var state__5880__auto__ = (function (){var statearr_11568 = f__5879__auto__.call(null);(statearr_11568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto__);
return statearr_11568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto__))
);
return c__5878__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11586 = {};return obj11586;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3541__auto__ = _;if(and__3541__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4180__auto__ = (((_ == null))?null:_);return (function (){var or__3553__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11588 = {};return obj11588;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11810 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11810 = (function (cs,ch,mult,meta11811){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11811 = meta11811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11810.cljs$lang$type = true;
cljs.core.async.t11810.cljs$lang$ctorStr = "cljs.core.async/t11810";
cljs.core.async.t11810.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11810");
});})(cs))
;
cljs.core.async.t11810.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11810.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11810.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11810.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11810.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11810.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11810.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11812){var self__ = this;
var _11812__$1 = this;return self__.meta11811;
});})(cs))
;
cljs.core.async.t11810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11812,meta11811__$1){var self__ = this;
var _11812__$1 = this;return (new cljs.core.async.t11810(self__.cs,self__.ch,self__.mult,meta11811__$1));
});})(cs))
;
cljs.core.async.__GT_t11810 = ((function (cs){
return (function __GT_t11810(cs__$1,ch__$1,mult__$1,meta11811){return (new cljs.core.async.t11810(cs__$1,ch__$1,mult__$1,meta11811));
});})(cs))
;
}
return (new cljs.core.async.t11810(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5878__auto___12031 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___12031,cs,m,dchan,dctr,done){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___12031,cs,m,dchan,dctr,done){
return (function (state_11943){var state_val_11944 = (state_11943[(1)]);if((state_val_11944 === (7)))
{var inst_11939 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11945_12032 = state_11943__$1;(statearr_11945_12032[(2)] = inst_11939);
(statearr_11945_12032[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (20)))
{var inst_11844 = (state_11943[(7)]);var inst_11854 = cljs.core.first.call(null,inst_11844);var inst_11855 = cljs.core.nth.call(null,inst_11854,(0),null);var inst_11856 = cljs.core.nth.call(null,inst_11854,(1),null);var state_11943__$1 = (function (){var statearr_11946 = state_11943;(statearr_11946[(8)] = inst_11855);
return statearr_11946;
})();if(cljs.core.truth_(inst_11856))
{var statearr_11947_12033 = state_11943__$1;(statearr_11947_12033[(1)] = (22));
} else
{var statearr_11948_12034 = state_11943__$1;(statearr_11948_12034[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (27)))
{var inst_11884 = (state_11943[(9)]);var inst_11891 = (state_11943[(10)]);var inst_11815 = (state_11943[(11)]);var inst_11886 = (state_11943[(12)]);var inst_11891__$1 = cljs.core._nth.call(null,inst_11884,inst_11886);var inst_11892 = cljs.core.async.put_BANG_.call(null,inst_11891__$1,inst_11815,done);var state_11943__$1 = (function (){var statearr_11949 = state_11943;(statearr_11949[(10)] = inst_11891__$1);
return statearr_11949;
})();if(cljs.core.truth_(inst_11892))
{var statearr_11950_12035 = state_11943__$1;(statearr_11950_12035[(1)] = (30));
} else
{var statearr_11951_12036 = state_11943__$1;(statearr_11951_12036[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (1)))
{var state_11943__$1 = state_11943;var statearr_11952_12037 = state_11943__$1;(statearr_11952_12037[(2)] = null);
(statearr_11952_12037[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (24)))
{var inst_11844 = (state_11943[(7)]);var inst_11861 = (state_11943[(2)]);var inst_11862 = cljs.core.next.call(null,inst_11844);var inst_11824 = inst_11862;var inst_11825 = null;var inst_11826 = (0);var inst_11827 = (0);var state_11943__$1 = (function (){var statearr_11953 = state_11943;(statearr_11953[(13)] = inst_11826);
(statearr_11953[(14)] = inst_11825);
(statearr_11953[(15)] = inst_11861);
(statearr_11953[(16)] = inst_11824);
(statearr_11953[(17)] = inst_11827);
return statearr_11953;
})();var statearr_11954_12038 = state_11943__$1;(statearr_11954_12038[(2)] = null);
(statearr_11954_12038[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (39)))
{var state_11943__$1 = state_11943;var statearr_11958_12039 = state_11943__$1;(statearr_11958_12039[(2)] = null);
(statearr_11958_12039[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (4)))
{var inst_11815 = (state_11943[(11)]);var inst_11815__$1 = (state_11943[(2)]);var inst_11816 = (inst_11815__$1 == null);var state_11943__$1 = (function (){var statearr_11959 = state_11943;(statearr_11959[(11)] = inst_11815__$1);
return statearr_11959;
})();if(cljs.core.truth_(inst_11816))
{var statearr_11960_12040 = state_11943__$1;(statearr_11960_12040[(1)] = (5));
} else
{var statearr_11961_12041 = state_11943__$1;(statearr_11961_12041[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (15)))
{var inst_11826 = (state_11943[(13)]);var inst_11825 = (state_11943[(14)]);var inst_11824 = (state_11943[(16)]);var inst_11827 = (state_11943[(17)]);var inst_11840 = (state_11943[(2)]);var inst_11841 = (inst_11827 + (1));var tmp11955 = inst_11826;var tmp11956 = inst_11825;var tmp11957 = inst_11824;var inst_11824__$1 = tmp11957;var inst_11825__$1 = tmp11956;var inst_11826__$1 = tmp11955;var inst_11827__$1 = inst_11841;var state_11943__$1 = (function (){var statearr_11962 = state_11943;(statearr_11962[(13)] = inst_11826__$1);
(statearr_11962[(14)] = inst_11825__$1);
(statearr_11962[(16)] = inst_11824__$1);
(statearr_11962[(17)] = inst_11827__$1);
(statearr_11962[(18)] = inst_11840);
return statearr_11962;
})();var statearr_11963_12042 = state_11943__$1;(statearr_11963_12042[(2)] = null);
(statearr_11963_12042[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (21)))
{var inst_11865 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11967_12043 = state_11943__$1;(statearr_11967_12043[(2)] = inst_11865);
(statearr_11967_12043[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (31)))
{var inst_11891 = (state_11943[(10)]);var inst_11895 = done.call(null,null);var inst_11896 = cljs.core.async.untap_STAR_.call(null,m,inst_11891);var state_11943__$1 = (function (){var statearr_11968 = state_11943;(statearr_11968[(19)] = inst_11895);
return statearr_11968;
})();var statearr_11969_12044 = state_11943__$1;(statearr_11969_12044[(2)] = inst_11896);
(statearr_11969_12044[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (32)))
{var inst_11884 = (state_11943[(9)]);var inst_11885 = (state_11943[(20)]);var inst_11886 = (state_11943[(12)]);var inst_11883 = (state_11943[(21)]);var inst_11898 = (state_11943[(2)]);var inst_11899 = (inst_11886 + (1));var tmp11964 = inst_11884;var tmp11965 = inst_11885;var tmp11966 = inst_11883;var inst_11883__$1 = tmp11966;var inst_11884__$1 = tmp11964;var inst_11885__$1 = tmp11965;var inst_11886__$1 = inst_11899;var state_11943__$1 = (function (){var statearr_11970 = state_11943;(statearr_11970[(9)] = inst_11884__$1);
(statearr_11970[(22)] = inst_11898);
(statearr_11970[(20)] = inst_11885__$1);
(statearr_11970[(12)] = inst_11886__$1);
(statearr_11970[(21)] = inst_11883__$1);
return statearr_11970;
})();var statearr_11971_12045 = state_11943__$1;(statearr_11971_12045[(2)] = null);
(statearr_11971_12045[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (40)))
{var inst_11911 = (state_11943[(23)]);var inst_11915 = done.call(null,null);var inst_11916 = cljs.core.async.untap_STAR_.call(null,m,inst_11911);var state_11943__$1 = (function (){var statearr_11972 = state_11943;(statearr_11972[(24)] = inst_11915);
return statearr_11972;
})();var statearr_11973_12046 = state_11943__$1;(statearr_11973_12046[(2)] = inst_11916);
(statearr_11973_12046[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (33)))
{var inst_11902 = (state_11943[(25)]);var inst_11904 = cljs.core.chunked_seq_QMARK_.call(null,inst_11902);var state_11943__$1 = state_11943;if(inst_11904)
{var statearr_11974_12047 = state_11943__$1;(statearr_11974_12047[(1)] = (36));
} else
{var statearr_11975_12048 = state_11943__$1;(statearr_11975_12048[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (13)))
{var inst_11834 = (state_11943[(26)]);var inst_11837 = cljs.core.async.close_BANG_.call(null,inst_11834);var state_11943__$1 = state_11943;var statearr_11976_12049 = state_11943__$1;(statearr_11976_12049[(2)] = inst_11837);
(statearr_11976_12049[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (22)))
{var inst_11855 = (state_11943[(8)]);var inst_11858 = cljs.core.async.close_BANG_.call(null,inst_11855);var state_11943__$1 = state_11943;var statearr_11977_12050 = state_11943__$1;(statearr_11977_12050[(2)] = inst_11858);
(statearr_11977_12050[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (36)))
{var inst_11902 = (state_11943[(25)]);var inst_11906 = cljs.core.chunk_first.call(null,inst_11902);var inst_11907 = cljs.core.chunk_rest.call(null,inst_11902);var inst_11908 = cljs.core.count.call(null,inst_11906);var inst_11883 = inst_11907;var inst_11884 = inst_11906;var inst_11885 = inst_11908;var inst_11886 = (0);var state_11943__$1 = (function (){var statearr_11978 = state_11943;(statearr_11978[(9)] = inst_11884);
(statearr_11978[(20)] = inst_11885);
(statearr_11978[(12)] = inst_11886);
(statearr_11978[(21)] = inst_11883);
return statearr_11978;
})();var statearr_11979_12051 = state_11943__$1;(statearr_11979_12051[(2)] = null);
(statearr_11979_12051[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (41)))
{var inst_11902 = (state_11943[(25)]);var inst_11918 = (state_11943[(2)]);var inst_11919 = cljs.core.next.call(null,inst_11902);var inst_11883 = inst_11919;var inst_11884 = null;var inst_11885 = (0);var inst_11886 = (0);var state_11943__$1 = (function (){var statearr_11980 = state_11943;(statearr_11980[(9)] = inst_11884);
(statearr_11980[(27)] = inst_11918);
(statearr_11980[(20)] = inst_11885);
(statearr_11980[(12)] = inst_11886);
(statearr_11980[(21)] = inst_11883);
return statearr_11980;
})();var statearr_11981_12052 = state_11943__$1;(statearr_11981_12052[(2)] = null);
(statearr_11981_12052[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (43)))
{var state_11943__$1 = state_11943;var statearr_11982_12053 = state_11943__$1;(statearr_11982_12053[(2)] = null);
(statearr_11982_12053[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (29)))
{var inst_11927 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11983_12054 = state_11943__$1;(statearr_11983_12054[(2)] = inst_11927);
(statearr_11983_12054[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (44)))
{var inst_11936 = (state_11943[(2)]);var state_11943__$1 = (function (){var statearr_11984 = state_11943;(statearr_11984[(28)] = inst_11936);
return statearr_11984;
})();var statearr_11985_12055 = state_11943__$1;(statearr_11985_12055[(2)] = null);
(statearr_11985_12055[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (6)))
{var inst_11875 = (state_11943[(29)]);var inst_11874 = cljs.core.deref.call(null,cs);var inst_11875__$1 = cljs.core.keys.call(null,inst_11874);var inst_11876 = cljs.core.count.call(null,inst_11875__$1);var inst_11877 = cljs.core.reset_BANG_.call(null,dctr,inst_11876);var inst_11882 = cljs.core.seq.call(null,inst_11875__$1);var inst_11883 = inst_11882;var inst_11884 = null;var inst_11885 = (0);var inst_11886 = (0);var state_11943__$1 = (function (){var statearr_11986 = state_11943;(statearr_11986[(9)] = inst_11884);
(statearr_11986[(20)] = inst_11885);
(statearr_11986[(29)] = inst_11875__$1);
(statearr_11986[(12)] = inst_11886);
(statearr_11986[(30)] = inst_11877);
(statearr_11986[(21)] = inst_11883);
return statearr_11986;
})();var statearr_11987_12056 = state_11943__$1;(statearr_11987_12056[(2)] = null);
(statearr_11987_12056[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (28)))
{var inst_11902 = (state_11943[(25)]);var inst_11883 = (state_11943[(21)]);var inst_11902__$1 = cljs.core.seq.call(null,inst_11883);var state_11943__$1 = (function (){var statearr_11988 = state_11943;(statearr_11988[(25)] = inst_11902__$1);
return statearr_11988;
})();if(inst_11902__$1)
{var statearr_11989_12057 = state_11943__$1;(statearr_11989_12057[(1)] = (33));
} else
{var statearr_11990_12058 = state_11943__$1;(statearr_11990_12058[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (25)))
{var inst_11885 = (state_11943[(20)]);var inst_11886 = (state_11943[(12)]);var inst_11888 = (inst_11886 < inst_11885);var inst_11889 = inst_11888;var state_11943__$1 = state_11943;if(cljs.core.truth_(inst_11889))
{var statearr_11991_12059 = state_11943__$1;(statearr_11991_12059[(1)] = (27));
} else
{var statearr_11992_12060 = state_11943__$1;(statearr_11992_12060[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (34)))
{var state_11943__$1 = state_11943;var statearr_11993_12061 = state_11943__$1;(statearr_11993_12061[(2)] = null);
(statearr_11993_12061[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (17)))
{var state_11943__$1 = state_11943;var statearr_11994_12062 = state_11943__$1;(statearr_11994_12062[(2)] = null);
(statearr_11994_12062[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (3)))
{var inst_11941 = (state_11943[(2)]);var state_11943__$1 = state_11943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11943__$1,inst_11941);
} else
{if((state_val_11944 === (12)))
{var inst_11870 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11995_12063 = state_11943__$1;(statearr_11995_12063[(2)] = inst_11870);
(statearr_11995_12063[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (2)))
{var state_11943__$1 = state_11943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11943__$1,(4),ch);
} else
{if((state_val_11944 === (23)))
{var state_11943__$1 = state_11943;var statearr_11996_12064 = state_11943__$1;(statearr_11996_12064[(2)] = null);
(statearr_11996_12064[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (35)))
{var inst_11925 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11997_12065 = state_11943__$1;(statearr_11997_12065[(2)] = inst_11925);
(statearr_11997_12065[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (19)))
{var inst_11844 = (state_11943[(7)]);var inst_11848 = cljs.core.chunk_first.call(null,inst_11844);var inst_11849 = cljs.core.chunk_rest.call(null,inst_11844);var inst_11850 = cljs.core.count.call(null,inst_11848);var inst_11824 = inst_11849;var inst_11825 = inst_11848;var inst_11826 = inst_11850;var inst_11827 = (0);var state_11943__$1 = (function (){var statearr_11998 = state_11943;(statearr_11998[(13)] = inst_11826);
(statearr_11998[(14)] = inst_11825);
(statearr_11998[(16)] = inst_11824);
(statearr_11998[(17)] = inst_11827);
return statearr_11998;
})();var statearr_11999_12066 = state_11943__$1;(statearr_11999_12066[(2)] = null);
(statearr_11999_12066[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (11)))
{var inst_11844 = (state_11943[(7)]);var inst_11824 = (state_11943[(16)]);var inst_11844__$1 = cljs.core.seq.call(null,inst_11824);var state_11943__$1 = (function (){var statearr_12000 = state_11943;(statearr_12000[(7)] = inst_11844__$1);
return statearr_12000;
})();if(inst_11844__$1)
{var statearr_12001_12067 = state_11943__$1;(statearr_12001_12067[(1)] = (16));
} else
{var statearr_12002_12068 = state_11943__$1;(statearr_12002_12068[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (9)))
{var inst_11872 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_12003_12069 = state_11943__$1;(statearr_12003_12069[(2)] = inst_11872);
(statearr_12003_12069[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (5)))
{var inst_11822 = cljs.core.deref.call(null,cs);var inst_11823 = cljs.core.seq.call(null,inst_11822);var inst_11824 = inst_11823;var inst_11825 = null;var inst_11826 = (0);var inst_11827 = (0);var state_11943__$1 = (function (){var statearr_12004 = state_11943;(statearr_12004[(13)] = inst_11826);
(statearr_12004[(14)] = inst_11825);
(statearr_12004[(16)] = inst_11824);
(statearr_12004[(17)] = inst_11827);
return statearr_12004;
})();var statearr_12005_12070 = state_11943__$1;(statearr_12005_12070[(2)] = null);
(statearr_12005_12070[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (14)))
{var state_11943__$1 = state_11943;var statearr_12006_12071 = state_11943__$1;(statearr_12006_12071[(2)] = null);
(statearr_12006_12071[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (45)))
{var inst_11933 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_12007_12072 = state_11943__$1;(statearr_12007_12072[(2)] = inst_11933);
(statearr_12007_12072[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (26)))
{var inst_11875 = (state_11943[(29)]);var inst_11929 = (state_11943[(2)]);var inst_11930 = cljs.core.seq.call(null,inst_11875);var state_11943__$1 = (function (){var statearr_12008 = state_11943;(statearr_12008[(31)] = inst_11929);
return statearr_12008;
})();if(inst_11930)
{var statearr_12009_12073 = state_11943__$1;(statearr_12009_12073[(1)] = (42));
} else
{var statearr_12010_12074 = state_11943__$1;(statearr_12010_12074[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (16)))
{var inst_11844 = (state_11943[(7)]);var inst_11846 = cljs.core.chunked_seq_QMARK_.call(null,inst_11844);var state_11943__$1 = state_11943;if(inst_11846)
{var statearr_12011_12075 = state_11943__$1;(statearr_12011_12075[(1)] = (19));
} else
{var statearr_12012_12076 = state_11943__$1;(statearr_12012_12076[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (38)))
{var inst_11922 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_12013_12077 = state_11943__$1;(statearr_12013_12077[(2)] = inst_11922);
(statearr_12013_12077[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (30)))
{var state_11943__$1 = state_11943;var statearr_12014_12078 = state_11943__$1;(statearr_12014_12078[(2)] = null);
(statearr_12014_12078[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (10)))
{var inst_11825 = (state_11943[(14)]);var inst_11827 = (state_11943[(17)]);var inst_11833 = cljs.core._nth.call(null,inst_11825,inst_11827);var inst_11834 = cljs.core.nth.call(null,inst_11833,(0),null);var inst_11835 = cljs.core.nth.call(null,inst_11833,(1),null);var state_11943__$1 = (function (){var statearr_12015 = state_11943;(statearr_12015[(26)] = inst_11834);
return statearr_12015;
})();if(cljs.core.truth_(inst_11835))
{var statearr_12016_12079 = state_11943__$1;(statearr_12016_12079[(1)] = (13));
} else
{var statearr_12017_12080 = state_11943__$1;(statearr_12017_12080[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (18)))
{var inst_11868 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_12018_12081 = state_11943__$1;(statearr_12018_12081[(2)] = inst_11868);
(statearr_12018_12081[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (42)))
{var state_11943__$1 = state_11943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11943__$1,(45),dchan);
} else
{if((state_val_11944 === (37)))
{var inst_11902 = (state_11943[(25)]);var inst_11815 = (state_11943[(11)]);var inst_11911 = (state_11943[(23)]);var inst_11911__$1 = cljs.core.first.call(null,inst_11902);var inst_11912 = cljs.core.async.put_BANG_.call(null,inst_11911__$1,inst_11815,done);var state_11943__$1 = (function (){var statearr_12019 = state_11943;(statearr_12019[(23)] = inst_11911__$1);
return statearr_12019;
})();if(cljs.core.truth_(inst_11912))
{var statearr_12020_12082 = state_11943__$1;(statearr_12020_12082[(1)] = (39));
} else
{var statearr_12021_12083 = state_11943__$1;(statearr_12021_12083[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (8)))
{var inst_11826 = (state_11943[(13)]);var inst_11827 = (state_11943[(17)]);var inst_11829 = (inst_11827 < inst_11826);var inst_11830 = inst_11829;var state_11943__$1 = state_11943;if(cljs.core.truth_(inst_11830))
{var statearr_12022_12084 = state_11943__$1;(statearr_12022_12084[(1)] = (10));
} else
{var statearr_12023_12085 = state_11943__$1;(statearr_12023_12085[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5878__auto___12031,cs,m,dchan,dctr,done))
;return ((function (switch__5863__auto__,c__5878__auto___12031,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_12027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12027[(0)] = state_machine__5864__auto__);
(statearr_12027[(1)] = (1));
return statearr_12027;
});
var state_machine__5864__auto____1 = (function (state_11943){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_11943);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e12028){if((e12028 instanceof Object))
{var ex__5867__auto__ = e12028;var statearr_12029_12086 = state_11943;(statearr_12029_12086[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12028;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12087 = state_11943;
state_11943 = G__12087;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_11943){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_11943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___12031,cs,m,dchan,dctr,done))
})();var state__5880__auto__ = (function (){var statearr_12030 = f__5879__auto__.call(null);(statearr_12030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___12031);
return statearr_12030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___12031,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12089 = {};return obj12089;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12209 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12209 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12210){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12210 = meta12210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12209.cljs$lang$type = true;
cljs.core.async.t12209.cljs$lang$ctorStr = "cljs.core.async/t12209";
cljs.core.async.t12209.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12209");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12211){var self__ = this;
var _12211__$1 = this;return self__.meta12210;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12211,meta12210__$1){var self__ = this;
var _12211__$1 = this;return (new cljs.core.async.t12209(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12210__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12209 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12209(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12210){return (new cljs.core.async.t12209(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12210));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12209(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5878__auto___12328 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___12328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___12328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12281){var state_val_12282 = (state_12281[(1)]);if((state_val_12282 === (7)))
{var inst_12225 = (state_12281[(7)]);var inst_12230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12225);var state_12281__$1 = state_12281;var statearr_12283_12329 = state_12281__$1;(statearr_12283_12329[(2)] = inst_12230);
(statearr_12283_12329[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (20)))
{var inst_12240 = (state_12281[(8)]);var state_12281__$1 = state_12281;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12281__$1,(23),out,inst_12240);
} else
{if((state_val_12282 === (1)))
{var inst_12215 = (state_12281[(9)]);var inst_12215__$1 = calc_state.call(null);var inst_12216 = cljs.core.seq_QMARK_.call(null,inst_12215__$1);var state_12281__$1 = (function (){var statearr_12284 = state_12281;(statearr_12284[(9)] = inst_12215__$1);
return statearr_12284;
})();if(inst_12216)
{var statearr_12285_12330 = state_12281__$1;(statearr_12285_12330[(1)] = (2));
} else
{var statearr_12286_12331 = state_12281__$1;(statearr_12286_12331[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (24)))
{var inst_12233 = (state_12281[(10)]);var inst_12225 = inst_12233;var state_12281__$1 = (function (){var statearr_12287 = state_12281;(statearr_12287[(7)] = inst_12225);
return statearr_12287;
})();var statearr_12288_12332 = state_12281__$1;(statearr_12288_12332[(2)] = null);
(statearr_12288_12332[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (4)))
{var inst_12215 = (state_12281[(9)]);var inst_12221 = (state_12281[(2)]);var inst_12222 = cljs.core.get.call(null,inst_12221,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12223 = cljs.core.get.call(null,inst_12221,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12224 = cljs.core.get.call(null,inst_12221,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12225 = inst_12215;var state_12281__$1 = (function (){var statearr_12289 = state_12281;(statearr_12289[(11)] = inst_12223);
(statearr_12289[(12)] = inst_12222);
(statearr_12289[(13)] = inst_12224);
(statearr_12289[(7)] = inst_12225);
return statearr_12289;
})();var statearr_12290_12333 = state_12281__$1;(statearr_12290_12333[(2)] = null);
(statearr_12290_12333[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (15)))
{var state_12281__$1 = state_12281;var statearr_12291_12334 = state_12281__$1;(statearr_12291_12334[(2)] = null);
(statearr_12291_12334[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (21)))
{var inst_12233 = (state_12281[(10)]);var inst_12225 = inst_12233;var state_12281__$1 = (function (){var statearr_12292 = state_12281;(statearr_12292[(7)] = inst_12225);
return statearr_12292;
})();var statearr_12293_12335 = state_12281__$1;(statearr_12293_12335[(2)] = null);
(statearr_12293_12335[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (13)))
{var inst_12277 = (state_12281[(2)]);var state_12281__$1 = state_12281;var statearr_12294_12336 = state_12281__$1;(statearr_12294_12336[(2)] = inst_12277);
(statearr_12294_12336[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (22)))
{var inst_12275 = (state_12281[(2)]);var state_12281__$1 = state_12281;var statearr_12295_12337 = state_12281__$1;(statearr_12295_12337[(2)] = inst_12275);
(statearr_12295_12337[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (6)))
{var inst_12279 = (state_12281[(2)]);var state_12281__$1 = state_12281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12281__$1,inst_12279);
} else
{if((state_val_12282 === (25)))
{var state_12281__$1 = state_12281;var statearr_12296_12338 = state_12281__$1;(statearr_12296_12338[(2)] = null);
(statearr_12296_12338[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (17)))
{var inst_12255 = (state_12281[(14)]);var state_12281__$1 = state_12281;var statearr_12297_12339 = state_12281__$1;(statearr_12297_12339[(2)] = inst_12255);
(statearr_12297_12339[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (3)))
{var inst_12215 = (state_12281[(9)]);var state_12281__$1 = state_12281;var statearr_12298_12340 = state_12281__$1;(statearr_12298_12340[(2)] = inst_12215);
(statearr_12298_12340[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (12)))
{var inst_12236 = (state_12281[(15)]);var inst_12255 = (state_12281[(14)]);var inst_12241 = (state_12281[(16)]);var inst_12255__$1 = inst_12236.call(null,inst_12241);var state_12281__$1 = (function (){var statearr_12299 = state_12281;(statearr_12299[(14)] = inst_12255__$1);
return statearr_12299;
})();if(cljs.core.truth_(inst_12255__$1))
{var statearr_12300_12341 = state_12281__$1;(statearr_12300_12341[(1)] = (17));
} else
{var statearr_12301_12342 = state_12281__$1;(statearr_12301_12342[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (2)))
{var inst_12215 = (state_12281[(9)]);var inst_12218 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12215);var state_12281__$1 = state_12281;var statearr_12302_12343 = state_12281__$1;(statearr_12302_12343[(2)] = inst_12218);
(statearr_12302_12343[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (23)))
{var inst_12266 = (state_12281[(2)]);var state_12281__$1 = state_12281;if(cljs.core.truth_(inst_12266))
{var statearr_12303_12344 = state_12281__$1;(statearr_12303_12344[(1)] = (24));
} else
{var statearr_12304_12345 = state_12281__$1;(statearr_12304_12345[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (19)))
{var inst_12263 = (state_12281[(2)]);var state_12281__$1 = state_12281;if(cljs.core.truth_(inst_12263))
{var statearr_12305_12346 = state_12281__$1;(statearr_12305_12346[(1)] = (20));
} else
{var statearr_12306_12347 = state_12281__$1;(statearr_12306_12347[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (11)))
{var inst_12240 = (state_12281[(8)]);var inst_12246 = (inst_12240 == null);var state_12281__$1 = state_12281;if(cljs.core.truth_(inst_12246))
{var statearr_12307_12348 = state_12281__$1;(statearr_12307_12348[(1)] = (14));
} else
{var statearr_12308_12349 = state_12281__$1;(statearr_12308_12349[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (9)))
{var inst_12233 = (state_12281[(10)]);var inst_12233__$1 = (state_12281[(2)]);var inst_12234 = cljs.core.get.call(null,inst_12233__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12235 = cljs.core.get.call(null,inst_12233__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12236 = cljs.core.get.call(null,inst_12233__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12281__$1 = (function (){var statearr_12309 = state_12281;(statearr_12309[(15)] = inst_12236);
(statearr_12309[(10)] = inst_12233__$1);
(statearr_12309[(17)] = inst_12235);
return statearr_12309;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12281__$1,(10),inst_12234);
} else
{if((state_val_12282 === (5)))
{var inst_12225 = (state_12281[(7)]);var inst_12228 = cljs.core.seq_QMARK_.call(null,inst_12225);var state_12281__$1 = state_12281;if(inst_12228)
{var statearr_12310_12350 = state_12281__$1;(statearr_12310_12350[(1)] = (7));
} else
{var statearr_12311_12351 = state_12281__$1;(statearr_12311_12351[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (14)))
{var inst_12241 = (state_12281[(16)]);var inst_12248 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12241);var state_12281__$1 = state_12281;var statearr_12312_12352 = state_12281__$1;(statearr_12312_12352[(2)] = inst_12248);
(statearr_12312_12352[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (26)))
{var inst_12271 = (state_12281[(2)]);var state_12281__$1 = state_12281;var statearr_12313_12353 = state_12281__$1;(statearr_12313_12353[(2)] = inst_12271);
(statearr_12313_12353[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (16)))
{var inst_12251 = (state_12281[(2)]);var inst_12252 = calc_state.call(null);var inst_12225 = inst_12252;var state_12281__$1 = (function (){var statearr_12314 = state_12281;(statearr_12314[(18)] = inst_12251);
(statearr_12314[(7)] = inst_12225);
return statearr_12314;
})();var statearr_12315_12354 = state_12281__$1;(statearr_12315_12354[(2)] = null);
(statearr_12315_12354[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (10)))
{var inst_12240 = (state_12281[(8)]);var inst_12241 = (state_12281[(16)]);var inst_12239 = (state_12281[(2)]);var inst_12240__$1 = cljs.core.nth.call(null,inst_12239,(0),null);var inst_12241__$1 = cljs.core.nth.call(null,inst_12239,(1),null);var inst_12242 = (inst_12240__$1 == null);var inst_12243 = cljs.core._EQ_.call(null,inst_12241__$1,change);var inst_12244 = (inst_12242) || (inst_12243);var state_12281__$1 = (function (){var statearr_12316 = state_12281;(statearr_12316[(8)] = inst_12240__$1);
(statearr_12316[(16)] = inst_12241__$1);
return statearr_12316;
})();if(cljs.core.truth_(inst_12244))
{var statearr_12317_12355 = state_12281__$1;(statearr_12317_12355[(1)] = (11));
} else
{var statearr_12318_12356 = state_12281__$1;(statearr_12318_12356[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (18)))
{var inst_12236 = (state_12281[(15)]);var inst_12241 = (state_12281[(16)]);var inst_12235 = (state_12281[(17)]);var inst_12258 = cljs.core.empty_QMARK_.call(null,inst_12236);var inst_12259 = inst_12235.call(null,inst_12241);var inst_12260 = cljs.core.not.call(null,inst_12259);var inst_12261 = (inst_12258) && (inst_12260);var state_12281__$1 = state_12281;var statearr_12319_12357 = state_12281__$1;(statearr_12319_12357[(2)] = inst_12261);
(statearr_12319_12357[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12282 === (8)))
{var inst_12225 = (state_12281[(7)]);var state_12281__$1 = state_12281;var statearr_12320_12358 = state_12281__$1;(statearr_12320_12358[(2)] = inst_12225);
(statearr_12320_12358[(1)] = (9));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5878__auto___12328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5863__auto__,c__5878__auto___12328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_12324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12324[(0)] = state_machine__5864__auto__);
(statearr_12324[(1)] = (1));
return statearr_12324;
});
var state_machine__5864__auto____1 = (function (state_12281){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_12281);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e12325){if((e12325 instanceof Object))
{var ex__5867__auto__ = e12325;var statearr_12326_12359 = state_12281;(statearr_12326_12359[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12281);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12325;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12360 = state_12281;
state_12281 = G__12360;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_12281){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_12281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___12328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5880__auto__ = (function (){var statearr_12327 = f__5879__auto__.call(null);(statearr_12327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___12328);
return statearr_12327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___12328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12362 = {};return obj12362;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3553__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3553__auto__,mults){
return (function (p1__12363_SHARP_){if(cljs.core.truth_(p1__12363_SHARP_.call(null,topic)))
{return p1__12363_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12363_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12486 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12487){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12487 = meta12487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12486.cljs$lang$type = true;
cljs.core.async.t12486.cljs$lang$ctorStr = "cljs.core.async/t12486";
cljs.core.async.t12486.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12486");
});})(mults,ensure_mult))
;
cljs.core.async.t12486.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12486.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12486.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12486.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12488){var self__ = this;
var _12488__$1 = this;return self__.meta12487;
});})(mults,ensure_mult))
;
cljs.core.async.t12486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12488,meta12487__$1){var self__ = this;
var _12488__$1 = this;return (new cljs.core.async.t12486(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12487__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12486 = ((function (mults,ensure_mult){
return (function __GT_t12486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12487){return (new cljs.core.async.t12486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12487));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12486(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5878__auto___12608 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___12608,mults,ensure_mult,p){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___12608,mults,ensure_mult,p){
return (function (state_12560){var state_val_12561 = (state_12560[(1)]);if((state_val_12561 === (7)))
{var inst_12556 = (state_12560[(2)]);var state_12560__$1 = state_12560;var statearr_12562_12609 = state_12560__$1;(statearr_12562_12609[(2)] = inst_12556);
(statearr_12562_12609[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (20)))
{var state_12560__$1 = state_12560;var statearr_12563_12610 = state_12560__$1;(statearr_12563_12610[(2)] = null);
(statearr_12563_12610[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (1)))
{var state_12560__$1 = state_12560;var statearr_12564_12611 = state_12560__$1;(statearr_12564_12611[(2)] = null);
(statearr_12564_12611[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (24)))
{var inst_12539 = (state_12560[(7)]);var inst_12548 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12539);var state_12560__$1 = state_12560;var statearr_12565_12612 = state_12560__$1;(statearr_12565_12612[(2)] = inst_12548);
(statearr_12565_12612[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (4)))
{var inst_12491 = (state_12560[(8)]);var inst_12491__$1 = (state_12560[(2)]);var inst_12492 = (inst_12491__$1 == null);var state_12560__$1 = (function (){var statearr_12566 = state_12560;(statearr_12566[(8)] = inst_12491__$1);
return statearr_12566;
})();if(cljs.core.truth_(inst_12492))
{var statearr_12567_12613 = state_12560__$1;(statearr_12567_12613[(1)] = (5));
} else
{var statearr_12568_12614 = state_12560__$1;(statearr_12568_12614[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (15)))
{var inst_12533 = (state_12560[(2)]);var state_12560__$1 = state_12560;var statearr_12569_12615 = state_12560__$1;(statearr_12569_12615[(2)] = inst_12533);
(statearr_12569_12615[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (21)))
{var inst_12553 = (state_12560[(2)]);var state_12560__$1 = (function (){var statearr_12570 = state_12560;(statearr_12570[(9)] = inst_12553);
return statearr_12570;
})();var statearr_12571_12616 = state_12560__$1;(statearr_12571_12616[(2)] = null);
(statearr_12571_12616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (13)))
{var inst_12515 = (state_12560[(10)]);var inst_12517 = cljs.core.chunked_seq_QMARK_.call(null,inst_12515);var state_12560__$1 = state_12560;if(inst_12517)
{var statearr_12572_12617 = state_12560__$1;(statearr_12572_12617[(1)] = (16));
} else
{var statearr_12573_12618 = state_12560__$1;(statearr_12573_12618[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (22)))
{var inst_12545 = (state_12560[(2)]);var state_12560__$1 = state_12560;if(cljs.core.truth_(inst_12545))
{var statearr_12574_12619 = state_12560__$1;(statearr_12574_12619[(1)] = (23));
} else
{var statearr_12575_12620 = state_12560__$1;(statearr_12575_12620[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (6)))
{var inst_12541 = (state_12560[(11)]);var inst_12539 = (state_12560[(7)]);var inst_12491 = (state_12560[(8)]);var inst_12539__$1 = topic_fn.call(null,inst_12491);var inst_12540 = cljs.core.deref.call(null,mults);var inst_12541__$1 = cljs.core.get.call(null,inst_12540,inst_12539__$1);var state_12560__$1 = (function (){var statearr_12576 = state_12560;(statearr_12576[(11)] = inst_12541__$1);
(statearr_12576[(7)] = inst_12539__$1);
return statearr_12576;
})();if(cljs.core.truth_(inst_12541__$1))
{var statearr_12577_12621 = state_12560__$1;(statearr_12577_12621[(1)] = (19));
} else
{var statearr_12578_12622 = state_12560__$1;(statearr_12578_12622[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (25)))
{var inst_12550 = (state_12560[(2)]);var state_12560__$1 = state_12560;var statearr_12579_12623 = state_12560__$1;(statearr_12579_12623[(2)] = inst_12550);
(statearr_12579_12623[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (17)))
{var inst_12515 = (state_12560[(10)]);var inst_12524 = cljs.core.first.call(null,inst_12515);var inst_12525 = cljs.core.async.muxch_STAR_.call(null,inst_12524);var inst_12526 = cljs.core.async.close_BANG_.call(null,inst_12525);var inst_12527 = cljs.core.next.call(null,inst_12515);var inst_12501 = inst_12527;var inst_12502 = null;var inst_12503 = (0);var inst_12504 = (0);var state_12560__$1 = (function (){var statearr_12580 = state_12560;(statearr_12580[(12)] = inst_12501);
(statearr_12580[(13)] = inst_12502);
(statearr_12580[(14)] = inst_12526);
(statearr_12580[(15)] = inst_12503);
(statearr_12580[(16)] = inst_12504);
return statearr_12580;
})();var statearr_12581_12624 = state_12560__$1;(statearr_12581_12624[(2)] = null);
(statearr_12581_12624[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (3)))
{var inst_12558 = (state_12560[(2)]);var state_12560__$1 = state_12560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12560__$1,inst_12558);
} else
{if((state_val_12561 === (12)))
{var inst_12535 = (state_12560[(2)]);var state_12560__$1 = state_12560;var statearr_12582_12625 = state_12560__$1;(statearr_12582_12625[(2)] = inst_12535);
(statearr_12582_12625[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (2)))
{var state_12560__$1 = state_12560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12560__$1,(4),ch);
} else
{if((state_val_12561 === (23)))
{var state_12560__$1 = state_12560;var statearr_12583_12626 = state_12560__$1;(statearr_12583_12626[(2)] = null);
(statearr_12583_12626[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (19)))
{var inst_12541 = (state_12560[(11)]);var inst_12491 = (state_12560[(8)]);var inst_12543 = cljs.core.async.muxch_STAR_.call(null,inst_12541);var state_12560__$1 = state_12560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12560__$1,(22),inst_12543,inst_12491);
} else
{if((state_val_12561 === (11)))
{var inst_12501 = (state_12560[(12)]);var inst_12515 = (state_12560[(10)]);var inst_12515__$1 = cljs.core.seq.call(null,inst_12501);var state_12560__$1 = (function (){var statearr_12584 = state_12560;(statearr_12584[(10)] = inst_12515__$1);
return statearr_12584;
})();if(inst_12515__$1)
{var statearr_12585_12627 = state_12560__$1;(statearr_12585_12627[(1)] = (13));
} else
{var statearr_12586_12628 = state_12560__$1;(statearr_12586_12628[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (9)))
{var inst_12537 = (state_12560[(2)]);var state_12560__$1 = state_12560;var statearr_12587_12629 = state_12560__$1;(statearr_12587_12629[(2)] = inst_12537);
(statearr_12587_12629[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (5)))
{var inst_12498 = cljs.core.deref.call(null,mults);var inst_12499 = cljs.core.vals.call(null,inst_12498);var inst_12500 = cljs.core.seq.call(null,inst_12499);var inst_12501 = inst_12500;var inst_12502 = null;var inst_12503 = (0);var inst_12504 = (0);var state_12560__$1 = (function (){var statearr_12588 = state_12560;(statearr_12588[(12)] = inst_12501);
(statearr_12588[(13)] = inst_12502);
(statearr_12588[(15)] = inst_12503);
(statearr_12588[(16)] = inst_12504);
return statearr_12588;
})();var statearr_12589_12630 = state_12560__$1;(statearr_12589_12630[(2)] = null);
(statearr_12589_12630[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (14)))
{var state_12560__$1 = state_12560;var statearr_12593_12631 = state_12560__$1;(statearr_12593_12631[(2)] = null);
(statearr_12593_12631[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (16)))
{var inst_12515 = (state_12560[(10)]);var inst_12519 = cljs.core.chunk_first.call(null,inst_12515);var inst_12520 = cljs.core.chunk_rest.call(null,inst_12515);var inst_12521 = cljs.core.count.call(null,inst_12519);var inst_12501 = inst_12520;var inst_12502 = inst_12519;var inst_12503 = inst_12521;var inst_12504 = (0);var state_12560__$1 = (function (){var statearr_12594 = state_12560;(statearr_12594[(12)] = inst_12501);
(statearr_12594[(13)] = inst_12502);
(statearr_12594[(15)] = inst_12503);
(statearr_12594[(16)] = inst_12504);
return statearr_12594;
})();var statearr_12595_12632 = state_12560__$1;(statearr_12595_12632[(2)] = null);
(statearr_12595_12632[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (10)))
{var inst_12501 = (state_12560[(12)]);var inst_12502 = (state_12560[(13)]);var inst_12503 = (state_12560[(15)]);var inst_12504 = (state_12560[(16)]);var inst_12509 = cljs.core._nth.call(null,inst_12502,inst_12504);var inst_12510 = cljs.core.async.muxch_STAR_.call(null,inst_12509);var inst_12511 = cljs.core.async.close_BANG_.call(null,inst_12510);var inst_12512 = (inst_12504 + (1));var tmp12590 = inst_12501;var tmp12591 = inst_12502;var tmp12592 = inst_12503;var inst_12501__$1 = tmp12590;var inst_12502__$1 = tmp12591;var inst_12503__$1 = tmp12592;var inst_12504__$1 = inst_12512;var state_12560__$1 = (function (){var statearr_12596 = state_12560;(statearr_12596[(17)] = inst_12511);
(statearr_12596[(12)] = inst_12501__$1);
(statearr_12596[(13)] = inst_12502__$1);
(statearr_12596[(15)] = inst_12503__$1);
(statearr_12596[(16)] = inst_12504__$1);
return statearr_12596;
})();var statearr_12597_12633 = state_12560__$1;(statearr_12597_12633[(2)] = null);
(statearr_12597_12633[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (18)))
{var inst_12530 = (state_12560[(2)]);var state_12560__$1 = state_12560;var statearr_12598_12634 = state_12560__$1;(statearr_12598_12634[(2)] = inst_12530);
(statearr_12598_12634[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12561 === (8)))
{var inst_12503 = (state_12560[(15)]);var inst_12504 = (state_12560[(16)]);var inst_12506 = (inst_12504 < inst_12503);var inst_12507 = inst_12506;var state_12560__$1 = state_12560;if(cljs.core.truth_(inst_12507))
{var statearr_12599_12635 = state_12560__$1;(statearr_12599_12635[(1)] = (10));
} else
{var statearr_12600_12636 = state_12560__$1;(statearr_12600_12636[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5878__auto___12608,mults,ensure_mult,p))
;return ((function (switch__5863__auto__,c__5878__auto___12608,mults,ensure_mult,p){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_12604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12604[(0)] = state_machine__5864__auto__);
(statearr_12604[(1)] = (1));
return statearr_12604;
});
var state_machine__5864__auto____1 = (function (state_12560){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_12560);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e12605){if((e12605 instanceof Object))
{var ex__5867__auto__ = e12605;var statearr_12606_12637 = state_12560;(statearr_12606_12637[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12560);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12605;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12638 = state_12560;
state_12560 = G__12638;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_12560){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_12560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___12608,mults,ensure_mult,p))
})();var state__5880__auto__ = (function (){var statearr_12607 = f__5879__auto__.call(null);(statearr_12607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___12608);
return statearr_12607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___12608,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5878__auto___12775 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___12775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___12775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12745){var state_val_12746 = (state_12745[(1)]);if((state_val_12746 === (7)))
{var state_12745__$1 = state_12745;var statearr_12747_12776 = state_12745__$1;(statearr_12747_12776[(2)] = null);
(statearr_12747_12776[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (1)))
{var state_12745__$1 = state_12745;var statearr_12748_12777 = state_12745__$1;(statearr_12748_12777[(2)] = null);
(statearr_12748_12777[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (4)))
{var inst_12709 = (state_12745[(7)]);var inst_12711 = (inst_12709 < cnt);var state_12745__$1 = state_12745;if(cljs.core.truth_(inst_12711))
{var statearr_12749_12778 = state_12745__$1;(statearr_12749_12778[(1)] = (6));
} else
{var statearr_12750_12779 = state_12745__$1;(statearr_12750_12779[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (15)))
{var inst_12741 = (state_12745[(2)]);var state_12745__$1 = state_12745;var statearr_12751_12780 = state_12745__$1;(statearr_12751_12780[(2)] = inst_12741);
(statearr_12751_12780[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (13)))
{var inst_12734 = cljs.core.async.close_BANG_.call(null,out);var state_12745__$1 = state_12745;var statearr_12752_12781 = state_12745__$1;(statearr_12752_12781[(2)] = inst_12734);
(statearr_12752_12781[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (6)))
{var state_12745__$1 = state_12745;var statearr_12753_12782 = state_12745__$1;(statearr_12753_12782[(2)] = null);
(statearr_12753_12782[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (3)))
{var inst_12743 = (state_12745[(2)]);var state_12745__$1 = state_12745;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12745__$1,inst_12743);
} else
{if((state_val_12746 === (12)))
{var inst_12731 = (state_12745[(8)]);var inst_12731__$1 = (state_12745[(2)]);var inst_12732 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12731__$1);var state_12745__$1 = (function (){var statearr_12754 = state_12745;(statearr_12754[(8)] = inst_12731__$1);
return statearr_12754;
})();if(cljs.core.truth_(inst_12732))
{var statearr_12755_12783 = state_12745__$1;(statearr_12755_12783[(1)] = (13));
} else
{var statearr_12756_12784 = state_12745__$1;(statearr_12756_12784[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (2)))
{var inst_12708 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12709 = (0);var state_12745__$1 = (function (){var statearr_12757 = state_12745;(statearr_12757[(7)] = inst_12709);
(statearr_12757[(9)] = inst_12708);
return statearr_12757;
})();var statearr_12758_12785 = state_12745__$1;(statearr_12758_12785[(2)] = null);
(statearr_12758_12785[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (11)))
{var inst_12709 = (state_12745[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12745,(10),Object,null,(9));var inst_12718 = chs__$1.call(null,inst_12709);var inst_12719 = done.call(null,inst_12709);var inst_12720 = cljs.core.async.take_BANG_.call(null,inst_12718,inst_12719);var state_12745__$1 = state_12745;var statearr_12759_12786 = state_12745__$1;(statearr_12759_12786[(2)] = inst_12720);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12745__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (9)))
{var inst_12709 = (state_12745[(7)]);var inst_12722 = (state_12745[(2)]);var inst_12723 = (inst_12709 + (1));var inst_12709__$1 = inst_12723;var state_12745__$1 = (function (){var statearr_12760 = state_12745;(statearr_12760[(10)] = inst_12722);
(statearr_12760[(7)] = inst_12709__$1);
return statearr_12760;
})();var statearr_12761_12787 = state_12745__$1;(statearr_12761_12787[(2)] = null);
(statearr_12761_12787[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (5)))
{var inst_12729 = (state_12745[(2)]);var state_12745__$1 = (function (){var statearr_12762 = state_12745;(statearr_12762[(11)] = inst_12729);
return statearr_12762;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12745__$1,(12),dchan);
} else
{if((state_val_12746 === (14)))
{var inst_12731 = (state_12745[(8)]);var inst_12736 = cljs.core.apply.call(null,f,inst_12731);var state_12745__$1 = state_12745;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12745__$1,(16),out,inst_12736);
} else
{if((state_val_12746 === (16)))
{var inst_12738 = (state_12745[(2)]);var state_12745__$1 = (function (){var statearr_12763 = state_12745;(statearr_12763[(12)] = inst_12738);
return statearr_12763;
})();var statearr_12764_12788 = state_12745__$1;(statearr_12764_12788[(2)] = null);
(statearr_12764_12788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (10)))
{var inst_12713 = (state_12745[(2)]);var inst_12714 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12745__$1 = (function (){var statearr_12765 = state_12745;(statearr_12765[(13)] = inst_12713);
return statearr_12765;
})();var statearr_12766_12789 = state_12745__$1;(statearr_12766_12789[(2)] = inst_12714);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12745__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12746 === (8)))
{var inst_12727 = (state_12745[(2)]);var state_12745__$1 = state_12745;var statearr_12767_12790 = state_12745__$1;(statearr_12767_12790[(2)] = inst_12727);
(statearr_12767_12790[(1)] = (5));
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
}
}
}
}
}
}
}
}
});})(c__5878__auto___12775,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5863__auto__,c__5878__auto___12775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_12771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12771[(0)] = state_machine__5864__auto__);
(statearr_12771[(1)] = (1));
return statearr_12771;
});
var state_machine__5864__auto____1 = (function (state_12745){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_12745);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e12772){if((e12772 instanceof Object))
{var ex__5867__auto__ = e12772;var statearr_12773_12791 = state_12745;(statearr_12773_12791[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12745);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12772;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12792 = state_12745;
state_12745 = G__12792;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_12745){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_12745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___12775,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5880__auto__ = (function (){var statearr_12774 = f__5879__auto__.call(null);(statearr_12774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___12775);
return statearr_12774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___12775,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5878__auto___12900 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___12900,out){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___12900,out){
return (function (state_12876){var state_val_12877 = (state_12876[(1)]);if((state_val_12877 === (7)))
{var inst_12856 = (state_12876[(7)]);var inst_12855 = (state_12876[(8)]);var inst_12855__$1 = (state_12876[(2)]);var inst_12856__$1 = cljs.core.nth.call(null,inst_12855__$1,(0),null);var inst_12857 = cljs.core.nth.call(null,inst_12855__$1,(1),null);var inst_12858 = (inst_12856__$1 == null);var state_12876__$1 = (function (){var statearr_12878 = state_12876;(statearr_12878[(7)] = inst_12856__$1);
(statearr_12878[(9)] = inst_12857);
(statearr_12878[(8)] = inst_12855__$1);
return statearr_12878;
})();if(cljs.core.truth_(inst_12858))
{var statearr_12879_12901 = state_12876__$1;(statearr_12879_12901[(1)] = (8));
} else
{var statearr_12880_12902 = state_12876__$1;(statearr_12880_12902[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12877 === (1)))
{var inst_12847 = cljs.core.vec.call(null,chs);var inst_12848 = inst_12847;var state_12876__$1 = (function (){var statearr_12881 = state_12876;(statearr_12881[(10)] = inst_12848);
return statearr_12881;
})();var statearr_12882_12903 = state_12876__$1;(statearr_12882_12903[(2)] = null);
(statearr_12882_12903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12877 === (4)))
{var inst_12848 = (state_12876[(10)]);var state_12876__$1 = state_12876;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12876__$1,(7),inst_12848);
} else
{if((state_val_12877 === (6)))
{var inst_12872 = (state_12876[(2)]);var state_12876__$1 = state_12876;var statearr_12883_12904 = state_12876__$1;(statearr_12883_12904[(2)] = inst_12872);
(statearr_12883_12904[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12877 === (3)))
{var inst_12874 = (state_12876[(2)]);var state_12876__$1 = state_12876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12876__$1,inst_12874);
} else
{if((state_val_12877 === (2)))
{var inst_12848 = (state_12876[(10)]);var inst_12850 = cljs.core.count.call(null,inst_12848);var inst_12851 = (inst_12850 > (0));var state_12876__$1 = state_12876;if(cljs.core.truth_(inst_12851))
{var statearr_12885_12905 = state_12876__$1;(statearr_12885_12905[(1)] = (4));
} else
{var statearr_12886_12906 = state_12876__$1;(statearr_12886_12906[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12877 === (11)))
{var inst_12848 = (state_12876[(10)]);var inst_12865 = (state_12876[(2)]);var tmp12884 = inst_12848;var inst_12848__$1 = tmp12884;var state_12876__$1 = (function (){var statearr_12887 = state_12876;(statearr_12887[(11)] = inst_12865);
(statearr_12887[(10)] = inst_12848__$1);
return statearr_12887;
})();var statearr_12888_12907 = state_12876__$1;(statearr_12888_12907[(2)] = null);
(statearr_12888_12907[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12877 === (9)))
{var inst_12856 = (state_12876[(7)]);var state_12876__$1 = state_12876;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12876__$1,(11),out,inst_12856);
} else
{if((state_val_12877 === (5)))
{var inst_12870 = cljs.core.async.close_BANG_.call(null,out);var state_12876__$1 = state_12876;var statearr_12889_12908 = state_12876__$1;(statearr_12889_12908[(2)] = inst_12870);
(statearr_12889_12908[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12877 === (10)))
{var inst_12868 = (state_12876[(2)]);var state_12876__$1 = state_12876;var statearr_12890_12909 = state_12876__$1;(statearr_12890_12909[(2)] = inst_12868);
(statearr_12890_12909[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12877 === (8)))
{var inst_12856 = (state_12876[(7)]);var inst_12857 = (state_12876[(9)]);var inst_12855 = (state_12876[(8)]);var inst_12848 = (state_12876[(10)]);var inst_12860 = (function (){var c = inst_12857;var v = inst_12856;var vec__12853 = inst_12855;var cs = inst_12848;return ((function (c,v,vec__12853,cs,inst_12856,inst_12857,inst_12855,inst_12848,state_val_12877,c__5878__auto___12900,out){
return (function (p1__12793_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12793_SHARP_);
});
;})(c,v,vec__12853,cs,inst_12856,inst_12857,inst_12855,inst_12848,state_val_12877,c__5878__auto___12900,out))
})();var inst_12861 = cljs.core.filterv.call(null,inst_12860,inst_12848);var inst_12848__$1 = inst_12861;var state_12876__$1 = (function (){var statearr_12891 = state_12876;(statearr_12891[(10)] = inst_12848__$1);
return statearr_12891;
})();var statearr_12892_12910 = state_12876__$1;(statearr_12892_12910[(2)] = null);
(statearr_12892_12910[(1)] = (2));
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
}
}
}
});})(c__5878__auto___12900,out))
;return ((function (switch__5863__auto__,c__5878__auto___12900,out){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_12896 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12896[(0)] = state_machine__5864__auto__);
(statearr_12896[(1)] = (1));
return statearr_12896;
});
var state_machine__5864__auto____1 = (function (state_12876){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_12876);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e12897){if((e12897 instanceof Object))
{var ex__5867__auto__ = e12897;var statearr_12898_12911 = state_12876;(statearr_12898_12911[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12876);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12897;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12912 = state_12876;
state_12876 = G__12912;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_12876){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_12876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___12900,out))
})();var state__5880__auto__ = (function (){var statearr_12899 = f__5879__auto__.call(null);(statearr_12899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___12900);
return statearr_12899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___12900,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5878__auto___13005 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___13005,out){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___13005,out){
return (function (state_12982){var state_val_12983 = (state_12982[(1)]);if((state_val_12983 === (7)))
{var inst_12964 = (state_12982[(7)]);var inst_12964__$1 = (state_12982[(2)]);var inst_12965 = (inst_12964__$1 == null);var inst_12966 = cljs.core.not.call(null,inst_12965);var state_12982__$1 = (function (){var statearr_12984 = state_12982;(statearr_12984[(7)] = inst_12964__$1);
return statearr_12984;
})();if(inst_12966)
{var statearr_12985_13006 = state_12982__$1;(statearr_12985_13006[(1)] = (8));
} else
{var statearr_12986_13007 = state_12982__$1;(statearr_12986_13007[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12983 === (1)))
{var inst_12959 = (0);var state_12982__$1 = (function (){var statearr_12987 = state_12982;(statearr_12987[(8)] = inst_12959);
return statearr_12987;
})();var statearr_12988_13008 = state_12982__$1;(statearr_12988_13008[(2)] = null);
(statearr_12988_13008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12983 === (4)))
{var state_12982__$1 = state_12982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12982__$1,(7),ch);
} else
{if((state_val_12983 === (6)))
{var inst_12977 = (state_12982[(2)]);var state_12982__$1 = state_12982;var statearr_12989_13009 = state_12982__$1;(statearr_12989_13009[(2)] = inst_12977);
(statearr_12989_13009[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12983 === (3)))
{var inst_12979 = (state_12982[(2)]);var inst_12980 = cljs.core.async.close_BANG_.call(null,out);var state_12982__$1 = (function (){var statearr_12990 = state_12982;(statearr_12990[(9)] = inst_12979);
return statearr_12990;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12982__$1,inst_12980);
} else
{if((state_val_12983 === (2)))
{var inst_12959 = (state_12982[(8)]);var inst_12961 = (inst_12959 < n);var state_12982__$1 = state_12982;if(cljs.core.truth_(inst_12961))
{var statearr_12991_13010 = state_12982__$1;(statearr_12991_13010[(1)] = (4));
} else
{var statearr_12992_13011 = state_12982__$1;(statearr_12992_13011[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12983 === (11)))
{var inst_12959 = (state_12982[(8)]);var inst_12969 = (state_12982[(2)]);var inst_12970 = (inst_12959 + (1));var inst_12959__$1 = inst_12970;var state_12982__$1 = (function (){var statearr_12993 = state_12982;(statearr_12993[(10)] = inst_12969);
(statearr_12993[(8)] = inst_12959__$1);
return statearr_12993;
})();var statearr_12994_13012 = state_12982__$1;(statearr_12994_13012[(2)] = null);
(statearr_12994_13012[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12983 === (9)))
{var state_12982__$1 = state_12982;var statearr_12995_13013 = state_12982__$1;(statearr_12995_13013[(2)] = null);
(statearr_12995_13013[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12983 === (5)))
{var state_12982__$1 = state_12982;var statearr_12996_13014 = state_12982__$1;(statearr_12996_13014[(2)] = null);
(statearr_12996_13014[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12983 === (10)))
{var inst_12974 = (state_12982[(2)]);var state_12982__$1 = state_12982;var statearr_12997_13015 = state_12982__$1;(statearr_12997_13015[(2)] = inst_12974);
(statearr_12997_13015[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12983 === (8)))
{var inst_12964 = (state_12982[(7)]);var state_12982__$1 = state_12982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12982__$1,(11),out,inst_12964);
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
}
}
}
});})(c__5878__auto___13005,out))
;return ((function (switch__5863__auto__,c__5878__auto___13005,out){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_13001 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13001[(0)] = state_machine__5864__auto__);
(statearr_13001[(1)] = (1));
return statearr_13001;
});
var state_machine__5864__auto____1 = (function (state_12982){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_12982);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e13002){if((e13002 instanceof Object))
{var ex__5867__auto__ = e13002;var statearr_13003_13016 = state_12982;(statearr_13003_13016[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12982);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13002;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13017 = state_12982;
state_12982 = G__13017;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_12982){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_12982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___13005,out))
})();var state__5880__auto__ = (function (){var statearr_13004 = f__5879__auto__.call(null);(statearr_13004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___13005);
return statearr_13004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___13005,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13025 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13025 = (function (ch,f,map_LT_,meta13026){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13026 = meta13026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13025.cljs$lang$type = true;
cljs.core.async.t13025.cljs$lang$ctorStr = "cljs.core.async/t13025";
cljs.core.async.t13025.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t13025");
});
cljs.core.async.t13025.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13025.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13028 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13028 = (function (fn1,_,meta13026,ch,f,map_LT_,meta13029){
this.fn1 = fn1;
this._ = _;
this.meta13026 = meta13026;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13029 = meta13029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13028.cljs$lang$type = true;
cljs.core.async.t13028.cljs$lang$ctorStr = "cljs.core.async/t13028";
cljs.core.async.t13028.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t13028");
});})(___$1))
;
cljs.core.async.t13028.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13028.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13018_SHARP_){return f1.call(null,(((p1__13018_SHARP_ == null))?null:self__.f.call(null,p1__13018_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13030){var self__ = this;
var _13030__$1 = this;return self__.meta13029;
});})(___$1))
;
cljs.core.async.t13028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13030,meta13029__$1){var self__ = this;
var _13030__$1 = this;return (new cljs.core.async.t13028(self__.fn1,self__._,self__.meta13026,self__.ch,self__.f,self__.map_LT_,meta13029__$1));
});})(___$1))
;
cljs.core.async.__GT_t13028 = ((function (___$1){
return (function __GT_t13028(fn1__$1,___$2,meta13026__$1,ch__$2,f__$2,map_LT___$2,meta13029){return (new cljs.core.async.t13028(fn1__$1,___$2,meta13026__$1,ch__$2,f__$2,map_LT___$2,meta13029));
});})(___$1))
;
}
return (new cljs.core.async.t13028(fn1,___$1,self__.meta13026,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3541__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13025.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13025.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13027){var self__ = this;
var _13027__$1 = this;return self__.meta13026;
});
cljs.core.async.t13025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13027,meta13026__$1){var self__ = this;
var _13027__$1 = this;return (new cljs.core.async.t13025(self__.ch,self__.f,self__.map_LT_,meta13026__$1));
});
cljs.core.async.__GT_t13025 = (function __GT_t13025(ch__$1,f__$1,map_LT___$1,meta13026){return (new cljs.core.async.t13025(ch__$1,f__$1,map_LT___$1,meta13026));
});
}
return (new cljs.core.async.t13025(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13034 = (function (ch,f,map_GT_,meta13035){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13035 = meta13035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13034.cljs$lang$type = true;
cljs.core.async.t13034.cljs$lang$ctorStr = "cljs.core.async/t13034";
cljs.core.async.t13034.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t13034");
});
cljs.core.async.t13034.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13034.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13034.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13036){var self__ = this;
var _13036__$1 = this;return self__.meta13035;
});
cljs.core.async.t13034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13036,meta13035__$1){var self__ = this;
var _13036__$1 = this;return (new cljs.core.async.t13034(self__.ch,self__.f,self__.map_GT_,meta13035__$1));
});
cljs.core.async.__GT_t13034 = (function __GT_t13034(ch__$1,f__$1,map_GT___$1,meta13035){return (new cljs.core.async.t13034(ch__$1,f__$1,map_GT___$1,meta13035));
});
}
return (new cljs.core.async.t13034(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13040 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13040 = (function (ch,p,filter_GT_,meta13041){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13041 = meta13041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13040.cljs$lang$type = true;
cljs.core.async.t13040.cljs$lang$ctorStr = "cljs.core.async/t13040";
cljs.core.async.t13040.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t13040");
});
cljs.core.async.t13040.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13040.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13040.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13042){var self__ = this;
var _13042__$1 = this;return self__.meta13041;
});
cljs.core.async.t13040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13042,meta13041__$1){var self__ = this;
var _13042__$1 = this;return (new cljs.core.async.t13040(self__.ch,self__.p,self__.filter_GT_,meta13041__$1));
});
cljs.core.async.__GT_t13040 = (function __GT_t13040(ch__$1,p__$1,filter_GT___$1,meta13041){return (new cljs.core.async.t13040(ch__$1,p__$1,filter_GT___$1,meta13041));
});
}
return (new cljs.core.async.t13040(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5878__auto___13125 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___13125,out){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___13125,out){
return (function (state_13104){var state_val_13105 = (state_13104[(1)]);if((state_val_13105 === (7)))
{var inst_13100 = (state_13104[(2)]);var state_13104__$1 = state_13104;var statearr_13106_13126 = state_13104__$1;(statearr_13106_13126[(2)] = inst_13100);
(statearr_13106_13126[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13105 === (1)))
{var state_13104__$1 = state_13104;var statearr_13107_13127 = state_13104__$1;(statearr_13107_13127[(2)] = null);
(statearr_13107_13127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13105 === (4)))
{var inst_13086 = (state_13104[(7)]);var inst_13086__$1 = (state_13104[(2)]);var inst_13087 = (inst_13086__$1 == null);var state_13104__$1 = (function (){var statearr_13108 = state_13104;(statearr_13108[(7)] = inst_13086__$1);
return statearr_13108;
})();if(cljs.core.truth_(inst_13087))
{var statearr_13109_13128 = state_13104__$1;(statearr_13109_13128[(1)] = (5));
} else
{var statearr_13110_13129 = state_13104__$1;(statearr_13110_13129[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13105 === (6)))
{var inst_13086 = (state_13104[(7)]);var inst_13091 = p.call(null,inst_13086);var state_13104__$1 = state_13104;if(cljs.core.truth_(inst_13091))
{var statearr_13111_13130 = state_13104__$1;(statearr_13111_13130[(1)] = (8));
} else
{var statearr_13112_13131 = state_13104__$1;(statearr_13112_13131[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13105 === (3)))
{var inst_13102 = (state_13104[(2)]);var state_13104__$1 = state_13104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13104__$1,inst_13102);
} else
{if((state_val_13105 === (2)))
{var state_13104__$1 = state_13104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13104__$1,(4),ch);
} else
{if((state_val_13105 === (11)))
{var inst_13094 = (state_13104[(2)]);var state_13104__$1 = state_13104;var statearr_13113_13132 = state_13104__$1;(statearr_13113_13132[(2)] = inst_13094);
(statearr_13113_13132[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13105 === (9)))
{var state_13104__$1 = state_13104;var statearr_13114_13133 = state_13104__$1;(statearr_13114_13133[(2)] = null);
(statearr_13114_13133[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13105 === (5)))
{var inst_13089 = cljs.core.async.close_BANG_.call(null,out);var state_13104__$1 = state_13104;var statearr_13115_13134 = state_13104__$1;(statearr_13115_13134[(2)] = inst_13089);
(statearr_13115_13134[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13105 === (10)))
{var inst_13097 = (state_13104[(2)]);var state_13104__$1 = (function (){var statearr_13116 = state_13104;(statearr_13116[(8)] = inst_13097);
return statearr_13116;
})();var statearr_13117_13135 = state_13104__$1;(statearr_13117_13135[(2)] = null);
(statearr_13117_13135[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13105 === (8)))
{var inst_13086 = (state_13104[(7)]);var state_13104__$1 = state_13104;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13104__$1,(11),out,inst_13086);
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
}
}
}
});})(c__5878__auto___13125,out))
;return ((function (switch__5863__auto__,c__5878__auto___13125,out){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_13121 = [null,null,null,null,null,null,null,null,null];(statearr_13121[(0)] = state_machine__5864__auto__);
(statearr_13121[(1)] = (1));
return statearr_13121;
});
var state_machine__5864__auto____1 = (function (state_13104){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_13104);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e13122){if((e13122 instanceof Object))
{var ex__5867__auto__ = e13122;var statearr_13123_13136 = state_13104;(statearr_13123_13136[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13104);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13122;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13137 = state_13104;
state_13104 = G__13137;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_13104){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_13104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___13125,out))
})();var state__5880__auto__ = (function (){var statearr_13124 = f__5879__auto__.call(null);(statearr_13124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___13125);
return statearr_13124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___13125,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5878__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto__){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto__){
return (function (state_13303){var state_val_13304 = (state_13303[(1)]);if((state_val_13304 === (7)))
{var inst_13299 = (state_13303[(2)]);var state_13303__$1 = state_13303;var statearr_13305_13346 = state_13303__$1;(statearr_13305_13346[(2)] = inst_13299);
(statearr_13305_13346[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (20)))
{var inst_13269 = (state_13303[(7)]);var inst_13280 = (state_13303[(2)]);var inst_13281 = cljs.core.next.call(null,inst_13269);var inst_13255 = inst_13281;var inst_13256 = null;var inst_13257 = (0);var inst_13258 = (0);var state_13303__$1 = (function (){var statearr_13306 = state_13303;(statearr_13306[(8)] = inst_13256);
(statearr_13306[(9)] = inst_13257);
(statearr_13306[(10)] = inst_13255);
(statearr_13306[(11)] = inst_13280);
(statearr_13306[(12)] = inst_13258);
return statearr_13306;
})();var statearr_13307_13347 = state_13303__$1;(statearr_13307_13347[(2)] = null);
(statearr_13307_13347[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (1)))
{var state_13303__$1 = state_13303;var statearr_13308_13348 = state_13303__$1;(statearr_13308_13348[(2)] = null);
(statearr_13308_13348[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (4)))
{var inst_13244 = (state_13303[(13)]);var inst_13244__$1 = (state_13303[(2)]);var inst_13245 = (inst_13244__$1 == null);var state_13303__$1 = (function (){var statearr_13309 = state_13303;(statearr_13309[(13)] = inst_13244__$1);
return statearr_13309;
})();if(cljs.core.truth_(inst_13245))
{var statearr_13310_13349 = state_13303__$1;(statearr_13310_13349[(1)] = (5));
} else
{var statearr_13311_13350 = state_13303__$1;(statearr_13311_13350[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (15)))
{var state_13303__$1 = state_13303;var statearr_13315_13351 = state_13303__$1;(statearr_13315_13351[(2)] = null);
(statearr_13315_13351[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (21)))
{var state_13303__$1 = state_13303;var statearr_13316_13352 = state_13303__$1;(statearr_13316_13352[(2)] = null);
(statearr_13316_13352[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (13)))
{var inst_13256 = (state_13303[(8)]);var inst_13257 = (state_13303[(9)]);var inst_13255 = (state_13303[(10)]);var inst_13258 = (state_13303[(12)]);var inst_13265 = (state_13303[(2)]);var inst_13266 = (inst_13258 + (1));var tmp13312 = inst_13256;var tmp13313 = inst_13257;var tmp13314 = inst_13255;var inst_13255__$1 = tmp13314;var inst_13256__$1 = tmp13312;var inst_13257__$1 = tmp13313;var inst_13258__$1 = inst_13266;var state_13303__$1 = (function (){var statearr_13317 = state_13303;(statearr_13317[(8)] = inst_13256__$1);
(statearr_13317[(9)] = inst_13257__$1);
(statearr_13317[(14)] = inst_13265);
(statearr_13317[(10)] = inst_13255__$1);
(statearr_13317[(12)] = inst_13258__$1);
return statearr_13317;
})();var statearr_13318_13353 = state_13303__$1;(statearr_13318_13353[(2)] = null);
(statearr_13318_13353[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (22)))
{var state_13303__$1 = state_13303;var statearr_13319_13354 = state_13303__$1;(statearr_13319_13354[(2)] = null);
(statearr_13319_13354[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (6)))
{var inst_13244 = (state_13303[(13)]);var inst_13253 = f.call(null,inst_13244);var inst_13254 = cljs.core.seq.call(null,inst_13253);var inst_13255 = inst_13254;var inst_13256 = null;var inst_13257 = (0);var inst_13258 = (0);var state_13303__$1 = (function (){var statearr_13320 = state_13303;(statearr_13320[(8)] = inst_13256);
(statearr_13320[(9)] = inst_13257);
(statearr_13320[(10)] = inst_13255);
(statearr_13320[(12)] = inst_13258);
return statearr_13320;
})();var statearr_13321_13355 = state_13303__$1;(statearr_13321_13355[(2)] = null);
(statearr_13321_13355[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (17)))
{var inst_13269 = (state_13303[(7)]);var inst_13273 = cljs.core.chunk_first.call(null,inst_13269);var inst_13274 = cljs.core.chunk_rest.call(null,inst_13269);var inst_13275 = cljs.core.count.call(null,inst_13273);var inst_13255 = inst_13274;var inst_13256 = inst_13273;var inst_13257 = inst_13275;var inst_13258 = (0);var state_13303__$1 = (function (){var statearr_13322 = state_13303;(statearr_13322[(8)] = inst_13256);
(statearr_13322[(9)] = inst_13257);
(statearr_13322[(10)] = inst_13255);
(statearr_13322[(12)] = inst_13258);
return statearr_13322;
})();var statearr_13323_13356 = state_13303__$1;(statearr_13323_13356[(2)] = null);
(statearr_13323_13356[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (3)))
{var inst_13301 = (state_13303[(2)]);var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13303__$1,inst_13301);
} else
{if((state_val_13304 === (12)))
{var inst_13289 = (state_13303[(2)]);var state_13303__$1 = state_13303;var statearr_13324_13357 = state_13303__$1;(statearr_13324_13357[(2)] = inst_13289);
(statearr_13324_13357[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (2)))
{var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13303__$1,(4),in$);
} else
{if((state_val_13304 === (23)))
{var inst_13297 = (state_13303[(2)]);var state_13303__$1 = state_13303;var statearr_13325_13358 = state_13303__$1;(statearr_13325_13358[(2)] = inst_13297);
(statearr_13325_13358[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (19)))
{var inst_13284 = (state_13303[(2)]);var state_13303__$1 = state_13303;var statearr_13326_13359 = state_13303__$1;(statearr_13326_13359[(2)] = inst_13284);
(statearr_13326_13359[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (11)))
{var inst_13255 = (state_13303[(10)]);var inst_13269 = (state_13303[(7)]);var inst_13269__$1 = cljs.core.seq.call(null,inst_13255);var state_13303__$1 = (function (){var statearr_13327 = state_13303;(statearr_13327[(7)] = inst_13269__$1);
return statearr_13327;
})();if(inst_13269__$1)
{var statearr_13328_13360 = state_13303__$1;(statearr_13328_13360[(1)] = (14));
} else
{var statearr_13329_13361 = state_13303__$1;(statearr_13329_13361[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (9)))
{var inst_13291 = (state_13303[(2)]);var inst_13292 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_13303__$1 = (function (){var statearr_13330 = state_13303;(statearr_13330[(15)] = inst_13291);
return statearr_13330;
})();if(cljs.core.truth_(inst_13292))
{var statearr_13331_13362 = state_13303__$1;(statearr_13331_13362[(1)] = (21));
} else
{var statearr_13332_13363 = state_13303__$1;(statearr_13332_13363[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (5)))
{var inst_13247 = cljs.core.async.close_BANG_.call(null,out);var state_13303__$1 = state_13303;var statearr_13333_13364 = state_13303__$1;(statearr_13333_13364[(2)] = inst_13247);
(statearr_13333_13364[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (14)))
{var inst_13269 = (state_13303[(7)]);var inst_13271 = cljs.core.chunked_seq_QMARK_.call(null,inst_13269);var state_13303__$1 = state_13303;if(inst_13271)
{var statearr_13334_13365 = state_13303__$1;(statearr_13334_13365[(1)] = (17));
} else
{var statearr_13335_13366 = state_13303__$1;(statearr_13335_13366[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (16)))
{var inst_13287 = (state_13303[(2)]);var state_13303__$1 = state_13303;var statearr_13336_13367 = state_13303__$1;(statearr_13336_13367[(2)] = inst_13287);
(statearr_13336_13367[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (10)))
{var inst_13256 = (state_13303[(8)]);var inst_13258 = (state_13303[(12)]);var inst_13263 = cljs.core._nth.call(null,inst_13256,inst_13258);var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13303__$1,(13),out,inst_13263);
} else
{if((state_val_13304 === (18)))
{var inst_13269 = (state_13303[(7)]);var inst_13278 = cljs.core.first.call(null,inst_13269);var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13303__$1,(20),out,inst_13278);
} else
{if((state_val_13304 === (8)))
{var inst_13257 = (state_13303[(9)]);var inst_13258 = (state_13303[(12)]);var inst_13260 = (inst_13258 < inst_13257);var inst_13261 = inst_13260;var state_13303__$1 = state_13303;if(cljs.core.truth_(inst_13261))
{var statearr_13337_13368 = state_13303__$1;(statearr_13337_13368[(1)] = (10));
} else
{var statearr_13338_13369 = state_13303__$1;(statearr_13338_13369[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5878__auto__))
;return ((function (switch__5863__auto__,c__5878__auto__){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_13342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13342[(0)] = state_machine__5864__auto__);
(statearr_13342[(1)] = (1));
return statearr_13342;
});
var state_machine__5864__auto____1 = (function (state_13303){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_13303);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e13343){if((e13343 instanceof Object))
{var ex__5867__auto__ = e13343;var statearr_13344_13370 = state_13303;(statearr_13344_13370[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13303);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13343;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13371 = state_13303;
state_13303 = G__13371;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_13303){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_13303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto__))
})();var state__5880__auto__ = (function (){var statearr_13345 = f__5879__auto__.call(null);(statearr_13345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto__);
return statearr_13345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto__))
);
return c__5878__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5878__auto___13468 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___13468,out){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___13468,out){
return (function (state_13443){var state_val_13444 = (state_13443[(1)]);if((state_val_13444 === (7)))
{var inst_13438 = (state_13443[(2)]);var state_13443__$1 = state_13443;var statearr_13445_13469 = state_13443__$1;(statearr_13445_13469[(2)] = inst_13438);
(statearr_13445_13469[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13444 === (1)))
{var inst_13420 = null;var state_13443__$1 = (function (){var statearr_13446 = state_13443;(statearr_13446[(7)] = inst_13420);
return statearr_13446;
})();var statearr_13447_13470 = state_13443__$1;(statearr_13447_13470[(2)] = null);
(statearr_13447_13470[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13444 === (4)))
{var inst_13423 = (state_13443[(8)]);var inst_13423__$1 = (state_13443[(2)]);var inst_13424 = (inst_13423__$1 == null);var inst_13425 = cljs.core.not.call(null,inst_13424);var state_13443__$1 = (function (){var statearr_13448 = state_13443;(statearr_13448[(8)] = inst_13423__$1);
return statearr_13448;
})();if(inst_13425)
{var statearr_13449_13471 = state_13443__$1;(statearr_13449_13471[(1)] = (5));
} else
{var statearr_13450_13472 = state_13443__$1;(statearr_13450_13472[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13444 === (6)))
{var state_13443__$1 = state_13443;var statearr_13451_13473 = state_13443__$1;(statearr_13451_13473[(2)] = null);
(statearr_13451_13473[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13444 === (3)))
{var inst_13440 = (state_13443[(2)]);var inst_13441 = cljs.core.async.close_BANG_.call(null,out);var state_13443__$1 = (function (){var statearr_13452 = state_13443;(statearr_13452[(9)] = inst_13440);
return statearr_13452;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13443__$1,inst_13441);
} else
{if((state_val_13444 === (2)))
{var state_13443__$1 = state_13443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13443__$1,(4),ch);
} else
{if((state_val_13444 === (11)))
{var inst_13423 = (state_13443[(8)]);var inst_13432 = (state_13443[(2)]);var inst_13420 = inst_13423;var state_13443__$1 = (function (){var statearr_13453 = state_13443;(statearr_13453[(10)] = inst_13432);
(statearr_13453[(7)] = inst_13420);
return statearr_13453;
})();var statearr_13454_13474 = state_13443__$1;(statearr_13454_13474[(2)] = null);
(statearr_13454_13474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13444 === (9)))
{var inst_13423 = (state_13443[(8)]);var state_13443__$1 = state_13443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13443__$1,(11),out,inst_13423);
} else
{if((state_val_13444 === (5)))
{var inst_13423 = (state_13443[(8)]);var inst_13420 = (state_13443[(7)]);var inst_13427 = cljs.core._EQ_.call(null,inst_13423,inst_13420);var state_13443__$1 = state_13443;if(inst_13427)
{var statearr_13456_13475 = state_13443__$1;(statearr_13456_13475[(1)] = (8));
} else
{var statearr_13457_13476 = state_13443__$1;(statearr_13457_13476[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13444 === (10)))
{var inst_13435 = (state_13443[(2)]);var state_13443__$1 = state_13443;var statearr_13458_13477 = state_13443__$1;(statearr_13458_13477[(2)] = inst_13435);
(statearr_13458_13477[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13444 === (8)))
{var inst_13420 = (state_13443[(7)]);var tmp13455 = inst_13420;var inst_13420__$1 = tmp13455;var state_13443__$1 = (function (){var statearr_13459 = state_13443;(statearr_13459[(7)] = inst_13420__$1);
return statearr_13459;
})();var statearr_13460_13478 = state_13443__$1;(statearr_13460_13478[(2)] = null);
(statearr_13460_13478[(1)] = (2));
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
}
}
}
});})(c__5878__auto___13468,out))
;return ((function (switch__5863__auto__,c__5878__auto___13468,out){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_13464 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13464[(0)] = state_machine__5864__auto__);
(statearr_13464[(1)] = (1));
return statearr_13464;
});
var state_machine__5864__auto____1 = (function (state_13443){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_13443);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e13465){if((e13465 instanceof Object))
{var ex__5867__auto__ = e13465;var statearr_13466_13479 = state_13443;(statearr_13466_13479[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13443);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13465;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13480 = state_13443;
state_13443 = G__13480;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_13443){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_13443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___13468,out))
})();var state__5880__auto__ = (function (){var statearr_13467 = f__5879__auto__.call(null);(statearr_13467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___13468);
return statearr_13467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___13468,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5878__auto___13615 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___13615,out){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___13615,out){
return (function (state_13585){var state_val_13586 = (state_13585[(1)]);if((state_val_13586 === (7)))
{var inst_13581 = (state_13585[(2)]);var state_13585__$1 = state_13585;var statearr_13587_13616 = state_13585__$1;(statearr_13587_13616[(2)] = inst_13581);
(statearr_13587_13616[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (1)))
{var inst_13548 = (new Array(n));var inst_13549 = inst_13548;var inst_13550 = (0);var state_13585__$1 = (function (){var statearr_13588 = state_13585;(statearr_13588[(7)] = inst_13550);
(statearr_13588[(8)] = inst_13549);
return statearr_13588;
})();var statearr_13589_13617 = state_13585__$1;(statearr_13589_13617[(2)] = null);
(statearr_13589_13617[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (4)))
{var inst_13553 = (state_13585[(9)]);var inst_13553__$1 = (state_13585[(2)]);var inst_13554 = (inst_13553__$1 == null);var inst_13555 = cljs.core.not.call(null,inst_13554);var state_13585__$1 = (function (){var statearr_13590 = state_13585;(statearr_13590[(9)] = inst_13553__$1);
return statearr_13590;
})();if(inst_13555)
{var statearr_13591_13618 = state_13585__$1;(statearr_13591_13618[(1)] = (5));
} else
{var statearr_13592_13619 = state_13585__$1;(statearr_13592_13619[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (15)))
{var inst_13575 = (state_13585[(2)]);var state_13585__$1 = state_13585;var statearr_13593_13620 = state_13585__$1;(statearr_13593_13620[(2)] = inst_13575);
(statearr_13593_13620[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (13)))
{var state_13585__$1 = state_13585;var statearr_13594_13621 = state_13585__$1;(statearr_13594_13621[(2)] = null);
(statearr_13594_13621[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (6)))
{var inst_13550 = (state_13585[(7)]);var inst_13571 = (inst_13550 > (0));var state_13585__$1 = state_13585;if(cljs.core.truth_(inst_13571))
{var statearr_13595_13622 = state_13585__$1;(statearr_13595_13622[(1)] = (12));
} else
{var statearr_13596_13623 = state_13585__$1;(statearr_13596_13623[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (3)))
{var inst_13583 = (state_13585[(2)]);var state_13585__$1 = state_13585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13585__$1,inst_13583);
} else
{if((state_val_13586 === (12)))
{var inst_13549 = (state_13585[(8)]);var inst_13573 = cljs.core.vec.call(null,inst_13549);var state_13585__$1 = state_13585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13585__$1,(15),out,inst_13573);
} else
{if((state_val_13586 === (2)))
{var state_13585__$1 = state_13585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13585__$1,(4),ch);
} else
{if((state_val_13586 === (11)))
{var inst_13565 = (state_13585[(2)]);var inst_13566 = (new Array(n));var inst_13549 = inst_13566;var inst_13550 = (0);var state_13585__$1 = (function (){var statearr_13597 = state_13585;(statearr_13597[(7)] = inst_13550);
(statearr_13597[(8)] = inst_13549);
(statearr_13597[(10)] = inst_13565);
return statearr_13597;
})();var statearr_13598_13624 = state_13585__$1;(statearr_13598_13624[(2)] = null);
(statearr_13598_13624[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (9)))
{var inst_13549 = (state_13585[(8)]);var inst_13563 = cljs.core.vec.call(null,inst_13549);var state_13585__$1 = state_13585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13585__$1,(11),out,inst_13563);
} else
{if((state_val_13586 === (5)))
{var inst_13553 = (state_13585[(9)]);var inst_13550 = (state_13585[(7)]);var inst_13549 = (state_13585[(8)]);var inst_13558 = (state_13585[(11)]);var inst_13557 = (inst_13549[inst_13550] = inst_13553);var inst_13558__$1 = (inst_13550 + (1));var inst_13559 = (inst_13558__$1 < n);var state_13585__$1 = (function (){var statearr_13599 = state_13585;(statearr_13599[(11)] = inst_13558__$1);
(statearr_13599[(12)] = inst_13557);
return statearr_13599;
})();if(cljs.core.truth_(inst_13559))
{var statearr_13600_13625 = state_13585__$1;(statearr_13600_13625[(1)] = (8));
} else
{var statearr_13601_13626 = state_13585__$1;(statearr_13601_13626[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (14)))
{var inst_13578 = (state_13585[(2)]);var inst_13579 = cljs.core.async.close_BANG_.call(null,out);var state_13585__$1 = (function (){var statearr_13603 = state_13585;(statearr_13603[(13)] = inst_13578);
return statearr_13603;
})();var statearr_13604_13627 = state_13585__$1;(statearr_13604_13627[(2)] = inst_13579);
(statearr_13604_13627[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (10)))
{var inst_13569 = (state_13585[(2)]);var state_13585__$1 = state_13585;var statearr_13605_13628 = state_13585__$1;(statearr_13605_13628[(2)] = inst_13569);
(statearr_13605_13628[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (8)))
{var inst_13549 = (state_13585[(8)]);var inst_13558 = (state_13585[(11)]);var tmp13602 = inst_13549;var inst_13549__$1 = tmp13602;var inst_13550 = inst_13558;var state_13585__$1 = (function (){var statearr_13606 = state_13585;(statearr_13606[(7)] = inst_13550);
(statearr_13606[(8)] = inst_13549__$1);
return statearr_13606;
})();var statearr_13607_13629 = state_13585__$1;(statearr_13607_13629[(2)] = null);
(statearr_13607_13629[(1)] = (2));
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
}
}
}
}
}
}
}
});})(c__5878__auto___13615,out))
;return ((function (switch__5863__auto__,c__5878__auto___13615,out){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_13611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13611[(0)] = state_machine__5864__auto__);
(statearr_13611[(1)] = (1));
return statearr_13611;
});
var state_machine__5864__auto____1 = (function (state_13585){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_13585);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e13612){if((e13612 instanceof Object))
{var ex__5867__auto__ = e13612;var statearr_13613_13630 = state_13585;(statearr_13613_13630[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13585);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13612;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13631 = state_13585;
state_13585 = G__13631;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_13585){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_13585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___13615,out))
})();var state__5880__auto__ = (function (){var statearr_13614 = f__5879__auto__.call(null);(statearr_13614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___13615);
return statearr_13614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___13615,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5878__auto___13774 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5878__auto___13774,out){
return (function (){var f__5879__auto__ = (function (){var switch__5863__auto__ = ((function (c__5878__auto___13774,out){
return (function (state_13744){var state_val_13745 = (state_13744[(1)]);if((state_val_13745 === (7)))
{var inst_13740 = (state_13744[(2)]);var state_13744__$1 = state_13744;var statearr_13746_13775 = state_13744__$1;(statearr_13746_13775[(2)] = inst_13740);
(statearr_13746_13775[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (1)))
{var inst_13703 = [];var inst_13704 = inst_13703;var inst_13705 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13744__$1 = (function (){var statearr_13747 = state_13744;(statearr_13747[(7)] = inst_13705);
(statearr_13747[(8)] = inst_13704);
return statearr_13747;
})();var statearr_13748_13776 = state_13744__$1;(statearr_13748_13776[(2)] = null);
(statearr_13748_13776[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (4)))
{var inst_13708 = (state_13744[(9)]);var inst_13708__$1 = (state_13744[(2)]);var inst_13709 = (inst_13708__$1 == null);var inst_13710 = cljs.core.not.call(null,inst_13709);var state_13744__$1 = (function (){var statearr_13749 = state_13744;(statearr_13749[(9)] = inst_13708__$1);
return statearr_13749;
})();if(inst_13710)
{var statearr_13750_13777 = state_13744__$1;(statearr_13750_13777[(1)] = (5));
} else
{var statearr_13751_13778 = state_13744__$1;(statearr_13751_13778[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (15)))
{var inst_13734 = (state_13744[(2)]);var state_13744__$1 = state_13744;var statearr_13752_13779 = state_13744__$1;(statearr_13752_13779[(2)] = inst_13734);
(statearr_13752_13779[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (13)))
{var state_13744__$1 = state_13744;var statearr_13753_13780 = state_13744__$1;(statearr_13753_13780[(2)] = null);
(statearr_13753_13780[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (6)))
{var inst_13704 = (state_13744[(8)]);var inst_13729 = inst_13704.length;var inst_13730 = (inst_13729 > (0));var state_13744__$1 = state_13744;if(cljs.core.truth_(inst_13730))
{var statearr_13754_13781 = state_13744__$1;(statearr_13754_13781[(1)] = (12));
} else
{var statearr_13755_13782 = state_13744__$1;(statearr_13755_13782[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (3)))
{var inst_13742 = (state_13744[(2)]);var state_13744__$1 = state_13744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13744__$1,inst_13742);
} else
{if((state_val_13745 === (12)))
{var inst_13704 = (state_13744[(8)]);var inst_13732 = cljs.core.vec.call(null,inst_13704);var state_13744__$1 = state_13744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13744__$1,(15),out,inst_13732);
} else
{if((state_val_13745 === (2)))
{var state_13744__$1 = state_13744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13744__$1,(4),ch);
} else
{if((state_val_13745 === (11)))
{var inst_13708 = (state_13744[(9)]);var inst_13712 = (state_13744[(10)]);var inst_13722 = (state_13744[(2)]);var inst_13723 = [];var inst_13724 = inst_13723.push(inst_13708);var inst_13704 = inst_13723;var inst_13705 = inst_13712;var state_13744__$1 = (function (){var statearr_13756 = state_13744;(statearr_13756[(11)] = inst_13722);
(statearr_13756[(7)] = inst_13705);
(statearr_13756[(12)] = inst_13724);
(statearr_13756[(8)] = inst_13704);
return statearr_13756;
})();var statearr_13757_13783 = state_13744__$1;(statearr_13757_13783[(2)] = null);
(statearr_13757_13783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (9)))
{var inst_13704 = (state_13744[(8)]);var inst_13720 = cljs.core.vec.call(null,inst_13704);var state_13744__$1 = state_13744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13744__$1,(11),out,inst_13720);
} else
{if((state_val_13745 === (5)))
{var inst_13708 = (state_13744[(9)]);var inst_13705 = (state_13744[(7)]);var inst_13712 = (state_13744[(10)]);var inst_13712__$1 = f.call(null,inst_13708);var inst_13713 = cljs.core._EQ_.call(null,inst_13712__$1,inst_13705);var inst_13714 = cljs.core.keyword_identical_QMARK_.call(null,inst_13705,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13715 = (inst_13713) || (inst_13714);var state_13744__$1 = (function (){var statearr_13758 = state_13744;(statearr_13758[(10)] = inst_13712__$1);
return statearr_13758;
})();if(cljs.core.truth_(inst_13715))
{var statearr_13759_13784 = state_13744__$1;(statearr_13759_13784[(1)] = (8));
} else
{var statearr_13760_13785 = state_13744__$1;(statearr_13760_13785[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (14)))
{var inst_13737 = (state_13744[(2)]);var inst_13738 = cljs.core.async.close_BANG_.call(null,out);var state_13744__$1 = (function (){var statearr_13762 = state_13744;(statearr_13762[(13)] = inst_13737);
return statearr_13762;
})();var statearr_13763_13786 = state_13744__$1;(statearr_13763_13786[(2)] = inst_13738);
(statearr_13763_13786[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (10)))
{var inst_13727 = (state_13744[(2)]);var state_13744__$1 = state_13744;var statearr_13764_13787 = state_13744__$1;(statearr_13764_13787[(2)] = inst_13727);
(statearr_13764_13787[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (8)))
{var inst_13708 = (state_13744[(9)]);var inst_13712 = (state_13744[(10)]);var inst_13704 = (state_13744[(8)]);var inst_13717 = inst_13704.push(inst_13708);var tmp13761 = inst_13704;var inst_13704__$1 = tmp13761;var inst_13705 = inst_13712;var state_13744__$1 = (function (){var statearr_13765 = state_13744;(statearr_13765[(14)] = inst_13717);
(statearr_13765[(7)] = inst_13705);
(statearr_13765[(8)] = inst_13704__$1);
return statearr_13765;
})();var statearr_13766_13788 = state_13744__$1;(statearr_13766_13788[(2)] = null);
(statearr_13766_13788[(1)] = (2));
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
}
}
}
}
}
}
}
});})(c__5878__auto___13774,out))
;return ((function (switch__5863__auto__,c__5878__auto___13774,out){
return (function() {
var state_machine__5864__auto__ = null;
var state_machine__5864__auto____0 = (function (){var statearr_13770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13770[(0)] = state_machine__5864__auto__);
(statearr_13770[(1)] = (1));
return statearr_13770;
});
var state_machine__5864__auto____1 = (function (state_13744){while(true){
var ret_value__5865__auto__ = (function (){try{while(true){
var result__5866__auto__ = switch__5863__auto__.call(null,state_13744);if(cljs.core.keyword_identical_QMARK_.call(null,result__5866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5866__auto__;
}
break;
}
}catch (e13771){if((e13771 instanceof Object))
{var ex__5867__auto__ = e13771;var statearr_13772_13789 = state_13744;(statearr_13772_13789[(5)] = ex__5867__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13771;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13790 = state_13744;
state_13744 = G__13790;
continue;
}
} else
{return ret_value__5865__auto__;
}
break;
}
});
state_machine__5864__auto__ = function(state_13744){
switch(arguments.length){
case 0:
return state_machine__5864__auto____0.call(this);
case 1:
return state_machine__5864__auto____1.call(this,state_13744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5864__auto____0;
state_machine__5864__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5864__auto____1;
return state_machine__5864__auto__;
})()
;})(switch__5863__auto__,c__5878__auto___13774,out))
})();var state__5880__auto__ = (function (){var statearr_13773 = f__5879__auto__.call(null);(statearr_13773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5878__auto___13774);
return statearr_13773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5880__auto__);
});})(c__5878__auto___13774,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map