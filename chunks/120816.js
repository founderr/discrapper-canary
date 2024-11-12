n(47120);
var r,
    a,
    l,
    i,
    o = n(772848),
    c = n(756647),
    s = n(442837),
    d = n(570140),
    u = n(314897),
    h = n(906467);
let m = 0,
    x = [],
    f = [],
    p = !1;
class b extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(h.Z);
    }
    get loggedEvents() {
        return x;
    }
    get loggedTriggers() {
        return f;
    }
    get trackTriggers() {
        return p;
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
                (x = [
                    ...x,
                    {
                        key: (m++).toString(),
                        event: t,
                        properties: n,
                        fingerprint: null != (a = r) ? (0, c.s)(a) : u.default.getId(),
                        timestamp: new Date()
                    }
                ]).length > 500 && x.shift();
            }
        },
        TRACK_TRIGGER: function (e) {
            let { experimentId: t, descriptor: n, exposureType: r, excluded: a, location: l, previouslyTracked: i } = e;
            if (!!h.Z.isDeveloper)
                p &&
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
            p = t;
        },
        ANALYTICS_LOG_CLEAR: function () {
            (x = []), (f = []);
        }
    }));
