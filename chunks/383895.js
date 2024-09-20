var a = t(735250),
    r = t(470079),
    s = t(120356),
    o = t.n(s),
    i = t(442837),
    l = t(481060),
    c = t(178762),
    d = t(91140),
    u = t(297781),
    _ = t(592125),
    E = t(944486),
    I = t(594174),
    A = t(5192),
    p = t(810568),
    m = t(689938),
    T = t(501345),
    O = t(51527);
n.Z = (e) => {
    let { entry: n, viewId: t, officialGuildId: s, onClose: g } = e,
        R = (0, i.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
        N = (0, i.e7)([I.default], () => I.default.getUser(n.author_id)),
        { nick: P, avatar: h } = r.useMemo(() => {
            let e = null == N ? void 0 : N.getAvatarURL(null == R ? void 0 : R.guild_id, 48, !1);
            return {
                nick: A.ZP.getName(null == R ? void 0 : R.guild_id, null == R ? void 0 : R.id, N),
                avatar: e
            };
        }, [N, R]);
    return null == N
        ? null
        : (0, a.jsx)(l.Popout, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: r, updatePosition: o } = e;
                  return (0, a.jsx)(c.J, {
                      entry: n,
                      closePopout: r,
                      updatePopoutPosition: o,
                      onReaction: () => {
                          (0, p.UE)({
                              action: p.as.SendMessageUser,
                              applicationId: n.extra.application_id,
                              gameName: n.extra.game_name,
                              recipientUserId: n.author_id,
                              viewId: t,
                              officialGuildId: s
                          }),
                              g(),
                              r();
                      },
                      onUserPopoutClosed: () => r(),
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(n.id),
              onRequestOpen: () => {
                  (0, p.UE)({
                      action: p.as.ClickMessageUser,
                      applicationId: n.extra.application_id,
                      gameName: n.extra.game_name,
                      recipientUserId: n.author_id,
                      viewId: t,
                      officialGuildId: s
                  });
              },
              children: (e) =>
                  (0, a.jsx)(l.Clickable, {
                      ...e,
                      className: T.profileEntryCard,
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
                                      className: T.avatar,
                                      src: h,
                                      alt: m.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: P })
                                  }),
                                  (0, a.jsx)('div', {
                                      className: o()(T.playerInfo),
                                      children: (0, a.jsxs)('div', {
                                          className: o()(O.column, O.gapXs),
                                          children: [
                                              (0, a.jsx)(l.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: P
                                              }),
                                              (0, a.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, a.jsx)('div', {
                                      className: T.reactions,
                                      children: (0, a.jsx)(l.ArrowAngleLeftUpIcon, {})
                                  })
                              ]
                          })
                      })
                  })
          });
};
