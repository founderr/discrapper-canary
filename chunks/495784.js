var i = n(913527),
    s = n.n(i),
    l = n(704215),
    a = n(951716),
    r = n(605236),
    o = n(972830),
    c = n(430824),
    d = n(594174),
    u = n(374023),
    m = n(709054),
    x = n(645792),
    h = n(981631),
    g = n(921944);
t.Z = {
    init(e) {
        let { hasModalOpen: t, openModal: n } = e;
        if (!u.s.isDisallowPopupsSet())
            (0, o.h)(() => {
                if ((0, a.Z)()) return;
                let e = d.default.getCurrentUser(),
                    i = null != e && 7 > s()().diff(s()(m.default.extractTimestamp(e.id)), 'days'),
                    o = null != Object.values(c.Z.getGuilds()).find((e) => e.hasFeature(h.oNc.HUB)),
                    u = !(0, r.un)(l.z.HUB_BACK_TO_SCHOOL_UPSELL);
                !(i || t() || o || !u) && (0, x.b)() && (x.Z.trackExposure({ location: '8b792a_1' }), n(), (0, r.kk)(l.z.HUB_BACK_TO_SCHOOL_UPSELL));
            });
    },
    hideHubUpsell() {
        (0, r.EW)(l.z.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: g.L.AUTO });
    }
};
