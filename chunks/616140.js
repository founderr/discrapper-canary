t.d(n, {
    Z: function () {
        return T;
    }
}),
    t(47120);
var s = t(735250),
    i = t(470079),
    o = t(442837),
    l = t(706898),
    r = t(481060),
    a = t(387903),
    c = t(246946),
    d = t(785717),
    u = t(27144),
    I = t(100849),
    _ = t(944546),
    E = t(470900),
    f = t(988246),
    m = t(970041),
    p = t(715388),
    x = t(879828),
    Z = t(834534),
    h = t(228168),
    v = t(455749);
function S(e) {
    let { section: n, subsection: t, user: i, currentUser: o, displayProfile: l, onClose: r } = e,
        { newActivityCardsEnabled: c } = (0, u.z)({ location: 'SimplifiedUserProfileModalTabs' });
    return n === h.oh.ACTIVITY && c
        ? (0, s.jsx)(x.Z, {
              user: i,
              currentUser: o,
              onClose: r
          })
        : n === h.oh.ACTIVITY
          ? (0, s.jsx)(I.Z, {
                showActions: (null == o ? void 0 : o.id) !== i.id,
                user: i,
                type: a.Y.SIMPLIFIED_PROFILE,
                onClose: r
            })
          : n === h.oh.MUTUAL_FRIENDS
            ? (0, s.jsx)(_.Z, {
                  user: i,
                  onClose: r
              })
            : n === h.oh.MUTUAL_GUILDS
              ? (0, s.jsx)(E.Z, {
                    user: i,
                    onClose: r
                })
              : n === h.oh.BOT_DATA_ACCESS
                ? (0, s.jsx)(m.Z, { user: i })
                : n === h.oh.BOT_INFO
                  ? (0, s.jsx)(p.Z, {
                        user: i,
                        currentUser: o,
                        displayProfile: l,
                        subsection: t,
                        onClose: r
                    })
                  : (0, s.jsx)(Z.Z, {
                        user: i,
                        currentUser: o,
                        displayProfile: l,
                        subsection: t,
                        onClose: r
                    });
}
function T(e) {
    var n, t, a;
    let { user: u, currentUser: I, displayProfile: _, items: E, initialSection: m = h.oh.USER_INFO, initialSubsection: p, onClose: x } = e,
        { trackUserProfileAction: Z } = (0, d.KZ)(),
        T = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: A, subsection: g }, N] = i.useState({
            section:
                null !==
                    (a =
                        null ===
                            (n = E.find((e) => {
                                let { section: n } = e;
                                return n === m;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== a
                    ? a
                    : null === (t = E[0]) || void 0 === t
                      ? void 0
                      : t.section,
            subsection: p
        });
    i.useEffect(() => {
        if (null == E.find((e) => e.section === A))
            N({
                section: E[0].section,
                subsection: void 0
            });
    }, [E, A]);
    let L = i.useCallback(
        (e) => {
            Z({
                action: 'PRESS_SECTION',
                section: e
            }),
                N({
                    section: e,
                    subsection: void 0
                });
        },
        [Z, N]
    );
    return T
        ? (0, s.jsx)('div', {
              className: v.container,
              children: (0, s.jsx)(f.Z, {})
          })
        : (0, s.jsxs)('div', {
              className: v.container,
              children: [
                  (0, s.jsx)(l.n, {
                      className: v.tabBar,
                      type: 'top',
                      selectedItem: A,
                      onItemSelect: L,
                      children: E.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, s.jsx)(
                              l.n.Item,
                              {
                                  className: v.tabBarItem,
                                  id: n,
                                  'aria-label': t,
                                  children: (0, s.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: t
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, s.jsx)(S, {
                      items: E,
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
