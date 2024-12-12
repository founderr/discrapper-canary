r.d(n, {
    kZ: function () {
        return h;
    }
});
var i = r(4313),
    a = r(493623),
    s = r(620720),
    o = r(343713),
    l = r(540321),
    u = r(609027),
    c = r(375317),
    d = r(882159),
    f = {
        placement: 'bottom',
        modifiers: [],
        strategy: 'absolute'
    };
function _() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return !n.some(function (e) {
        return !(e && 'function' == typeof e.getBoundingClientRect);
    });
}
function h(e) {
    void 0 === e && (e = {});
    var n = e,
        r = n.defaultModifiers,
        h = void 0 === r ? [] : r,
        p = n.defaultOptions,
        m = void 0 === p ? f : p;
    return function (e, n, r) {
        void 0 === r && (r = m);
        var p = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({}, f, m),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: n
                },
                attributes: {},
                styles: {}
            },
            g = [],
            E = !1,
            v = {
                state: p,
                setOptions: function (r) {
                    var i = 'function' == typeof r ? r(p.options) : r;
                    T(),
                        (p.options = Object.assign({}, m, p.options, i)),
                        (p.scrollParents = {
                            reference: (0, d.kK)(e) ? (0, s.Z)(e) : e.contextElement ? (0, s.Z)(e.contextElement) : [],
                            popper: (0, s.Z)(n)
                        });
                    var a = (0, l.Z)((0, c.Z)([].concat(h, p.options.modifiers)));
                    return (
                        (p.orderedModifiers = a.filter(function (e) {
                            return e.enabled;
                        })),
                        I(),
                        v.update()
                    );
                },
                forceUpdate: function () {
                    if (E) return;
                    var e = p.elements,
                        n = e.reference,
                        r = e.popper;
                    if (!!_(n, r)) {
                        (p.rects = {
                            reference: (0, i.Z)(n, (0, o.Z)(r), 'fixed' === p.options.strategy),
                            popper: (0, a.Z)(r)
                        }),
                            (p.reset = !1),
                            (p.placement = p.options.placement),
                            p.orderedModifiers.forEach(function (e) {
                                return (p.modifiersData[e.name] = Object.assign({}, e.data));
                            });
                        for (var s = 0; s < p.orderedModifiers.length; s++) {
                            if (!0 === p.reset) {
                                (p.reset = !1), (s = -1);
                                continue;
                            }
                            var l = p.orderedModifiers[s],
                                u = l.fn,
                                c = l.options,
                                d = void 0 === c ? {} : c,
                                f = l.name;
                            'function' == typeof u &&
                                (p =
                                    u({
                                        state: p,
                                        options: d,
                                        name: f,
                                        instance: v
                                    }) || p);
                        }
                    }
                },
                update: (0, u.Z)(function () {
                    return new Promise(function (e) {
                        v.forceUpdate(), e(p);
                    });
                }),
                destroy: function () {
                    T(), (E = !0);
                }
            };
        if (!_(e, n)) return v;
        function I() {
            p.orderedModifiers.forEach(function (e) {
                var n = e.name,
                    r = e.options,
                    i = void 0 === r ? {} : r,
                    a = e.effect;
                if ('function' == typeof a) {
                    var s = a({
                            state: p,
                            name: n,
                            instance: v,
                            options: i
                        }),
                        o = function () {};
                    g.push(s || o);
                }
            });
        }
        function T() {
            g.forEach(function (e) {
                return e();
            }),
                (g = []);
        }
        return (
            v.setOptions(r).then(function (e) {
                !E && r.onFirstUpdate && r.onFirstUpdate(e);
            }),
            v
        );
    };
}
