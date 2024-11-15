n.d(t, {
    Uc: function () {
        return d;
    },
    Xh: function () {
        return u;
    },
    m_: function () {
        return i;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i,
    r,
    l = n(512969),
    a = n(264043),
    s = n(703656),
    o = n(979007),
    c = n(981631);
function d() {
    let {
        location: { state: e }
    } = (0, s.s1)();
    return null == e ? void 0 : e.previousView;
}
function u() {
    var e, t, n;
    let {
        location: { pathname: i, search: r }
    } = (0, s.s1)();
    if (
        null !=
        (0, l.LX)(i, {
            path: c.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, l.LX)(i, {
            path: c.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    )
        return {
            type: 'search',
            query: new URLSearchParams(r).get('q')
        };
    let d = (0, l.LX)(i, {
            path: [c.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: u } = null !== (e = null == d ? void 0 : d.params) && void 0 !== e ? e : {};
    if (null != d && null != u)
        return {
            type: 'category',
            categoryId: u
        };
    let h = (0, l.LX)(i, {
            path: [c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: m, section: p, skuId: g } = null !== (t = null == h ? void 0 : h.params) && void 0 !== t ? t : {};
    if (null != h && null != m) {
        let e = null === (n = a.Z.getApplication(m)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: m,
            applicationName: e,
            section: null != p ? p : null != g ? o.Wc.STORE : o.Wc.ABOUT
        };
    }
}
((r = i || (i = {})).HOME = 'home'), (r.SEARCH = 'search'), (r.APPLICATION = 'application'), (r.CATEGORY = 'category');
