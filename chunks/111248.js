n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(433517),
    c = n(519938),
    u = n(241915),
    d = n(366050),
    h = n(27457),
    p = n(981631),
    m = n(354459),
    _ = n(310402),
    f = n(256507);
let E = 'CameraPreviewPosition';
function C(e) {
    let { width: t, onContextMenuParticipant: n, height: s, channel: C, participants: g } = e,
        [I, x] = (function () {
            let [e, t] = a.useState(() => o.K.get(E, p.VD2.BOTTOM_RIGHT));
            return [
                e,
                a.useCallback((e) => {
                    o.K.set(E, e), t(e);
                }, [])
            ];
        })(),
        T = a.useRef(null),
        N = null == C.getGuildId() ? 70 : 50,
        S = (0, r.e7)([d.Z], () => d.Z.pipWidth(m.cL.CAMERA_PREVIEW));
    return (
        a.useLayoutEffect(() => {
            var e;
            null === (e = T.current) || void 0 === e || e.ensureIsInPosition();
        }, [g.length]),
        (0, i.jsx)('div', {
            className: _.container,
            children: (0, i.jsx)(u._, {
                position: I,
                id: 0,
                type: m.cL.CAMERA_PREVIEW,
                width: S,
                ref: T,
                onMove: (e, t) => x(t),
                onResize: (e) => c.d7(e, m.cL.CAMERA_PREVIEW),
                maxX: t,
                maxY: s,
                edgeOffsetTop: N,
                edgeOffsetBottom: 70,
                edgeOffsetLeft: 16,
                edgeOffsetRight: 16,
                isResizable: !0,
                children: (0, i.jsx)('div', {
                    className: _.tileContainer,
                    children: g.map((e) =>
                        (0, i.jsx)(
                            h.ZP,
                            {
                                participant: e,
                                channel: C,
                                onContextMenu: n,
                                className: l()(_.tile, f.elevationHigh),
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
        })
    );
}
