var r = n(56135),
    i = n(440693),
    a = n(766598),
    s = r ? r.toStringTag : void 0;
e.exports = function (e) {
    return null == e ? (void 0 === e ? '[object Undefined]' : '[object Null]') : s && s in Object(e) ? i(e) : a(e);
};
