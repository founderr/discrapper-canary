var i = r(954955),
    a = r(661233),
    s = 'Expected a function';
function o(e, n, r) {
    var o = !0,
        l = !0;
    if ('function' != typeof e) throw TypeError(s);
    return (
        a(r) && ((o = 'leading' in r ? !!r.leading : o), (l = 'trailing' in r ? !!r.trailing : l)),
        i(e, n, {
            leading: o,
            maxWait: n,
            trailing: l
        })
    );
}
e.exports = o;
