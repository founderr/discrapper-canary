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
  x = n(919394),
  h = n(91140),
  g = n(297781),
  I = n(359110),
  E = n(592125),
  v = n(594174),
  j = n(5192),
  A = n(689938),
  O = n(777450);
l.Z = e => {
  let {
    entry: l,
    channel: n,
    style: a = {},
    onClose: r
  } = e, p = v.default.getUser(l.author_id), T = j.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, p), N = null == p ? void 0 : p.getAvatarURL(null == n ? void 0 : n.guild_id, 48, !1), [_, M] = t.useState(null), [S, C] = t.useState(!1);
  return (0, s.jsxs)("div", {
    className: O.profileEntryCard,
    style: a,
    children: [(0, s.jsx)("img", {
      src: N,
      style: {
        height: 24,
        width: 24,
        borderRadius: 12,
        marginRight: 8
      },
      alt: "TODO"
    }), (0, s.jsxs)("div", {
      className: i()(O.collapsableRow, O.playerInfo, {
        [O.open]: !S,
        [O.closed]: S
      }),
      children: [(0, s.jsxs)(c.Text, {
        variant: "text-sm/bold",
        color: "text-normal",
        lineClamp: 1,
        children: [T.slice(0, 18), " ", T.length > 18 ? "..." : ""]
      }), (0, s.jsx)(g.Gk, {
        location: g.Gt.CARD,
        children: h.W.slice(0, 1).map((e, n) => (0, s.jsx)(e, {
          entry: l
        }, n))
      })]
    }), (0, s.jsxs)("div", {
      className: i()(O.collapsableRow, O.inputWrapper, {
        [O.open]: S,
        [O.closed]: !S
      }),
      children: [(0, s.jsx)("div", {
        className: O.input,
        children: (0, s.jsx)(u.A7, {
          autoFocus: !1,
          setEditorRef: e => M(e),
          onEnter: async e => {
            let n = await d.Z.getOrEnsurePrivateChannel(l.author_id),
              s = E.Z.getChannel(n);
            o()(null != s, "DM channel cannot be null");
            let t = await (0, x.QC)(l, s);
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
        className: O.actionButton,
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
      className: i()(O.collapsableRow, {
        [O.open]: !S,
        [O.closed]: S
      }),
      children: (0, s.jsx)(c.CircleIconButton, {
        size: c.CircleIconButtonSizes.SIZE_24,
        color: c.CircleIconButtonColors.SECONDARY,
        className: i()(O.actionButton, O.messageButton),
        tooltip: A.Z.Messages.COMMAND_MSG_DESCRIPTION,
        onClick: () => {
          !S && (null == _ || _.focus(), C(!0))
        },
        icon: (0, s.jsx)(c.ChatIcon, {})
      })
    })]
  })
}