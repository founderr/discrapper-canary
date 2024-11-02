n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(774078),
    u = n(579185),
    d = n(272929),
    h = n(456631),
    m = n(643720),
    p = n(981631),
    f = n(892216);
t.Z = (e) => {
    let { channel: t, className: n } = e,
        { isHovered: r, setIsHovered: g, onMouseEnter: C, onMouseLeave: x, cancelTimers: v } = (0, u.Z)(200, 300),
        [_, I] = l.useState(!1),
        E = (0, s.e7)([h.Z], () => h.Z.effectCooldownEndTime),
        b = l.useMemo(() => (null != E ? (E.getTime() - Date.now()) / 1000 : 0), [E]),
        { seconds: S } = (0, c.Z)(null != E ? E : new Date()),
        Z = S > 0,
        T = l.useCallback(
            (e) => {
                if ('focus' !== e.type) !_ && !Z && C();
            },
            [_, Z, C]
        ),
        N = l.useCallback(() => {
            !_ && x();
        }, [x, _]),
        j = l.useCallback(
            (e, t) => {
                v(), I(!_), (!r || _) && (null == t || t(e));
            },
            [v, _, r]
        ),
        A = r || _;
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
            return (0, i.jsx)(m.Z, {
                isHovered: A,
                channel: t,
                closePopout: n,
                onMouseEnter: C,
                onMouseLeave: N,
                onFocus: () => I(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: l } = e;
            return (0, i.jsx)(d.Z, {
                isCenterButton: !0,
                totalCooldownSeconds: b,
                remainingCooldownSeconds: S,
                className: a()(f.controlButton, n),
                onKeyDown: (e) => {
                    var t, n;
                    return (t = e), (n = l), void (t.keyCode === p.yXg.ENTER && t.keyCode === p.yXg.SPACE && j(t, n));
                },
                onClick: (e) => {
                    j(e, t);
                },
                onMouseEnter: T,
                onMouseLeave: N,
                isActive: A
            });
        }
    });
};
