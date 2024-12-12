r.d(n, {
    p: function () {
        return h;
    },
    t: function () {
        return p;
    }
});
var i = r(608748),
    a = r(388388),
    s = r(203731),
    o = 0,
    l = function () {
        return !!o;
    },
    u = 250,
    c = {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    },
    d = ['resize', 'load', 'transitionend', 'animationend', 'animationstart', 'animationiteration', 'keyup', 'keydown', 'mouseup', 'mousedown', 'mouseover', 'mouseout', 'blur', 'focus'],
    f = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    _ = !1,
    h = new ((function () {
        function e() {
            var e = this;
            (this.stopped = !0),
                (this.listener = function () {
                    return e.schedule();
                });
        }
        return (
            (e.prototype.run = function (e) {
                var n = this;
                if ((void 0 === e && (e = u), !_)) {
                    _ = !0;
                    var r = f(e);
                    (0, s.p)(function () {
                        var a = !1;
                        try {
                            a = (0, i.N)();
                        } finally {
                            if (((_ = !1), (e = r - f()), !l())) return;
                            a ? n.run(1000) : e > 0 ? n.run(e) : n.start();
                        }
                    });
                }
            }),
            (e.prototype.schedule = function () {
                this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
                var e = this,
                    n = function () {
                        return e.observer && e.observer.observe(document.body, c);
                    };
                document.body ? n() : a.C.addEventListener('DOMContentLoaded', n);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    d.forEach(function (n) {
                        return a.C.addEventListener(n, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                !this.stopped &&
                    (this.observer && this.observer.disconnect(),
                    d.forEach(function (n) {
                        return a.C.removeEventListener(n, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    p = function (e) {
        !o && e > 0 && h.start(), (o += e) || h.stop();
    };
