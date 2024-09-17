n.d(t, {
    Vy: function () {
        return a;
    },
    x8: function () {
        return s;
    }
}),
    n(47120);
var r = n(470079),
    i = n(223143);
let a = 'a_f979ba5f9c2ba83db3149cc02f489f7c';
function s() {
    let [e, t] = r.useState(!1),
        { purchases: n, hasPreviouslyFetched: a } = (0, i.c)(),
        s = r.useRef(!1);
    return (
        r.useEffect(() => {
            a && !s.current && (t(null != n.get('1157412779335090267')), (s.current = !0));
        }, [n, a]),
        e
    );
}
