n.d(t, {
    u: function () {
        return d;
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
    l = n(49898),
    o = n(981631),
    c = n(128449);
function d(e) {
    let t = e.tab;
    switch ((a.Z.setState({ selectedTab: t }), t)) {
        case l.F$.SERVERS:
            var n, d;
            let u = e.selectedServersTab;
            return (
                null != u
                    ? i.Z.setState({
                          selectedTab: u,
                          entrypoint: null !== (n = e.entrypoint) && void 0 !== n ? n : c.Qq.UNKNOWN
                      })
                    : i.Z.setState({ entrypoint: null !== (d = e.entrypoint) && void 0 !== d ? d : c.Qq.UNKNOWN }),
                (0, s.uL)(o.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
            );
        case l.F$.APPS:
            if (null != e.applicationId) return (0, s.uL)(o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId));
            if (null != e.query) {
                let t = new URLSearchParams();
                return t.set('q', e.query), null != e.categoryId && t.set('category_id', e.categoryId.toString()), null != e.page && t.set('page', e.page.toString()), (0, s.uL)(o.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: t.toString() });
            } else if (null != e.categoryId) return (0, s.uL)(o.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()));
            else return (0, s.uL)(o.Z5c.GLOBAL_DISCOVERY_APPS);
        case l.F$.QUESTS:
            return (0, r.navigateToQuestHome)(e.location, e.questContent, e.questId);
        default:
            throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(t));
    }
}
