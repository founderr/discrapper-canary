var i = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
    a = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
    s = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
    o = r(245413),
    l = r(780177),
    u = r(957578).Buffer;
e.exports = function (e, n) {
    var r,
        c = e.toString(),
        d = c.match(i);
    if (d) {
        var f = 'aes' + d[1],
            _ = u.from(d[2], 'hex'),
            h = u.from(d[3].replace(/[\r\n]/g, ''), 'base64'),
            p = o(n, _.slice(0, 8), parseInt(d[1], 10)).key,
            m = [],
            g = l.createDecipheriv(f, p, _);
        m.push(g.update(h)), m.push(g.final()), (r = u.concat(m));
    } else {
        var E = c.match(s);
        r = u.from(E[2].replace(/[\r\n]/g, ''), 'base64');
    }
    return {
        tag: c.match(a)[1],
        data: r
    };
};
