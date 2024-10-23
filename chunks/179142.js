n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var s = n(410030),
    a = n(906732),
    l = n(769654),
    r = n(785717),
    o = n(697927),
    c = n(200634),
    u = n(483517),
    d = n(502762),
    h = n(171368),
    m = n(389190),
    p = n(428927),
    _ = n(638785),
    f = n(689938),
    E = n(346799);
function g(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, a.ZP)(),
        { context: g } = (0, r.KZ)(),
        C = (0, s.ZP)(),
        { mutualFriends: I, isFetching: T } = (0, o.Z)(t.id, !t.bot),
        { mutualGuilds: x, isFetching: S } = (0, c.Z)(t.id, !0),
        v = !t.bot && null != I && I.length > 0,
        N = null != x && x.length > 0;
    return v || N
        ? (0, i.jsxs)(d.Z.Overlay, {
              className: E.overlay,
              children: [
                  N &&
                      (0, i.jsx)(_.Z, {
                          section: 'MUTUAL_GUILDS',
                          header: f.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER,
                          isLoading: S,
                          listClassName: E.list,
                          items: x.map((e) => {
                              let { guild: n, nick: s } = e;
                              return (0, i.jsx)(
                                  p.D,
                                  {
                                      user: t,
                                      guild: n,
                                      nick: s,
                                      theme: C,
                                      onSelect: () => (0, l.X)(n.id)
                                  },
                                  n.id
                              );
                          })
                      }),
                  N && v && (0, i.jsx)(u.Z, { className: E.divider }),
                  v &&
                      (0, i.jsx)(_.Z, {
                          section: 'MUTUAL_FRIENDS',
                          header: f.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER,
                          isLoading: T,
                          listClassName: E.list,
                          items: I.map((e) => {
                              let { key: t, user: s, status: a } = e;
                              return (0, i.jsx)(
                                  m.T,
                                  {
                                      user: s,
                                      status: a,
                                      onSelect: () => {
                                          (0, h.openUserProfileModal)({
                                              ...g,
                                              userId: s.id,
                                              sourceAnalyticsLocations: n
                                          });
                                      }
                                  },
                                  t
                              );
                          })
                      })
              ]
          })
        : null;
}
