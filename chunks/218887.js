var i = r(444675);
function a(e) {
    if ('string' != typeof e) throw TypeError('Path must be a string. Received ' + JSON.stringify(e));
}
function s(e, n) {
    for (var r, i = '', a = 0, s = -1, o = 0, l = 0; l <= e.length; ++l) {
        if (l < e.length) r = e.charCodeAt(l);
        else if (47 === r) break;
        else r = 47;
        if (47 === r) {
            if (s === l - 1 || 1 === o);
            else if (s !== l - 1 && 2 === o) {
                if (i.length < 2 || 2 !== a || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) {
                    if (i.length > 2) {
                        var u = i.lastIndexOf('/');
                        if (u !== i.length - 1) {
                            -1 === u ? ((i = ''), (a = 0)) : (a = (i = i.slice(0, u)).length - 1 - i.lastIndexOf('/')), (s = l), (o = 0);
                            continue;
                        }
                    } else if (2 === i.length || 1 === i.length) {
                        (i = ''), (a = 0), (s = l), (o = 0);
                        continue;
                    }
                }
                n && (i.length > 0 ? (i += '/..') : (i = '..'), (a = 2));
            } else i.length > 0 ? (i += '/' + e.slice(s + 1, l)) : (i = e.slice(s + 1, l)), (a = l - s - 1);
            (s = l), (o = 0);
        } else 46 === r && -1 !== o ? ++o : (o = -1);
    }
    return i;
}
function o(e, n) {
    var r = n.dir || n.root,
        i = n.base || (n.name || '') + (n.ext || '');
    return r ? (r === n.root ? r + i : r + e + i) : i;
}
var l = {
    resolve: function () {
        for (var e, n, r = '', o = !1, l = arguments.length - 1; l >= -1 && !o; l--) {
            if ((l >= 0 ? (n = arguments[l]) : (void 0 === e && (e = i.cwd()), (n = e)), a(n), 0 !== n.length)) (r = n + '/' + r), (o = 47 === n.charCodeAt(0));
        }
        if (((r = s(r, !o)), o)) return r.length > 0 ? '/' + r : '/';
        if (r.length > 0) return r;
        return '.';
    },
    normalize: function (e) {
        if ((a(e), 0 === e.length)) return '.';
        var n = 47 === e.charCodeAt(0),
            r = 47 === e.charCodeAt(e.length - 1);
        return (0 === (e = s(e, !n)).length && !n && (e = '.'), e.length > 0 && r && (e += '/'), n) ? '/' + e : e;
    },
    isAbsolute: function (e) {
        return a(e), e.length > 0 && 47 === e.charCodeAt(0);
    },
    join: function () {
        if (0 == arguments.length) return '.';
        for (var e, n = 0; n < arguments.length; ++n) {
            var r = arguments[n];
            a(r), r.length > 0 && (void 0 === e ? (e = r) : (e += '/' + r));
        }
        return void 0 === e ? '.' : l.normalize(e);
    },
    relative: function (e, n) {
        if ((a(e), a(n), e === n)) return '';
        if (((e = l.resolve(e)), e === (n = l.resolve(n)))) return '';
        for (var r = 1; r < e.length && 47 === e.charCodeAt(r); ++r);
        for (var i = e.length, s = i - r, o = 1; o < n.length && 47 === n.charCodeAt(o); ++o);
        for (var u = n.length - o, c = s < u ? s : u, d = -1, f = 0; f <= c; ++f) {
            if (f === c) {
                if (u > c) {
                    if (47 === n.charCodeAt(o + f)) return n.slice(o + f + 1);
                    if (0 === f) return n.slice(o + f);
                } else s > c && (47 === e.charCodeAt(r + f) ? (d = f) : 0 === f && (d = 0));
                break;
            }
            var _ = e.charCodeAt(r + f);
            if (_ !== n.charCodeAt(o + f)) break;
            47 === _ && (d = f);
        }
        var h = '';
        for (f = r + d + 1; f <= i; ++f) (f === i || 47 === e.charCodeAt(f)) && (0 === h.length ? (h += '..') : (h += '/..'));
        return h.length > 0 ? h + n.slice(o + d) : ((o += d), 47 === n.charCodeAt(o) && ++o, n.slice(o));
    },
    _makeLong: function (e) {
        return e;
    },
    dirname: function (e) {
        if ((a(e), 0 === e.length)) return '.';
        for (var n = e.charCodeAt(0), r = 47 === n, i = -1, s = !0, o = e.length - 1; o >= 1; --o)
            if (47 === (n = e.charCodeAt(o))) {
                if (!s) {
                    i = o;
                    break;
                }
            } else s = !1;
        return -1 === i ? (r ? '/' : '.') : r && 1 === i ? '//' : e.slice(0, i);
    },
    basename: function (e, n) {
        if (void 0 !== n && 'string' != typeof n) throw TypeError('"ext" argument must be a string');
        a(e);
        var r,
            i = 0,
            s = -1,
            o = !0;
        if (void 0 !== n && n.length > 0 && n.length <= e.length) {
            if (n.length === e.length && n === e) return '';
            var l = n.length - 1,
                u = -1;
            for (r = e.length - 1; r >= 0; --r) {
                var c = e.charCodeAt(r);
                if (47 === c) {
                    if (!o) {
                        i = r + 1;
                        break;
                    }
                } else -1 === u && ((o = !1), (u = r + 1)), l >= 0 && (c === n.charCodeAt(l) ? -1 == --l && (s = r) : ((l = -1), (s = u)));
            }
            return i === s ? (s = u) : -1 === s && (s = e.length), e.slice(i, s);
        }
        for (r = e.length - 1; r >= 0; --r)
            if (47 === e.charCodeAt(r)) {
                if (!o) {
                    i = r + 1;
                    break;
                }
            } else -1 === s && ((o = !1), (s = r + 1));
        return -1 === s ? '' : e.slice(i, s);
    },
    extname: function (e) {
        a(e);
        for (var n = -1, r = 0, i = -1, s = !0, o = 0, l = e.length - 1; l >= 0; --l) {
            var u = e.charCodeAt(l);
            if (47 === u) {
                if (!s) {
                    r = l + 1;
                    break;
                }
                continue;
            }
            -1 === i && ((s = !1), (i = l + 1)), 46 === u ? (-1 === n ? (n = l) : 1 !== o && (o = 1)) : -1 !== n && (o = -1);
        }
        return -1 === n || -1 === i || 0 === o || (1 === o && n === i - 1 && n === r + 1) ? '' : e.slice(n, i);
    },
    format: function (e) {
        if (null === e || 'object' != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
        return o('/', e);
    },
    parse: function (e) {
        a(e);
        var n,
            r = {
                root: '',
                dir: '',
                base: '',
                ext: '',
                name: ''
            };
        if (0 === e.length) return r;
        var i = e.charCodeAt(0),
            s = 47 === i;
        s ? ((r.root = '/'), (n = 1)) : (n = 0);
        for (var o = -1, l = 0, u = -1, c = !0, d = e.length - 1, f = 0; d >= n; --d) {
            if (47 === (i = e.charCodeAt(d))) {
                if (!c) {
                    l = d + 1;
                    break;
                }
                continue;
            }
            -1 === u && ((c = !1), (u = d + 1)), 46 === i ? (-1 === o ? (o = d) : 1 !== f && (f = 1)) : -1 !== o && (f = -1);
        }
        return -1 === o || -1 === u || 0 === f || (1 === f && o === u - 1 && o === l + 1) ? -1 !== u && (0 === l && s ? (r.base = r.name = e.slice(1, u)) : (r.base = r.name = e.slice(l, u))) : (0 === l && s ? ((r.name = e.slice(1, o)), (r.base = e.slice(1, u))) : ((r.name = e.slice(l, o)), (r.base = e.slice(l, u))), (r.ext = e.slice(o, u))), l > 0 ? (r.dir = e.slice(0, l - 1)) : s && (r.dir = '/'), r;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
(l.posix = l), (e.exports = l);
