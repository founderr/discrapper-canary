a(47120);
var n = a(735250),
  s = a(470079),
  t = a(120356),
  i = a.n(t),
  r = a(512722),
  o = a.n(r),
  c = a(442837),
  d = a(481060),
  u = a(493683),
  m = a(220779),
  h = a(142550),
  x = a(201133),
  g = a(693824),
  E = a(919394),
  I = a(91140),
  v = a(297781),
  _ = a(359110),
  A = a(592125),
  M = a(944486),
  p = a(594174),
  N = a(5192),
  j = a(689938),
  O = a(777450),
  T = a(997844);
let f = e => {
  let {
    entry: l,
    setGeneratedImage: a,
    nickName: t
  } = e, [r, c] = s.useState();
  return s.useEffect(() => {
    (async () => {
      let e = await u.Z.getOrEnsurePrivateChannel(l.author_id),
        n = A.Z.getChannel(e);
      o()(null != n, "DM channel cannot be null");
      let s = await (0, E.QC)(l, n, g.kH.Base64),
        t = await (0, E.QC)(l, n, g.kH.CloudUpload);
      c(s), a(t)
    })()
  }, [l, a]), (0, n.jsxs)("div", {
    className: O.reactReplyPreviewWrapper,
    children: [(0, n.jsx)("div", {
      className: i()(O.placeholderImage, null != r && O.in)
    }), null != r && (0, n.jsx)("img", {
      className: O.reactReplyPreview,
      src: r,
      alt: j.Z.Messages.GAME_PROFILE_GAME_REACT_REPLY_ALT.format({
        userName: t,
        gameName: l.extra.game_name
      })
    })]
  })
};
l.Z = e => {
  let {
    entry: l,
    style: a = {},
    onClose: t
  } = e, r = (0, c.e7)([M.Z, A.Z], () => A.Z.getChannel(M.Z.getChannelId())), g = (0, c.e7)([p.default], () => p.default.getUser(l.author_id)), {
    nick: E,
    avatar: L
  } = s.useMemo(() => {
    let e = N.ZP.getName(null == r ? void 0 : r.guild_id, null == r ? void 0 : r.id, g);
    return {
      nick: e,
      avatar: null == g ? void 0 : g.getAvatarURL(null == r ? void 0 : r.guild_id, 48, !1)
    }
  }, [g, r]), [P, R] = s.useState();
  return null == g ? null : (0, n.jsxs)("div", {
    className: O.profileEntryCard,
    style: a,
    children: [(0, n.jsxs)("div", {
      className: i()(T.row, T.gapSm),
      style: a,
      children: [(0, n.jsx)("img", {
        className: O.avatar,
        src: L,
        alt: j.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({
          userName: E
        })
      }), (0, n.jsx)("div", {
        className: i()(O.playerInfo),
        children: (0, n.jsxs)("div", {
          className: i()(T.column, T.gapNone),
          children: [(0, n.jsxs)(d.Text, {
            variant: "text-sm/bold",
            color: "text-normal",
            lineClamp: 1,
            children: [E.slice(0, 18), " ", E.length > 18 ? "..." : ""]
          }), (0, n.jsx)(v.Gk, {
            location: v.Gt.CARD,
            children: I.W.slice(0, 2).map((e, a) => (0, n.jsx)(e, {
              entry: l
            }, a))
          })]
        })
      })]
    }), (0, n.jsx)("div", {
      className: O.reactions,
      children: (0, n.jsx)(m.ZP, {
        showReply: !0,
        showReact: !1,
        onInteraction: async e => {
          let {
            interactionType: a,
            reply: n
          } = e;
          if (a === h.L.ReplySubmit) {
            let e = await u.Z.getOrEnsurePrivateChannel(l.author_id),
              a = A.Z.getChannel(e);
            o()(null != a, "GameProfile ReactReply - DM channel cannot be null"), o()(null != P, "GameProfile ReactReply - Reaction Image cannot be null"), (0, x.B)({
              file: P,
              channel: a,
              altText: "",
              reply: null != n ? n : ""
            }), t(), (0, _.Kh)(a.id)
          }
        },
        popoutProps: {
          popoutBody: (0, n.jsx)(f, {
            entry: l,
            setGeneratedImage: R,
            nickName: E
          }),
          replyHeaderText: "",
          replyPlaceholder: j.Z.Messages.QUICK_DM_USER.format({
            name: E
          })
        }
      })
    })]
  })
}