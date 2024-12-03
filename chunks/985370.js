n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(774078),
    d = n(579185),
    u = n(272929),
    h = n(456631),
    p = n(643720),
    m = n(411840),
    f = n(981631),
    g = n(812801);
t.Z = (e) => {
    let { channel: t, className: n } = e,
        { isHovered: r, setIsHovered: C, onMouseEnter: x, onMouseLeave: v, cancelTimers: _ } = (0, d.Z)(200, 300),
        [I, E] = l.useState(!1),
        b = (0, s.e7)([h.Z], () => h.Z.effectCooldownEndTime),
        N = l.useMemo(() => (null != b ? (b.getTime() - Date.now()) / 1000 : 0), [b]),
        { seconds: Z } = (0, c.Z)(null != b ? b : new Date()),
        S = Z > 0,
        { groupedButtons: T } = (0, m.Z)({ location: 'ActionBarSoundboardButton' }),
        j = l.useCallback(
            (e) => {
                if ('focus' !== e.type) !I && !S && x();
            },
            [I, S, x]
        ),
        A = l.useCallback(() => {
            !I && v();
        }, [v, I]),
        y = l.useCallback(
            (e, t) => {
                _(), E(!I), (!r || I) && (null == t || t(e));
            },
            [_, I, r]
        ),
        P = r || I;
    return (0, i.jsx)(o.Popout, {
        shouldShow: P,
        animationPosition: 'bottom',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            C(!1), E(!1);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(p.Z, {
                isHovered: P,
                channel: t,
                closePopout: n,
                onMouseEnter: x,
                onMouseLeave: A,
                onFocus: () => E(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: l } = e;
            return (0, i.jsx)(u.Z, {
                isCenterButton: !0,
                totalCooldownSeconds: N,
                remainingCooldownSeconds: Z,
                className: a()(!T && g.controlButton, n),
                onKeyDown: (e) => {
                    var t, n;
                    return (t = e), (n = l), void (t.keyCode === f.yXg.ENTER && t.keyCode === f.yXg.SPACE && y(t, n));
                },
                onClick: (e) => {
                    y(e, t);
                },
                onMouseEnter: j,
                onMouseLeave: A,
                isActive: P
            });
        }
    });
};
