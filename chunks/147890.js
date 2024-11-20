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
            return _;
        },
        replaceAppDirectoryURLWith: function () {
            return E;
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
    u = n(49898);
let h = (e) => {
        let { view: t = l.ApplicationDirectoryViews.HOME, guildId: n, applicationId: s, applicationSection: o, entrypoint: h, skuId: _ } = e;
        if ((0, r.r)({ location: h.name })) {
            (0, i.u)({
                tab: u.F$.APPS,
                applicationId: s
            });
            return;
        }
        let E = {
            ...h,
            pathname: window.location.pathname
        };
        switch ((a.default.track(d.rMx.APP_DIRECTORY_OPENED, { source: null == E ? void 0 : E.name }), (0, l.resetApplicationDirectoryHistory)(), (0, l.setEntrypoint)(E), null != n && (0, l.setGuildId)(n), t === l.ApplicationDirectoryViews.APPLICATION && null == s && (t = l.ApplicationDirectoryViews.HOME), t)) {
            case l.ApplicationDirectoryViews.HOME:
                p();
                break;
            case l.ApplicationDirectoryViews.SEARCH:
                v();
                break;
            case l.ApplicationDirectoryViews.APPLICATION:
                if (null != s) {
                    if (null != o) {
                        if (o === c.ApplicationDirectoryProfileSections.STORE && null != _) {
                            m({
                                applicationId: s,
                                skuId: _
                            });
                            break;
                        }
                        g({
                            applicationId: s,
                            section: o
                        });
                        break;
                    }
                    f({ applicationId: s });
                }
        }
    },
    p = () => {
        let e = { previousView: (0, l.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    f = (e) => {
        let { applicationId: t } = e,
            n = { previousView: (0, l.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
    },
    g = (e) => {
        let { applicationId: t, section: n } = e,
            i = { previousView: (0, l.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), { state: i });
    },
    m = (e) => {
        let { applicationId: t, skuId: n } = e,
            i = { previousView: (0, l.getCurrentView)() };
        (0, s.uL)(d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), { state: i });
    },
    v = function () {
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
    _ = (e) => {
        let { categoryId: t } = e;
        v({ categoryId: null != t ? t : o.MU });
    },
    E = (e) => {
        let {
            location: { state: t }
        } = (0, s.s1)();
        (0, s.dL)(e, t);
    };
