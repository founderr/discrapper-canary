"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var u = a("735250");
a("470079");
var l = a("442837"),
  s = a("692547"),
  d = a("481060"),
  n = a("493683"),
  r = a("129861"),
  i = a("700582"),
  o = a("594174"),
  f = a("689938"),
  c = a("377337");

function E(e) {
  let {
    color: t,
    className: a
  } = e;
  return (0, u.jsx)("svg", {
    className: a,
    height: "16",
    width: "80",
    viewBox: "0 0 80 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, u.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      opacity: ".6",
      children: [(0, u.jsx)("path", {
        d: "m0 0h80v16h-80z"
      }), (0, u.jsxs)("g", {
        stroke: t,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        children: [(0, u.jsx)("path", {
          d: "m71 1h4v4.16"
        }), (0, u.jsx)("path", {
          d: "m2 1h4v4.16",
          transform: "matrix(-1 0 0 1 8 0)"
        }), (0, u.jsx)("path", {
          d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
        }), (0, u.jsx)("path", {
          d: "m72.13 10.474 2.869 3.12 2.631-3.12"
        })]
      })]
    })
  })
}

function S(e, t) {
  let a = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser());
  return null == a || t.ownerId !== a.id || e.id === a.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, u.jsx)(d.MenuItem, {
    id: "make-dm-owner",
    color: "danger",
    label: f.default.Messages.CHANGE_DM_OWNER,
    action: () => {
      var l;
      return l = a, void(0, d.openModal)(a => (0, u.jsxs)(d.ConfirmModal, {
        bodyClassName: c.confirmModal,
        header: f.default.Messages.TRANSFER_GROUP_OWNERSHIP,
        confirmText: f.default.Messages.CONFIRM,
        cancelText: f.default.Messages.CANCEL,
        onConfirm: () => n.default.setDMOwner(t.id, e.id),
        ...a,
        children: [(0, u.jsx)(E, {
          color: s.default.unsafe_rawColors.PRIMARY_300.css
        }), (0, u.jsxs)("div", {
          className: c.fromToWrapper,
          children: [(0, u.jsx)("div", {
            className: c.from,
            children: (0, u.jsx)(i.default, {
              user: l,
              size: d.AvatarSizes.SIZE_80
            })
          }), (0, u.jsx)("div", {
            className: c.to,
            children: (0, u.jsx)(i.default, {
              user: e,
              size: d.AvatarSizes.SIZE_80
            })
          })]
        }), (0, u.jsx)(d.Text, {
          variant: "text-md/normal",
          children: f.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
            usernameHook: (t, a) => (0, u.jsx)(r.default, {
              usernameIcon: (0, u.jsx)(d.Avatar, {
                className: c.avatarIcon,
                src: e.getAvatarURL(void 0, 16),
                size: d.AvatarSizes.SIZE_16,
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