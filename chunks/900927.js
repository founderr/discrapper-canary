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
    c = s(706454),
    a = s(271383),
    d = s(430824),
    u = s(709054),
    I = s(689938),
    _ = s(45844);
function E(e) {
    let { userId: n, guildId: s, textClassName: E, tooltipDelay: f } = e,
        m = (0, i.e7)([c.default], () => c.default.locale),
        x = (0, i.e7)([d.Z], () => (null != s ? d.Z.getGuild(s) : null)),
        Z = (0, i.e7)([a.ZP], () => (null != s ? a.ZP.getMember(s, n) : null)),
        p = (0, l.FI)(u.default.extractTimestamp(n), m),
        h = (0, l.FI)(null == Z ? void 0 : Z.joinedAt, m);
    return null == x || null == Z
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
                              text: x.name,
                              delay: f,
                              children: (e) =>
                                  (0, t.jsx)(r.Z, {
                                      ...e,
                                      guild: x,
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
