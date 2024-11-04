n.r(t),
    n.d(t, {
        goHome: function () {
            return d;
        },
        goSearch: function () {
            return f;
        },
        goToAppDirectory: function () {
            return c;
        },
        goToApplication: function () {
            return u;
        },
        goToApplicationSection: function () {
            return h;
        },
        goToApplicationStoreSku: function () {
            return p;
        },
        goToCategory: function () {
            return g;
        },
        replaceAppDirectoryURLWith: function () {
            return m;
        }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(703656),
    r = n(626135),
    s = n(34674),
    a = n(132871),
    l = n(272242),
    o = n(981631);
let c = (e) => {
        let { view: t = a.ApplicationDirectoryViews.HOME, guildId: n, applicationId: i, applicationSection: s, entrypoint: c, skuId: g } = e,
            m = {
                ...c,
                pathname: window.location.pathname
            };
        switch ((r.default.track(o.rMx.APP_DIRECTORY_OPENED, { source: null == m ? void 0 : m.name }), (0, a.resetApplicationDirectoryHistory)(), (0, a.setEntrypoint)(m), null != n && (0, a.setGuildId)(n), t === a.ApplicationDirectoryViews.APPLICATION && null == i && (t = a.ApplicationDirectoryViews.HOME), t)) {
            case a.ApplicationDirectoryViews.HOME:
                d();
                break;
            case a.ApplicationDirectoryViews.SEARCH:
                f();
                break;
            case a.ApplicationDirectoryViews.APPLICATION:
                if (null != i) {
                    if (null != s) {
                        if (s === l.ApplicationDirectoryProfileSections.STORE && null != g) {
                            p({
                                applicationId: i,
                                skuId: g
                            });
                            break;
                        }
                        h({
                            applicationId: i,
                            section: s
                        });
                        break;
                    }
                    u({ applicationId: i });
                }
        }
    },
    d = () => {
        let e = { previousView: (0, a.getCurrentView)() };
        (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    u = (e) => {
        let { applicationId: t } = e,
            n = { previousView: (0, a.getCurrentView)() };
        (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
    },
    h = (e) => {
        let { applicationId: t, section: n } = e,
            r = { previousView: (0, a.getCurrentView)() };
        (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), { state: r });
    },
    p = (e) => {
        let { applicationId: t, skuId: n } = e,
            r = { previousView: (0, a.getCurrentView)() };
        (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), { state: r });
    },
    f = function () {
        let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = new URLSearchParams(),
            s = { previousView: (0, a.getCurrentView)() };
        null != e && r.set('q', e),
            null != t && r.set('category_id', t.toString()),
            null != n && r.set('page', n.toString()),
            (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_SEARCH, {
                search: r.toString(),
                state: s
            });
    },
    g = (e) => {
        let { categoryId: t } = e;
        f({ categoryId: null != t ? t : s.MU });
    },
    m = (e) => {
        let {
            location: { state: t }
        } = (0, i.s1)();
        (0, i.dL)(e, t);
    };
