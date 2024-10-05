t.r(n),
    t.d(n, {
        goHome: function () {
            return u;
        },
        goSearch: function () {
            return d;
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
            return N;
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
    o = t(34674),
    l = t(132871),
    r = t(272242),
    i = t(981631);
let s = (e) => {
        let { view: n = l.ApplicationDirectoryViews.HOME, guildId: t, applicationId: c, applicationSection: o, entrypoint: s, skuId: _ } = e,
            I = {
                ...s,
                pathname: window.location.pathname
            };
        switch ((a.default.track(i.rMx.APP_DIRECTORY_OPENED, { source: null == I ? void 0 : I.name }), (0, l.resetApplicationDirectoryHistory)(), (0, l.setEntrypoint)(I), null != t && (0, l.setGuildId)(t), n === l.ApplicationDirectoryViews.APPLICATION && null == c && (n = l.ApplicationDirectoryViews.HOME), n)) {
            case l.ApplicationDirectoryViews.HOME:
                u();
                break;
            case l.ApplicationDirectoryViews.SEARCH:
                d();
                break;
            case l.ApplicationDirectoryViews.APPLICATION:
                if (null != c) {
                    if (null != o) {
                        if (o === r.ApplicationDirectoryProfileSections.STORE && null != _) {
                            N({
                                applicationId: c,
                                skuId: _
                            });
                            break;
                        }
                        E({
                            applicationId: c,
                            section: o
                        });
                        break;
                    }
                    T({ applicationId: c });
                }
        }
    },
    u = () => {
        let e = { previousView: (0, l.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    T = (e) => {
        let { applicationId: n } = e,
            t = { previousView: (0, l.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE(n), { state: t });
    },
    E = (e) => {
        let { applicationId: n, section: t } = e,
            a = { previousView: (0, l.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(n, t), { state: a });
    },
    N = (e) => {
        let { applicationId: n, skuId: t } = e,
            a = { previousView: (0, l.getCurrentView)() };
        (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t), { state: a });
    },
    d = function () {
        let { query: e, categoryId: n, page: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = new URLSearchParams(),
            o = { previousView: (0, l.getCurrentView)() };
        null != e && a.set('q', e),
            null != n && a.set('category_id', n.toString()),
            null != t && a.set('page', t.toString()),
            (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_SEARCH, {
                search: a.toString(),
                state: o
            });
    },
    _ = (e) => {
        let { categoryId: n } = e;
        d({ categoryId: null != n ? n : o.MU });
    },
    I = (e) => {
        let {
            location: { state: n }
        } = (0, c.s1)();
        (0, c.dL)(e, n);
    };
