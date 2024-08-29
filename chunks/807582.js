var t = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(709586),
    c = n(267642),
    r = n(689938),
    d = n(547780);
i.Z = (e) => {
    let i,
        n,
        a,
        { guildFeature: f, guild: u, className: p, hideTooltip: x = !1, tooltipPosition: _ = 'left', onClick: m } = e,
        g = u.hasFeature(f),
        C = (0, c._p)(f);
    return (g
        ? (null != C && (a = r.Z.Messages.PREMIUM_GUILD_INCLUDED),
          (i = (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(l.Z, { className: d.unlockedIcon }),
                  (0, t.jsx)(s.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: r.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                  })
              ]
          })))
        : (null != C && (a = r.Z.Messages.CLICK_TO_LEARN_MORE),
          (i = (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(l.Z, { className: d.icon }),
                  (0, t.jsx)(s.Heading, {
                      variant: 'eyebrow',
                      className: d.description,
                      children: null != C && (0, c.e9)(C)
                  })
              ]
          }))),
    (n =
        x || null == a
            ? (0, t.jsx)('div', {
                  className: o()(d.availabilityIndicator, p),
                  children: i
              })
            : (0, t.jsx)(s.Tooltip, {
                  position: _,
                  text: a,
                  children: (e) =>
                      (0, t.jsx)('div', {
                          ...e,
                          className: o()(d.availabilityIndicator, p),
                          children: i
                      })
              })),
    null == m || g)
        ? n
        : (0, t.jsx)(s.Clickable, {
              onClick: m,
              className: d.clickable,
              children: n
          });
};
