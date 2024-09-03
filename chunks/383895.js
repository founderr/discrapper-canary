var t = n(735250),
    r = n(470079),
    s = n(120356),
    i = n.n(s),
    o = n(442837),
    l = n(481060),
    c = n(178762),
    d = n(91140),
    u = n(297781),
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
        R = (0, o.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
        p = (0, o.e7)([I.default], () => I.default.getUser(a.author_id)),
        { nick: g, avatar: P } = r.useMemo(() => {
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
                  let { closePopout: r, updatePosition: i } = e;
                  return (0, t.jsx)(c.J, {
                      entry: a,
                      closePopout: r,
                      updatePopoutPosition: i,
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
                                      className: i()(N.playerInfo),
                                      children: (0, t.jsxs)('div', {
                                          className: i()(O.column, O.gapXs),
                                          children: [
                                              (0, t.jsx)(l.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: g
                                              }),
                                              (0, t.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, n) => (0, t.jsx)(e, { entry: a }, n))
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
