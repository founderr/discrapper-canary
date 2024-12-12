(n.parse = o), (n.serialize = l);
var r = decodeURIComponent,
    i = encodeURIComponent,
    a = /; */,
    s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function o(e, n) {
    if ('string' != typeof e) throw TypeError('argument str must be a string');
    var i = {},
        s = n || {},
        o = e.split(a),
        l = s.decode || r;
    return (
        o.forEach(function (e) {
            var n = e.indexOf('=');
            if (!(n < 0)) {
                var r = e.substr(0, n).trim(),
                    a = e.substr(++n, e.length).trim();
                '"' == a[0] && (a = a.slice(1, -1)), void 0 == i[r] && (i[r] = u(a, l));
            }
        }),
        i
    );
}
function l(e, n, r) {
    var a = r || {},
        o = a.encode || i;
    if (!s.test(e)) throw TypeError('argument name is invalid');
    var l = o(n);
    if (l && !s.test(l)) throw TypeError('argument val is invalid');
    var u = [e + '=' + l];
    if (null != a.maxAge) {
        var c = a.maxAge - 0;
        if (isNaN(c)) throw Error('maxAge should be a Number');
        u.push('Max-Age=' + Math.floor(c));
    }
    if (a.domain) {
        if (!s.test(a.domain)) throw TypeError('option domain is invalid');
        u.push('Domain=' + a.domain);
    }
    if (a.path) {
        if (!s.test(a.path)) throw TypeError('option path is invalid');
        u.push('Path=' + a.path);
    }
    return a.expires && u.push('Expires=' + a.expires.toUTCString()), a.httpOnly && u.push('HttpOnly'), a.secure && u.push('Secure'), a.firstPartyOnly && u.push('First-Party-Only'), u.join('; ');
}
function u(e, n) {
    try {
        return n(e);
    } catch (n) {
        return e;
    }
}
