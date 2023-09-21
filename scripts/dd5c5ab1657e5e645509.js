"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [80853], {
        980853: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => f
            });
            var n = r(785893),
                o = (r(667294), r(264817));

            function c(e, t, r, n, o, c, u) {
                try {
                    var i = e[c](u),
                        a = i.value
                } catch (e) {
                    r(e);
                    return
                }
                i.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var u = e.apply(t, r);

                        function i(e) {
                            c(u, n, o, i, a, "next", e)
                        }

                        function a(e) {
                            c(u, n, o, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var l = function(e, t) {
                var r, n, o, c, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function i(c) {
                    return function(i) {
                        return function(c) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                (n = 0, o) && (c = [2 & c[0], o.value]);
                                switch (c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: c[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        n = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            u.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = c;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(c);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                c = t.call(e, u)
                            } catch (e) {
                                c = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, i])
                    }
                }
            };

            function f(e) {
                (0, o.ZD)(u((function() {
                    var t, o;
                    return l(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(24567)]).then(r.bind(r, 324567))];
                            case 1:
                                t = c.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, n.jsx)(o, a(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                i(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({}, t), {
                                        guildId: e
                                    }))
                                }]
                        }
                    }))
                })))
            }
        }
    }
]);