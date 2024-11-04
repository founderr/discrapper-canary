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
            return m;
        },
        replaceAppDirectoryURLWith: function () {
            return g;
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
    l = n(132871),
    a = n(272242),
    o = n(981631);
let c = (e) => {
        let { view: t = l.ApplicationDirectoryViews.HOME, guildId: n, applicationId: i, applicationSection: s, entrypoint: c, skuId: m } = e,
            g = {
                ...c,
                pathname: window.location.pathname
            };
        switch ((r.default.track(o.rMx.APP_DIRECTORY_OPENED, { source: null == g ? void 0 : g.name }), (0, l.resetApplicationDirectoryHistory)(), (0, l.setEntrypoint)(g), null != n && (0, l.setGuildId)(n), t === l.ApplicationDirectoryViews.APPLICATION && null == i && (t = l.ApplicationDirectoryViews.HOME), t)) {
            case l.ApplicationDirectoryViews.HOME:
                d();
                break;
            case l.ApplicationDirectoryViews.SEARCH:
                f();
                break;
            case l.ApplicationDirectoryViews.APPLICATION:
                if (null != i) {
                    if (null != s) {
                        if (s === a.ApplicationDirectoryProfileSections.STORE && null != m) {
                            p({
                                applicationId: i,
                                skuId: m
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
        let e = { previousView: (0, l.getCurrentView)() };
        (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    u = (e) => {
        let { applicationId: t } = e,
            n = { previousView: (0, l.getCurrentView)() };
        (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
    },
    h = (e) => {
        let { applicationId: t, section: n } = e,
            r = { previousView: (0, l.getCurrentView)() };
        (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), { state: r });
    },
    p = (e) => {
        let { applicationId: t, skuId: n } = e,
            r = { previousView: (0, l.getCurrentView)() };
        (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), { state: r });
    },
    f = function () {
        let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = new URLSearchParams(),
            s = { previousView: (0, l.getCurrentView)() };
        null != e && r.set('q', e),
            null != t && r.set('category_id', t.toString()),
            null != n && r.set('page', n.toString()),
            (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_SEARCH, {
                search: r.toString(),
                state: s
            });
    },
    m = (e) => {
        let { categoryId: t } = e;
        f({ categoryId: null != t ? t : s.MU });
    },
    g = (e) => {
        let {
            location: { state: t }
        } = (0, i.s1)();
        (0, i.dL)(e, t);
    };
