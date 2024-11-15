n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
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
let E = [];
function v(e, t, n, i) {
    let r = (i - 1) * 12;
    return e === f.C.HORIZONTAL ? Math.min(Math.max((t - r) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - r) / i) * 16) / 9, 256));
}
function g(e) {
    var t;
    let { id: n, size: g, locked: _, padding: C, borderWidth: S, opacity: I, horizontal: Z } = e,
        N = 2 * C + 2 * S;
    let { width: x, height: O } = {
            width: 'number' == typeof (t = g).width ? t.width : 256,
            height: 'number' == typeof t.height ? t.height : 144
        },
        T = (0, l.e7)([h.Z], () => h.Z.getVoiceChannelId()),
        A = (0, l.e7)([d.Z], () => d.Z.getChannel(T)),
        y = (0, l.e7)([c.default], () => c.default.getId()),
        { participantsVersion: b, streamParticipants: R } = (0, l.e7)(
            [u.Z, a.Z],
            () => {
                if (null == T)
                    return {
                        streamParticipants: E,
                        participantsVersion: -1
                    };
                let e = new Set(u.Z.getAllActiveStreamsForChannel(T).map((e) => (0, s.V9)(e))),
                    t = a.Z.getStreamParticipants(T).filter((t) => t.user.id !== y && e.has((0, s.V9)(t.stream)));
                return (
                    t.sort((e, t) => e.user.username.localeCompare(t.user.username)),
                    {
                        streamParticipants: t,
                        participantsVersion: a.Z.getParticipantsVersion(T)
                    }
                );
            },
            [T, y],
            p.yp
        ),
        L = R.length,
        k = null == A || 0 === L,
        M = Z ? f.C.HORIZONTAL : f.C.VERTICAL,
        { tileWidth: P } = (function (e, t, n, i, l) {
            let o = (function (e, t, n, i) {
                    let r = v(f.C.HORIZONTAL, e, t, n),
                        l = v(f.C.VERTICAL, e, t, n);
                    switch (i) {
                        case f.C.VERTICAL:
                            return l;
                        case f.C.HORIZONTAL:
                            return r;
                    }
                    let o = ((9 * l) / 16 + 12) * n - 12;
                    return e > (16 * t) / 9 ? r : o <= t ? l : (9 * r) / 16 <= t ? r : l;
                })(n, i, t, l),
                a = v(f.C.VERTICAL, n, i, t),
                s = null != l ? l : o === a ? f.C.VERTICAL : f.C.HORIZONTAL,
                [u, c] = r.useState(o);
            return (
                r.useEffect(() => {
                    !e && c(o);
                }, [e, o]),
                {
                    layout: s,
                    tileWidth: u
                }
            );
        })(!1, L, x - N, O - N, M),
        w = {
            id: n,
            width: x,
            height: O,
            sizeOffset: N,
            layout: M,
            padding: C,
            participants: R.length
        },
        j = r.useRef(w);
    return (r.useEffect(() => void (j.current = w)),
    r.useEffect(() => {
        let { id: e, width: t, height: n, sizeOffset: i, layout: r, padding: l } = j.current;
        if (0 === R.length) {
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
        if (r === f.C.HORIZONTAL) {
            let t = (16 / 9) * (n - i);
            (0, o.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    height: n,
                    width: t * R.length + l * (R.length - 1) + i
                }
            });
        } else {
            let n = (9 / 16) * (t - i);
            (0, o.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    width: t,
                    height: n * R.length + l * (R.length - 1) + i
                }
            });
        }
    }, [R.length]),
    r.useEffect(() => {
        if (j.current.participants <= 1) return;
        let { id: e, width: t, height: n, sizeOffset: i, padding: r, participants: l } = j.current;
        if (M === f.C.HORIZONTAL) {
            let n = t - i;
            (0, o.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    width: n * l + r * (l - 1) + i,
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
                    height: t * l + r * (l - 1) + i
                }
            });
        }
    }, [M]),
    r.useEffect(
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
              style: { opacity: I },
              children: (0, i.jsx)(f.Z, {
                  tileWidth: P,
                  locked: _,
                  layout: M,
                  streamParticipants: R,
                  participantsVersion: b
              })
          });
}
