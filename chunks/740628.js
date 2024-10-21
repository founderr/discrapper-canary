t.d(n, {
    Z: function () {
        return v;
    }
}),
    t(47120);
var i = t(200651),
    s = t(192379),
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
    p = t(689938),
    x = t(519294),
    Z = t(722849);
function h(e) {
    let { section: n, subsection: t, user: s, currentUser: o, displayProfile: l, onClose: r } = e;
    return n === m.oh.ACTIVITY
        ? (0, i.jsx)(_.Z, {
              profileGuildId: null == l ? void 0 : l.guildId,
              user: s,
              currentUser: o,
              onClose: r
          })
        : n === m.oh.MUTUAL_FRIENDS
          ? (0, i.jsx)(E.Z, {
                user: s,
                onClose: r
            })
          : n === m.oh.MUTUAL_GUILDS
            ? (0, i.jsx)(f.Z, {
                  user: s,
                  onClose: r
              })
            : n === m.oh.BOT_DATA_ACCESS
              ? (0, i.jsx)(d.Z, { user: s })
              : n === m.oh.BOT_INFO
                ? (0, i.jsx)(u.Z, {
                      user: s,
                      currentUser: o,
                      displayProfile: l,
                      subsection: t,
                      onClose: r
                  })
                : (0, i.jsx)(I.Z, {
                      user: s,
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
        [{ section: A, subsection: N }, j] = s.useState({
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
    s.useEffect(() => {
        if (null == E.find((e) => e.section === A))
            j({
                section: E[0].section,
                subsection: void 0
            });
    }, [E, A]);
    let b = s.useCallback(
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
        ? (0, i.jsx)('div', {
              className: Z.container,
              children: (0, i.jsxs)('div', {
                  className: x.empty,
                  children: [
                      (0, i.jsx)('div', { className: x.emptyIconStreamerMode }),
                      (0, i.jsx)('div', {
                          className: x.emptyText,
                          children: p.Z.Messages.STREAMER_MODE_ENABLED
                      })
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: Z.container,
              children: [
                  (0, i.jsx)(l.n, {
                      className: Z.tabBar,
                      type: 'top',
                      selectedItem: A,
                      onItemSelect: b,
                      children: E.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, i.jsx)(
                              l.n.Item,
                              {
                                  className: Z.tabBarItem,
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
                  (0, i.jsx)(h, {
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
