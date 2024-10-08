var a = i(735250);
i(470079);
var o = i(120356),
    t = i.n(o),
    l = i(481060),
    s = i(709586),
    r = i(267642),
    c = i(689938),
    d = i(844396);
n.Z = (e) => {
    let n,
        i,
        o,
        { guildFeature: f, guild: u, className: p, hideTooltip: x = !1, tooltipPosition: _ = 'left', onClick: m } = e,
        g = u.hasFeature(f),
        C = (0, r._p)(f);
    return (g
        ? (null != C && (o = c.Z.Messages.PREMIUM_GUILD_INCLUDED),
          (n = (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(s.Z, { className: d.unlockedIcon }),
                  (0, a.jsx)(l.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: c.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                  })
              ]
          })))
        : (null != C && (o = c.Z.Messages.CLICK_TO_LEARN_MORE),
          (n = (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(s.Z, { className: d.icon }),
                  (0, a.jsx)(l.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: null != C && (0, r.e9)(C)
                  })
              ]
          }))),
    (i =
        x || null == o
            ? (0, a.jsx)('div', {
                  className: t()(d.availabilityIndicator, p),
                  children: n
              })
            : (0, a.jsx)(l.Tooltip, {
                  position: _,
                  text: o,
                  children: (e) =>
                      (0, a.jsx)('div', {
                          ...e,
                          className: t()(d.availabilityIndicator, p),
                          children: n
                      })
              })),
    null == m || g)
        ? i
        : (0, a.jsx)(l.Clickable, {
              onClick: m,
              className: d.clickable,
              children: i
          });
};
