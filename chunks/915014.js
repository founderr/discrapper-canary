n.d(t, {
    Z: function () {
        return h;
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
    c = n(228168),
    d = n(182294),
    _ = n(689938),
    E = n(352235);
let f = 3;
function h(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: h } = (0, l.Z)(t.id),
        { mutualGuilds: p } = (0, u.Z)(t.id),
        m = null != h && h.length > 0,
        I = null != p && p.length > 0,
        T = m && I ? 'text-xs/normal' : 'text-sm/normal';
    if (!m && !I) return null;
    let g = () =>
            m
                ? (0, r.jsxs)(i.Clickable, {
                      className: E.section,
                      onClick: () => (null == n ? void 0 : n(c.oh.MUTUAL_FRIENDS)),
                      children: [
                          (0, r.jsx)(a.Z, {
                              maxUsers: f,
                              users: h.map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                              size: d.EF.SIZE_16,
                              hideOverflowCount: !0,
                              disableUsernameTooltip: !0
                          }),
                          (0, r.jsx)(i.Text, {
                              className: E.text,
                              variant: T,
                              color: 'interactive-normal',
                              children: _.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: h.length })
                          })
                      ]
                  })
                : null,
        S = () =>
            m && I
                ? (0, r.jsx)('div', {
                      'aria-hidden': 'true',
                      className: E.spacer
                  })
                : null,
        A = () =>
            I
                ? (0, r.jsxs)(i.Clickable, {
                      className: E.section,
                      onClick: () => (null == n ? void 0 : n(c.oh.MUTUAL_GUILDS)),
                      children: [
                          !m &&
                              (0, r.jsx)(o.Z, {
                                  maxGuilds: f,
                                  guilds: p.map((e) => {
                                      let { guild: t } = e;
                                      return t;
                                  }),
                                  size: s.Z.Sizes.SMOL,
                                  hideOverflowCount: !0,
                                  disableGuildNameTooltip: !0
                              }),
                          (0, r.jsx)(i.Text, {
                              className: E.text,
                              variant: T,
                              color: 'interactive-normal',
                              children: _.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: p.length })
                          })
                      ]
                  })
                : null;
    return (0, r.jsxs)('div', {
        className: E.mutuals,
        children: [g(), S(), A()]
    });
}
