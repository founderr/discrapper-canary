"use strict";
t.r(l), t("47120");
var a = t("735250"),
  s = t("470079"),
  n = t("120356"),
  i = t.n(n),
  r = t("512722"),
  o = t.n(r),
  c = t("176743"),
  d = t("788698"),
  u = t("481060"),
  m = t("493683"),
  I = t("220779"),
  g = t("201133"),
  h = t("919394"),
  x = t("91140"),
  f = t("297781"),
  v = t("359110"),
  E = t("592125"),
  A = t("594174"),
  C = t("5192"),
  p = t("689938"),
  j = t("674175");
l.default = e => {
  let {
    entry: l,
    channel: t,
    style: n = {},
    onClose: r
  } = e, T = A.default.getUser(l.author_id), N = C.default.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, T), M = null == T ? void 0 : T.getAvatarURL(null == t ? void 0 : t.guild_id, 48, !1), [O, _] = s.useState(null), [y, R] = s.useState(!1);
  return (0, a.jsxs)("div", {
    className: j.profileEntryCard,
    style: n,
    children: [(0, a.jsx)("img", {
      src: M,
      style: {
        height: 24,
        width: 24,
        borderRadius: 12,
        marginRight: 8
      },
      alt: "TODO"
    }), (0, a.jsxs)("div", {
      className: i()(j.collapsableRow, j.playerInfo, {
        [j.open]: !y,
        [j.closed]: y
      }),
      children: [(0, a.jsxs)(u.Text, {
        variant: "text-sm/bold",
        color: "text-normal",
        lineClamp: 1,
        children: [N.slice(0, 18), " ", N.length > 18 ? "..." : ""]
      }), (0, a.jsx)(f.BadgesContainer, {
        location: f.BadgeLocation.CARD,
        children: x.GAMING_BADGES.slice(0, 1).map((e, t) => (0, a.jsx)(e, {
          entry: l
        }, t))
      })]
    }), (0, a.jsxs)("div", {
      className: i()(j.collapsableRow, j.inputWrapper, {
        [j.open]: y,
        [j.closed]: !y
      }),
      children: [(0, a.jsx)("div", {
        className: j.input,
        children: (0, a.jsx)(I.ReplyInput, {
          autoFocus: !1,
          setEditorRef: e => _(e),
          onEnter: async e => {
            let t = await m.default.getOrEnsurePrivateChannel(l.author_id),
              a = E.default.getChannel(t);
            o()(null != a, "DM channel cannot be null");
            let s = await (0, h.generateGamingContentImageFromEntry)(l, a);
            o()(null != s, "No image was generated"), (0, g.sendReply)({
              file: s,
              channel: a,
              altText: "",
              reply: e
            }), r(), (0, v.transitionToChannel)(a.id)
          }
        })
      }), (0, a.jsx)(u.CircleIconButton, {
        size: u.CircleIconButtonSizes.SIZE_24,
        color: u.CircleIconButtonColors.PRIMARY,
        className: j.actionButton,
        tooltip: p.default.Messages.CLOSE,
        onClick: () => {
          R(!1)
        },
        icon: (0, a.jsx)(d.CloseSmallIcon, {}),
        focusProps: {
          enabled: !1
        }
      })]
    }), (0, a.jsx)("div", {
      style: {
        justifyContent: "flex-end"
      },
      className: i()(j.collapsableRow, {
        [j.open]: !y,
        [j.closed]: y
      }),
      children: (0, a.jsx)(u.CircleIconButton, {
        size: u.CircleIconButtonSizes.SIZE_24,
        color: u.CircleIconButtonColors.SECONDARY,
        className: i()(j.actionButton, j.messageButton),
        tooltip: p.default.Messages.COMMAND_MSG_DESCRIPTION,
        onClick: () => {
          !y && (null == O || O.focus(), R(!0))
        },
        icon: (0, a.jsx)(c.ChatIcon, {})
      })
    })]
  })
}