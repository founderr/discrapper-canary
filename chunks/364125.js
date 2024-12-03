n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    l = n(399606),
    a = n(673125),
    r = n(984063),
    s = n(88315),
    o = n(179295),
    c = n(370663),
    u = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: m, focused: f, canvas: p } = e,
        g = i.useRef(!1),
        h = (0, l.e7)([a.Z], () => a.Z.getDrawMode()),
        v = (0, o.Z)((0, c.Z)(t.id, n, d), m),
        S = (0, o.Z)((0, u.Z)(t.id, n, d), m),
        I = i.useCallback(
            (e, t, n) => {
                if (null == p) return;
                let { x: i, y: l } = (0, s.hn)(p, n);
                switch (t.type) {
                    case r.W.LINE:
                        return v[e](t, i, l);
                    case r.W.EMOJI_HOSE:
                        return S[e](t, i, l);
                }
            },
            [p, v, S]
        ),
        _ = i.useCallback(
            (e) => {
                if (!!f && null != h) e.stopPropagation(), (g.current = !0), I('handleMouseDown', h, e);
            },
            [I, h, f]
        ),
        x = i.useCallback(
            (e) => {
                if (!!f && null != h) e.stopPropagation(), g.current && I('handleMouseMove', h, e);
            },
            [I, h, f]
        ),
        E = i.useCallback(
            (e) => {
                if (!!f && null != h) e.stopPropagation(), (g.current = !1), I('handleMouseUp', h, e);
            },
            [I, h, f]
        ),
        Z = i.useCallback(
            (e) => {
                if (!!g.current && null != h) I('handleMouseEnter', h, e);
            },
            [I, h]
        );
    return (
        i.useEffect(() => {
            let e = (e) => {
                if (null != h) (g.current = !1), I('handleMouseUp', h, e);
            };
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, [I, h]),
        {
            handleClick: i.useCallback(
                (e) => {
                    f && null != h && e.stopPropagation();
                },
                [h, f]
            ),
            handleMouseDown: _,
            handleMouseEnter: Z,
            handleMouseMove: x,
            handleMouseUp: E
        }
    );
}
