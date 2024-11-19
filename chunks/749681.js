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
var o = n(859921),
    i = n(341907),
    a = n(703656),
    r = n(836768),
    c = n(49898),
    l = n(981631),
    s = n(128449);
function u(e) {
    let t = e.tab;
    switch ((r.Z.setState({ selectedTab: t }), t)) {
        case c.F$.SERVERS:
            var n, u;
            let d = e.selectedServersTab;
            return (
                null != d
                    ? o.Z.setState({
                          selectedTab: d,
                          entrypoint: null !== (n = e.entrypoint) && void 0 !== n ? n : s.Qq.UNKNOWN
                      })
                    : o.Z.setState({ entrypoint: null !== (u = e.entrypoint) && void 0 !== u ? u : s.Qq.UNKNOWN }),
                (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
            );
        case c.F$.APPS:
            if (null != e.applicationId) return (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId));
            if (null != e.query) {
                let t = new URLSearchParams();
                return '' !== e.query && t.set('q', e.query), null != e.categoryId && t.set('category_id', e.categoryId.toString()), null != e.page && t.set('page', e.page.toString()), (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: t.toString() });
            } else if (null != e.categoryId) return (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()));
            else return (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS);
        case c.F$.QUESTS:
            return (0, i.navigateToQuestHome)(e.location, e.questContent, e.questId);
        default:
            throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(t));
    }
}
