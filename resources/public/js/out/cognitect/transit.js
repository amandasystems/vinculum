// Compiled by ClojureScript 0.0-2511
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__33145_33149 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__33146_33150 = null;
var count__33147_33151 = (0);
var i__33148_33152 = (0);
while(true){
if((i__33148_33152 < count__33147_33151)){
var k_33153 = cljs.core._nth.call(null,chunk__33146_33150,i__33148_33152);
var v_33154 = (b[k_33153]);
(a[k_33153] = v_33154);

var G__33155 = seq__33145_33149;
var G__33156 = chunk__33146_33150;
var G__33157 = count__33147_33151;
var G__33158 = (i__33148_33152 + (1));
seq__33145_33149 = G__33155;
chunk__33146_33150 = G__33156;
count__33147_33151 = G__33157;
i__33148_33152 = G__33158;
continue;
} else {
var temp__4126__auto___33159 = cljs.core.seq.call(null,seq__33145_33149);
if(temp__4126__auto___33159){
var seq__33145_33160__$1 = temp__4126__auto___33159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33145_33160__$1)){
var c__21520__auto___33161 = cljs.core.chunk_first.call(null,seq__33145_33160__$1);
var G__33162 = cljs.core.chunk_rest.call(null,seq__33145_33160__$1);
var G__33163 = c__21520__auto___33161;
var G__33164 = cljs.core.count.call(null,c__21520__auto___33161);
var G__33165 = (0);
seq__33145_33149 = G__33162;
chunk__33146_33150 = G__33163;
count__33147_33151 = G__33164;
i__33148_33152 = G__33165;
continue;
} else {
var k_33166 = cljs.core.first.call(null,seq__33145_33160__$1);
var v_33167 = (b[k_33166]);
(a[k_33166] = v_33167);

var G__33168 = cljs.core.next.call(null,seq__33145_33160__$1);
var G__33169 = null;
var G__33170 = (0);
var G__33171 = (0);
seq__33145_33149 = G__33168;
chunk__33146_33150 = G__33169;
count__33147_33151 = G__33170;
i__33148_33152 = G__33171;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__33172 = (i + (2));
var G__33173 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__33172;
ret = G__33173;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33174_33178 = cljs.core.seq.call(null,v);
var chunk__33175_33179 = null;
var count__33176_33180 = (0);
var i__33177_33181 = (0);
while(true){
if((i__33177_33181 < count__33176_33180)){
var x_33182 = cljs.core._nth.call(null,chunk__33175_33179,i__33177_33181);
ret.push(x_33182);

var G__33183 = seq__33174_33178;
var G__33184 = chunk__33175_33179;
var G__33185 = count__33176_33180;
var G__33186 = (i__33177_33181 + (1));
seq__33174_33178 = G__33183;
chunk__33175_33179 = G__33184;
count__33176_33180 = G__33185;
i__33177_33181 = G__33186;
continue;
} else {
var temp__4126__auto___33187 = cljs.core.seq.call(null,seq__33174_33178);
if(temp__4126__auto___33187){
var seq__33174_33188__$1 = temp__4126__auto___33187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33174_33188__$1)){
var c__21520__auto___33189 = cljs.core.chunk_first.call(null,seq__33174_33188__$1);
var G__33190 = cljs.core.chunk_rest.call(null,seq__33174_33188__$1);
var G__33191 = c__21520__auto___33189;
var G__33192 = cljs.core.count.call(null,c__21520__auto___33189);
var G__33193 = (0);
seq__33174_33178 = G__33190;
chunk__33175_33179 = G__33191;
count__33176_33180 = G__33192;
i__33177_33181 = G__33193;
continue;
} else {
var x_33194 = cljs.core.first.call(null,seq__33174_33188__$1);
ret.push(x_33194);

var G__33195 = cljs.core.next.call(null,seq__33174_33188__$1);
var G__33196 = null;
var G__33197 = (0);
var G__33198 = (0);
seq__33174_33178 = G__33195;
chunk__33175_33179 = G__33196;
count__33176_33180 = G__33197;
i__33177_33181 = G__33198;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33199_33203 = cljs.core.seq.call(null,v);
var chunk__33200_33204 = null;
var count__33201_33205 = (0);
var i__33202_33206 = (0);
while(true){
if((i__33202_33206 < count__33201_33205)){
var x_33207 = cljs.core._nth.call(null,chunk__33200_33204,i__33202_33206);
ret.push(x_33207);

var G__33208 = seq__33199_33203;
var G__33209 = chunk__33200_33204;
var G__33210 = count__33201_33205;
var G__33211 = (i__33202_33206 + (1));
seq__33199_33203 = G__33208;
chunk__33200_33204 = G__33209;
count__33201_33205 = G__33210;
i__33202_33206 = G__33211;
continue;
} else {
var temp__4126__auto___33212 = cljs.core.seq.call(null,seq__33199_33203);
if(temp__4126__auto___33212){
var seq__33199_33213__$1 = temp__4126__auto___33212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33199_33213__$1)){
var c__21520__auto___33214 = cljs.core.chunk_first.call(null,seq__33199_33213__$1);
var G__33215 = cljs.core.chunk_rest.call(null,seq__33199_33213__$1);
var G__33216 = c__21520__auto___33214;
var G__33217 = cljs.core.count.call(null,c__21520__auto___33214);
var G__33218 = (0);
seq__33199_33203 = G__33215;
chunk__33200_33204 = G__33216;
count__33201_33205 = G__33217;
i__33202_33206 = G__33218;
continue;
} else {
var x_33219 = cljs.core.first.call(null,seq__33199_33213__$1);
ret.push(x_33219);

var G__33220 = cljs.core.next.call(null,seq__33199_33213__$1);
var G__33221 = null;
var G__33222 = (0);
var G__33223 = (0);
seq__33199_33203 = G__33220;
chunk__33200_33204 = G__33221;
count__33201_33205 = G__33222;
i__33202_33206 = G__33223;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33224_33228 = cljs.core.seq.call(null,v);
var chunk__33225_33229 = null;
var count__33226_33230 = (0);
var i__33227_33231 = (0);
while(true){
if((i__33227_33231 < count__33226_33230)){
var x_33232 = cljs.core._nth.call(null,chunk__33225_33229,i__33227_33231);
ret.push(x_33232);

var G__33233 = seq__33224_33228;
var G__33234 = chunk__33225_33229;
var G__33235 = count__33226_33230;
var G__33236 = (i__33227_33231 + (1));
seq__33224_33228 = G__33233;
chunk__33225_33229 = G__33234;
count__33226_33230 = G__33235;
i__33227_33231 = G__33236;
continue;
} else {
var temp__4126__auto___33237 = cljs.core.seq.call(null,seq__33224_33228);
if(temp__4126__auto___33237){
var seq__33224_33238__$1 = temp__4126__auto___33237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33224_33238__$1)){
var c__21520__auto___33239 = cljs.core.chunk_first.call(null,seq__33224_33238__$1);
var G__33240 = cljs.core.chunk_rest.call(null,seq__33224_33238__$1);
var G__33241 = c__21520__auto___33239;
var G__33242 = cljs.core.count.call(null,c__21520__auto___33239);
var G__33243 = (0);
seq__33224_33228 = G__33240;
chunk__33225_33229 = G__33241;
count__33226_33230 = G__33242;
i__33227_33231 = G__33243;
continue;
} else {
var x_33244 = cljs.core.first.call(null,seq__33224_33238__$1);
ret.push(x_33244);

var G__33245 = cljs.core.next.call(null,seq__33224_33238__$1);
var G__33246 = null;
var G__33247 = (0);
var G__33248 = (0);
seq__33224_33228 = G__33245;
chunk__33225_33229 = G__33246;
count__33226_33230 = G__33247;
i__33227_33231 = G__33248;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x33258 = cljs.core.clone.call(null,handlers);
x33258.forEach = ((function (x33258,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__33259 = cljs.core.seq.call(null,coll);
var chunk__33260 = null;
var count__33261 = (0);
var i__33262 = (0);
while(true){
if((i__33262 < count__33261)){
var vec__33263 = cljs.core._nth.call(null,chunk__33260,i__33262);
var k = cljs.core.nth.call(null,vec__33263,(0),null);
var v = cljs.core.nth.call(null,vec__33263,(1),null);
f.call(null,v,k);

var G__33265 = seq__33259;
var G__33266 = chunk__33260;
var G__33267 = count__33261;
var G__33268 = (i__33262 + (1));
seq__33259 = G__33265;
chunk__33260 = G__33266;
count__33261 = G__33267;
i__33262 = G__33268;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33259);
if(temp__4126__auto__){
var seq__33259__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33259__$1)){
var c__21520__auto__ = cljs.core.chunk_first.call(null,seq__33259__$1);
var G__33269 = cljs.core.chunk_rest.call(null,seq__33259__$1);
var G__33270 = c__21520__auto__;
var G__33271 = cljs.core.count.call(null,c__21520__auto__);
var G__33272 = (0);
seq__33259 = G__33269;
chunk__33260 = G__33270;
count__33261 = G__33271;
i__33262 = G__33272;
continue;
} else {
var vec__33264 = cljs.core.first.call(null,seq__33259__$1);
var k = cljs.core.nth.call(null,vec__33264,(0),null);
var v = cljs.core.nth.call(null,vec__33264,(1),null);
f.call(null,v,k);

var G__33273 = cljs.core.next.call(null,seq__33259__$1);
var G__33274 = null;
var G__33275 = (0);
var G__33276 = (0);
seq__33259 = G__33273;
chunk__33260 = G__33274;
count__33261 = G__33275;
i__33262 = G__33276;
continue;
}
} else {
return null;
}
}
break;
}
});})(x33258,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x33258;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__33257 = obj;
G__33257.push(kfn.call(null,k),vfn.call(null,v));

return G__33257;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t33280 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t33280 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta33281){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta33281 = meta33281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t33280.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t33280.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t33280.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t33280.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t33280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33282){
var self__ = this;
var _33282__$1 = this;
return self__.meta33281;
});

cognitect.transit.t33280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33282,meta33281__$1){
var self__ = this;
var _33282__$1 = this;
return (new cognitect.transit.t33280(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta33281__$1));
});

cognitect.transit.t33280.cljs$lang$type = true;

cognitect.transit.t33280.cljs$lang$ctorStr = "cognitect.transit/t33280";

cognitect.transit.t33280.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cognitect.transit/t33280");
});

cognitect.transit.__GT_t33280 = (function __GT_t33280(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta33281){
return (new cognitect.transit.t33280(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta33281));
});

}

return (new cognitect.transit.t33280(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),259,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/out/cognitect/transit.cljs"], null)));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});