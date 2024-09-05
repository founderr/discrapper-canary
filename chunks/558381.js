t.d(n, {
    Hq: function () {
        return f;
    },
    M9: function () {
        return x;
    },
    Oj: function () {
        return _;
    },
    cj: function () {
        return I;
    },
    km: function () {
        return S;
    },
    oJ: function () {
        return d;
    },
    rV: function () {
        return m;
    },
    yt: function () {
        return p;
    }
});
var i = t(544891),
    l = t(570140),
    r = t(115130);
t(812206);
var o = t(703656),
    s = t(55563);
t(551428);
var a = t(695103),
    c = t(73346),
    u = t(981631);
function d(e) {
    return (0, c.Kb)({
        url: u.ANM.STORE_PUBLISHED_LISTINGS_SKUS,
        query: { application_id: e },
        oldFormErrors: !0
    }).then(
        (e) => (
            l.Z.dispatch({
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
function S(e) {
    let n = s.Z.get(e),
        t = null != n && (a.Z.inTestModeForApplication(n.applicationId) || r.Z.inDevModeForApplication(n.applicationId));
    return (
        l.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_START',
            skuId: e
        }),
        (0, c.Kb)(t ? u.ANM.STORE_LISTINGS_SKU(e) : u.ANM.STORE_PUBLISHED_LISTINGS_SKU(e))
            .then((e) => {
                t
                    ? l.Z.dispatch({
                          type: 'STORE_LISTINGS_FETCH_SUCCESS',
                          storeListings: e.body
                      })
                    : l.Z.dispatch({
                          type: 'STORE_LISTING_FETCH_SUCCESS',
                          storeListing: e.body
                      });
            })
            .catch(() => {
                l.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: e
                });
            })
    );
}
function m(e) {
    return (0, c.Kb)(u.ANM.STORE_LISTING(e)).then((e) => {
        l.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: e.body
        });
    });
}
function f(e) {
    return (0, c.Kb)(u.ANM.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then((e) => {
        l.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: e.body
        });
    });
}
function I() {
    l.Z.dispatch({ type: 'APPLICATION_STORE_MATURE_AGREE' });
}
function x() {
    (0, o.uL)(u.Z5c.APPLICATION_STORE);
}
function _(e) {
    return i.tn.post({
        url: u.ANM.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
        oldFormErrors: !0
    });
}
function p(e, n) {
    let { pathname: t, ...i } = (0, c.ZI)(e, n);
    (0, o.uL)(t, i);
}
