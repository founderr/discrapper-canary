n.d(t, {
    E8: function () {
        return Z;
    },
    yc: function () {
        return j;
    }
});
var a = n(180650),
    r = n(44315),
    s = n(981631),
    o = n(689938),
    i = n(994745),
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
    T = n(238286);
let S = () => o.Z.Messages.LIMITED_TIME,
    L = () => o.Z.Messages.MOST_POPULAR,
    N = () => o.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
    k = () => o.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
    O = () => o.Z.Messages.TAKE_ME_THERE,
    B = [
        {
            id: 'category_tide',
            backgroundStaticSrc: T,
            overflowSrcStatic: v,
            logoSrc: E,
            textColor: (0, r.Lq)(s.Ilk.WHITE_100),
            badge: { label: S },
            cta: {
                label: O,
                categorySkuId: a.T.TIDE
            }
        },
        {
            id: 'category_anime',
            backgroundStaticSrc: f,
            backgroundVideoSrc: i,
            overflowSrcStatic: u,
            overflowSrcAnimatedBackground: d,
            overflowSrcAnimated: c,
            logoSrc: l,
            textColor: (0, r.Lq)(s.Ilk.BLACK_500),
            badge: { label: L },
            cta: {
                label: O,
                categorySkuId: a.T.ANIME_V2
            }
        },
        {
            id: 'category_galaxy',
            backgroundStaticSrc: I,
            backgroundVideoSrc: h,
            logoSrc: x,
            textColor: (0, r.Lq)(s.Ilk.WHITE_100),
            badge: { label: N },
            cta: {
                label: O,
                categorySkuId: a.T.GALAXY
            }
        },
        {
            id: 'category_disxcore',
            backgroundStaticSrc: b,
            overflowSrcStatic: _,
            logoSrc: m,
            textColor: (0, r.Lq)(s.Ilk.WHITE_100),
            badge: { label: k },
            cta: {
                label: O,
                categorySkuId: a.T.DISXCORE
            }
        },
        {
            id: 'category_cyberpunk',
            backgroundStaticSrc: C,
            backgroundVideoSrc: p,
            logoSrc: g,
            textColor: (0, r.Lq)(s.Ilk.WHITE_100),
            badge: { label: L },
            cta: {
                label: O,
                categorySkuId: a.T.CYBERPUNK
            }
        }
    ],
    j = (e) =>
        B.filter((t) => {
            var n;
            let a = null === (n = t.cta) || void 0 === n ? void 0 : n.categorySkuId;
            return null == a || null != e[a];
        }),
    Z = (e, t) => {
        let { overflowSrcStatic: n, overflowSrcAnimated: a, overflowSrcAnimatedBackground: r } = e;
        return null == n ? [] : t || null == a ? [n] : null == r ? [a] : [r, a];
    };
