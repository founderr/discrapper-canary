var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(923928),
    u = n(468026),
    c = n(503856),
    d = n(209590),
    _ = n(689938);
let E = () => {
        l.Z.clearSuppressWarning();
    },
    f = () => {
        l.Z.clearSuppressWarning(!0);
    },
    h = () => {
        let e = a.useRef(null);
        function t() {
            null !== e.current && ((0, s.closeModal)(e.current), (e.current = null));
        }
        let [r, l] = (0, o.Wu)([d.Z], () => [d.Z.shouldShowWarning(), d.Z.isAFKChannel()], []),
            h = a.useCallback(() => {
                let t = '',
                    n = '';
                l ? ((t = _.Z.Messages.SUPPRESSED_AFK_TITLE), (n = _.Z.Messages.SUPPRESSED_AFK_BODY)) : ((t = _.Z.Messages.SUPPRESSED), (n = _.Z.Messages.SUPPRESSED_PERMISSION_BODY)),
                    (e.current = (0, s.openModal)((e) =>
                        (0, i.jsx)(u.default, {
                            title: t,
                            body: n,
                            onConfirm: E,
                            confirmText: _.Z.Messages.OKAY,
                            secondaryConfirmText: _.Z.Messages.DONT_SHOW_AGAIN,
                            onConfirmSecondary: f,
                            ...e
                        })
                    ));
            }, [l]),
            p = a.useCallback(() => {
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e('41281').then(n.bind(n, 669732));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            showHideSuppressWarning: !0
                        });
                }).then((t) => {
                    null != t && (e.current = t);
                });
            }, []);
        return (
            a.useEffect(
                () => (
                    r && (0, c.p)() ? p() : r ? h() : t(),
                    () => {
                        t();
                    }
                ),
                [r, h, p]
            ),
            null
        );
    };
t.Z = h;
