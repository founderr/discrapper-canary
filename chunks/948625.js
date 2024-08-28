n.d(t, {
    E8: function () {
        return P;
    },
    yc: function () {
        return B;
    }
});
var r = n(180650),
    s = n(44315),
    a = n(981631),
    i = n(689938),
    o = n(994745),
    l = n(341364),
    c = n(763542),
    d = n(354873),
    u = n(525071),
    f = n(737140),
    p = n(194349),
    g = n(523569),
    C = n(55817),
    m = n(696228),
    _ = n(202796),
    b = n(570593),
    h = n(199546),
    x = n(613540),
    I = n(769411),
    E = n(125257),
    v = n(6412),
    S = n(238286);
let T = () => i.Z.Messages.LIMITED_TIME,
    L = () => i.Z.Messages.MOST_POPULAR,
    N = () => i.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
    O = () => i.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
    k = () => i.Z.Messages.TAKE_ME_THERE,
    j = [
        {
            id: 'category_tide',
            backgroundStaticSrc: S,
            overflowSrcStatic: v,
            logoSrc: E,
            textColor: (0, s.Lq)(a.Ilk.WHITE_100),
            badge: { label: T },
            cta: {
                label: k,
                categorySkuId: r.T.TIDE
            }
        },
        {
            id: 'category_anime',
            backgroundStaticSrc: f,
            backgroundVideoSrc: o,
            overflowSrcStatic: u,
            overflowSrcAnimatedBackground: d,
            overflowSrcAnimated: c,
            logoSrc: l,
            textColor: (0, s.Lq)(a.Ilk.BLACK_500),
            badge: { label: L },
            cta: {
                label: k,
                categorySkuId: r.T.ANIME_V2
            }
        },
        {
            id: 'category_galaxy',
            backgroundStaticSrc: I,
            backgroundVideoSrc: h,
            logoSrc: x,
            textColor: (0, s.Lq)(a.Ilk.WHITE_100),
            badge: { label: N },
            cta: {
                label: k,
                categorySkuId: r.T.GALAXY
            }
        },
        {
            id: 'category_disxcore',
            backgroundStaticSrc: b,
            overflowSrcStatic: _,
            logoSrc: m,
            textColor: (0, s.Lq)(a.Ilk.WHITE_100),
            badge: { label: O },
            cta: {
                label: k,
                categorySkuId: r.T.DISXCORE
            }
        },
        {
            id: 'category_cyberpunk',
            backgroundStaticSrc: C,
            backgroundVideoSrc: p,
            logoSrc: g,
            textColor: (0, s.Lq)(a.Ilk.WHITE_100),
            badge: { label: L },
            cta: {
                label: k,
                categorySkuId: r.T.CYBERPUNK
            }
        }
    ],
    B = (e) =>
        j.filter((t) => {
            var n;
            let r = null === (n = t.cta) || void 0 === n ? void 0 : n.categorySkuId;
            return null == r || null != e[r];
        }),
    P = (e, t) => {
        let { overflowSrcStatic: n, overflowSrcAnimated: r, overflowSrcAnimatedBackground: s } = e;
        return null == n ? [] : t || null == r ? [n] : null == s ? [r] : [s, r];
    };
