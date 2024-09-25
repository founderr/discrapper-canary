var r, i, a;
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    X5: function () {
        return s;
    },
    a8: function () {
        return r;
    },
    h8: function () {
        return i;
    },
    xQ: function () {
        return a;
    }
});
class s {
    constructor(e) {
        o(this, 'id', void 0), o(this, 'text', void 0), (this.id = e), (this.text = e);
    }
}
!(function (e) {
    (e.UP = 'UP'), (e.DOWN = 'DOWN');
})(r || (r = {})),
    !(function (e) {
        (e.GUILD = 'GUILD'), (e.TEXT_CHANNEL = 'TEXT_CHANNEL'), (e.GROUP_DM = 'GROUP_DM'), (e.VOICE_CHANNEL = 'VOICE_CHANNEL'), (e.USER = 'USER'), (e.HEADER = 'HEADER'), (e.APPLICATION = 'APPLICATION'), (e.SKU = 'SKU'), (e.LINK = 'LINK'), (e.IN_APP_NAVIGATION = 'IN_APP_NAVIGATION');
    })(i || (i = {})),
    !(function (e) {
        (e.USER = '@'), (e.TEXT_CHANNEL = '#'), (e.VOICE_CHANNEL = '!'), (e.GUILD = '*'), (e.APPLICATION = '$');
    })(a || (a = {}));
