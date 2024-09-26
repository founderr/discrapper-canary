var r,
    i = n(47120);
var a = n(653041);
var o = n(404097),
    s = n(544891),
    l = n(358085),
    u = n(747268),
    c = n(20186),
    d = n(981631);
function _(e, t, n) {
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
let E = new Set(['darwin', 'linux', 'win32', 'ios', 'android']);
function f() {
    if ((0, l.isWeb)()) return 'web';
    {
        let e = (0, l.getPlatformName)();
        return E.has(e) ? e : null;
    }
}
function h() {
    let e = u.Z;
    return null != e && o.e.ALL.has(e) ? e : null;
}
!(function (e) {
    (e.COUNT = 'count'), (e.DISTRIBUTION = 'distribution');
})(r || (r = {}));
let p = 120000,
    m = 100;
class I {
    _getMetricWithDefaults(e, t) {
        let { name: n, tags: r } = e,
            i = {
                name: n,
                type: t,
                tags: (0, c.d)()
            };
        null != r &&
            r.forEach((e) => {
                i.tags.push(e);
            });
        let a = f();
        null != a && i.tags.push('platform:'.concat(a));
        let o = h();
        return null != o && i.tags.push('release_channel:'.concat(o)), i;
    }
    increment(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this._getMetricWithDefaults(e, 'count');
        this._metrics.push(n), (t || this._metrics.length >= m) && this._flush();
    }
    distribution(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = {
                ...this._getMetricWithDefaults(e, 'distribution'),
                value: t
            };
        this._metrics.push(r), (n || this._metrics.length >= m) && this._flush();
    }
    _flush() {
        if (this._metrics.length > 0) {
            let e = [...this._metrics];
            s.tn
                .post({
                    url: d.ANM.METRICS_V2,
                    body: {
                        metrics: e,
                        client_info: {
                            built_at: '1727386614666',
                            build_number: '330951'
                        }
                    },
                    retries: 1
                })
                .catch((t) => {
                    this._metrics.length + e.length < m && (this._metrics = [...this._metrics, ...e]);
                });
        }
        this._metrics = [];
    }
    constructor() {
        _(this, '_metrics', void 0),
            _(this, '_intervalId', void 0),
            (this._metrics = []),
            (this._intervalId = setInterval(() => {
                this._flush();
            }, p));
    }
}
t.Z = new I();
