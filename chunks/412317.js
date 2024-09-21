s.d(n, {
    Z: function () {
        return _;
    }
});
var t = s(735250);
s(470079);
var i = s(481060),
    o = s(194359),
    l = s(906732),
    r = s(475413),
    c = s(934861),
    a = s(981631),
    d = s(689938),
    u = s(266580);
function _(e) {
    let { isCurrentUser: n, user: s, relationshipType: _, friendToken: I, onClose: E } = e,
        { newestAnalyticsLocation: f } = (0, l.ZP)();
    return n || _ === a.OGo.BLOCKED
        ? null
        : _ === a.OGo.FRIEND || s.bot
          ? (0, t.jsx)('div', {
                className: u.multipleButtons,
                children: (0, t.jsx)(c.c, {
                    userId: s.id,
                    onClose: E
                })
            })
          : _ === a.OGo.PENDING_OUTGOING || _ === a.OGo.PENDING_INCOMING
            ? (0, t.jsxs)('div', {
                  className: u.multipleButtons,
                  children: [
                      (0, t.jsx)(r.ef, {
                          icon: i.UserClockIcon,
                          tooltipText: d.Z.Messages.FRIENDS_SECTION_PENDING,
                          disabled: !0
                      }),
                      (0, t.jsx)(c.c, {
                          userId: s.id,
                          onClose: E
                      })
                  ]
              })
            : (0, t.jsxs)('div', {
                  className: u.multipleButtons,
                  children: [
                      (0, t.jsx)(c.v, {
                          userId: s.id,
                          onClose: E
                      }),
                      (0, t.jsx)(r.tG, {
                          action: 'SEND_FRIEND_REQUEST',
                          icon: i.UserPlusIcon,
                          text: d.Z.Messages.USER_PROFILE_ADD_FRIEND,
                          color: i.Button.Colors.BRAND,
                          onClick: () => {
                              o.Z.addRelationship({
                                  userId: s.id,
                                  context: { location: f },
                                  friendToken: I
                              });
                          }
                      })
                  ]
              });
}
