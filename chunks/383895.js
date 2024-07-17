s(47120);
var n = s(735250),
  t = s(470079),
  r = s(120356),
  l = s.n(r),
  i = s(512722),
  c = s.n(i),
  E = s(442837),
  o = s(481060),
  _ = s(493683),
  I = s(220779),
  d = s(142550),
  u = s(201133),
  A = s(693824),
  O = s(919394),
  R = s(91140),
  N = s(297781),
  T = s(359110),
  m = s(592125),
  g = s(944486),
  P = s(594174),
  L = s(5192),
  M = s(810568),
  S = s(689938),
  G = s(340672),
  h = s(421377);
let C = e => {
  let {
entry: a,
setGeneratedImage: s,
nickName: r
  } = e, [i, E] = t.useState();
  return t.useEffect(() => {
(async () => {
  let e = await _.Z.getOrEnsurePrivateChannel(a.author_id),
    n = m.Z.getChannel(e);
  c()(null != n, 'DM channel cannot be null');
  let t = await (0, O.QC)(a, n, A.kH.Base64),
    r = await (0, O.QC)(a, n, A.kH.CloudUpload);
  E(t), s(r);
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
  } = e, A = (0, E.e7)([
g.Z,
m.Z
  ], () => m.Z.getChannel(g.Z.getChannelId())), O = (0, E.e7)([P.default], () => P.default.getUser(a.author_id)), {
nick: f,
avatar: p
  } = t.useMemo(() => {
let e = L.ZP.getName(null == A ? void 0 : A.guild_id, null == A ? void 0 : A.id, O);
return {
  nick: e,
  avatar: null == O ? void 0 : O.getAvatarURL(null == A ? void 0 : A.guild_id, 48, !1)
};
  }, [
O,
A
  ]), [x, v] = t.useState();
  return null == O ? null : (0, n.jsxs)('div', {
className: G.profileEntryCard,
style: r,
children: [
  (0, n.jsxs)('div', {
    className: l()(h.row, h.gapSm),
    style: r,
    children: [
      (0, n.jsx)('img', {
        className: G.avatar,
        src: p,
        alt: S.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({
          userName: f
        })
      }),
      (0, n.jsx)('div', {
        className: l()(G.playerInfo),
        children: (0, n.jsxs)('div', {
          className: l()(h.column, h.gapNone),
          children: [
            (0, n.jsxs)(o.Text, {
              variant: 'text-sm/bold',
              color: 'text-normal',
              lineClamp: 1,
              children: [
                f.slice(0, 18),
                ' ',
                f.length > 18 ? '...' : ''
              ]
            }),
            (0, n.jsx)(N.Gk, {
              location: N.Gt.GAME_PROFILE,
              children: R.W.map((e, s) => (0, n.jsx)(e, {
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
        if (n === d.L.ReplyBegin && (0, M.UE)({
            action: M.as.ClickMessageUser,
            applicationId: a.extra.application_id,
            gameName: a.extra.game_name,
            recipientUserId: a.author_id,
            viewId: s
          }), n === d.L.ReplySubmit) {
          (0, M.UE)({
            action: M.as.SendMessageUser,
            applicationId: a.extra.application_id,
            gameName: a.extra.game_name,
            recipientUserId: a.author_id,
            viewId: s
          });
          let e = await _.Z.getOrEnsurePrivateChannel(a.author_id),
            n = m.Z.getChannel(e);
          c()(null != n, 'GameProfile ReactReply - DM channel cannot be null'), c()(null != x, 'GameProfile ReactReply - Reaction Image cannot be null'), (0, u.B)({
            file: x,
            channel: n,
            altText: '',
            reply: null != t ? t : ''
          }), i(), (0, T.Kh)(n.id);
        }
      },
      popoutProps: {
        popoutBody: (0, n.jsx)(C, {
          entry: a,
          setGeneratedImage: v,
          nickName: f
        }),
        replyHeaderText: '',
        replyPlaceholder: S.Z.Messages.QUICK_DM_USER.format({
          name: f
        })
      }
    })
  })
]
  });
};