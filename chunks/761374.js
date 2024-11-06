n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    r = n(442837),
    l = n(765250),
    s = n(358221),
    a = n(569545),
    u = n(199902),
    c = n(314897),
    d = n(592125),
    h = n(944486),
    f = n(350663),
    p = n(388627),
    m = n(757152);
let v = [];
function g(e, t, n, i) {
    let o = (i - 1) * 12;
    return e === f.C.HORIZONTAL ? Math.min(Math.max((t - o) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - o) / i) * 16) / 9, 256));
}
function E(e) {
    var t;
    let { id: n, size: E, locked: _, padding: C, borderWidth: S, opacity: x, horizontal: Z } = e,
        I = 2 * C + 2 * S;
    let { width: y, height: b } = {
            width: 'number' == typeof (t = E).width ? t.width : 256,
            height: 'number' == typeof t.height ? t.height : 144
        },
        N = (0, r.e7)([h.Z], () => h.Z.getVoiceChannelId()),
        O = (0, r.e7)([d.Z], () => d.Z.getChannel(N)),
        T = (0, r.e7)([c.default], () => c.default.getId()),
        { participantsVersion: A, streamParticipants: L } = (0, r.e7)(
            [u.Z, s.Z],
            () => {
                if (null == N)
                    return {
                        streamParticipants: v,
                        participantsVersion: -1
                    };
                let e = new Set(u.Z.getAllActiveStreamsForChannel(N).map((e) => (0, a.V9)(e))),
                    t = s.Z.getStreamParticipants(N).filter((t) => t.user.id !== T && e.has((0, a.V9)(t.stream)));
                return (
                    t.sort((e, t) => e.user.username.localeCompare(t.user.username)),
                    {
                        streamParticipants: t,
                        participantsVersion: s.Z.getParticipantsVersion(N)
                    }
                );
            },
            [N, T],
            p.yp
        ),
        R = L.length,
        k = null == O || 0 === R,
        w = Z ? f.C.HORIZONTAL : f.C.VERTICAL,
        { tileWidth: j } = (function (e, t, n, i, r) {
            let l = (function (e, t, n, i) {
                    let o = g(f.C.HORIZONTAL, e, t, n),
                        r = g(f.C.VERTICAL, e, t, n);
                    switch (i) {
                        case f.C.VERTICAL:
                            return r;
                        case f.C.HORIZONTAL:
                            return o;
                    }
                    let l = ((9 * r) / 16 + 12) * n - 12;
                    return e > (16 * t) / 9 ? o : l <= t ? r : (9 * o) / 16 <= t ? o : r;
                })(n, i, t, r),
                s = g(f.C.VERTICAL, n, i, t),
                a = null != r ? r : l === s ? f.C.VERTICAL : f.C.HORIZONTAL,
                [u, c] = o.useState(l);
            return (
                o.useEffect(() => {
                    !e && c(l);
                }, [e, l]),
                {
                    layout: a,
                    tileWidth: u
                }
            );
        })(!1, R, y - I, b - I, w),
        M = {
            id: n,
            width: y,
            height: b,
            sizeOffset: I,
            layout: w,
            padding: C,
            participants: L.length
        },
        P = o.useRef(M);
    return (o.useEffect(() => void (P.current = M)),
    o.useEffect(() => {
        let { id: e, width: t, height: n, sizeOffset: i, layout: o, padding: r } = P.current;
        if (0 === L.length) {
            (256 !== t || 144 !== n) &&
                (0, l.nv)({
                    widgetId: e,
                    size: {
                        fixed: !0,
                        width: 256,
                        height: 144
                    }
                });
            return;
        }
        if (o === f.C.HORIZONTAL) {
            let t = (16 / 9) * (n - i);
            (0, l.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    height: n,
                    width: t * L.length + r * (L.length - 1) + i
                }
            });
        } else {
            let n = (9 / 16) * (t - i);
            (0, l.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    width: t,
                    height: n * L.length + r * (L.length - 1) + i
                }
            });
        }
    }, [L.length]),
    o.useEffect(() => {
        if (P.current.participants <= 1) return;
        let { id: e, width: t, height: n, sizeOffset: i, padding: o, participants: r } = P.current;
        if (w === f.C.HORIZONTAL) {
            let n = t - i;
            (0, l.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    width: n * r + o * (r - 1) + i,
                    height: (9 / 16) * n + i
                }
            });
        } else {
            let t = n - i;
            (0, l.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    width: (16 / 9) * t + i,
                    height: t * r + o * (r - 1) + i
                }
            });
        }
    }, [w]),
    o.useEffect(
        () => () => {
            (0, l.nv)({
                widgetId: n,
                size: {
                    fixed: !0,
                    width: 256,
                    height: 144
                }
            });
        },
        [n]
    ),
    k && _)
        ? null
        : (0, i.jsx)('div', {
              className: m.goLiveGridContainer,
              style: { opacity: x },
              children: (0, i.jsx)(f.Z, {
                  tileWidth: j,
                  locked: _,
                  layout: w,
                  streamParticipants: L,
                  participantsVersion: A
              })
          });
}
