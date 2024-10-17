n.d(t, {
    w: function () {
        return N;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(657707),
    r = n(793030),
    l = n(481060),
    o = n(100527),
    c = n(436774),
    u = n(197115),
    d = n(74538),
    _ = n(175006),
    E = n(981631),
    I = n(474936),
    m = n(689938),
    T = n(169458),
    f = n(492764),
    h = n(235810);
function N() {
    return (0, _.Z)()
        ? (0, i.jsx)('div', {
              className: T.emptyContainer,
              children: (0, i.jsxs)('div', {
                  className: T.emptyInner,
                  children: [
                      (0, i.jsx)('img', {
                          src: f,
                          className: T.image,
                          alt: ''
                      }),
                      (0, i.jsx)(l.Heading, {
                          className: T.header,
                          variant: 'heading-xl/semibold',
                          color: 'text-normal',
                          children: m.Z.Messages.FOR_LATER_EMPTY_ALL_TITLE
                      }),
                      (0, i.jsx)(r.xv, {
                          variant: 'text-md/medium',
                          color: 'text-muted',
                          children: m.Z.Messages.FOR_LATER_EMPTY_ALL_BODY_WEB
                      })
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: T.emptyContainer,
              children: [
                  (0, i.jsxs)('div', {
                      className: T.emptyInner,
                      children: [
                          (0, i.jsx)('img', {
                              src: h,
                              className: T.image,
                              alt: ''
                          }),
                          (0, i.jsx)(l.Heading, {
                              className: T.header,
                              variant: 'heading-xl/semibold',
                              color: 'text-normal',
                              children: m.Z.Messages.FOR_LATER_UPSELL_MODAL_TITLE
                          }),
                          (0, i.jsx)(r.xv, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: m.Z.Messages.FOR_LATER_UPSELL_MODAL_BODY
                          })
                      ]
                  }),
                  (0, i.jsx)(p, {})
              ]
          });
}
function p() {
    let e = (0, d.Px)(I.p9.TIER_2),
        t = a.useCallback(
            () =>
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e('34906').then(n.bind(n, 639565));
                    return (t) =>
                        (0, i.jsx)(e, {
                            source: o.Z.FOR_LATER_POPOUT,
                            ...t
                        });
                }),
            []
        ),
        _ = m.Z.Messages.FOR_LATER_PREMIUM_UPSELL.format({
            nitroTierName: e,
            onClick: t
        });
    return (0, i.jsxs)('div', {
        className: T.upsellContainer,
        children: [
            (0, i.jsx)(s.SrA, {
                size: 'md',
                color: c.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(r.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: T.upsellText,
                children: _
            }),
            (0, i.jsx)(u.Z, {
                className: T.upsellButton,
                size: l.ButtonSizes.TINY,
                shinyButtonClassName: T.upsellButton,
                subscriptionTier: I.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: E.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
