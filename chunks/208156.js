n.d(t, {
    J: function () {
        return I;
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
    f = n(210887),
    _ = n(585483),
    h = n(53289),
    p = n(953101),
    m = n(701488),
    g = n(981631),
    E = n(336259);
function v(e) {
    let { url: t, className: n, style: a, onLoad: s, shouldRefocus: E, queryParams: v, allowPopups: I = !1, referrerPolicy: S = 'origin' } = e,
        T = (0, u.e7)([c.Z], () => c.Z.getWindow(g.KJ3.CHANNEL_CALL_POPOUT)),
        b = (0, o.useMemoOne)(() => (0, l.Z)(), [t]),
        y = i.useRef(null),
        A = (0, h.Z)(y, E, null == T ? window : T),
        N = {
            ...v,
            frame_id: b,
            platform: m.S4.DESKTOP
        },
        [C, R] = i.useState(!1),
        O = f.Z.theme,
        D = { ...a };
    return (
        O === g.BRd.LIGHT ? (D.colorScheme = 'light') : (D.colorScheme = 'dark'),
        i.useEffect(
            () => (
                _.S.dispatch(g.CkL.IFRAME_MOUNT, { id: b }),
                () => {
                    _.S.dispatch(g.CkL.IFRAME_UNMOUNT, { id: b });
                }
            ),
            [b]
        ),
        i.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                R(t);
            };
            return (
                _.S.subscribe(g.CkL.MANUAL_IFRAME_RESIZING, e),
                () => {
                    _.S.unsubscribe(g.CkL.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        C && (D.pointerEvents = 'none'),
        null != t
            ? (0, r.jsx)('iframe', {
                  style: D,
                  allow: 'autoplay; encrypted-media',
                  referrerPolicy: S,
                  onLoad: function (e) {
                      var n;
                      null == s || s(e.target), (y.current = e.target), A(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([d.Z.HELLO, N], null != t ? t : '');
                  },
                  sandbox: (0, p.Z)({ allowPopups: I }),
                  className: n,
                  src: ''.concat(t, '?').concat(new URLSearchParams(N))
              })
            : null
    );
}
function I(e) {
    let { onLoad: t } = e,
        [n, a] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                a(!0), null == t || t(e);
            },
            [t]
        );
    return (0, r.jsxs)('div', {
        className: E.fillParent,
        children: [
            !n && (0, r.jsx)('div', { className: s()(E.fillParent, E.iframePlaceholder) }),
            (0, r.jsx)('div', {
                className: s()(E.fillParent, n ? void 0 : E.hiddenIframeContainer),
                children: (0, r.jsx)(v, {
                    ...e,
                    onLoad: o
                })
            })
        ]
    });
}
