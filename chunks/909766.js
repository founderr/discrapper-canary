n.d(t, {
    b: function () {
        return s;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(508385);
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
class s {
    addSample(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        (this.total += e * t), (this.totalWeight += t), this.samples++, a.TDigest.prototype.push.call(this.digest, e, t), this.digest.check_continuous();
    }
    getReport() {
        var e, t, n, r;
        let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [25, 50, 75, 90, 95],
            a = {};
        for (let t of i) a[t] = null !== (e = this.digest.percentile(t / 100)) && void 0 !== e ? e : 0;
        return {
            min: null !== (t = this.digest.percentile(0)) && void 0 !== t ? t : 0,
            max: null !== (n = this.digest.percentile(1)) && void 0 !== n ? n : 0,
            count: null !== (r = this.digest.size()) && void 0 !== r ? r : 0,
            percentiles: a,
            mean: this.totalWeight > 0 ? this.total / this.totalWeight : 0,
            samples: this.samples
        };
    }
    constructor() {
        o(this, 'digest', new a.Digest()), o(this, 'total', 0), o(this, 'samples', 0), o(this, 'totalWeight', 0);
    }
}
