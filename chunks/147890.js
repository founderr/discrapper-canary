t.r(n),
    t.d(n, {
        goHome: function () {
            return u;
        },
        goSearch: function () {
            return E;
        },
        goToAppDirectory: function () {
            return s;
        },
        goToApplication: function () {
            return d;
        },
        goToApplicationSection: function () {
            return T;
        },
        goToApplicationStoreSku: function () {
            return A;
        },
        goToCategory: function () {
            return m;
        },
        replaceAppDirectoryURLWith: function () {
            return p;
        }
    }),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var c = t(703656),
    l = t(626135),
    o = t(34674),
    a = t(132871),
    r = t(272242),
    i = t(981631);
let s = (e) => {
        let { view: n = a.ApplicationDirectoryViews.HOME, guildId: t, applicationId: c, applicationSection: o, entrypoint: s, skuId: m } = e,
            p = {
                ...s,
                pathname: window.location.pathname
            };
        switch ((l.default.track(i.rMx.APP_DIRECTORY_OPENED, { source: null == p ? void 0 : p.name }), (0, a.resetApplicationDirectoryHistory)(), (0, a.setEntrypoint)(p), null != t && (0, a.setGuildId)(t), n === a.ApplicationDirectoryViews.APPLICATION && null == c && (n = a.ApplicationDirectoryViews.HOME), n)) {
            case a.ApplicationDirectoryViews.HOME:
                u();
                break;
            case a.ApplicationDirectoryViews.SEARCH:
                E();
                break;
            case a.ApplicationDirectoryViews.APPLICATION:
                if (null != c) {
                    if (null != o) {
                        if (o === r.ApplicationDirectoryProfileSections.STORE && null != m) {
                            A({
                                applicationId: c,
                                skuId: m
                            });
                            break;
                        }
                        T({
                            applicationId: c,
                            section: o
                        });
                        break;
                    }
                    d({ applicationId: c });
                }
        }
    },
    u = () => {
        let e = { previousView: (0, a.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    d = (e) => {
        let { applicationId: n } = e,
            t = { previousView: (0, a.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE(n), { state: t });
    },
    T = (e) => {
        let { applicationId: n, section: t } = e,
            l = { previousView: (0, a.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(n, t), { state: l });
    },
    A = (e) => {
        let { applicationId: n, skuId: t } = e,
            l = { previousView: (0, a.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t), { state: l });
    },
    E = function () {
        let { query: e, categoryId: n, page: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            l = new URLSearchParams(),
            o = { previousView: (0, a.getCurrentView)() };
        null != e && l.set('q', e),
            null != n && l.set('category_id', n.toString()),
            null != t && l.set('page', t.toString()),
            (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_SEARCH, {
                search: l.toString(),
                state: o
            });
    },
    m = (e) => {
        let { categoryId: n } = e;
        E({ categoryId: null != n ? n : o.MU });
    },
    p = (e) => {
        let {
            location: { state: n }
        } = (0, c.s1)();
        (0, c.dL)(e, n);
    };
