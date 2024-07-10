n.d(i, {
    Z: function () {
        return Z;
    }
});
var s = n(735250), l = n(470079), t = n(120356), o = n.n(t), r = n(442837), a = n(481060), d = n(717881), c = n(906732), u = n(199902), I = n(158776), _ = n(543595), f = n(785717), E = n(221292), m = n(981631), S = n(501649), v = n(735393);
function Z(e) {
    let {
            user: i,
            type: n,
            showActions: t,
            onClose: Z
        } = e, x = (0, r.e7)([u.Z], () => null != u.Z.getAnyStreamForUser(i.id)), h = (0, r.e7)([I.Z], () => I.Z.getActivities(i.id)), p = l.useMemo(() => h.filter(e => e.type !== m.IIU.CUSTOM_STATUS), [h]), g = l.useMemo(() => x ? p.find(e => e.type === m.IIU.PLAYING) : null, [
            p,
            x
        ]), T = l.useMemo(() => p.filter(e => e !== g), [
            g,
            p
        ]), {
            analyticsLocations: N,
            newestAnalyticsLocation: C
        } = (0, c.ZP)(), {
            trackUserProfileAction: j,
            ...A
        } = (0, f.KZ)(), O = {
            location: {
                page: m.ZY5.USER_PROFILE,
                section: m.jXE.PROFILE_MODAL
            }
        };
    return (0, s.jsxs)(a.ScrollerThin, {
        className: v.listScroller,
        fade: !0,
        children: [
            x ? (0, s.jsx)(d.Z, {
                type: n,
                user: i,
                source: C,
                className: S.userProfileActivity,
                showChannelDetails: n === _.Y.SIMPLIFIED_PROFILE,
                activity: g,
                actionColor: S.actionColor,
                analyticsParams: O,
                showActions: t,
                onGameProfileOpened: Z,
                onAction: () => {
                    j({ action: 'JOIN_ACTIVITY' }), (0, E.Ac)({
                        activityType: m.IIU.STREAMING,
                        activityName: null == g ? void 0 : g.name,
                        activityPlatform: null == g ? void 0 : g.platform,
                        activitySessionId: null == g ? void 0 : g.session_id,
                        applicationId: null == g ? void 0 : g.application_id,
                        analyticsLocations: N,
                        ...A
                    });
                }
            }) : null,
            T.map(e => (0, s.jsx)(d.Z, {
                type: n,
                activity: e,
                user: i,
                useStoreStream: !1,
                source: C,
                className: o()(S.userProfileActivity, n === _.Y.SIMPLIFIED_PROFILE && S.simplifiedProfileActivity),
                showChannelDetails: n === _.Y.SIMPLIFIED_PROFILE,
                actionColor: S.actionColor,
                analyticsParams: O,
                showActions: t,
                onGameProfileOpened: Z,
                onAction: () => {
                    j({ action: 'JOIN_ACTIVITY' }), (0, E.Ac)({
                        activityType: e.type,
                        activityName: e.name,
                        activityPlatform: e.platform,
                        activitySessionId: e.session_id,
                        applicationId: e.application_id,
                        analyticsLocations: N,
                        ...A
                    });
                }
            }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
        ]
    });
}
