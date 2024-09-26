s.d(n, {
    Z: function () {
        return v;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    l = s(442837),
    o = s(706898),
    r = s(481060),
    c = s(246946),
    a = s(785717),
    d = s(786366),
    u = s(323090),
    I = s(296391),
    _ = s(384816),
    E = s(389190),
    f = s(428927),
    m = s(228168),
    x = s(689938),
    Z = s(519294),
    p = s(722849);
function h(e) {
    let { section: n, subsection: s, user: i, currentUser: l, displayProfile: o, onClose: r } = e;
    return n === m.oh.ACTIVITY
        ? (0, t.jsx)(I.Z, {
              user: i,
              currentUser: l,
              onClose: r
          })
        : n === m.oh.MUTUAL_FRIENDS
          ? (0, t.jsx)(E.Z, {
                user: i,
                onClose: r
            })
          : n === m.oh.MUTUAL_GUILDS
            ? (0, t.jsx)(f.Z, {
                  user: i,
                  onClose: r
              })
            : n === m.oh.BOT_DATA_ACCESS
              ? (0, t.jsx)(d.Z, { user: i })
              : n === m.oh.BOT_INFO
                ? (0, t.jsx)(u.Z, {
                      user: i,
                      currentUser: l,
                      displayProfile: o,
                      subsection: s,
                      onClose: r
                  })
                : (0, t.jsx)(_.Z, {
                      user: i,
                      currentUser: l,
                      displayProfile: o,
                      subsection: s,
                      onClose: r
                  });
}
function v(e) {
    var n, s, d;
    let { user: u, currentUser: I, displayProfile: _, items: E, initialSection: f = m.oh.USER_INFO, initialSubsection: v, onClose: S } = e,
        { trackUserProfileAction: T } = (0, a.KZ)(),
        g = (0, l.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: A, subsection: N }, j] = i.useState({
            section:
                null !==
                    (d =
                        null ===
                            (n = E.find((e) => {
                                let { section: n } = e;
                                return n === f;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== d
                    ? d
                    : null === (s = E[0]) || void 0 === s
                      ? void 0
                      : s.section,
            subsection: v
        });
    i.useEffect(() => {
        if (null == E.find((e) => e.section === A))
            j({
                section: E[0].section,
                subsection: void 0
            });
    }, [E, A]);
    let b = i.useCallback(
        (e) => {
            T({
                action: 'PRESS_SECTION',
                section: e
            }),
                j({
                    section: e,
                    subsection: void 0
                });
        },
        [T, j]
    );
    return g
        ? (0, t.jsx)('div', {
              className: p.container,
              children: (0, t.jsxs)('div', {
                  className: Z.empty,
                  children: [
                      (0, t.jsx)('div', { className: Z.emptyIconStreamerMode }),
                      (0, t.jsx)('div', {
                          className: Z.emptyText,
                          children: x.Z.Messages.STREAMER_MODE_ENABLED
                      })
                  ]
              })
          })
        : (0, t.jsxs)('div', {
              className: p.container,
              children: [
                  (0, t.jsx)(o.n, {
                      className: p.tabBar,
                      type: 'top',
                      selectedItem: A,
                      onItemSelect: b,
                      children: E.map((e) => {
                          let { section: n, text: s } = e;
                          return (0, t.jsx)(
                              o.n.Item,
                              {
                                  className: p.tabBarItem,
                                  id: n,
                                  'aria-label': s,
                                  children: (0, t.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: s
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, t.jsx)(h, {
                      items: E,
                      section: A,
                      subsection: N,
                      user: u,
                      currentUser: I,
                      displayProfile: _,
                      onClose: S
                  })
              ]
          });
}
