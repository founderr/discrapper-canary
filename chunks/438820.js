var a,
    i,
    o,
    c,
    s = n(442837),
    d = n(570140);
let r = {
    canPlayWowMoment: !1,
    isFetchingWowMomentMedia: !1,
    wowMomentWumpusMediaUrl: null
};
class u extends (c = s.ZP.Store) {
    getState() {
        return r;
    }
    get canPlayWowMoment() {
        return r.canPlayWowMoment;
    }
    get isFetchingWowMomentMedia() {
        return r.isFetchingWowMomentMedia;
    }
    get wowMomentWumpusMedia() {
        return r.wowMomentWumpusMediaUrl;
    }
}
(o = 'PurchasedItemsFestivityStore'),
    (i = 'displayName') in (a = u)
        ? Object.defineProperty(a, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[i] = o),
    (t.Z = new u(d.Z, {
        LOGOUT: function () {
            r = {
                canPlayWowMoment: !1,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null
            };
        },
        PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
            let { value: t } = e;
            r.canPlayWowMoment = t;
        },
        PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function () {
            r.isFetchingWowMomentMedia = !0;
        },
        PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (e) {
            let { wumpusMedia: t } = e;
            (r.wowMomentWumpusMediaUrl = t), (r.isFetchingWowMomentMedia = !1);
        },
        PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE: function () {
            (r.isFetchingWowMomentMedia = !1), (r.canPlayWowMoment = !1);
        }
    }));
