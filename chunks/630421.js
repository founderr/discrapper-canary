var r = n(740078),
    i = n(343713),
    a = n(49691),
    s = n(285363),
    o = n(874900),
    l = n(126387),
    u = n(632471),
    c = n(894417),
    d = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto'
    };
function f(e) {
    var t,
        n,
        l,
        u,
        f,
        _,
        h,
        p = e.popper,
        m = e.popperRect,
        g = e.placement,
        E = e.variation,
        v = e.offsets,
        I = e.position,
        S = e.gpuAcceleration,
        b = e.adaptive,
        T = e.roundOffsets,
        y = e.isFixed,
        A = v.x,
        N = void 0 === A ? 0 : A,
        C = v.y,
        R = void 0 === C ? 0 : C,
        O =
            'function' == typeof T
                ? T({
                      x: N,
                      y: R
                  })
                : {
                      x: N,
                      y: R
                  };
    (N = O.x), (R = O.y);
    var D = v.hasOwnProperty('x'),
        L = v.hasOwnProperty('y'),
        x = r.t$,
        w = r.we,
        M = window;
    if (b) {
        var P = (0, i.Z)(p),
            k = 'clientHeight',
            U = 'clientWidth';
        P === (0, a.Z)(p) && ((P = (0, s.Z)(p)), 'static' !== (0, o.Z)(P).position && 'absolute' === I && ((k = 'scrollHeight'), (U = 'scrollWidth')));
        (g === r.we || ((g === r.t$ || g === r.F2) && E === r.ut)) && ((w = r.I), (R -= (y && P === M && M.visualViewport ? M.visualViewport.height : P[k]) - m.height), (R *= S ? 1 : -1)), (g === r.t$ || ((g === r.we || g === r.I) && E === r.ut)) && ((x = r.F2), (N -= (y && P === M && M.visualViewport ? M.visualViewport.width : P[U]) - m.width), (N *= S ? 1 : -1));
    }
    var G = Object.assign({ position: I }, b && d);
    var B =
        !0 === T
            ? ((t = {
                  x: N,
                  y: R
              }),
              (n = (0, a.Z)(p)),
              (l = t.x),
              (u = t.y),
              (f = n.devicePixelRatio || 1),
              {
                  x: (0, c.NM)(l * f) / f || 0,
                  y: (0, c.NM)(u * f) / f || 0
              })
            : {
                  x: N,
                  y: R
              };
    return ((N = B.x), (R = B.y), S) ? Object.assign({}, G, (((h = {})[w] = L ? '0' : ''), (h[x] = D ? '0' : ''), (h.transform = 1 >= (M.devicePixelRatio || 1) ? 'translate(' + N + 'px, ' + R + 'px)' : 'translate3d(' + N + 'px, ' + R + 'px, 0)'), h)) : Object.assign({}, G, (((_ = {})[w] = L ? R + 'px' : ''), (_[x] = D ? N + 'px' : ''), (_.transform = ''), _));
}
t.Z = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: function (e) {
        var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            i = n.adaptive,
            a = n.roundOffsets,
            s = void 0 === a || a,
            o = {
                placement: (0, l.Z)(t.placement),
                variation: (0, u.Z)(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: void 0 === r || r,
                isFixed: 'fixed' === t.options.strategy
            };
        null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                f(
                    Object.assign({}, o, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: void 0 === i || i,
                        roundOffsets: s
                    })
                )
            )),
            null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    f(
                        Object.assign({}, o, {
                            offsets: t.modifiersData.arrow,
                            position: 'absolute',
                            adaptive: !1,
                            roundOffsets: s
                        })
                    )
                )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-placement': t.placement }));
    },
    data: {}
};
