var r,
    i = n(724458);
var a = n(180650),
    o = n(979554),
    s = n(442837),
    l = n(570140),
    u = n(597688);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = new Date(2023, 8, 25),
    _ = new Date(2023, 9, 5),
    E = () => ({
        categoryItemViews: {
            [a.T.FANTASY]: {
                [o.Z.AVATAR_DECORATION]: d,
                [o.Z.PROFILE_EFFECT]: _
            },
            [a.T.ANIME]: {
                [o.Z.AVATAR_DECORATION]: d,
                [o.Z.PROFILE_EFFECT]: _
            },
            [a.T.BREAKFAST]: {
                [o.Z.AVATAR_DECORATION]: d,
                [o.Z.PROFILE_EFFECT]: _
            },
            [a.T.DISXCORE]: { [o.Z.AVATAR_DECORATION]: d }
        }
    }),
    f = E(),
    h = (e) => {
        let { categories: t, itemTypes: n } = e,
            r = new Date();
        return t.reduce((e, t) => {
            let { skuId: i } = t,
                a = n.reduce((e, t) => {
                    var n;
                    return (null === (n = f.categoryItemViews[i]) || void 0 === n ? void 0 : n[t]) != null ? e : (null == f.categoryItemViews[i] && (f.categoryItemViews[i] = {}), (f.categoryItemViews[i][t] = r), !0);
                }, !1);
            return e || a;
        }, !1);
    };
class p extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (f = e);
    }
    getState() {
        return f;
    }
    isItemViewed(e) {
        var t, n;
        let r = null === (t = u.Z.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
        return null != r && (null === (n = f.categoryItemViews[r]) || void 0 === n ? void 0 : n[e.type]) != null;
    }
    reset() {
        f = E();
    }
}
c(p, 'displayName', 'CollectiblesPersistedStore'), c(p, 'persistKey', 'CollectiblesPersistedStoreV2'), new p(l.Z, { COLLECTIBLES_CATEGORY_ITEMS_VIEWED: h });
