n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    r = n(392711),
    i = n(846519),
    o = n(481060),
    l = n(626135),
    c = n(572004),
    d = n(70956),
    _ = n(981631),
    u = n(689938);
let E = d.Z.Millis.SECOND,
    T = 2 * E,
    I = d.Z.Millis.HALF_SECOND,
    R = [() => u.Z.Messages.COPY_SUCCESS_1, () => u.Z.Messages.COPY_SUCCESS_2, () => u.Z.Messages.COPY_SUCCESS_3, () => u.Z.Messages.COPY_SUCCESS_4, () => u.Z.Messages.COPY_SUCCESS_5, () => u.Z.Messages.COPY_SUCCESS_6, () => u.Z.Messages.COPY_SUCCESS_7, () => u.Z.Messages.COPY_SUCCESS_8, () => u.Z.Messages.COPY_SUCCESS_9, () => u.Z.Messages.COPY_SUCCESS_10, () => u.Z.Messages.COPY_SUCCESS_11];
function m(e) {
    let { text: t, copyValue: n, children: d, onCopy: u, 'aria-label': m, delay: g = I } = e,
        [N, C] = a.useState(0),
        [p, f] = a.useState(!1),
        [A, S] = a.useState(!1),
        [M] = a.useState(() => new i.V7()),
        [h] = a.useState(() => new i.V7());
    if (
        (a.useEffect(
            () => () => {
                M.stop(), h.stop();
            },
            [M, h]
        ),
        !c.wS)
    )
        return (0, s.jsx)(s.Fragment, { children: d({}) });
    let x = N >= R.length - 1,
        b = x ? o.TooltipColors.RED : o.TooltipColors.GREEN,
        O = p ? b : o.TooltipColors.PRIMARY,
        P = () => {
            null == u || u(), (0, c.JG)(n), l.default.track(_.rMx.TEXT_COPIED), !A && C(N + 1), S(!0), f(!0), M.start(E, () => S(!1)), h.start(T, () => C(0));
        };
    return (0, s.jsx)(o.Tooltip, {
        text: (() => {
            var e;
            if (!p) return t;
            let n = (0, r.clamp)(N - 1, 0, R.length - 1),
                a = null !== (e = R[n]) && void 0 !== e ? e : R[0];
            return (0, s.jsx)(o.Shaker, {
                isShaking: x,
                children: a()
            });
        })(),
        delay: g,
        'aria-label': m,
        color: O,
        forceOpen: A,
        onAnimationRest: (e, t) => {
            !A && p && t.phase === _.UkZ.LEAVE && f(!1);
        },
        children: (e) => {
            let { onClick: t, onMouseEnter: n, ...s } = e;
            return d({
                ...s,
                onClick: () => {
                    null == t || t(), P();
                },
                onMouseEnter: () => {
                    if (!p) {
                        null == n || n();
                        return;
                    }
                    M.stop(), S(!1);
                }
            });
        }
    });
}
