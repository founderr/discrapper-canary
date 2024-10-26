var a = n(200651),
    r = n(192379),
    s = n(120356),
    i = n.n(s),
    o = n(442837),
    l = n(481060),
    c = n(178762),
    d = n(91140),
    u = n(297781),
    _ = n(592125),
    E = n(944486),
    m = n(594174),
    I = n(5192),
    p = n(810568),
    A = n(689938),
    g = n(501345),
    T = n(51527);
t.Z = (e) => {
    let { entry: t, viewId: n, officialGuildId: s, onClose: f } = e,
        N = (0, o.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
        O = (0, o.e7)([m.default], () => m.default.getUser(t.author_id)),
        { nick: R, avatar: h } = r.useMemo(() => {
            let e = null == O ? void 0 : O.getAvatarURL(null == N ? void 0 : N.guild_id, 48, !1);
            return {
                nick: I.ZP.getName(null == N ? void 0 : N.guild_id, null == N ? void 0 : N.id, O),
                avatar: e
            };
        }, [O, N]);
    return null == O
        ? null
        : (0, a.jsx)(l.Popout, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: r, updatePosition: i } = e;
                  return (0, a.jsx)(c.J, {
                      entry: t,
                      closePopout: r,
                      updatePopoutPosition: i,
                      onReaction: () => {
                          (0, p.UE)({
                              action: p.as.SendMessageUser,
                              applicationId: t.extra.application_id,
                              gameName: t.extra.game_name,
                              recipientUserId: t.author_id,
                              viewId: n,
                              officialGuildId: s
                          }),
                              f(),
                              r();
                      },
                      onUserPopoutClosed: () => r(),
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(t.id),
              onRequestOpen: () => {
                  (0, p.UE)({
                      action: p.as.ClickMessageUser,
                      applicationId: t.extra.application_id,
                      gameName: t.extra.game_name,
                      recipientUserId: t.author_id,
                      viewId: n,
                      officialGuildId: s
                  });
              },
              children: (e) =>
                  (0, a.jsx)(l.Clickable, {
                      ...e,
                      className: g.profileEntryCard,
                      children: (0, a.jsx)(l.FocusRing, {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          },
                          children: (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)('img', {
                                      className: g.avatar,
                                      src: h,
                                      alt: A.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: R })
                                  }),
                                  (0, a.jsx)('div', {
                                      className: i()(g.playerInfo),
                                      children: (0, a.jsxs)('div', {
                                          className: i()(T.column, T.gapXs),
                                          children: [
                                              (0, a.jsx)(l.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: R
                                              }),
                                              (0, a.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, n) => (0, a.jsx)(e, { entry: t }, n))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, a.jsx)('div', {
                                      className: g.reactions,
                                      children: (0, a.jsx)(l.ArrowAngleLeftUpIcon, { size: 'sm' })
                                  })
                              ]
                          })
                      })
                  })
          });
};
