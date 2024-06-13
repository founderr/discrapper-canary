"use strict";
t.r(l), t("47120");
var a = t("735250"),
  n = t("470079"),
  s = t("120356"),
  o = t.n(s),
  i = t("512722"),
  r = t.n(i),
  c = t("176743"),
  d = t("788698"),
  u = t("481060"),
  m = t("493683"),
  x = t("220779"),
  g = t("201133"),
  v = t("919394"),
  h = t("91140"),
  f = t("297781"),
  p = t("359110"),
  j = t("592125"),
  E = t("594174"),
  I = t("5192"),
  _ = t("689938"),
  C = t("674175");
l.default = e => {
  let {
    entry: l,
    channel: t,
    style: s = {},
    onClose: i
  } = e, M = E.default.getUser(l.author_id), A = I.default.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, M), N = null == M ? void 0 : M.getAvatarURL(null == t ? void 0 : t.guild_id, 48, !1), [y, S] = n.useState(null), [L, R] = n.useState(!1);
  return (0, a.jsxs)("div", {
    className: C.profileEntryCard,
    style: s,
    children: [(0, a.jsx)("img", {
      src: N,
      style: {
        height: 24,
        width: 24,
        borderRadius: 12,
        marginRight: 8
      },
      alt: "TODO"
    }), (0, a.jsxs)("div", {
      className: o()(C.collapsableRow, C.playerInfo, {
        [C.open]: !L,
        [C.closed]: L
      }),
      children: [(0, a.jsxs)(u.Text, {
        variant: "text-sm/bold",
        color: "text-normal",
        lineClamp: 1,
        children: [A.slice(0, 18), " ", A.length > 18 ? "..." : ""]
      }), (0, a.jsx)(f.BadgesContainer, {
        location: f.BadgeLocation.CARD,
        children: h.GAMING_BADGES.slice(0, 1).map((e, t) => (0, a.jsx)(e, {
          entry: l
        }, t))
      })]
    }), (0, a.jsxs)("div", {
      className: o()(C.collapsableRow, C.inputWrapper, {
        [C.open]: L,
        [C.closed]: !L
      }),
      children: [(0, a.jsx)("div", {
        className: C.input,
        children: (0, a.jsx)(x.ReplyInput, {
          autoFocus: !1,
          setEditorRef: e => S(e),
          onEnter: async e => {
            let t = await m.default.getOrEnsurePrivateChannel(l.author_id),
              a = j.default.getChannel(t);
            r()(null != a, "DM channel cannot be null");
            let n = await (0, v.generateGamingContentImageFromEntry)(l, a);
            r()(null != n, "No image was generated"), (0, g.sendReply)({
              file: n,
              channel: a,
              altText: "",
              reply: e
            }), i(), (0, p.transitionToChannel)(a.id)
          }
        })
      }), (0, a.jsx)(u.CircleIconButton, {
        size: u.CircleIconButtonSizes.SIZE_24,
        color: u.CircleIconButtonColors.PRIMARY,
        className: C.actionButton,
        tooltip: _.default.Messages.CLOSE,
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
      className: o()(C.collapsableRow, {
        [C.open]: !L,
        [C.closed]: L
      }),
      children: (0, a.jsx)(u.CircleIconButton, {
        size: u.CircleIconButtonSizes.SIZE_24,
        color: u.CircleIconButtonColors.SECONDARY,
        className: o()(C.actionButton, C.messageButton),
        tooltip: _.default.Messages.COMMAND_MSG_DESCRIPTION,
        onClick: () => {
          !L && (null == y || y.focus(), R(!0))
        },
        icon: (0, a.jsx)(c.ChatIcon, {})
      })
    })]
  })
}