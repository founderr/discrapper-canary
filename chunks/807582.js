var t = n(735250);
n(470079);
var a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(709586),
    r = n(267642),
    c = n(689938),
    d = n(547780);
i.Z = (e) => {
    let i,
        n,
        a,
        { guildFeature: u, guild: f, className: p, hideTooltip: x = !1, tooltipPosition: _ = 'left', onClick: m } = e,
        g = f.hasFeature(u),
        C = (0, r._p)(u);
    return (g
        ? (null != C && (a = c.Z.Messages.PREMIUM_GUILD_INCLUDED),
          (i = (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(s.Z, { className: d.unlockedIcon }),
                  (0, t.jsx)(o.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: c.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                  })
              ]
          })))
        : (null != C && (a = c.Z.Messages.CLICK_TO_LEARN_MORE),
          (i = (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(s.Z, { className: d.icon }),
                  (0, t.jsx)(o.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: null != C && (0, r.e9)(C)
                  })
              ]
          }))),
    (n =
        x || null == a
            ? (0, t.jsx)('div', {
                  className: l()(d.availabilityIndicator, p),
                  children: i
              })
            : (0, t.jsx)(o.Tooltip, {
                  position: _,
                  text: a,
                  children: (e) =>
                      (0, t.jsx)('div', {
                          ...e,
                          className: l()(d.availabilityIndicator, p),
                          children: i
                      })
              })),
    null == m || g)
        ? n
        : (0, t.jsx)(o.Clickable, {
              onClick: m,
              className: d.clickable,
              children: n
          });
};
