var r = n(117417);
e.exports = function (e) {
    var t = (e = e || {}).reporter,
        n = e.batchProcessor,
        i = e.stateHandler.getState;
    if (!t) throw Error('Missing required dependency: reporter.');
    function a(t) {
        var n = e.important ? ' !important; ' : '; ';
        return (t.join(n) + n).trim();
    }
    function o(e) {
        return i(e).object;
    }
    return {
        makeDetectable: function e(e, o, s) {
            function l(o, s) {
                var l = a(['display: block', 'position: absolute', 'top: 0', 'left: 0', 'width: 100%', 'height: 100%', 'border: none', 'padding: 0', 'margin: 0', 'opacity: 0', 'z-index: -1000', 'pointer-events: none']),
                    u = !1,
                    c = window.getComputedStyle(o),
                    d = o.offsetWidth,
                    _ = o.offsetHeight;
                function E() {
                    function n() {
                        if ('static' === c.position) {
                            o.style.setProperty('position', 'relative', e.important ? 'important' : '');
                            var n = function (t, n, r, i) {
                                function a(e) {
                                    return e.replace(/[^-\d\.]/g, '');
                                }
                                var o = r[i];
                                'auto' !== o && '0' !== a(o) && (t.warn('An element that is positioned static has style.' + i + '=' + o + ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' + i + ' will be set to 0. Element: ', n), n.style.setProperty(i, '0', e.important ? 'important' : ''));
                            };
                            n(t, o, c, 'top'), n(t, o, c, 'right'), n(t, o, c, 'bottom'), n(t, o, c, 'left');
                        }
                    }
                    function a() {
                        function e(t, n) {
                            if (!t.contentDocument) {
                                var r = i(t);
                                r.checkForObjectDocumentTimeoutId && window.clearTimeout(r.checkForObjectDocumentTimeoutId),
                                    (r.checkForObjectDocumentTimeoutId = setTimeout(function () {
                                        (r.checkForObjectDocumentTimeoutId = 0), e(t, n);
                                    }, 100));
                                return;
                            }
                            n(t.contentDocument);
                        }
                        !u && n();
                        var t = this;
                        e(t, function (e) {
                            s(o);
                        });
                    }
                    '' !== c.position && (n(c), (u = !0));
                    var d = document.createElement('object');
                    if (((d.style.cssText = l), (d.tabIndex = -1), (d.type = 'text/html'), d.setAttribute('aria-hidden', 'true'), (d.onload = a), !r.isIE() && (d.data = 'about:blank'), !!i(o))) o.appendChild(d), (i(o).object = d), r.isIE() && (d.data = 'about:blank');
                }
                (i(o).startSize = {
                    width: d,
                    height: _
                }),
                    n ? n.add(E) : E();
            }
            !s && ((s = o), (o = e), (e = null)), (e = e || {}).debug, r.isIE(8) ? s(o) : l(o, s);
        },
        addListener: function e(e, t) {
            function n() {
                t(e);
            }
            if (r.isIE(8)) (i(e).object = { proxy: n }), e.attachEvent('onresize', n);
            else {
                var a = o(e);
                if (!a) throw Error('Element is not detectable by this strategy.');
                a.contentDocument.defaultView.addEventListener('resize', n);
            }
        },
        uninstall: function e(e) {
            if (!i(e)) return;
            var t = o(e);
            if (!!t) r.isIE(8) ? e.detachEvent('onresize', t.proxy) : e.removeChild(t), i(e).checkForObjectDocumentTimeoutId && window.clearTimeout(i(e).checkForObjectDocumentTimeoutId), delete i(e).object;
        }
    };
};
