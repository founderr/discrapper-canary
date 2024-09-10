s.d(n, {
    Z: function () {
        return E;
    }
});
var t = s(735250);
s(470079);
var i = s(399606),
    o = s(481060),
    l = s(275759),
    r = s(565138),
    a = s(706454),
    c = s(271383),
    d = s(430824),
    u = s(709054),
    I = s(689938),
    _ = s(45844);
function E(e) {
    let { userId: n, guildId: s, textClassName: E, tooltipDelay: f } = e,
        x = (0, i.e7)([a.default], () => a.default.locale),
        m = (0, i.e7)([d.Z], () => (null != s ? d.Z.getGuild(s) : null)),
        Z = (0, i.e7)([c.ZP], () => (null != s ? c.ZP.getMember(s, n) : null)),
        p = (0, l.FI)(u.default.extractTimestamp(n), x),
        h = (0, l.FI)(null == Z ? void 0 : Z.joinedAt, x);
    return null == m || null == Z
        ? (0, t.jsx)(o.Text, {
              variant: 'text-sm/normal',
              className: E,
              children: p
          })
        : (0, t.jsxs)('div', {
              className: _.memberSinceWrapper,
              children: [
                  (0, t.jsxs)('div', {
                      className: _.memberSince,
                      children: [
                          (0, t.jsx)(o.Tooltip, {
                              text: I.Z.Messages.DISCORD_NAME,
                              delay: f,
                              children: (e) =>
                                  (0, t.jsx)(o.ClydeIcon, {
                                      size: 'custom',
                                      width: 28,
                                      height: 28,
                                      color: 'currentColor',
                                      ...e,
                                      className: _.discordIcon
                                  })
                          }),
                          (0, t.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              className: E,
                              children: p
                          })
                      ]
                  }),
                  (0, t.jsx)('div', { className: _.divider }),
                  (0, t.jsxs)('div', {
                      className: _.memberSince,
                      children: [
                          (0, t.jsx)(o.Tooltip, {
                              text: m.name,
                              delay: f,
                              children: (e) =>
                                  (0, t.jsx)(r.Z, {
                                      ...e,
                                      guild: m,
                                      size: r.Z.Sizes.SMOL
                                  })
                          }),
                          (0, t.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              className: E,
                              children: h
                          })
                      ]
                  })
              ]
          });
}
