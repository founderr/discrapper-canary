r.d(t, {
    P: function () {
        return c;
    }
});
var a = r(101284),
    n = r(696486),
    _ = r(147498),
    o = r(218234),
    E = r(823878),
    i = r(939747);
class c {
    constructor(e) {
        (this._client = e), (this._buckets = new Map()), (this._interval = setInterval(() => this.flush(), _.RF));
    }
    add(e, t, r, o = 'none', c = {}, s = (0, a.ph)()) {
        let l = Math.floor(s),
            I = (0, i.s3)(t),
            u = (0, i.Bg)(c),
            R = (0, i.OC)(o),
            A = (0, i.Ic)(e, I, R, u),
            T = this._buckets.get(A),
            N = T && e === _.is ? T.metric.weight : 0;
        T
            ? (T.metric.add(r), T.timestamp < l && (T.timestamp = l))
            : ((T = {
                  metric: new E.ZN[e](r),
                  timestamp: l,
                  metricType: e,
                  name: I,
                  unit: R,
                  tags: u
              }),
              this._buckets.set(A, T));
        let d = 'string' == typeof r ? T.metric.weight - N : r;
        (0, n.yc)(e, I, d, R, c, A);
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
