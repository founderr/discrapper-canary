n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    l = n(399606),
    r = n(673125),
    s = n(292793),
    a = n(88315),
    o = n(179295),
    c = n(370663),
    u = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: h, focused: m, canvas: p } = e,
        f = i.useRef(!1),
        g = (0, l.e7)([r.Z], () => r.Z.getDrawMode()),
        C = (0, o.Z)((0, c.Z)(t.id, n, d), h),
        x = (0, o.Z)((0, u.Z)(t.id, n, d), h),
        v = i.useCallback(
            (e, t, n) => {
                if (null == p) return;
                let { x: i, y: l } = (0, a.hn)(p, n);
                switch (t.type) {
                    case s.W.LINE:
                        return C[e](t, i, l);
                    case s.W.EMOJI_HOSE:
                        return x[e](t, i, l);
                }
            },
            [p, C, x]
        ),
        _ = i.useCallback(
            (e) => {
                if (!!m && null != g) e.stopPropagation(), (f.current = !0), v('handleMouseDown', g, e);
            },
            [v, g, m]
        ),
        I = i.useCallback(
            (e) => {
                if (!!m && null != g) e.stopPropagation(), f.current && v('handleMouseMove', g, e);
            },
            [v, g, m]
        ),
        E = i.useCallback(
            (e) => {
                if (!!m && null != g) e.stopPropagation(), (f.current = !1), v('handleMouseUp', g, e);
            },
            [v, g, m]
        ),
        b = i.useCallback(
            (e) => {
                if (!!f.current && null != g) v('handleMouseEnter', g, e);
            },
            [v, g]
        );
    return (
        i.useEffect(() => {
            let e = (e) => {
                if (null != g) (f.current = !1), v('handleMouseUp', g, e);
            };
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, [v, g]),
        {
            handleClick: i.useCallback(
                (e) => {
                    m && null != g && e.stopPropagation();
                },
                [g, m]
            ),
            handleMouseDown: _,
            handleMouseEnter: b,
            handleMouseMove: I,
            handleMouseUp: E
        }
    );
}
