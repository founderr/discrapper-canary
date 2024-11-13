n.r(t),
    n.d(t, {
        goHome: function () {
            return A;
        },
        goSearch: function () {
            return S;
        },
        goToAppDirectory: function () {
            return p;
        },
        goToApplication: function () {
            return m;
        },
        goToApplicationSection: function () {
            return E;
        },
        goToApplicationStoreSku: function () {
            return I;
        },
        goToCategory: function () {
            return f;
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
var r = n(749681),
    i = n(352057),
    l = n(703656),
    o = n(626135),
    u = n(34674),
    c = n(132871),
    a = n(272242),
    s = n(981631),
    d = n(49898);
let p = (e) => {
        let { view: t = c.ApplicationDirectoryViews.HOME, guildId: n, applicationId: l, applicationSection: u, entrypoint: p, skuId: f } = e;
        if ((0, i.r)({ location: p.name })) {
            (0, r.u)({
                tab: d.F$.APPS,
                applicationId: l
            });
            return;
        }
        let _ = {
            ...p,
            pathname: window.location.pathname
        };
        switch ((o.default.track(s.rMx.APP_DIRECTORY_OPENED, { source: null == _ ? void 0 : _.name }), (0, c.resetApplicationDirectoryHistory)(), (0, c.setEntrypoint)(_), null != n && (0, c.setGuildId)(n), t === c.ApplicationDirectoryViews.APPLICATION && null == l && (t = c.ApplicationDirectoryViews.HOME), t)) {
            case c.ApplicationDirectoryViews.HOME:
                A();
                break;
            case c.ApplicationDirectoryViews.SEARCH:
                S();
                break;
            case c.ApplicationDirectoryViews.APPLICATION:
                if (null != l) {
                    if (null != u) {
                        if (u === a.ApplicationDirectoryProfileSections.STORE && null != f) {
                            I({
                                applicationId: l,
                                skuId: f
                            });
                            break;
                        }
                        E({
                            applicationId: l,
                            section: u
                        });
                        break;
                    }
                    m({ applicationId: l });
                }
        }
    },
    A = () => {
        let e = { previousView: (0, c.getCurrentView)() };
        (0, l.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    m = (e) => {
        let { applicationId: t } = e,
            n = { previousView: (0, c.getCurrentView)() };
        (0, l.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
    },
    E = (e) => {
        let { applicationId: t, section: n } = e,
            r = { previousView: (0, c.getCurrentView)() };
        (0, l.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), { state: r });
    },
    I = (e) => {
        let { applicationId: t, skuId: n } = e,
            r = { previousView: (0, c.getCurrentView)() };
        (0, l.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), { state: r });
    },
    S = function () {
        let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = new URLSearchParams(),
            i = { previousView: (0, c.getCurrentView)() };
        null != e && r.set('q', e),
            null != t && r.set('category_id', t.toString()),
            null != n && r.set('page', n.toString()),
            (0, l.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
                search: r.toString(),
                state: i
            });
    },
    f = (e) => {
        let { categoryId: t } = e;
        S({ categoryId: null != t ? t : u.MU });
    },
    _ = (e) => {
        let {
            location: { state: t }
        } = (0, l.s1)();
        (0, l.dL)(e, t);
    };
