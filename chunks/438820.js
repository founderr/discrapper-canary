var a,
    i = n(442837),
    o = n(570140);
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
let s = {
    canPlayWowMoment: !1,
    isFetchingWowMomentMedia: !1,
    wowMomentWumpusMediaUrl: null
};
class d extends (a = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (s = e), (s.canPlayWowMoment = !1), (s.isFetchingWowMomentMedia = !1), (s.wowMomentWumpusMediaUrl = null);
    }
    getState() {
        return s;
    }
    get canPlayWowMoment() {
        return s.canPlayWowMoment;
    }
    get isFetchingWowMomentMedia() {
        return s.isFetchingWowMomentMedia;
    }
    get wowMomentWumpusMedia() {
        return s.wowMomentWumpusMediaUrl;
    }
}
c(d, 'displayName', 'PurchasedItemsFestivityStore'),
    c(d, 'persistKey', 'PurchasedItemsFestivityStore'),
    c(d, 'migrations', [(e) => ({ ...e })]),
    (t.Z = new d(o.Z, {
        LOGOUT: function () {
            s = {
                canPlayWowMoment: !1,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null
            };
        },
        PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
            let { value: t } = e;
            s.canPlayWowMoment = t;
        },
        PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function () {
            s.isFetchingWowMomentMedia = !0;
        },
        PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (e) {
            let { wumpusMedia: t } = e;
            (s.wowMomentWumpusMediaUrl = t), (s.isFetchingWowMomentMedia = !1);
        },
        PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE: function () {
            (s.isFetchingWowMomentMedia = !1), (s.canPlayWowMoment = !1);
        }
    }));
