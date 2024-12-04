n.r(t),
    n.d(t, {
        goHome: function () {
            return f;
        },
        goSearch: function () {
            return _;
        },
        goToAppDirectory: function () {
            return p;
        },
        goToApplication: function () {
            return g;
        },
        goToApplicationSection: function () {
            return m;
        },
        goToApplicationStoreSku: function () {
            return v;
        },
        goToCategory: function () {
            return E;
        },
        replaceAppDirectoryURLWith: function () {
            return x;
        }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(749681),
    r = n(352057),
    s = n(703656),
    a = n(626135),
    o = n(34674),
    l = n(132871),
    c = n(272242),
    d = n(981631),
    u = n(49898),
    h = n(979007);
let p = (e) => {
        let { view: t = l.ApplicationDirectoryViews.HOME, guildId: n, applicationId: s, applicationSection: o, entrypoint: p, skuId: E } = e;
        if ((0, r.K)({ location: p.name })) {
            let e = null == s ? void 0 : o === c.ApplicationDirectoryProfileSections.STORE ? h.GlobalDiscoveryAppsSections.STORE : h.GlobalDiscoveryAppsSections.ABOUT;
            (0, i.transitionToGlobalDiscovery)({
                tab: u.GlobalDiscoveryTab.APPS,
                applicationId: s,
                section: e,
                skuId: e === h.GlobalDiscoveryAppsSections.STORE ? E : void 0
            });
            return;
        }
        let x = {
            ...p,
            pathname: window.location.pathname
        };
        switch ((a.default.track(d.rMx.APP_DIRECTORY_OPENED, { source: null == x ? void 0 : x.name }), (0, l.resetApplicationDirectoryHistory)(), (0, l.setEntrypoint)(x), null != n && (0, l.setGuildId)(n), t === l.ApplicationDirectoryViews.APPLICATION && null == s && (t = l.ApplicationDirectoryViews.HOME), t)) {
            case l.ApplicationDirectoryViews.HOME:
                f();
                break;
            case l.ApplicationDirectoryViews.SEARCH:
                _();
                break;
            case l.ApplicationDirectoryViews.APPLICATION:
                if (null != s) {
                    if (null != o) {
                        if (o === c.ApplicationDirectoryProfileSections.STORE && null != E) {
                            v({
                                applicationId: s,
                                skuId: E
                            });
                            break;
                        }
                        m({
                            applicationId: s,
                            section: o
                        });
                        break;
                    }
                    g({ applicationId: s });
                }
        }
    },
    f = () => {
        let e = { previousView: (0, l.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    g = (e) => {
        let { applicationId: t } = e,
            n = { previousView: (0, l.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
    },
    m = (e) => {
        let { applicationId: t, section: n } = e,
            i = { previousView: (0, l.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), { state: i });
    },
    v = (e) => {
        let { applicationId: t, skuId: n } = e,
            i = { previousView: (0, l.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), { state: i });
    },
    _ = function () {
        let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = new URLSearchParams(),
            r = { previousView: (0, l.getCurrentView)() };
        null != e && i.set('q', e),
            null != t && i.set('category_id', t.toString()),
            null != n && i.set('page', n.toString()),
            (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY_SEARCH, {
                search: i.toString(),
                state: r
            });
    },
    E = (e) => {
        let { categoryId: t } = e;
        _({ categoryId: null != t ? t : o.MU });
    },
    x = (e) => {
        let {
            location: { state: t }
        } = (0, s.s1)();
        (0, s.dL)(e, t);
    };
