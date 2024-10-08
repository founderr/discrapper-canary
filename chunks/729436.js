n.d(t, {
    Cc: function () {
        return l;
    },
    Hd: function () {
        return a;
    },
    QE: function () {
        return s;
    }
}),
    n(724458);
var r = n(470079),
    i = n(392711);
let a = (e) =>
        e.sort((e, t) => {
            var n, r;
            return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (r = t.zIndex) && void 0 !== r ? r : 0);
        }),
    s = (e) => {
        if ('1228233381897179137' === e.id || '1228234629429985300' === e.id) {
            var t;
            (null === (t = e.config.effects) || void 0 === t ? void 0 : t.length) >= 2 && (e.config.effects[1].start = 2832);
        }
        return e;
    },
    o = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
    l = (e) =>
        r.useMemo(() => {
            if (null == e) return e;
            let t = (0, i.cloneDeep)(e),
                n = o(
                    0,
                    t.effects.reduce((e, t) => {
                        var n;
                        let r = null === (n = t.randomizedSources) || void 0 === n ? void 0 : n.length;
                        return r > 0 && (e = 0 === e ? r : Math.min(e, r)), e;
                    }, 0) - 1
                );
            return (
                (t.effects = t.effects.map((e) => {
                    var t;
                    return (null === (t = e.randomizedSources) || void 0 === t ? void 0 : t.length) > 0 && (e.src = e.randomizedSources[n].src), e;
                })),
                t
            );
        }, [e]);
