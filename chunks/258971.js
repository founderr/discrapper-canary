n.d(t, {
    Uc: function () {
        return d;
    },
    Xh: function () {
        return u;
    },
    m_: function () {
        return r;
    }
});
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
        location: { pathname: i }
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
        return { type: 'search' };
    let r = (0, l.LX)(i, {
            path: [c.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: d } = null !== (e = null == r ? void 0 : r.params) && void 0 !== e ? e : {};
    if (null != r && null != d)
        return {
            type: 'category',
            categoryId: d
        };
    let u = (0, l.LX)(i, {
            path: [c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: h, section: m, skuId: p } = null !== (t = null == u ? void 0 : u.params) && void 0 !== t ? t : {};
    if (null != u && null != h) {
        let e = null === (n = a.Z.getApplication(h)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: h,
            applicationName: e,
            section: null != m ? m : null != p ? o.Wc.STORE : o.Wc.ABOUT
        };
    }
}
((i = r || (r = {})).HOME = 'home'), (i.SEARCH = 'search'), (i.APPLICATION = 'application'), (i.CATEGORY = 'category');
