var n,
    a = r(24033),
    o = r(94567),
    i = r(202234),
    _ = r(624906),
    E = r(620623),
    s = r(722063),
    c = r(883539),
    I = 'prototype',
    u = 'script',
    l = c('IE_PROTO'),
    R = function () {},
    A = function (e) {
        return '<' + u + '>' + e + '</' + u + '>';
    },
    T = function (e) {
        e.write(A('')), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
    },
    d = function () {
        var e,
            t = s('iframe');
        return (t.style.display = 'none'), E.appendChild(t), (t.src = String('java' + u + ':')), (e = t.contentWindow.document).open(), e.write(A('document.F=Object')), e.close(), e.F;
    },
    N = function () {
        try {
            n = new ActiveXObject('htmlfile');
        } catch (e) {}
        N = 'undefined' != typeof document ? (document.domain && n ? T(n) : d()) : T(n);
        for (var e = i.length; e--; ) delete N[I][i[e]];
        return N();
    };
(_[l] = !0),
    (e.exports =
        Object.create ||
        function (e, t) {
            var r;
            return null !== e ? ((R[I] = a(e)), (r = new R()), (R[I] = null), (r[l] = e)) : (r = N()), void 0 === t ? r : o.f(r, t);
        });
