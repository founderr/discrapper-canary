n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var s = n(399606),
    a = n(481060),
    l = n(275759),
    r = n(565138),
    o = n(706454),
    c = n(271383),
    u = n(430824),
    d = n(709054),
    h = n(689938),
    p = n(45844);
function m(e) {
    let { userId: t, guildId: n, textClassName: m, tooltipDelay: _ } = e,
        f = (0, s.e7)([o.default], () => o.default.locale),
        E = (0, s.e7)([u.Z], () => (null != n ? u.Z.getGuild(n) : null)),
        g = (0, s.e7)([c.ZP], () => (null != n ? c.ZP.getMember(n, t) : null)),
        C = (0, l.FI)(d.default.extractTimestamp(t), f),
        I = (0, l.FI)(null == g ? void 0 : g.joinedAt, f);
    return null == E || null == g
        ? (0, i.jsx)(a.Text, {
              variant: 'text-sm/normal',
              className: m,
              children: C
          })
        : (0, i.jsxs)('div', {
              className: p.memberSinceWrapper,
              children: [
                  (0, i.jsxs)('div', {
                      className: p.memberSince,
                      children: [
                          (0, i.jsx)(a.Tooltip, {
                              text: h.Z.Messages.DISCORD_NAME,
                              delay: _,
                              children: (e) =>
                                  (0, i.jsx)(a.ClydeIcon, {
                                      size: 'custom',
                                      width: 28,
                                      height: 28,
                                      color: 'currentColor',
                                      ...e,
                                      className: p.discordIcon
                                  })
                          }),
                          (0, i.jsx)(a.Text, {
                              variant: 'text-sm/normal',
                              className: m,
                              children: C
                          })
                      ]
                  }),
                  (0, i.jsx)('div', { className: p.divider }),
                  (0, i.jsxs)('div', {
                      className: p.memberSince,
                      children: [
                          (0, i.jsx)(a.Tooltip, {
                              text: E.name,
                              delay: _,
                              children: (e) =>
                                  (0, i.jsx)(r.Z, {
                                      ...e,
                                      guild: E,
                                      size: r.Z.Sizes.SMOL
                                  })
                          }),
                          (0, i.jsx)(a.Text, {
                              variant: 'text-sm/normal',
                              className: m,
                              children: I
                          })
                      ]
                  })
              ]
          });
}
