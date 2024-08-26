n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(692547),
    o = n(481060),
    s = n(493683),
    l = n(129861),
    u = n(700582),
    d = n(594174),
    c = n(689938),
    I = n(725458);
function f(e) {
    let { color: t, className: n } = e;
    return (0, r.jsx)('svg', {
        className: n,
        height: '16',
        width: '80',
        viewBox: '0 0 80 16',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, r.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            opacity: '.6',
            children: [
                (0, r.jsx)('path', { d: 'm0 0h80v16h-80z' }),
                (0, r.jsxs)('g', {
                    stroke: t,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '2',
                    children: [
                        (0, r.jsx)('path', { d: 'm71 1h4v4.16' }),
                        (0, r.jsx)('path', {
                            d: 'm2 1h4v4.16',
                            transform: 'matrix(-1 0 0 1 8 0)'
                        }),
                        (0, r.jsx)('path', { d: 'm51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4' }),
                        (0, r.jsx)('path', { d: 'm72.13 10.474 2.869 3.12 2.631-3.12' })
                    ]
                })
            ]
        })
    });
}
function E(e, t) {
    let n = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return null == n || t.ownerId !== n.id || e.id === n.id || (null == t ? void 0 : t.isBroadcastChannel())
        ? null
        : (0, r.jsx)(o.MenuItem, {
              id: 'make-dm-owner',
              color: 'danger',
              label: c.Z.Messages.CHANGE_DM_OWNER,
              action: () => {
                  var i;
                  return (
                      (i = n),
                      void (0, o.openModal)((n) =>
                          (0, r.jsxs)(o.ConfirmModal, {
                              bodyClassName: I.confirmModal,
                              header: c.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
                              confirmText: c.Z.Messages.CONFIRM,
                              cancelText: c.Z.Messages.CANCEL,
                              onConfirm: () => s.Z.setDMOwner(t.id, e.id),
                              ...n,
                              children: [
                                  (0, r.jsx)(f, { color: a.Z.unsafe_rawColors.PRIMARY_300.css }),
                                  (0, r.jsxs)('div', {
                                      className: I.fromToWrapper,
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: I.from,
                                              children: (0, r.jsx)(u.Z, {
                                                  user: i,
                                                  size: o.AvatarSizes.SIZE_80
                                              })
                                          }),
                                          (0, r.jsx)('div', {
                                              className: I.to,
                                              children: (0, r.jsx)(u.Z, {
                                                  user: e,
                                                  size: o.AvatarSizes.SIZE_80
                                              })
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      children: c.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                                          usernameHook: (t, n) =>
                                              (0, r.jsx)(
                                                  l.Z,
                                                  {
                                                      usernameIcon: (0, r.jsx)(o.Avatar, {
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
