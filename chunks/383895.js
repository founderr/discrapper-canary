var t = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(442837),
    l = n(481060),
    c = n(178762),
    u = n(91140),
    d = n(297781),
    _ = n(592125),
    E = n(944486),
    I = n(594174),
    A = n(5192),
    m = n(810568),
    T = n(689938),
    N = n(255341),
    O = n(707443);
a.Z = (e) => {
    let { entry: a, viewId: n, onClose: s } = e,
        p = (0, i.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
        R = (0, i.e7)([I.default], () => I.default.getUser(a.author_id)),
        { nick: g, avatar: P } = r.useMemo(() => {
            let e = null == R ? void 0 : R.getAvatarURL(null == p ? void 0 : p.guild_id, 48, !1);
            return {
                nick: A.ZP.getName(null == p ? void 0 : p.guild_id, null == p ? void 0 : p.id, R),
                avatar: e
            };
        }, [R, p]);
    return null == R
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
                          (0, m.UE)({
                              action: m.as.SendMessageUser,
                              applicationId: a.extra.application_id,
                              gameName: a.extra.game_name,
                              recipientUserId: a.author_id,
                              viewId: n
                          }),
                              s(),
                              r();
                      },
                      onUserPopoutClosed: () => r(),
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
                  (0, t.jsx)(l.Clickable, {
                      ...e,
                      className: N.profileEntryCard,
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
                                      className: N.avatar,
                                      src: P,
                                      alt: T.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: g })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: o()(N.playerInfo),
                                      children: (0, t.jsxs)('div', {
                                          className: o()(O.column, O.gapXs),
                                          children: [
                                              (0, t.jsx)(l.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: g
                                              }),
                                              (0, t.jsx)(d.Gk, {
                                                  location: d.Gt.GAME_PROFILE,
                                                  children: u.W.map((e, n) => (0, t.jsx)(e, { entry: a }, n))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, t.jsx)('div', {
                                      className: N.reactions,
                                      children: (0, t.jsx)(l.ArrowAngleLeftUpIcon, {})
                                  })
                              ]
                          })
                      })
                  })
          });
};
