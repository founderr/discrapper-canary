var r = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
    i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
    a = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
    s = n(245413),
    o = n(780177),
    l = n(957578).Buffer;
e.exports = function (e, t) {
    var n,
        u = e.toString(),
        c = u.match(r);
    if (c) {
        var d = 'aes' + c[1],
            f = l.from(c[2], 'hex'),
            _ = l.from(c[3].replace(/[\r\n]/g, ''), 'base64'),
            h = s(t, f.slice(0, 8), parseInt(c[1], 10)).key,
            p = [],
            m = o.createDecipheriv(d, h, f);
        p.push(m.update(_)), p.push(m.final()), (n = l.concat(p));
    } else {
        var g = u.match(a);
        n = l.from(g[2].replace(/[\r\n]/g, ''), 'base64');
    }
    return {
        tag: u.match(i)[1],
        data: n
    };
};
