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
  g = a(201133),
  x = a(693824),
  I = a(919394),
  E = a(91140),
  _ = a(297781),
  v = a(359110),
  p = a(592125),
  M = a(944486),
  A = a(594174),
  N = a(5192),
  f = a(810568),
  O = a(689938),
  L = a(777450),
  j = a(997844);
let T = e => {
  let {
    entry: l,
    setGeneratedImage: a,
    nickName: t
  } = e, [r, c] = s.useState();
  return s.useEffect(() => {
    (async () => {
      let e = await u.Z.getOrEnsurePrivateChannel(l.author_id),
        n = p.Z.getChannel(e);
      o()(null != n, "DM channel cannot be null");
      let s = await (0, I.QC)(l, n, x.kH.Base64),
        t = await (0, I.QC)(l, n, x.kH.CloudUpload);
      c(s), a(t)
    })()
  }, [l, a]), (0, n.jsxs)("div", {
    className: L.reactReplyPreviewWrapper,
    children: [(0, n.jsx)("div", {
      className: i()(L.placeholderImage, null != r && L.in)
    }), null != r && (0, n.jsx)("img", {
      className: L.reactReplyPreview,
      src: r,
      alt: O.Z.Messages.GAME_PROFILE_GAME_REACT_REPLY_ALT.format({
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
  } = e, r = (0, c.e7)([M.Z, p.Z], () => p.Z.getChannel(M.Z.getChannelId())), x = (0, c.e7)([A.default], () => A.default.getUser(l.author_id)), {
    nick: I,
    avatar: S
  } = s.useMemo(() => {
    let e = N.ZP.getName(null == r ? void 0 : r.guild_id, null == r ? void 0 : r.id, x);
    return {
      nick: e,
      avatar: null == x ? void 0 : x.getAvatarURL(null == r ? void 0 : r.guild_id, 48, !1)
    }
  }, [x, r]), [P, G] = s.useState();
  return null == x ? null : (0, n.jsxs)("div", {
    className: L.profileEntryCard,
    style: a,
    children: [(0, n.jsxs)("div", {
      className: i()(j.row, j.gapSm),
      style: a,
      children: [(0, n.jsx)("img", {
        className: L.avatar,
        src: S,
        alt: O.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({
          userName: I
        })
      }), (0, n.jsx)("div", {
        className: i()(L.playerInfo),
        children: (0, n.jsxs)("div", {
          className: i()(j.column, j.gapNone),
          children: [(0, n.jsxs)(d.Text, {
            variant: "text-sm/bold",
            color: "text-normal",
            lineClamp: 1,
            children: [I.slice(0, 18), " ", I.length > 18 ? "..." : ""]
          }), (0, n.jsx)(_.Gk, {
            location: _.Gt.CARD,
            children: E.W.slice(0, 2).map((e, a) => (0, n.jsx)(e, {
              entry: l
            }, a))
          })]
        })
      })]
    }), (0, n.jsx)("div", {
      className: L.reactions,
      children: (0, n.jsx)(m.ZP, {
        showReply: !0,
        showReact: !1,
        onInteraction: async e => {
          let {
            interactionType: a,
            reply: n
          } = e;
          if (a === h.L.ReplyBegin && (0, f.U)({
              action: f.a.ClickMessageUser,
              applicationId: l.extra.application_id,
              gameName: l.extra.game_name,
              recipientUserId: l.author_id
            }), a === h.L.ReplySubmit) {
            (0, f.U)({
              action: f.a.SendMessageUser,
              applicationId: l.extra.application_id,
              gameName: l.extra.game_name,
              recipientUserId: l.author_id
            });
            let e = await u.Z.getOrEnsurePrivateChannel(l.author_id),
              a = p.Z.getChannel(e);
            o()(null != a, "GameProfile ReactReply - DM channel cannot be null"), o()(null != P, "GameProfile ReactReply - Reaction Image cannot be null"), (0, g.B)({
              file: P,
              channel: a,
              altText: "",
              reply: null != n ? n : ""
            }), t(), (0, v.Kh)(a.id)
          }
        },
        popoutProps: {
          popoutBody: (0, n.jsx)(T, {
            entry: l,
            setGeneratedImage: G,
            nickName: I
          }),
          replyHeaderText: "",
          replyPlaceholder: O.Z.Messages.QUICK_DM_USER.format({
            name: I
          })
        }
      })
    })]
  })
}