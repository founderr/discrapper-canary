var i = r(201694).forEach,
    a = r(864483),
    s = r(10968),
    o = r(525185),
    l = r(498031),
    u = r(763160),
    c = r(117417),
    d = r(775548),
    f = r(656082),
    _ = r(302366),
    h = r(78687);
function p(e) {
    return Array.isArray(e) || void 0 !== e.length;
}
function m(e) {
    if (Array.isArray(e)) return e;
    var n = [];
    return (
        i(e, function (e) {
            n.push(e);
        }),
        n
    );
}
function g(e) {
    return e && 1 === e.nodeType;
}
function E(e, n, r) {
    var i = e[n];
    return null == i && void 0 !== r ? r : i;
}
e.exports = function (e) {
    if ((e = e || {}).idHandler)
        n = {
            get: function (n) {
                return e.idHandler.get(n, !0);
            },
            set: e.idHandler.set
        };
    else {
        var n, r;
        n = l({
            idGenerator: o(),
            stateHandler: f
        });
    }
    var v = e.reporter;
    !v && (v = u(!1 === v));
    var I = E(e, 'batchProcessor', d({ reporter: v })),
        T = {};
    (T.callOnAdd = !!E(e, 'callOnAdd', !0)), (T.debug = !!E(e, 'debug', !1));
    var b = s(n),
        y = a({ stateHandler: f }),
        S = E(e, 'strategy', 'object'),
        A = E(e, 'important', !1),
        N = {
            reporter: v,
            batchProcessor: I,
            stateHandler: f,
            idHandler: n,
            important: A
        };
    if (('scroll' === S && (c.isLegacyOpera() ? (v.warn('Scroll strategy is not supported on legacy Opera. Changing to object strategy.'), (S = 'object')) : c.isIE(9) && (v.warn('Scroll strategy is not supported on IE9. Changing to object strategy.'), (S = 'object'))), 'scroll' === S)) r = h(N);
    else if ('object' === S) r = _(N);
    else throw Error('Invalid strategy name: ' + S);
    var C = {};
    function R(e) {
        if (!e) return v.error('At least one element is required.');
        if (g(e)) e = [e];
        else {
            if (!p(e)) return v.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
            e = m(e);
        }
        i(e, function (e) {
            b.removeAllListeners(e), r.uninstall(e), f.cleanState(e);
        });
    }
    function O(e) {
        r.initDocument && r.initDocument(e);
    }
    return {
        listenTo: function e(e, a, s) {
            function o(e) {
                i(b.get(e), function (n) {
                    n(e);
                });
            }
            function l(e, n, r) {
                b.add(n, r), e && r(n);
            }
            if ((!s && ((s = a), (a = e), (e = {})), !a)) throw Error('At least one element required.');
            if (!s) throw Error('Listener required.');
            if (g(a)) a = [a];
            else {
                if (!p(a)) return v.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
                a = m(a);
            }
            var u = 0,
                c = E(e, 'callOnAdd', T.callOnAdd),
                d = E(e, 'onReady', function () {}),
                _ = E(e, 'debug', T.debug);
            i(a, function (e) {
                !f.getState(e) && (f.initState(e), n.set(e));
                var h = n.get(e);
                if ((_ && v.log('Attaching listener to element', h, e), !y.isDetectable(e))) {
                    if ((_ && v.log(h, 'Not detectable.'), y.isBusy(e))) {
                        _ && v.log(h, 'System busy making it detectable'),
                            l(c, e, s),
                            (C[h] = C[h] || []),
                            C[h].push(function () {
                                ++u === a.length && d();
                            });
                        return;
                    }
                    return (
                        _ && v.log(h, 'Making detectable...'),
                        y.markBusy(e, !0),
                        r.makeDetectable(
                            {
                                debug: _,
                                important: A
                            },
                            e,
                            function (e) {
                                if ((_ && v.log(h, 'onElementDetectable'), f.getState(e))) {
                                    y.markAsDetectable(e), y.markBusy(e, !1), r.addListener(e, o), l(c, e, s);
                                    var n = f.getState(e);
                                    if (n && n.startSize) {
                                        var p = e.offsetWidth,
                                            m = e.offsetHeight;
                                        (n.startSize.width !== p || n.startSize.height !== m) && o(e);
                                    }
                                    C[h] &&
                                        i(C[h], function (e) {
                                            e();
                                        });
                                } else _ && v.log(h, 'Element uninstalled before being detectable.');
                                delete C[h], ++u === a.length && d();
                            }
                        )
                    );
                }
                _ && v.log(h, 'Already detecable, adding listener.'), l(c, e, s), u++;
            }),
                u === a.length && d();
        },
        removeListener: b.removeListener,
        removeAllListeners: b.removeAllListeners,
        uninstall: R,
        initDocument: O
    };
};
