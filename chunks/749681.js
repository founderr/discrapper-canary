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
var i = n(207796),
    l = n(859921),
    r = n(341907),
    a = n(703656),
    o = n(836768),
    s = n(49898),
    c = n(981631),
    u = n(128449);
function d(e) {
    let t = e.tab;
    switch ((o.Z.setState({ selectedTab: t }), t)) {
        case s.F$.SERVERS:
            var n, d;
            let h = e.selectedServersTab;
            null != h
                ? l.Z.setState({
                      selectedTab: h,
                      entrypoint: null !== (n = e.entrypoint) && void 0 !== n ? n : u.Qq.UNKNOWN
                  })
                : l.Z.setState({ entrypoint: null !== (d = e.entrypoint) && void 0 !== d ? d : u.Qq.UNKNOWN });
            let p = (function (e) {
                let { extra: t } = e,
                    n = {},
                    l = i.GN.getState().entrypointGameId;
                return (
                    null != l && (n.search = '?game='.concat(l)),
                    null != t &&
                        (n = {
                            ...t,
                            ...n
                        }),
                    n
                );
            })({ extra: e.extra });
            return (0, a.uL)(c.Z5c.GLOBAL_DISCOVERY_SERVERS, p);
        case s.F$.APPS:
            if (null != e.applicationId) return (0, a.uL)(c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId));
            if (null != e.query) {
                let t = new URLSearchParams();
                return t.set('q', e.query), null != e.categoryId && t.set('category_id', e.categoryId.toString()), null != e.page && t.set('page', e.page.toString()), (0, a.uL)(c.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: t.toString() });
            } else if (null != e.categoryId) return (0, a.uL)(c.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()));
            else return (0, a.uL)(c.Z5c.GLOBAL_DISCOVERY_APPS);
        case s.F$.QUESTS:
            return (0, r.navigateToQuestHome)(e.location, e.questContent, e.questId);
        default:
            throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(t));
    }
}
