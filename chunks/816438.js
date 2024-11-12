n.d(t, {
    kZ: function () {
        return _;
    }
});
var r = n(4313),
    i = n(493623),
    a = n(620720),
    s = n(343713),
    o = n(540321),
    l = n(609027),
    u = n(375317),
    c = n(882159),
    d = {
        placement: 'bottom',
        modifiers: [],
        strategy: 'absolute'
    };
function f() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (e) {
        return !(e && 'function' == typeof e.getBoundingClientRect);
    });
}
function _(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.defaultModifiers,
        _ = void 0 === n ? [] : n,
        p = t.defaultOptions,
        h = void 0 === p ? d : p;
    return function (e, t, n) {
        void 0 === n && (n = h);
        var p = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({}, d, h),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t
                },
                attributes: {},
                styles: {}
            },
            m = [],
            g = !1,
            E = {
                state: p,
                setOptions: function (n) {
                    var r = 'function' == typeof n ? n(p.options) : n;
                    v(),
                        (p.options = Object.assign({}, h, p.options, r)),
                        (p.scrollParents = {
                            reference: (0, c.kK)(e) ? (0, a.Z)(e) : e.contextElement ? (0, a.Z)(e.contextElement) : [],
                            popper: (0, a.Z)(t)
                        });
                    var i = (0, o.Z)((0, u.Z)([].concat(_, p.options.modifiers)));
                    return (
                        (p.orderedModifiers = i.filter(function (e) {
                            return e.enabled;
                        })),
                        (function () {
                            p.orderedModifiers.forEach(function (e) {
                                var t = e.name,
                                    n = e.options,
                                    r = e.effect;
                                if ('function' == typeof r) {
                                    var i = r({
                                        state: p,
                                        name: t,
                                        instance: E,
                                        options: void 0 === n ? {} : n
                                    });
                                    m.push(i || function () {});
                                }
                            });
                        })(),
                        E.update()
                    );
                },
                forceUpdate: function () {
                    if (g) return;
                    var e = p.elements,
                        t = e.reference,
                        n = e.popper;
                    if (!!f(t, n)) {
                        (p.rects = {
                            reference: (0, r.Z)(t, (0, s.Z)(n), 'fixed' === p.options.strategy),
                            popper: (0, i.Z)(n)
                        }),
                            (p.reset = !1),
                            (p.placement = p.options.placement),
                            p.orderedModifiers.forEach(function (e) {
                                return (p.modifiersData[e.name] = Object.assign({}, e.data));
                            });
                        for (var a = 0; a < p.orderedModifiers.length; a++) {
                            if (!0 === p.reset) {
                                (p.reset = !1), (a = -1);
                                continue;
                            }
                            var o = p.orderedModifiers[a],
                                l = o.fn,
                                u = o.options,
                                c = void 0 === u ? {} : u,
                                d = o.name;
                            'function' == typeof l &&
                                (p =
                                    l({
                                        state: p,
                                        options: c,
                                        name: d,
                                        instance: E
                                    }) || p);
                        }
                    }
                },
                update: (0, l.Z)(function () {
                    return new Promise(function (e) {
                        E.forceUpdate(), e(p);
                    });
                }),
                destroy: function () {
                    v(), (g = !0);
                }
            };
        if (!f(e, t)) return E;
        E.setOptions(n).then(function (e) {
            !g && n.onFirstUpdate && n.onFirstUpdate(e);
        });
        function v() {
            m.forEach(function (e) {
                return e();
            }),
                (m = []);
        }
        return E;
    };
}
