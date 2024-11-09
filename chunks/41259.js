n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651);
n(192379);
var i = n(974674),
    a = n(1561),
    s = n(993365),
    o = n(385499),
    l = n(768581),
    u = n(630388),
    c = n(489863),
    d = n(981631),
    f = n(182294),
    _ = n(388032),
    h = n(178677);
function p(e) {
    let { id: t, user: n, application: p, bot: m, accountScopes: g, showLogout: E, location: v } = e,
        I = l.ZP.getApplicationIconURL({
            id: p.id,
            icon: p.icon
        }),
        S = l.ZP.getUserAvatarURL(n);
    return (0, r.jsxs)('header', {
        id: t,
        className: h.header,
        children: [
            (0, r.jsxs)('div', {
                className: h.headerIcons,
                children: [
                    (0, r.jsx)(i.qE, {
                        src: I,
                        size: f.EF.SIZE_56,
                        'aria-label': p.name
                    }),
                    (0, r.jsxs)('div', {
                        className: h.ellipseGroup,
                        children: [(0, r.jsx)('div', { className: h.ellipse }), (0, r.jsx)('div', { className: h.ellipse }), (0, r.jsx)('div', { className: h.ellipse })]
                    }),
                    (0, r.jsx)(i.qE, {
                        src: S,
                        size: f.EF.SIZE_56,
                        'aria-label': n.username
                    })
                ]
            }),
            (0, r.jsxs)(s.x, {
                variant: 'text-lg/bold',
                color: 'header-primary',
                children: [
                    p.name,
                    null != m
                        ? (0, r.jsx)(o.Z, {
                              className: h.botTag,
                              verified: null != m.public_flags && (0, u.yE)(m.public_flags, d.xW$.VERIFIED_BOT)
                          })
                        : null
                ]
            }),
            g.length > 0
                ? (0, r.jsx)(s.x, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: h.label,
                      children: _.intl.string(_.t.jFbDnJ)
                  })
                : (0, r.jsx)(s.x, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: h.label,
                      children: _.intl.string(_.t['X+Fdpq'])
                  }),
            E
                ? (0, r.jsx)('div', {
                      className: h.currentUser,
                      children: (0, r.jsxs)(s.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: [
                              _.intl.format(_.t.qRvpYW, {
                                  userHook: () =>
                                      (0, r.jsxs)(
                                          s.x,
                                          {
                                              className: h.currentUserTag,
                                              variant: 'text-sm/normal',
                                              children: [
                                                  n.username,
                                                  !n.isPomelo() &&
                                                      (0, r.jsx)(s.x, {
                                                          className: h.currentUserDiscriminator,
                                                          variant: 'text-sm/normal',
                                                          children: '#'.concat(n.discriminator)
                                                      })
                                              ]
                                          },
                                          n.id
                                      )
                              }),
                              (0, r.jsx)(a.P, {
                                  tag: 'a',
                                  className: h.logoutLink,
                                  onClick: () => (0, c.c$)(v),
                                  children: _.intl.string(_.t['yV/hjI'])
                              })
                          ]
                      })
                  })
                : null
        ]
    });
}
