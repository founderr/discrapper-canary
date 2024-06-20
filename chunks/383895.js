s(47120);
var n = s(735250),
  a = s(470079),
  t = s(120356),
  i = s.n(t),
  o = s(512722),
  r = s.n(o),
  c = s(481060),
  d = s(493683),
  u = s(220779),
  m = s(201133),
  g = s(919394),
  x = s(91140),
  I = s(297781),
  h = s(359110),
  v = s(592125),
  E = s(594174),
  p = s(5192),
  j = s(689938),
  A = s(777450);
l.Z = e => {
  let {
    entry: l,
    channel: s,
    style: t = {},
    onClose: o
  } = e, N = E.default.getUser(l.author_id), O = p.ZP.getName(null == s ? void 0 : s.guild_id, null == s ? void 0 : s.id, N), _ = null == N ? void 0 : N.getAvatarURL(null == s ? void 0 : s.guild_id, 48, !1), [C, M] = a.useState(null), [T, R] = a.useState(!1);
  return (0, n.jsxs)("div", {
    className: A.profileEntryCard,
    style: t,
    children: [(0, n.jsx)("img", {
      src: _,
      style: {
        height: 24,
        width: 24,
        borderRadius: 12,
        marginRight: 8
      },
      alt: "TODO"
    }), (0, n.jsxs)("div", {
      className: i()(A.collapsableRow, A.playerInfo, {
        [A.open]: !T,
        [A.closed]: T
      }),
      children: [(0, n.jsxs)(c.Text, {
        variant: "text-sm/bold",
        color: "text-normal",
        lineClamp: 1,
        children: [O.slice(0, 18), " ", O.length > 18 ? "..." : ""]
      }), (0, n.jsx)(I.Gk, {
        location: I.Gt.CARD,
        children: x.W.slice(0, 1).map((e, s) => (0, n.jsx)(e, {
          entry: l
        }, s))
      })]
    }), (0, n.jsxs)("div", {
      className: i()(A.collapsableRow, A.inputWrapper, {
        [A.open]: T,
        [A.closed]: !T
      }),
      children: [(0, n.jsx)("div", {
        className: A.input,
        children: (0, n.jsx)(u.A7, {
          autoFocus: !1,
          setEditorRef: e => M(e),
          onEnter: async e => {
            let s = await d.Z.getOrEnsurePrivateChannel(l.author_id),
              n = v.Z.getChannel(s);
            r()(null != n, "DM channel cannot be null");
            let a = await (0, g.QC)(l, n);
            r()(null != a, "No image was generated"), (0, m.B)({
              file: a,
              channel: n,
              altText: "",
              reply: e
            }), o(), (0, h.Kh)(n.id)
          }
        })
      }), (0, n.jsx)(c.CircleIconButton, {
        size: c.CircleIconButtonSizes.SIZE_24,
        color: c.CircleIconButtonColors.PRIMARY,
        className: A.actionButton,
        tooltip: j.Z.Messages.CLOSE,
        onClick: () => {
          R(!1)
        },
        icon: (0, n.jsx)(c.CloseSmallIcon, {}),
        focusProps: {
          enabled: !1
        }
      })]
    }), (0, n.jsx)("div", {
      style: {
        justifyContent: "flex-end"
      },
      className: i()(A.collapsableRow, {
        [A.open]: !T,
        [A.closed]: T
      }),
      children: (0, n.jsx)(c.CircleIconButton, {
        size: c.CircleIconButtonSizes.SIZE_24,
        color: c.CircleIconButtonColors.SECONDARY,
        className: i()(A.actionButton, A.messageButton),
        tooltip: j.Z.Messages.COMMAND_MSG_DESCRIPTION,
        onClick: () => {
          !T && (null == C || C.focus(), R(!0))
        },
        icon: (0, n.jsx)(c.ChatIcon, {})
      })
    })]
  })
}