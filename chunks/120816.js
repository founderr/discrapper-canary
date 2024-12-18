n(653041), n(47120);
var r,
    a,
    l,
    i,
    o = n(772848),
    s = n(756647),
    c = n(442837),
    d = n(570140),
    u = n(314897),
    h = n(906467);
let m = 0,
    x = [],
    p = 0,
    f = [],
    g = !1;
class b extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(h.Z);
    }
    get loggedEvents() {
        return x;
    }
    get loggedEventsVersion() {
        return p;
    }
    get loggedTriggers() {
        return f;
    }
    get trackTriggers() {
        return g;
    }
}
(i = 'AnalyticsLogStore'),
    (l = 'displayName') in (a = b)
        ? Object.defineProperty(a, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[l] = i),
    (t.Z = new b(d.Z, {
        TRACK: function (e) {
            let { event: t, properties: n, fingerprint: r } = e;
            if (h.Z.isDeveloper) {
                var a;
                x.push({
                    key: (m++).toString(),
                    event: t,
                    properties: n,
                    fingerprint: null != (a = r) ? (0, s.s)(a) : u.default.getId(),
                    timestamp: new Date()
                }),
                    p++,
                    x.length > 500 && (x = x.slice(-Math.floor(250)));
            }
        },
        TRACK_TRIGGER: function (e) {
            let { experimentId: t, descriptor: n, exposureType: r, excluded: a, location: l, previouslyTracked: i } = e;
            if (!!h.Z.isDeveloper)
                g &&
                    (f = [
                        ...f,
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
                    f.shift();
        },
        SET_TRACK_TRIGGERS: function (e) {
            let { enabled: t } = e;
            g = t;
        },
        ANALYTICS_LOG_CLEAR: function () {
            (x = []), p++, (f = []);
        }
    }));
