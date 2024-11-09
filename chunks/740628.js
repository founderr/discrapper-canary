t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(442837),
    r = t(706898),
    s = t(481060),
    c = t(246946),
    a = t(785717),
    d = t(786366),
    u = t(323090),
    f = t(296391),
    m = t(384816),
    I = t(389190),
    x = t(428927),
    p = t(228168),
    h = t(388032),
    v = t(519294),
    g = t(722849);
function Z(e) {
    let { section: n, subsection: t, user: l, currentUser: o, displayProfile: r, onClose: s } = e;
    return n === p.oh.ACTIVITY
        ? (0, i.jsx)(f.Z, {
              profileGuildId: null == r ? void 0 : r.guildId,
              user: l,
              currentUser: o,
              onClose: s
          })
        : n === p.oh.MUTUAL_FRIENDS
          ? (0, i.jsx)(I.Z, {
                user: l,
                onClose: s
            })
          : n === p.oh.MUTUAL_GUILDS
            ? (0, i.jsx)(x.Z, {
                  user: l,
                  onClose: s
              })
            : n === p.oh.BOT_DATA_ACCESS
              ? (0, i.jsx)(d.Z, { user: l })
              : n === p.oh.BOT_INFO
                ? (0, i.jsx)(u.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: r,
                      subsection: t,
                      onClose: s
                  })
                : (0, i.jsx)(m.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: r,
                      subsection: t,
                      onClose: s
                  });
}
function _(e) {
    var n, t, d;
    let { user: u, currentUser: f, displayProfile: m, items: I, initialSection: x = p.oh.USER_INFO, initialSubsection: _, onClose: j } = e,
        { trackUserProfileAction: b } = (0, a.KZ)(),
        E = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: T, subsection: N }, S] = l.useState({
            section:
                null !==
                    (d =
                        null ===
                            (n = I.find((e) => {
                                let { section: n } = e;
                                return n === x;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== d
                    ? d
                    : null === (t = I[0]) || void 0 === t
                      ? void 0
                      : t.section,
            subsection: _
        });
    l.useEffect(() => {
        if (null == I.find((e) => e.section === T))
            S({
                section: I[0].section,
                subsection: void 0
            });
    }, [I, T]);
    let y = l.useCallback(
        (e) => {
            b({
                action: 'PRESS_SECTION',
                section: e
            }),
                S({
                    section: e,
                    subsection: void 0
                });
        },
        [b, S]
    );
    return E
        ? (0, i.jsx)('div', {
              className: g.container,
              children: (0, i.jsxs)('div', {
                  className: v.empty,
                  children: [
                      (0, i.jsx)('div', { className: v.emptyIconStreamerMode }),
                      (0, i.jsx)('div', {
                          className: v.emptyText,
                          children: h.intl.string(h.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsx)(r.n, {
                      className: g.tabBar,
                      type: 'top',
                      selectedItem: T,
                      onItemSelect: y,
                      children: I.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, i.jsx)(
                              r.n.Item,
                              {
                                  className: g.tabBarItem,
                                  id: n,
                                  'aria-label': t,
                                  children: (0, i.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      children: t
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, i.jsx)(Z, {
                      items: I,
                      section: T,
                      subsection: N,
                      user: u,
                      currentUser: f,
                      displayProfile: m,
                      onClose: j
                  })
              ]
          });
}
