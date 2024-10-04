n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(194359),
    s = n(906732),
    l = n(822972),
    u = n(314897),
    c = n(699516),
    d = n(785717),
    _ = n(475413),
    E = n(228168),
    f = n(981631),
    h = n(689938);
function p(e) {
    let { user: t, friendToken: n, profileType: p, shouldShowTooltip: m } = e,
        { newestAnalyticsLocation: I } = (0, s.ZP)(),
        { trackUserProfileAction: T } = (0, d.KZ)(),
        g = (0, i.e7)([u.default], () => u.default.getId() === (null == t ? void 0 : t.id)),
        S = (0, i.e7)([c.Z], () => (null != t ? c.Z.getRelationshipType(t.id) : f.OGo.NONE)),
        A = (0, l.Z)({
            user: t,
            color: 'danger',
            location: I,
            onAction: () => T({ action: 'REMOVE_FRIEND' })
        });
    if (null == t || t.bot || g || S === f.OGo.BLOCKED) return null;
    let v = () =>
            (0, r.jsx)(a.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(a.Menu, {
                        navId: 'user-profile-friend-request-buttons',
                        onSelect: void 0,
                        onClose: t,
                        'aria-label': h.Z.Messages.FRIEND_ACTIONS_MENU_LABEL,
                        children: A
                    });
                },
                children: (e) =>
                    (0, r.jsx)(_.oY, {
                        shouldShowTooltip: m,
                        icon: a.UserCheckIcon,
                        tooltipText: h.Z.Messages.FRIENDS,
                        ...e
                    })
            }),
        N = () =>
            p === E.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(_.oY, {
                      shouldShowTooltip: m,
                      icon: a.UserClockIcon,
                      tooltipText: h.Z.Messages.FRIENDS_SECTION_PENDING,
                      disabled: !0
                  }),
        O = () =>
            p === E.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(_.oY, {
                      shouldShowTooltip: m,
                      icon: a.UserClockIcon,
                      tooltipText: h.Z.Messages.FRIENDS_SECTION_PENDING,
                      disabled: !0
                  }),
        R = () =>
            p === E.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(_.oY, {
                      action: 'SEND_FRIEND_REQUEST',
                      icon: a.UserPlusIcon,
                      tooltipText: h.Z.Messages.ADD_FRIEND,
                      shouldShowTooltip: m,
                      onClick: () => {
                          o.Z.addRelationship({
                              userId: t.id,
                              friendToken: n,
                              context: { location: I }
                          });
                      }
                  });
    return S === f.OGo.FRIEND ? v() : S === f.OGo.PENDING_INCOMING ? N() : S === f.OGo.PENDING_OUTGOING ? O() : R();
}
