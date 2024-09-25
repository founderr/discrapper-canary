var r = n(735250),
    i = n(470079),
    a = n(692547),
    o = n(481060),
    s = n(220082),
    l = n(420596),
    u = n(880563),
    c = n(687158),
    d = n(484459),
    _ = n(695346),
    E = n(981631),
    f = n(67996);
function h(e) {
    let { style: t, src: n, backgroundSrc: h, userId: p, pulseSpeakingIndicator: m = !1, speaking: I = !1, ...T } = e,
        g = null != h ? h : n,
        S = (0, s.ZP)(g, a.Z.unsafe_rawColors.PRIMARY_800.css),
        A = (0, l.c)(!0, 'VideoBackground-web').enabled,
        v = (0, c.ZP)(null != p ? p : E.lds),
        N =
            null == v
                ? void 0
                : v.getBannerURL({
                      size: 1024,
                      canAnimate: _.QK.getSetting()
                  });
    if (
        (i.useEffect(() => {
            null != p && A && (0, d.Z)(p, void 0, { dispatchWait: !0 });
        }, [A, p]),
        null == n)
    )
        return null;
    let O = (0, r.jsx)(o.Avatar, {
            className: f.avatarWrapper,
            src: n,
            ...T
        }),
        R = {
            ...t,
            backgroundColor: S
        };
    return (
        null != N && I && A && ((R.backgroundImage = 'url('.concat(N, ')')), (R.backgroundSize = 'cover')),
        (0, r.jsx)('div', {
            style: R,
            className: f.background,
            children: m
                ? (0, r.jsx)(u.Z, {
                      shouldAnimate: I,
                      children: O
                  })
                : O
        })
    );
}
t.Z = h;
