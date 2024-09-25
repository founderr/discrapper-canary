n.r(t),
    n.d(t, {
        goHome: function () {
            return h;
        },
        goSearch: function () {
            return T;
        },
        goToAppDirectory: function () {
            return f;
        },
        goToApplication: function () {
            return p;
        },
        goToApplicationSection: function () {
            return m;
        },
        goToApplicationStoreSku: function () {
            return I;
        },
        goToCategory: function () {
            return g;
        },
        replaceAppDirectoryURLWith: function () {
            return S;
        }
    });
var r = n(610138);
var i = n(216116);
var a = n(78328);
var o = n(815648);
var s = n(47120);
var l = n(703656),
    u = n(626135),
    c = n(34674),
    d = n(132871),
    _ = n(272242),
    E = n(981631);
let f = (e) => {
        let { view: t = d.ApplicationDirectoryViews.HOME, guildId: n, applicationId: r, applicationSection: i, entrypoint: a, skuId: o } = e,
            s = {
                ...a,
                pathname: window.location.pathname
            };
        switch ((u.default.track(E.rMx.APP_DIRECTORY_OPENED, { source: null == s ? void 0 : s.name }), (0, d.resetApplicationDirectoryHistory)(), (0, d.setEntrypoint)(s), null != n && (0, d.setGuildId)(n), t === d.ApplicationDirectoryViews.APPLICATION && null == r && (t = d.ApplicationDirectoryViews.HOME), t)) {
            case d.ApplicationDirectoryViews.HOME:
                h();
                break;
            case d.ApplicationDirectoryViews.SEARCH:
                T();
                break;
            case d.ApplicationDirectoryViews.APPLICATION:
                if (null != r) {
                    if (null != i) {
                        if (i === _.ApplicationDirectoryProfileSections.STORE && null != o) {
                            I({
                                applicationId: r,
                                skuId: o
                            });
                            break;
                        }
                        m({
                            applicationId: r,
                            section: i
                        });
                        break;
                    }
                    p({ applicationId: r });
                }
        }
    },
    h = () => {
        let e = { previousView: (0, d.getCurrentView)() };
        (0, l.uL)(E.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    p = (e) => {
        let { applicationId: t } = e,
            n = { previousView: (0, d.getCurrentView)() };
        (0, l.uL)(E.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
    },
    m = (e) => {
        let { applicationId: t, section: n } = e,
            r = { previousView: (0, d.getCurrentView)() };
        (0, l.uL)(E.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), { state: r });
    },
    I = (e) => {
        let { applicationId: t, skuId: n } = e,
            r = { previousView: (0, d.getCurrentView)() };
        (0, l.uL)(E.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), { state: r });
    },
    T = function () {
        let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = new URLSearchParams(),
            i = { previousView: (0, d.getCurrentView)() };
        null != e && r.set('q', e),
            null != t && r.set('category_id', t.toString()),
            null != n && r.set('page', n.toString()),
            (0, l.uL)(E.Z5c.APPLICATION_DIRECTORY_SEARCH, {
                search: r.toString(),
                state: i
            });
    },
    g = (e) => {
        let { categoryId: t } = e;
        T({ categoryId: null != t ? t : c.MU });
    },
    S = (e) => {
        let {
            location: { state: t }
        } = (0, l.s1)();
        (0, l.dL)(e, t);
    };
