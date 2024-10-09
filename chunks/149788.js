var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(749210),
    l = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(469988),
    _ = n(526383),
    E = n(294330),
    h = n(689938),
    m = n(417712),
    I = n(157770);
t.Z = function (e) {
    let { onScroll: t } = e,
        n = (0, _.Z)(),
        p = a.useMemo(
            () =>
                n.map((e) => ({
                    ...e,
                    presenceCount: void 0,
                    memberCount: void 0,
                    premiumSubscriptionCount: void 0,
                    emojis: void 0
                })),
            [n]
        );
    return (0, i.jsxs)(d.Z, {
        onScroll: t,
        children: [
            (0, i.jsx)(o.Z, {
                title: h.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_TITLE,
                description: h.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION,
                children: (0, i.jsx)(l.Z, {})
            }),
            (0, i.jsxs)(c.Z, {
                children: [
                    n.length > 0
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
                                                  E.VD,
                                                  {
                                                      guild: e,
                                                      onClick: () => r.Z.transitionToGuildSync(e.id)
                                                  },
                                                  e.id
                                              )
                                          ),
                                          (0, i.jsx)(u.Z, { hasHub: !0 })
                                      ]
                                  })
                              ]
                          })
                        : (0, i.jsx)('div', {
                              className: m.content,
                              children: (0, i.jsx)(u.Z, { hasHub: !1 })
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
            })
        ]
    });
};
