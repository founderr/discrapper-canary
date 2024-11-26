var r = n(201694).forEach,
    i = n(864483),
    a = n(10968),
    s = n(525185),
    o = n(498031),
    l = n(763160),
    u = n(117417),
    c = n(775548),
    d = n(656082),
    f = n(302366),
    _ = n(78687);
function p(e) {
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
function m(e) {
    return e && 1 === e.nodeType;
}
function g(e, t, n) {
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
    var E = e.reporter;
    !E && (E = l(!1 === E));
    var v = g(e, 'batchProcessor', c({ reporter: E })),
        I = {};
    (I.callOnAdd = !!g(e, 'callOnAdd', !0)), (I.debug = !!g(e, 'debug', !1));
    var T = a(t),
        b = i({ stateHandler: d }),
        S = g(e, 'strategy', 'object'),
        y = g(e, 'important', !1),
        A = {
            reporter: E,
            batchProcessor: v,
            stateHandler: d,
            idHandler: t,
            important: y
        };
    if (('scroll' === S && (u.isLegacyOpera() ? (E.warn('Scroll strategy is not supported on legacy Opera. Changing to object strategy.'), (S = 'object')) : u.isIE(9) && (E.warn('Scroll strategy is not supported on IE9. Changing to object strategy.'), (S = 'object'))), 'scroll' === S)) n = _(A);
    else if ('object' === S) n = f(A);
    else throw Error('Invalid strategy name: ' + S);
    var N = {};
    return {
        listenTo: function (e, i, a) {
            function s(e) {
                r(T.get(e), function (t) {
                    t(e);
                });
            }
            function o(e, t, n) {
                T.add(t, n), e && n(t);
            }
            if ((!a && ((a = i), (i = e), (e = {})), !i)) throw Error('At least one element required.');
            if (!a) throw Error('Listener required.');
            if (m(i)) i = [i];
            else {
                if (!p(i)) return E.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
                i = h(i);
            }
            var l = 0,
                u = g(e, 'callOnAdd', I.callOnAdd),
                c = g(e, 'onReady', function () {}),
                f = g(e, 'debug', I.debug);
            r(i, function (e) {
                !d.getState(e) && (d.initState(e), t.set(e));
                var _ = t.get(e);
                if ((f && E.log('Attaching listener to element', _, e), !b.isDetectable(e))) {
                    if ((f && E.log(_, 'Not detectable.'), b.isBusy(e))) {
                        f && E.log(_, 'System busy making it detectable'),
                            o(u, e, a),
                            (N[_] = N[_] || []),
                            N[_].push(function () {
                                ++l === i.length && c();
                            });
                        return;
                    }
                    return (
                        f && E.log(_, 'Making detectable...'),
                        b.markBusy(e, !0),
                        n.makeDetectable(
                            {
                                debug: f,
                                important: y
                            },
                            e,
                            function (e) {
                                if ((f && E.log(_, 'onElementDetectable'), d.getState(e))) {
                                    b.markAsDetectable(e), b.markBusy(e, !1), n.addListener(e, s), o(u, e, a);
                                    var t = d.getState(e);
                                    if (t && t.startSize) {
                                        var p = e.offsetWidth,
                                            h = e.offsetHeight;
                                        (t.startSize.width !== p || t.startSize.height !== h) && s(e);
                                    }
                                    N[_] &&
                                        r(N[_], function (e) {
                                            e();
                                        });
                                } else f && E.log(_, 'Element uninstalled before being detectable.');
                                delete N[_], ++l === i.length && c();
                            }
                        )
                    );
                }
                f && E.log(_, 'Already detecable, adding listener.'), o(u, e, a), l++;
            }),
                l === i.length && c();
        },
        removeListener: T.removeListener,
        removeAllListeners: T.removeAllListeners,
        uninstall: function (e) {
            if (!e) return E.error('At least one element is required.');
            if (m(e)) e = [e];
            else {
                if (!p(e)) return E.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
                e = h(e);
            }
            r(e, function (e) {
                T.removeAllListeners(e), n.uninstall(e), d.cleanState(e);
            });
        },
        initDocument: function (e) {
            n.initDocument && n.initDocument(e);
        }
    };
};
