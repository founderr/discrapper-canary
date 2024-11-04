e.d(t, {
    Z: function () {
        return E;
    }
});
var i = e(200651);
e(192379);
var r = e(442837),
    l = e(692547),
    a = e(481060),
    o = e(493683),
    u = e(129861),
    d = e(700582),
    s = e(594174),
    c = e(388032),
    T = e(346411);
function I(n) {
    let { color: t, className: e } = n;
    return (0, i.jsx)('svg', {
        className: e,
        height: '16',
        width: '80',
        viewBox: '0 0 80 16',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, i.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            opacity: '.6',
            children: [
                (0, i.jsx)('path', { d: 'm0 0h80v16h-80z' }),
                (0, i.jsxs)('g', {
                    stroke: t,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '2',
                    children: [
                        (0, i.jsx)('path', { d: 'm71 1h4v4.16' }),
                        (0, i.jsx)('path', {
                            d: 'm2 1h4v4.16',
                            transform: 'matrix(-1 0 0 1 8 0)'
                        }),
                        (0, i.jsx)('path', { d: 'm51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4' }),
                        (0, i.jsx)('path', { d: 'm72.13 10.474 2.869 3.12 2.631-3.12' })
                    ]
                })
            ]
        })
    });
}
function E(n, t) {
    let e = (0, r.e7)([s.default], () => s.default.getCurrentUser());
    return null == e || t.ownerId !== e.id || n.id === e.id
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'make-dm-owner',
              color: 'danger',
              label: c.intl.string(c.t['6t3CyM']),
              action: () => {
                  var r;
                  return (
                      (r = e),
                      void (0, a.openModal)((e) =>
                          (0, i.jsxs)(a.ConfirmModal, {
                              bodyClassName: T.confirmModal,
                              header: c.intl.string(c.t.WZoUsr),
                              confirmText: c.intl.string(c.t['cY+Ooa']),
                              cancelText: c.intl.string(c.t['ETE/oK']),
                              onConfirm: () => o.Z.setDMOwner(t.id, n.id),
                              ...e,
                              children: [
                                  (0, i.jsx)(I, { color: l.Z.unsafe_rawColors.PRIMARY_300.css }),
                                  (0, i.jsxs)('div', {
                                      className: T.fromToWrapper,
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: T.from,
                                              children: (0, i.jsx)(d.Z, {
                                                  user: r,
                                                  size: a.AvatarSizes.SIZE_80
                                              })
                                          }),
                                          (0, i.jsx)('div', {
                                              className: T.to,
                                              children: (0, i.jsx)(d.Z, {
                                                  user: n,
                                                  size: a.AvatarSizes.SIZE_80
                                              })
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: c.intl.format(c.t.gsBb3N, {
                                          usernameHook: (t, e) =>
                                              (0, i.jsx)(
                                                  u.Z,
                                                  {
                                                      usernameIcon: (0, i.jsx)(a.Avatar, {
                                                          className: T.avatarIcon,
                                                          src: n.getAvatarURL(void 0, 16),
                                                          size: a.AvatarSizes.SIZE_16,
                                                          'aria-hidden': !0
                                                      }),
                                                      className: T.discordTag,
                                                      usernameClass: T.username,
                                                      discriminatorClass: T.discriminator,
                                                      user: n
                                                  },
                                                  e
                                              )
                                      })
                                  })
                              ]
                          })
                      )
                  );
              }
          });
}
