var i = r(767172),
    a = /%[sdv%]/g,
    s = function (e) {
        var n = 1,
            r = arguments,
            i = r.length;
        return e.replace(a, function (e) {
            if (n >= i) return e;
            var a = r[n];
            switch (((n += 1), e)) {
                case '%%':
                    return '%';
                case '%s':
                    return String(a);
                case '%d':
                    return Number(a);
                case '%v':
                    return '';
            }
        });
    },
    o = function (e, n, r) {
        var i = [e + '=' + (n.format instanceof Function ? n.format(n.push ? r : r[n.name]) : n.format)];
        if (n.names)
            for (var a = 0; a < n.names.length; a += 1) {
                var o = n.names[a];
                n.name ? i.push(r[n.name][o]) : i.push(r[n.names[a]]);
            }
        else i.push(r[n.name]);
        return s.apply(null, i);
    },
    l = ['v', 'o', 's', 'i', 'u', 'e', 'p', 'c', 'b', 't', 'r', 'z', 'a'],
    u = ['i', 'c', 'b', 'a'];
e.exports = function (e, n) {
    (n = n || {}),
        null == e.version && (e.version = 0),
        null == e.name && (e.name = ' '),
        e.media.forEach(function (e) {
            null == e.payloads && (e.payloads = '');
        });
    var r = n.outerOrder || l,
        a = n.innerOrder || u,
        s = [];
    return (
        r.forEach(function (n) {
            i[n].forEach(function (r) {
                r.name in e && null != e[r.name]
                    ? s.push(o(n, r, e))
                    : r.push in e &&
                      null != e[r.push] &&
                      e[r.push].forEach(function (e) {
                          s.push(o(n, r, e));
                      });
            });
        }),
        e.media.forEach(function (e) {
            s.push(o('m', i.m[0], e)),
                a.forEach(function (n) {
                    i[n].forEach(function (r) {
                        r.name in e && null != e[r.name]
                            ? s.push(o(n, r, e))
                            : r.push in e &&
                              null != e[r.push] &&
                              e[r.push].forEach(function (e) {
                                  s.push(o(n, r, e));
                              });
                    });
                });
        }),
        s.join('\r\n') + '\r\n'
    );
};
