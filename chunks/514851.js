var r,
    i = n(442837),
    a = n(570140);
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
let s = !1,
    l = !1,
    u = [];
function c(e) {
    (l = !0), (s = !1), (u = e.campaignContexts);
}
function d() {
    (l = !0), (s = !1);
}
function _() {
    s = !0;
}
function E() {
    (s = !1), (l = !1), (u = []);
}
class f extends (r = i.ZP.Store) {
    getForCampaign(e) {
        let t = u.filter((t) => t.campaign === e);
        return 1 === t.length ? t[0] : null;
    }
    shouldFetchCampaignContext() {
        return !s && !l;
    }
}
o(f, 'displayName', 'CampaignContextStore'),
    (t.Z = new f(a.Z, {
        CAMPAIGN_CONTEXT_FETCH_SUCCESS: c,
        CAMPAIGN_CONTEXT_FETCH_FAILURE: d,
        CAMPAIGN_CONTEXT_FETCH: _,
        LOGOUT: E
    }));
