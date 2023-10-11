({
    303541: function() {
        function e(e, t, r, n, a, o, u) {
            try {
                var i = e[o](u),
                    l = i.value
            } catch (e) {
                r(e);
                return
            }
            i.done ? t(l) : Promise.resolve(l).then(n, a)
        }
        var t, r, n = this && this.__generator || function(e, t) {
            var r, n, a, o, u = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: i(0),
                throw: i(1),
                return: i(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function i(o) {
                return function(i) {
                    return function(o) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; u;) try {
                            if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                            (n = 0, a) && (o = [2 & o[0], a.value]);
                            switch (o[0]) {
                                case 0:
                                case 1:
                                    a = o;
                                    break;
                                case 4:
                                    u.label++;
                                    return {
                                        value: o[1], done: !1
                                    };
                                case 5:
                                    u.label++;
                                    n = o[1];
                                    o = [0];
                                    continue;
                                case 7:
                                    o = u.ops.pop();
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(a = u.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                        u.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && u.label < a[1]) {
                                        u.label = a[1];
                                        a = o;
                                        break
                                    }
                                    if (a && u.label < a[2]) {
                                        u.label = a[2];
                                        u.ops.push(o);
                                        break
                                    }
                                    a[2] && u.ops.pop();
                                    u.trys.pop();
                                    continue
                            }
                            o = t.call(e, u)
                        } catch (e) {
                            o = [6, e];
                            n = 0
                        } finally {
                            r = a = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, i])
                }
            }
        };
        self.addEventListener("message", (r = (t = function(e) {
            var t, r;
            return n(this, (function(n) {
                switch (n.label) {
                    case 0:
                        t = e.data.url;
                        r = !1;
                        n.label = 1;
                    case 1:
                        n.trys.push([1, 3, , 4]);
                        return [4, fetch(t)];
                    case 2:
                        n.sent();
                        return [3, 4];
                    case 3:
                        n.sent();
                        r = !0;
                        return [3, 4];
                    case 4:
                        self.postMessage({
                            url: t,
                            error: r
                        });
                        return [2]
                }
            }))
        }, function() {
            var r = this,
                n = arguments;
            return new Promise((function(a, o) {
                var u = t.apply(r, n);

                function i(t) {
                    e(u, a, o, i, l, "next", t)
                }

                function l(t) {
                    e(u, a, o, i, l, "throw", t)
                }
                i(void 0)
            }))
        }), function(e) {
            return r.apply(this, arguments)
        }))
    }
})[303541]();