n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    c = n(519938),
    u = n(241915),
    d = n(366050),
    h = n(27457),
    m = n(981631),
    p = n(354459),
    f = n(824872),
    g = n(852401);
let C = 'CameraPreviewPosition';
function x(e, t) {
    return e * t + 8 * (t - 1);
}
function v(e) {
    var t;
    let { width: n, onContextMenuParticipant: r, height: x, channel: v, participants: _ } = e,
        [I, E] = (function () {
            let [e, t] = l.useState(() => o.K.get(C, m.VD2.BOTTOM_RIGHT));
            return [
                e,
                l.useCallback((e) => {
                    o.K.set(C, e), t(e);
                }, [])
            ];
        })(),
        b = l.useRef(null),
        S = null == v.getGuildId() ? 70 : 50,
        Z = (0, s.e7)([d.Z], () => d.Z.pipWidth(p.cL.CAMERA_PREVIEW)),
        T = _.length;
    let N = Z * (t = T) + 8 * (t - 1),
        j = l.useMemo(() => {
            var e, t, n, i;
            return {
                minWidth: ((e = p.Rv[p.cL.CAMERA_PREVIEW]), e * (t = T) + 8 * (t - 1)),
                maxWidth: ((n = p.$i[p.cL.CAMERA_PREVIEW]), n * (i = T) + 8 * (i - 1))
            };
        }, [T]);
    l.useLayoutEffect(() => {
        var e;
        null === (e = b.current) || void 0 === e || e.ensureIsInPosition();
    }, [_.length]);
    let A = l.useCallback(
            (e) => {
                var t, n;
                let i = ((t = e), 0 === (n = T) ? t : (t - 8 * (n - 1)) / n);
                c.d7(i, p.cL.CAMERA_PREVIEW);
            },
            [T]
        ),
        y = l.useCallback(
            (e, t) => {
                E(t);
            },
            [E]
        );
    return (0, i.jsx)('div', {
        className: f.container,
        children: (0, i.jsx)(u._, {
            position: I,
            id: 0,
            width: N,
            ref: b,
            onMove: y,
            onResize: A,
            maxX: n,
            maxY: x,
            edgeOffsetTop: S,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: j,
            children: (0, i.jsx)('div', {
                className: f.tileContainer,
                children: _.map((e) =>
                    (0, i.jsx)(
                        h.ZP,
                        {
                            participant: e,
                            channel: v,
                            onContextMenu: r,
                            className: a()(f.tile, g.elevationHigh),
                            fit: h.BP.COVER,
                            inCall: !0,
                            inPopout: !1,
                            width: 160
                        },
                        e.id
                    )
                )
            })
        })
    });
}
