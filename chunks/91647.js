r.d(t, {
    P: function () {
        return c;
    }
});
var n = r(101284),
    a = r(696486),
    _ = r(147498),
    o = r(218234),
    i = r(823878),
    E = r(939747);
class c {
    constructor(e) {
        (this._client = e), (this._buckets = new Map()), (this._interval = setInterval(() => this.flush(), _.RF));
    }
    add(e, t, r, o = 'none', c = {}, s = (0, n.ph)()) {
        let I = Math.floor(s),
            u = (0, E.s3)(t),
            l = (0, E.Bg)(c),
            R = (0, E.OC)(o),
            A = (0, E.Ic)(e, u, R, l),
            T = this._buckets.get(A),
            N = T && e === _.is ? T.metric.weight : 0;
        T
            ? (T.metric.add(r), T.timestamp < I && (T.timestamp = I))
            : ((T = {
                  metric: new i.ZN[e](r),
                  timestamp: I,
                  metricType: e,
                  name: u,
                  unit: R,
                  tags: l
              }),
              this._buckets.set(A, T));
        let d = 'string' == typeof r ? T.metric.weight - N : r;
        (0, a.yc)(e, u, d, R, c, A);
    }
    flush() {
        if (0 === this._buckets.size) return;
        let e = Array.from(this._buckets.values());
        (0, o.o)(this._client, e), this._buckets.clear();
    }
    close() {
        clearInterval(this._interval), this.flush();
    }
}
