r.d(n, {
    Fo: function () {
        return _;
    },
    KO: function () {
        return u;
    },
    U8: function () {
        return d;
    },
    WS: function () {
        return f;
    },
    X6: function () {
        return h;
    },
    fi: function () {
        return c;
    }
});
var i,
    a = r(264344),
    s = r.n(a);
let o = parseInt(null !== (i = s().version) && void 0 !== i ? i : '0', 10),
    l = void 0 !== s().ua && s().ua.indexOf('OculusBrowser') > -1,
    u = (() => {
        if (null == window.WebSocket) return !1;
        switch (s().name) {
            case 'IE':
            case 'Microsoft Edge':
                return o >= 15;
            default:
                return !0;
        }
    })(),
    c = l || ('Firefox' === s().name && o >= 80) || ('Chrome' === s().name && o >= 37) || ('Opera' === s().name && o >= 66) || ('Node.js' === s().name && o >= 6) || ('Electron' === s().name && o >= 1) || ('Safari' === s().name && o >= 13) || ('Microsoft Edge' === s().name && o >= 37),
    d = 'Chrome' === s().name || 'Safari' === s().name || ('Firefox' === s().name && o >= 80) || 'Opera' === s().name || 'Microsoft Edge' === s().name,
    f = l || ('Firefox' === s().name && o >= 73) || ('Safari' === s().name && o >= 13) || ('Chrome' === s().name && o >= 80) || ('Microsoft Edge' === s().name && o >= 80),
    _ = ('Chrome' === s().name && o >= 58) || ('Safari' === s().name && o >= 15) || ('Firefox' === s().name && o >= 108),
    h = ('Chrome' === s().name && o >= 72) || ('Safari' === s().name && o >= 11) || ('Opera' === s().name && o >= 60) || ('Microsoft Edge' === s().name && o >= 79);
