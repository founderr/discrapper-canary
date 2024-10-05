var i,
    a,
    s,
    l,
    r = n(442837),
    o = n(570140);
let c = !1,
    d = !1,
    u = [];
class _ extends (l = r.ZP.Store) {
    getForCampaign(e) {
        let t = u.filter((t) => t.campaign === e);
        return 1 === t.length ? t[0] : null;
    }
    shouldFetchCampaignContext() {
        return !c && !d;
    }
}
(s = 'CampaignContextStore'),
    (a = 'displayName') in (i = _)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new _(o.Z, {
        CAMPAIGN_CONTEXT_FETCH_SUCCESS: function (e) {
            (d = !0), (c = !1), (u = e.campaignContexts);
        },
        CAMPAIGN_CONTEXT_FETCH_FAILURE: function () {
            (d = !0), (c = !1);
        },
        CAMPAIGN_CONTEXT_FETCH: function () {
            c = !0;
        },
        LOGOUT: function () {
            (c = !1), (d = !1), (u = []);
        }
    }));
