n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(318374),
    o = n(522289),
    s = n(565138),
    l = n(697927),
    u = n(200634),
    c = n(708108),
    d = n(146078),
    _ = n(228168),
    E = n(182294),
    f = n(352235);
let h = 3;
function p(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: p } = (0, l.Z)(t.id),
        { mutualGuilds: m } = (0, u.Z)(t.id),
        I = null != p && p.length > 0,
        T = null != m && m.length > 0,
        g = I && T ? 'text-xs/normal' : 'text-sm/normal';
    if (!I && !T) return null;
    let S = () =>
            I
                ? (0, r.jsxs)(i.Clickable, {
                      className: f.section,
                      onClick: () => (null == n ? void 0 : n(_.oh.MUTUAL_FRIENDS)),
                      children: [
                          (0, r.jsx)(a.Z, {
                              maxUsers: h,
                              users: p.map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                              size: E.EF.SIZE_16,
                              hideOverflowCount: !0,
                              disableUsernameTooltip: !0
                          }),
                          (0, r.jsx)(i.Text, {
                              className: f.text,
                              variant: g,
                              color: 'interactive-normal',
                              children: (0, c.Z)(p.length)
                          })
                      ]
                  })
                : null,
        A = () =>
            I && T
                ? (0, r.jsx)('div', {
                      'aria-hidden': 'true',
                      className: f.spacer
                  })
                : null,
        v = () =>
            T
                ? (0, r.jsxs)(i.Clickable, {
                      className: f.section,
                      onClick: () => (null == n ? void 0 : n(_.oh.MUTUAL_GUILDS)),
                      children: [
                          !I &&
                              (0, r.jsx)(o.Z, {
                                  maxGuilds: h,
                                  guilds: m.map((e) => {
                                      let { guild: t } = e;
                                      return t;
                                  }),
                                  size: s.Z.Sizes.SMOL,
                                  hideOverflowCount: !0,
                                  disableGuildNameTooltip: !0
                              }),
                          (0, r.jsx)(i.Text, {
                              className: f.text,
                              variant: g,
                              color: 'interactive-normal',
                              children: (0, d.Z)(m.length)
                          })
                      ]
                  })
                : null;
    return (0, r.jsxs)('div', {
        className: f.mutuals,
        children: [S(), A(), v()]
    });
}
