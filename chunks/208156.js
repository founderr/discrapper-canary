n.d(t, {
    J: function () {
        return S;
    }
}),
    n(47120),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(812028),
    l = n(772848),
    u = n(442837),
    c = n(928518),
    d = n(631467),
    _ = n(210887),
    E = n(585483),
    f = n(53289),
    h = n(953101),
    p = n(701488),
    I = n(981631),
    m = n(336259);
function T(e) {
    let { url: t, className: n, style: a, onLoad: s, shouldRefocus: m, queryParams: T, allowPopups: S = !1, referrerPolicy: g = 'origin' } = e,
        A = (0, u.e7)([c.Z], () => c.Z.getWindow(I.KJ3.CHANNEL_CALL_POPOUT)),
        N = (0, o.useMemoOne)(() => (0, l.Z)(), [t]),
        R = i.useRef(null),
        O = (0, f.Z)(R, m, null == A ? window : A),
        v = {
            ...T,
            frame_id: N,
            platform: p.S4.DESKTOP
        },
        [C, L] = i.useState(!1),
        D = _.Z.theme,
        y = { ...a };
    return (
        D === I.BRd.LIGHT ? (y.colorScheme = 'light') : (y.colorScheme = 'dark'),
        i.useEffect(
            () => (
                E.S.dispatch(I.CkL.IFRAME_MOUNT, { id: N }),
                () => {
                    E.S.dispatch(I.CkL.IFRAME_UNMOUNT, { id: N });
                }
            ),
            [N]
        ),
        i.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                L(t);
            };
            return (
                E.S.subscribe(I.CkL.MANUAL_IFRAME_RESIZING, e),
                () => {
                    E.S.unsubscribe(I.CkL.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        C && (y.pointerEvents = 'none'),
        null != t
            ? (0, r.jsx)('iframe', {
                  style: y,
                  allow: 'autoplay; encrypted-media',
                  referrerPolicy: g,
                  onLoad: function (e) {
                      var n;
                      null == s || s(e.target), (R.current = e.target), O(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([d.Z.HELLO, v], null != t ? t : '');
                  },
                  sandbox: (0, h.Z)({ allowPopups: S }),
                  className: n,
                  src: ''.concat(t, '?').concat(new URLSearchParams(v))
              })
            : null
    );
}
function S(e) {
    let { onLoad: t } = e,
        [n, a] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                a(!0), null == t || t(e);
            },
            [t]
        );
    return (0, r.jsxs)('div', {
        className: m.fillParent,
        children: [
            !n && (0, r.jsx)('div', { className: s()(m.fillParent, m.iframePlaceholder) }),
            (0, r.jsx)('div', {
                className: s()(m.fillParent, n ? void 0 : m.hiddenIframeContainer),
                children: (0, r.jsx)(T, {
                    ...e,
                    onLoad: o
                })
            })
        ]
    });
}
