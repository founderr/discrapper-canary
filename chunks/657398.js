var n = r(466293),
    a = r(146945),
    _ = r(251584),
    o = n ? n.toStringTag : void 0;
e.exports = function (e) {
    return null == e ? (void 0 === e ? '[object Undefined]' : '[object Null]') : o && o in Object(e) ? a(e) : _(e);
};
