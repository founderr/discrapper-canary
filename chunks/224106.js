var r,
    i = n(28886),
    a = n(930134),
    o = n(459535),
    s = n(511364),
    l = n(439230),
    u = n(535538),
    c = n(964653),
    d = '>',
    _ = '<',
    E = 'prototype',
    f = 'script',
    h = c('IE_PROTO'),
    p = function () {},
    m = function (e) {
        return _ + f + d + e + _ + '/' + f + d;
    },
    I = function (e) {
        e.write(m('')), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
    },
    T = function () {
        var e,
            t = u('iframe'),
            n = 'java' + f + ':';
        return (t.style.display = 'none'), l.appendChild(t), (t.src = String(n)), (e = t.contentWindow.document).open(), e.write(m('document.F=Object')), e.close(), e.F;
    },
    g = function () {
        try {
            r = new ActiveXObject('htmlfile');
        } catch (e) {}
        g = 'undefined' != typeof document ? (document.domain && r ? I(r) : T()) : I(r);
        for (var e = o.length; e--; ) delete g[E][o[e]];
        return g();
    };
(s[h] = !0),
    (e.exports =
        Object.create ||
        function (e, t) {
            var n;
            return null !== e ? ((p[E] = i(e)), (n = new p()), (p[E] = null), (n[h] = e)) : (n = g()), void 0 === t ? n : a.f(n, t);
        });
