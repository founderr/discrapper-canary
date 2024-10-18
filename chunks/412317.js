t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(735250);
t(470079);
var s = t(481060),
    o = t(194359),
    l = t(906732),
    r = t(475413),
    c = t(934861),
    a = t(981631),
    d = t(689938),
    u = t(266580);
function _(e) {
    let { isCurrentUser: n, user: t, relationshipType: _, friendToken: I, onClose: E } = e,
        { newestAnalyticsLocation: f } = (0, l.ZP)();
    return n || _ === a.OGo.BLOCKED
        ? null
        : _ === a.OGo.FRIEND || t.bot
          ? (0, i.jsx)('div', {
                className: u.multipleButtons,
                children: (0, i.jsx)(c.c, {
                    userId: t.id,
                    onClose: E
                })
            })
          : _ === a.OGo.PENDING_OUTGOING || _ === a.OGo.PENDING_INCOMING
            ? (0, i.jsxs)('div', {
                  className: u.multipleButtons,
                  children: [
                      (0, i.jsx)(r.ef, {
                          icon: s.UserClockIcon,
                          tooltipText: d.Z.Messages.FRIENDS_SECTION_PENDING,
                          disabled: !0
                      }),
                      (0, i.jsx)(c.c, {
                          userId: t.id,
                          onClose: E
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  className: u.multipleButtons,
                  children: [
                      (0, i.jsx)(c.v, {
                          userId: t.id,
                          onClose: E
                      }),
                      (0, i.jsx)(r.tG, {
                          action: 'SEND_FRIEND_REQUEST',
                          icon: s.UserPlusIcon,
                          text: d.Z.Messages.USER_PROFILE_ADD_FRIEND,
                          color: s.Button.Colors.BRAND,
                          onClick: () => {
                              o.Z.addRelationship({
                                  userId: t.id,
                                  context: { location: f },
                                  friendToken: I
                              });
                          }
                      })
                  ]
              });
}
