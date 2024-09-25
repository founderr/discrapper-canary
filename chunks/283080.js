n.d(t, {
    EA: function () {
        return u;
    }
});
var r = n(47120);
function i(e, t, n) {
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
n(735250), n(470079);
class a {
    addValue(e) {
        var t, n;
        this.count++;
        let r = Math.round(1000 * e);
        (this.totalMicroseconds += r), (this.minMicroseconds = Math.min(null !== (t = this.minMicroseconds) && void 0 !== t ? t : Number.MAX_SAFE_INTEGER, r)), (this.maxMicroseconds = Math.max(null !== (n = this.maxMicroseconds) && void 0 !== n ? n : Number.MIN_SAFE_INTEGER, r));
    }
    get mean() {
        return this.totalMicroseconds / this.count;
    }
    constructor() {
        i(this, 'totalMicroseconds', 0), i(this, 'count', 0), i(this, 'minMicroseconds', null), i(this, 'maxMicroseconds', null);
    }
}
let o = {},
    s = !0;
function l(e, t) {
    let n = e.length > t ? t : e.length;
    return e.substring(0, n).padEnd(t, ' ');
}
function u() {
    if (0 === Object.keys(o).length) return '';
    let e = 'Component Render Stats (microseconds):\n',
        t = '|'.concat(l('id', 20), '|').concat(l('Mounts', 8), '|').concat(l('Mount Mean', 20), '|').concat(l('Updates', 8), '|').concat(l('Update Mean', 20), '|').concat(l('Nested', 8), '|').concat(l('Nested Mean', 20), '|\n');
    return (
        e +
        t +
        Object.entries(o).map((e) => {
            let [t, n] = e;
            return '|'.concat(l(t, 20), '|').concat(l(n.mount.count.toString(), 8), '|').concat(l(n.mount.mean.toString(), 20), '|').concat(l(n.update.count.toString(), 8), '|').concat(l(n.update.mean.toString(), 20), '|').concat(l(n.nestedUpdate.count.toString(), 8), '|').concat(l(n.nestedUpdate.mean.toString(), 20), '|\n');
        })
    );
}
