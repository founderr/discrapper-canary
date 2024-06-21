n(47120);
var s = n(735250),
  t = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(512722),
  o = n.n(r),
  c = n(481060),
  d = n(493683),
  u = n(220779),
  m = n(201133),
  h = n(919394),
  x = n(91140),
  g = n(297781),
  I = n(359110),
  E = n(592125),
  v = n(594174),
  j = n(5192),
  A = n(689938),
  N = n(777450),
  p = n(997844);
l.Z = e => {
  let {
    entry: l,
    channel: n,
    style: a = {},
    onClose: r
  } = e, O = v.default.getUser(l.author_id), T = j.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, O), M = null == O ? void 0 : O.getAvatarURL(null == n ? void 0 : n.guild_id, 48, !1), [_, S] = t.useState(null), [f, C] = t.useState(!1);
  return (0, s.jsxs)("div", {
    className: N.profileEntryCard,
    style: a,
    children: [(0, s.jsx)("img", {
      className: N.avatar,
      src: M,
      alt: "TODO"
    }), (0, s.jsx)("div", {
      className: i()(N.collapsableRow, N.playerInfo, {
        [N.open]: !f,
        [N.closed]: f
      }),
      children: (0, s.jsxs)("div", {
        className: i()(p.column, p.gapNone),
        children: [(0, s.jsxs)(c.Text, {
          variant: "text-sm/bold",
          color: "text-normal",
          lineClamp: 1,
          children: [T.slice(0, 18), " ", T.length > 18 ? "..." : ""]
        }), (0, s.jsx)(g.Gk, {
          location: g.Gt.CARD,
          children: x.W.slice(0, 2).map((e, n) => (0, s.jsx)(e, {
            entry: l
          }, n))
        })]
      })
    }), (0, s.jsxs)("div", {
      className: i()(N.collapsableRow, N.inputWrapper, {
        [N.open]: f,
        [N.closed]: !f
      }),
      children: [(0, s.jsx)("div", {
        className: N.input,
        children: (0, s.jsx)(u.A7, {
          autoFocus: !1,
          setEditorRef: e => S(e),
          onEnter: async e => {
            let n = await d.Z.getOrEnsurePrivateChannel(l.author_id),
              s = E.Z.getChannel(n);
            o()(null != s, "DM channel cannot be null");
            let t = await (0, h.QC)(l, s);
            o()(null != t, "No image was generated"), (0, m.B)({
              file: t,
              channel: s,
              altText: "",
              reply: e
            }), r(), (0, I.Kh)(s.id)
          }
        })
      }), (0, s.jsx)(c.CircleIconButton, {
        size: c.CircleIconButtonSizes.SIZE_24,
        color: c.CircleIconButtonColors.PRIMARY,
        className: N.actionButton,
        tooltip: A.Z.Messages.CLOSE,
        onClick: () => {
          C(!1)
        },
        icon: (0, s.jsx)(c.CloseSmallIcon, {}),
        focusProps: {
          enabled: !1
        }
      })]
    }), (0, s.jsx)("div", {
      style: {
        justifyContent: "flex-end"
      },
      className: i()(N.collapsableRow, {
        [N.open]: !f,
        [N.closed]: f
      }),
      children: (0, s.jsx)(c.CircleIconButton, {
        size: c.CircleIconButtonSizes.SIZE_24,
        color: c.CircleIconButtonColors.SECONDARY,
        className: i()(N.actionButton, N.messageButton),
        tooltip: A.Z.Messages.COMMAND_MSG_DESCRIPTION,
        onClick: () => {
          !f && (null == _ || _.focus(), C(!0))
        },
        icon: (0, s.jsx)(c.ChatIcon, {})
      })
    })]
  })
}