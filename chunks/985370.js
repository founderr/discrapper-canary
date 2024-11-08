n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(774078),
    d = n(579185),
    u = n(272929),
    h = n(456631),
    p = n(643720),
    m = n(981631),
    f = n(313439);
t.Z = (e) => {
    let { channel: t, className: n } = e,
        { isHovered: a, setIsHovered: g, onMouseEnter: C, onMouseLeave: x, cancelTimers: v } = (0, d.Z)(200, 300),
        [_, I] = l.useState(!1),
        E = (0, s.e7)([h.Z], () => h.Z.effectCooldownEndTime),
        b = l.useMemo(() => (null != E ? (E.getTime() - Date.now()) / 1000 : 0), [E]),
        { seconds: N } = (0, c.Z)(null != E ? E : new Date()),
        Z = N > 0,
        S = l.useCallback(
            (e) => {
                if ('focus' !== e.type) !_ && !Z && C();
            },
            [_, Z, C]
        ),
        T = l.useCallback(() => {
            !_ && x();
        }, [x, _]),
        j = l.useCallback(
            (e, t) => {
                v(), I(!_), (!a || _) && (null == t || t(e));
            },
            [v, _, a]
        ),
        A = a || _;
    return (0, i.jsx)(o.Popout, {
        shouldShow: A,
        animationPosition: 'bottom',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            g(!1), I(!1);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(p.Z, {
                isHovered: A,
                channel: t,
                closePopout: n,
                onMouseEnter: C,
                onMouseLeave: T,
                onFocus: () => I(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: l } = e;
            return (0, i.jsx)(u.Z, {
                isCenterButton: !0,
                totalCooldownSeconds: b,
                remainingCooldownSeconds: N,
                className: r()(f.controlButton, n),
                onKeyDown: (e) => {
                    var t, n;
                    return (t = e), (n = l), void (t.keyCode === m.yXg.ENTER && t.keyCode === m.yXg.SPACE && j(t, n));
                },
                onClick: (e) => {
                    j(e, t);
                },
                onMouseEnter: S,
                onMouseLeave: T,
                isActive: A
            });
        }
    });
};
