n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var l = n(410030),
    r = n(906732),
    a = n(769654),
    s = n(785717),
    o = n(697927),
    c = n(200634),
    u = n(483517),
    d = n(502762),
    h = n(171368),
    m = n(389190),
    p = n(428927),
    f = n(638785),
    g = n(388032),
    C = n(346799);
function x(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, r.ZP)(),
        { context: x } = (0, s.KZ)(),
        v = (0, l.ZP)(),
        { mutualFriends: _, isFetching: I } = (0, o.Z)(t.id, !t.bot),
        { mutualGuilds: E, isFetching: b } = (0, c.Z)(t.id, !0),
        S = !t.bot && null != _ && _.length > 0,
        Z = null != E && E.length > 0;
    return S || Z
        ? (0, i.jsxs)(d.Z.Overlay, {
              className: C.overlay,
              children: [
                  Z &&
                      (0, i.jsx)(f.Z, {
                          section: 'MUTUAL_GUILDS',
                          header: g.intl.string(g.t['4lTDZm']),
                          isLoading: b,
                          listClassName: C.list,
                          items: E.map((e) => {
                              let { guild: n, nick: l } = e;
                              return (0, i.jsx)(
                                  p.D,
                                  {
                                      user: t,
                                      guild: n,
                                      nick: l,
                                      theme: v,
                                      onSelect: () => (0, a.X)(n.id)
                                  },
                                  n.id
                              );
                          })
                      }),
                  Z && S && (0, i.jsx)(u.Z, { className: C.divider }),
                  S &&
                      (0, i.jsx)(f.Z, {
                          section: 'MUTUAL_FRIENDS',
                          header: g.intl.string(g.t['0mTJ3t']),
                          isLoading: I,
                          listClassName: C.list,
                          items: _.map((e) => {
                              let { key: t, user: l, status: r } = e;
                              return (0, i.jsx)(
                                  m.T,
                                  {
                                      user: l,
                                      status: r,
                                      onSelect: () => {
                                          (0, h.openUserProfileModal)({
                                              ...x,
                                              userId: l.id,
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
