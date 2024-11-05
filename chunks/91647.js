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
            A = (0, E.Ic)(e, u, R, I),
            N = this._buckets.get(A),
            T = N && e === _.is ? N.metric.weight : 0;
        N
            ? (N.metric.add(r), N.timestamp < l && (N.timestamp = l))
            : ((N = {
                  metric: new i.ZN[e](r),
                  timestamp: l,
                  metricType: e,
                  name: u,
                  unit: R,
                  tags: I
              }),
              this._buckets.set(A, N));
        let d = 'string' == typeof r ? N.metric.weight - T : r;
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
