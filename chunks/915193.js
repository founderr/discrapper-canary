i.d(n, {
  Z: function() {
    return m
  }
});
var r = i(735250);
i(470079);
var s = i(442837),
  a = i(692547),
  t = i(481060),
  l = i(493683),
  d = i(129861),
  u = i(700582),
  o = i(594174),
  c = i(689938),
  Z = i(562813);

function f(e) {
  let {
    color: n,
    className: i
  } = e;
  return (0, r.jsx)("svg", {
    className: i,
    height: "16",
    width: "80",
    viewBox: "0 0 80 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, r.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      opacity: ".6",
      children: [(0, r.jsx)("path", {
        d: "m0 0h80v16h-80z"
      }), (0, r.jsxs)("g", {
        stroke: n,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        children: [(0, r.jsx)("path", {
          d: "m71 1h4v4.16"
        }), (0, r.jsx)("path", {
          d: "m2 1h4v4.16",
          transform: "matrix(-1 0 0 1 8 0)"
        }), (0, r.jsx)("path", {
          d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
        }), (0, r.jsx)("path", {
          d: "m72.13 10.474 2.869 3.12 2.631-3.12"
        })]
      })]
    })
  })
}

function m(e, n) {
  let i = (0, s.e7)([o.default], () => o.default.getCurrentUser());
  return null == i || n.ownerId !== i.id || e.id === i.id || (null == n ? void 0 : n.isBroadcastChannel()) ? null : (0, r.jsx)(t.MenuItem, {
    id: "make-dm-owner",
    color: "danger",
    label: c.Z.Messages.CHANGE_DM_OWNER,
    action: () => {
      var s;
      return s = i, void(0, t.openModal)(i => (0, r.jsxs)(t.ConfirmModal, {
        bodyClassName: Z.confirmModal,
        header: c.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
        confirmText: c.Z.Messages.CONFIRM,
        cancelText: c.Z.Messages.CANCEL,
        onConfirm: () => l.Z.setDMOwner(n.id, e.id),
        ...i,
        children: [(0, r.jsx)(f, {
          color: a.Z.unsafe_rawColors.PRIMARY_300.css
        }), (0, r.jsxs)("div", {
          className: Z.fromToWrapper,
          children: [(0, r.jsx)("div", {
            className: Z.from,
            children: (0, r.jsx)(u.Z, {
              user: s,
              size: t.AvatarSizes.SIZE_80
            })
          }), (0, r.jsx)("div", {
            className: Z.to,
            children: (0, r.jsx)(u.Z, {
              user: e,
              size: t.AvatarSizes.SIZE_80
            })
          })]
        }), (0, r.jsx)(t.Text, {
          variant: "text-md/normal",
          children: c.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format({
            usernameHook: (n, i) => (0, r.jsx)(d.Z, {
              usernameIcon: (0, r.jsx)(t.Avatar, {
                className: Z.avatarIcon,
                src: e.getAvatarURL(void 0, 16),
                size: t.AvatarSizes.SIZE_16,
                "aria-hidden": !0
              }),
              className: Z.discordTag,
              usernameClass: Z.username,
              discriminatorClass: Z.discriminator,
              user: e
            }, i)
          })
        })]
      }))
    }
  })
}