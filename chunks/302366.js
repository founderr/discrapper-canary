var i = r(117417);
e.exports = function (e) {
    var n = (e = e || {}).reporter,
        r = e.batchProcessor,
        a = e.stateHandler.getState;
    if (!n) throw Error('Missing required dependency: reporter.');
    function s(n) {
        var r = e.important ? ' !important; ' : '; ';
        return (n.join(r) + r).trim();
    }
    function o(e) {
        return a(e).object;
    }
    return {
        makeDetectable: function e(e, o, l) {
            function u(o, l) {
                var u = s(['display: block', 'position: absolute', 'top: 0', 'left: 0', 'width: 100%', 'height: 100%', 'border: none', 'padding: 0', 'margin: 0', 'opacity: 0', 'z-index: -1000', 'pointer-events: none']),
                    c = !1,
                    d = window.getComputedStyle(o),
                    f = o.offsetWidth,
                    _ = o.offsetHeight;
                function h() {
                    function r() {
                        if ('static' === d.position) {
                            o.style.setProperty('position', 'relative', e.important ? 'important' : '');
                            var r = function (n, r, i, a) {
                                function s(e) {
                                    return e.replace(/[^-\d\.]/g, '');
                                }
                                var o = i[a];
                                'auto' !== o && '0' !== s(o) && (n.warn('An element that is positioned static has style.' + a + '=' + o + ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' + a + ' will be set to 0. Element: ', r), r.style.setProperty(a, '0', e.important ? 'important' : ''));
                            };
                            r(n, o, d, 'top'), r(n, o, d, 'right'), r(n, o, d, 'bottom'), r(n, o, d, 'left');
                        }
                    }
                    function s() {
                        function e(n, r) {
                            if (!n.contentDocument) {
                                var i = a(n);
                                i.checkForObjectDocumentTimeoutId && window.clearTimeout(i.checkForObjectDocumentTimeoutId),
                                    (i.checkForObjectDocumentTimeoutId = setTimeout(function () {
                                        (i.checkForObjectDocumentTimeoutId = 0), e(n, r);
                                    }, 100));
                                return;
                            }
                            r(n.contentDocument);
                        }
                        !c && r();
                        var n = this;
                        e(n, function (e) {
                            l(o);
                        });
                    }
                    '' !== d.position && (r(d), (c = !0));
                    var f = document.createElement('object');
                    if (((f.style.cssText = u), (f.tabIndex = -1), (f.type = 'text/html'), f.setAttribute('aria-hidden', 'true'), (f.onload = s), !i.isIE() && (f.data = 'about:blank'), !!a(o))) o.appendChild(f), (a(o).object = f), i.isIE() && (f.data = 'about:blank');
                }
                (a(o).startSize = {
                    width: f,
                    height: _
                }),
                    r ? r.add(h) : h();
            }
            !l && ((l = o), (o = e), (e = null)), (e = e || {}).debug, i.isIE(8) ? l(o) : u(o, l);
        },
        addListener: function e(e, n) {
            function r() {
                n(e);
            }
            if (i.isIE(8)) (a(e).object = { proxy: r }), e.attachEvent('onresize', r);
            else {
                var s = o(e);
                if (!s) throw Error('Element is not detectable by this strategy.');
                s.contentDocument.defaultView.addEventListener('resize', r);
            }
        },
        uninstall: function e(e) {
            if (!a(e)) return;
            var n = o(e);
            if (!!n) i.isIE(8) ? e.detachEvent('onresize', n.proxy) : e.removeChild(n), a(e).checkForObjectDocumentTimeoutId && window.clearTimeout(a(e).checkForObjectDocumentTimeoutId), delete a(e).object;
        }
    };
};
