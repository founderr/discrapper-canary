n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(442837),
    r = n(765250),
    s = n(358221),
    a = n(569545),
    u = n(199902),
    d = n(314897),
    c = n(592125),
    h = n(944486),
    f = n(350663),
    p = n(388627),
    m = n(666540);
let g = [];
function v(e, t, n, i) {
    let l = (i - 1) * 12;
    return e === f.C.HORIZONTAL ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
}
function E(e) {
    var t;
    let { id: n, size: E, locked: Z, padding: C, borderWidth: x, opacity: S, horizontal: I } = e,
        _ = 2 * C + 2 * x;
    let { width: O, height: N } = {
            width: 'number' == typeof (t = E).width ? t.width : 256,
            height: 'number' == typeof t.height ? t.height : 144
        },
        y = (0, o.e7)([h.Z], () => h.Z.getVoiceChannelId()),
        T = (0, o.e7)([c.Z], () => c.Z.getChannel(y)),
        j = (0, o.e7)([d.default], () => d.default.getId()),
        { participantsVersion: b, streamParticipants: L } = (0, o.e7)(
            [u.Z, s.Z],
            () => {
                if (null == y)
                    return {
                        streamParticipants: g,
                        participantsVersion: -1
                    };
                let e = new Set(u.Z.getAllActiveStreamsForChannel(y).map((e) => (0, a.V9)(e))),
                    t = s.Z.getStreamParticipants(y).filter((t) => t.user.id !== j && e.has((0, a.V9)(t.stream)));
                return (
                    t.sort((e, t) => e.user.username.localeCompare(t.user.username)),
                    {
                        streamParticipants: t,
                        participantsVersion: s.Z.getParticipantsVersion(y)
                    }
                );
            },
            [y, j],
            p.yp
        ),
        R = L.length,
        w = null == T || 0 === R,
        k = I ? f.C.HORIZONTAL : f.C.VERTICAL,
        { tileWidth: A } = (function (e, t, n, i, o) {
            let r = (function (e, t, n, i) {
                    let l = v(f.C.HORIZONTAL, e, t, n),
                        o = v(f.C.VERTICAL, e, t, n);
                    switch (i) {
                        case f.C.VERTICAL:
                            return o;
                        case f.C.HORIZONTAL:
                            return l;
                    }
                    let r = ((9 * o) / 16 + 12) * n - 12;
                    return e > (16 * t) / 9 ? l : r <= t ? o : (9 * l) / 16 <= t ? l : o;
                })(n, i, t, o),
                s = v(f.C.VERTICAL, n, i, t),
                a = null != o ? o : r === s ? f.C.VERTICAL : f.C.HORIZONTAL,
                [u, d] = l.useState(r);
            return (
                l.useEffect(() => {
                    !e && d(r);
                }, [e, r]),
                {
                    layout: a,
                    tileWidth: u
                }
            );
        })(!1, R, O - _, N - _, k),
        M = {
            id: n,
            width: O,
            height: N,
            sizeOffset: _,
            layout: k,
            padding: C,
            participants: L.length
        },
        z = l.useRef(M);
    return (l.useEffect(() => void (z.current = M)),
    l.useEffect(() => {
        let { id: e, width: t, height: n, sizeOffset: i, layout: l, padding: o } = z.current;
        if (0 === L.length) {
            (256 !== t || 144 !== n) &&
                (0, r.nv)({
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
            (0, r.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    height: n,
                    width: t * L.length + o * (L.length - 1) + i
                }
            });
        } else {
            let n = (9 / 16) * (t - i);
            (0, r.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    width: t,
                    height: n * L.length + o * (L.length - 1) + i
                }
            });
        }
    }, [L.length]),
    l.useEffect(() => {
        if (z.current.participants <= 1) return;
        let { id: e, width: t, height: n, sizeOffset: i, padding: l, participants: o } = z.current;
        if (k === f.C.HORIZONTAL) {
            let n = t - i;
            (0, r.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    width: n * o + l * (o - 1) + i,
                    height: (9 / 16) * n + i
                }
            });
        } else {
            let t = n - i;
            (0, r.nv)({
                widgetId: e,
                size: {
                    fixed: !0,
                    width: (16 / 9) * t + i,
                    height: t * o + l * (o - 1) + i
                }
            });
        }
    }, [k]),
    l.useEffect(
        () => () => {
            (0, r.nv)({
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
    w && Z)
        ? null
        : (0, i.jsx)('div', {
              className: m.goLiveGridContainer,
              style: { opacity: S },
              children: (0, i.jsx)(f.Z, {
                  tileWidth: A,
                  locked: Z,
                  layout: k,
                  streamParticipants: L,
                  participantsVersion: b
              })
          });
}
