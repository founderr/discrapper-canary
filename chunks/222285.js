r.d(n, {
    jD: function () {
        return o;
    },
    kK: function () {
        return s;
    },
    xj: function () {
        return a;
    },
    zd: function () {
        return i;
    }
});
var i = function (e) {
        return e instanceof SVGElement && 'getBBox' in e;
    },
    a = function (e) {
        if (i(e)) {
            var n = e.getBBox(),
                r = n.width,
                a = n.height;
            return !r && !a;
        }
        var s = e,
            o = s.offsetWidth,
            l = s.offsetHeight;
        return !(o || l || e.getClientRects().length);
    },
    s = function (e) {
        var n,
            r,
            i = null === (r = null === (n = e) || void 0 === n ? void 0 : n.ownerDocument) || void 0 === r ? void 0 : r.defaultView;
        return !!(i && e instanceof i.Element);
    },
    o = function (e) {
        switch (e.tagName) {
            case 'INPUT':
                if ('image' !== e.type) break;
            case 'VIDEO':
            case 'AUDIO':
            case 'EMBED':
            case 'OBJECT':
            case 'CANVAS':
            case 'IFRAME':
            case 'IMG':
                return !0;
        }
        return !1;
    };
