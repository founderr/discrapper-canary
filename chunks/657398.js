var a = r(466293),
    n = r(146945),
    _ = r(251584),
    o = a ? a.toStringTag : void 0;
e.exports = function (e) {
    return null == e ? (void 0 === e ? '[object Undefined]' : '[object Null]') : o && o in Object(e) ? n(e) : _(e);
};
