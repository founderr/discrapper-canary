n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(570140),
    a = n(519938),
    o = n(928518),
    c = n(585483),
    u = n(317381),
    d = n(917107),
    h = n(716600),
    m = n(918559),
    p = n(981631);
let f = (e, t) => {
    s.Z.wait(() => {
        (0, a.Cz)(e, t);
    });
};
function g(e) {
    let t,
        { embedId: n, className: s, style: a } = e,
        g = (0, r.e7)([o.Z], () => o.Z.getWindow(p.KJ3.CHANNEL_CALL_POPOUT)),
        C = (0, h.Z)(),
        x = (0, r.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
    if (null != C && !(0, d.Z)(C.channelId) && x === m.Ez.PANEL) t = window;
    else {
        var v;
        t = null !== (v = null == g ? void 0 : g.window) && void 0 !== v ? v : window;
    }
    let _ = l.useRef(null),
        I = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, i;
                        f(n, null !== (i = null === (t = _.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) && void 0 !== i ? i : null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener('resize', I),
                c.S.subscribe(p.CkL.REMEASURE_TARGET, I),
                () => {
                    t.removeEventListener('resize', I), c.S.unsubscribe(p.CkL.REMEASURE_TARGET, I);
                }
            ),
            [I, t]
        ),
        l.useLayoutEffect(() => {
            let e = _.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            I();
            let i = new t.ResizeObserver(I);
            return (
                i.observe(e),
                () => {
                    i.disconnect(), f(n, null);
                }
            );
        }, [n, I]),
        (0, i.jsx)('div', {
            ref: _,
            style: a,
            className: s
        })
    );
}
