var s = n(735250),
    t = n(470079),
    r = n(120356),
    o = n.n(r),
    i = n(442837),
    l = n(481060),
    c = n(178762),
    _ = n(91140),
    E = n(297781),
    u = n(592125),
    d = n(944486),
    I = n(594174),
    A = n(5192),
    m = n(810568),
    T = n(689938),
    N = n(255341),
    O = n(707443);
a.Z = (e) => {
    let { entry: a, viewId: n, onClose: r } = e,
        R = (0, i.e7)([d.Z, u.Z], () => u.Z.getChannel(d.Z.getChannelId())),
        p = (0, i.e7)([I.default], () => I.default.getUser(a.author_id)),
        { nick: P, avatar: g } = t.useMemo(() => {
            let e = null == p ? void 0 : p.getAvatarURL(null == R ? void 0 : R.guild_id, 48, !1);
            return {
                nick: A.ZP.getName(null == R ? void 0 : R.guild_id, null == R ? void 0 : R.id, p),
                avatar: e
            };
        }, [p, R]);
    return null == p
        ? null
        : (0, s.jsx)(l.Popout, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: t, updatePosition: o } = e;
                  return (0, s.jsx)(c.J, {
                      entry: a,
                      closePopout: t,
                      updatePopoutPosition: o,
                      onReaction: () => {
                          (0, m.UE)({
                              action: m.as.SendMessageUser,
                              applicationId: a.extra.application_id,
                              gameName: a.extra.game_name,
                              recipientUserId: a.author_id,
                              viewId: n
                          }),
                              r(),
                              t();
                      },
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(a.id),
              onRequestOpen: () => {
                  (0, m.UE)({
                      action: m.as.ClickMessageUser,
                      applicationId: a.extra.application_id,
                      gameName: a.extra.game_name,
                      recipientUserId: a.author_id,
                      viewId: n
                  });
              },
              children: (e) =>
                  (0, s.jsx)(l.Clickable, {
                      ...e,
                      className: N.profileEntryCard,
                      children: (0, s.jsx)(l.FocusRing, {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          },
                          children: (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)('img', {
                                      className: N.avatar,
                                      src: g,
                                      alt: T.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: P })
                                  }),
                                  (0, s.jsx)('div', {
                                      className: o()(N.playerInfo),
                                      children: (0, s.jsxs)('div', {
                                          className: o()(O.column, O.gapXs),
                                          children: [
                                              (0, s.jsx)(l.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: P
                                              }),
                                              (0, s.jsx)(E.Gk, {
                                                  location: E.Gt.GAME_PROFILE,
                                                  children: _.W.map((e, n) => (0, s.jsx)(e, { entry: a }, n))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, s.jsx)('div', {
                                      className: N.reactions,
                                      children: (0, s.jsx)(l.ArrowAngleLeftUpIcon, {})
                                  })
                              ]
                          })
                      })
                  })
          });
};
