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
var r = n(207796),
    i = n(859921),
    l = n(341907),
    o = n(703656),
    u = n(836768),
    c = n(49898),
    a = n(981631),
    s = n(128449);
function d(e) {
    let t = e.tab;
    switch ((u.Z.setState({ selectedTab: t }), t)) {
        case c.F$.SERVERS:
            var n, d;
            let p = e.selectedServersTab;
            null != p
                ? i.Z.setState({
                      selectedTab: p,
                      entrypoint: null !== (n = e.entrypoint) && void 0 !== n ? n : s.Qq.UNKNOWN
                  })
                : i.Z.setState({ entrypoint: null !== (d = e.entrypoint) && void 0 !== d ? d : s.Qq.UNKNOWN });
            let A = (function (e) {
                let { extra: t } = e,
                    n = {},
                    i = r.GN.getState().entrypointGameId;
                return (
                    null != i && (n.search = '?game='.concat(i)),
                    null != t &&
                        (n = {
                            ...t,
                            ...n
                        }),
                    n
                );
            })({ extra: e.extra });
            return (0, o.uL)(a.Z5c.GLOBAL_DISCOVERY_SERVERS, A);
        case c.F$.APPS:
            if (null != e.applicationId) return (0, o.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId));
            if (null != e.query) {
                let t = new URLSearchParams();
                return t.set('q', e.query), null != e.categoryId && t.set('category_id', e.categoryId.toString()), null != e.page && t.set('page', e.page.toString()), (0, o.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, { search: t.toString() });
            } else if (null != e.categoryId) return (0, o.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()));
            else return (0, o.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS);
        case c.F$.QUESTS:
            return (0, l.navigateToQuestHome)(e.location, e.questContent, e.questId);
        default:
            throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(t));
    }
}
