n.d(t, {
    J: function () {
        return O;
    }
});
var r = n(47120);
var i = n(610138);
var a = n(216116);
var o = n(78328);
var s = n(815648);
var l = n(735250),
    u = n(470079),
    c = n(120356),
    d = n.n(c),
    _ = n(482033),
    E = n(772848),
    f = n(442837),
    h = n(928518),
    p = n(631467),
    m = n(210887),
    I = n(585483),
    T = n(53289),
    g = n(953101),
    S = n(701488),
    A = n(981631),
    v = n(336259);
function N(e) {
    let { url: t, className: n, style: r, onLoad: i, shouldRefocus: a, queryParams: o, allowPopups: s = !1, referrerPolicy: c = 'origin' } = e,
        d = (0, f.e7)([h.Z], () => h.Z.getWindow(A.KJ3.CHANNEL_CALL_POPOUT)),
        v = (0, _.useMemoOne)(() => (0, E.Z)(), [t]),
        N = u.useRef(null),
        O = (0, T.Z)(N, a, null == d ? window : d),
        R = {
            ...o,
            frame_id: v,
            platform: S.S4.DESKTOP
        },
        [C, y] = u.useState(!1),
        L = m.Z.theme,
        b = { ...r };
    function D(e) {
        var n;
        null == i || i(e.target), (N.current = e.target), O(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([p.Z.HELLO, R], null != t ? t : '');
    }
    return (
        L === A.BRd.LIGHT ? (b.colorScheme = 'light') : (b.colorScheme = 'dark'),
        u.useEffect(
            () => (
                I.S.dispatch(A.CkL.IFRAME_MOUNT, { id: v }),
                () => {
                    I.S.dispatch(A.CkL.IFRAME_UNMOUNT, { id: v });
                }
            ),
            [v]
        ),
        u.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                y(t);
            };
            return (
                I.S.subscribe(A.CkL.MANUAL_IFRAME_RESIZING, e),
                () => {
                    I.S.unsubscribe(A.CkL.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        C && (b.pointerEvents = 'none'),
        null != t
            ? (0, l.jsx)('iframe', {
                  style: b,
                  allow: 'autoplay; encrypted-media',
                  referrerPolicy: c,
                  onLoad: D,
                  sandbox: (0, g.Z)({ allowPopups: s }),
                  className: n,
                  src: ''.concat(t, '?').concat(new URLSearchParams(R))
              })
            : null
    );
}
function O(e) {
    let { onLoad: t } = e,
        [n, r] = u.useState(!1),
        i = u.useCallback(
            (e) => {
                r(!0), null == t || t(e);
            },
            [t]
        );
    return (0, l.jsxs)('div', {
        className: v.fillParent,
        children: [
            !n && (0, l.jsx)('div', { className: d()(v.fillParent, v.iframePlaceholder) }),
            (0, l.jsx)('div', {
                className: d()(v.fillParent, n ? void 0 : v.hiddenIframeContainer),
                children: (0, l.jsx)(N, {
                    ...e,
                    onLoad: i
                })
            })
        ]
    });
}
