a(47120);
var n = a(735250),
    r = a(470079),
    l = a(120356),
    t = a.n(l),
    i = a(512722),
    o = a.n(i),
    E = a(442837),
    c = a(481060),
    _ = a(493683),
    u = a(220779),
    I = a(142550),
    d = a(201133),
    A = a(693824),
    R = a(919394),
    N = a(91140),
    O = a(297781),
    T = a(359110),
    m = a(592125),
    g = a(944486),
    L = a(594174),
    M = a(5192),
    P = a(810568),
    S = a(289538),
    G = a(689938),
    f = a(255341),
    C = a(707443);
let h = (e) => {
    let { entry: s, setGeneratedImage: a, nickName: l } = e,
        [i, E] = r.useState();
    return (
        r.useEffect(() => {
            (async () => {
                let e = await _.Z.getOrEnsurePrivateChannel(s.author_id),
                    n = m.Z.getChannel(e);
                o()(null != n, 'DM channel cannot be null');
                let r = await (0, R.QC)(s, n, A.kH.Base64),
                    l = await (0, R.QC)(s, n, A.kH.CloudUpload);
                E(r), a(l);
            })();
        }, [s, a]),
        (0, n.jsxs)('div', {
            className: f.reactReplyPreviewWrapper,
            children: [
                (0, n.jsx)('div', { className: t()(f.placeholderImage, null != i && f.in) }),
                null != i &&
                    (0, n.jsx)('img', {
                        className: f.reactReplyPreview,
                        src: i,
                        alt: G.Z.Messages.GAME_PROFILE_GAME_REACT_REPLY_ALT.format({
                            userName: l,
                            gameName: s.extra.game_name
                        })
                    })
            ]
        })
    );
};
s.Z = (e) => {
    let { entry: s, viewId: a, style: l = {}, onClose: i } = e,
        A = (0, E.e7)([g.Z, m.Z], () => m.Z.getChannel(g.Z.getChannelId())),
        R = (0, E.e7)([L.default], () => L.default.getUser(s.author_id)),
        v = r.useMemo(() => M.ZP.getName(null == A ? void 0 : A.guild_id, null == A ? void 0 : A.id, R), [R, A]),
        [x, p] = r.useState();
    return null == R
        ? null
        : (0, n.jsxs)('div', {
              className: f.profileEntryCard,
              style: l,
              children: [
                  (0, n.jsxs)('div', {
                      className: t()(C.row, C.gapSm),
                      style: l,
                      children: [
                          (0, n.jsx)(S.D, {
                              user: R,
                              channel: A
                          }),
                          (0, n.jsx)(c.Spacer, { size: 10 }),
                          (0, n.jsx)('div', {
                              className: t()(f.playerInfo),
                              children: (0, n.jsxs)('div', {
                                  className: t()(C.column, C.gapXs),
                                  children: [
                                      (0, n.jsx)(c.Text, {
                                          variant: 'text-md/medium',
                                          color: 'text-primary',
                                          lineClamp: 1,
                                          children: v
                                      }),
                                      (0, n.jsx)(O.Gk, {
                                          location: O.Gt.GAME_PROFILE,
                                          children: N.W.map((e, a) => (0, n.jsx)(e, { entry: s }, a))
                                      })
                                  ]
                              })
                          })
                      ]
                  }),
                  (0, n.jsx)('div', {
                      className: f.reactions,
                      children: (0, n.jsx)(u.ZP, {
                          showReply: !0,
                          showReact: !1,
                          onInteraction: async (e) => {
                              let { interactionType: n, reply: r } = e;
                              if (
                                  (n === I.L.ReplyBegin &&
                                      (0, P.UE)({
                                          action: P.as.ClickMessageUser,
                                          applicationId: s.extra.application_id,
                                          gameName: s.extra.game_name,
                                          recipientUserId: s.author_id,
                                          viewId: a
                                      }),
                                  n === I.L.ReplySubmit)
                              ) {
                                  (0, P.UE)({
                                      action: P.as.SendMessageUser,
                                      applicationId: s.extra.application_id,
                                      gameName: s.extra.game_name,
                                      recipientUserId: s.author_id,
                                      viewId: a
                                  });
                                  let e = await _.Z.getOrEnsurePrivateChannel(s.author_id),
                                      n = m.Z.getChannel(e);
                                  o()(null != n, 'GameProfile ReactReply - DM channel cannot be null'),
                                      o()(null != x, 'GameProfile ReactReply - Reaction Image cannot be null'),
                                      (0, d.B)({
                                          file: x,
                                          channel: n,
                                          altText: '',
                                          reply: null != r ? r : ''
                                      }),
                                      i(),
                                      (0, T.Kh)(n.id);
                              }
                          },
                          popoutProps: {
                              popoutBody: (0, n.jsx)(h, {
                                  entry: s,
                                  setGeneratedImage: p,
                                  nickName: v
                              }),
                              replyHeaderText: '',
                              replyPlaceholder: G.Z.Messages.QUICK_DM_USER.format({ name: v })
                          }
                      })
                  })
              ]
          });
};
