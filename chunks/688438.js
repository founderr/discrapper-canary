n.d(t, {
    t: function () {
        return o;
    }
});
var i = n(442837),
    l = n(273387),
    a = n(975984),
    r = n(306680),
    s = n(709054);
function o(e) {
    return (0, i.e7)(
        [l.Z, r.ZP],
        () => {
            var t;
            if (null == e) return 0;
            let n = r.ZP.ackMessageId(e.id);
            if (null == n) return 0;
            let i = Object.values(null !== (t = l.Z.getDirectoryEntries(e.id)) && void 0 !== t ? t : {}).filter((e) => {
                let t = new Date(e.createdAt).getTime();
                return t > s.default.extractTimestamp(n);
            });
            return Math.min(a._N, i.length);
        },
        [e]
    );
}
