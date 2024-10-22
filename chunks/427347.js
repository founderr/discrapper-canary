n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var a = n(704215),
    s = n(481060),
    r = n(230711),
    l = n(100527),
    o = n(906732),
    c = n(605236),
    d = n(314910),
    u = n(197344),
    _ = n(226625),
    E = n(981631),
    h = n(921944),
    m = n(689938),
    I = n(338634);
function p() {
    let e = u.Z.useIsEligible(),
        t = (0, c.wE)(a.z.HOLIDAY_COACHMARK_HALLOWEEN_2024),
        { analyticsLocations: n } = (0, o.ZP)(l.Z.HOLIDAY_COACHMARK),
        p = (e) => {
            (0, c.EW)(a.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, { dismissAction: e });
        },
        g = () => {
            r.Z.open(E.oAB.NOTIFICATIONS, null, { analyticsLocations: n }), p(h.L.SECONDARY);
        };
    return e && !t
        ? (0, i.jsx)(d.ZP, {
              children: (0, i.jsxs)('div', {
                  className: I.wrapper,
                  children: [
                      (0, i.jsxs)('div', {
                          className: I.backgroundWrapper,
                          children: [
                              (0, i.jsx)(_.Z, {
                                  className: I.backgroundImage,
                                  pageMultiplier: 5
                              }),
                              (0, i.jsx)('div', { className: I.backgroundOverlay })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          className: I.content,
                          children: [
                              (0, i.jsx)('div', {
                                  className: I.heroImageWrapper,
                                  children: (0, i.jsx)('div', { className: I.heroImage })
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(s.Heading, {
                                          variant: 'heading-md/bold',
                                          color: void 0,
                                          className: I.specialText,
                                          children: m.Z.Messages.HALLOWEEN_COACHMARK_HEADER
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'always-white',
                                          children: m.Z.Messages.HALLOWEEN_COACHMARK_BODY.format({
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      s.Clickable,
                                                      {
                                                          tag: 'span',
                                                          className: I.specialTextLink,
                                                          onClick: g,
                                                          children: e
                                                      },
                                                      t
                                                  )
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(s.Clickable, {
                                  className: I.closeClickable,
                                  onClick: () => p(h.L.USER_DISMISS),
                                  children: (0, i.jsx)(s.XSmallIcon, {
                                      color: 'currentColor',
                                      size: 'xs'
                                  })
                              })
                          ]
                      })
                  ]
              })
          })
        : null;
}
