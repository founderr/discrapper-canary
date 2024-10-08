n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(361213),
    u = n(778569),
    _ = n(783097),
    E = n(220082),
    h = n(70097),
    m = n(768581),
    I = n(803537);
function p(e) {
    let { application: t, isHovered: n, botBannerUrl: s, botBannerUrlAnimated: r } = e,
        l = (0, u.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        o = a.useMemo(() => {
            let e = (0, _.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, d.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        { imageUrl: c, imageUrlAnimated: E } = a.useMemo(
            () =>
                'fetched' === l.state && null != l.url
                    ? { imageUrl: l.url }
                    : {
                          imageUrl: s,
                          imageUrlAnimated: r
                      },
            [l.state, l.url, s, r]
        ),
        m = null != c,
        p = null != o;
    if ('loading' !== l.state) {
        if (p)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    m
                        ? (0, i.jsx)(g, {
                              isHovered: n,
                              url: c,
                              animatedUrl: void 0
                          })
                        : (0, i.jsx)(h.Z, {
                              src: o,
                              className: I.bannerImage,
                              muted: !0
                          }),
                    (0, i.jsx)(T, {
                        isHovered: n,
                        url: o,
                        isVideo: !0
                    })
                ]
            });
        if (m)
            return (0, i.jsx)(g, {
                isHovered: n,
                url: c,
                animatedUrl: E
            });
    }
    return null;
}
function g(e) {
    let { isHovered: t, url: n, animatedUrl: s } = e,
        [l, o] = a.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != s
                ? (0, i.jsx)(T, {
                      isHovered: t,
                      url: s,
                      isVideo: !1
                  })
                : null,
            (0, i.jsx)('img', {
                src: n,
                alt: '',
                className: r()(I.bannerImage, { [I.loaded]: l }),
                onLoad: () => o(!0)
            })
        ]
    });
}
function T(e) {
    let { isHovered: t, url: n, isVideo: s } = e,
        [l, o] = a.useState(!1),
        [c, d] = a.useState(t);
    return (a.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, i.jsx)('div', {
              className: r()(I.activityAnimatedContainer, {
                  [I.videoFadeOut]: !t,
                  [I.videoFadeIn]: t && l
              }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: s
                  ? (0, i.jsx)(h.Z, {
                        src: n,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: I.activityVideo,
                        onLoadedData: () => o(!0)
                    })
                  : (0, i.jsx)('img', {
                        src: n,
                        alt: '',
                        className: I.activityVideo,
                        onLoad: () => o(!0)
                    })
          })
        : null;
}
t.Z = function (e) {
    let { application: t, iconURL: n } = e,
        s = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        [r, d] = a.useState(!1),
        u = a.useCallback(() => {
            d(!0);
        }, []),
        h = a.useCallback(() => d(!1), []),
        T = (0, _.ye)(t),
        f = (0, o.useToken)(o.tokens.colors.BACKGROUND_PRIMARY).hex(),
        [S, C, N] = (0, E.Cf)(n, f),
        A = t.bot,
        { botBannerUrl: v, botBannerUrlAnimated: Z } = a.useMemo(
            () =>
                (null == A ? void 0 : A.id) == null || (null == A ? void 0 : A.banner) == null
                    ? {}
                    : {
                          botBannerUrl: (0, m.aN)({
                              id: A.id,
                              banner: A.banner,
                              canAnimate: !1,
                              size: 600
                          }),
                          botBannerUrlAnimated: s
                              ? void 0
                              : (0, m.aN)({
                                    id: A.id,
                                    banner: A.banner,
                                    canAnimate: !0,
                                    size: 600
                                })
                      },
            [null == A ? void 0 : A.id, null == A ? void 0 : A.banner, s]
        );
    return (0, i.jsx)('div', {
        className: I.banner,
        style: { backgroundImage: 'linear-gradient(45deg, '.concat(S, ', ').concat(null != N ? N : C, ')') },
        onMouseEnter: u,
        onFocus: u,
        onMouseLeave: h,
        onBlur: h,
        children: T
            ? (0, i.jsx)(p, {
                  application: t,
                  isHovered: r,
                  botBannerUrl: null == v ? void 0 : v,
                  botBannerUrlAnimated: null == Z ? void 0 : Z
              })
            : null != v
              ? (0, i.jsx)(g, {
                    isHovered: r,
                    url: v,
                    animatedUrl: Z
                })
              : null
    });
};
