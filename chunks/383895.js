s(47120);
var n = s(735250),
  t = s(470079),
  l = s(120356),
  r = s.n(l),
  i = s(512722),
  o = s.n(i),
  c = s(442837),
  E = s(481060),
  _ = s(493683),
  d = s(220779),
  u = s(142550),
  I = s(201133),
  A = s(693824),
  N = s(919394),
  O = s(91140),
  R = s(297781),
  m = s(359110),
  T = s(592125),
  g = s(944486),
  P = s(594174),
  L = s(5192),
  M = s(810568),
  S = s(689938),
  f = s(340672),
  G = s(421377);
let h = e => {
  let {
entry: a,
setGeneratedImage: s,
nickName: l
  } = e, [i, c] = t.useState();
  return t.useEffect(() => {
(async () => {
  let e = await _.Z.getOrEnsurePrivateChannel(a.author_id),
    n = T.Z.getChannel(e);
  o()(null != n, 'DM channel cannot be null');
  let t = await (0, N.QC)(a, n, A.kH.Base64),
    l = await (0, N.QC)(a, n, A.kH.CloudUpload);
  c(t), s(l);
})();
  }, [
a,
s
  ]), (0, n.jsxs)('div', {
className: f.reactReplyPreviewWrapper,
children: [
  (0, n.jsx)('div', {
    className: r()(f.placeholderImage, null != i && f.in)
  }),
  null != i && (0, n.jsx)('img', {
    className: f.reactReplyPreview,
    src: i,
    alt: S.Z.Messages.GAME_PROFILE_GAME_REACT_REPLY_ALT.format({
      userName: l,
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
style: l = {},
onClose: i
  } = e, A = (0, c.e7)([
g.Z,
T.Z
  ], () => T.Z.getChannel(g.Z.getChannelId())), N = (0, c.e7)([P.default], () => P.default.getUser(a.author_id)), {
nick: v,
avatar: C
  } = t.useMemo(() => {
let e = L.ZP.getName(null == A ? void 0 : A.guild_id, null == A ? void 0 : A.id, N);
return {
  nick: e,
  avatar: null == N ? void 0 : N.getAvatarURL(null == A ? void 0 : A.guild_id, 48, !1)
};
  }, [
N,
A
  ]), [x, p] = t.useState();
  return null == N ? null : (0, n.jsxs)('div', {
className: f.profileEntryCard,
style: l,
children: [
  (0, n.jsxs)('div', {
    className: r()(G.row, G.gapSm),
    style: l,
    children: [
      (0, n.jsx)('img', {
        className: f.avatar,
        src: C,
        alt: S.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({
          userName: v
        })
      }),
      (0, n.jsx)('div', {
        className: r()(f.playerInfo),
        children: (0, n.jsxs)('div', {
          className: r()(G.column, G.gapNone),
          children: [
            (0, n.jsxs)(E.Text, {
              variant: 'text-sm/bold',
              color: 'text-normal',
              lineClamp: 1,
              children: [
                v.slice(0, 18),
                ' ',
                v.length > 18 ? '...' : ''
              ]
            }),
            (0, n.jsx)(R.Gk, {
              location: R.Gt.GAME_PROFILE,
              children: O.W.map((e, s) => (0, n.jsx)(e, {
                entry: a
              }, s))
            })
          ]
        })
      })
    ]
  }),
  (0, n.jsx)('div', {
    className: f.reactions,
    children: (0, n.jsx)(d.ZP, {
      showReply: !0,
      showReact: !1,
      onInteraction: async e => {
        let {
          interactionType: n,
          reply: t
        } = e;
        if (n === u.L.ReplyBegin && (0, M.UE)({
            action: M.as.ClickMessageUser,
            applicationId: a.extra.application_id,
            gameName: a.extra.game_name,
            recipientUserId: a.author_id,
            viewId: s
          }), n === u.L.ReplySubmit) {
          (0, M.UE)({
            action: M.as.SendMessageUser,
            applicationId: a.extra.application_id,
            gameName: a.extra.game_name,
            recipientUserId: a.author_id,
            viewId: s
          });
          let e = await _.Z.getOrEnsurePrivateChannel(a.author_id),
            n = T.Z.getChannel(e);
          o()(null != n, 'GameProfile ReactReply - DM channel cannot be null'), o()(null != x, 'GameProfile ReactReply - Reaction Image cannot be null'), (0, I.B)({
            file: x,
            channel: n,
            altText: '',
            reply: null != t ? t : ''
          }), i(), (0, m.Kh)(n.id);
        }
      },
      popoutProps: {
        popoutBody: (0, n.jsx)(h, {
          entry: a,
          setGeneratedImage: p,
          nickName: v
        }),
        replyHeaderText: '',
        replyPlaceholder: S.Z.Messages.QUICK_DM_USER.format({
          name: v
        })
      }
    })
  })
]
  });
};