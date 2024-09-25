var r = n(924102),
    i = n(675717),
    a = 'Expected a function';
function o(e, t, n) {
    var o = !0,
        s = !0;
    if ('function' != typeof e) throw TypeError(a);
    return (
        (0, i.Z)(n) && ((o = 'leading' in n ? !!n.leading : o), (s = 'trailing' in n ? !!n.trailing : s)),
        (0, r.Z)(e, t, {
            leading: o,
            maxWait: t,
            trailing: s
        })
    );
}
t.Z = o;
