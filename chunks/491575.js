var i = n(200651),
    a = n(192379),
    s = n(512722),
    r = n.n(s),
    l = n(481060),
    o = n(176299),
    c = n(512847),
    d = n(612226),
    u = n(714338),
    _ = n(607070),
    E = n(317858),
    h = n(635395),
    m = n(5560),
    I = n(451478),
    p = n(585483),
    g = n(145604),
    T = n(718813),
    f = n(981631),
    S = n(119425);
t.Z = a.memo(function () {
    let e = a.useRef(null),
        t = a.useCallback((t) => {
            let { duration: n, intensity: i } = t;
            if (_.Z.useReducedMotion || !I.Z.isFocused()) return;
            let { current: a } = e;
            r()(null != a, 'Shakeable is shaken when not mounted'), a.shake(n, i);
        }, []);
    return (
        a.useEffect(() => (u.Z.setLayout(d.ZP), u.Z.enable(), () => u.Z.disable()), []),
        a.useEffect(
            () => (
                p.S.subscribe(f.CkL.SHAKE_APP, t),
                () => {
                    p.S.unsubscribe(f.CkL.SHAKE_APP, t);
                }
            ),
            [t]
        ),
        (0, E.Z)(),
        (0, i.jsxs)(l.Shakeable, {
            ref: e,
            className: S.app,
            children: [
                (0, i.jsx)(T.Z, {
                    className: S.layers,
                    children: (0, i.jsx)(o.Z, {})
                }),
                (0, i.jsx)(h.Z, {}),
                (0, i.jsx)(c.Z, {}),
                (0, i.jsx)(g.Z, {}),
                (0, i.jsx)(m.Z, {}),
                (0, i.jsx)(l.DnDKeyboardHelpBar, {})
            ]
        })
    );
});
