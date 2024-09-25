var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(623113);
t.Z = a.forwardRef(function (e, t) {
    let { muted: n, volume: r, playing: s, ...l } = e,
        [u, c] = (0, o.Z)(t);
    return (
        a.useEffect(() => {
            let e = u.current;
            if (null != e) void 0 !== n && (e.muted = n);
        }, [u, n]),
        a.useEffect(() => {
            let e = u.current;
            if (null != e) void 0 !== r && (e.volume = r);
        }, [u, r]),
        a.useEffect(() => {
            let e = u.current;
            if (null != e) void 0 !== s && (s ? e.play() : e.pause());
        }, [u, s]),
        (0, i.jsx)('audio', {
            ref: c,
            ...l
        })
    );
});
