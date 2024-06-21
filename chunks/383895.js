n(47120);
var s = n(735250),
  a = n(470079),
  t = n(120356),
  i = n.n(t),
  r = n(512722),
  o = n.n(r),
  c = n(481060),
  d = n(493683),
  u = n(220779),
  m = n(201133),
  x = n(919394),
  h = n(91140),
  g = n(297781),
  I = n(359110),
  v = n(592125),
  E = n(594174),
  j = n(5192),
  N = n(689938),
  A = n(777450),
  p = n(997844);
l.Z = e => {
  let {
    entry: l,
    channel: n,
    style: t = {},
    onClose: r
  } = e, O = E.default.getUser(l.author_id), T = j.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, O), M = null == O ? void 0 : O.getAvatarURL(null == n ? void 0 : n.guild_id, 48, !1), [_, S] = a.useState(null), [C, f] = a.useState(!1);
  return (0, s.jsxs)("div", {
    className: A.profileEntryCard,
    style: t,
    children: [(0, s.jsx)("img", {
      className: A.avatar,
      src: M,
      alt: "TODO"
    }), (0, s.jsx)("div", {
      className: i()(A.collapsableRow, A.playerInfo, {
        [A.open]: !C,
        [A.closed]: C
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
          children: h.W.slice(0, 2).map((e, n) => (0, s.jsx)(e, {
            entry: l
          }, n))
        })]
      })
    }), (0, s.jsxs)("div", {
      className: i()(A.collapsableRow, A.inputWrapper, {
        [A.open]: C,
        [A.closed]: !C
      }),
      children: [(0, s.jsx)("div", {
        className: A.input,
        children: (0, s.jsx)(u.A7, {
          autoFocus: !1,
          setEditorRef: e => S(e),
          onEnter: async e => {
            let n = await d.Z.getOrEnsurePrivateChannel(l.author_id),
              s = v.Z.getChannel(n);
            o()(null != s, "DM channel cannot be null");
            let a = await (0, x.QC)(l, s);
            o()(null != a, "No image was generated"), (0, m.B)({
              file: a,
              channel: s,
              altText: "",
              reply: e
            }), r(), (0, I.Kh)(s.id)
          }
        })
      }), (0, s.jsx)(c.CircleIconButton, {
        size: c.CircleIconButtonSizes.SIZE_24,
        color: c.CircleIconButtonColors.PRIMARY,
        className: A.actionButton,
        tooltip: N.Z.Messages.CLOSE,
        onClick: () => {
          f(!1)
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
      className: i()(A.collapsableRow, {
        [A.open]: !C,
        [A.closed]: C
      }),
      children: (0, s.jsx)(c.CircleIconButton, {
        size: c.CircleIconButtonSizes.SIZE_24,
        color: c.CircleIconButtonColors.SECONDARY,
        className: i()(A.actionButton, A.messageButton),
        tooltip: N.Z.Messages.COMMAND_MSG_DESCRIPTION,
        onClick: () => {
          !C && (null == _ || _.focus(), f(!0))
        },
        icon: (0, s.jsx)(c.ChatIcon, {})
      })
    })]
  })
}