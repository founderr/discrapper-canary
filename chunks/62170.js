var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(623113);
n.Z = s.forwardRef(function (e, n) {
    let { muted: r, volume: i, playing: l, ...u } = e,
        [c, d] = (0, o.Z)(n);
    return (
        s.useEffect(() => {
            let e = c.current;
            if (null != e) void 0 !== r && (e.muted = r);
        }, [c, r]),
        s.useEffect(() => {
            let e = c.current;
            if (null != e) void 0 !== i && (e.volume = i);
        }, [c, i]),
        s.useEffect(() => {
            let e = c.current;
            if (null != e) void 0 !== l && (l ? e.play() : e.pause());
        }, [c, l]),
        (0, a.jsx)('audio', {
            ref: d,
            ...u
        })
    );
});
