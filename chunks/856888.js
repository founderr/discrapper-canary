n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(325997),
    o = n(78839),
    c = n(270144),
    d = n(851718),
    u = n(238847),
    m = n(388032),
    h = n(75540);
function g(e) {
    let { onGoBack: t } = e,
        n = (0, r.Wu)([o.ZP], () => {
            var e, t;
            return null !==
                (t =
                    null === (e = o.ZP.getActiveApplicationSubscriptions()) || void 0 === e
                        ? void 0
                        : e.slice().sort((e, t) => {
                              var n, i, s, r;
                              return (null !== (s = null === (n = e.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== s ? s : e.currentPeriodStart.getTime()) - (null !== (r = null === (i = t.createdAt) || void 0 === i ? void 0 : i.getTime()) && void 0 !== r ? r : t.currentPeriodStart.getTime());
                          })) && void 0 !== t
                ? t
                : [];
        }),
        { loading: g } = (0, c.sp)(n),
        { loadState: x } = (0, c.qz)(),
        S = g || x !== c.jd.LOADED,
        { enabled: T } = a.m.useExperiment({ location: 'UserSettingsApplicationSubscriptions' }),
        [C, _] = s.useState();
    return (
        null == C &&
            (C = (0, i.jsx)(p, {
                onBack: t,
                title: m.intl.string(m.t['DB/m9f'])
            })),
        (0, i.jsxs)('div', {
            children: [
                C,
                S
                    ? (0, i.jsx)(l.Spinner, {})
                    : (0, i.jsx)('div', {
                          className: h.subscriptionsContainer,
                          children: T
                              ? (0, i.jsx)(d.Z, {
                                    subscriptions: n,
                                    updateHeader: (e, t) => {
                                        _(
                                            (0, i.jsx)(p, {
                                                title: e,
                                                onBack: () => {
                                                    t(), _(void 0);
                                                }
                                            })
                                        );
                                    }
                                })
                              : n.map((e) => (0, i.jsx)(u.Z, { subscription: e }, e.id))
                      })
            ]
        })
    );
}
function p(e) {
    let { onBack: t, title: n } = e;
    return (0, i.jsxs)('div', {
        className: h.title,
        children: [
            (0, i.jsx)(l.Button, {
                look: l.Button.Looks.BLANK,
                onClick: t,
                size: l.Button.Sizes.ICON,
                children: (0, i.jsx)(l.ArrowLargeLeftIcon, { size: 'sm' })
            }),
            (0, i.jsx)(l.Heading, {
                variant: 'heading-lg/semibold',
                children: n
            })
        ]
    });
}
