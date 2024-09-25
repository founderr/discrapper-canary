n.d(t, {
    w: function () {
        return T;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(657707),
    o = n(793030),
    s = n(481060),
    l = n(100527),
    u = n(436774),
    c = n(197115),
    d = n(74538),
    _ = n(175006),
    E = n(981631),
    f = n(474936),
    h = n(689938),
    p = n(169458),
    m = n(492764),
    I = n(235810);
function T() {
    return (0, _.Z)()
        ? (0, r.jsx)('div', {
              className: p.emptyContainer,
              children: (0, r.jsxs)('div', {
                  className: p.emptyInner,
                  children: [
                      (0, r.jsx)('img', {
                          src: m,
                          className: p.image,
                          alt: ''
                      }),
                      (0, r.jsx)(s.Heading, {
                          className: p.header,
                          variant: 'heading-xl/semibold',
                          color: 'text-normal',
                          children: h.Z.Messages.FOR_LATER_EMPTY_ALL_TITLE
                      }),
                      (0, r.jsx)(o.xv, {
                          variant: 'text-md/medium',
                          color: 'text-muted',
                          children: h.Z.Messages.FOR_LATER_EMPTY_ALL_BODY_WEB
                      })
                  ]
              })
          })
        : (0, r.jsxs)('div', {
              className: p.emptyContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: p.emptyInner,
                      children: [
                          (0, r.jsx)('img', {
                              src: I,
                              className: p.image,
                              alt: ''
                          }),
                          (0, r.jsx)(s.Heading, {
                              className: p.header,
                              variant: 'heading-xl/semibold',
                              color: 'text-normal',
                              children: h.Z.Messages.FOR_LATER_UPSELL_MODAL_TITLE
                          }),
                          (0, r.jsx)(o.xv, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: h.Z.Messages.FOR_LATER_UPSELL_MODAL_BODY
                          })
                      ]
                  }),
                  (0, r.jsx)(g, {})
              ]
          });
}
function g() {
    let e = (0, d.Px)(f.p9.TIER_2),
        t = i.useCallback(
            () =>
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e('34906').then(n.bind(n, 639565));
                    return (t) =>
                        (0, r.jsx)(e, {
                            source: l.Z.FOR_LATER_POPOUT,
                            ...t
                        });
                }),
            []
        ),
        _ = h.Z.Messages.FOR_LATER_PREMIUM_UPSELL.format({
            nitroTierName: e,
            onClick: t
        });
    return (0, r.jsxs)('div', {
        className: p.upsellContainer,
        children: [
            (0, r.jsx)(a.SrA, {
                size: 'md',
                color: u.JX.PREMIUM_TIER_2
            }),
            (0, r.jsx)(o.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: p.upsellText,
                children: _
            }),
            (0, r.jsx)(c.Z, {
                className: p.upsellButton,
                size: s.ButtonSizes.TINY,
                shinyButtonClassName: p.upsellButton,
                subscriptionTier: f.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: E.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
