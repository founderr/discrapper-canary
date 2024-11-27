var i,
    a = n(442837),
    c = n(570140);
function o(e, t, n) {
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
let d = {
    canPlayWowMoment: !1,
    isFetchingWowMomentMedia: !1,
    wowMomentWumpusMediaUrl: null
};
class s extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (d = e), (d.canPlayWowMoment = !1), (d.isFetchingWowMomentMedia = !1), (d.wowMomentWumpusMediaUrl = null);
    }
    getState() {
        return d;
    }
    get canPlayWowMoment() {
        return d.canPlayWowMoment;
    }
    get isFetchingWowMomentMedia() {
        return d.isFetchingWowMomentMedia;
    }
    get wowMomentWumpusMedia() {
        return d.wowMomentWumpusMediaUrl;
    }
}
o(s, 'displayName', 'PurchasedItemsFestivityStore'),
    o(s, 'persistKey', 'PurchasedItemsFestivityStore'),
    o(s, 'migrations', [(e) => ({ ...e })]),
    (t.Z = new s(c.Z, {
        LOGOUT: function () {
            d = {
                canPlayWowMoment: !1,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null
            };
        },
        PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
            let { value: t } = e;
            d.canPlayWowMoment = t;
        },
        PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function () {
            d.isFetchingWowMomentMedia = !0;
        },
        PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (e) {
            let { wumpusMedia: t } = e;
            (d.wowMomentWumpusMediaUrl = t), (d.isFetchingWowMomentMedia = !1);
        },
        PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE: function () {
            (d.isFetchingWowMomentMedia = !1), (d.canPlayWowMoment = !1);
        }
    }));
