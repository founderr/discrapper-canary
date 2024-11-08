var r = n(890308);
function i() {
    (this.protocol = null), (this.slashes = null), (this.auth = null), (this.host = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.query = null), (this.pathname = null), (this.path = null), (this.href = null);
}
var a = /^([a-z0-9.+-]+:)/i,
    s = /:[0-9]*$/,
    o = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    l = ["'"].concat(['{', '}', '|', '\\', '^', '`'].concat(['<', '>', '"', '`', ' ', '\r', '\n', '\t'])),
    u = ['%', '/', '?', ';', '#'].concat(l),
    c = ['/', '?', '#'],
    d = /^[+a-z0-9A-Z_-]{0,63}$/,
    f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    _ = {
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
function g(e, t, n) {
    if (e && 'object' == typeof e && e instanceof i) return e;
    var r = new i();
    return r.parse(e, t, n), r;
}
i.prototype.parse = function (e, t, n) {
    if ('string' != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var i = e.indexOf('?'),
        s = -1 !== i && i < e.indexOf('#') ? '?' : '#',
        g = e.split(s);
    g[0] = g[0].replace(/\\/g, '/');
    var E = (e = g.join(s));
    if (((E = E.trim()), !n && 1 === e.split('#').length)) {
        var v = o.exec(E);
        if (v) return (this.path = E), (this.href = E), (this.pathname = v[1]), v[2] ? ((this.search = v[2]), t ? (this.query = m.parse(this.search.substr(1))) : (this.query = this.search.substr(1))) : t && ((this.search = ''), (this.query = {})), this;
    }
    var I = a.exec(E);
    if (I) {
        var S = (I = I[0]).toLowerCase();
        (this.protocol = S), (E = E.substr(I.length));
    }
    if (n || I || E.match(/^\/\/[^@/]+@[^@/]+/)) {
        var b = '//' === E.substr(0, 2);
        b && !(I && h[I]) && ((E = E.substr(2)), (this.slashes = !0));
    }
    if (!h[I] && (b || (I && !p[I]))) {
        for (var T, y, A = -1, N = 0; N < c.length; N++) {
            var C = E.indexOf(c[N]);
            -1 !== C && (-1 === A || C < A) && (A = C);
        }
        -1 !== (y = -1 === A ? E.lastIndexOf('@') : E.lastIndexOf('@', A)) && ((T = E.slice(0, y)), (E = E.slice(y + 1)), (this.auth = decodeURIComponent(T))), (A = -1);
        for (var N = 0; N < u.length; N++) {
            var C = E.indexOf(u[N]);
            -1 !== C && (-1 === A || C < A) && (A = C);
        }
        -1 === A && (A = E.length), (this.host = E.slice(0, A)), (E = E.slice(A)), this.parseHost(), (this.hostname = this.hostname || '');
        var R = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
        if (!R) {
            for (var O = this.hostname.split(/\./), N = 0, D = O.length; N < D; N++) {
                var L = O[N];
                if (!!L) {
                    if (!L.match(d)) {
                        for (var x = '', w = 0, M = L.length; w < M; w++) L.charCodeAt(w) > 127 ? (x += 'x') : (x += L[w]);
                        if (!x.match(d)) {
                            var P = O.slice(0, N),
                                k = O.slice(N + 1),
                                U = L.match(f);
                            U && (P.push(U[1]), k.unshift(U[2])), k.length && (E = '/' + k.join('.') + E), (this.hostname = P.join('.'));
                            break;
                        }
                    }
                }
            }
        }
        this.hostname.length > 255 ? (this.hostname = '') : (this.hostname = this.hostname.toLowerCase()), !R && (this.hostname = r.toASCII(this.hostname));
        var G = this.port ? ':' + this.port : '',
            B = this.hostname || '';
        (this.host = B + G), (this.href += this.host), R && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), '/' !== E[0] && (E = '/' + E));
    }
    if (!_[S])
        for (var N = 0, D = l.length; N < D; N++) {
            var Z = l[N];
            if (-1 !== E.indexOf(Z)) {
                var F = encodeURIComponent(Z);
                F === Z && (F = escape(Z)), (E = E.split(Z).join(F));
            }
        }
    var V = E.indexOf('#');
    -1 !== V && ((this.hash = E.substr(V)), (E = E.slice(0, V)));
    var H = E.indexOf('?');
    if ((-1 !== H ? ((this.search = E.substr(H)), (this.query = E.substr(H + 1)), t && (this.query = m.parse(this.query)), (E = E.slice(0, H))) : t && ((this.search = ''), (this.query = {})), E && (this.pathname = E), p[S] && this.hostname && !this.pathname && (this.pathname = '/'), this.pathname || this.search)) {
        var G = this.pathname || '',
            j = this.search || '';
        this.path = G + j;
    }
    return (this.href = this.format()), this;
};
i.prototype.format = function () {
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
    var s = this.search || (a && '?' + a) || '';
    return (
        t && ':' !== t.substr(-1) && (t += ':'),
        this.slashes || ((!t || p[t]) && !1 !== i) ? ((i = '//' + (i || '')), n && '/' !== n.charAt(0) && (n = '/' + n)) : !i && (i = ''),
        r && '#' !== r.charAt(0) && (r = '#' + r),
        s && '?' !== s.charAt(0) && (s = '?' + s),
        (n = n.replace(/[?#]/g, function (e) {
            return encodeURIComponent(e);
        })),
        t + i + n + (s = s.replace('#', '%23')) + r
    );
};
i.prototype.resolve = function (e) {
    return this.resolveObject(g(e, !1, !0)).format();
};
(i.prototype.resolveObject = function (e) {
    if ('string' == typeof e) {
        var t = new i();
        t.parse(e, !1, !0), (e = t);
    }
    for (var n = new i(), r = Object.keys(this), a = 0; a < r.length; a++) {
        var s = r[a];
        n[s] = this[s];
    }
    if (((n.hash = e.hash), '' === e.href)) return (n.href = n.format()), n;
    if (e.slashes && !e.protocol) {
        for (var o = Object.keys(e), l = 0; l < o.length; l++) {
            var u = o[l];
            'protocol' !== u && (n[u] = e[u]);
        }
        return p[n.protocol] && n.hostname && !n.pathname && ((n.pathname = '/'), (n.path = n.pathname)), (n.href = n.format()), n;
    }
    if (e.protocol && e.protocol !== n.protocol) {
        if (!p[e.protocol]) {
            for (var c = Object.keys(e), d = 0; d < c.length; d++) {
                var f = c[d];
                n[f] = e[f];
            }
            return (n.href = n.format()), n;
        }
        if (((n.protocol = e.protocol), e.host || h[e.protocol])) n.pathname = e.pathname;
        else {
            for (var _ = (e.pathname || '').split('/'); _.length && !(e.host = _.shift()); );
            !e.host && (e.host = ''), !e.hostname && (e.hostname = ''), '' !== _[0] && _.unshift(''), _.length < 2 && _.unshift(''), (n.pathname = _.join('/'));
        }
        if (((n.search = e.search), (n.query = e.query), (n.host = e.host || ''), (n.auth = e.auth), (n.hostname = e.hostname || e.host), (n.port = e.port), n.pathname || n.search)) {
            var m = n.pathname || '',
                g = n.search || '';
            n.path = m + g;
        }
        return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
    }
    var E = n.pathname && '/' === n.pathname.charAt(0),
        v = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
        I = v || E || (n.host && e.pathname),
        S = I,
        b = (n.pathname && n.pathname.split('/')) || [],
        _ = (e.pathname && e.pathname.split('/')) || [],
        T = n.protocol && !p[n.protocol];
    if ((T && ((n.hostname = ''), (n.port = null), n.host && ('' === b[0] ? (b[0] = n.host) : b.unshift(n.host)), (n.host = ''), e.protocol && ((e.hostname = null), (e.port = null), e.host && ('' === _[0] ? (_[0] = e.host) : _.unshift(e.host)), (e.host = null)), (I = I && ('' === _[0] || '' === b[0]))), v)) (n.host = e.host || '' === e.host ? e.host : n.host), (n.hostname = e.hostname || '' === e.hostname ? e.hostname : n.hostname), (n.search = e.search), (n.query = e.query), (b = _);
    else if (_.length) !b && (b = []), b.pop(), (b = b.concat(_)), (n.search = e.search), (n.query = e.query);
    else if (null != e.search) {
        if (T) {
            (n.host = b.shift()), (n.hostname = n.host);
            var y = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
            y && ((n.auth = y.shift()), (n.hostname = y.shift()), (n.host = n.hostname));
        }
        return (n.search = e.search), (n.query = e.query), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')), (n.href = n.format()), n;
    }
    if (!b.length) return (n.pathname = null), n.search ? (n.path = '/' + n.search) : (n.path = null), (n.href = n.format()), n;
    for (var A = b.slice(-1)[0], N = ((n.host || e.host || b.length > 1) && ('.' === A || '..' === A)) || '' === A, C = 0, R = b.length; R >= 0; R--) '.' === (A = b[R]) ? b.splice(R, 1) : '..' === A ? (b.splice(R, 1), C++) : C && (b.splice(R, 1), C--);
    if (!I && !S) for (; C--; C) b.unshift('..');
    I && '' !== b[0] && (!b[0] || '/' !== b[0].charAt(0)) && b.unshift(''), N && '/' !== b.join('/').substr(-1) && b.push('');
    var O = '' === b[0] || (b[0] && '/' === b[0].charAt(0));
    if (T) {
        (n.hostname = O ? '' : b.length ? b.shift() : ''), (n.host = n.hostname);
        var y = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
        y && ((n.auth = y.shift()), (n.hostname = y.shift()), (n.host = n.hostname));
    }
    return (I = I || (n.host && b.length)) && !O && b.unshift(''), b.length > 0 ? (n.pathname = b.join('/')) : ((n.pathname = null), (n.path = null)), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')), (n.auth = e.auth || n.auth), (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
}),
    (i.prototype.parseHost = function () {
        var e = this.host,
            t = s.exec(e);
        t && (':' !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))), e && (this.hostname = e);
    }),
    (t.parse = g),
    (t.resolve = function (e, t) {
        return g(e, !1, !0).resolve(t);
    }),
    (t.resolveObject = function (e, t) {
        return e ? g(e, !1, !0).resolveObject(t) : t;
    }),
    (t.format = function (e) {
        return ('string' == typeof e && (e = g(e)), e instanceof i) ? e.format() : i.prototype.format.call(e);
    }),
    (t.Url = i);
