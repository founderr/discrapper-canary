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
    f = n(127379),
    g = n(981631),
    C = n(812801);
t.Z = (e) => {
    let { channel: t, className: n, whichPopoutIsOpen: r, setWhichPopoutIsOpen: x } = e,
        { isHovered: v, setIsHovered: _, onMouseEnter: I, onMouseLeave: E, cancelTimers: b } = (0, d.Z)(200, 300),
        [N, Z] = l.useState(!1),
        S = (0, s.e7)([h.Z], () => h.Z.effectCooldownEndTime),
        T = l.useMemo(() => (null != S ? (S.getTime() - Date.now()) / 1000 : 0), [S]),
        { seconds: j } = (0, c.Z)(null != S ? S : new Date()),
        A = j > 0,
        { groupedButtons: y, mode: P } = (0, m.Z)({ location: 'ActionBarSoundboardButton' }),
        M = P === m.B.GroupedButtonsRedMic ? 'green' : void 0,
        R = l.useCallback(
            (e) => {
                if ('focus' !== e.type) !N && !A && I();
            },
            [N, A, I]
        ),
        L = l.useCallback(() => {
            !N && E();
        }, [E, N]),
        k = l.useCallback(
            (e, t) => {
                b(), Z(!N), r === f.D.EMOJI ? null == x || x(void 0) : null == x || x(f.D.EMOJI), (!v || N) && (null == t || t(e));
            },
            [b, N, v, x, r]
        ),
        O = (v || N) && (r === f.D.EMOJI || null == r);
    return (0, i.jsx)(o.Popout, {
        shouldShow: O,
        animationPosition: 'bottom',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            _(!1), Z(!1), null == x || x(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(p.Z, {
                isHovered: O,
                channel: t,
                closePopout: n,
                onMouseEnter: I,
                onMouseLeave: L,
                onFocus: () => Z(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: l } = e;
            return (0, i.jsx)(u.Z, {
                isCenterButton: !0,
                color: N ? M : void 0,
                totalCooldownSeconds: T,
                remainingCooldownSeconds: j,
                className: a()(!y && C.controlButton, n),
                onKeyDown: (e) => {
                    var t, n;
                    return (t = e), (n = l), void (t.keyCode === g.yXg.ENTER && t.keyCode === g.yXg.SPACE && k(t, n));
                },
                onClick: (e) => {
                    k(e, t);
                },
                onMouseEnter: R,
                onMouseLeave: L,
                isActive: N
            });
        }
    });
};
