t.d(n, {
    Z: function () {
        return E;
    }
});
var s = t(735250);
t(470079);
var i = t(399606),
    o = t(481060),
    l = t(275759),
    r = t(565138),
    a = t(706454),
    c = t(271383),
    d = t(430824),
    u = t(709054),
    _ = t(689938),
    I = t(45844);
function E(e) {
    let { userId: n, guildId: t, textClassName: E, tooltipDelay: f } = e,
        m = (0, i.e7)([a.default], () => a.default.locale),
        x = (0, i.e7)([d.Z], () => (null != t ? d.Z.getGuild(t) : null)),
        Z = (0, i.e7)([c.ZP], () => (null != t ? c.ZP.getMember(t, n) : null)),
        p = (0, l.FI)(u.default.extractTimestamp(n), m),
        h = (0, l.FI)(null == Z ? void 0 : Z.joinedAt, m);
    return null == x || null == Z
        ? (0, s.jsx)(o.Text, {
              variant: 'text-sm/normal',
              className: E,
              children: p
          })
        : (0, s.jsxs)('div', {
              className: I.memberSinceWrapper,
              children: [
                  (0, s.jsxs)('div', {
                      className: I.memberSince,
                      children: [
                          (0, s.jsx)(o.Tooltip, {
                              text: _.Z.Messages.DISCORD_NAME,
                              delay: f,
                              children: (e) =>
                                  (0, s.jsx)(o.ClydeIcon, {
                                      size: 'custom',
                                      width: 28,
                                      height: 28,
                                      color: 'currentColor',
                                      ...e,
                                      className: I.discordIcon
                                  })
                          }),
                          (0, s.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              className: E,
                              children: p
                          })
                      ]
                  }),
                  (0, s.jsx)('div', { className: I.divider }),
                  (0, s.jsxs)('div', {
                      className: I.memberSince,
                      children: [
                          (0, s.jsx)(o.Tooltip, {
                              text: x.name,
                              delay: f,
                              children: (e) =>
                                  (0, s.jsx)(r.Z, {
                                      ...e,
                                      guild: x,
                                      size: r.Z.Sizes.SMOL
                                  })
                          }),
                          (0, s.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              className: E,
                              children: h
                          })
                      ]
                  })
              ]
          });
}
