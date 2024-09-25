var t = n(735250),
    o = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(442837),
    s = n(481060),
    c = n(178762),
    d = n(91140),
    u = n(297781),
    m = n(592125),
    p = n(944486),
    _ = n(594174),
    g = n(5192),
    h = n(810568),
    f = n(689938),
    x = n(501345),
    I = n(51527);
a.Z = (e) => {
    let { entry: a, viewId: n, officialGuildId: i, onClose: v } = e,
        E = (0, l.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getChannelId())),
        A = (0, l.e7)([_.default], () => _.default.getUser(a.author_id)),
        { nick: M, avatar: P } = o.useMemo(() => {
            let e = null == A ? void 0 : A.getAvatarURL(null == E ? void 0 : E.guild_id, 48, !1);
            return {
                nick: g.ZP.getName(null == E ? void 0 : E.guild_id, null == E ? void 0 : E.id, A),
                avatar: e
            };
        }, [A, E]);
    return null == A
        ? null
        : (0, t.jsx)(s.Popout, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: o, updatePosition: r } = e;
                  return (0, t.jsx)(c.J, {
                      entry: a,
                      closePopout: o,
                      updatePopoutPosition: r,
                      onReaction: () => {
                          (0, h.UE)({
                              action: h.as.SendMessageUser,
                              applicationId: a.extra.application_id,
                              gameName: a.extra.game_name,
                              recipientUserId: a.author_id,
                              viewId: n,
                              officialGuildId: i
                          }),
                              v(),
                              o();
                      },
                      onUserPopoutClosed: () => o(),
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(a.id),
              onRequestOpen: () => {
                  (0, h.UE)({
                      action: h.as.ClickMessageUser,
                      applicationId: a.extra.application_id,
                      gameName: a.extra.game_name,
                      recipientUserId: a.author_id,
                      viewId: n,
                      officialGuildId: i
                  });
              },
              children: (e) =>
                  (0, t.jsx)(s.Clickable, {
                      ...e,
                      className: x.profileEntryCard,
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
                                      className: x.avatar,
                                      src: P,
                                      alt: f.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: M })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: r()(x.playerInfo),
                                      children: (0, t.jsxs)('div', {
                                          className: r()(I.column, I.gapXs),
                                          children: [
                                              (0, t.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: M
                                              }),
                                              (0, t.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, n) => (0, t.jsx)(e, { entry: a }, n))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: x.reactions,
                                      children: (0, t.jsx)(s.ArrowAngleLeftUpIcon, {})
                                  })
                              ]
                          })
                      })
                  })
          });
};
