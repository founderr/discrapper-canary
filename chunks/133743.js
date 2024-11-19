n.d(t, {
    Gp: function () {
        return p;
    },
    O4: function () {
        return u;
    },
    Wv: function () {
        return m;
    },
    Yp: function () {
        return c;
    },
    pR: function () {
        return h;
    },
    ph: function () {
        return d;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(34674),
    l = n(749681),
    r = n(703656),
    a = n(258971),
    o = n(981631),
    s = n(49898);
let c = () => {
        let e = { previousView: (0, a.Xh)() };
        (0, r.uL)(o.Z5c.GLOBAL_DISCOVERY_APPS, { state: e });
    },
    u = (e) => {
        let { categoryId: t } = e,
            n = { previousView: (0, a.Xh)() };
        (0, r.uL)(o.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: n });
    },
    d = (e) => {
        let { applicationId: t } = e,
            n = { previousView: (0, a.Xh)() };
        (0, r.uL)(o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: n });
    },
    h = function () {
        let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            l = { previousView: (0, a.Xh)() },
            s = new URLSearchParams();
        null != e && '' !== e && s.set('q', e),
            null != t && t !== i.MU && s.set('category_id', t.toString()),
            null != n && n > 1 && s.set('page', n.toString()),
            (0, r.uL)(o.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                state: l,
                search: s.toString()
            });
    },
    p = (e) => {
        let {
            location: { state: t }
        } = (0, r.s1)();
        (0, r.dL)(e, t);
    };
function m() {
    let { lastItem: e } = a.aQ.getState();
    if (null != e)
        switch (e.type) {
            case a.m_.APPLICATION:
                return (0, l.u)({
                    tab: s.F$.APPS,
                    applicationId: e.applicationId,
                    section: e.section
                });
            case a.m_.CATEGORY:
                return (0, l.u)({
                    tab: s.F$.APPS,
                    categoryId: Number(e.categoryId)
                });
            case a.m_.SEARCH:
                var t;
                return (0, l.u)({
                    tab: s.F$.APPS,
                    query: null !== (t = e.query) && void 0 !== t ? t : '',
                    page: e.page,
                    categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                });
        }
    return (0, l.u)({ tab: s.F$.APPS });
}
