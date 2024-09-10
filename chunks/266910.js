var r = n(735250),
    i = n(470079),
    a = n(692547),
    s = n(481060),
    o = n(220082),
    l = n(420596),
    u = n(880563),
    c = n(687158),
    d = n(484459),
    _ = n(695346),
    E = n(981631),
    f = n(67996);
t.Z = function (e) {
    let { style: t, src: n, backgroundSrc: h, userId: p, pulseSpeakingIndicator: I = !1, speaking: m = !1, ...T } = e,
        S = null != h ? h : n,
        g = (0, o.ZP)(S, a.Z.unsafe_rawColors.PRIMARY_800.css),
        A = (0, l.c)(!0, 'VideoBackground-web').enabled,
        N = (0, c.ZP)(null != p ? p : E.lds),
        O =
            null == N
                ? void 0
                : N.getBannerURL({
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
    let R = (0, r.jsx)(s.Avatar, {
            className: f.avatarWrapper,
            src: n,
            ...T
        }),
        v = {
            ...t,
            backgroundColor: g
        };
    return (
        null != O && m && A && ((v.backgroundImage = 'url('.concat(O, ')')), (v.backgroundSize = 'cover')),
        (0, r.jsx)('div', {
            style: v,
            className: f.background,
            children: I
                ? (0, r.jsx)(u.Z, {
                      shouldAnimate: m,
                      children: R
                  })
                : R
        })
    );
};
