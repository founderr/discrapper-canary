t.d(n, {
    Z: function () {
        return T;
    }
}),
    t(47120);
var i = t(735250),
    s = t(470079),
    o = t(442837),
    l = t(706898),
    r = t(481060),
    a = t(387903),
    c = t(246946),
    d = t(785717),
    u = t(27144),
    I = t(100849),
    _ = t(944546),
    f = t(470900),
    E = t(988246),
    m = t(970041),
    p = t(715388),
    x = t(879828),
    v = t(834534),
    Z = t(228168),
    h = t(455749);
function S(e) {
    let { section: n, subsection: t, user: s, currentUser: o, displayProfile: l, onClose: r } = e,
        { newActivityCardsEnabled: c } = (0, u.z)({ location: 'SimplifiedUserProfileModalTabs' });
    return n === Z.oh.ACTIVITY && c
        ? (0, i.jsx)(x.Z, {
              user: s,
              currentUser: o,
              onClose: r
          })
        : n === Z.oh.ACTIVITY
          ? (0, i.jsx)(I.Z, {
                showActions: (null == o ? void 0 : o.id) !== s.id,
                user: s,
                type: a.Y.SIMPLIFIED_PROFILE,
                onClose: r
            })
          : n === Z.oh.MUTUAL_FRIENDS
            ? (0, i.jsx)(_.Z, {
                  user: s,
                  onClose: r
              })
            : n === Z.oh.MUTUAL_GUILDS
              ? (0, i.jsx)(f.Z, {
                    user: s,
                    onClose: r
                })
              : n === Z.oh.BOT_DATA_ACCESS
                ? (0, i.jsx)(m.Z, { user: s })
                : n === Z.oh.BOT_INFO
                  ? (0, i.jsx)(p.Z, {
                        user: s,
                        currentUser: o,
                        displayProfile: l,
                        subsection: t,
                        onClose: r
                    })
                  : (0, i.jsx)(v.Z, {
                        user: s,
                        currentUser: o,
                        displayProfile: l,
                        subsection: t,
                        onClose: r
                    });
}
function T(e) {
    var n, t, a;
    let { user: u, currentUser: I, displayProfile: _, items: f, initialSection: m = Z.oh.USER_INFO, initialSubsection: p, onClose: x } = e,
        { trackUserProfileAction: v } = (0, d.KZ)(),
        T = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: A, subsection: g }, N] = s.useState({
            section:
                null !==
                    (a =
                        null ===
                            (n = f.find((e) => {
                                let { section: n } = e;
                                return n === m;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== a
                    ? a
                    : null === (t = f[0]) || void 0 === t
                      ? void 0
                      : t.section,
            subsection: p
        });
    s.useEffect(() => {
        if (null == f.find((e) => e.section === A))
            N({
                section: f[0].section,
                subsection: void 0
            });
    }, [f, A]);
    let b = s.useCallback(
        (e) => {
            v({
                action: 'PRESS_SECTION',
                section: e
            }),
                N({
                    section: e,
                    subsection: void 0
                });
        },
        [v, N]
    );
    return T
        ? (0, i.jsx)('div', {
              className: h.container,
              children: (0, i.jsx)(E.Z, {})
          })
        : (0, i.jsxs)('div', {
              className: h.container,
              children: [
                  (0, i.jsx)(l.n, {
                      className: h.tabBar,
                      type: 'top',
                      selectedItem: A,
                      onItemSelect: b,
                      children: f.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, i.jsx)(
                              l.n.Item,
                              {
                                  className: h.tabBarItem,
                                  id: n,
                                  'aria-label': t,
                                  children: (0, i.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: t
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, i.jsx)(S, {
                      items: f,
                      section: A,
                      subsection: g,
                      user: u,
                      currentUser: I,
                      displayProfile: _,
                      onClose: x
                  })
              ]
          });
}
