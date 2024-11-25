!(function () {
    var t = function (e) {
        e = e || {};
        var t,
            r,
            n,
            o,
            a,
            i,
            s,
            u,
            c,
            f,
            d,
            l,
            p,
            h,
            m,
            y,
            g = {
                bgColor: '#d00',
                textColor: '#fff',
                fontFamily: 'sans-serif',
                fontStyle: 'bold',
                type: 'circle',
                position: 'down',
                animation: 'slide',
                elementId: !1,
                dataUrl: !1,
                win: window
            };
        ((p = {}).ff = 'undefined' != typeof InstallTrigger), (p.chrome = !!window.chrome), (p.opera = !!window.opera || navigator.userAgent.indexOf('Opera') >= 0), (p.ie = !1), (p.safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0), (p.supported = p.chrome || p.ff || p.opera);
        var v = [];
        (d = function () {}), (u = l = !1);
        var b = {};
        (b.ready = function () {
            (u = !0), b.reset(), d();
        }),
            (b.reset = function () {
                if (!!u) (v = []), (c = !1), (f = !1), i.clearRect(0, 0, o, n), i.drawImage(s, 0, 0, o, n), P.setIcon(a), window.clearTimeout(h), window.clearTimeout(m);
            }),
            (b.start = function () {
                if (!!u && !f) {
                    var e = function () {
                        (c = v[0]), (f = !1), v.length > 0 && (v.shift(), b.start());
                    };
                    if (v.length > 0) {
                        f = !0;
                        var r = function () {
                            ['type', 'animation', 'bgColor', 'textColor', 'fontFamily', 'fontStyle'].forEach(function (e) {
                                e in v[0].options && (t[e] = v[0].options[e]);
                            }),
                                E.run(
                                    v[0].options,
                                    function () {
                                        e();
                                    },
                                    !1
                                );
                        };
                        c
                            ? E.run(
                                  c.options,
                                  function () {
                                      r();
                                  },
                                  !0
                              )
                            : r();
                    }
                }
            });
        var w = {},
            x = function (e) {
                return (e.n = 'number' == typeof e.n ? Math.abs(0 | e.n) : e.n), (e.x = o * e.x), (e.y = n * e.y), (e.w = o * e.w), (e.h = n * e.h), (e.len = ('' + e.n).length), e;
            };
        (w.circle = function (e) {
            e = x(e);
            var r = !1;
            2 === e.len ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w), (r = !0)) : e.len >= 3 && ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w), (r = !0)), i.clearRect(0, 0, o, n), i.drawImage(s, 0, 0, o, n), i.beginPath(), (i.font = t.fontStyle + ' ' + Math.floor(e.h * (e.n > 99 ? 0.85 : 1)) + 'px ' + t.fontFamily), (i.textAlign = 'center'), r ? (i.moveTo(e.x + e.w / 2, e.y), i.lineTo(e.x + e.w - e.h / 2, e.y), i.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2), i.lineTo(e.x + e.w, e.y + e.h - e.h / 2), i.quadraticCurveTo(e.x + e.w, e.y + e.h, e.x + e.w - e.h / 2, e.y + e.h), i.lineTo(e.x + e.h / 2, e.y + e.h), i.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2), i.lineTo(e.x, e.y + e.h / 2), i.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y)) : i.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI), (i.fillStyle = 'rgba(' + t.bgColor.r + ',' + t.bgColor.g + ',' + t.bgColor.b + ',' + e.o + ')'), i.fill(), i.closePath(), i.beginPath(), i.stroke(), (i.fillStyle = 'rgba(' + t.textColor.r + ',' + t.textColor.g + ',' + t.textColor.b + ',' + e.o + ')'), 'number' == typeof e.n && e.n > 999 ? i.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1000)) + 'k+', Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.2 * e.h)) : i.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.15 * e.h)), i.closePath();
        }),
            (w.rectangle = function (e) {
                e = x(e);
                var r = !1;
                2 === e.len ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w)) : e.len >= 3 && ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w)), i.clearRect(0, 0, o, n), i.drawImage(s, 0, 0, o, n), i.beginPath(), (i.font = t.fontStyle + ' ' + Math.floor(e.h * (e.n > 99 ? 0.9 : 1)) + 'px ' + t.fontFamily), (i.textAlign = 'center'), (i.fillStyle = 'rgba(' + t.bgColor.r + ',' + t.bgColor.g + ',' + t.bgColor.b + ',' + e.o + ')'), i.fillRect(e.x, e.y, e.w, e.h), (i.fillStyle = 'rgba(' + t.textColor.r + ',' + t.textColor.g + ',' + t.textColor.b + ',' + e.o + ')'), 'number' == typeof e.n && e.n > 999 ? i.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1000)) + 'k+', Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.2 * e.h)) : i.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.15 * e.h)), i.closePath();
            });
        function I(e) {
            if (e.paused || e.ended || l) return !1;
            try {
                i.clearRect(0, 0, o, n), i.drawImage(e, 0, 0, o, n);
            } catch (e) {}
            (m = setTimeout(function () {
                I(e);
            }, E.duration)),
                P.setIcon(a);
        }
        var P = {};
        function T(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, r, n) {
                return t + t + r + r + n + n;
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return (
                !!t && {
                    r: parseInt(t[1], 16),
                    g: parseInt(t[2], 16),
                    b: parseInt(t[3], 16)
                }
            );
        }
        function O(e, t) {
            var r,
                n = {};
            for (r in e) n[r] = e[r];
            for (r in t) n[r] = t[r];
            return n;
        }
        (P.getIcon = function () {
            var e = !1;
            return (
                t.element
                    ? (e = t.element)
                    : t.elementId
                      ? (e = y.getElementById(t.elementId)).setAttribute('href', e.getAttribute('src'))
                      : !1 ===
                            (e = (function () {
                                for (var e = y.getElementsByTagName('head')[0].getElementsByTagName('link'), t = e.length, r = t - 1; r >= 0; r--) if (/(^|\s)icon(\s|$)/i.test(e[r].getAttribute('rel'))) return e[r];
                                return !1;
                            })()) && ((e = y.createElement('link')).setAttribute('rel', 'icon'), y.getElementsByTagName('head')[0].appendChild(e)),
                e.setAttribute('type', 'image/png'),
                e
            );
        }),
            (P.setIcon = function (e) {
                var n = e.toDataURL('image/png');
                if ((t.dataUrl && t.dataUrl(n), t.element)) t.element.setAttribute('href', n), t.element.setAttribute('src', n);
                else if (t.elementId) {
                    var o = y.getElementById(t.elementId);
                    o.setAttribute('href', n), o.setAttribute('src', n);
                } else if (p.ff || p.opera) {
                    var a = r;
                    (r = y.createElement('link')), p.opera && r.setAttribute('rel', 'icon'), r.setAttribute('rel', 'icon'), r.setAttribute('type', 'image/png'), y.getElementsByTagName('head')[0].appendChild(r), r.setAttribute('href', n), a.parentNode && a.parentNode.removeChild(a);
                } else r.setAttribute('href', n);
            });
        var E = {};
        return (
            (E.duration = 40),
            (E.types = {}),
            (E.types.fade = [
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.1
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.2
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.3
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.4
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.5
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.6
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.7
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.8
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.9
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                }
            ]),
            (E.types.none = [
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                }
            ]),
            (E.types.pop = [
                {
                    x: 1,
                    y: 1,
                    w: 0,
                    h: 0,
                    o: 1
                },
                {
                    x: 0.9,
                    y: 0.9,
                    w: 0.1,
                    h: 0.1,
                    o: 1
                },
                {
                    x: 0.8,
                    y: 0.8,
                    w: 0.2,
                    h: 0.2,
                    o: 1
                },
                {
                    x: 0.7,
                    y: 0.7,
                    w: 0.3,
                    h: 0.3,
                    o: 1
                },
                {
                    x: 0.6,
                    y: 0.6,
                    w: 0.4,
                    h: 0.4,
                    o: 1
                },
                {
                    x: 0.5,
                    y: 0.5,
                    w: 0.5,
                    h: 0.5,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                }
            ]),
            (E.types.popFade = [
                {
                    x: 0.75,
                    y: 0.75,
                    w: 0,
                    h: 0,
                    o: 0
                },
                {
                    x: 0.65,
                    y: 0.65,
                    w: 0.1,
                    h: 0.1,
                    o: 0.2
                },
                {
                    x: 0.6,
                    y: 0.6,
                    w: 0.2,
                    h: 0.2,
                    o: 0.4
                },
                {
                    x: 0.55,
                    y: 0.55,
                    w: 0.3,
                    h: 0.3,
                    o: 0.6
                },
                {
                    x: 0.5,
                    y: 0.5,
                    w: 0.4,
                    h: 0.4,
                    o: 0.8
                },
                {
                    x: 0.45,
                    y: 0.45,
                    w: 0.5,
                    h: 0.5,
                    o: 0.9
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                }
            ]),
            (E.types.slide = [
                {
                    x: 0.4,
                    y: 1,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.9,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.9,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.8,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.7,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.6,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.5,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                }
            ]),
            (E.run = function (e, r, n, o) {
                var i = E.types[y.hidden || y.msHidden || y.webkitHidden || y.mozHidden ? 'none' : t.animation];
                if (((o = !0 === n ? (void 0 !== o ? o : i.length - 1) : void 0 !== o ? o : 0), (r = r || function () {}), o < i.length && o >= 0))
                    w[t.type](O(e, i[o])),
                        (h = setTimeout(function () {
                            n ? (o -= 1) : (o += 1), E.run(e, r, n, o);
                        }, E.duration)),
                        P.setIcon(a);
                else {
                    r();
                    return;
                }
            }),
            !(function () {
                ((t = O(g, e)).bgColor = T(t.bgColor)), (t.textColor = T(t.textColor)), (t.position = t.position.toLowerCase()), (t.animation = E.types['' + t.animation] ? t.animation : g.animation), (y = t.win.document);
                var u = t.position.indexOf('up') > -1,
                    c = t.position.indexOf('left') > -1;
                if (u || c)
                    for (var f = 0; f < E.types['' + t.animation].length; f++) {
                        var d = E.types['' + t.animation][f];
                        u && (d.y < 0.6 ? (d.y = d.y - 0.4) : (d.y = d.y - 2 * d.y + (1 - d.w))), c && (d.x < 0.6 ? (d.x = d.x - 0.4) : (d.x = d.x - 2 * d.x + (1 - d.h))), (E.types['' + t.animation][f] = d);
                    }
                (t.type = w['' + t.type] ? t.type : g.type),
                    (r = P.getIcon()),
                    (a = document.createElement('canvas')),
                    (s = document.createElement('img')),
                    r.hasAttribute('href')
                        ? (s.setAttribute('crossOrigin', 'anonymous'),
                          (s.onload = function () {
                              (n = s.height > 0 ? s.height : 32), (o = s.width > 0 ? s.width : 32), (a.height = n), (a.width = o), (i = a.getContext('2d')), b.ready();
                          }),
                          s.setAttribute('src', r.getAttribute('href')))
                        : ((s.onload = function () {
                              (n = 32), (o = 32), (s.height = n), (s.width = o), (a.height = n), (a.width = o), (i = a.getContext('2d')), b.ready();
                          }),
                          s.setAttribute('src', ''));
            })(),
            {
                badge: function (e, t) {
                    (t = ('string' == typeof t ? { animation: t } : t) || {}),
                        (d = function () {
                            try {
                                if ('number' == typeof e ? e > 0 : '' !== e) {
                                    var r = {
                                        type: 'badge',
                                        options: { n: e }
                                    };
                                    if (
                                        ('animation' in t && E.types['' + t.animation] && (r.options.animation = '' + t.animation),
                                        'type' in t && w['' + t.type] && (r.options.type = '' + t.type),
                                        ['bgColor', 'textColor'].forEach(function (e) {
                                            e in t && (r.options[e] = T(t[e]));
                                        }),
                                        ['fontStyle', 'fontFamily'].forEach(function (e) {
                                            e in t && (r.options[e] = t[e]);
                                        }),
                                        v.push(r),
                                        v.length > 100)
                                    )
                                        throw Error('Too many badges requests in queue.');
                                    b.start();
                                } else b.reset();
                            } catch (e) {
                                throw Error('Error setting badge. Message: ' + e.message);
                            }
                        }),
                        u && d();
                },
                video: function (e) {
                    (d = function () {
                        try {
                            if ('stop' === e) {
                                (l = !0), b.reset(), (l = !1);
                                return;
                            }
                            e.addEventListener(
                                'play',
                                function () {
                                    I(this);
                                },
                                !1
                            );
                        } catch (e) {
                            throw Error('Error setting video. Message: ' + e.message);
                        }
                    }),
                        u && d();
                },
                image: function (e) {
                    (d = function () {
                        try {
                            var t = e.width,
                                r = e.height,
                                s = document.createElement('img'),
                                u = t / o < r / n ? t / o : r / n;
                            s.setAttribute('crossOrigin', 'anonymous'),
                                (s.onload = function () {
                                    i.clearRect(0, 0, o, n), i.drawImage(s, 0, 0, o, n), P.setIcon(a);
                                }),
                                s.setAttribute('src', e.getAttribute('src')),
                                (s.height = r / u),
                                (s.width = t / u);
                        } catch (e) {
                            throw Error('Error setting image. Message: ' + e.message);
                        }
                    }),
                        u && d();
                },
                webcam: function (e) {
                    if (
                        ((!window.URL || !window.URL.createObjectURL) &&
                            ((window.URL = window.URL || {}),
                            (window.URL.createObjectURL = function (e) {
                                return e;
                            })),
                        p.supported)
                    ) {
                        var t = !1;
                        (navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia),
                            (d = function () {
                                try {
                                    if ('stop' === e) {
                                        (l = !0), b.reset(), (l = !1);
                                        return;
                                    }
                                    ((t = document.createElement('video')).width = o),
                                        (t.height = n),
                                        navigator.getUserMedia(
                                            {
                                                video: !0,
                                                audio: !1
                                            },
                                            function (e) {
                                                (t.src = URL.createObjectURL(e)), t.play(), I(t);
                                            },
                                            function () {}
                                        );
                                } catch (e) {
                                    throw Error('Error setting webcam. Message: ' + e.message);
                                }
                            }),
                            u && d();
                    }
                },
                reset: b.reset,
                browser: { supported: p.supported }
            }
        );
    };
    'undefined' != typeof define && define.amd
        ? define([], function () {
              return t;
          })
        : e.exports
          ? (e.exports = t)
          : (this.Favico = t);
})();
