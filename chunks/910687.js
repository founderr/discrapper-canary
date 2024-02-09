"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("77078"),
  o = s("87657"),
  d = s("612039"),
  u = s("945330"),
  c = s("987772"),
  E = s("467094"),
  _ = s("41170"),
  I = s("782340"),
  f = s("9278"),
  T = e => {
    let {
      className: t,
      isDisabled: n,
      sticker: T,
      canManageSticker: S
    } = e, [m, N] = l.useState(!1), [g, h] = (0, d.default)(null, 4e3), C = () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("54666").then(s.bind(s, "54666"));
        return t => (0, a.jsx)(e, {
          sticker: T,
          guildId: T.guild_id,
          ...t
        })
      })
    }, R = async () => {
      h(null), N(!0);
      try {
        await (0, E.deleteGuildSticker)(T)
      } catch (e) {
        h(e.body.message), N(!1)
      }
    };
    return (0, a.jsx)(r.Tooltip, {
      color: r.Tooltip.Colors.RED,
      forceOpen: null != g,
      text: g,
      children: () => (0, a.jsxs)("div", {
        className: i(f.wrapper, t, {
          [f.wrapperDisabled]: n
        }),
        children: [(0, a.jsxs)("div", {
          className: i(f.content, {
            [f.contentRemoving]: m
          }),
          children: [(0, a.jsx)(_.default, {
            className: f.sticker,
            size: 72,
            sticker: T
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(r.Text, {
              color: "header-primary",
              variant: "text-xs/semibold",
              className: f.stickerName,
              children: T.name
            }), null != T.user && (0, a.jsxs)("div", {
              className: f.user,
              children: [(0, a.jsx)(o.default, {
                className: f.userAvatar,
                size: r.AvatarSizes.SIZE_16,
                user: T.user
              }), (0, a.jsx)(r.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                children: T.user.username
              })]
            })]
          }), S ? (0, a.jsxs)("div", {
            className: f.actions,
            children: [(0, a.jsx)(r.Clickable, {
              className: i(f.action, f.actionEdit),
              onClick: C,
              "aria-label": I.default.Messages.EDIT,
              children: (0, a.jsx)(c.default, {
                className: f.icon
              })
            }), (0, a.jsx)(r.Clickable, {
              className: i(f.action, f.actionRemove),
              onClick: R,
              "aria-label": I.default.Messages.REMOVE,
              children: (0, a.jsx)(u.default, {
                className: f.icon
              })
            })]
          }) : null]
        }), m && (0, a.jsx)(r.Spinner, {
          className: f.spinner
        })]
      })
    })
  }