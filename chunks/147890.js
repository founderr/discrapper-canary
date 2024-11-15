n.r(t),
    n.d(t, {
        goHome: function () {
            return f;
        },
        goSearch: function () {
            return h;
        },
        goToAppDirectory: function () {
            return _;
        },
        goToApplication: function () {
            return b;
        },
        goToApplicationSection: function () {
            return g;
        },
        goToApplicationStoreSku: function () {
            return p;
        },
        goToCategory: function () {
            return m;
        },
        replaceAppDirectoryURLWith: function () {
            return C;
        }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var o = n(749681),
    i = n(352057),
    a = n(703656),
    r = n(626135),
    c = n(34674),
    l = n(132871),
    s = n(272242),
    u = n(981631),
    d = n(49898);
let _ = (e) => {
        let { view: t = l.ApplicationDirectoryViews.HOME, guildId: n, applicationId: a, applicationSection: c, entrypoint: _, skuId: m } = e;
        if ((0, i.r)({ location: _.name })) {
            (0, o.u)({
                tab: d.F$.APPS,
                applicationId: a
            });
            return;
        }
        let C = {
            ..._,
            pathname: window.location.pathname
        };
        switch ((r.default.track(u.rMx.APP_DIRECTORY_OPENED, { source: null == C ? void 0 : C.name }), (0, l.resetApplicationDirectoryHistory)(), (0, l.setEntrypoint)(C), null != n && (0, l.setGuildId)(n), t === l.ApplicationDirectoryViews.APPLICATION && null == a && (t = l.ApplicationDirectoryViews.HOME), t)) {
            case l.ApplicationDirectoryViews.HOME:
                f();
                break;
            case l.ApplicationDirectoryViews.SEARCH:
                h();
                break;
            case l.ApplicationDirectoryViews.APPLICATION:
                if (null != a) {
                    if (null != c) {
                        if (c === s.ApplicationDirectoryProfileSections.STORE && null != m) {
                            p({
                                applicationId: a,
                                skuId: m
                            });
                            break;
                        }
                        g({
                            applicationId: a,
                            section: c
                        });
                        break;
                    }
                    b({ applicationId: a });
                }
        }
    },
    f = () => {
        let e = { previousView: (0, l.getCurrentView)() };
        (0, a.uL)(u.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    b = (e) => {
        let { applicationId: t } = e,
            n = { previousView: (0, l.getCurrentView)() };
        (0, a.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
    },
    g = (e) => {
        let { applicationId: t, section: n } = e,
            o = { previousView: (0, l.getCurrentView)() };
        (0, a.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), { state: o });
    },
    p = (e) => {
        let { applicationId: t, skuId: n } = e,
            o = { previousView: (0, l.getCurrentView)() };
        (0, a.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), { state: o });
    },
    h = function () {
        let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = new URLSearchParams(),
            i = { previousView: (0, l.getCurrentView)() };
        null != e && o.set('q', e),
            null != t && o.set('category_id', t.toString()),
            null != n && o.set('page', n.toString()),
            (0, a.uL)(u.Z5c.APPLICATION_DIRECTORY_SEARCH, {
                search: o.toString(),
                state: i
            });
    },
    m = (e) => {
        let { categoryId: t } = e;
        h({ categoryId: null != t ? t : c.MU });
    },
    C = (e) => {
        let {
            location: { state: t }
        } = (0, a.s1)();
        (0, a.dL)(e, t);
    };
