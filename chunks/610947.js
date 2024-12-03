n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(653041);
var i = n(192379),
    l = n(846519),
    a = n(692547),
    r = n(481060),
    s = n(220082),
    o = n(979651),
    c = n(125268),
    u = n(673125),
    d = n(984063),
    m = n(88315),
    f = n(262433),
    p = n(400321),
    g = n(813900);
let h = 1000 / 60;
function v(e, t, n, v) {
    let S = (0, r.useToken)(a.Z.unsafe_rawColors.BRAND_500).hex(),
        I = (0, r.useToken)(a.Z.unsafe_rawColors.BLACK_500).hex(),
        _ = (0, r.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
        x = i.useRef({}),
        E = i.useRef(new l.Xp()),
        Z = i.useCallback(
            (t) => {
                let n = u.Z.getDrawables(t);
                (0, m.UN)(e),
                    !(function (e) {
                        let { canvasRef: t, drawables: n, fallbackColor: i, linesDrawnAt: l, streamerId: a, channelId: r, outlineColorDark: s, outlineColorLight: u } = e;
                        if (0 === n.length) return;
                        let m = t.current;
                        if (null == m) return;
                        let g = m.getContext('2d');
                        if (null == g) return;
                        let { width: h, height: v } = m.getBoundingClientRect(),
                            S = [];
                        n.forEach((e) => {
                            if (!(null != o.Z.getVoiceStateForChannel(r, e.userId))) {
                                S.push(e);
                                return;
                            }
                            !(function (e) {
                                let { drawable: t, context: n, canvasWidth: i, canvasHeight: l, fallbackColor: a, outlineColorDark: r, outlineColorLight: s, linesDrawnAt: o, streamerId: c, deadDrawables: u } = e;
                                switch (t.type) {
                                    case d.W.LINE:
                                        return (0, p.Z)({
                                            line: t,
                                            context: n,
                                            canvasWidth: i,
                                            canvasHeight: l,
                                            fallbackColor: a,
                                            outlineColorDark: r,
                                            outlineColorLight: s,
                                            linesDrawnAt: o,
                                            deadDrawables: u
                                        });
                                    case d.W.EMOJI_HOSE:
                                        return (0, f.Z)({
                                            emojiHose: t,
                                            context: n,
                                            canvasWidth: i,
                                            canvasHeight: l,
                                            fallbackColor: a,
                                            outlineColorDark: r,
                                            outlineColorLight: s,
                                            streamerId: c,
                                            deadDrawables: u
                                        });
                                }
                            })({
                                drawable: e,
                                context: g,
                                canvasWidth: h,
                                canvasHeight: v,
                                fallbackColor: i,
                                outlineColorDark: s,
                                outlineColorLight: u,
                                linesDrawnAt: l,
                                deadDrawables: S,
                                streamerId: a
                            });
                        }),
                            S.length > 0 && (0, c.fW)(S, a);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: S,
                        linesDrawnAt: x,
                        streamerId: t,
                        outlineColorDark: I,
                        outlineColorLight: _,
                        channelId: v
                    });
            },
            [e, v, S, I, _]
        );
    i.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: i, height: l } = t.getBoundingClientRect();
            (t.width = i * window.devicePixelRatio), (t.height = l * window.devicePixelRatio), Z(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, Z, n]);
    let C = i.useCallback(() => {
        let t = u.Z.getDrawables(n),
            i = f.U.getState().particles,
            l = t.length > 0 || Object.keys(i).length > 0;
        l && null == E.current._ref && (null == E.current._ref ? (Z(n), E.current.start(h, () => Z(n))) : !l && null != E.current._ref && (E.current.stop(), (0, m.UN)(e)));
    }, [e, Z, n]);
    i.useEffect(() => {
        let e = E.current;
        return (
            u.Z.addChangeListener(C),
            C(),
            (0, s.vM)(t.getAvatarURL(null, g.Ks)),
            () => {
                u.Z.removeChangeListener(C), e.stop();
            }
        );
    });
}
