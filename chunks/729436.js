n.d(t, {
    Cc: function () {
        return _;
    },
    Hd: function () {
        return s;
    },
    QE: function () {
        return l;
    },
    qB: function () {
        return c;
    }
});
var r = n(724458);
var i = n(470079),
    a = n(392711);
var o = n(366040);
let s = (e) =>
        e.sort((e, t) => {
            var n, r;
            return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (r = t.zIndex) && void 0 !== r ? r : 0);
        }),
    l = (e) => {
        if ('1228233381897179137' === e.id || '1228234629429985300' === e.id) {
            var t;
            (null === (t = e.config.effects) || void 0 === t ? void 0 : t.length) >= 2 && (e.config.effects[1].start = 2832);
        }
        return e;
    },
    u = (e, t) => ('png' === t ? e : '.png' === e.slice(e.length - 4, e.length) ? e.slice(0, e.lastIndexOf('.png')) + '.' + t : e),
    c = (e) => {
        let t = (0, o.w7)('Profile Effect Component');
        void 0 !== e && (e.effects = e.effects.map((e) => ((e.src = u(e.src, t)), e)));
    },
    d = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
    _ = (e) =>
        i.useMemo(() => {
            if (null == e) return e;
            let t = (0, a.cloneDeep)(e),
                n = d(
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
