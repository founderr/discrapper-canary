i.d(n, {
    Z: function () {
        return S;
    }
});
var l = i(735250), s = i(470079), o = i(120356), t = i.n(o), a = i(442837), r = i(481060), d = i(717881), c = i(906732), u = i(199902), I = i(158776), f = i(543595), _ = i(785717), E = i(221292), m = i(981631), Z = i(501649), v = i(735393);
function S(e) {
    let {
            user: n,
            type: i,
            showActions: o,
            onClose: S
        } = e, x = (0, a.e7)([u.Z], () => null != u.Z.getAnyStreamForUser(n.id)), h = (0, a.e7)([I.Z], () => I.Z.getActivities(n.id)), N = s.useMemo(() => h.filter(e => e.type !== m.IIU.CUSTOM_STATUS), [h]), p = s.useMemo(() => x ? N.find(e => e.type === m.IIU.PLAYING) : null, [
            N,
            x
        ]), g = s.useMemo(() => N.filter(e => e !== p), [
            p,
            N
        ]), {
            analyticsLocations: T,
            newestAnalyticsLocation: C
        } = (0, c.ZP)(), {
            trackUserProfileAction: j,
            ...R
        } = (0, _.KZ)(), A = {
            location: {
                page: m.ZY5.USER_PROFILE,
                section: m.jXE.PROFILE_MODAL
            }
        };
    return (0, l.jsxs)(r.ScrollerThin, {
        className: v.listScroller,
        fade: !0,
        children: [
            x ? (0, l.jsx)(d.Z, {
                type: i,
                user: n,
                source: C,
                className: Z.userProfileActivity,
                showChannelDetails: i === f.Y.SIMPLIFIED_PROFILE,
                activity: p,
                actionColor: Z.actionColor,
                analyticsParams: A,
                showActions: o,
                onGameProfileOpened: S,
                onAction: () => {
                    j({ action: 'JOIN_ACTIVITY' }), (0, E.Ac)({
                        activityType: m.IIU.STREAMING,
                        activityName: null == p ? void 0 : p.name,
                        activityPlatform: null == p ? void 0 : p.platform,
                        activitySessionId: null == p ? void 0 : p.session_id,
                        applicationId: null == p ? void 0 : p.application_id,
                        analyticsLocations: T,
                        ...R
                    });
                }
            }) : null,
            g.map(e => (0, l.jsx)(d.Z, {
                type: i,
                activity: e,
                user: n,
                useStoreStream: !1,
                source: C,
                className: t()(Z.userProfileActivity, i === f.Y.SIMPLIFIED_PROFILE && Z.simplifiedProfileActivity),
                showChannelDetails: i === f.Y.SIMPLIFIED_PROFILE,
                actionColor: Z.actionColor,
                analyticsParams: A,
                showActions: o,
                onGameProfileOpened: S,
                onAction: () => {
                    j({ action: 'JOIN_ACTIVITY' }), (0, E.Ac)({
                        activityType: e.type,
                        activityName: e.name,
                        activityPlatform: e.platform,
                        activitySessionId: e.session_id,
                        applicationId: e.application_id,
                        analyticsLocations: T,
                        ...R
                    });
                }
            }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
        ]
    });
}
