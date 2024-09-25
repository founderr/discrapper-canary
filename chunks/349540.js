var r = n(47120);
var i = n(147913),
    a = n(594174),
    o = n(74538),
    s = n(163684),
    l = n(748770),
    u = n(474936);
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
class d extends i.Z {
    onPostConnectionOpen() {
        this.maybeFetchActiveOutboundPromotions();
    }
    maybeFetchActiveOutboundPromotions() {
        let e = a.default.getCurrentUser(),
            t = o.ZP.isPremiumExactly(e, u.p9.TIER_2),
            n = s.g.getCurrentConfig(
                { location: 'maybeFetchActiveOutboundPromotions' },
                {
                    autoTrackExposure: !1,
                    disable: t
                }
            ).enabled;
        (t || n) && (0, l.vM)();
    }
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
                EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this)
            });
    }
}
t.Z = new d();
