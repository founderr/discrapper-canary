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
  T = s(359110),
  m = s(592125),
  g = s(944486),
  P = s(594174),
  L = s(5192),
  M = s(810568),
  S = s(289538),
  f = s(689938),
  G = s(340672),
  h = s(421377);
let v = e => {
  let {
entry: a,
setGeneratedImage: s,
nickName: l
  } = e, [i, c] = t.useState();
  return t.useEffect(() => {
(async () => {
  let e = await _.Z.getOrEnsurePrivateChannel(a.author_id),
    n = m.Z.getChannel(e);
  o()(null != n, 'DM channel cannot be null');
  let t = await (0, N.QC)(a, n, A.kH.Base64),
    l = await (0, N.QC)(a, n, A.kH.CloudUpload);
  c(t), s(l);
})();
  }, [
a,
s
  ]), (0, n.jsxs)('div', {
className: G.reactReplyPreviewWrapper,
children: [
  (0, n.jsx)('div', {
    className: r()(G.placeholderImage, null != i && G.in)
  }),
  null != i && (0, n.jsx)('img', {
    className: G.reactReplyPreview,
    src: i,
    alt: f.Z.Messages.GAME_PROFILE_GAME_REACT_REPLY_ALT.format({
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
m.Z
  ], () => m.Z.getChannel(g.Z.getChannelId())), N = (0, c.e7)([P.default], () => P.default.getUser(a.author_id)), C = t.useMemo(() => L.ZP.getName(null == A ? void 0 : A.guild_id, null == A ? void 0 : A.id, N), [
N,
A
  ]), [p, x] = t.useState();
  return null == N ? null : (0, n.jsxs)('div', {
className: G.profileEntryCard,
style: l,
children: [
  (0, n.jsxs)('div', {
    className: r()(h.row, h.gapSm),
    style: l,
    children: [
      (0, n.jsx)(S.D, {
        user: N,
        channel: A
      }),
      (0, n.jsx)('div', {
        className: r()(G.playerInfo),
        children: (0, n.jsxs)('div', {
          className: r()(h.column, h.gapNone),
          children: [
            (0, n.jsxs)(E.Text, {
              variant: 'text-sm/bold',
              color: 'text-normal',
              lineClamp: 1,
              children: [
                C.slice(0, 18),
                ' ',
                C.length > 18 ? '...' : ''
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
    className: G.reactions,
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
            n = m.Z.getChannel(e);
          o()(null != n, 'GameProfile ReactReply - DM channel cannot be null'), o()(null != p, 'GameProfile ReactReply - Reaction Image cannot be null'), (0, I.B)({
            file: p,
            channel: n,
            altText: '',
            reply: null != t ? t : ''
          }), i(), (0, T.Kh)(n.id);
        }
      },
      popoutProps: {
        popoutBody: (0, n.jsx)(v, {
          entry: a,
          setGeneratedImage: x,
          nickName: C
        }),
        replyHeaderText: '',
        replyPlaceholder: f.Z.Messages.QUICK_DM_USER.format({
          name: C
        })
      }
    })
  })
]
  });
};