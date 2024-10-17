t.d(n, {
    Z: function () {
        return _;
    }
});
var o = t(735250);
t(470079);
var i = t(481060),
    s = t(194359),
    l = t(906732),
    c = t(475413),
    r = t(934861),
    a = t(981631),
    d = t(689938),
    u = t(266580);
function _(e) {
    let { isCurrentUser: n, user: t, relationshipType: _, friendToken: I, onClose: E } = e,
        { newestAnalyticsLocation: f } = (0, l.ZP)();
    return n || _ === a.OGo.BLOCKED
        ? null
        : _ === a.OGo.FRIEND || t.bot
          ? (0, o.jsx)('div', {
                className: u.multipleButtons,
                children: (0, o.jsx)(r.c, {
                    userId: t.id,
                    onClose: E
                })
            })
          : _ === a.OGo.PENDING_OUTGOING || _ === a.OGo.PENDING_INCOMING
            ? (0, o.jsxs)('div', {
                  className: u.multipleButtons,
                  children: [
                      (0, o.jsx)(c.ef, {
                          icon: i.UserClockIcon,
                          tooltipText: d.Z.Messages.FRIENDS_SECTION_PENDING,
                          disabled: !0
                      }),
                      (0, o.jsx)(r.c, {
                          userId: t.id,
                          onClose: E
                      })
                  ]
              })
            : (0, o.jsxs)('div', {
                  className: u.multipleButtons,
                  children: [
                      (0, o.jsx)(r.v, {
                          userId: t.id,
                          onClose: E
                      }),
                      (0, o.jsx)(c.tG, {
                          action: 'SEND_FRIEND_REQUEST',
                          icon: i.UserPlusIcon,
                          text: d.Z.Messages.USER_PROFILE_ADD_FRIEND,
                          color: i.Button.Colors.BRAND,
                          onClick: () => {
                              s.Z.addRelationship({
                                  userId: t.id,
                                  context: { location: f },
                                  friendToken: I
                              });
                          }
                      })
                  ]
              });
}
