r.d(n, {
  Z: function() {
    return m
  }
});
var i = r(735250);
r(470079);
var t = r(442837),
  a = r(692547),
  s = r(481060),
  l = r(493683),
  u = r(129861),
  d = r(700582),
  o = r(594174),
  c = r(689938),
  Z = r(562813);

function f(e) {
  let {
    color: n,
    className: r
  } = e;
  return (0, i.jsx)("svg", {
    className: r,
    height: "16",
    width: "80",
    viewBox: "0 0 80 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, i.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      opacity: ".6",
      children: [(0, i.jsx)("path", {
        d: "m0 0h80v16h-80z"
      }), (0, i.jsxs)("g", {
        stroke: n,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        children: [(0, i.jsx)("path", {
          d: "m71 1h4v4.16"
        }), (0, i.jsx)("path", {
          d: "m2 1h4v4.16",
          transform: "matrix(-1 0 0 1 8 0)"
        }), (0, i.jsx)("path", {
          d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
        }), (0, i.jsx)("path", {
          d: "m72.13 10.474 2.869 3.12 2.631-3.12"
        })]
      })]
    })
  })
}

function m(e, n) {
  let r = (0, t.e7)([o.default], () => o.default.getCurrentUser());
  return null == r || n.ownerId !== r.id || e.id === r.id || (null == n ? void 0 : n.isBroadcastChannel()) ? null : (0, i.jsx)(s.MenuItem, {
    id: "make-dm-owner",
    color: "danger",
    label: c.Z.Messages.CHANGE_DM_OWNER,
    action: () => {
      var t;
      return t = r, void(0, s.openModal)(r => (0, i.jsxs)(s.ConfirmModal, {
        bodyClassName: Z.confirmModal,
        header: c.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
        confirmText: c.Z.Messages.CONFIRM,
        cancelText: c.Z.Messages.CANCEL,
        onConfirm: () => l.Z.setDMOwner(n.id, e.id),
        ...r,
        children: [(0, i.jsx)(f, {
          color: a.Z.unsafe_rawColors.PRIMARY_300.css
        }), (0, i.jsxs)("div", {
          className: Z.fromToWrapper,
          children: [(0, i.jsx)("div", {
            className: Z.from,
            children: (0, i.jsx)(d.Z, {
              user: t,
              size: s.AvatarSizes.SIZE_80
            })
          }), (0, i.jsx)("div", {
            className: Z.to,
            children: (0, i.jsx)(d.Z, {
              user: e,
              size: s.AvatarSizes.SIZE_80
            })
          })]
        }), (0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          children: c.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format({
            usernameHook: (n, r) => (0, i.jsx)(u.Z, {
              usernameIcon: (0, i.jsx)(s.Avatar, {
                className: Z.avatarIcon,
                src: e.getAvatarURL(void 0, 16),
                size: s.AvatarSizes.SIZE_16,
                "aria-hidden": !0
              }),
              className: Z.discordTag,
              usernameClass: Z.username,
              discriminatorClass: Z.discriminator,
              user: e
            }, r)
          })
        })]
      }))
    }
  })
}