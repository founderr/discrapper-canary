t.d(n, {
    Z: function () {
        return I;
    }
});
var i = t(200651);
t(192379);
var l = t(399606),
    o = t(481060),
    r = t(275759),
    s = t(565138),
    c = t(706454),
    a = t(271383),
    d = t(430824),
    u = t(709054),
    f = t(388032),
    m = t(181402);
function I(e) {
    let { userId: n, guildId: t, textClassName: I, tooltipDelay: x } = e,
        p = (0, l.e7)([c.default], () => c.default.locale),
        h = (0, l.e7)([d.Z], () => (null != t ? d.Z.getGuild(t) : null)),
        v = (0, l.e7)([a.ZP], () => (null != t ? a.ZP.getMember(t, n) : null)),
        Z = (0, r.FI)(u.default.extractTimestamp(n), p),
        g = (0, r.FI)(null == v ? void 0 : v.joinedAt, p);
    return null == h || null == v
        ? (0, i.jsx)(o.Text, {
              variant: 'text-sm/normal',
              className: I,
              children: Z
          })
        : (0, i.jsxs)('div', {
              className: m.memberSinceWrapper,
              children: [
                  (0, i.jsxs)('div', {
                      className: m.memberSince,
                      children: [
                          (0, i.jsx)(o.Tooltip, {
                              text: f.intl.string(f.t.uvGmCw),
                              delay: x,
                              children: (e) =>
                                  (0, i.jsx)(o.ClydeIcon, {
                                      size: 'custom',
                                      width: 28,
                                      height: 28,
                                      color: 'currentColor',
                                      ...e,
                                      className: m.discordIcon
                                  })
                          }),
                          (0, i.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              className: I,
                              children: Z
                          })
                      ]
                  }),
                  (0, i.jsx)('div', { className: m.divider }),
                  (0, i.jsxs)('div', {
                      className: m.memberSince,
                      children: [
                          (0, i.jsx)(o.Tooltip, {
                              text: h.name,
                              delay: x,
                              children: (e) =>
                                  (0, i.jsx)(s.Z, {
                                      ...e,
                                      guild: h,
                                      size: s.Z.Sizes.SMOL
                                  })
                          }),
                          (0, i.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              className: I,
                              children: g
                          })
                      ]
                  })
              ]
          });
}
