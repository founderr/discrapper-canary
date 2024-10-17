a.d(s, {
    Z: function () {
        return j;
    }
});
var t = a(735250);
a(470079);
var i = a(399606),
    l = a(481060),
    n = a(275759),
    r = a(565138),
    c = a(706454),
    d = a(271383),
    o = a(430824),
    x = a(709054),
    u = a(689938),
    m = a(45844);
function j(e) {
    let { userId: s, guildId: a, textClassName: j, tooltipDelay: v } = e,
        h = (0, i.e7)([c.default], () => c.default.locale),
        N = (0, i.e7)([o.Z], () => (null != a ? o.Z.getGuild(a) : null)),
        Z = (0, i.e7)([d.ZP], () => (null != a ? d.ZP.getMember(a, s) : null)),
        E = (0, n.FI)(x.default.extractTimestamp(s), h),
        I = (0, n.FI)(null == Z ? void 0 : Z.joinedAt, h);
    return null == N || null == Z
        ? (0, t.jsx)(l.Text, {
              variant: 'text-sm/normal',
              className: j,
              children: E
          })
        : (0, t.jsxs)('div', {
              className: m.memberSinceWrapper,
              children: [
                  (0, t.jsxs)('div', {
                      className: m.memberSince,
                      children: [
                          (0, t.jsx)(l.Tooltip, {
                              text: u.Z.Messages.DISCORD_NAME,
                              delay: v,
                              children: (e) =>
                                  (0, t.jsx)(l.ClydeIcon, {
                                      size: 'custom',
                                      width: 28,
                                      height: 28,
                                      color: 'currentColor',
                                      ...e,
                                      className: m.discordIcon
                                  })
                          }),
                          (0, t.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              className: j,
                              children: E
                          })
                      ]
                  }),
                  (0, t.jsx)('div', { className: m.divider }),
                  (0, t.jsxs)('div', {
                      className: m.memberSince,
                      children: [
                          (0, t.jsx)(l.Tooltip, {
                              text: N.name,
                              delay: v,
                              children: (e) =>
                                  (0, t.jsx)(r.Z, {
                                      ...e,
                                      guild: N,
                                      size: r.Z.Sizes.SMOL
                                  })
                          }),
                          (0, t.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              className: j,
                              children: I
                          })
                      ]
                  })
              ]
          });
}
