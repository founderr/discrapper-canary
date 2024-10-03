var t = n(735250),
    i = n(470079),
    r = n(120356),
    o = n.n(r),
    l = n(442837),
    s = n(481060),
    c = n(178762),
    d = n(91140),
    u = n(297781),
    m = n(592125),
    p = n(944486),
    g = n(594174),
    _ = n(5192),
    f = n(810568),
    x = n(689938),
    h = n(501345),
    v = n(51527);
a.Z = (e) => {
    let { entry: a, viewId: n, officialGuildId: r, onClose: I } = e,
        E = (0, l.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getChannelId())),
        A = (0, l.e7)([g.default], () => g.default.getUser(a.author_id)),
        { nick: b, avatar: C } = i.useMemo(() => {
            let e = null == A ? void 0 : A.getAvatarURL(null == E ? void 0 : E.guild_id, 48, !1);
            return {
                nick: _.ZP.getName(null == E ? void 0 : E.guild_id, null == E ? void 0 : E.id, A),
                avatar: e
            };
        }, [A, E]);
    return null == A
        ? null
        : (0, t.jsx)(s.Popout, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: i, updatePosition: o } = e;
                  return (0, t.jsx)(c.J, {
                      entry: a,
                      closePopout: i,
                      updatePopoutPosition: o,
                      onReaction: () => {
                          (0, f.UE)({
                              action: f.as.SendMessageUser,
                              applicationId: a.extra.application_id,
                              gameName: a.extra.game_name,
                              recipientUserId: a.author_id,
                              viewId: n,
                              officialGuildId: r
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
                  (0, f.UE)({
                      action: f.as.ClickMessageUser,
                      applicationId: a.extra.application_id,
                      gameName: a.extra.game_name,
                      recipientUserId: a.author_id,
                      viewId: n,
                      officialGuildId: r
                  });
              },
              children: (e) =>
                  (0, t.jsx)(s.Clickable, {
                      ...e,
                      className: h.profileEntryCard,
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
                                      className: h.avatar,
                                      src: C,
                                      alt: x.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: b })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: o()(h.playerInfo),
                                      children: (0, t.jsxs)('div', {
                                          className: o()(v.column, v.gapXs),
                                          children: [
                                              (0, t.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: b
                                              }),
                                              (0, t.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, n) => (0, t.jsx)(e, { entry: a }, n))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: h.reactions,
                                      children: (0, t.jsx)(s.ArrowAngleLeftUpIcon, { size: 'sm' })
                                  })
                              ]
                          })
                      })
                  })
          });
};
