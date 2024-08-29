t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(735250);
t(470079);
var a = t(442837),
    i = t(481060),
    r = t(325997),
    o = t(78839),
    l = t(270144),
    c = t(130991),
    d = t(238847),
    _ = t(689938),
    E = t(784528);
function u(e) {
    let { onGoBack: s } = e,
        t = (0, a.Wu)([o.ZP], () => {
            var e, s;
            return null !==
                (s =
                    null === (e = o.ZP.getActiveApplicationSubscriptions()) || void 0 === e
                        ? void 0
                        : e.slice().sort((e, s) => {
                              var t, n, a, i;
                              return (null !== (a = null === (t = e.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== a ? a : e.currentPeriodStart.getTime()) - (null !== (i = null === (n = s.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : s.currentPeriodStart.getTime());
                          })) && void 0 !== s
                ? s
                : [];
        }),
        { loading: u } = (0, l.sp)(t),
        { loadState: I } = (0, l.qz)(),
        T = u || I !== l.jd.LOADED,
        { enabled: S } = r.m.useExperiment({ location: 'UserSettingsApplicationSubscriptions' });
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsxs)('div', {
                className: E.title,
                children: [
                    (0, n.jsx)(i.Button, {
                        look: i.Button.Looks.BLANK,
                        onClick: s,
                        size: i.Button.Sizes.ICON,
                        children: (0, n.jsx)(i.ArrowLargeLeftIcon, { size: 'sm' })
                    }),
                    (0, n.jsx)(i.Heading, {
                        variant: 'heading-lg/semibold',
                        children: _.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_TITLE
                    })
                ]
            }),
            T
                ? (0, n.jsx)(i.Spinner, {})
                : (0, n.jsx)('div', {
                      className: E.subscriptionsContainer,
                      children: S ? t.map((e) => (0, n.jsx)(c.Z, { subscription: e }, e.id)) : t.map((e) => (0, n.jsx)(d.Z, { subscription: e }, e.id))
                  })
        ]
    });
}
