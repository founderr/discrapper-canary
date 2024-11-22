n.d(t, {
    u: function () {
        return u;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(411104);
var i = n(859921),
    r = n(341907),
    s = n(703656),
    a = n(836768),
    o = n(49898),
    l = n(981631),
    c = n(979007),
    d = n(128449);
function u(e) {
    let t = e.tab;
    switch ((a.Z.setState({ selectedTab: t }), t)) {
        case o.F$.SERVERS:
            var n, u;
            let h = e.selectedServersTab;
            return (
                null != h
                    ? i.Z.setState({
                          selectedTab: h,
                          entrypoint: null !== (n = e.entrypoint) && void 0 !== n ? n : d.Qq.UNKNOWN
                      })
                    : i.Z.setState({ entrypoint: null !== (u = e.entrypoint) && void 0 !== u ? u : d.Qq.UNKNOWN }),
                (0, s.uL)(l.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
            );
        case o.F$.APPS:
            if (null != e.applicationId) {
                if (e.section === c.Wc.STORE) {
                    if (null != e.skuId) return (0, s.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e.applicationId, e.skuId));
                    return (0, s.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(e.applicationId, c.Wc.STORE));
                }
                return (0, s.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId));
            }
            if (null != e.query) {
                let t = new URLSearchParams();
                return '' !== e.query && t.set('q', e.query), null != e.categoryId && t.set('category_id', e.categoryId.toString()), null != e.page && t.set('page', e.page.toString()), (0, s.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: t.toString() });
            } else if (null != e.categoryId) return (0, s.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()));
            else return (0, s.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS);
        case o.F$.QUESTS:
            return (0, r.navigateToQuestHome)(e.location, e.questContent, e.questId);
        default:
            throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(t));
    }
}
