n.r(t),
    n.d(t, {
        goHome: function () {
            return A;
        },
        goSearch: function () {
            return P;
        },
        goToAppDirectory: function () {
            return I;
        },
        goToApplication: function () {
            return O;
        },
        goToApplicationSection: function () {
            return d;
        },
        goToApplicationStoreSku: function () {
            return E;
        },
        goToCategory: function () {
            return _;
        },
        replaceAppDirectoryURLWith: function () {
            return y;
        }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(749681),
    o = n(352057),
    i = n(703656),
    l = n(626135),
    c = n(34674),
    a = n(132871),
    u = n(272242),
    s = n(981631),
    p = n(49898),
    S = n(979007);
let I = (e) => {
        let { view: t = a.ApplicationDirectoryViews.HOME, guildId: n, applicationId: i, applicationSection: c, entrypoint: I, skuId: _, restorePreviousView: y } = e;
        if ((0, o.K0)({ location: I.name })) {
            let e = null == i ? void 0 : c === u.ApplicationDirectoryProfileSections.STORE ? S.GlobalDiscoveryAppsSections.STORE : S.GlobalDiscoveryAppsSections.ABOUT;
            return (0, r.transitionToGlobalDiscovery)({
                tab: p.GlobalDiscoveryTab.APPS,
                applicationId: i,
                section: e,
                skuId: e === S.GlobalDiscoveryAppsSections.STORE ? _ : void 0,
                newSessionState: {
                    guildId: null != n ? n : null,
                    entrypoint: I,
                    restorePreviousView: y
                }
            });
        }
        let L = {
            ...I,
            pathname: window.location.pathname
        };
        switch ((l.default.track(s.rMx.APP_DIRECTORY_OPENED, { source: null == L ? void 0 : L.name }), (0, a.resetApplicationDirectoryHistory)(), (0, a.setEntrypoint)(L), null != n && (0, a.setGuildId)(n), t === a.ApplicationDirectoryViews.APPLICATION && null == i && (t = a.ApplicationDirectoryViews.HOME), t)) {
            case a.ApplicationDirectoryViews.HOME:
                A();
                break;
            case a.ApplicationDirectoryViews.SEARCH:
                P();
                break;
            case a.ApplicationDirectoryViews.APPLICATION:
                if (null != i) {
                    if (null != c) {
                        if (c === u.ApplicationDirectoryProfileSections.STORE && null != _) {
                            E({
                                applicationId: i,
                                skuId: _
                            });
                            break;
                        }
                        d({
                            applicationId: i,
                            section: c
                        });
                        break;
                    }
                    O({ applicationId: i });
                }
        }
    },
    A = () => {
        let e = { previousView: (0, a.getCurrentView)() };
        (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: e });
    },
    O = (e) => {
        let { applicationId: t } = e,
            n = { previousView: (0, a.getCurrentView)() };
        (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
    },
    d = (e) => {
        let { applicationId: t, section: n } = e,
            r = { previousView: (0, a.getCurrentView)() };
        (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), { state: r });
    },
    E = (e) => {
        let { applicationId: t, skuId: n } = e,
            r = { previousView: (0, a.getCurrentView)() };
        (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), { state: r });
    },
    P = function () {
        let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = new URLSearchParams(),
            o = { previousView: (0, a.getCurrentView)() };
        null != e && r.set('q', e),
            null != t && r.set('category_id', t.toString()),
            null != n && r.set('page', n.toString()),
            (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
                search: r.toString(),
                state: o
            });
    },
    _ = (e) => {
        let { categoryId: t } = e;
        P({ categoryId: null != t ? t : c.MU });
    },
    y = (e) => {
        let {
            location: { state: t }
        } = (0, i.s1)();
        (0, i.dL)(e, t);
    };
