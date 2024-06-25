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
  I = n(297781),
  g = n(359110),
  E = n(592125),
  v = n(594174),
  N = n(5192),
  p = n(689938),
  j = n(777450),
  A = n(997844);
l.Z = e => {
  let {
    entry: l,
    channel: n,
    style: a = {},
    onClose: r
  } = e, M = v.default.getUser(l.author_id), _ = N.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, M), O = null == M ? void 0 : M.getAvatarURL(null == n ? void 0 : n.guild_id, 48, !1), [T, f] = t.useState(null), [L, S] = t.useState(!1);
  return (0, s.jsxs)("div", {
    className: j.profileEntryCard,
    style: a,
    children: [(0, s.jsx)("img", {
      className: j.avatar,
      src: O,
      alt: "TODO"
    }), (0, s.jsx)("div", {
      className: i()(j.collapsableRow, j.playerInfo, {
        [j.open]: !L,
        [j.closed]: L
      }),
      children: (0, s.jsxs)("div", {
        className: i()(A.column, A.gapNone),
        children: [(0, s.jsxs)(c.Text, {
          variant: "text-sm/bold",
          color: "text-normal",
          lineClamp: 1,
          children: [_.slice(0, 18), " ", _.length > 18 ? "..." : ""]
        }), (0, s.jsx)(I.Gk, {
          location: I.Gt.CARD,
          children: x.W.slice(0, 2).map((e, n) => (0, s.jsx)(e, {
            entry: l
          }, n))
        })]
      })
    }), (0, s.jsxs)("div", {
      className: i()(j.collapsableRow, j.inputWrapper, {
        [j.open]: L,
        [j.closed]: !L
      }),
      children: [(0, s.jsx)("div", {
        className: j.input,
        children: (0, s.jsx)(u.A7, {
          autoFocus: !1,
          setEditorRef: e => f(e),
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
            }), r(), (0, g.Kh)(s.id)
          }
        })
      }), (0, s.jsx)(c.CircleIconButton, {
        size: c.CircleIconButtonSizes.SIZE_24,
        color: c.CircleIconButtonColors.PRIMARY,
        className: j.actionButton,
        tooltip: p.Z.Messages.CLOSE,
        onClick: () => {
          S(!1)
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
      className: i()(j.collapsableRow, {
        [j.open]: !L,
        [j.closed]: L
      }),
      children: (0, s.jsx)(c.CircleIconButton, {
        size: c.CircleIconButtonSizes.SIZE_24,
        color: c.CircleIconButtonColors.SECONDARY,
        className: i()(j.actionButton, j.messageButton),
        tooltip: p.Z.Messages.COMMAND_MSG_DESCRIPTION,
        onClick: () => {
          !L && (null == T || T.focus(), S(!0))
        },
        icon: (0, s.jsx)(c.ChatIcon, {})
      })
    })]
  })
}