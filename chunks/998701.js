n.d(t, {
    c: function () {
        return i;
    }
});
var r,
    i,
    a = n(388032);
((r = i || (i = {}))[(r.GENERAL = 0)] = 'GENERAL'), (r[(r.NO_FILE = 1)] = 'NO_FILE'), (r[(r.PROGRESS = 2)] = 'PROGRESS'), (r[(r.UPLOAD = 3)] = 'UPLOAD'), (r[(r.READ = 4)] = 'READ');
t.Z = class e {
    get displayMessage() {
        switch (this.code) {
            case 1:
                return a.intl.string(a.t.dDMp2d);
            case 2:
                return a.intl.string(a.t.XBxyvr);
            case 3:
                return a.intl.string(a.t['6b6rws']);
            case 4:
                return a.intl.string(a.t.VUc3tr);
            default:
                return a.intl.string(a.t.VzHcSk);
        }
    }
    constructor(e) {
        var t, n, r;
        (t = this),
            (r = void 0),
            (n = 'code') in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r),
            (this.code = e);
    }
};
