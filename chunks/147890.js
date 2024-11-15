n.r(t),
    n.d(t, {
        goHome: function () {
            return p;
        },
        goSearch: function () {
            return v;
        },
        goToAppDirectory: function () {
            return h;
        },
        goToApplication: function () {
            return f;
        },
        goToApplicationSection: function () {
            return g;
        },
        goToApplicationStoreSku: function () {
            return m;
        },
        goToCategory: function () {
            return E;
        },
        replaceAppDirectoryURLWith: function () {
            return _;
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
    l = n(34674),
    o = n(132871),
    c = n(272242),
    d = n(981631),
    u = n(49898);
let h = (e) => {
        let { view: t = o.ApplicationDirectoryViews.HOME, guildId: n, applicationId: s, applicationSection: l, entrypoint: h, skuId: E } = e;
        if ((0, r.r)({ location: h.name })) {
            (0, i.u)({
                tab: u.F$.APPS,
                applicationId: s
            });
            return;
        }
        let _ = {
            ...h,
            pathname: window.location.pathname
        };
        switch ((a.default.track(d.rMx.APP_DIRECTORY_OPENED, { source: null == _ ? void 0 : _.name }), (0, o.resetApplicationDirectoryHistory)(), (0, o.setEntrypoint)(_), null != n && (0, o.setGuildId)(n), t === o.ApplicationDirectoryViews.APPLICATION && null == s && (t = o.ApplicationDirectoryViews.HOME), t)) {
            case o.ApplicationDirectoryViews.HOME:
                p();
                break;
            case o.ApplicationDirectoryViews.SEARCH:
                v();
                break;
            case o.ApplicationDirectoryViews.APPLICATION:
                if (null != s) {
                    if (null != l) {
                        if (l === c.ApplicationDirectoryProfileSections.STORE && null != E) {
                            m({
                                applicationId: s,
                                skuId: E
                            });
                            break;
                        }
                        g({
                            applicationId: s,
                            section: l
                        });
                        break;
                    }
                    f({ applicationId: s });
                }
        }
    },
    p = () => {
        let e = { previousView: (0, o.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    f = (e) => {
        let { applicationId: t } = e,
            n = { previousView: (0, o.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
    },
    g = (e) => {
        let { applicationId: t, section: n } = e,
            i = { previousView: (0, o.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), { state: i });
    },
    m = (e) => {
        let { applicationId: t, skuId: n } = e,
            i = { previousView: (0, o.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), { state: i });
    },
    v = function () {
        let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = new URLSearchParams(),
            r = { previousView: (0, o.getCurrentView)() };
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
        v({ categoryId: null != t ? t : l.MU });
    },
    _ = (e) => {
        let {
            location: { state: t }
        } = (0, s.s1)();
        (0, s.dL)(e, t);
    };
