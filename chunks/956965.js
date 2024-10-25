n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(607070),
    c = n(361213),
    d = n(778569),
    u = n(783097),
    _ = n(70097),
    E = n(768581),
    h = n(829409),
    m = n(131795);
let I = 16 / 9,
    p = 17 / 6;
function g(e) {
    let { application: t, isHovered: n, botBannerUrl: s, botBannerUrlAnimated: l } = e,
        o = (0, d.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        E = a.useMemo(() => {
            let e = (0, u.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, c.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        { imageUrl: h, imageUrlAnimated: I } = a.useMemo(
            () =>
                'fetched' === o.state && null != o.url
                    ? { imageUrl: o.url }
                    : {
                          imageUrl: s,
                          imageUrlAnimated: l
                      },
            [o.state, o.url, s, l]
        ),
        p = null != h,
        g = null != E;
    if ('loading' !== o.state) {
        if (g)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    p
                        ? (0, i.jsx)(T, {
                              isHovered: n,
                              url: h,
                              animatedUrl: void 0
                          })
                        : (0, i.jsx)(_.Z, {
                              src: E,
                              className: r()(m.bannerImage, m.bannerMedia),
                              muted: !0
                          }),
                    (0, i.jsx)(f, {
                        isHovered: n,
                        url: E,
                        isVideo: !0
                    })
                ]
            });
        if (p)
            return (0, i.jsx)(T, {
                isHovered: n,
                url: h,
                animatedUrl: I
            });
    }
    return null;
}
function T(e) {
    let { isHovered: t, url: n, animatedUrl: s } = e,
        [l, o] = a.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('img', {
                src: n,
                alt: '',
                className: r()(m.bannerImage, m.bannerMedia, { [m.loaded]: l }),
                onLoad: () => o(!0)
            }),
            null != s
                ? (0, i.jsx)(f, {
                      isHovered: t,
                      url: s,
                      isVideo: !1
                  })
                : null
        ]
    });
}
function f(e) {
    let { isHovered: t, url: n, isVideo: s } = e,
        [l, o] = a.useState(!1),
        [c, d] = a.useState(t);
    return (a.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, i.jsx)('div', {
              className: r()(m.bannerAnimatedContainer, {
                  [m.videoFadeOut]: !t,
                  [m.videoFadeIn]: t && l
              }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: s
                  ? (0, i.jsx)(_.Z, {
                        src: n,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: m.bannerMedia,
                        onLoadedData: () => o(!0)
                    })
                  : (0, i.jsx)('img', {
                        src: n,
                        alt: '',
                        className: m.bannerMedia,
                        onLoad: () => o(!0)
                    })
          })
        : null;
}
t.Z = function (e) {
    let { application: t, bannerType: n, iconURL: s } = e,
        r = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        [c, d] = a.useState(!1),
        _ = a.useCallback(() => {
            d(!0);
        }, []),
        f = a.useCallback(() => d(!1), []),
        S = (0, u.ye)(t),
        C = (0, h.u)(s),
        N = t.bot,
        { botBannerUrl: A, botBannerUrlAnimated: v } = a.useMemo(
            () =>
                (null == N ? void 0 : N.id) == null || (null == N ? void 0 : N.banner) == null
                    ? {}
                    : {
                          botBannerUrl: (0, E.aN)({
                              id: N.id,
                              banner: N.banner,
                              canAnimate: !1,
                              size: 600
                          }),
                          botBannerUrlAnimated: r
                              ? void 0
                              : (0, E.aN)({
                                    id: N.id,
                                    banner: N.banner,
                                    canAnimate: !0,
                                    size: 600
                                })
                      },
            [null == N ? void 0 : N.id, null == N ? void 0 : N.banner, r]
        );
    return (0, i.jsx)('div', {
        className: m.banner,
        style: {
            backgroundImage: C,
            aspectRatio: 'card' === n ? I : p
        },
        onMouseEnter: _,
        onFocus: _,
        onMouseLeave: f,
        onBlur: f,
        children:
            'card' === n && S
                ? (0, i.jsx)(g, {
                      application: t,
                      isHovered: c,
                      botBannerUrl: null == A ? void 0 : A,
                      botBannerUrlAnimated: null == v ? void 0 : v
                  })
                : null != A
                  ? (0, i.jsx)(T, {
                        isHovered: c,
                        url: A,
                        animatedUrl: v
                    })
                  : null
    });
};
