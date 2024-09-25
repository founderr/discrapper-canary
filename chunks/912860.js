n.d(t, {
    b: function () {
        return c;
    }
});
var r,
    i = n(836560);
let a = 160,
    o = 500;
!(function (e) {
    (e.VERTICAL = 'vertical'), (e.HORIZONTAL = 'horizontal');
})(r || (r = {}));
let s = {
    open: !1,
    orientation: null
};
function l() {
    try {
        return window.outerWidth - window.innerWidth;
    } catch (e) {
        return 0;
    }
}
function u() {
    try {
        return window.outerHeight - window.innerHeight;
    } catch (e) {
        return 0;
    }
}
class c extends i.EventEmitter {
    get orientations() {
        return Object.values(r);
    }
    get state() {
        return s;
    }
    check() {
        let e = l() > a,
            t = u() > a,
            n = e ? 'vertical' : 'horizontal';
        if (!(t && e) && (e || t)) {
            let e = s.open;
            (s = {
                open: !0,
                orientation: n
            }),
                (!e || s.orientation !== n) && this.emit('changed', s);
        } else s.open && ((s.open = !1), this.emit('changed', s));
    }
    constructor() {
        super(), setInterval(() => this.check(), o);
    }
}
