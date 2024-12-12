var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(481060),
    u = r(923928),
    c = r(468026),
    d = r(503856),
    f = r(209590),
    _ = r(388032);
let h = () => {
        u.Z.clearSuppressWarning();
    },
    p = () => {
        u.Z.clearSuppressWarning(!0);
    },
    m = () => {
        let e = s.useRef(null);
        function n() {
            null !== e.current && ((0, l.closeModal)(e.current), (e.current = null));
        }
        let [i, u] = (0, o.Wu)([f.Z], () => [f.Z.shouldShowWarning(), f.Z.isAFKChannel()], []),
            m = s.useCallback(() => {
                let n, r;
                u ? ((n = _.intl.string(_.t.Y40JkZ)), (r = _.intl.string(_.t['5J4yGR']))) : ((n = _.intl.string(_.t.FJSZVF)), (r = _.intl.string(_.t.etJjgY))),
                    (e.current = (0, l.openModal)((e) =>
                        (0, a.jsx)(c.default, {
                            title: n,
                            body: r,
                            onConfirm: h,
                            confirmText: _.intl.string(_.t.BddRzc),
                            secondaryConfirmText: _.intl.string(_.t['5E9SBw']),
                            onConfirmSecondary: p,
                            ...e
                        })
                    ));
            }, [u]),
            g = s.useCallback(() => {
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await r.e('41281').then(r.bind(r, 669732));
                    return (n) =>
                        (0, a.jsx)(e, {
                            ...n,
                            showHideSuppressWarning: !0
                        });
                }).then((n) => {
                    null != n && (e.current = n);
                });
            }, []);
        return (
            s.useEffect(
                () => (
                    i && (0, d.p)() ? g() : i ? m() : n(),
                    () => {
                        n();
                    }
                ),
                [i, m, g]
            ),
            null
        );
    };
n.Z = m;
