var i = a(735250);
a(470079);
var o = a(120356),
    t = a.n(o),
    l = a(481060),
    s = a(709586),
    r = a(267642),
    c = a(689938),
    d = a(844396);
n.Z = (e) => {
    let n,
        a,
        o,
        { guildFeature: f, guild: u, className: p, hideTooltip: x = !1, tooltipPosition: _ = 'left', onClick: m } = e,
        g = u.hasFeature(f),
        C = (0, r._p)(f);
    return (g
        ? (null != C && (o = c.Z.Messages.PREMIUM_GUILD_INCLUDED),
          (n = (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.Z, { className: d.unlockedIcon }),
                  (0, i.jsx)(l.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: c.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                  })
              ]
          })))
        : (null != C && (o = c.Z.Messages.CLICK_TO_LEARN_MORE),
          (n = (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.Z, { className: d.icon }),
                  (0, i.jsx)(l.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: null != C && (0, r.e9)(C)
                  })
              ]
          }))),
    (a =
        x || null == o
            ? (0, i.jsx)('div', {
                  className: t()(d.availabilityIndicator, p),
                  children: n
              })
            : (0, i.jsx)(l.Tooltip, {
                  position: _,
                  text: o,
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: t()(d.availabilityIndicator, p),
                          children: n
                      })
              })),
    null == m || g)
        ? a
        : (0, i.jsx)(l.Clickable, {
              onClick: m,
              className: d.clickable,
              children: a
          });
};
