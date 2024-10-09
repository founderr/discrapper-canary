var t = a(735250),
    r = a(470079),
    s = a(120356),
    i = a.n(s),
    o = a(442837),
    l = a(481060),
    c = a(178762),
    d = a(91140),
    u = a(297781),
    _ = a(592125),
    E = a(944486),
    m = a(594174),
    I = a(5192),
    A = a(810568),
    p = a(689938),
    g = a(501345),
    f = a(51527);
n.Z = (e) => {
    let { entry: n, viewId: a, officialGuildId: s, onClose: T } = e,
        O = (0, o.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
        R = (0, o.e7)([m.default], () => m.default.getUser(n.author_id)),
        { nick: N, avatar: h } = r.useMemo(() => {
            let e = null == R ? void 0 : R.getAvatarURL(null == O ? void 0 : O.guild_id, 48, !1);
            return {
                nick: I.ZP.getName(null == O ? void 0 : O.guild_id, null == O ? void 0 : O.id, R),
                avatar: e
            };
        }, [R, O]);
    return null == R
        ? null
        : (0, t.jsx)(l.Popout, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: r, updatePosition: i } = e;
                  return (0, t.jsx)(c.J, {
                      entry: n,
                      closePopout: r,
                      updatePopoutPosition: i,
                      onReaction: () => {
                          (0, A.UE)({
                              action: A.as.SendMessageUser,
                              applicationId: n.extra.application_id,
                              gameName: n.extra.game_name,
                              recipientUserId: n.author_id,
                              viewId: a,
                              officialGuildId: s
                          }),
                              T(),
                              r();
                      },
                      onUserPopoutClosed: () => r(),
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(n.id),
              onRequestOpen: () => {
                  (0, A.UE)({
                      action: A.as.ClickMessageUser,
                      applicationId: n.extra.application_id,
                      gameName: n.extra.game_name,
                      recipientUserId: n.author_id,
                      viewId: a,
                      officialGuildId: s
                  });
              },
              children: (e) =>
                  (0, t.jsx)(l.Clickable, {
                      ...e,
                      className: g.profileEntryCard,
                      children: (0, t.jsx)(l.FocusRing, {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          },
                          children: (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)('img', {
                                      className: g.avatar,
                                      src: h,
                                      alt: p.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: N })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: i()(g.playerInfo),
                                      children: (0, t.jsxs)('div', {
                                          className: i()(f.column, f.gapXs),
                                          children: [
                                              (0, t.jsx)(l.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: N
                                              }),
                                              (0, t.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, a) => (0, t.jsx)(e, { entry: n }, a))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: g.reactions,
                                      children: (0, t.jsx)(l.ArrowAngleLeftUpIcon, { size: 'sm' })
                                  })
                              ]
                          })
                      })
                  })
          });
};
