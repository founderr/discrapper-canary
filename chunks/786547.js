var i = r(924102),
    a = r(675717),
    s = 'Expected a function';
function o(e, n, r) {
    var o = !0,
        l = !0;
    if ('function' != typeof e) throw TypeError(s);
    return (
        (0, a.Z)(r) && ((o = 'leading' in r ? !!r.leading : o), (l = 'trailing' in r ? !!r.trailing : l)),
        (0, i.Z)(e, n, {
            leading: o,
            maxWait: n,
            trailing: l
        })
    );
}
n.Z = o;
