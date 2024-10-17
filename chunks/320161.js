n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    r = n(392711),
    i = n(846519),
    l = n(481060),
    o = n(626135),
    c = n(572004),
    _ = n(70956),
    d = n(981631),
    E = n(689938);
let u = _.Z.Millis.SECOND,
    T = 2 * u,
    I = _.Z.Millis.HALF_SECOND,
    R = [() => E.Z.Messages.COPY_SUCCESS_1, () => E.Z.Messages.COPY_SUCCESS_2, () => E.Z.Messages.COPY_SUCCESS_3, () => E.Z.Messages.COPY_SUCCESS_4, () => E.Z.Messages.COPY_SUCCESS_5, () => E.Z.Messages.COPY_SUCCESS_6, () => E.Z.Messages.COPY_SUCCESS_7, () => E.Z.Messages.COPY_SUCCESS_8, () => E.Z.Messages.COPY_SUCCESS_9, () => E.Z.Messages.COPY_SUCCESS_10, () => E.Z.Messages.COPY_SUCCESS_11];
function g(e) {
    let { text: t, copyValue: n, children: _, onCopy: E, 'aria-label': g, delay: N = I } = e,
        [m, C] = a.useState(0),
        [A, f] = a.useState(!1),
        [p, M] = a.useState(!1),
        [S] = a.useState(() => new i.V7()),
        [h] = a.useState(() => new i.V7());
    if (
        (a.useEffect(
            () => () => {
                S.stop(), h.stop();
            },
            [S, h]
        ),
        !c.wS)
    )
        return (0, s.jsx)(s.Fragment, { children: _({}) });
    let b = m >= R.length - 1,
        x = b ? l.TooltipColors.RED : l.TooltipColors.GREEN,
        O = A ? x : l.TooltipColors.PRIMARY,
        P = () => {
            null == E || E(), (0, c.JG)(n), o.default.track(d.rMx.TEXT_COPIED), !p && C(m + 1), M(!0), f(!0), S.start(u, () => M(!1)), h.start(T, () => C(0));
        };
    return (0, s.jsx)(l.Tooltip, {
        text: (() => {
            var e;
            if (!A) return t;
            let n = (0, r.clamp)(m - 1, 0, R.length - 1),
                a = null !== (e = R[n]) && void 0 !== e ? e : R[0];
            return (0, s.jsx)(l.Shaker, {
                isShaking: b,
                children: a()
            });
        })(),
        delay: N,
        'aria-label': g,
        color: O,
        forceOpen: p,
        onAnimationRest: (e, t) => {
            !p && A && t.phase === d.UkZ.LEAVE && f(!1);
        },
        children: (e) => {
            let { onClick: t, onMouseEnter: n, ...s } = e;
            return _({
                ...s,
                onClick: () => {
                    null == t || t(), P();
                },
                onMouseEnter: () => {
                    if (!A) {
                        null == n || n();
                        return;
                    }
                    S.stop(), M(!1);
                }
            });
        }
    });
}
