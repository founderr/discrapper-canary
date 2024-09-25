n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(524437),
    c = n(481060),
    d = n(317632),
    _ = n(174767),
    E = n(240126),
    f = n(791914),
    h = n(326838),
    p = n(689938),
    m = n(706897);
function I(e) {
    let { setTab: t, badgeState: r, closePopout: o } = e,
        I = (0, l.Wu)([d.Z], () => d.Z.getInvites()),
        g = (0, l.e7)([d.Z], () => d.Z.getInviteStatuses()),
        [S, A] = a.useMemo(
            () =>
                s().partition(I, (e) => {
                    var t;
                    return (null === (t = g[e.invite_id]) || void 0 === t ? void 0 : t.joinable) !== !1 && (Date.now() - new Date(e.created_at).getTime()) / 1000 < e.ttl;
                }),
            [I, g]
        );
    function v() {
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
    return (a.useEffect(() => {
        (0, _.sJ)();
    }),
    0 === I.length)
        ? (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(f.Z, {
                      tab: u.X.GAME_INVITES,
                      setTab: t,
                      badgeState: r,
                      closePopout: o
                  }),
                  (0, i.jsx)('div', {
                      className: m.__invalid_emptyStateContainer,
                      children: (0, i.jsx)(E.Z, {
                          Icon: c.GameControllerIcon,
                          header: p.Z.Messages.GAME_INVITES_EMPTY_STATE_TITLE,
                          tip: p.Z.Messages.GAME_INVITES_EMPTY_STATE_SUBTITLE
                      })
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(f.Z, {
                      tab: u.X.GAME_INVITES,
                      setTab: t,
                      badgeState: r,
                      closePopout: o,
                      children: (0, i.jsx)(c.CircleIconButton, {
                          className: m.__invalid_deleteButton,
                          tooltip: p.Z.Messages.GAME_INVITES_DELETE_ALL,
                          color: c.CircleIconButtonColors.SECONDARY,
                          icon: (0, i.jsx)(c.TrashIcon, { size: 'xs' }),
                          onClick: v
                      })
                  }),
                  (0, i.jsx)(c.AdvancedScrollerThin, {
                      children: (0, i.jsxs)('div', {
                          className: m.invitesContainer,
                          children: [
                              S.length > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(T, { title: p.Z.Messages.GAME_INVITES_RECENT_HEADER }),
                                          (0, i.jsx)(i.Fragment, {
                                              children: S.map((e) =>
                                                  (0, i.jsx)(
                                                      h.Z,
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
                              A.length > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(T, { title: p.Z.Messages.GAME_INVITES_EXPIRED_HEADER }),
                                          (0, i.jsx)(i.Fragment, {
                                              children: A.map((e) =>
                                                  (0, i.jsx)(
                                                      h.Z,
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
function T(e) {
    let { title: t } = e;
    return (0, i.jsxs)('div', {
        className: m.headerContainer,
        children: [
            (0, i.jsx)(c.Text, {
                className: m.headerTitle,
                variant: 'text-xs/semibold',
                color: 'interactive-normal',
                children: t
            }),
            (0, i.jsx)('div', { className: m.headerDivider })
        ]
    });
}
