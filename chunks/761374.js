n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(765250),
    a = n(358221),
    s = n(569545),
    u = n(199902),
    c = n(314897),
    d = n(592125),
    h = n(944486),
    f = n(350663),
    p = n(388627),
    m = n(75226);
let v = [];
function g(e, t, n, i) {
    let l = (i - 1) * 12;
    return e === f.C.HORIZONTAL ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
}
function E(e) {
    var t;
    let { id: n, size: E, locked: _, padding: C, borderWidth: S, opacity: Z, horizontal: I } = e,
        x = 2 * C + 2 * S;
    let { width: N, height: O } = {
            width: 'number' == typeof (t = E).width ? t.width : 256,
            height: 'number' == typeof t.height ? t.height : 144
        },
        T = (0, r.e7)([h.Z], () => h.Z.getVoiceChannelId()),
        y = (0, r.e7)([d.Z], () => d.Z.getChannel(T)),
        b = (0, r.e7)([c.default], () => c.default.getId()),
        { participantsVersion: A, streamParticipants: L } = (0, r.e7)(
            [u.Z, a.Z],
            () => {
                if (null == T)
                    return {
                        streamParticipants: v,
                        participantsVersion: -1
                    };
                let e = new Set(u.Z.getAllActiveStreamsForChannel(T).map((e) => (0, s.V9)(e))),
                    t = a.Z.getStreamParticipants(T).filter((t) => t.user.id !== b && e.has((0, s.V9)(t.stream)));
                return (
                    t.sort((e, t) => e.user.username.localeCompare(t.user.username)),
                    {
                        streamParticipants: t,
                        participantsVersion: a.Z.getParticipantsVersion(T)
                    }
                );
            },
            [T, b],
            p.yp
        ),
        R = L.length,
        k = null == y || 0 === R,
        M = I ? f.C.HORIZONTAL : f.C.VERTICAL,
        { tileWidth: w } = (function (e, t, n, i, r) {
            let o = (function (e, t, n, i) {
                    let l = g(f.C.HORIZONTAL, e, t, n),
                        r = g(f.C.VERTICAL, e, t, n);
                    switch (i) {
                        case f.C.VERTICAL:
                            return r;
                        case f.C.HORIZONTAL:
                            return l;
                    }
                    let o = ((9 * r) / 16 + 12) * n - 12;
                    return e > (16 * t) / 9 ? l : o <= t ? r : (9 * l) / 16 <= t ? l : r;
                })(n, i, t, r),
                a = g(f.C.VERTICAL, n, i, t),
                s = null != r ? r : o === a ? f.C.VERTICAL : f.C.HORIZONTAL,
                [u, c] = l.useState(o);
            return (
                l.useEffect(() => {
                    !e && c(o);
                }, [e, o]),
                {
                    layout: s,
                    tileWidth: u
                }
            );
        })(!1, R, N - x, O - x, M),
        P = {
            id: n,
            width: N,
            height: O,
            sizeOffset: x,
            layout: M,
            padding: C,
            participants: L.length
        },
        j = l.useRef(P);
    return (l.useEffect(() => void (j.current = P)),
    l.useEffect(() => {
        let { id: e, width: t, height: n, sizeOffset: i, layout: l, padding: r } = j.current;
        if (0 === L.length) {
            (256 !== t || 144 !== n) &&
                (0, o.nv)({
                    widgetId: e,
                    size: {
                        fixed: !0,
                        width: 256,
                        height: 144
                    }
                });
            return;
        }
        if (l === f.C.HORIZONTAL) {
            let t = (16 / 9) * (n - i);
            (0, o.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    height: n,
                    width: t * L.length + r * (L.length - 1) + i
                }
            });
        } else {
            let n = (9 / 16) * (t - i);
            (0, o.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    width: t,
                    height: n * L.length + r * (L.length - 1) + i
                }
            });
        }
    }, [L.length]),
    l.useEffect(() => {
        if (j.current.participants <= 1) return;
        let { id: e, width: t, height: n, sizeOffset: i, padding: l, participants: r } = j.current;
        if (M === f.C.HORIZONTAL) {
            let n = t - i;
            (0, o.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    width: n * r + l * (r - 1) + i,
                    height: (9 / 16) * n + i
                }
            });
        } else {
            let t = n - i;
            (0, o.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    width: (16 / 9) * t + i,
                    height: t * r + l * (r - 1) + i
                }
            });
        }
    }, [M]),
    l.useEffect(
        () => () => {
            (0, o.nv)({
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
              style: { opacity: Z },
              children: (0, i.jsx)(f.Z, {
                  tileWidth: w,
                  locked: _,
                  layout: M,
                  streamParticipants: L,
                  participantsVersion: A
              })
          });
}
