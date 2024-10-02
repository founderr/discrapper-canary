var t = a(735250),
    i = a(470079),
    o = a(120356),
    r = a.n(o),
    l = a(442837),
    s = a(481060),
    c = a(178762),
    d = a(91140),
    u = a(297781),
    m = a(592125),
    p = a(944486),
    _ = a(594174),
    g = a(5192),
    f = a(810568),
    x = a(689938),
    I = a(501345),
    h = a(51527);
n.Z = (e) => {
    let { entry: n, viewId: a, officialGuildId: o, onClose: v } = e,
        E = (0, l.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getChannelId())),
        A = (0, l.e7)([_.default], () => _.default.getUser(n.author_id)),
        { nick: T, avatar: M } = i.useMemo(() => {
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
                  let { closePopout: i, updatePosition: r } = e;
                  return (0, t.jsx)(c.J, {
                      entry: n,
                      closePopout: i,
                      updatePopoutPosition: r,
                      onReaction: () => {
                          (0, f.UE)({
                              action: f.as.SendMessageUser,
                              applicationId: n.extra.application_id,
                              gameName: n.extra.game_name,
                              recipientUserId: n.author_id,
                              viewId: a,
                              officialGuildId: o
                          }),
                              v(),
                              i();
                      },
                      onUserPopoutClosed: () => i(),
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(n.id),
              onRequestOpen: () => {
                  (0, f.UE)({
                      action: f.as.ClickMessageUser,
                      applicationId: n.extra.application_id,
                      gameName: n.extra.game_name,
                      recipientUserId: n.author_id,
                      viewId: a,
                      officialGuildId: o
                  });
              },
              children: (e) =>
                  (0, t.jsx)(s.Clickable, {
                      ...e,
                      className: I.profileEntryCard,
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
                                      className: I.avatar,
                                      src: M,
                                      alt: x.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: T })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: r()(I.playerInfo),
                                      children: (0, t.jsxs)('div', {
                                          className: r()(h.column, h.gapXs),
                                          children: [
                                              (0, t.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: T
                                              }),
                                              (0, t.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, a) => (0, t.jsx)(e, { entry: n }, a))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: I.reactions,
                                      children: (0, t.jsx)(s.ArrowAngleLeftUpIcon, {})
                                  })
                              ]
                          })
                      })
                  })
          });
};
