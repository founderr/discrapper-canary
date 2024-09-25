n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(710845),
    a = n(287328);
let o = new i.Z('ChannelReader');
class s {
    static getSync(e, t) {
        let n = performance.now(),
            r = a.Z.channels(e).getManySyncUnsafe(t),
            i = performance.now() - n;
        return o.log('synchronously loaded in '.concat(i, 'ms (guild: ').concat(t, ', channels: ').concat(r.length, ')')), [r, i];
    }
    static async getAsync(e, t) {
        let n = performance.now(),
            r = await a.Z.channels(e).getMany(t),
            i = performance.now() - n;
        return o.verbose('loaded in '.concat(i, 'ms (guild: ').concat(t, ', channels: ').concat(r.length, ')')), r;
    }
    static async getGuildIds() {
        try {
            var e;
            let t = a.Z.channels();
            if (null == t) return new Set();
            let n = (null !== (e = await t.getGuildIds()) && void 0 !== e ? e : []).filter((e) => null !== e && 'string' == typeof e);
            return new Set(n);
        } catch (e) {
            return o.warn("couldn't get guild ids", e), new Set();
        }
    }
}
