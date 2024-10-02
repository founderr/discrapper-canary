var t = n(735250),
    i = n(470079),
    o = n(120356),
    r = n.n(o),
    l = n(442837),
    s = n(481060),
    c = n(178762),
    d = n(91140),
    u = n(297781),
    m = n(592125),
    p = n(944486),
    g = n(594174),
    f = n(5192),
    _ = n(810568),
    x = n(689938),
    v = n(501345),
    h = n(51527);
a.Z = (e) => {
    let { entry: a, viewId: n, officialGuildId: o, onClose: I } = e,
        E = (0, l.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getChannelId())),
        A = (0, l.e7)([g.default], () => g.default.getUser(a.author_id)),
        { nick: j, avatar: C } = i.useMemo(() => {
            let e = null == A ? void 0 : A.getAvatarURL(null == E ? void 0 : E.guild_id, 48, !1);
            return {
                nick: f.ZP.getName(null == E ? void 0 : E.guild_id, null == E ? void 0 : E.id, A),
                avatar: e
            };
        }, [A, E]);
    return null == A
        ? null
        : (0, t.jsx)(s.Popout, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: i, updatePosition: r } = e;
                  return (0, t.jsx)(c.J, {
                      entry: a,
                      closePopout: i,
                      updatePopoutPosition: r,
                      onReaction: () => {
                          (0, _.UE)({
                              action: _.as.SendMessageUser,
                              applicationId: a.extra.application_id,
                              gameName: a.extra.game_name,
                              recipientUserId: a.author_id,
                              viewId: n,
                              officialGuildId: o
                          }),
                              I(),
                              i();
                      },
                      onUserPopoutClosed: () => i(),
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(a.id),
              onRequestOpen: () => {
                  (0, _.UE)({
                      action: _.as.ClickMessageUser,
                      applicationId: a.extra.application_id,
                      gameName: a.extra.game_name,
                      recipientUserId: a.author_id,
                      viewId: n,
                      officialGuildId: o
                  });
              },
              children: (e) =>
                  (0, t.jsx)(s.Clickable, {
                      ...e,
                      className: v.profileEntryCard,
                      children: (0, t.jsx)(s.FocusRing, {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          },
                          children: (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)('img', {
                                      className: v.avatar,
                                      src: C,
                                      alt: x.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: j })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: r()(v.playerInfo),
                                      children: (0, t.jsxs)('div', {
                                          className: r()(h.column, h.gapXs),
                                          children: [
                                              (0, t.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: j
                                              }),
                                              (0, t.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, n) => (0, t.jsx)(e, { entry: a }, n))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: v.reactions,
                                      children: (0, t.jsx)(s.ArrowAngleLeftUpIcon, { size: 'sm' })
                                  })
                              ]
                          })
                      })
                  })
          });
};
