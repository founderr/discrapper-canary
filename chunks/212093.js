n.d(t, {
    AQ: function () {
        return E;
    },
    uY: function () {
        return f;
    }
});
var r = n(653041);
var i = n(47120);
n(664751), n(544891), n(343817);
var a = n(570140),
    o = n(703656);
n(683301), n(230307), n(70956), n(900849);
var s = n(981631);
n(731455);
let l = 'NKTZZ4AIZU',
    u = window.GLOBAL_ENV.ALGOLIA_KEY,
    c = 'production' === window.GLOBAL_ENV.PROJECT_ENV ? 'prod_discoverable_guilds' : 'staging' === window.GLOBAL_ENV.PROJECT_ENV ? 'stg_discoverable_guilds' : 'dev_discoverable_guilds',
    d = null;
function _(e) {
    let { query: t, preferredLocale: n, offset: r, limit: i, categoryId: a, tag: o } = e,
        s = getHistory(),
        l = querystring.stringify({
            query: t,
            offset: r,
            limit: i,
            preferredLocale: n,
            categoryId: a,
            tag: o
        }),
        u = s.location.search;
    if (!(null != u && u.length > 0 && u.startsWith('?')) || (u.startsWith('?') && u.split('?')[1] !== l)) {
        let e = { search: l };
        transitionTo(Routes.GUILD_DISCOVERY, e);
    }
}
function E() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    e && (0, o.uL)(s.Z5c.GUILD_DISCOVERY), a.Z.dispatch({ type: 'GUILD_DISCOVERY_CLEAR_SEARCH' });
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    a.Z.dispatch({
        type: 'GUILD_DISCOVERY_SELECT_CATEGORY',
        categoryId: e,
        isHomepage: t
    });
}
function h(e, t) {
    let { offset: n, limit: r, guilds: i, total: a } = e;
    Dispatcher.dispatch({
        type: 'GUILD_DISCOVERY_FETCH_SUCCESS',
        section: t,
        guilds: i,
        offset: n,
        limit: r,
        total: a
    });
}
