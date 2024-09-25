n.d(t, {
    Vy: function () {
        return s;
    },
    Z2: function () {
        return l;
    },
    x8: function () {
        return u;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(223143);
let o = '1157412779335090267',
    s = 'a_f979ba5f9c2ba83db3149cc02f489f7c';
function l() {
    let { purchases: e } = (0, a.c)();
    return e.get(o);
}
function u() {
    let [e, t] = i.useState(),
        { purchases: n, hasPreviouslyFetched: r } = (0, a.c)(),
        s = i.useRef(!1);
    return (
        i.useEffect(() => {
            r && !s.current && (t(null != n.get(o)), (s.current = !0));
        }, [n, r]),
        e
    );
}
