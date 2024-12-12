var i,
    a = r(724458);
var s = r(180650),
    o = r(979554),
    l = r(442837),
    u = r(570140),
    c = r(597688);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = new Date(2023, 8, 25),
    _ = new Date(2023, 9, 5),
    h = () => ({
        categoryItemViews: {
            [s.T.FANTASY]: {
                [o.Z.AVATAR_DECORATION]: f,
                [o.Z.PROFILE_EFFECT]: _
            },
            [s.T.ANIME]: {
                [o.Z.AVATAR_DECORATION]: f,
                [o.Z.PROFILE_EFFECT]: _
            },
            [s.T.BREAKFAST]: {
                [o.Z.AVATAR_DECORATION]: f,
                [o.Z.PROFILE_EFFECT]: _
            },
            [s.T.DISXCORE]: { [o.Z.AVATAR_DECORATION]: f }
        }
    }),
    p = h(),
    m = (e) => {
        let { categories: n, itemTypes: r } = e,
            i = new Date();
        return n.reduce((e, n) => {
            let { skuId: a } = n,
                s = r.reduce((e, n) => {
                    var r;
                    return (null === (r = p.categoryItemViews[a]) || void 0 === r ? void 0 : r[n]) != null ? e : (null == p.categoryItemViews[a] && (p.categoryItemViews[a] = {}), (p.categoryItemViews[a][n] = i), !0);
                }, !1);
            return e || s;
        }, !1);
    };
class g extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (p = e);
    }
    getState() {
        return p;
    }
    isItemViewed(e) {
        var n, r;
        let i = null === (n = c.Z.getProduct(e.skuId)) || void 0 === n ? void 0 : n.categorySkuId;
        return null != i && (null === (r = p.categoryItemViews[i]) || void 0 === r ? void 0 : r[e.type]) != null;
    }
    reset() {
        p = h();
    }
}
d(g, 'displayName', 'CollectiblesPersistedStore'), d(g, 'persistKey', 'CollectiblesPersistedStoreV2'), new g(u.Z, { COLLECTIBLES_CATEGORY_ITEMS_VIEWED: m });
