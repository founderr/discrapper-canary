n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n(846519),
    l = n(481060),
    o = n(626135),
    c = n(572004),
    d = n(70956),
    u = n(981631),
    m = n(388032);
let g = d.Z.Millis.SECOND,
    f = 2 * g,
    p = d.Z.Millis.HALF_SECOND,
    _ = [() => m.intl.string(m.t.MSaeTU), () => m.intl.string(m.t.UmrCw8), () => m.intl.string(m.t.gKE0Ji), () => m.intl.string(m.t['4DSKbm']), () => m.intl.string(m.t['+8ENdX']), () => m.intl.string(m.t.GlWHv7), () => m.intl.string(m.t.hIzxU1), () => m.intl.string(m.t['26uMPD']), () => m.intl.string(m.t.uFs7R0), () => m.intl.string(m.t.bLXdcX), () => m.intl.string(m.t.gPg9fX)];
function h(e) {
    let { text: t, copyValue: n, children: d, onCopy: m, 'aria-label': h, delay: E = p } = e,
        [b, x] = r.useState(0),
        [C, T] = r.useState(!1),
        [v, N] = r.useState(!1),
        [I] = r.useState(() => new s.V7()),
        [S] = r.useState(() => new s.V7());
    if (
        (r.useEffect(
            () => () => {
                I.stop(), S.stop();
            },
            [I, S]
        ),
        !c.wS)
    )
        return (0, i.jsx)(i.Fragment, { children: d({}) });
    let R = b >= _.length - 1,
        A = R ? l.TooltipColors.RED : l.TooltipColors.GREEN,
        j = C ? A : l.TooltipColors.PRIMARY,
        P = () => {
            null == m || m(), (0, c.JG)(n), o.default.track(u.rMx.TEXT_COPIED), !v && x(b + 1), N(!0), T(!0), I.start(g, () => N(!1)), S.start(f, () => x(0));
        };
    return (0, i.jsx)(l.Tooltip, {
        text: (() => {
            var e;
            if (!C) return t;
            let n = (0, a.clamp)(b - 1, 0, _.length - 1),
                r = null !== (e = _[n]) && void 0 !== e ? e : _[0];
            return (0, i.jsx)(l.Shaker, {
                isShaking: R,
                children: r()
            });
        })(),
        delay: E,
        'aria-label': h,
        color: j,
        forceOpen: v,
        onAnimationRest: (e, t) => {
            !v && C && t.phase === u.UkZ.LEAVE && T(!1);
        },
        children: (e) => {
            let { onClick: t, onMouseEnter: n, ...i } = e;
            return d({
                ...i,
                onClick: () => {
                    null == t || t(), P();
                },
                onMouseEnter: () => {
                    if (!C) {
                        null == n || n();
                        return;
                    }
                    I.stop(), N(!1);
                }
            });
        }
    });
}
