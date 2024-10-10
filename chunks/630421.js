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
function _(e) {
    var t,
        n,
        l,
        u,
        _,
        E,
        f,
        h = e.popper,
        p = e.popperRect,
        I = e.placement,
        m = e.variation,
        T = e.offsets,
        S = e.position,
        g = e.gpuAcceleration,
        A = e.adaptive,
        N = e.roundOffsets,
        R = e.isFixed,
        O = T.x,
        v = void 0 === O ? 0 : O,
        C = T.y,
        L = void 0 === C ? 0 : C,
        y =
            'function' == typeof N
                ? N({
                      x: v,
                      y: L
                  })
                : {
                      x: v,
                      y: L
                  };
    (v = y.x), (L = y.y);
    var D = T.hasOwnProperty('x'),
        b = T.hasOwnProperty('y'),
        M = r.t$,
        P = r.we,
        U = window;
    if (A) {
        var w = (0, i.Z)(h),
            x = 'clientHeight',
            G = 'clientWidth';
        w === (0, a.Z)(h) && ((w = (0, s.Z)(h)), 'static' !== (0, o.Z)(w).position && 'absolute' === S && ((x = 'scrollHeight'), (G = 'scrollWidth')));
        (I === r.we || ((I === r.t$ || I === r.F2) && m === r.ut)) && ((P = r.I), (L -= (R && w === U && U.visualViewport ? U.visualViewport.height : w[x]) - p.height), (L *= g ? 1 : -1)), (I === r.t$ || ((I === r.we || I === r.I) && m === r.ut)) && ((M = r.F2), (v -= (R && w === U && U.visualViewport ? U.visualViewport.width : w[G]) - p.width), (v *= g ? 1 : -1));
    }
    var k = Object.assign({ position: S }, A && d);
    var B =
        !0 === N
            ? ((t = {
                  x: v,
                  y: L
              }),
              (n = (0, a.Z)(h)),
              (l = t.x),
              (u = t.y),
              (_ = n.devicePixelRatio || 1),
              {
                  x: (0, c.NM)(l * _) / _ || 0,
                  y: (0, c.NM)(u * _) / _ || 0
              })
            : {
                  x: v,
                  y: L
              };
    return ((v = B.x), (L = B.y), g) ? Object.assign({}, k, (((f = {})[P] = b ? '0' : ''), (f[M] = D ? '0' : ''), (f.transform = 1 >= (U.devicePixelRatio || 1) ? 'translate(' + v + 'px, ' + L + 'px)' : 'translate3d(' + v + 'px, ' + L + 'px, 0)'), f)) : Object.assign({}, k, (((E = {})[P] = b ? L + 'px' : ''), (E[M] = D ? v + 'px' : ''), (E.transform = ''), E));
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
                _(
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
                    _(
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
