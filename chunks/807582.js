var s = n(735250);
n(470079);
var a = n(120356),
    i = n.n(a),
    r = n(481060),
    l = n(709586),
    o = n(267642),
    c = n(689938),
    d = n(844396);
t.Z = (e) => {
    let t,
        n,
        a,
        { guildFeature: u, guild: _, className: I, hideTooltip: E = !1, tooltipPosition: T = 'left', onClick: m } = e,
        N = _.hasFeature(u),
        S = (0, o._p)(u);
    return (N
        ? (null != S && (a = c.Z.Messages.PREMIUM_GUILD_INCLUDED),
          (t = (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(l.Z, { className: d.unlockedIcon }),
                  (0, s.jsx)(r.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: c.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                  })
              ]
          })))
        : (null != S && (a = c.Z.Messages.CLICK_TO_LEARN_MORE),
          (t = (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(l.Z, { className: d.icon }),
                  (0, s.jsx)(r.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: null != S && (0, o.e9)(S)
                  })
              ]
          }))),
    (n =
        E || null == a
            ? (0, s.jsx)('div', {
                  className: i()(d.availabilityIndicator, I),
                  children: t
              })
            : (0, s.jsx)(r.Tooltip, {
                  position: T,
                  text: a,
                  children: (e) =>
                      (0, s.jsx)('div', {
                          ...e,
                          className: i()(d.availabilityIndicator, I),
                          children: t
                      })
              })),
    null == m || N)
        ? n
        : (0, s.jsx)(r.Clickable, {
              onClick: m,
              className: d.clickable,
              children: n
          });
};
