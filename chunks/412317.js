t.d(n, {
    Z: function () {
        return _;
    }
});
var s = t(735250);
t(470079);
var i = t(481060),
    o = t(194359),
    l = t(906732),
    r = t(475413),
    a = t(934861),
    c = t(981631),
    d = t(689938),
    u = t(266580);
function _(e) {
    let { isCurrentUser: n, user: t, relationshipType: _, friendToken: I, onClose: E } = e,
        { newestAnalyticsLocation: f } = (0, l.ZP)();
    return n || _ === c.OGo.BLOCKED
        ? null
        : _ === c.OGo.FRIEND || t.bot
          ? (0, s.jsx)('div', {
                className: u.multipleButtons,
                children: (0, s.jsx)(a.c, {
                    userId: t.id,
                    onClose: E
                })
            })
          : _ === c.OGo.PENDING_OUTGOING || _ === c.OGo.PENDING_INCOMING
            ? (0, s.jsxs)('div', {
                  className: u.multipleButtons,
                  children: [
                      (0, s.jsx)(r.ef, {
                          icon: i.UserClockIcon,
                          tooltipText: d.Z.Messages.FRIENDS_SECTION_PENDING,
                          disabled: !0
                      }),
                      (0, s.jsx)(a.c, {
                          userId: t.id,
                          onClose: E
                      })
                  ]
              })
            : (0, s.jsxs)('div', {
                  className: u.multipleButtons,
                  children: [
                      (0, s.jsx)(a.v, {
                          userId: t.id,
                          onClose: E
                      }),
                      (0, s.jsx)(r.tG, {
                          action: 'SEND_FRIEND_REQUEST',
                          icon: i.UserPlusIcon,
                          text: d.Z.Messages.USER_PROFILE_ADD_FRIEND,
                          color: i.Button.Colors.BRAND,
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
