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
  h = n(919394),
  x = n(91140),
  g = n(297781),
  E = n(359110),
  I = n(592125),
  v = n(594174),
  p = n(5192),
  j = n(689938),
  N = n(777450),
  A = n(997844);
l.Z = e => {
  let {
    entry: l,
    channel: n,
    style: t = {},
    onClose: r
  } = e, M = v.default.getUser(l.author_id), O = p.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, M), T = null == M ? void 0 : M.getAvatarURL(null == n ? void 0 : n.guild_id, 48, !1), [_, f] = a.useState(null), [S, C] = a.useState(!1);
  return (0, s.jsxs)("div", {
    className: N.profileEntryCard,
    style: t,
    children: [(0, s.jsx)("img", {
      className: N.avatar,
      src: T,
      alt: "TODO"
    }), (0, s.jsx)("div", {
      className: i()(N.collapsableRow, N.playerInfo, {
        [N.open]: !S,
        [N.closed]: S
      }),
      children: (0, s.jsxs)("div", {
        className: i()(A.column, A.gapNone),
        children: [(0, s.jsxs)(c.Text, {
          variant: "text-sm/bold",
          color: "text-normal",
          lineClamp: 1,
          children: [O.slice(0, 18), " ", O.length > 18 ? "..." : ""]
        }), (0, s.jsx)(g.Gk, {
          location: g.Gt.CARD,
          children: x.W.slice(0, 2).map((e, n) => (0, s.jsx)(e, {
            entry: l
          }, n))
        })]
      })
    }), (0, s.jsxs)("div", {
      className: i()(N.collapsableRow, N.inputWrapper, {
        [N.open]: S,
        [N.closed]: !S
      }),
      children: [(0, s.jsx)("div", {
        className: N.input,
        children: (0, s.jsx)(u.A7, {
          autoFocus: !1,
          setEditorRef: e => f(e),
          onEnter: async e => {
            let n = await d.Z.getOrEnsurePrivateChannel(l.author_id),
              s = I.Z.getChannel(n);
            o()(null != s, "DM channel cannot be null");
            let a = await (0, h.QC)(l, s);
            o()(null != a, "No image was generated"), (0, m.B)({
              file: a,
              channel: s,
              altText: "",
              reply: e
            }), r(), (0, E.Kh)(s.id)
          }
        })
      }), (0, s.jsx)(c.CircleIconButton, {
        size: c.CircleIconButtonSizes.SIZE_24,
        color: c.CircleIconButtonColors.PRIMARY,
        className: N.actionButton,
        tooltip: j.Z.Messages.CLOSE,
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
        [N.open]: !S,
        [N.closed]: S
      }),
      children: (0, s.jsx)(c.CircleIconButton, {
        size: c.CircleIconButtonSizes.SIZE_24,
        color: c.CircleIconButtonColors.SECONDARY,
        className: i()(N.actionButton, N.messageButton),
        tooltip: j.Z.Messages.COMMAND_MSG_DESCRIPTION,
        onClick: () => {
          !S && (null == _ || _.focus(), C(!0))
        },
        icon: (0, s.jsx)(c.ChatIcon, {})
      })
    })]
  })
}