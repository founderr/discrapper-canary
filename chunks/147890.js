t.r(n),
    t.d(n, {
        goHome: function () {
            return u;
        },
        goSearch: function () {
            return N;
        },
        goToAppDirectory: function () {
            return s;
        },
        goToApplication: function () {
            return T;
        },
        goToApplicationSection: function () {
            return E;
        },
        goToApplicationStoreSku: function () {
            return d;
        },
        goToCategory: function () {
            return _;
        },
        replaceAppDirectoryURLWith: function () {
            return I;
        }
    }),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var c = t(703656),
    a = t(626135),
    l = t(34674),
    o = t(132871),
    r = t(272242),
    i = t(981631);
let s = (e) => {
        let { view: n = o.ApplicationDirectoryViews.HOME, guildId: t, applicationId: c, applicationSection: l, entrypoint: s, skuId: _ } = e,
            I = {
                ...s,
                pathname: window.location.pathname
            };
        switch ((a.default.track(i.rMx.APP_DIRECTORY_OPENED, { source: null == I ? void 0 : I.name }), (0, o.resetApplicationDirectoryHistory)(), (0, o.setEntrypoint)(I), null != t && (0, o.setGuildId)(t), n === o.ApplicationDirectoryViews.APPLICATION && null == c && (n = o.ApplicationDirectoryViews.HOME), n)) {
            case o.ApplicationDirectoryViews.HOME:
                u();
                break;
            case o.ApplicationDirectoryViews.SEARCH:
                N();
                break;
            case o.ApplicationDirectoryViews.APPLICATION:
                if (null != c) {
                    if (null != l) {
                        if (l === r.ApplicationDirectoryProfileSections.STORE && null != _) {
                            d({
                                applicationId: c,
                                skuId: _
                            });
                            break;
                        }
                        E({
                            applicationId: c,
                            section: l
                        });
                        break;
                    }
                    T({ applicationId: c });
                }
        }
    },
    u = () => {
        let e = { previousView: (0, o.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    T = (e) => {
        let { applicationId: n } = e,
            t = { previousView: (0, o.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE(n), { state: t });
    },
    E = (e) => {
        let { applicationId: n, section: t } = e,
            a = { previousView: (0, o.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(n, t), { state: a });
    },
    d = (e) => {
        let { applicationId: n, skuId: t } = e,
            a = { previousView: (0, o.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t), { state: a });
    },
    N = function () {
        let { query: e, categoryId: n, page: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = new URLSearchParams(),
            l = { previousView: (0, o.getCurrentView)() };
        null != e && a.set('q', e),
            null != n && a.set('category_id', n.toString()),
            null != t && a.set('page', t.toString()),
            (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_SEARCH, {
                search: a.toString(),
                state: l
            });
    },
    _ = (e) => {
        let { categoryId: n } = e;
        N({ categoryId: null != n ? n : l.MU });
    },
    I = (e) => {
        let {
            location: { state: n }
        } = (0, c.s1)();
        (0, c.dL)(e, n);
    };
