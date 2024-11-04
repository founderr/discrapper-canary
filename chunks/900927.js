n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(481060),
    s = n(275759),
    a = n(565138),
    o = n(706454),
    c = n(271383),
    u = n(430824),
    d = n(709054),
    h = n(388032),
    m = n(45844);
function p(e) {
    let { userId: t, guildId: n, textClassName: p, tooltipDelay: f } = e,
        g = (0, l.e7)([o.default], () => o.default.locale),
        C = (0, l.e7)([u.Z], () => (null != n ? u.Z.getGuild(n) : null)),
        x = (0, l.e7)([c.ZP], () => (null != n ? c.ZP.getMember(n, t) : null)),
        v = (0, s.FI)(d.default.extractTimestamp(t), g),
        _ = (0, s.FI)(null == x ? void 0 : x.joinedAt, g);
    return null == C || null == x
        ? (0, i.jsx)(r.Text, {
              variant: 'text-sm/normal',
              className: p,
              children: v
          })
        : (0, i.jsxs)('div', {
              className: m.memberSinceWrapper,
              children: [
                  (0, i.jsxs)('div', {
                      className: m.memberSince,
                      children: [
                          (0, i.jsx)(r.Tooltip, {
                              text: h.intl.string(h.t.uvGmCw),
                              delay: f,
                              children: (e) =>
                                  (0, i.jsx)(r.ClydeIcon, {
                                      size: 'custom',
                                      width: 28,
                                      height: 28,
                                      color: 'currentColor',
                                      ...e,
                                      className: m.discordIcon
                                  })
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: 'text-sm/normal',
                              className: p,
                              children: v
                          })
                      ]
                  }),
                  (0, i.jsx)('div', { className: m.divider }),
                  (0, i.jsxs)('div', {
                      className: m.memberSince,
                      children: [
                          (0, i.jsx)(r.Tooltip, {
                              text: C.name,
                              delay: f,
                              children: (e) =>
                                  (0, i.jsx)(a.Z, {
                                      ...e,
                                      guild: C,
                                      size: a.Z.Sizes.SMOL
                                  })
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: 'text-sm/normal',
                              className: p,
                              children: _
                          })
                      ]
                  })
              ]
          });
}
