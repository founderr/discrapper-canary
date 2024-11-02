n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(653041);
var i = n(192379),
    l = n(846519),
    r = n(692547),
    a = n(481060),
    s = n(220082),
    o = n(979651),
    c = n(125268),
    u = n(673125),
    d = n(292793),
    h = n(88315),
    m = n(262433),
    p = n(400321),
    f = n(813900);
let g = 1000 / 60;
function C(e, t, n, C) {
    let x = (0, a.useToken)(r.Z.unsafe_rawColors.BRAND_500).hex(),
        v = (0, a.useToken)(r.Z.unsafe_rawColors.BLACK_500).hex(),
        _ = (0, a.useToken)(r.Z.unsafe_rawColors.WHITE_500).hex(),
        I = i.useRef({}),
        E = i.useRef(new l.Xp()),
        b = i.useCallback(
            (t) => {
                let n = u.Z.getDrawables(t);
                (0, h.UN)(e),
                    !(function (e) {
                        let { canvasRef: t, drawables: n, fallbackColor: i, linesDrawnAt: l, streamerId: r, channelId: a, outlineColorDark: s, outlineColorLight: u } = e;
                        if (0 === n.length) return;
                        let h = t.current;
                        if (null == h) return;
                        let f = h.getContext('2d');
                        if (null == f) return;
                        let { width: g, height: C } = h.getBoundingClientRect(),
                            x = [];
                        n.forEach((e) => {
                            if (!(null != o.Z.getVoiceStateForChannel(a, e.userId))) {
                                x.push(e);
                                return;
                            }
                            !(function (e) {
                                let { drawable: t, context: n, canvasWidth: i, canvasHeight: l, fallbackColor: r, outlineColorDark: a, outlineColorLight: s, linesDrawnAt: o, streamerId: c, deadDrawables: u } = e;
                                switch (t.type) {
                                    case d.W.LINE:
                                        return (0, p.Z)({
                                            line: t,
                                            context: n,
                                            canvasWidth: i,
                                            canvasHeight: l,
                                            fallbackColor: r,
                                            outlineColorDark: a,
                                            outlineColorLight: s,
                                            linesDrawnAt: o,
                                            deadDrawables: u
                                        });
                                    case d.W.EMOJI_HOSE:
                                        return (0, m.Z)({
                                            emojiHose: t,
                                            context: n,
                                            canvasWidth: i,
                                            canvasHeight: l,
                                            fallbackColor: r,
                                            outlineColorDark: a,
                                            outlineColorLight: s,
                                            streamerId: c,
                                            deadDrawables: u
                                        });
                                }
                            })({
                                drawable: e,
                                context: f,
                                canvasWidth: g,
                                canvasHeight: C,
                                fallbackColor: i,
                                outlineColorDark: s,
                                outlineColorLight: u,
                                linesDrawnAt: l,
                                deadDrawables: x,
                                streamerId: r
                            });
                        }),
                            x.length > 0 && (0, c.fW)(x, r);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: x,
                        linesDrawnAt: I,
                        streamerId: t,
                        outlineColorDark: v,
                        outlineColorLight: _,
                        channelId: C
                    });
            },
            [e, C, x, v, _]
        );
    i.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: i, height: l } = t.getBoundingClientRect();
            (t.width = i * window.devicePixelRatio), (t.height = l * window.devicePixelRatio), b(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, b, n]);
    let S = i.useCallback(() => {
        let t = u.Z.getDrawables(n),
            i = m.U.getState().particles,
            l = t.length > 0 || Object.keys(i).length > 0;
        l && null == E.current._ref && (null == E.current._ref ? (b(n), E.current.start(g, () => b(n))) : !l && null != E.current._ref && (E.current.stop(), (0, h.UN)(e)));
    }, [e, b, n]);
    i.useEffect(() => {
        let e = E.current;
        return (
            u.Z.addChangeListener(S),
            S(),
            (0, s.vM)(t.getAvatarURL(null, f.Ks)),
            () => {
                u.Z.removeChangeListener(S), e.stop();
            }
        );
    });
}
