"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var l = a("735250");
a("470079");
var u = a("442837"),
  d = a("692547"),
  s = a("481060"),
  n = a("493683"),
  i = a("129861"),
  r = a("700582"),
  o = a("594174"),
  f = a("689938"),
  c = a("377337");

function M(e) {
  let {
    color: t,
    className: a
  } = e;
  return (0, l.jsx)("svg", {
    className: a,
    height: "16",
    width: "80",
    viewBox: "0 0 80 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, l.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      opacity: ".6",
      children: [(0, l.jsx)("path", {
        d: "m0 0h80v16h-80z"
      }), (0, l.jsxs)("g", {
        stroke: t,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        children: [(0, l.jsx)("path", {
          d: "m71 1h4v4.16"
        }), (0, l.jsx)("path", {
          d: "m2 1h4v4.16",
          transform: "matrix(-1 0 0 1 8 0)"
        }), (0, l.jsx)("path", {
          d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
        }), (0, l.jsx)("path", {
          d: "m72.13 10.474 2.869 3.12 2.631-3.12"
        })]
      })]
    })
  })
}

function S(e, t) {
  let a = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser());
  return null == a || t.ownerId !== a.id || e.id === a.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, l.jsx)(s.MenuItem, {
    id: "make-dm-owner",
    color: "danger",
    label: f.default.Messages.CHANGE_DM_OWNER,
    action: () => {
      var u;
      return u = a, void(0, s.openModal)(a => (0, l.jsxs)(s.ConfirmModal, {
        bodyClassName: c.confirmModal,
        header: f.default.Messages.TRANSFER_GROUP_OWNERSHIP,
        confirmText: f.default.Messages.CONFIRM,
        cancelText: f.default.Messages.CANCEL,
        onConfirm: () => n.default.setDMOwner(t.id, e.id),
        ...a,
        children: [(0, l.jsx)(M, {
          color: d.default.unsafe_rawColors.PRIMARY_300.css
        }), (0, l.jsxs)("div", {
          className: c.fromToWrapper,
          children: [(0, l.jsx)("div", {
            className: c.from,
            children: (0, l.jsx)(r.default, {
              user: u,
              size: s.AvatarSizes.SIZE_80
            })
          }), (0, l.jsx)("div", {
            className: c.to,
            children: (0, l.jsx)(r.default, {
              user: e,
              size: s.AvatarSizes.SIZE_80
            })
          })]
        }), (0, l.jsx)(s.Text, {
          variant: "text-md/normal",
          children: f.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
            usernameHook: (t, a) => (0, l.jsx)(i.default, {
              usernameIcon: (0, l.jsx)(s.Avatar, {
                className: c.avatarIcon,
                src: e.getAvatarURL(void 0, 16),
                size: s.AvatarSizes.SIZE_16,
                "aria-hidden": !0
              }),
              className: c.discordTag,
              usernameClass: c.username,
              discriminatorClass: c.discriminator,
              user: e
            }, a)
          })
        })]
      }))
    }
  })
}