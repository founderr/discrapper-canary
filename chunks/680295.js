n.d(t, {
    n: function () {
        return g;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(607070),
    c = n(451478),
    d = n(119837),
    _ = n(802433),
    E = n(658312),
    f = n(729436),
    h = n(142145),
    p = n(710867),
    m = n(312904),
    I = n(186917),
    T = n(831748);
let g = (e) => {
        let { bannerAdjustment: t = 0, maxLoops: n, resetOnHover: r = !1, isHovering: o = !1, useOpacityOnHover: l = !0, autoPlay: u = !0, restartMethod: c, urlQueryString: p, profileEffectConfig: I, noBorderRadius: g = !1, introDelay: S = d.lG, debugForTool: A = !1 } = e,
            v = a.useRef(null),
            [N, O] = a.useState([]);
        (0, m.Z)(I);
        let [R, C] = a.useState(0),
            [y, L] = a.useState(0),
            { accessibilityLabel: b } = I,
            [D, M] = a.useState(-S),
            {
                stop: P,
                reset: U,
                ticking: w
            } = (0, E.Z)((e) => {
                M((t) => t + e);
            });
        a.useEffect(() => {
            M(-S), O((0, f.Hd)(I.effects));
        }, [I]),
            a.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                N.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    C(t),
                    L(e);
            }, [L, N]);
        let [x, G] = a.useState(!1);
        return (
            a.useEffect(() => {
                !0 !== u && !o && (P(), M(0)), !o && x && w.current && (P(), M(0)), r && o && !w.current && (U(), I.animationType === _.Q.PERSISTENT ? M(c === _.j.FromStart ? 0 : R) : M(0));
            }, [o, x, R, r, P, U, w, I.animationType, u, c]),
            (0, i.jsx)('div', {
                ref: v,
                className: s()(T.profileEffects, { [T.hovered]: o && l }),
                children: (0, i.jsx)('div', {
                    className: g ? T.innerNoRadius : T.inner,
                    children: N.map((e, r) => {
                        if (!w.current && I.animationType === _.Q.PERSISTENT && null != I.staticFrameSrc && 0 === r && !0 === u) {
                            var a, o, s, l;
                            let { staticFrameSrc: n } = I;
                            return (0, i.jsx)(
                                'img',
                                {
                                    className: T.effect,
                                    style: {
                                        top: null !== (s = null === (a = e.position) || void 0 === a ? void 0 : a.y) && void 0 !== s ? s : 0 - t,
                                        left: null !== (l = null === (o = e.position) || void 0 === o ? void 0 : o.x) && void 0 !== l ? l : 0
                                    },
                                    src: n,
                                    alt: b
                                },
                                e.src + r
                            );
                        }
                        return (0, i.jsx)(
                            h.Z,
                            {
                                layerConfig: e,
                                animationType: I.animationType,
                                ticking: w.current,
                                time: D,
                                accessibilityLabel: b,
                                hasPlayedThrough: x,
                                setHasPlayedThrough: G,
                                urlQueryString: p,
                                maxLoops: n,
                                loopEnd: y,
                                bannerAdjustment: t,
                                debugForTool: A
                            },
                            e.src + r
                        );
                    })
                })
            })
        );
    },
    S = (e) => {
        let { config: t, useThumbnail: n, bannerAdjustment: r = 0, noBorderRadius: a, isHovering: o = !1, useOpacityOnHover: l = !0 } = e,
            { reducedMotionSrc: u, thumbnailPreviewSrc: c, accessibilityLabel: d } = t;
        return (0, i.jsx)('div', {
            className: s()(T.profileEffects, { [T.hovered]: o && l }),
            children: (0, i.jsx)('div', {
                className: a ? T.innerNoRadius : T.inner,
                children: (0, i.jsx)('img', {
                    src: n && !o ? c : u,
                    className: T.effect,
                    style: { top: 0 - r },
                    alt: d
                })
            })
        });
    },
    A = (e) => {
        let t = (0, l.e7)([c.Z], () => c.Z.isFocused()),
            n = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
            [r, o] = a.useState(!1),
            { preset: s } = (0, I.Z)(e.profileEffectId, () => o(!1)),
            d = (0, f.Cc)(null == s ? void 0 : s.config);
        return ((0, f.qB)(d), null != s && null != d && (t || e.shopPreview || s.config.animationType !== _.Q.INTERMITTENT))
            ? (!t && e.shopPreview) || (!t && s.config.animationType === _.Q.PERSISTENT) || n || (!1 === e.autoPlay && !1 === e.isHovering)
                ? (0, i.jsx)(S, {
                      useThumbnail: e.useThumbnail,
                      config: d,
                      bannerAdjustment: e.bannerAdjustment,
                      noBorderRadius: e.noBorderRadius,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover
                  })
                : r
                  ? (0, i.jsx)(g, {
                        profileEffectConfig: d,
                        ...e
                    })
                  : (0, i.jsx)(p.Z, {
                        profileEffectConfig: d,
                        onReady: () => {
                            o(!0);
                        }
                    })
            : null;
    };
t.Z = A;
