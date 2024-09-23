n.d(t, {
    X: function () {
        return T;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(749210),
    l = n(17845),
    o = n(422169),
    c = n(748699),
    d = n(469988),
    u = n(526383),
    _ = n(900849),
    E = n(294330),
    h = n(481685),
    m = n(731455),
    I = n(689938),
    g = n(417712),
    p = n(157770);
function T(e) {
    let { loadId: t, onScroll: n } = e,
        T = (0, u.Z)();
    a.useEffect(() => {
        _.Zt({
            loadId: t,
            gamesYouPlayGuilds: [],
            allGuilds: [],
            categoryId: m.U
        });
    }, [t]);
    let S = a.useMemo(
        () =>
            T.map((e) => ({
                ...e,
                presenceCount: void 0,
                memberCount: void 0,
                premiumSubscriptionCount: void 0,
                emojis: void 0
            })),
        [T]
    );
    return (0, i.jsxs)(c.Z, {
        onScroll: n,
        children: [
            (0, i.jsx)(l.Z, {
                title: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_TITLE,
                description: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION,
                background: (0, i.jsx)(h.Z, {})
            }),
            (0, i.jsxs)(o.Z, {
                children: [
                    T.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(s.Heading, {
                                      className: g.sectionTitle,
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      children: I.Z.Messages.YOUR_HUB
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: g.content,
                                      children: [
                                          S.map((e) =>
                                              (0, i.jsx)(
                                                  E.V,
                                                  {
                                                      guild: e,
                                                      onClick: () => r.Z.transitionToGuildSync(e.id)
                                                  },
                                                  e.id
                                              )
                                          ),
                                          (0, i.jsx)(d.Z, { hasHub: !0 })
                                      ]
                                  })
                              ]
                          })
                        : (0, i.jsx)('div', {
                              className: g.content,
                              children: (0, i.jsx)(d.Z, { hasHub: !1 })
                          }),
                    (0, i.jsx)('div', { className: p.divider }),
                    (0, i.jsxs)('div', {
                        className: p.disclaimer,
                        children: [
                            (0, i.jsxs)(s.Text, {
                                className: p.text,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: [I.Z.Messages.MOBILE_HUB_EMAIL_CONNECTION_SIDEBAR_DESCRIPTION_2, ' ']
                            }),
                            (0, i.jsx)(s.Text, {
                                className: p.text,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: I.Z.Messages.MOBILE_HUB_EMAIL_CONNECTION_SIDEBAR_DESCRIPTION_4
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
