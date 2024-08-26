t.d(n, {
    Z: function () {
        return E;
    }
});
var s = t(735250);
t(470079);
var i = t(481060),
    o = t(194359),
    l = t(906732),
    r = t(475413),
    a = t(261253),
    c = t(7242),
    d = t(934861),
    u = t(981631),
    I = t(689938),
    _ = t(353040);
function E(e) {
    let { isCurrentUser: n, user: t, relationshipType: E, friendToken: f, persistentCallCtaEnabled: m = !1, activeInviteToCallCtaEnabled: p = !1, onClose: x } = e,
        { newestAnalyticsLocation: Z } = (0, l.ZP)();
    if (n || E === u.OGo.BLOCKED) return null;
    let h = m
            ? (0, s.jsx)(a.Z, {
                  user: t,
                  onClose: x
              })
            : null,
        v = (0, s.jsx)(c.Z, {
            user: t,
            onClose: x
        });
    if (E === u.OGo.FRIEND && p && null != v)
        return (0, s.jsxs)('div', {
            className: _.multipleButtons,
            children: [
                (0, s.jsx)(d.v, {
                    userId: t.id,
                    onClose: x
                }),
                v
            ]
        });
    if (E === u.OGo.FRIEND || t.bot)
        return (0, s.jsxs)('div', {
            className: _.multipleButtons,
            children: [
                h,
                (0, s.jsx)(d.c, {
                    userId: t.id,
                    onClose: x
                })
            ]
        });
    if (E === u.OGo.PENDING_OUTGOING || E === u.OGo.PENDING_INCOMING)
        return p && null != v
            ? (0, s.jsxs)('div', {
                  className: _.multipleButtons,
                  children: [
                      (0, s.jsx)(r.ef, {
                          icon: i.UserClockIcon,
                          tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
                          disabled: !0
                      }),
                      (0, s.jsx)(d.v, {
                          userId: t.id,
                          onClose: x
                      }),
                      v
                  ]
              })
            : (0, s.jsxs)('div', {
                  className: _.multipleButtons,
                  children: [
                      (0, s.jsx)(r.ef, {
                          icon: i.UserClockIcon,
                          tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
                          disabled: !0
                      }),
                      h,
                      (0, s.jsx)(d.c, {
                          userId: t.id,
                          onClose: x
                      })
                  ]
              });
    return p && null != v
        ? (0, s.jsxs)('div', {
              className: _.multipleButtons,
              children: [
                  (0, s.jsx)(r.ef, {
                      action: 'SEND_FRIEND_REQUEST',
                      icon: i.UserPlusIcon,
                      tooltipText: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
                      onClick: () => {
                          o.Z.addRelationship({
                              userId: t.id,
                              context: { location: Z },
                              friendToken: f
                          });
                      }
                  }),
                  (0, s.jsx)(d.v, {
                      userId: t.id,
                      onClose: x
                  }),
                  v
              ]
          })
        : (0, s.jsxs)('div', {
              className: _.multipleButtons,
              children: [
                  h,
                  (0, s.jsx)(d.v, {
                      userId: t.id,
                      onClose: x
                  }),
                  (0, s.jsx)(r.tG, {
                      action: 'SEND_FRIEND_REQUEST',
                      icon: i.UserPlusIcon,
                      text: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
                      color: i.Button.Colors.BRAND,
                      onClick: () => {
                          o.Z.addRelationship({
                              userId: t.id,
                              context: { location: Z },
                              friendToken: f
                          });
                      }
                  })
              ]
          });
}
