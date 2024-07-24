s(47120);
var n = s(735250),
  t = s(470079),
  r = s(120356),
  l = s.n(r),
  i = s(512722),
  E = s.n(i),
  c = s(442837),
  _ = s(481060),
  o = s(493683),
  I = s(220779),
  A = s(142550),
  u = s(201133),
  d = s(693824),
  O = s(919394),
  N = s(91140),
  R = s(297781),
  T = s(359110),
  m = s(592125),
  P = s(944486),
  g = s(594174),
  L = s(5192),
  M = s(810568),
  S = s(689938),
  G = s(340672),
  C = s(421377);
let f = e => {
  let {
entry: a,
setGeneratedImage: s,
nickName: r
  } = e, [i, c] = t.useState();
  return t.useEffect(() => {
(async () => {
  let e = await o.Z.getOrEnsurePrivateChannel(a.author_id),
    n = m.Z.getChannel(e);
  E()(null != n, 'DM channel cannot be null');
  let t = await (0, O.QC)(a, n, d.kH.Base64),
    r = await (0, O.QC)(a, n, d.kH.CloudUpload);
  c(t), s(r);
})();
  }, [
a,
s
  ]), (0, n.jsxs)('div', {
className: G.reactReplyPreviewWrapper,
children: [
  (0, n.jsx)('div', {
    className: l()(G.placeholderImage, null != i && G.in)
  }),
  null != i && (0, n.jsx)('img', {
    className: G.reactReplyPreview,
    src: i,
    alt: S.Z.Messages.GAME_PROFILE_GAME_REACT_REPLY_ALT.format({
      userName: r,
      gameName: a.extra.game_name
    })
  })
]
  });
};
a.Z = e => {
  let {
entry: a,
viewId: s,
style: r = {},
onClose: i
  } = e, d = (0, c.e7)([
P.Z,
m.Z
  ], () => m.Z.getChannel(P.Z.getChannelId())), O = (0, c.e7)([g.default], () => g.default.getUser(a.author_id)), {
nick: p,
avatar: h
  } = t.useMemo(() => {
let e = L.ZP.getName(null == d ? void 0 : d.guild_id, null == d ? void 0 : d.id, O);
return {
  nick: e,
  avatar: null == O ? void 0 : O.getAvatarURL(null == d ? void 0 : d.guild_id, 48, !1)
};
  }, [
O,
d
  ]), [x, v] = t.useState();
  return null == O ? null : (0, n.jsxs)('div', {
className: G.profileEntryCard,
style: r,
children: [
  (0, n.jsxs)('div', {
    className: l()(C.row, C.gapSm),
    style: r,
    children: [
      (0, n.jsx)('img', {
        className: G.avatar,
        src: h,
        alt: S.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({
          userName: p
        })
      }),
      (0, n.jsx)('div', {
        className: l()(G.playerInfo),
        children: (0, n.jsxs)('div', {
          className: l()(C.column, C.gapNone),
          children: [
            (0, n.jsxs)(_.Text, {
              variant: 'text-sm/bold',
              color: 'text-normal',
              lineClamp: 1,
              children: [
                p.slice(0, 18),
                ' ',
                p.length > 18 ? '...' : ''
              ]
            }),
            (0, n.jsx)(R.Gk, {
              location: R.Gt.GAME_PROFILE,
              children: N.W.map((e, s) => (0, n.jsx)(e, {
                entry: a
              }, s))
            })
          ]
        })
      })
    ]
  }),
  (0, n.jsx)('div', {
    className: G.reactions,
    children: (0, n.jsx)(I.ZP, {
      showReply: !0,
      showReact: !1,
      onInteraction: async e => {
        let {
          interactionType: n,
          reply: t
        } = e;
        if (n === A.L.ReplyBegin && (0, M.UE)({
            action: M.as.ClickMessageUser,
            applicationId: a.extra.application_id,
            gameName: a.extra.game_name,
            recipientUserId: a.author_id,
            viewId: s
          }), n === A.L.ReplySubmit) {
          (0, M.UE)({
            action: M.as.SendMessageUser,
            applicationId: a.extra.application_id,
            gameName: a.extra.game_name,
            recipientUserId: a.author_id,
            viewId: s
          });
          let e = await o.Z.getOrEnsurePrivateChannel(a.author_id),
            n = m.Z.getChannel(e);
          E()(null != n, 'GameProfile ReactReply - DM channel cannot be null'), E()(null != x, 'GameProfile ReactReply - Reaction Image cannot be null'), (0, u.B)({
            file: x,
            channel: n,
            altText: '',
            reply: null != t ? t : ''
          }), i(), (0, T.Kh)(n.id);
        }
      },
      popoutProps: {
        popoutBody: (0, n.jsx)(f, {
          entry: a,
          setGeneratedImage: v,
          nickName: p
        }),
        replyHeaderText: '',
        replyPlaceholder: S.Z.Messages.QUICK_DM_USER.format({
          name: p
        })
      }
    })
  })
]
  });
};