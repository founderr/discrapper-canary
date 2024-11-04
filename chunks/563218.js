n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(570140),
    s = n(519938),
    o = n(928518),
    c = n(585483),
    u = n(317381),
    d = n(917107),
    m = n(716600),
    f = n(918559),
    p = n(981631);
let h = (e, t) => {
    r.Z.wait(() => {
        (0, s.Cz)(e, t);
    });
};
function g(e) {
    let t,
        { embedId: n, className: r, style: s } = e,
        g = (0, a.e7)([o.Z], () => o.Z.getWindow(p.KJ3.CHANNEL_CALL_POPOUT)),
        v = (0, m.Z)(),
        S = (0, a.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
    if (null != v && !(0, d.Z)(v.channelId) && S === f.Ez.PANEL) t = window;
    else {
        var I;
        t = null !== (I = null == g ? void 0 : g.window) && void 0 !== I ? I : window;
    }
    let _ = l.useRef(null),
        x = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, i;
                        h(n, null !== (i = null === (t = _.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) && void 0 !== i ? i : null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener('resize', x),
                c.S.subscribe(p.CkL.REMEASURE_TARGET, x),
                () => {
                    t.removeEventListener('resize', x), c.S.unsubscribe(p.CkL.REMEASURE_TARGET, x);
                }
            ),
            [x, t]
        ),
        l.useLayoutEffect(() => {
            let e = _.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            x();
            let i = new t.ResizeObserver(x);
            return (
                i.observe(e),
                () => {
                    i.disconnect(), h(n, null);
                }
            );
        }, [n, x]),
        (0, i.jsx)('div', {
            ref: _,
            style: s,
            className: r
        })
    );
}
