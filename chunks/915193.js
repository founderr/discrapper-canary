n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(692547),
    o = n(481060),
    l = n(493683),
    d = n(129861),
    s = n(700582),
    u = n(594174),
    c = n(388032),
    I = n(346411);
function T(e) {
    let { color: t, className: n } = e;
    return (0, i.jsx)('svg', {
        className: n,
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
function p(e, t) {
    let n = (0, r.e7)([u.default], () => u.default.getCurrentUser());
    return null == n || t.ownerId !== n.id || e.id === n.id
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'make-dm-owner',
              color: 'danger',
              label: c.intl.string(c.t['6t3CyM']),
              action: () => {
                  var r;
                  return (
                      (r = n),
                      void (0, o.openModal)((n) =>
                          (0, i.jsxs)(o.ConfirmModal, {
                              bodyClassName: I.confirmModal,
                              header: c.intl.string(c.t.WZoUsr),
                              confirmText: c.intl.string(c.t['cY+Ooa']),
                              cancelText: c.intl.string(c.t['ETE/oK']),
                              onConfirm: () => l.Z.setDMOwner(t.id, e.id),
                              ...n,
                              children: [
                                  (0, i.jsx)(T, { color: a.Z.unsafe_rawColors.PRIMARY_300.css }),
                                  (0, i.jsxs)('div', {
                                      className: I.fromToWrapper,
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: I.from,
                                              children: (0, i.jsx)(s.Z, {
                                                  user: r,
                                                  size: o.AvatarSizes.SIZE_80
                                              })
                                          }),
                                          (0, i.jsx)('div', {
                                              className: I.to,
                                              children: (0, i.jsx)(s.Z, {
                                                  user: e,
                                                  size: o.AvatarSizes.SIZE_80
                                              })
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      children: c.intl.format(c.t.gsBb3N, {
                                          usernameHook: (t, n) =>
                                              (0, i.jsx)(
                                                  d.Z,
                                                  {
                                                      usernameIcon: (0, i.jsx)(o.Avatar, {
                                                          className: I.avatarIcon,
                                                          src: e.getAvatarURL(void 0, 16),
                                                          size: o.AvatarSizes.SIZE_16,
                                                          'aria-hidden': !0
                                                      }),
                                                      className: I.discordTag,
                                                      usernameClass: I.username,
                                                      discriminatorClass: I.discriminator,
                                                      user: e
                                                  },
                                                  n
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
