let s;
var a,
    r,
    i,
    l,
    o = n(442837),
    c = n(570140);
let _ = !1;
class d extends (l = o.ZP.Store) {
    get harvestType() {
        return s;
    }
    get requestingHarvest() {
        return _;
    }
}
(i = 'DataHarvestStore'),
    (r = 'displayName') in (a = d)
        ? Object.defineProperty(a, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[r] = i),
    (t.Z = new d(c.Z, {
        CONNECTION_OPEN: function () {
            s = void 0;
        },
        UPDATE_DATA_HARVEST_TYPE: function (e) {
            let { harvestType: t } = e;
            (_ = !1), (s = t);
        },
        LOAD_DATA_HARVEST_TYPE_START: function () {
            _ = !0;
        },
        LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
            _ = !1;
        },
        LOGOUT: function () {
            (_ = !1), (s = null);
        }
    }));
