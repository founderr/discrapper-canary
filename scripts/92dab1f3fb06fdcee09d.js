(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [91913], {
        737264: e => {
            "use strict";
            e.exports.Q = function(e) {
                var a, l = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!l) return null;
                l.shift();
                var n = null,
                    r = [];
                if (l[2]) {
                    n = (a = l[2].split("-")).shift();
                    r = a
                }
                var t = [];
                l[5] && (t = l[5].split("-")).shift();
                var u = [];
                if (l[6]) {
                    (a = l[6].split("-")).shift();
                    for (var o, i = []; a.length;) {
                        var s = a.shift();
                        if (1 === s.length)
                            if (o) {
                                u.push({
                                    singleton: o,
                                    extension: i
                                });
                                o = s;
                                i = []
                            } else o = s;
                        else i.push(s)
                    }
                    u.push({
                        singleton: o,
                        extension: i
                    })
                }
                var v = [];
                if (l[7]) {
                    (v = l[7].split("-")).shift();
                    v.shift()
                }
                var c = [];
                l[8] && (c = l[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: l[3] || null,
                        region: l[4] || null,
                        variant: t,
                        extension: u,
                        privateuse: v
                    },
                    privateuse: c,
                    grandfathered: {
                        irregular: l[0] || null,
                        regular: l[1] || null
                    }
                }
            }
        },
        753074: e => {
            "use strict";
            var a = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                l = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                n = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, r, t) {
                if ("string" != typeof r) {
                    var u = Object.getOwnPropertyNames(r);
                    n && (u = u.concat(Object.getOwnPropertySymbols(r)));
                    for (var o = 0; o < u.length; ++o)
                        if (!(a[u[o]] || l[u[o]] || t && t[u[o]])) try {
                            e[u[o]] = r[u[o]]
                        } catch (e) {}
                }
                return e
            }
        },
        16243: e => {
            if (!a) var a = {
                map: function(e, a) {
                    var l = {};
                    return a ? e.map((function(e, n) {
                        l.index = n;
                        return a.call(l, e)
                    })) : e.slice()
                },
                naturalOrder: function(e, a) {
                    return e < a ? -1 : e > a ? 1 : 0
                },
                sum: function(e, a) {
                    var l = {};
                    return e.reduce(a ? function(e, n, r) {
                        l.index = r;
                        return e + a.call(l, n)
                    } : function(e, a) {
                        return e + a
                    }, 0)
                },
                max: function(e, l) {
                    return Math.max.apply(null, l ? a.map(e, l) : e)
                }
            };
            var l = function() {
                function e(e, a, l) {
                    return (e << 10) + (a << 5) + l
                }

                function l(e) {
                    var a = [],
                        l = !1;

                    function n() {
                        a.sort(e);
                        l = !0
                    }
                    return {
                        push: function(e) {
                            a.push(e);
                            l = !1
                        },
                        peek: function(e) {
                            l || n();
                            void 0 === e && (e = a.length - 1);
                            return a[e]
                        },
                        pop: function() {
                            l || n();
                            return a.pop()
                        },
                        size: function() {
                            return a.length
                        },
                        map: function(e) {
                            return a.map(e)
                        },
                        debug: function() {
                            l || n();
                            return a
                        }
                    }
                }

                function n(e, a, l, n, r, t, u) {
                    var o = this;
                    o.r1 = e;
                    o.r2 = a;
                    o.g1 = l;
                    o.g2 = n;
                    o.b1 = r;
                    o.b2 = t;
                    o.histo = u
                }
                n.prototype = {
                    volume: function(e) {
                        var a = this;
                        a._volume && !e || (a._volume = (a.r2 - a.r1 + 1) * (a.g2 - a.g1 + 1) * (a.b2 - a.b1 + 1));
                        return a._volume
                    },
                    count: function(a) {
                        var l = this,
                            n = l.histo;
                        if (!l._count_set || a) {
                            var r, t, u, o = 0;
                            for (r = l.r1; r <= l.r2; r++)
                                for (t = l.g1; t <= l.g2; t++)
                                    for (u = l.b1; u <= l.b2; u++) o += n[e(r, t, u)] || 0;
                            l._count = o;
                            l._count_set = !0
                        }
                        return l._count
                    },
                    copy: function() {
                        var e = this;
                        return new n(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo)
                    },
                    avg: function(a) {
                        var l = this,
                            n = l.histo;
                        if (!l._avg || a) {
                            var r, t, u, o, i = 0,
                                s = 0,
                                v = 0,
                                c = 0;
                            for (t = l.r1; t <= l.r2; t++)
                                for (u = l.g1; u <= l.g2; u++)
                                    for (o = l.b1; o <= l.b2; o++) {
                                        i += r = n[e(t, u, o)] || 0;
                                        s += r * (t + .5) * 8;
                                        v += r * (u + .5) * 8;
                                        c += r * (o + .5) * 8
                                    }
                            l._avg = i ? [~~(s / i), ~~(v / i), ~~(c / i)] : [~~(8 * (l.r1 + l.r2 + 1) / 2), ~~(8 * (l.g1 + l.g2 + 1) / 2), ~~(8 * (l.b1 + l.b2 + 1) / 2)]
                        }
                        return l._avg
                    },
                    contains: function(e) {
                        var a = this,
                            l = e[0] >> 3;
                        gval = e[1] >> 3;
                        bval = e[2] >> 3;
                        return l >= a.r1 && l <= a.r2 && gval >= a.g1 && gval <= a.g2 && bval >= a.b1 && bval <= a.b2
                    }
                };

                function r() {
                    this.vboxes = new l((function(e, l) {
                        return a.naturalOrder(e.vbox.count() * e.vbox.volume(), l.vbox.count() * l.vbox.volume())
                    }))
                }
                r.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(e) {
                            return e.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(e) {
                        for (var a = this.vboxes, l = 0; l < a.size(); l++)
                            if (a.peek(l).vbox.contains(e)) return a.peek(l).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) {
                        for (var a, l, n, r = this.vboxes, t = 0; t < r.size(); t++)
                            if ((l = Math.sqrt(Math.pow(e[0] - r.peek(t).color[0], 2) + Math.pow(e[1] - r.peek(t).color[1], 2) + Math.pow(e[2] - r.peek(t).color[2], 2))) < a || void 0 === a) {
                                a = l;
                                n = r.peek(t).color
                            } return n
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort((function(e, l) {
                            return a.naturalOrder(a.sum(e.color), a.sum(l.color))
                        }));
                        var l = e[0].color;
                        l[0] < 5 && l[1] < 5 && l[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            r = e[n].color;
                        r[0] > 251 && r[1] > 251 && r[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                };

                function t(l, n) {
                    if (n.count()) {
                        var r = n.r2 - n.r1 + 1,
                            t = n.g2 - n.g1 + 1,
                            u = n.b2 - n.b1 + 1,
                            o = a.max([r, t, u]);
                        if (1 == n.count()) return [n.copy()];
                        var i, s, v, c, b = 0,
                            f = [],
                            h = [];
                        if (o == r)
                            for (i = n.r1; i <= n.r2; i++) {
                                c = 0;
                                for (s = n.g1; s <= n.g2; s++)
                                    for (v = n.b1; v <= n.b2; v++) c += l[e(i, s, v)] || 0;
                                b += c;
                                f[i] = b
                            } else if (o == t)
                                for (i = n.g1; i <= n.g2; i++) {
                                    c = 0;
                                    for (s = n.r1; s <= n.r2; s++)
                                        for (v = n.b1; v <= n.b2; v++) c += l[e(s, i, v)] || 0;
                                    b += c;
                                    f[i] = b
                                } else
                                    for (i = n.b1; i <= n.b2; i++) {
                                        c = 0;
                                        for (s = n.r1; s <= n.r2; s++)
                                            for (v = n.g1; v <= n.g2; v++) c += l[e(s, v, i)] || 0;
                                        b += c;
                                        f[i] = b
                                    }
                        f.forEach((function(e, a) {
                            h[a] = b - e
                        }));
                        return p(o == r ? "r" : o == t ? "g" : "b")
                    }

                    function p(e) {
                        var a, l, r, t, u, o = e + "1",
                            s = e + "2",
                            v = 0;
                        for (i = n[o]; i <= n[s]; i++)
                            if (f[i] > b / 2) {
                                r = n.copy();
                                t = n.copy();
                                u = (a = i - n[o]) <= (l = n[s] - i) ? Math.min(n[s] - 1, ~~(i + l / 2)) : Math.max(n[o], ~~(i - 1 - a / 2));
                                for (; !f[u];) u++;
                                v = h[u];
                                for (; !v && f[u - 1];) v = h[--u];
                                r[s] = u;
                                t[o] = r[s] + 1;
                                return [r, t]
                            }
                    }
                }
                return {
                    quantize: function(u, o) {
                        if (!u.length || o < 2 || o > 256) return !1;
                        var i = function(a) {
                            var l, n, r, t, u = new Array(32768);
                            a.forEach((function(a) {
                                n = a[0] >> 3;
                                r = a[1] >> 3;
                                t = a[2] >> 3;
                                l = e(n, r, t);
                                u[l] = (u[l] || 0) + 1
                            }));
                            return u
                        }(u);
                        i.forEach((function() {
                            0
                        }));
                        var s = function(e, a) {
                                var l, r, t, u = 1e6,
                                    o = 0,
                                    i = 1e6,
                                    s = 0,
                                    v = 1e6,
                                    c = 0;
                                e.forEach((function(e) {
                                    l = e[0] >> 3;
                                    r = e[1] >> 3;
                                    t = e[2] >> 3;
                                    l < u ? u = l : l > o && (o = l);
                                    r < i ? i = r : r > s && (s = r);
                                    t < v ? v = t : t > c && (c = t)
                                }));
                                return new n(u, o, i, s, v, c, a)
                            }(u, i),
                            v = new l((function(e, l) {
                                return a.naturalOrder(e.count(), l.count())
                            }));
                        v.push(s);

                        function c(e, a) {
                            for (var l, n = 1, r = 0; r < 1e3;)
                                if ((l = e.pop()).count()) {
                                    var u = t(i, l),
                                        o = u[0],
                                        s = u[1];
                                    if (!o) return;
                                    e.push(o);
                                    if (s) {
                                        e.push(s);
                                        n++
                                    }
                                    if (n >= a) return;
                                    if (r++ > 1e3) return
                                } else {
                                    e.push(l);
                                    r++
                                }
                        }
                        c(v, .75 * o);
                        for (var b = new l((function(e, l) {
                                return a.naturalOrder(e.count() * e.volume(), l.count() * l.volume())
                            })); v.size();) b.push(v.pop());
                        c(b, o - b.size());
                        for (var f = new r; b.size();) f.push(b.pop());
                        return f
                    }
                }
            }();
            e.exports = l.quantize
        },
        852316: (e, a, l) => {
            "use strict";
            l.d(a, {
                Z: () => n
            });
            const n = [{
                label: "Alberta",
                value: "AB"
            }, {
                label: "British Columbia",
                value: "BC"
            }, {
                label: "Manitoba",
                value: "MB"
            }, {
                label: "New Brunswick",
                value: "NB"
            }, {
                label: "Newfoundland and Labrador",
                value: "NL"
            }, {
                label: "Nova Scotia",
                value: "NS"
            }, {
                label: "Ontario",
                value: "ON"
            }, {
                label: "Prince Edward Island",
                value: "PE"
            }, {
                label: "Quebec",
                value: "QC"
            }, {
                label: "Saskatchewan",
                value: "SK"
            }, {
                label: "Northwest Territories",
                value: "NT"
            }, {
                label: "Nunavut",
                value: "NU"
            }, {
                label: "Yukon",
                value: "YT"
            }]
        },
        947592: (e, a, l) => {
            "use strict";
            l.d(a, {
                Z: () => n
            });
            const n = [{
                label: "Alabama",
                value: "AL"
            }, {
                label: "Alaska",
                value: "AK"
            }, {
                label: "American Samoa",
                value: "AS"
            }, {
                label: "Arizona",
                value: "AZ"
            }, {
                label: "Arkansas",
                value: "AR"
            }, {
                label: "Armed Forces: Americas",
                value: "AA"
            }, {
                label: "Armed Forces: Europe",
                value: "AE"
            }, {
                label: "Armed Forces: Pacific",
                value: "AP"
            }, {
                label: "California",
                value: "CA"
            }, {
                label: "Colorado",
                value: "CO"
            }, {
                label: "Connecticut",
                value: "CT"
            }, {
                label: "Delaware",
                value: "DE"
            }, {
                label: "District Of Columbia",
                value: "DC"
            }, {
                label: "Federated States Of Micronesia",
                value: "FM"
            }, {
                label: "Florida",
                value: "FL"
            }, {
                label: "Georgia",
                value: "GA"
            }, {
                label: "Guam",
                value: "GU"
            }, {
                label: "Hawaii",
                value: "HI"
            }, {
                label: "Idaho",
                value: "ID"
            }, {
                label: "Illinois",
                value: "IL"
            }, {
                label: "Indiana",
                value: "IN"
            }, {
                label: "Iowa",
                value: "IA"
            }, {
                label: "Kansas",
                value: "KS"
            }, {
                label: "Kentucky",
                value: "KY"
            }, {
                label: "Louisiana",
                value: "LA"
            }, {
                label: "Maine",
                value: "ME"
            }, {
                label: "Marshall Islands",
                value: "MH"
            }, {
                label: "Maryland",
                value: "MD"
            }, {
                label: "Massachusetts",
                value: "MA"
            }, {
                label: "Michigan",
                value: "MI"
            }, {
                label: "Minnesota",
                value: "MN"
            }, {
                label: "Mississippi",
                value: "MS"
            }, {
                label: "Missouri",
                value: "MO"
            }, {
                label: "Montana",
                value: "MT"
            }, {
                label: "Nebraska",
                value: "NE"
            }, {
                label: "Nevada",
                value: "NV"
            }, {
                label: "New Hampshire",
                value: "NH"
            }, {
                label: "New Jersey",
                value: "NJ"
            }, {
                label: "New Mexico",
                value: "NM"
            }, {
                label: "New York",
                value: "NY"
            }, {
                label: "North Carolina",
                value: "NC"
            }, {
                label: "North Dakota",
                value: "ND"
            }, {
                label: "Northern Mariana Islands",
                value: "MP"
            }, {
                label: "Ohio",
                value: "OH"
            }, {
                label: "Oklahoma",
                value: "OK"
            }, {
                label: "Oregon",
                value: "OR"
            }, {
                label: "Palau",
                value: "PW"
            }, {
                label: "Pennsylvania",
                value: "PA"
            }, {
                label: "Puerto Rico",
                value: "PR"
            }, {
                label: "Rhode Island",
                value: "RI"
            }, {
                label: "South Carolina",
                value: "SC"
            }, {
                label: "South Dakota",
                value: "SD"
            }, {
                label: "Tennessee",
                value: "TN"
            }, {
                label: "Texas",
                value: "TX"
            }, {
                label: "Utah",
                value: "UT"
            }, {
                label: "Vermont",
                value: "VT"
            }, {
                label: "Virgin Islands",
                value: "VI"
            }, {
                label: "Virginia",
                value: "VA"
            }, {
                label: "Washington",
                value: "WA"
            }, {
                label: "West Virginia",
                value: "WV"
            }, {
                label: "Wisconsin",
                value: "WI"
            }, {
                label: "Wyoming",
                value: "WY"
            }]
        },
        482507: (e, a, l) => {
            "use strict";
            l.d(a, {
                J: () => n
            });

            function n(e) {
                var a = document.body;
                if (null == a) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var l = document.createRange(),
                    n = window.getSelection(),
                    r = document.createElement("textarea");
                r.value = e;
                r.contentEditable = "true";
                r.style.visibility = "none";
                a.appendChild(r);
                l.selectNodeContents(r);
                null == n || n.removeAllRanges();
                null == n || n.addRange(l);
                r.focus();
                r.setSelectionRange(0, e.length);
                var t = document.execCommand("copy");
                a.removeChild(r);
                return t
            }
        },
        989824: (e, a, l) => {
            "use strict";
            l.d(a, {
                Z: () => t
            });
            var n = l(667294),
                r = {};

            function t(e) {
                var a = (0, n.useRef)(r);
                a.current === r && (a.current = e());
                return a.current
            }
        }
    }
]);