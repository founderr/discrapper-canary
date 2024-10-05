t.d(n, {
    Z: function () {
        return v;
    }
}),
    t(47120);
var s = t(735250),
    i = t(470079),
    o = t(442837),
    l = t(706898),
    r = t(481060),
    c = t(246946),
    a = t(785717),
    d = t(786366),
    u = t(323090),
    _ = t(296391),
    I = t(384816),
    E = t(389190),
    f = t(428927),
    m = t(228168),
    x = t(689938),
    Z = t(519294),
    p = t(722849);
function h(e) {
    let { section: n, subsection: t, user: i, currentUser: o, displayProfile: l, onClose: r } = e;
    return n === m.oh.ACTIVITY
        ? (0, s.jsx)(_.Z, {
              user: i,
              currentUser: o,
              onClose: r
          })
        : n === m.oh.MUTUAL_FRIENDS
          ? (0, s.jsx)(E.Z, {
                user: i,
                onClose: r
            })
          : n === m.oh.MUTUAL_GUILDS
            ? (0, s.jsx)(f.Z, {
                  user: i,
                  onClose: r
              })
            : n === m.oh.BOT_DATA_ACCESS
              ? (0, s.jsx)(d.Z, { user: i })
              : n === m.oh.BOT_INFO
                ? (0, s.jsx)(u.Z, {
                      user: i,
                      currentUser: o,
                      displayProfile: l,
                      subsection: t,
                      onClose: r
                  })
                : (0, s.jsx)(I.Z, {
                      user: i,
                      currentUser: o,
                      displayProfile: l,
                      subsection: t,
                      onClose: r
                  });
}
function v(e) {
    var n, t, d;
    let { user: u, currentUser: _, displayProfile: I, items: E, initialSection: f = m.oh.USER_INFO, initialSubsection: v, onClose: S } = e,
        { trackUserProfileAction: T } = (0, a.KZ)(),
        g = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
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
                    : null === (t = E[0]) || void 0 === t
                      ? void 0
                      : t.section,
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
        ? (0, s.jsx)('div', {
              className: p.container,
              children: (0, s.jsxs)('div', {
                  className: Z.empty,
                  children: [
                      (0, s.jsx)('div', { className: Z.emptyIconStreamerMode }),
                      (0, s.jsx)('div', {
                          className: Z.emptyText,
                          children: x.Z.Messages.STREAMER_MODE_ENABLED
                      })
                  ]
              })
          })
        : (0, s.jsxs)('div', {
              className: p.container,
              children: [
                  (0, s.jsx)(l.n, {
                      className: p.tabBar,
                      type: 'top',
                      selectedItem: A,
                      onItemSelect: b,
                      children: E.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, s.jsx)(
                              l.n.Item,
                              {
                                  className: p.tabBarItem,
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
                  (0, s.jsx)(h, {
                      items: E,
                      section: A,
                      subsection: N,
                      user: u,
                      currentUser: _,
                      displayProfile: I,
                      onClose: S
                  })
              ]
          });
}
