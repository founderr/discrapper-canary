var r = n(200651),
    i = n(192379),
    a = n(692547),
    s = n(481060),
    o = n(220082),
    l = n(420596),
    u = n(880563),
    c = n(687158),
    d = n(484459),
    f = n(695346),
    _ = n(981631),
    p = n(67996);
t.Z = function (e) {
    let { style: t, src: n, backgroundSrc: h, userId: m, pulseSpeakingIndicator: g = !1, speaking: E = !1, ...v } = e,
        b = null != h ? h : n,
        I = (0, o.ZP)(b, a.Z.unsafe_rawColors.PRIMARY_800.css),
        S = (0, l.c)(!0, 'VideoBackground-web').enabled,
        T = (0, c.ZP)(null != m ? m : _.lds),
        y =
            null == T
                ? void 0
                : T.getBannerURL({
                      size: 1024,
                      canAnimate: f.QK.getSetting()
                  });
    if (
        (i.useEffect(() => {
            null != m && S && (0, d.Z)(m, void 0, { dispatchWait: !0 });
        }, [S, m]),
        null == n)
    )
        return null;
    let A = (0, r.jsx)(s.Avatar, {
            className: p.avatarWrapper,
            src: n,
            ...v
        }),
        N = {
            ...t,
            backgroundColor: I
        };
    return (
        null != y && E && S && ((N.backgroundImage = 'url('.concat(y, ')')), (N.backgroundSize = 'cover')),
        (0, r.jsx)('div', {
            style: N,
            className: p.background,
            children: g
                ? (0, r.jsx)(u.Z, {
                      shouldAnimate: E,
                      children: A
                  })
                : A
        })
    );
};
