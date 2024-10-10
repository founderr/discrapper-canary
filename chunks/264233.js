n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(392711),
    l = n.n(s),
    r = n(442837),
    o = n(524437),
    c = n(481060),
    d = n(317632),
    u = n(174767),
    _ = n(240126),
    E = n(791914),
    I = n(326838),
    m = n(689938),
    T = n(706897);
function N(e) {
    let { setTab: t, badgeState: s, closePopout: N } = e,
        C = (0, r.Wu)([d.Z], () => d.Z.getInvites()),
        f = (0, r.e7)([d.Z], () => d.Z.getInviteStatuses()),
        [p, g] = a.useMemo(
            () =>
                l().partition(C, (e) => {
                    var t;
                    return (null === (t = f[e.invite_id]) || void 0 === t ? void 0 : t.joinable) !== !1 && (Date.now() - new Date(e.created_at).getTime()) / 1000 < e.ttl;
                }),
            [C, f]
        );
    return (a.useEffect(() => {
        (0, u.sJ)();
    }),
    0 === C.length)
        ? (0, i.jsxs)('div', {
              className: T.container,
              children: [
                  (0, i.jsx)(E.Z, {
                      tab: o.X.GAME_INVITES,
                      setTab: t,
                      badgeState: s,
                      closePopout: N
                  }),
                  (0, i.jsx)('div', {
                      className: T.__invalid_emptyStateContainer,
                      children: (0, i.jsx)(_.Z, {
                          Icon: c.GameControllerIcon,
                          header: m.Z.Messages.GAME_INVITES_EMPTY_STATE_TITLE,
                          tip: m.Z.Messages.GAME_INVITES_EMPTY_STATE_SUBTITLE
                      })
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: T.container,
              children: [
                  (0, i.jsx)(E.Z, {
                      tab: o.X.GAME_INVITES,
                      setTab: t,
                      badgeState: s,
                      closePopout: N,
                      children: (0, i.jsx)(c.CircleIconButton, {
                          className: T.__invalid_deleteButton,
                          tooltip: m.Z.Messages.GAME_INVITES_DELETE_ALL,
                          color: c.CircleIconButtonColors.SECONDARY,
                          icon: (0, i.jsx)(c.TrashIcon, { size: 'xs' }),
                          onClick: function () {
                              (0, c.openModalLazy)(async () => {
                                  let { default: e } = await n.e('13111').then(n.bind(n, 93756));
                                  return (t) =>
                                      (0, i.jsx)(e, {
                                          ...t,
                                          onDelete: async () => {
                                              await t.onClose();
                                          }
                                      });
                              });
                          }
                      })
                  }),
                  (0, i.jsx)(c.AdvancedScrollerThin, {
                      children: (0, i.jsxs)('div', {
                          className: T.invitesContainer,
                          children: [
                              p.length > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(h, { title: m.Z.Messages.GAME_INVITES_RECENT_HEADER }),
                                          (0, i.jsx)(i.Fragment, {
                                              children: p.map((e) =>
                                                  (0, i.jsx)(
                                                      I.Z,
                                                      {
                                                          invite: e,
                                                          expired: !1
                                                      },
                                                      e.invite_id
                                                  )
                                              )
                                          })
                                      ]
                                  }),
                              g.length > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(h, { title: m.Z.Messages.GAME_INVITES_EXPIRED_HEADER }),
                                          (0, i.jsx)(i.Fragment, {
                                              children: g.map((e) =>
                                                  (0, i.jsx)(
                                                      I.Z,
                                                      {
                                                          invite: e,
                                                          expired: !0
                                                      },
                                                      e.invite_id
                                                  )
                                              )
                                          })
                                      ]
                                  })
                          ]
                      })
                  })
              ]
          });
}
function h(e) {
    let { title: t } = e;
    return (0, i.jsxs)('div', {
        className: T.headerContainer,
        children: [
            (0, i.jsx)(c.Text, {
                className: T.headerTitle,
                variant: 'text-xs/semibold',
                color: 'interactive-normal',
                children: t
            }),
            (0, i.jsx)('div', { className: T.headerDivider })
        ]
    });
}
