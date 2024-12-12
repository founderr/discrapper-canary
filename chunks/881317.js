n(47120);
var i = n(200651),
    r = n(192379),
    s = n(990547),
    l = n(442837),
    a = n(481060),
    o = n(893776),
    c = n(232567),
    u = n(388905),
    d = n(353926),
    h = n(82554),
    g = n(726521),
    m = n(185625),
    p = n(314897),
    f = n(63063),
    _ = n(981631),
    x = n(388032),
    E = n(57717),
    I = n(232186);
l.ZP.initialize();
let v = (e) => {
    let { title: t, menuType: r } = e,
        l = () => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e('93288').then(n.bind(n, 396410));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        onSuccess: o,
                        headerText: x.intl.string(x.t.ZLRYGR),
                        confirmButtonText: x.intl.string(x.t.PDTjLC),
                        confirmButtonColor: a.Button.Colors.BRAND,
                        impressionName: s.ImpressionNames.URF_ENTER_EMAIL
                    });
            });
        },
        o = (e) => {
            let t = async () => {
                    await (0, m.yL)(r, e);
                },
                l = async (t) => await (0, m.RV)(r, e, t),
                o = (e) => {
                    let t = null == e ? void 0 : e.token;
                    r === h.BM.MESSAGE ? (0, g.eE)(t) : r === h.BM.USER && (0, g.JM)(t);
                };
            t(),
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await n.e('94566').then(n.bind(n, 965072));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            onFormSubmit: l,
                            onResend: t,
                            onSuccess: o,
                            headerText: x.intl.string(x.t.H3Q7U1),
                            confirmButtonText: x.intl.string(x.t['13ofGh']),
                            confirmButtonColor: a.Button.Colors.BRAND,
                            impressionName: s.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                        });
                });
        };
    return (0, i.jsx)('div', {
        className: E.buttonColumn,
        children: (0, i.jsx)(a.Button, {
            className: I.__invalid_reportButton,
            fullWidth: !0,
            color: a.Button.Colors.BRAND,
            onClick: () => l(),
            children: t
        })
    });
};
t.Z = () => {
    let [e, t] = r.useState(!0),
        [n, s] = r.useState(!1),
        g = (0, l.e7)([p.default], () => p.default.isAuthenticated()),
        N = (0, l.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        b = () => {
            (0, m.qJ)()
                .then(() => {
                    t(!1), s(!0);
                })
                .catch(() => {
                    t(!1), s(!1);
                });
        };
    return (
        r.useEffect(() => {
            g
                ? (t(!0),
                  c
                      .k({ withAnalyticsToken: !0 })
                      .then(() => b())
                      .catch(() => t(!1)))
                : b();
        }, [g]),
        r.useEffect(() => {
            (async () => {
                !N && (await o.Z.getLocationMetadata(), o.Z.getExperiments());
            })();
        }, [N]),
        e || !N
            ? (0, i.jsx)(u.ZP, { children: (0, i.jsx)(a.Spinner, {}) })
            : n &&
              (0, i.jsxs)(u.ZP, {
                  children: [
                      (0, i.jsx)(u.Dx, {
                          className: I.marginBottom8,
                          children: x.intl.string(x.t.Z11w19)
                      }),
                      (0, i.jsx)(u.DK, {
                          className: I.marginBottom8,
                          children: x.intl.format(x.t['532l+v'], { supportURL: f.Z.getArticleURL(_.BhN.COPYRIGHT_AND_IP_POLICY) })
                      }),
                      (0, i.jsxs)('div', {
                          className: E.container,
                          children: [
                              (0, i.jsx)(v, {
                                  title: x.intl.string(x.t.fuqnBA),
                                  menuType: h.BM.MESSAGE
                              }),
                              (0, i.jsx)(v, {
                                  title: x.intl.string(x.t.F4jrRU),
                                  menuType: h.BM.USER
                              })
                          ]
                      })
                  ]
              })
    );
};
