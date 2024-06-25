n(47120);
var s = n(735250),
  t = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(512722),
  o = n.n(r),
  c = n(442837),
  d = n(481060),
  u = n(493683),
  m = n(232567),
  h = n(220779),
  x = n(201133),
  I = n(919394),
  g = n(91140),
  E = n(297781),
  v = n(359110),
  N = n(592125),
  p = n(594174),
  j = n(5192),
  M = n(689938),
  A = n(777450),
  _ = n(997844);
l.Z = e => {
  let {
    entry: l,
    channel: n,
    style: a = {},
    onClose: r
  } = e, O = (0, c.e7)([p.default], () => p.default.getUser(l.author_id)), [T, f] = t.useState(null), [L, S] = t.useState(!1), {
    nick: C,
    avatar: P
  } = t.useMemo(() => {
    let e = j.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, O);
    return {
      nick: e,
      avatar: null == O ? void 0 : O.getAvatarURL(null == n ? void 0 : n.guild_id, 48, !1)
    }
  }, [O, n]);
  return (t.useEffect(() => {
    null == O && (0, m.PR)(l.author_id)
  }, [O, l.author_id]), null == O) ? null : (0, s.jsxs)("div", {
    className: A.profileEntryCard,
    style: a,
    children: [(0, s.jsx)("img", {
      className: A.avatar,
      src: P,
      alt: "TODO"
    }), (0, s.jsx)("div", {
      className: i()(A.collapsableRow, A.playerInfo, {
        [A.open]: !L,
        [A.closed]: L
      }),
      children: (0, s.jsxs)("div", {
        className: i()(_.column, _.gapNone),
        children: [(0, s.jsxs)(d.Text, {
          variant: "text-sm/bold",
          color: "text-normal",
          lineClamp: 1,
          children: [C.slice(0, 18), " ", C.length > 18 ? "..." : ""]
        }), (0, s.jsx)(E.Gk, {
          location: E.Gt.CARD,
          children: g.W.slice(0, 2).map((e, n) => (0, s.jsx)(e, {
            entry: l
          }, n))
        })]
      })
    }), (0, s.jsxs)("div", {
      className: i()(A.collapsableRow, A.inputWrapper, {
        [A.open]: L,
        [A.closed]: !L
      }),
      children: [(0, s.jsx)("div", {
        className: A.input,
        children: (0, s.jsx)(h.A7, {
          autoFocus: !1,
          setEditorRef: e => f(e),
          onEnter: async e => {
            let n = await u.Z.getOrEnsurePrivateChannel(l.author_id),
              s = N.Z.getChannel(n);
            o()(null != s, "DM channel cannot be null");
            let t = await (0, I.QC)(l, s);
            o()(null != t, "No image was generated"), (0, x.B)({
              file: t,
              channel: s,
              altText: "",
              reply: e
            }), r(), (0, v.Kh)(s.id)
          }
        })
      }), (0, s.jsx)(d.CircleIconButton, {
        size: d.CircleIconButtonSizes.SIZE_24,
        color: d.CircleIconButtonColors.PRIMARY,
        className: A.actionButton,
        tooltip: M.Z.Messages.CLOSE,
        onClick: () => {
          S(!1)
        },
        icon: (0, s.jsx)(d.CloseSmallIcon, {}),
        focusProps: {
          enabled: !1
        }
      })]
    }), (0, s.jsx)("div", {
      style: {
        justifyContent: "flex-end"
      },
      className: i()(A.collapsableRow, {
        [A.open]: !L,
        [A.closed]: L
      }),
      children: (0, s.jsx)(d.CircleIconButton, {
        size: d.CircleIconButtonSizes.SIZE_24,
        color: d.CircleIconButtonColors.SECONDARY,
        className: i()(A.actionButton, A.messageButton),
        tooltip: M.Z.Messages.COMMAND_MSG_DESCRIPTION,
        onClick: () => {
          !L && (null == T || T.focus(), S(!0))
        },
        icon: (0, s.jsx)(d.ChatIcon, {})
      })
    })]
  })
}