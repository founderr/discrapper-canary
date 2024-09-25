var r = n(548015),
    i = n(463619),
    a = n(286134),
    o = '[object Null]',
    s = '[object Undefined]',
    l = r.Z ? r.Z.toStringTag : void 0;
function u(e) {
    return null == e ? (void 0 === e ? s : o) : l && l in Object(e) ? (0, i.Z)(e) : (0, a.Z)(e);
}
t.Z = u;
