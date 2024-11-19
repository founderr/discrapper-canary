n.d(t, {
    J: function () {
        return v;
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
    u = n(631467),
    c = n(210887),
    d = n(585483),
    f = n(531826),
    _ = n(53289),
    p = n(953101),
    h = n(701488),
    m = n(981631),
    g = n(835296);
function E(e) {
    let { url: t, className: n, style: a, onLoad: s, shouldRefocus: g, queryParams: E, allowPopups: v = !1, referrerPolicy: b = 'origin' } = e,
        I = (0, f.sU)({}),
        T = (0, o.useMemoOne)(() => (0, l.Z)(), [t]),
        S = i.useRef(null),
        y = (0, _.Z)(S, g, null == I ? window : I),
        A = {
            ...E,
            frame_id: T,
            platform: h.S4.DESKTOP
        },
        [N, C] = i.useState(!1),
        R = c.Z.theme,
        O = { ...a };
    return (
        R === m.BRd.LIGHT ? (O.colorScheme = 'light') : (O.colorScheme = 'dark'),
        i.useEffect(
            () => (
                d.S.dispatch(m.CkL.IFRAME_MOUNT, { id: T }),
                () => {
                    d.S.dispatch(m.CkL.IFRAME_UNMOUNT, { id: T });
                }
            ),
            [T]
        ),
        i.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                C(t);
            };
            return (
                d.S.subscribe(m.CkL.MANUAL_IFRAME_RESIZING, e),
                () => {
                    d.S.unsubscribe(m.CkL.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        N && (O.pointerEvents = 'none'),
        null != t
            ? (0, r.jsx)('iframe', {
                  style: O,
                  allow: 'autoplay; encrypted-media',
                  referrerPolicy: b,
                  onLoad: function (e) {
                      var n;
                      null == s || s(e.target), (S.current = e.target), y(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([u.Z.HELLO, A], null != t ? t : '');
                  },
                  sandbox: (0, p.Z)({ allowPopups: v }),
                  className: n,
                  src: ''.concat(t, '?').concat(new URLSearchParams(A))
              })
            : null
    );
}
function v(e) {
    let { onLoad: t } = e,
        [n, a] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                a(!0), null == t || t(e);
            },
            [t]
        );
    return (0, r.jsxs)('div', {
        className: g.fillParent,
        children: [
            !n && (0, r.jsx)('div', { className: s()(g.fillParent, g.iframePlaceholder) }),
            (0, r.jsx)('div', {
                className: s()(g.fillParent, n ? void 0 : g.hiddenIframeContainer),
                children: (0, r.jsx)(E, {
                    ...e,
                    onLoad: o
                })
            })
        ]
    });
}
