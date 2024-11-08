var r = n(201694).forEach;
e.exports = function (e) {
    var t = (e = e || {}).reporter,
        n = e.batchProcessor,
        i = e.stateHandler.getState;
    e.stateHandler.hasState;
    var a = e.idHandler;
    if (!n) throw Error('Missing required dependency: batchProcessor');
    if (!t) throw Error('Missing required dependency: reporter.');
    var s = (function () {
            var e = document.createElement('div');
            e.style.cssText = u(['position: absolute', 'width: 1000px', 'height: 1000px', 'visibility: hidden', 'margin: 0', 'padding: 0']);
            var t = document.createElement('div');
            (t.style.cssText = u(['position: absolute', 'width: 500px', 'height: 500px', 'overflow: scroll', 'visibility: none', 'top: -1500px', 'left: -1500px', 'visibility: hidden', 'margin: 0', 'padding: 0'])), t.appendChild(e), document.body.insertBefore(t, document.body.firstChild);
            var n = 500 - t.clientWidth,
                r = 500 - t.clientHeight;
            return (
                document.body.removeChild(t),
                {
                    width: n,
                    height: r
                }
            );
        })(),
        o = 'erd_scroll_detection_container';
    function l(e) {
        (function (e, t, n) {
            if (!e.getElementById(t)) {
                var r,
                    i,
                    a,
                    s = n + '_animation',
                    o = '/* Created by the element-resize-detector library. */\n';
                (o += '.' + n + ' > div::-webkit-scrollbar { ' + u(['display: none']) + ' }\n\n' + ('.' + n + '_animation_active { ' + u(['-webkit-animation-duration: 0.1s', 'animation-duration: 0.1s', '-webkit-animation-name: ' + s, 'animation-name: ' + s]) + ' }\n') + ('@-webkit-keyframes ' + s + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n') + ('@keyframes ' + s + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }')),
                    (r = o),
                    (i =
                        i ||
                        function (t) {
                            e.head.appendChild(t);
                        }),
                    ((a = e.createElement('style')).innerHTML = r),
                    (a.id = t),
                    i(a);
            }
        })(e, 'erd_scroll_detection_scrollbar_style', o);
    }
    function u(t) {
        var n = e.important ? ' !important; ' : '; ';
        return (t.join(n) + n).trim();
    }
    l(window.document);
    function c(e, n, r) {
        if (e.addEventListener) e.addEventListener(n, r);
        else {
            if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
            e.attachEvent('on' + n, r);
        }
    }
    function d(e, n, r) {
        if (e.removeEventListener) e.removeEventListener(n, r);
        else {
            if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
            e.detachEvent('on' + n, r);
        }
    }
    function f(e) {
        return i(e).container.childNodes[0].childNodes[0].childNodes[0];
    }
    function _(e) {
        return i(e).container.childNodes[0].childNodes[0].childNodes[1];
    }
    return {
        makeDetectable: function (e, l, d) {
            var h, p, m;
            function g() {
                if (e.debug) {
                    var n = Array.prototype.slice.call(arguments);
                    if ((n.unshift(a.get(l), 'Scroll: '), t.log.apply)) t.log.apply(null, n);
                    else for (var r = 0; r < n.length; r++) t.log(n[r]);
                }
            }
            !d && ((d = l), (l = e), (e = null)), (e = e || {});
            function E(e) {
                var t = i(e).container.childNodes[0],
                    n = window.getComputedStyle(t);
                return !n.width || -1 === n.width.indexOf('px');
            }
            function v() {
                var e = window.getComputedStyle(l),
                    t = {};
                return (t.position = e.position), (t.width = l.offsetWidth), (t.height = l.offsetHeight), (t.top = e.top), (t.right = e.right), (t.bottom = e.bottom), (t.left = e.left), (t.widthCSS = e.width), (t.heightCSS = e.height), t;
            }
            function I() {
                if ((g('storeStyle invoked.'), !i(l))) {
                    g('Aborting because element has been uninstalled');
                    return;
                }
                var e = v();
                i(l).style = e;
            }
            function S(e, t, n) {
                (i(e).lastWidth = t), (i(e).lastHeight = n);
            }
            function b() {
                return 2 * s.width + 1;
            }
            function T() {
                return 2 * s.height + 1;
            }
            function y(e) {
                return e + 10 + b();
            }
            function A(e) {
                return e + 10 + T();
            }
            function N(e, t, n) {
                var r = f(e),
                    i = _(e),
                    a = t + 10 + b(),
                    s = n + 10 + T(),
                    o = 2 * t + b(),
                    l = 2 * n + T();
                (r.scrollLeft = a), (r.scrollTop = s), (i.scrollLeft = o), (i.scrollTop = l);
            }
            function C() {
                var e = i(l).container;
                if (!e) {
                    ((e = document.createElement('div')).className = o), (e.style.cssText = u(['visibility: hidden', 'display: inline', 'width: 0px', 'height: 0px', 'z-index: -1', 'overflow: hidden', 'margin: 0', 'padding: 0'])), (i(l).container = e), (t = e), (t.className += ' ' + o + '_animation_active'), l.appendChild(e);
                    var t,
                        n = function () {
                            i(l).onRendered && i(l).onRendered();
                        };
                    c(e, 'animationstart', n), (i(l).onAnimationStart = n);
                }
                return e;
            }
            function R() {
                if ((g('Injecting elements'), !i(l))) {
                    g('Aborting because element has been uninstalled');
                    return;
                }
                !(function () {
                    var n = i(l).style;
                    if ('static' === n.position) {
                        l.style.setProperty('position', 'relative', e.important ? 'important' : '');
                        var r = function (e, t, n, r) {
                            var i = n[r];
                            if ('auto' !== i && '0' !== i.replace(/[^-\d\.]/g, '')) e.warn('An element that is positioned static has style.' + r + '=' + i + ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' + r + ' will be set to 0. Element: ', t), (t.style[r] = 0);
                        };
                        r(t, l, n, 'top'), r(t, l, n, 'right'), r(t, l, n, 'bottom'), r(t, l, n, 'left');
                    }
                })();
                var n,
                    r,
                    a,
                    d,
                    f = i(l).container;
                !f && (f = C());
                var _ = s.width,
                    h = s.height,
                    p = u(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%', 'left: 0px', 'top: 0px']);
                var m = u(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden'].concat(((n = -(1 + _)), (r = -(1 + h)), (a = -h), ['left: ' + (n = n ? n + 'px' : '0'), 'top: ' + (r = r ? r + 'px' : '0'), 'right: ' + (d = (d = -_) ? d + 'px' : '0'), 'bottom: ' + (a = a ? a + 'px' : '0')]))),
                    E = u(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
                    v = u(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
                    I = u(['position: absolute', 'left: 0', 'top: 0']),
                    S = u(['position: absolute', 'width: 200%', 'height: 200%']),
                    b = document.createElement('div'),
                    T = document.createElement('div'),
                    y = document.createElement('div'),
                    A = document.createElement('div'),
                    N = document.createElement('div'),
                    R = document.createElement('div');
                function O() {
                    var e = i(l);
                    e && e.onExpand ? e.onExpand() : g('Aborting expand scroll handler: element has been uninstalled');
                }
                function D() {
                    var e = i(l);
                    e && e.onShrink ? e.onShrink() : g('Aborting shrink scroll handler: element has been uninstalled');
                }
                (b.dir = 'ltr'), (b.style.cssText = p), (b.className = o), (T.className = o), (T.style.cssText = m), (y.style.cssText = E), (A.style.cssText = I), (N.style.cssText = v), (R.style.cssText = S), y.appendChild(A), N.appendChild(R), T.appendChild(y), T.appendChild(N), b.appendChild(T), f.appendChild(b), c(y, 'scroll', O), c(N, 'scroll', D), (i(l).onExpandScroll = O), (i(l).onShrinkScroll = D);
            }
            function O() {
                function s(t, n, r) {
                    var i = f(t).childNodes[0],
                        a = n + 10 + b(),
                        s = r + 10 + T();
                    i.style.setProperty('width', a + 'px', e.important ? 'important' : ''), i.style.setProperty('height', s + 'px', e.important ? 'important' : '');
                }
                function o(r) {
                    var o = l.offsetWidth,
                        c = l.offsetHeight,
                        d = o !== i(l).lastWidth || c !== i(l).lastHeight;
                    g('Storing current size', o, c),
                        S(l, o, c),
                        n.add(0, function () {
                            if (!!d) {
                                if (!i(l)) {
                                    g('Aborting because element has been uninstalled');
                                    return;
                                }
                                if (!u()) {
                                    g('Aborting because element container has not been initialized');
                                    return;
                                }
                                if (e.debug) {
                                    var n = l.offsetWidth,
                                        r = l.offsetHeight;
                                    (n !== o || r !== c) && t.warn(a.get(l), 'Scroll: Size changed before updating detector elements.');
                                }
                                s(l, o, c);
                            }
                        }),
                        n.add(1, function () {
                            if (!i(l)) {
                                g('Aborting because element has been uninstalled');
                                return;
                            }
                            if (!u()) {
                                g('Aborting because element container has not been initialized');
                                return;
                            }
                            N(l, o, c);
                        }),
                        d &&
                            r &&
                            n.add(2, function () {
                                if (!i(l)) {
                                    g('Aborting because element has been uninstalled');
                                    return;
                                }
                                if (!u()) {
                                    g('Aborting because element container has not been initialized');
                                    return;
                                }
                                r();
                            });
                }
                function u() {
                    return !!i(l).container;
                }
                function c() {
                    g('notifyListenersIfNeeded invoked');
                    var e = i(l);
                    return void 0 === i(l).lastNotifiedWidth && e.lastWidth === e.startSize.width && e.lastHeight === e.startSize.height
                        ? g('Not notifying: Size is the same as the start size, and there has been no notification yet.')
                        : e.lastWidth === e.lastNotifiedWidth && e.lastHeight === e.lastNotifiedHeight
                          ? g('Not notifying: Size already notified')
                          : void (g('Current size not notified, notifying...'),
                            (e.lastNotifiedWidth = e.lastWidth),
                            (e.lastNotifiedHeight = e.lastHeight),
                            r(i(l).listeners, function (e) {
                                e(l);
                            }));
                }
                function d() {
                    if ((g('Scroll detected.'), E(l))) {
                        g('Scroll event fired while unrendered. Ignoring...');
                        return;
                    }
                    o(c);
                }
                if ((g('registerListenersAndPositionElements invoked.'), !i(l))) {
                    g('Aborting because element has been uninstalled');
                    return;
                }
                (i(l).onRendered = function () {
                    if ((g('startanimation triggered.'), E(l))) {
                        g('Ignoring since element is still unrendered...');
                        return;
                    }
                    g('Element rendered.');
                    var e = f(l),
                        t = _(l);
                    (0 === e.scrollLeft || 0 === e.scrollTop || 0 === t.scrollLeft || 0 === t.scrollTop) && (g('Scrollbars out of sync. Updating detector elements...'), o(c));
                }),
                    (i(l).onExpand = d),
                    (i(l).onShrink = d);
                var h = i(l).style;
                s(l, h.width, h.height);
            }
            function D() {
                if ((g('finalizeDomMutation invoked.'), !i(l))) {
                    g('Aborting because element has been uninstalled');
                    return;
                }
                var e = i(l).style;
                S(l, e.width, e.height), N(l, e.width, e.height);
            }
            function L() {
                d(l);
            }
            function x() {
                var e;
                g('Installing...'),
                    (i(l).listeners = []),
                    (e = v()),
                    (i(l).startSize = {
                        width: e.width,
                        height: e.height
                    }),
                    g('Element start size', i(l).startSize),
                    n.add(0, I),
                    n.add(1, R),
                    n.add(2, O),
                    n.add(3, D),
                    n.add(4, L);
            }
            if ((g('Making detectable...'), ((m = (p = h = l).getRootNode && p.getRootNode().contains(p)), (p === p.ownerDocument.body || p.ownerDocument.body.contains(p) || m) && null !== window.getComputedStyle(h)) ? 1 : 0)) x();
            else
                g('Element is detached'),
                    C(),
                    g('Waiting until element is attached...'),
                    (i(l).onRendered = function () {
                        g('Element is now attached'), x();
                    });
        },
        addListener: function (e, t) {
            if (!i(e).listeners.push) throw Error('Cannot add listener to an element that is not detectable.');
            i(e).listeners.push(t);
        },
        uninstall: function (e) {
            var t = i(e);
            if (!!t) t.onExpandScroll && d(f(e), 'scroll', t.onExpandScroll), t.onShrinkScroll && d(_(e), 'scroll', t.onShrinkScroll), t.onAnimationStart && d(t.container, 'animationstart', t.onAnimationStart), t.container && e.removeChild(t.container);
        },
        initDocument: l
    };
};
