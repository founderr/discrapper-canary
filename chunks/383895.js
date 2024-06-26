a(47120);
var n = a(735250),
  s = a(470079),
  t = a(120356),
  i = a.n(t),
  r = a(512722),
  o = a.n(r),
  c = a(481060),
  d = a(493683),
  u = a(220779),
  m = a(142550),
  h = a(201133),
  x = a(693824),
  E = a(919394),
  g = a(91140),
  I = a(297781),
  v = a(359110),
  _ = a(592125),
  A = a(594174),
  M = a(5192),
  p = a(689938),
  N = a(777450),
  j = a(997844);
let O = e => {
  let {
    entry: l,
    setGeneratedImage: a,
    nickName: t
  } = e, [r, c] = s.useState();
  return s.useEffect(() => {
    (async () => {
      let e = await d.Z.getOrEnsurePrivateChannel(l.author_id),
        n = _.Z.getChannel(e);
      o()(null != n, "DM channel cannot be null");
      let s = await (0, E.QC)(l, n, x.kH.Base64),
        t = await (0, E.QC)(l, n, x.kH.CloudUpload);
      c(s), a(t)
    })()
  }, [l, a]), (0, n.jsxs)("div", {
    className: N.reactReplyPreviewWrapper,
    children: [(0, n.jsx)("div", {
      className: i()(N.placeholderImage, null != r && N.in)
    }), null != r && (0, n.jsx)("img", {
      className: N.reactReplyPreview,
      src: r,
      alt: p.Z.Messages.GAME_PROFILE_GAME_REACT_REPLY_ALT.format({
        userName: t,
        gameName: l.extra.game_name
      })
    })]
  })
};
l.Z = e => {
  let {
    entry: l,
    channel: a,
    style: t = {},
    onClose: r
  } = e, x = A.default.getUser(l.author_id), {
    nick: E,
    avatar: T
  } = s.useMemo(() => {
    let e = M.ZP.getName(null == a ? void 0 : a.guild_id, null == a ? void 0 : a.id, x);
    return {
      nick: e,
      avatar: null == x ? void 0 : x.getAvatarURL(null == a ? void 0 : a.guild_id, 48, !1)
    }
  }, [x, a]), [f, L] = s.useState();
  return null == x ? null : (0, n.jsxs)("div", {
    className: N.profileEntryCard,
    style: t,
    children: [(0, n.jsxs)("div", {
      className: i()(j.row, j.gapSm),
      style: t,
      children: [(0, n.jsx)("img", {
        className: N.avatar,
        src: T,
        alt: p.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({
          userName: E
        })
      }), (0, n.jsx)("div", {
        className: i()(N.playerInfo),
        children: (0, n.jsxs)("div", {
          className: i()(j.column, j.gapNone),
          children: [(0, n.jsxs)(c.Text, {
            variant: "text-sm/bold",
            color: "text-normal",
            lineClamp: 1,
            children: [E.slice(0, 18), " ", E.length > 18 ? "..." : ""]
          }), (0, n.jsx)(I.Gk, {
            location: I.Gt.CARD,
            children: g.W.slice(0, 2).map((e, a) => (0, n.jsx)(e, {
              entry: l
            }, a))
          })]
        })
      })]
    }), (0, n.jsx)("div", {
      className: N.reactions,
      children: (0, n.jsx)(u.ZP, {
        showReply: !0,
        showReact: !1,
        onInteraction: async e => {
          let {
            interactionType: a,
            reply: n
          } = e;
          if (a === m.L.ReplySubmit) {
            let e = await d.Z.getOrEnsurePrivateChannel(l.author_id),
              a = _.Z.getChannel(e);
            o()(null != a, "GameProfile ReactReply - DM channel cannot be null"), o()(null != f, "GameProfile ReactReply - Reaction Image cannot be null"), (0, h.B)({
              file: f,
              channel: a,
              altText: "",
              reply: null != n ? n : ""
            }), r(), (0, v.Kh)(a.id)
          }
        },
        popoutProps: {
          popoutBody: (0, n.jsx)(O, {
            entry: l,
            setGeneratedImage: L,
            nickName: E
          }),
          replyHeaderText: "",
          replyPlaceholder: p.Z.Messages.QUICK_DM_USER.format({
            name: E
          })
        }
      })
    })]
  })
}