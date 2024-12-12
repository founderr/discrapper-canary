var i = r(413135).Buffer;
!(function (e) {
    function n() {}
    function r(e, n) {
        if (((n = void 0 === n ? { fatal: !1 } : n), -1 === l.indexOf((e = void 0 === e ? 'utf-8' : e).toLowerCase()))) throw RangeError("Failed to construct 'TextDecoder': The encoding label provided ('" + e + "') is invalid.");
        if (n.fatal) throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
    }
    function a(e) {
        return i.from(e.buffer, e.byteOffset, e.byteLength).toString('utf-8');
    }
    function s(e) {
        var n = URL.createObjectURL(new Blob([e], { type: 'text/plain;charset=UTF-8' }));
        try {
            var r = new XMLHttpRequest();
            return r.open('GET', n, !1), r.send(), r.responseText;
        } catch (n) {
            return o(e);
        } finally {
            URL.revokeObjectURL(n);
        }
    }
    function o(e) {
        for (var n = 0, r = Math.min(65536, e.length + 1), i = new Uint16Array(r), a = [], s = 0; ; ) {
            var o = n < e.length;
            if (!o || s >= r - 1) {
                if ((a.push(String.fromCharCode.apply(null, i.subarray(0, s))), !o)) return a.join('');
                (e = e.subarray(n)), (s = n = 0);
            }
            if (0 == (128 & (o = e[n++]))) i[s++] = o;
            else if (192 == (224 & o)) {
                var l = 63 & e[n++];
                i[s++] = ((31 & o) << 6) | l;
            } else if (224 == (240 & o)) {
                l = 63 & e[n++];
                var u = 63 & e[n++];
                i[s++] = ((31 & o) << 12) | (l << 6) | u;
            } else 240 == (248 & o) && ((l = 63 & e[n++]), (u = 63 & e[n++]), 65535 < (o = ((7 & o) << 18) | (l << 12) | (u << 6) | (63 & e[n++])) && ((o -= 65536), (i[s++] = ((o >>> 10) & 1023) | 55296), (o = 56320 | (1023 & o))), (i[s++] = o));
        }
    }
    if (!e.TextEncoder || !e.TextDecoder) {
        var l = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
        Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
            (n.prototype.encode = function (e, n) {
                if ((n = void 0 === n ? { stream: !1 } : n).stream) throw Error("Failed to encode: the 'stream' option is unsupported.");
                n = 0;
                for (var r = e.length, i = 0, a = Math.max(32, r + (r >>> 1) + 7), s = new Uint8Array((a >>> 3) << 3); n < r; ) {
                    var o = e.charCodeAt(n++);
                    if (55296 <= o && 56319 >= o) {
                        if (n < r) {
                            var l = e.charCodeAt(n);
                            56320 == (64512 & l) && (++n, (o = ((1023 & o) << 10) + (1023 & l) + 65536));
                        }
                        if (55296 <= o && 56319 >= o) continue;
                    }
                    if ((i + 4 > s.length && ((a += 8), (a *= 1 + (n / e.length) * 2), (l = new Uint8Array((a = (a >>> 3) << 3))).set(s), (s = l)), 0 == (4294967168 & o))) s[i++] = o;
                    else {
                        if (0 == (4294965248 & o)) s[i++] = ((o >>> 6) & 31) | 192;
                        else if (0 == (4294901760 & o)) (s[i++] = ((o >>> 12) & 15) | 224), (s[i++] = ((o >>> 6) & 63) | 128);
                        else {
                            if (0 != (4292870144 & o)) continue;
                            (s[i++] = ((o >>> 18) & 7) | 240), (s[i++] = ((o >>> 12) & 63) | 128), (s[i++] = ((o >>> 6) & 63) | 128);
                        }
                        s[i++] = (63 & o) | 128;
                    }
                }
                return s.slice ? s.slice(0, i) : s.subarray(0, i);
            }),
            Object.defineProperty(r.prototype, 'encoding', { value: 'utf-8' }),
            Object.defineProperty(r.prototype, 'fatal', { value: !1 }),
            Object.defineProperty(r.prototype, 'ignoreBOM', { value: !1 });
        var u = o;
        'function' == typeof i && i.from ? (u = a) : 'function' == typeof Blob && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && (u = s),
            (r.prototype.decode = function (e, n) {
                if ((n = void 0 === n ? { stream: !1 } : n).stream) throw Error("Failed to decode: the 'stream' option is unsupported.");
                return (e = e instanceof Uint8Array ? e : new Uint8Array(e.buffer instanceof ArrayBuffer ? e.buffer : e)), u(e);
            }),
            (e.TextEncoder = n),
            (e.TextDecoder = r);
    }
})('undefined' != typeof window ? window : void 0 !== r.g ? r.g : this);
