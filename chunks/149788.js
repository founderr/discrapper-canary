n.d(t, {
    X: function () {
        return g;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(749210),
    l = n(374939),
    o = n(469988),
    c = n(526383),
    d = n(900849),
    u = n(294330),
    _ = n(481685),
    E = n(731455),
    h = n(689938),
    m = n(417712),
    I = n(157770);
function g(e) {
    let { loadId: t, onScroll: n } = e,
        g = (0, c.Z)();
    a.useEffect(() => {
        d.Zt({
            loadId: t,
            gamesYouPlayGuilds: [],
            allGuilds: [],
            categoryId: E.U
        });
    }, [t]);
    let p = a.useMemo(
        () =>
            g.map((e) => ({
                ...e,
                presenceCount: void 0,
                memberCount: void 0,
                premiumSubscriptionCount: void 0,
                emojis: void 0
            })),
        [g]
    );
    return (0, i.jsxs)(l.Z, {
        title: h.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_TITLE,
        description: h.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION,
        onScroll: n,
        bannerBackground: (0, i.jsx)(_.Z, {}),
        children: [
            g.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(s.Heading, {
                              className: m.sectionTitle,
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              children: h.Z.Messages.YOUR_HUB
                          }),
                          (0, i.jsxs)('div', {
                              className: m.content,
                              children: [
                                  p.map((e) =>
                                      (0, i.jsx)(
                                          u.V,
                                          {
                                              guild: e,
                                              onClick: () => r.Z.transitionToGuildSync(e.id)
                                          },
                                          e.id
                                      )
                                  ),
                                  (0, i.jsx)(o.Z, { hasHub: !0 })
                              ]
                          })
                      ]
                  })
                : (0, i.jsx)('div', {
                      className: m.content,
                      children: (0, i.jsx)(o.Z, { hasHub: !1 })
                  }),
            (0, i.jsx)('div', { className: I.divider }),
            (0, i.jsxs)('div', {
                className: I.disclaimer,
                children: [
                    (0, i.jsxs)(s.Text, {
                        className: I.text,
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [h.Z.Messages.MOBILE_HUB_EMAIL_CONNECTION_SIDEBAR_DESCRIPTION_2, ' ']
                    }),
                    (0, i.jsx)(s.Text, {
                        className: I.text,
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: h.Z.Messages.MOBILE_HUB_EMAIL_CONNECTION_SIDEBAR_DESCRIPTION_4
                    })
                ]
            })
        ]
    });
}
