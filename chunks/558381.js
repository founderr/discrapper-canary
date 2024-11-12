n.d(t, {
    Hq: function () {
        return p;
    },
    M9: function () {
        return m;
    },
    Oj: function () {
        return g;
    },
    cj: function () {
        return h;
    },
    km: function () {
        return f;
    },
    oJ: function () {
        return d;
    },
    rV: function () {
        return _;
    },
    yt: function () {
        return E;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(115130);
n(812206);
var s = n(703656),
    o = n(55563);
n(551428);
var l = n(695103),
    u = n(73346),
    c = n(981631);
function d(e) {
    return (0, u.Kb)({
        url: c.ANM.STORE_PUBLISHED_LISTINGS_SKUS,
        query: { application_id: e },
        oldFormErrors: !0
    }).then(
        (e) => (
            i.Z.dispatch({
                type: 'STORE_LISTINGS_FETCH_SUCCESS',
                storeListings: e.body.map((e) => ({
                    ...e,
                    published: !0
                }))
            }),
            e.body
        )
    );
}
function f(e) {
    let t = o.Z.get(e),
        n = null != t && (l.Z.inTestModeForApplication(t.applicationId) || a.Z.inDevModeForApplication(t.applicationId));
    return (
        i.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_START',
            skuId: e
        }),
        (0, u.Kb)(n ? c.ANM.STORE_LISTINGS_SKU(e) : c.ANM.STORE_PUBLISHED_LISTINGS_SKU(e))
            .then((e) => {
                n
                    ? i.Z.dispatch({
                          type: 'STORE_LISTINGS_FETCH_SUCCESS',
                          storeListings: e.body
                      })
                    : i.Z.dispatch({
                          type: 'STORE_LISTING_FETCH_SUCCESS',
                          storeListing: e.body
                      });
            })
            .catch(() => {
                i.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: e
                });
            })
    );
}
function _(e) {
    return (0, u.Kb)(c.ANM.STORE_LISTING(e)).then((e) => {
        i.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: e.body
        });
    });
}
function p(e) {
    return (0, u.Kb)(c.ANM.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then((e) => {
        i.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: e.body
        });
    });
}
function h() {
    i.Z.dispatch({ type: 'APPLICATION_STORE_MATURE_AGREE' });
}
function m() {
    (0, s.uL)(c.Z5c.APPLICATION_STORE);
}
function g(e) {
    return r.tn.post({
        url: c.ANM.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
        oldFormErrors: !0
    });
}
function E(e, t) {
    let { pathname: n, ...r } = (0, u.ZI)(e, t);
    (0, s.uL)(n, r);
}
