n.d(t, {
  Z: function() {
return T;
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  a = n(692547),
  s = n(481060),
  o = n(493683),
  d = n(129861),
  I = n(700582),
  c = n(594174),
  l = n(689938),
  E = n(813383);

function u(e) {
  let {
color: t,
className: n
  } = e;
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
    (0, i.jsx)('path', {
      d: 'm0 0h80v16h-80z'
    }),
    (0, i.jsxs)('g', {
      stroke: t,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
      children: [
        (0, i.jsx)('path', {
          d: 'm71 1h4v4.16'
        }),
        (0, i.jsx)('path', {
          d: 'm2 1h4v4.16',
          transform: 'matrix(-1 0 0 1 8 0)'
        }),
        (0, i.jsx)('path', {
          d: 'm51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4'
        }),
        (0, i.jsx)('path', {
          d: 'm72.13 10.474 2.869 3.12 2.631-3.12'
        })
      ]
    })
  ]
})
  });
}

function T(e, t) {
  let n = (0, r.e7)([c.default], () => c.default.getCurrentUser());
  return null == n || t.ownerId !== n.id || e.id === n.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, i.jsx)(s.MenuItem, {
id: 'make-dm-owner',
color: 'danger',
label: l.Z.Messages.CHANGE_DM_OWNER,
action: () => {
  var r;
  return r = n, void(0, s.openModal)(n => (0, i.jsxs)(s.ConfirmModal, {
    bodyClassName: E.confirmModal,
    header: l.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
    confirmText: l.Z.Messages.CONFIRM,
    cancelText: l.Z.Messages.CANCEL,
    onConfirm: () => o.Z.setDMOwner(t.id, e.id),
    ...n,
    children: [
      (0, i.jsx)(u, {
        color: a.Z.unsafe_rawColors.PRIMARY_300.css
      }),
      (0, i.jsxs)('div', {
        className: E.fromToWrapper,
        children: [
          (0, i.jsx)('div', {
            className: E.from,
            children: (0, i.jsx)(I.Z, {
              user: r,
              size: s.AvatarSizes.SIZE_80
            })
          }),
          (0, i.jsx)('div', {
            className: E.to,
            children: (0, i.jsx)(I.Z, {
              user: e,
              size: s.AvatarSizes.SIZE_80
            })
          })
        ]
      }),
      (0, i.jsx)(s.Text, {
        variant: 'text-md/normal',
        children: l.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format({
          usernameHook: (t, n) => (0, i.jsx)(d.Z, {
            usernameIcon: (0, i.jsx)(s.Avatar, {
              className: E.avatarIcon,
              src: e.getAvatarURL(void 0, 16),
              size: s.AvatarSizes.SIZE_16,
              'aria-hidden': !0
            }),
            className: E.discordTag,
            usernameClass: E.username,
            discriminatorClass: E.discriminator,
            user: e
          }, n)
        })
      })
    ]
  }));
}
  });
}