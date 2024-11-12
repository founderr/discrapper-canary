n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(923928),
    l = n(468026),
    u = n(503856),
    c = n(209590),
    d = n(388032);
let f = () => {
        o.Z.clearSuppressWarning();
    },
    _ = () => {
        o.Z.clearSuppressWarning(!0);
    };
t.Z = () => {
    let e = i.useRef(null);
    function t() {
        null !== e.current && ((0, s.closeModal)(e.current), (e.current = null));
    }
    let [o, p] = (0, a.Wu)([c.Z], () => [c.Z.shouldShowWarning(), c.Z.isAFKChannel()], []),
        h = i.useCallback(() => {
            let t, n;
            p ? ((t = d.intl.string(d.t.Y40JkZ)), (n = d.intl.string(d.t['5J4yGR']))) : ((t = d.intl.string(d.t.FJSZVF)), (n = d.intl.string(d.t.etJjgY))),
                (e.current = (0, s.openModal)((e) =>
                    (0, r.jsx)(l.default, {
                        title: t,
                        body: n,
                        onConfirm: f,
                        confirmText: d.intl.string(d.t.BddRzc),
                        secondaryConfirmText: d.intl.string(d.t['5E9SBw']),
                        onConfirmSecondary: _,
                        ...e
                    })
                ));
        }, [p]),
        m = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e('41281').then(n.bind(n, 669732));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        showHideSuppressWarning: !0
                    });
            }).then((t) => {
                null != t && (e.current = t);
            });
        }, []);
    return (
        i.useEffect(
            () => (
                o && (0, u.p)() ? m() : o ? h() : t(),
                () => {
                    t();
                }
            ),
            [o, h, m]
        ),
        null
    );
};
