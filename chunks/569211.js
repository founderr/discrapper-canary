n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    l = n(585483),
    r = n(424602),
    s = n(783097),
    a = n(981631);
function o(e) {
    let { obstructedFromView: t, disabled: n } = e,
        o = r._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
        [c, u] = i.useState(null),
        d = i.useRef(c);
    d.current = c;
    let h = i.useMemo(() => (null != c ? (0, s.sl)(c) : null), [c]);
    i.useEffect(() => {
        n && u(null);
    }, [n]);
    let m = null != c && !t;
    return (
        i.useEffect(() => {
            if (!m) return;
            let e = setTimeout(() => {
                if (!t) u(null);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }, [t, m]),
        i.useEffect(() => {
            if (t) return;
            let e = (e) => {
                    let { application: t } = e;
                    u(t), (d.current = t);
                },
                n = (e) => {
                    var t;
                    let { applicationId: n } = e;
                    (null === (t = d.current) || void 0 === t ? void 0 : t.id) === n && (u(null), (d.current = null));
                };
            return (
                l.S.subscribe(a.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, e),
                l.S.subscribe(a.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, n),
                () => {
                    l.S.unsubscribe(a.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, e), l.S.unsubscribe(a.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, n);
                }
            );
        }, [t]),
        {
            enabled: o.enabled,
            showsTooltip: o.showsTooltip,
            applicationDetails: h,
            shouldShow: m
        }
    );
}
