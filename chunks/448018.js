n.d(t, {
    v: function () {
        return p;
    }
});
var o = n(497505),
    r = n(988303),
    s = n(941348),
    a = n(658590),
    l = n(647365),
    i = n(743294);
let c = {
        component: l.Z,
        getCollapsedHeight: () => 40,
        getPreEnrollmentExpandedHeight: () => 240,
        getPostEnrollmentBackgroundImage: (e) => 'linear-gradient(90deg, '.concat(e.config.colors.primary, ', ').concat(e.config.colors.secondary, ')'),
        getPreEnrollmentBackgroundColor: (e) => void 0,
        canCollapseOnBlur: (e) => {
            var t;
            return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) == null;
        },
        shouldExpandOnQuestComplete: (e) => !0,
        getVerticalPadding: () => 8
    },
    d = i.Li,
    u = {
        component: s.Z,
        getCollapsedHeight: (e) => {
            var t;
            return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null ? 66 : 40;
        },
        getPreEnrollmentExpandedHeight: () => 270,
        getPostEnrollmentBackgroundImage: () => 'linear-gradient(90deg, '.concat(i.aY, ', ').concat(i.v6, ')'),
        getPreEnrollmentBackgroundColor: (e) => 'var(--home-background)',
        canCollapseOnBlur: (e) => !0,
        shouldExpandOnQuestComplete: (e) => !1,
        getVerticalPadding: () => d
    },
    p = (e, t, n) => {
        var s;
        let l = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null,
            i = (!l && t === r.P.V2) || (l && n === r.P.V2) || (0, a.a)(e),
            d = i ? u : c;
        return {
            component: d.component,
            collapsedHeight: d.getCollapsedHeight(e),
            preEnrollmentExpandedHeight: d.getPreEnrollmentExpandedHeight(e),
            postEnrollmentBackgroundImage: d.getPostEnrollmentBackgroundImage(e),
            preEnrollmentBackgroundColor: d.getPreEnrollmentBackgroundColor(e),
            canCollapseOnBlur: d.canCollapseOnBlur(e),
            shouldExpandOnQuestComplete: d.shouldExpandOnQuestComplete(e),
            paddingVertical: d.getVerticalPadding(),
            trackingCtx: { content: i ? o.jn.QUEST_BAR_V2 : o.jn.QUEST_BAR }
        };
    };
