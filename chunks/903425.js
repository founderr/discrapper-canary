var e = n(56135),
    o = n(440693),
    i = n(766598),
    u = e ? e.toStringTag : void 0;
t.exports = function (t) {
    return null == t ? (void 0 === t ? '[object Undefined]' : '[object Null]') : u && u in Object(t) ? o(t) : i(t);
};
