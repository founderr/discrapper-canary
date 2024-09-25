n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(774078),
    u = n(579185),
    d = n(272929),
    h = n(456631),
    m = n(643720),
    p = n(981631),
    _ = n(892216);
t.Z = (e) => {
    let { channel: t, className: n } = e,
        { isHovered: a, setIsHovered: f, onMouseEnter: E, onMouseLeave: g, cancelTimers: C } = (0, u.Z)(200, 300),
        [I, T] = s.useState(!1),
        x = (0, r.e7)([h.Z], () => h.Z.effectCooldownEndTime),
        v = s.useMemo(() => (null != x ? (x.getTime() - Date.now()) / 1000 : 0), [x]),
        { seconds: S } = (0, c.Z)(null != x ? x : new Date()),
        N = S > 0,
        A = s.useCallback(
            (e) => {
                if ('focus' !== e.type) !I && !N && E();
            },
            [I, N, E]
        ),
        Z = s.useCallback(() => {
            !I && g();
        }, [g, I]),
        M = s.useCallback(
            (e, t) => {
                C(), T(!I), (!a || I) && (null == t || t(e));
            },
            [C, I, a]
        ),
        b = a || I;
    return (0, i.jsx)(o.Popout, {
        shouldShow: b,
        animationPosition: 'bottom',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            f(!1), T(!1);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(m.Z, {
                isHovered: b,
                channel: t,
                closePopout: n,
                onMouseEnter: E,
                onMouseLeave: Z,
                onFocus: () => T(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: s } = e;
            return (0, i.jsx)(d.Z, {
                isCenterButton: !0,
                totalCooldownSeconds: v,
                remainingCooldownSeconds: S,
                className: l()(_.controlButton, n),
                onKeyDown: (e) => {
                    var t, n;
                    return (t = e), (n = s), void (t.keyCode === p.yXg.ENTER && t.keyCode === p.yXg.SPACE && M(t, n));
                },
                onClick: (e) => {
                    M(e, t);
                },
                onMouseEnter: A,
                onMouseLeave: Z,
                isActive: b
            });
        }
    });
};
