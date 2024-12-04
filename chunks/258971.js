n.d(t, {
    Uc: function () {
        return p;
    },
    Xh: function () {
        return m;
    },
    aQ: function () {
        return h;
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
    l,
    r = n(512969),
    a = n(972959),
    o = n(264043),
    s = n(34674),
    c = n(703656),
    u = n(979007),
    d = n(981631);
((l = i || (i = {})).HOME = 'home'), (l.SEARCH = 'search'), (l.APPLICATION = 'application'), (l.CATEGORY = 'category');
let h = (0, a.H)(() => ({}));
function p() {
    let {
        location: { state: e }
    } = (0, c.s1)();
    return null == e ? void 0 : e.previousView;
}
function m() {
    var e, t, n;
    let {
        location: { pathname: i, search: l }
    } = (0, c.s1)();
    if (
        null !=
        (0, r.LX)(i, {
            path: d.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, r.LX)(i, {
            path: d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let e = new URLSearchParams(l),
            t = { type: 'search' },
            n = e.get('q');
        null != n && '' !== n && (t.query = n);
        let i = Number(e.get('category_id'));
        Number.isInteger(i) && i !== s.MU && (t.categoryId = i.toString());
        let r = Number(e.get('page'));
        return null != r && r > 1 && (t.page = r), t;
    }
    let a = (0, r.LX)(i, {
            path: [d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: h } = null !== (e = null == a ? void 0 : a.params) && void 0 !== e ? e : {};
    if (null != a && null != h)
        return {
            type: 'category',
            categoryId: h
        };
    let p = (0, r.LX)(i, {
            path: [d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: m, section: f, skuId: g } = null !== (t = null == p ? void 0 : p.params) && void 0 !== t ? t : {};
    if (null != p && null != m) {
        let e = null === (n = o.Z.getApplication(m)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: m,
            applicationName: e,
            section: null != f ? f : null != g ? u.GlobalDiscoveryAppsSections.STORE : u.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
