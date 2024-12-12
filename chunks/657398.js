var i = r(466293),
    a = r(146945),
    s = r(251584),
    o = '[object Null]',
    l = '[object Undefined]',
    u = i ? i.toStringTag : void 0;
function c(e) {
    return null == e ? (void 0 === e ? l : o) : u && u in Object(e) ? a(e) : s(e);
}
e.exports = c;
