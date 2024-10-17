t.d(n, {
    Z: function () {
        return S;
    }
}),
    t(47120);
var o = t(735250),
    i = t(470079),
    s = t(442837),
    l = t(706898),
    c = t(481060),
    r = t(246946),
    a = t(785717),
    d = t(786366),
    u = t(323090),
    _ = t(296391),
    I = t(384816),
    E = t(389190),
    f = t(428927),
    p = t(228168),
    Z = t(689938),
    h = t(519294),
    x = t(722849);
function m(e) {
    let { section: n, subsection: t, user: i, currentUser: s, displayProfile: l, onClose: c } = e;
    return n === p.oh.ACTIVITY
        ? (0, o.jsx)(_.Z, {
              user: i,
              currentUser: s,
              onClose: c
          })
        : n === p.oh.MUTUAL_FRIENDS
          ? (0, o.jsx)(E.Z, {
                user: i,
                onClose: c
            })
          : n === p.oh.MUTUAL_GUILDS
            ? (0, o.jsx)(f.Z, {
                  user: i,
                  onClose: c
              })
            : n === p.oh.BOT_DATA_ACCESS
              ? (0, o.jsx)(d.Z, { user: i })
              : n === p.oh.BOT_INFO
                ? (0, o.jsx)(u.Z, {
                      user: i,
                      currentUser: s,
                      displayProfile: l,
                      subsection: t,
                      onClose: c
                  })
                : (0, o.jsx)(I.Z, {
                      user: i,
                      currentUser: s,
                      displayProfile: l,
                      subsection: t,
                      onClose: c
                  });
}
function S(e) {
    var n, t, d;
    let { user: u, currentUser: _, displayProfile: I, items: E, initialSection: f = p.oh.USER_INFO, initialSubsection: S, onClose: T } = e,
        { trackUserProfileAction: v } = (0, a.KZ)(),
        g = (0, s.e7)([r.Z], () => r.Z.hidePersonalInformation),
        [{ section: A, subsection: O }, L] = i.useState({
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
            subsection: S
        });
    i.useEffect(() => {
        if (null == E.find((e) => e.section === A))
            L({
                section: E[0].section,
                subsection: void 0
            });
    }, [E, A]);
    let b = i.useCallback(
        (e) => {
            v({
                action: 'PRESS_SECTION',
                section: e
            }),
                L({
                    section: e,
                    subsection: void 0
                });
        },
        [v, L]
    );
    return g
        ? (0, o.jsx)('div', {
              className: x.container,
              children: (0, o.jsxs)('div', {
                  className: h.empty,
                  children: [
                      (0, o.jsx)('div', { className: h.emptyIconStreamerMode }),
                      (0, o.jsx)('div', {
                          className: h.emptyText,
                          children: Z.Z.Messages.STREAMER_MODE_ENABLED
                      })
                  ]
              })
          })
        : (0, o.jsxs)('div', {
              className: x.container,
              children: [
                  (0, o.jsx)(l.n, {
                      className: x.tabBar,
                      type: 'top',
                      selectedItem: A,
                      onItemSelect: b,
                      children: E.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, o.jsx)(
                              l.n.Item,
                              {
                                  className: x.tabBarItem,
                                  id: n,
                                  'aria-label': t,
                                  children: (0, o.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      children: t
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, o.jsx)(m, {
                      items: E,
                      section: A,
                      subsection: O,
                      user: u,
                      currentUser: _,
                      displayProfile: I,
                      onClose: T
                  })
              ]
          });
}
