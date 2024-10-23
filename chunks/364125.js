n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    s = n(399606),
    a = n(673125),
    l = n(292793),
    r = n(88315),
    o = n(179295),
    c = n(370663),
    u = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: h, focused: m, canvas: p } = e,
        _ = i.useRef(!1),
        f = (0, s.e7)([a.Z], () => a.Z.getDrawMode()),
        E = (0, o.Z)((0, c.Z)(t.id, n, d), h),
        g = (0, o.Z)((0, u.Z)(t.id, n, d), h),
        C = i.useCallback(
            (e, t, n) => {
                if (null == p) return;
                let { x: i, y: s } = (0, r.hn)(p, n);
                switch (t.type) {
                    case l.W.LINE:
                        return E[e](t, i, s);
                    case l.W.EMOJI_HOSE:
                        return g[e](t, i, s);
                }
            },
            [p, E, g]
        ),
        I = i.useCallback(
            (e) => {
                if (!!m && null != f) e.stopPropagation(), (_.current = !0), C('handleMouseDown', f, e);
            },
            [C, f, m]
        ),
        T = i.useCallback(
            (e) => {
                if (!!m && null != f) e.stopPropagation(), _.current && C('handleMouseMove', f, e);
            },
            [C, f, m]
        ),
        x = i.useCallback(
            (e) => {
                if (!!m && null != f) e.stopPropagation(), (_.current = !1), C('handleMouseUp', f, e);
            },
            [C, f, m]
        ),
        S = i.useCallback(
            (e) => {
                if (!!_.current && null != f) C('handleMouseEnter', f, e);
            },
            [C, f]
        );
    return (
        i.useEffect(() => {
            let e = (e) => {
                if (null != f) (_.current = !1), C('handleMouseUp', f, e);
            };
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, [C, f]),
        {
            handleClick: i.useCallback(
                (e) => {
                    m && null != f && e.stopPropagation();
                },
                [f, m]
            ),
            handleMouseDown: I,
            handleMouseEnter: S,
            handleMouseMove: T,
            handleMouseUp: x
        }
    );
}
