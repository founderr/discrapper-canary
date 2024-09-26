var r = n(740078),
    i = n(343713),
    a = n(49691),
    o = n(285363),
    s = n(874900),
    l = n(126387),
    u = n(632471),
    c = n(894417),
    d = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto'
    };
function _(e, t) {
    var n = e.x,
        r = e.y,
        i = t.devicePixelRatio || 1;
    return {
        x: (0, c.NM)(n * i) / i || 0,
        y: (0, c.NM)(r * i) / i || 0
    };
}
function E(e) {
    var t,
        n,
        l = e.popper,
        u = e.popperRect,
        c = e.placement,
        E = e.variation,
        f = e.offsets,
        h = e.position,
        p = e.gpuAcceleration,
        m = e.adaptive,
        I = e.roundOffsets,
        T = e.isFixed,
        g = f.x,
        S = void 0 === g ? 0 : g,
        A = f.y,
        v = void 0 === A ? 0 : A,
        N =
            'function' == typeof I
                ? I({
                      x: S,
                      y: v
                  })
                : {
                      x: S,
                      y: v
                  };
    (S = N.x), (v = N.y);
    var O = f.hasOwnProperty('x'),
        R = f.hasOwnProperty('y'),
        C = r.t$,
        y = r.we,
        L = window;
    if (m) {
        var b = (0, i.Z)(l),
            D = 'clientHeight',
            M = 'clientWidth';
        b === (0, a.Z)(l) && ((b = (0, o.Z)(l)), 'static' !== (0, s.Z)(b).position && 'absolute' === h && ((D = 'scrollHeight'), (M = 'scrollWidth')));
        (c === r.we || ((c === r.t$ || c === r.F2) && E === r.ut)) && ((y = r.I), (v -= (T && b === L && L.visualViewport ? L.visualViewport.height : b[D]) - u.height), (v *= p ? 1 : -1)), (c === r.t$ || ((c === r.we || c === r.I) && E === r.ut)) && ((C = r.F2), (S -= (T && b === L && L.visualViewport ? L.visualViewport.width : b[M]) - u.width), (S *= p ? 1 : -1));
    }
    var P = Object.assign({ position: h }, m && d),
        U =
            !0 === I
                ? _(
                      {
                          x: S,
                          y: v
                      },
                      (0, a.Z)(l)
                  )
                : {
                      x: S,
                      y: v
                  };
    return ((S = U.x), (v = U.y), p) ? Object.assign({}, P, (((n = {})[y] = R ? '0' : ''), (n[C] = O ? '0' : ''), (n.transform = 1 >= (L.devicePixelRatio || 1) ? 'translate(' + S + 'px, ' + v + 'px)' : 'translate3d(' + S + 'px, ' + v + 'px, 0)'), n)) : Object.assign({}, P, (((t = {})[y] = R ? v + 'px' : ''), (t[C] = O ? S + 'px' : ''), (t.transform = ''), t));
}
function f(e) {
    var t = e.state,
        n = e.options,
        r = n.gpuAcceleration,
        i = void 0 === r || r,
        a = n.adaptive,
        o = void 0 === a || a,
        s = n.roundOffsets,
        c = void 0 === s || s,
        d = {
            placement: (0, l.Z)(t.placement),
            variation: (0, u.Z)(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: i,
            isFixed: 'fixed' === t.options.strategy
        };
    null != t.modifiersData.popperOffsets &&
        (t.styles.popper = Object.assign(
            {},
            t.styles.popper,
            E(
                Object.assign({}, d, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: o,
                    roundOffsets: c
                })
            )
        )),
        null != t.modifiersData.arrow &&
            (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                E(
                    Object.assign({}, d, {
                        offsets: t.modifiersData.arrow,
                        position: 'absolute',
                        adaptive: !1,
                        roundOffsets: c
                    })
                )
            )),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-placement': t.placement }));
}
t.Z = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: f,
    data: {}
};
