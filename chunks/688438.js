n.d(t, {
    t: function () {
        return s;
    }
});
var i = n(442837),
    l = n(273387),
    r = n(975984),
    o = n(306680),
    a = n(709054);
function s(e) {
    return (0, i.e7)(
        [l.Z, o.ZP],
        () => {
            var t;
            if (null == e) return 0;
            let n = o.ZP.ackMessageId(e.id);
            if (null == n) return 0;
            let i = Object.values(null !== (t = l.Z.getDirectoryEntries(e.id)) && void 0 !== t ? t : {}).filter((e) => {
                let t = new Date(e.createdAt).getTime();
                return t > a.default.extractTimestamp(n);
            });
            return Math.min(r._N, i.length);
        },
        [e]
    );
}
