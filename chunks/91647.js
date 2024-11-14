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
        let l = Math.floor(s),
            u = (0, E.s3)(t),
            I = (0, E.Bg)(c),
            R = (0, E.OC)(o),
            N = (0, E.Ic)(e, u, R, I),
            A = this._buckets.get(N),
            T = A && e === _.is ? A.metric.weight : 0;
        A
            ? (A.metric.add(r), A.timestamp < l && (A.timestamp = l))
            : ((A = {
                  metric: new i.ZN[e](r),
                  timestamp: l,
                  metricType: e,
                  name: u,
                  unit: R,
                  tags: I
              }),
              this._buckets.set(N, A));
        let d = 'string' == typeof r ? A.metric.weight - T : r;
        (0, a.yc)(e, u, d, R, c, N);
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
