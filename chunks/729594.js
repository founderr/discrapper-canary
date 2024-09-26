var r = n(890308);
function i() {
    (this.protocol = null), (this.slashes = null), (this.auth = null), (this.host = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.query = null), (this.pathname = null), (this.path = null), (this.href = null);
}
var a = /^([a-z0-9.+-]+:)/i,
    o = /:[0-9]*$/,
    s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    l = ["'"].concat(['{', '}', '|', '\\', '^', '`'].concat(['<', '>', '"', '`', ' ', '\r', '\n', '\t'])),
    u = ['%', '/', '?', ';', '#'].concat(l),
    c = ['/', '?', '#'],
    d = 255,
    _ = /^[+a-z0-9A-Z_-]{0,63}$/,
    E = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    f = {
        javascript: !0,
        'javascript:': !0
    },
    h = {
        javascript: !0,
        'javascript:': !0
    },
    p = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        'http:': !0,
        'https:': !0,
        'ftp:': !0,
        'gopher:': !0,
        'file:': !0
    },
    m = n(684083);
function I(e, t, n) {
    if (e && 'object' == typeof e && e instanceof i) return e;
    var r = new i();
    return r.parse(e, t, n), r;
}
function T(e) {
    return ('string' == typeof e && (e = I(e)), e instanceof i) ? e.format() : i.prototype.format.call(e);
}
function g(e, t) {
    return I(e, !1, !0).resolve(t);
}
function S(e, t) {
    return e ? I(e, !1, !0).resolveObject(t) : t;
}
(i.prototype.parse = function (e, t, n) {
    if ('string' != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var i = e.indexOf('?'),
        o = -1 !== i && i < e.indexOf('#') ? '?' : '#',
        I = e.split(o),
        T = /\\/g;
    I[0] = I[0].replace(T, '/');
    var g = (e = I.join(o));
    if (((g = g.trim()), !n && 1 === e.split('#').length)) {
        var S = s.exec(g);
        if (S) return (this.path = g), (this.href = g), (this.pathname = S[1]), S[2] ? ((this.search = S[2]), t ? (this.query = m.parse(this.search.substr(1))) : (this.query = this.search.substr(1))) : t && ((this.search = ''), (this.query = {})), this;
    }
    var A = a.exec(g);
    if (A) {
        var v = (A = A[0]).toLowerCase();
        (this.protocol = v), (g = g.substr(A.length));
    }
    if (n || A || g.match(/^\/\/[^@/]+@[^@/]+/)) {
        var N = '//' === g.substr(0, 2);
        N && !(A && h[A]) && ((g = g.substr(2)), (this.slashes = !0));
    }
    if (!h[A] && (N || (A && !p[A]))) {
        for (var O, R, C = -1, y = 0; y < c.length; y++) {
            var L = g.indexOf(c[y]);
            -1 !== L && (-1 === C || L < C) && (C = L);
        }
        -1 !== (R = -1 === C ? g.lastIndexOf('@') : g.lastIndexOf('@', C)) && ((O = g.slice(0, R)), (g = g.slice(R + 1)), (this.auth = decodeURIComponent(O))), (C = -1);
        for (var y = 0; y < u.length; y++) {
            var L = g.indexOf(u[y]);
            -1 !== L && (-1 === C || L < C) && (C = L);
        }
        -1 === C && (C = g.length), (this.host = g.slice(0, C)), (g = g.slice(C)), this.parseHost(), (this.hostname = this.hostname || '');
        var b = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
        if (!b) {
            for (var D = this.hostname.split(/\./), y = 0, M = D.length; y < M; y++) {
                var P = D[y];
                if (!!P) {
                    if (!P.match(_)) {
                        for (var U = '', w = 0, x = P.length; w < x; w++) P.charCodeAt(w) > 127 ? (U += 'x') : (U += P[w]);
                        if (!U.match(_)) {
                            var G = D.slice(0, y),
                                k = D.slice(y + 1),
                                B = P.match(E);
                            B && (G.push(B[1]), k.unshift(B[2])), k.length && (g = '/' + k.join('.') + g), (this.hostname = G.join('.'));
                            break;
                        }
                    }
                }
            }
        }
        this.hostname.length > d ? (this.hostname = '') : (this.hostname = this.hostname.toLowerCase()), !b && (this.hostname = r.toASCII(this.hostname));
        var F = this.port ? ':' + this.port : '',
            Z = this.hostname || '';
        (this.host = Z + F), (this.href += this.host), b && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), '/' !== g[0] && (g = '/' + g));
    }
    if (!f[v])
        for (var y = 0, M = l.length; y < M; y++) {
            var V = l[y];
            if (-1 !== g.indexOf(V)) {
                var H = encodeURIComponent(V);
                H === V && (H = escape(V)), (g = g.split(V).join(H));
            }
        }
    var Y = g.indexOf('#');
    -1 !== Y && ((this.hash = g.substr(Y)), (g = g.slice(0, Y)));
    var j = g.indexOf('?');
    if ((-1 !== j ? ((this.search = g.substr(j)), (this.query = g.substr(j + 1)), t && (this.query = m.parse(this.query)), (g = g.slice(0, j))) : t && ((this.search = ''), (this.query = {})), g && (this.pathname = g), p[v] && this.hostname && !this.pathname && (this.pathname = '/'), this.pathname || this.search)) {
        var F = this.pathname || '',
            W = this.search || '';
        this.path = F + W;
    }
    return (this.href = this.format()), this;
}),
    (i.prototype.format = function () {
        var e = this.auth || '';
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ':') + '@');
        var t = this.protocol || '',
            n = this.pathname || '',
            r = this.hash || '',
            i = !1,
            a = '';
        this.host ? (i = e + this.host) : this.hostname && ((i = e + (-1 === this.hostname.indexOf(':') ? this.hostname : '[' + this.hostname + ']')), this.port && (i += ':' + this.port)),
            this.query &&
                'object' == typeof this.query &&
                Object.keys(this.query).length &&
                (a = m.stringify(this.query, {
                    arrayFormat: 'repeat',
                    addQueryPrefix: !1
                }));
        var o = this.search || (a && '?' + a) || '';
        return (
            t && ':' !== t.substr(-1) && (t += ':'),
            this.slashes || ((!t || p[t]) && !1 !== i) ? ((i = '//' + (i || '')), n && '/' !== n.charAt(0) && (n = '/' + n)) : !i && (i = ''),
            r && '#' !== r.charAt(0) && (r = '#' + r),
            o && '?' !== o.charAt(0) && (o = '?' + o),
            (n = n.replace(/[?#]/g, function (e) {
                return encodeURIComponent(e);
            })),
            t + i + n + (o = o.replace('#', '%23')) + r
        );
    }),
    (i.prototype.resolve = function (e) {
        return this.resolveObject(I(e, !1, !0)).format();
    }),
    (i.prototype.resolveObject = function (e) {
        if ('string' == typeof e) {
            var t = new i();
            t.parse(e, !1, !0), (e = t);
        }
        for (var n = new i(), r = Object.keys(this), a = 0; a < r.length; a++) {
            var o = r[a];
            n[o] = this[o];
        }
        if (((n.hash = e.hash), '' === e.href)) return (n.href = n.format()), n;
        if (e.slashes && !e.protocol) {
            for (var s = Object.keys(e), l = 0; l < s.length; l++) {
                var u = s[l];
                'protocol' !== u && (n[u] = e[u]);
            }
            return p[n.protocol] && n.hostname && !n.pathname && ((n.pathname = '/'), (n.path = n.pathname)), (n.href = n.format()), n;
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!p[e.protocol]) {
                for (var c = Object.keys(e), d = 0; d < c.length; d++) {
                    var _ = c[d];
                    n[_] = e[_];
                }
                return (n.href = n.format()), n;
            }
            if (((n.protocol = e.protocol), e.host || h[e.protocol])) n.pathname = e.pathname;
            else {
                for (var E = (e.pathname || '').split('/'); E.length && !(e.host = E.shift()); );
                !e.host && (e.host = ''), !e.hostname && (e.hostname = ''), '' !== E[0] && E.unshift(''), E.length < 2 && E.unshift(''), (n.pathname = E.join('/'));
            }
            if (((n.search = e.search), (n.query = e.query), (n.host = e.host || ''), (n.auth = e.auth), (n.hostname = e.hostname || e.host), (n.port = e.port), n.pathname || n.search)) {
                var f = n.pathname || '',
                    m = n.search || '';
                n.path = f + m;
            }
            return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
        }
        var I = n.pathname && '/' === n.pathname.charAt(0),
            T = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
            g = T || I || (n.host && e.pathname),
            S = g,
            A = (n.pathname && n.pathname.split('/')) || [],
            E = (e.pathname && e.pathname.split('/')) || [],
            v = n.protocol && !p[n.protocol];
        if ((v && ((n.hostname = ''), (n.port = null), n.host && ('' === A[0] ? (A[0] = n.host) : A.unshift(n.host)), (n.host = ''), e.protocol && ((e.hostname = null), (e.port = null), e.host && ('' === E[0] ? (E[0] = e.host) : E.unshift(e.host)), (e.host = null)), (g = g && ('' === E[0] || '' === A[0]))), T)) (n.host = e.host || '' === e.host ? e.host : n.host), (n.hostname = e.hostname || '' === e.hostname ? e.hostname : n.hostname), (n.search = e.search), (n.query = e.query), (A = E);
        else if (E.length) !A && (A = []), A.pop(), (A = A.concat(E)), (n.search = e.search), (n.query = e.query);
        else if (null != e.search) {
            if (v) {
                (n.host = A.shift()), (n.hostname = n.host);
                var N = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
                N && ((n.auth = N.shift()), (n.hostname = N.shift()), (n.host = n.hostname));
            }
            return (n.search = e.search), (n.query = e.query), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')), (n.href = n.format()), n;
        }
        if (!A.length) return (n.pathname = null), n.search ? (n.path = '/' + n.search) : (n.path = null), (n.href = n.format()), n;
        for (var O = A.slice(-1)[0], R = ((n.host || e.host || A.length > 1) && ('.' === O || '..' === O)) || '' === O, C = 0, y = A.length; y >= 0; y--) '.' === (O = A[y]) ? A.splice(y, 1) : '..' === O ? (A.splice(y, 1), C++) : C && (A.splice(y, 1), C--);
        if (!g && !S) for (; C--; C) A.unshift('..');
        g && '' !== A[0] && (!A[0] || '/' !== A[0].charAt(0)) && A.unshift(''), R && '/' !== A.join('/').substr(-1) && A.push('');
        var L = '' === A[0] || (A[0] && '/' === A[0].charAt(0));
        if (v) {
            (n.hostname = L ? '' : A.length ? A.shift() : ''), (n.host = n.hostname);
            var N = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
            N && ((n.auth = N.shift()), (n.hostname = N.shift()), (n.host = n.hostname));
        }
        return (g = g || (n.host && A.length)) && !L && A.unshift(''), A.length > 0 ? (n.pathname = A.join('/')) : ((n.pathname = null), (n.path = null)), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')), (n.auth = e.auth || n.auth), (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
    }),
    (i.prototype.parseHost = function () {
        var e = this.host,
            t = o.exec(e);
        t && (':' !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))), e && (this.hostname = e);
    }),
    (t.parse = I),
    (t.resolve = g),
    (t.resolveObject = S),
    (t.format = T),
    (t.Url = i);
