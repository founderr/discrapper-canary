"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(700582),
  c = t(330726),
  d = t(268350),
  u = t(419922),
  E = t(689938),
  _ = t(42225);
s.Z = e => {
  let {
    className: s,
    isDisabled: l,
    sticker: I,
    canManageSticker: T
  } = e, [N, m] = i.useState(!1), [S, h] = (0, c.Z)(null, 4e3), g = () => {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("49237"), t.e("99387"), t.e("93626")]).then(t.bind(t, 136735));
      return s => (0, n.jsx)(e, {
        sticker: I,
        guildId: I.guild_id,
        ...s
      })
    })
  }, C = async () => {
    h(null), m(!0);
    try {
      await (0, d.Um)(I)
    } catch (e) {
      h(e.body.message), m(!1)
    }
  };
  return (0, n.jsx)(r.Tooltip, {
    color: r.Tooltip.Colors.RED,
    forceOpen: null != S,
    text: S,
    children: () => (0, n.jsxs)("div", {
      className: a()(_.wrapper, s, {
        [_.wrapperDisabled]: l
      }),
      children: [(0, n.jsxs)("div", {
        className: a()(_.content, {
          [_.contentRemoving]: N
        }),
        children: [(0, n.jsx)(u.ZP, {
          className: _.sticker,
          size: 72,
          sticker: I
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(r.Text, {
            color: "header-primary",
            variant: "text-xs/semibold",
            className: _.stickerName,
            children: I.name
          }), null != I.user && (0, n.jsxs)("div", {
            className: _.user,
            children: [(0, n.jsx)(o.Z, {
              className: _.userAvatar,
              size: r.AvatarSizes.SIZE_16,
              user: I.user
            }), (0, n.jsx)(r.Text, {
              color: "header-secondary",
              variant: "text-xs/normal",
              children: I.user.username
            })]
          })]
        }), T ? (0, n.jsxs)("div", {
          className: _.actions,
          children: [(0, n.jsx)(r.Clickable, {
            className: a()(_.action, _.__invalid_actionEdit),
            onClick: g,
            "aria-label": E.Z.Messages.EDIT,
            children: (0, n.jsx)(r.PencilIcon, {
              size: "xs",
              color: "currentColor",
              className: _.icon
            })
          }), (0, n.jsx)(r.Clickable, {
            className: a()(_.action, _.actionRemove),
            onClick: C,
            "aria-label": E.Z.Messages.REMOVE,
            children: (0, n.jsx)(r.CloseSmallIcon, {
              size: "md",
              color: "currentColor",
              className: _.icon
            })
          })]
        }) : null]
      }), N && (0, n.jsx)(r.Spinner, {
        className: _.spinner
      })]
    })
  })
}