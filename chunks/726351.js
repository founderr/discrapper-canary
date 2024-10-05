var r = n(201694).forEach,
    i = n(864483),
    a = n(10968),
    s = n(525185),
    o = n(498031),
    l = n(763160),
    u = n(117417),
    c = n(775548),
    d = n(656082),
    _ = n(302366),
    E = n(78687);
function f(e) {
    return Array.isArray(e) || void 0 !== e.length;
}
function h(e) {
    if (Array.isArray(e)) return e;
    var t = [];
    return (
        r(e, function (e) {
            t.push(e);
        }),
        t
    );
}
function p(e) {
    return e && 1 === e.nodeType;
}
function I(e, t, n) {
    var r = e[t];
    return null == r && void 0 !== n ? n : r;
}
e.exports = function (e) {
    if ((e = e || {}).idHandler)
        t = {
            get: function (t) {
                return e.idHandler.get(t, !0);
            },
            set: e.idHandler.set
        };
    else {
        var t, n;
        t = o({
            idGenerator: s(),
            stateHandler: d
        });
    }
    var m = e.reporter;
    !m && (m = l(!1 === m));
    var T = I(e, 'batchProcessor', c({ reporter: m })),
        S = {};
    (S.callOnAdd = !!I(e, 'callOnAdd', !0)), (S.debug = !!I(e, 'debug', !1));
    var g = a(t),
        A = i({ stateHandler: d }),
        N = I(e, 'strategy', 'object'),
        O = I(e, 'important', !1),
        R = {
            reporter: m,
            batchProcessor: T,
            stateHandler: d,
            idHandler: t,
            important: O
        };
    if (('scroll' === N && (u.isLegacyOpera() ? (m.warn('Scroll strategy is not supported on legacy Opera. Changing to object strategy.'), (N = 'object')) : u.isIE(9) && (m.warn('Scroll strategy is not supported on IE9. Changing to object strategy.'), (N = 'object'))), 'scroll' === N)) n = E(R);
    else if ('object' === N) n = _(R);
    else throw Error('Invalid strategy name: ' + N);
    var v = {};
    return {
        listenTo: function (e, i, a) {
            function s(e) {
                r(g.get(e), function (t) {
                    t(e);
                });
            }
            function o(e, t, n) {
                g.add(t, n), e && n(t);
            }
            if ((!a && ((a = i), (i = e), (e = {})), !i)) throw Error('At least one element required.');
            if (!a) throw Error('Listener required.');
            if (p(i)) i = [i];
            else {
                if (!f(i)) return m.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
                i = h(i);
            }
            var l = 0,
                u = I(e, 'callOnAdd', S.callOnAdd),
                c = I(e, 'onReady', function () {}),
                _ = I(e, 'debug', S.debug);
            r(i, function (e) {
                !d.getState(e) && (d.initState(e), t.set(e));
                var E = t.get(e);
                if ((_ && m.log('Attaching listener to element', E, e), !A.isDetectable(e))) {
                    if ((_ && m.log(E, 'Not detectable.'), A.isBusy(e))) {
                        _ && m.log(E, 'System busy making it detectable'),
                            o(u, e, a),
                            (v[E] = v[E] || []),
                            v[E].push(function () {
                                ++l === i.length && c();
                            });
                        return;
                    }
                    return (
                        _ && m.log(E, 'Making detectable...'),
                        A.markBusy(e, !0),
                        n.makeDetectable(
                            {
                                debug: _,
                                important: O
                            },
                            e,
                            function (e) {
                                if ((_ && m.log(E, 'onElementDetectable'), d.getState(e))) {
                                    A.markAsDetectable(e), A.markBusy(e, !1), n.addListener(e, s), o(u, e, a);
                                    var t = d.getState(e);
                                    if (t && t.startSize) {
                                        var f = e.offsetWidth,
                                            h = e.offsetHeight;
                                        (t.startSize.width !== f || t.startSize.height !== h) && s(e);
                                    }
                                    v[E] &&
                                        r(v[E], function (e) {
                                            e();
                                        });
                                } else _ && m.log(E, 'Element uninstalled before being detectable.');
                                delete v[E], ++l === i.length && c();
                            }
                        )
                    );
                }
                _ && m.log(E, 'Already detecable, adding listener.'), o(u, e, a), l++;
            }),
                l === i.length && c();
        },
        removeListener: g.removeListener,
        removeAllListeners: g.removeAllListeners,
        uninstall: function (e) {
            if (!e) return m.error('At least one element is required.');
            if (p(e)) e = [e];
            else {
                if (!f(e)) return m.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
                e = h(e);
            }
            r(e, function (e) {
                g.removeAllListeners(e), n.uninstall(e), d.cleanState(e);
            });
        },
        initDocument: function (e) {
            n.initDocument && n.initDocument(e);
        }
    };
};
