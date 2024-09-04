t.d(n, {
    Z: function () {
        return A;
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
    I = t(786366),
    _ = t(323090),
    E = t(100849),
    f = t(296391),
    m = t(384816),
    p = t(389190),
    x = t(428927),
    Z = t(228168),
    h = t(689938),
    v = t(542926),
    S = t(523438);
function T(e) {
    let { section: n, subsection: t, user: i, currentUser: o, displayProfile: l, onClose: r } = e,
        { newActivityCardsEnabled: c } = (0, u.z)({ location: 'UserProfileModalTabs' });
    return n === Z.oh.ACTIVITY && c
        ? (0, s.jsx)(f.Z, {
              user: i,
              currentUser: o,
              onClose: r
          })
        : n === Z.oh.ACTIVITY
          ? (0, s.jsx)(E.Z, {
                showActions: (null == o ? void 0 : o.id) !== i.id,
                user: i,
                type: a.Y.SIMPLIFIED_PROFILE,
                onClose: r
            })
          : n === Z.oh.MUTUAL_FRIENDS
            ? (0, s.jsx)(p.Z, {
                  user: i,
                  onClose: r
              })
            : n === Z.oh.MUTUAL_GUILDS
              ? (0, s.jsx)(x.Z, {
                    user: i,
                    onClose: r
                })
              : n === Z.oh.BOT_DATA_ACCESS
                ? (0, s.jsx)(I.Z, { user: i })
                : n === Z.oh.BOT_INFO
                  ? (0, s.jsx)(_.Z, {
                        user: i,
                        currentUser: o,
                        displayProfile: l,
                        subsection: t,
                        onClose: r
                    })
                  : (0, s.jsx)(m.Z, {
                        user: i,
                        currentUser: o,
                        displayProfile: l,
                        subsection: t,
                        onClose: r
                    });
}
function A(e) {
    var n, t, a;
    let { user: u, currentUser: I, displayProfile: _, items: E, initialSection: f = Z.oh.USER_INFO, initialSubsection: m, onClose: p } = e,
        { trackUserProfileAction: x } = (0, d.KZ)(),
        A = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: g, subsection: N }, L] = i.useState({
            section:
                null !==
                    (a =
                        null ===
                            (n = E.find((e) => {
                                let { section: n } = e;
                                return n === f;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== a
                    ? a
                    : null === (t = E[0]) || void 0 === t
                      ? void 0
                      : t.section,
            subsection: m
        });
    i.useEffect(() => {
        if (null == E.find((e) => e.section === g))
            L({
                section: E[0].section,
                subsection: void 0
            });
    }, [E, g]);
    let R = i.useCallback(
        (e) => {
            x({
                action: 'PRESS_SECTION',
                section: e
            }),
                L({
                    section: e,
                    subsection: void 0
                });
        },
        [x, L]
    );
    return A
        ? (0, s.jsx)('div', {
              className: S.container,
              children: (0, s.jsxs)('div', {
                  className: v.empty,
                  children: [
                      (0, s.jsx)('div', { className: v.emptyIconStreamerMode }),
                      (0, s.jsx)('div', {
                          className: v.emptyText,
                          children: h.Z.Messages.STREAMER_MODE_ENABLED
                      })
                  ]
              })
          })
        : (0, s.jsxs)('div', {
              className: S.container,
              children: [
                  (0, s.jsx)(l.n, {
                      className: S.tabBar,
                      type: 'top',
                      selectedItem: g,
                      onItemSelect: R,
                      children: E.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, s.jsx)(
                              l.n.Item,
                              {
                                  className: S.tabBarItem,
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
                  (0, s.jsx)(T, {
                      items: E,
                      section: g,
                      subsection: N,
                      user: u,
                      currentUser: I,
                      displayProfile: _,
                      onClose: p
                  })
              ]
          });
}
