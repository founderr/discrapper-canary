var r = n(201694).forEach;
e.exports = function (e) {
    var t = (e = e || {}).reporter,
        n = e.batchProcessor,
        i = e.stateHandler.getState;
    e.stateHandler.hasState;
    var a = e.idHandler;
    if (!n) throw Error('Missing required dependency: batchProcessor');
    if (!t) throw Error('Missing required dependency: reporter.');
    var o = d(),
        s = 'erd_scroll_detection_scrollbar_style',
        l = 'erd_scroll_detection_container';
    function u(e) {
        _(e, s, l);
    }
    function c(t) {
        var n = e.important ? ' !important; ' : '; ';
        return (t.join(n) + n).trim();
    }
    function d() {
        var e = 500,
            t = 500,
            n = document.createElement('div');
        n.style.cssText = c(['position: absolute', 'width: ' + 2 * e + 'px', 'height: ' + 2 * t + 'px', 'visibility: hidden', 'margin: 0', 'padding: 0']);
        var r = document.createElement('div');
        (r.style.cssText = c(['position: absolute', 'width: ' + e + 'px', 'height: ' + t + 'px', 'overflow: scroll', 'visibility: none', 'top: ' + -(3 * e) + 'px', 'left: ' + -(3 * t) + 'px', 'visibility: hidden', 'margin: 0', 'padding: 0'])), r.appendChild(n), document.body.insertBefore(r, document.body.firstChild);
        var i = e - r.clientWidth,
            a = t - r.clientHeight;
        return (
            document.body.removeChild(r),
            {
                width: i,
                height: a
            }
        );
    }
    function _(e, t, n) {
        function r(n, r) {
            r =
                r ||
                function (t) {
                    e.head.appendChild(t);
                };
            var i = e.createElement('style');
            return (i.innerHTML = n), (i.id = t), r(i), i;
        }
        if (!e.getElementById(t)) {
            var i = n + '_animation',
                a = n + '_animation_active',
                o = '/* Created by the element-resize-detector library. */\n';
            r((o += '.' + n + ' > div::-webkit-scrollbar { ' + c(['display: none']) + ' }\n\n' + ('.' + a + ' { ' + c(['-webkit-animation-duration: 0.1s', 'animation-duration: 0.1s', '-webkit-animation-name: ' + i, 'animation-name: ' + i]) + ' }\n') + ('@-webkit-keyframes ' + i + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n') + ('@keyframes ' + i + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }')));
        }
    }
    function E(e) {
        e.className += ' ' + l + '_animation_active';
    }
    function f(e, n, r) {
        if (e.addEventListener) e.addEventListener(n, r);
        else {
            if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
            e.attachEvent('on' + n, r);
        }
    }
    function h(e, n, r) {
        if (e.removeEventListener) e.removeEventListener(n, r);
        else {
            if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
            e.detachEvent('on' + n, r);
        }
    }
    function p(e) {
        return i(e).container.childNodes[0].childNodes[0].childNodes[0];
    }
    function m(e) {
        return i(e).container.childNodes[0].childNodes[0].childNodes[1];
    }
    return (
        u(window.document),
        {
            makeDetectable: function e(e, s, u) {
                function d() {
                    if (e.debug) {
                        var n = Array.prototype.slice.call(arguments);
                        if ((n.unshift(a.get(s), 'Scroll: '), t.log.apply)) t.log.apply(null, n);
                        else for (var r = 0; r < n.length; r++) t.log(n[r]);
                    }
                }
                function _(e) {
                    return (
                        !(function e(e) {
                            var t = e.getRootNode && e.getRootNode().contains(e);
                            return e === e.ownerDocument.body || e.ownerDocument.body.contains(e) || t;
                        })(e) ||
                        null === window.getComputedStyle(e) ||
                        !1
                    );
                }
                function h(e) {
                    var t = i(e).container.childNodes[0],
                        n = window.getComputedStyle(t);
                    return !n.width || -1 === n.width.indexOf('px');
                }
                function I() {
                    var e = window.getComputedStyle(s),
                        t = {};
                    return (t.position = e.position), (t.width = s.offsetWidth), (t.height = s.offsetHeight), (t.top = e.top), (t.right = e.right), (t.bottom = e.bottom), (t.left = e.left), (t.widthCSS = e.width), (t.heightCSS = e.height), t;
                }
                function T() {
                    var e = I();
                    (i(s).startSize = {
                        width: e.width,
                        height: e.height
                    }),
                        d('Element start size', i(s).startSize);
                }
                function g() {
                    i(s).listeners = [];
                }
                function S() {
                    if ((d('storeStyle invoked.'), !i(s))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    var e = I();
                    i(s).style = e;
                }
                function A(e, t, n) {
                    (i(e).lastWidth = t), (i(e).lastHeight = n);
                }
                function v(e) {
                    return p(e).childNodes[0];
                }
                function N() {
                    return 2 * o.width + 1;
                }
                function O() {
                    return 2 * o.height + 1;
                }
                function R(e) {
                    return e + 10 + N();
                }
                function C(e) {
                    return e + 10 + O();
                }
                function y(e) {
                    return 2 * e + N();
                }
                function b(e) {
                    return 2 * e + O();
                }
                function L(e, t, n) {
                    var r = p(e),
                        i = m(e),
                        a = R(t),
                        o = C(n),
                        s = y(t),
                        l = b(n);
                    (r.scrollLeft = a), (r.scrollTop = o), (i.scrollLeft = s), (i.scrollTop = l);
                }
                function D() {
                    var e = i(s).container;
                    if (!e) {
                        ((e = document.createElement('div')).className = l), (e.style.cssText = c(['visibility: hidden', 'display: inline', 'width: 0px', 'height: 0px', 'z-index: -1', 'overflow: hidden', 'margin: 0', 'padding: 0'])), (i(s).container = e), E(e), s.appendChild(e);
                        var t = function () {
                            i(s).onRendered && i(s).onRendered();
                        };
                        f(e, 'animationstart', t), (i(s).onAnimationStart = t);
                    }
                    return e;
                }
                function M() {
                    function n() {
                        var n = i(s).style;
                        if ('static' === n.position) {
                            s.style.setProperty('position', 'relative', e.important ? 'important' : '');
                            var r = function (e, t, n, r) {
                                function i(e) {
                                    return e.replace(/[^-\d\.]/g, '');
                                }
                                var a = n[r];
                                'auto' !== a && '0' !== i(a) && (e.warn('An element that is positioned static has style.' + r + '=' + a + ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' + r + ' will be set to 0. Element: ', t), (t.style[r] = 0));
                            };
                            r(t, s, n, 'top'), r(t, s, n, 'right'), r(t, s, n, 'bottom'), r(t, s, n, 'left');
                        }
                    }
                    function r(e, t, n, r) {
                        return ['left: ' + (e = e ? e + 'px' : '0'), 'top: ' + (t = t ? t + 'px' : '0'), 'right: ' + (r = r ? r + 'px' : '0'), 'bottom: ' + (n = n ? n + 'px' : '0')];
                    }
                    if ((d('Injecting elements'), !i(s))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    n();
                    var a = i(s).container;
                    !a && (a = D());
                    var u = o.width,
                        _ = o.height,
                        E = c(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%', 'left: 0px', 'top: 0px']),
                        h = c(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden'].concat(r(-(1 + u), -(1 + _), -_, -u))),
                        p = c(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
                        m = c(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
                        I = c(['position: absolute', 'left: 0', 'top: 0']),
                        T = c(['position: absolute', 'width: 200%', 'height: 200%']),
                        g = document.createElement('div'),
                        S = document.createElement('div'),
                        A = document.createElement('div'),
                        v = document.createElement('div'),
                        N = document.createElement('div'),
                        O = document.createElement('div');
                    function R() {
                        var e = i(s);
                        e && e.onExpand ? e.onExpand() : d('Aborting expand scroll handler: element has been uninstalled');
                    }
                    function C() {
                        var e = i(s);
                        e && e.onShrink ? e.onShrink() : d('Aborting shrink scroll handler: element has been uninstalled');
                    }
                    (g.dir = 'ltr'), (g.style.cssText = E), (g.className = l), (S.className = l), (S.style.cssText = h), (A.style.cssText = p), (v.style.cssText = I), (N.style.cssText = m), (O.style.cssText = T), A.appendChild(v), N.appendChild(O), S.appendChild(A), S.appendChild(N), g.appendChild(S), a.appendChild(g), f(A, 'scroll', R), f(N, 'scroll', C), (i(s).onExpandScroll = R), (i(s).onShrinkScroll = C);
                }
                function P() {
                    function o(t, n, r) {
                        var i = v(t),
                            a = R(n),
                            o = C(r);
                        i.style.setProperty('width', a + 'px', e.important ? 'important' : ''), i.style.setProperty('height', o + 'px', e.important ? 'important' : '');
                    }
                    function l(r) {
                        var l = s.offsetWidth,
                            c = s.offsetHeight,
                            _ = l !== i(s).lastWidth || c !== i(s).lastHeight;
                        d('Storing current size', l, c),
                            A(s, l, c),
                            n.add(0, function () {
                                if (!!_) {
                                    if (!i(s)) {
                                        d('Aborting because element has been uninstalled');
                                        return;
                                    }
                                    if (!u()) {
                                        d('Aborting because element container has not been initialized');
                                        return;
                                    }
                                    if (e.debug) {
                                        var n = s.offsetWidth,
                                            r = s.offsetHeight;
                                        (n !== l || r !== c) && t.warn(a.get(s), 'Scroll: Size changed before updating detector elements.');
                                    }
                                    o(s, l, c);
                                }
                            }),
                            n.add(1, function () {
                                if (!i(s)) {
                                    d('Aborting because element has been uninstalled');
                                    return;
                                }
                                if (!u()) {
                                    d('Aborting because element container has not been initialized');
                                    return;
                                }
                                L(s, l, c);
                            }),
                            _ &&
                                r &&
                                n.add(2, function () {
                                    if (!i(s)) {
                                        d('Aborting because element has been uninstalled');
                                        return;
                                    }
                                    if (!u()) {
                                        d('Aborting because element container has not been initialized');
                                        return;
                                    }
                                    r();
                                });
                    }
                    function u() {
                        return !!i(s).container;
                    }
                    function c() {
                        function e() {
                            return void 0 === i(s).lastNotifiedWidth;
                        }
                        d('notifyListenersIfNeeded invoked');
                        var t = i(s);
                        return e() && t.lastWidth === t.startSize.width && t.lastHeight === t.startSize.height
                            ? d('Not notifying: Size is the same as the start size, and there has been no notification yet.')
                            : t.lastWidth === t.lastNotifiedWidth && t.lastHeight === t.lastNotifiedHeight
                              ? d('Not notifying: Size already notified')
                              : void (d('Current size not notified, notifying...'),
                                (t.lastNotifiedWidth = t.lastWidth),
                                (t.lastNotifiedHeight = t.lastHeight),
                                r(i(s).listeners, function (e) {
                                    e(s);
                                }));
                    }
                    function _() {
                        if ((d('startanimation triggered.'), h(s))) {
                            d('Ignoring since element is still unrendered...');
                            return;
                        }
                        d('Element rendered.');
                        var e = p(s),
                            t = m(s);
                        (0 === e.scrollLeft || 0 === e.scrollTop || 0 === t.scrollLeft || 0 === t.scrollTop) && (d('Scrollbars out of sync. Updating detector elements...'), l(c));
                    }
                    function E() {
                        if ((d('Scroll detected.'), h(s))) {
                            d('Scroll event fired while unrendered. Ignoring...');
                            return;
                        }
                        l(c);
                    }
                    if ((d('registerListenersAndPositionElements invoked.'), !i(s))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    (i(s).onRendered = _), (i(s).onExpand = E), (i(s).onShrink = E);
                    var f = i(s).style;
                    o(s, f.width, f.height);
                }
                function U() {
                    if ((d('finalizeDomMutation invoked.'), !i(s))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    var e = i(s).style;
                    A(s, e.width, e.height), L(s, e.width, e.height);
                }
                function w() {
                    u(s);
                }
                function x() {
                    d('Installing...'), g(), T(), n.add(0, S), n.add(1, M), n.add(2, P), n.add(3, U), n.add(4, w);
                }
                !u && ((u = s), (s = e), (e = null)),
                    (e = e || {}),
                    d('Making detectable...'),
                    _(s)
                        ? (d('Element is detached'),
                          D(),
                          d('Waiting until element is attached...'),
                          (i(s).onRendered = function () {
                              d('Element is now attached'), x();
                          }))
                        : x();
            },
            addListener: function e(e, t) {
                if (!i(e).listeners.push) throw Error('Cannot add listener to an element that is not detectable.');
                i(e).listeners.push(t);
            },
            uninstall: function e(e) {
                var t = i(e);
                if (!!t) t.onExpandScroll && h(p(e), 'scroll', t.onExpandScroll), t.onShrinkScroll && h(m(e), 'scroll', t.onShrinkScroll), t.onAnimationStart && h(t.container, 'animationstart', t.onAnimationStart), t.container && e.removeChild(t.container);
            },
            initDocument: u
        }
    );
};
