n.d(t, {
    $: function () {
        return u;
    }
}),
    n(735250);
var r = n(470079),
    i = n(392711),
    a = n.n(i);
n(902704);
var o = n(941028);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    var t, n;
    return null !== (n = null !== (t = e.displayName) && void 0 !== t ? t : e.name) && void 0 !== n ? n : 'Component';
}
function u(e) {
    r.useEffect(
        () => (
            a().forEach(e, (e, t) => (0, o.ym)(t, e)),
            () => {
                a().forEach(e, (e, t) => (0, o.w5)(t, e));
            }
        ),
        [e]
    );
}
