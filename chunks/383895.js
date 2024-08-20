var t = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(442837),
    l = n(481060),
    c = n(178762),
    u = n(91140),
    _ = n(297781),
    E = n(592125),
    d = n(944486),
    I = n(594174),
    A = n(5192),
    T = n(810568),
    m = n(689938),
    O = n(255341),
    N = n(707443);
a.Z = (e) => {
    let { entry: a, viewId: n, onClose: s } = e,
        R = (0, i.e7)([d.Z, E.Z], () => E.Z.getChannel(d.Z.getChannelId())),
        p = (0, i.e7)([I.default], () => I.default.getUser(a.author_id)),
        { nick: P, avatar: g } = r.useMemo(() => {
            let e = null == p ? void 0 : p.getAvatarURL(null == R ? void 0 : R.guild_id, 48, !1);
            return {
                nick: A.ZP.getName(null == R ? void 0 : R.guild_id, null == R ? void 0 : R.id, p),
                avatar: e
            };
        }, [p, R]);
    return null == p
        ? null
        : (0, t.jsx)(l.Popout, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: r, updatePosition: o } = e;
                  return (0, t.jsx)(c.J, {
                      entry: a,
                      closePopout: r,
                      updatePopoutPosition: o,
                      onReaction: () => {
                          (0, T.UE)({
                              action: T.as.SendMessageUser,
                              applicationId: a.extra.application_id,
                              gameName: a.extra.game_name,
                              recipientUserId: a.author_id,
                              viewId: n
                          }),
                              s(),
                              r();
                      },
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(a.id),
              onRequestOpen: () => {
                  (0, T.UE)({
                      action: T.as.ClickMessageUser,
                      applicationId: a.extra.application_id,
                      gameName: a.extra.game_name,
                      recipientUserId: a.author_id,
                      viewId: n
                  });
              },
              children: (e) =>
                  (0, t.jsx)(l.Clickable, {
                      ...e,
                      className: O.profileEntryCard,
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
                                      className: O.avatar,
                                      src: g,
                                      alt: m.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: P })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: o()(O.playerInfo),
                                      children: (0, t.jsxs)('div', {
                                          className: o()(N.column, N.gapXs),
                                          children: [
                                              (0, t.jsx)(l.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: P
                                              }),
                                              (0, t.jsx)(_.Gk, {
                                                  location: _.Gt.GAME_PROFILE,
                                                  children: u.W.map((e, n) => (0, t.jsx)(e, { entry: a }, n))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: O.reactions,
                                      children: (0, t.jsx)(l.ArrowAngleLeftUpIcon, {})
                                  })
                              ]
                          })
                      })
                  })
          });
};
