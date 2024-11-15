n.d(t, {
    Z: function () {
        return h;
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
    p = n(680009);
function h(e) {
    let { id: t, user: n, application: h, bot: m, accountScopes: g, showLogout: E, location: v } = e,
        b = l.ZP.getApplicationIconURL({
            id: h.id,
            icon: h.icon
        }),
        I = l.ZP.getUserAvatarURL(n);
    return (0, r.jsxs)('header', {
        id: t,
        className: p.header,
        children: [
            (0, r.jsxs)('div', {
                className: p.headerIcons,
                children: [
                    (0, r.jsx)(i.qE, {
                        src: b,
                        size: f.EF.SIZE_56,
                        'aria-label': h.name
                    }),
                    (0, r.jsxs)('div', {
                        className: p.ellipseGroup,
                        children: [(0, r.jsx)('div', { className: p.ellipse }), (0, r.jsx)('div', { className: p.ellipse }), (0, r.jsx)('div', { className: p.ellipse })]
                    }),
                    (0, r.jsx)(i.qE, {
                        src: I,
                        size: f.EF.SIZE_56,
                        'aria-label': n.username
                    })
                ]
            }),
            (0, r.jsxs)(s.x, {
                variant: 'text-lg/bold',
                color: 'header-primary',
                children: [
                    h.name,
                    null != m
                        ? (0, r.jsx)(o.Z, {
                              className: p.botTag,
                              verified: null != m.public_flags && (0, u.yE)(m.public_flags, d.xW$.VERIFIED_BOT)
                          })
                        : null
                ]
            }),
            g.length > 0
                ? (0, r.jsx)(s.x, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: p.label,
                      children: _.intl.string(_.t.jFbDnJ)
                  })
                : (0, r.jsx)(s.x, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: p.label,
                      children: _.intl.string(_.t['X+Fdpq'])
                  }),
            E
                ? (0, r.jsx)('div', {
                      className: p.currentUser,
                      children: (0, r.jsxs)(s.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: [
                              _.intl.format(_.t.qRvpYW, {
                                  userHook: () =>
                                      (0, r.jsxs)(
                                          s.x,
                                          {
                                              className: p.currentUserTag,
                                              variant: 'text-sm/normal',
                                              children: [
                                                  n.username,
                                                  !n.isPomelo() &&
                                                      (0, r.jsx)(s.x, {
                                                          className: p.currentUserDiscriminator,
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
                                  className: p.logoutLink,
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
