n(47120);
var r,
    a,
    l,
    i,
    o = n(772848),
    s = n(756647),
    c = n(442837),
    u = n(570140),
    d = n(314897),
    h = n(906467);
let m = 0,
    f = [],
    x = [],
    g = !1;
class p extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(h.Z);
    }
    get loggedEvents() {
        return f;
    }
    get loggedTriggers() {
        return x;
    }
    get trackTriggers() {
        return g;
    }
}
(i = 'AnalyticsLogStore'),
    (l = 'displayName') in (a = p)
        ? Object.defineProperty(a, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[l] = i),
    (t.Z = new p(u.Z, {
        TRACK: function (e) {
            let { event: t, properties: n, fingerprint: r } = e;
            if (h.Z.isDeveloper) {
                var a;
                (f = [
                    ...f,
                    {
                        key: (m++).toString(),
                        event: t,
                        properties: n,
                        fingerprint: null != (a = r) ? (0, s.s)(a) : d.default.getId(),
                        timestamp: new Date()
                    }
                ]).length > 500 && f.shift();
            }
        },
        TRACK_TRIGGER: function (e) {
            let { experimentId: t, descriptor: n, exposureType: r, excluded: a, location: l, previouslyTracked: i } = e;
            if (!!h.Z.isDeveloper)
                g &&
                    (x = [
                        ...x,
                        {
                            key: (0, o.Z)(),
                            experimentId: t,
                            descriptor: n,
                            exposureType: r,
                            excluded: a,
                            location: l,
                            previouslyTracked: i,
                            timestamp: new Date()
                        }
                    ]).length > 500 &&
                    x.shift();
        },
        SET_TRACK_TRIGGERS: function (e) {
            let { enabled: t } = e;
            g = t;
        },
        ANALYTICS_LOG_CLEAR: function () {
            (f = []), (x = []);
        }
    }));
