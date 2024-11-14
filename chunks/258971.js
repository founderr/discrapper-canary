n.d(t, {
    Uc: function () {
        return c;
    },
    Xh: function () {
        return d;
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
    o = n(981631);
function c() {
    let {
        location: { state: e }
    } = (0, s.s1)();
    return null == e ? void 0 : e.previousView;
}
function d() {
    var e, t, n;
    let {
        location: { pathname: i }
    } = (0, s.s1)();
    if (
        null !=
        (0, l.LX)(i, {
            path: o.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, l.LX)(i, {
            path: o.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    )
        return { type: 'search' };
    let r = (0, l.LX)(i, {
            path: [o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId')],
            exact: !0
        }),
        { applicationId: c } = null !== (e = null == r ? void 0 : r.params) && void 0 !== e ? e : {};
    if (null != r && null != c) {
        let e = null === (t = a.Z.getApplication(c)) || void 0 === t ? void 0 : t.name;
        return {
            type: 'application',
            applicationId: c,
            applicationName: e
        };
    }
    let d = (0, l.LX)(i, {
            path: [o.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: u } = null !== (n = null == d ? void 0 : d.params) && void 0 !== n ? n : {};
    if (null != d && null != u)
        return {
            type: 'category',
            categoryId: u
        };
}
((i = r || (r = {})).HOME = 'home'), (i.SEARCH = 'search'), (i.APPLICATION = 'application'), (i.CATEGORY = 'category');
