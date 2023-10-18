"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [5522], {
        305522: (n, e, t) => {
            t.a(n, (async (n, r) => {
                try {
                    t.r(e);
                    t.d(e, {
                        __wbindgen_rethrow: () => a.nD,
                        __wbindgen_string_new: () => a.h4,
                        crop_gif: () => a.oW
                    });
                    var a = t(463281),
                        i = n([a]);
                    a = (i.then ? (await i)() : i)[0];
                    r()
                } catch (n) {
                    r(n)
                }
            }))
        },
        463281: (n, e, t) => {
            t.a(n, (async (r, a) => {
                try {
                    t.d(e, {
                        h4: () => m,
                        nD: () => k,
                        oW: () => v
                    });
                    var i = t(246123);
                    n = t.hmd(n);
                    var o = r([i]);
                    i = (o.then ? (await o)() : o)[0];
                    let u = new("undefined" == typeof TextDecoder ? (0, n.require)("util").TextDecoder : TextDecoder)("utf-8", {
                        ignoreBOM: !0,
                        fatal: !0
                    });
                    u.decode();
                    let c = null;

                    function _() {
                        null !== c && c.buffer === i.memory.buffer || (c = new Uint8Array(i.memory.buffer));
                        return c
                    }
                    const d = new Array(32).fill(void 0);
                    d.push(void 0, null, !0, !1);
                    let f = d.length;

                    function l(n) {
                        f === d.length && d.push(d.length + 1);
                        const e = f;
                        f = d[e];
                        d[e] = n;
                        return e
                    }

                    function s(n) {
                        return d[n]
                    }

                    function h(n) {
                        if (!(n < 36)) {
                            d[n] = f;
                            f = n
                        }
                    }

                    function w(n) {
                        const e = s(n);
                        h(n);
                        return e
                    }
                    let b = 0;

                    function g(n, e) {
                        const t = e(1 * n.length);
                        _().set(n, t / 1);
                        b = n.length;
                        return t
                    }
                    let y = null;

                    function p() {
                        null !== y && y.buffer === i.memory.buffer || (y = new Int32Array(i.memory.buffer));
                        return y
                    }

                    function v(n, e, t, r, a) {
                        try {
                            const h = i.__wbindgen_add_to_stack_pointer(-16);
                            var o = g(n, i.__wbindgen_malloc),
                                u = b;
                            i.crop_gif(h, o, u, e, t, r, a);
                            var c = p()[h / 4 + 0],
                                d = p()[h / 4 + 1],
                                f = (l = c, s = d, _().subarray(l / 1, l / 1 + s)).slice();
                            i.__wbindgen_free(c, 1 * d);
                            return f
                        } finally {
                            i.__wbindgen_add_to_stack_pointer(16)
                        }
                        var l, s
                    }

                    function m(n, e) {
                        var t, r;
                        return l((t = n, r = e, u.decode(_().subarray(t, t + r))))
                    }

                    function k(n) {
                        throw w(n)
                    }
                    a()
                } catch (D) {
                    a(D)
                }
            }))
        },
        246123: (n, e, t) => {
            t.a(n, (async (r, a) => {
                try {
                    var i, o = r([i = t(463281)]),
                        [i] = o.then ? (await o)() : o;
                    await t.v(e, n.id, "56a45ea11731de6f5033", {
                        "./index_bg.js": {
                            __wbindgen_string_new: i.h4,
                            __wbindgen_rethrow: i.nD
                        }
                    });
                    a()
                } catch (n) {
                    a(n)
                }
            }), 1)
        }
    }
]);