n.d(t, {
    w: function () {
        return N;
    }
});
var i = n(200651),
    a = n(192379),
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
    f = n(169458),
    T = n(492764),
    h = n(235810);
function N() {
    return (0, _.Z)()
        ? (0, i.jsx)('div', {
              className: f.emptyContainer,
              children: (0, i.jsxs)('div', {
                  className: f.emptyInner,
                  children: [
                      (0, i.jsx)('img', {
                          src: T,
                          className: f.image,
                          alt: ''
                      }),
                      (0, i.jsx)(l.Heading, {
                          className: f.header,
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
              className: f.emptyContainer,
              children: [
                  (0, i.jsxs)('div', {
                      className: f.emptyInner,
                      children: [
                          (0, i.jsx)('img', {
                              src: h,
                              className: f.image,
                              alt: ''
                          }),
                          (0, i.jsx)(l.Heading, {
                              className: f.header,
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
        className: f.upsellContainer,
        children: [
            (0, i.jsx)(s.SrA, {
                size: 'md',
                color: c.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(r.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: f.upsellText,
                children: _
            }),
            (0, i.jsx)(u.Z, {
                className: f.upsellButton,
                size: l.ButtonSizes.TINY,
                shinyButtonClassName: f.upsellButton,
                subscriptionTier: I.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: E.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
