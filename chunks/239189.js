r.r(n),
    r.d(n, {
        assign: function () {
            return p;
        },
        batchedUpdates: function () {
            return _;
        },
        colorNames: function () {
            return c;
        },
        createStringInterpolator: function () {
            return i;
        },
        frameLoop: function () {
            return l;
        },
        now: function () {
            return u;
        },
        requestAnimationFrame: function () {
            return f;
        },
        skipAnimation: function () {
            return d;
        },
        to: function () {
            return a;
        },
        willAdvance: function () {
            return h;
        }
    });
var i,
    a,
    s = r(19784),
    o = r(217348),
    l = new s.V(),
    u = function () {
        return performance.now();
    },
    c = null,
    d = !1,
    f =
        'undefined' != typeof window
            ? window.requestAnimationFrame
            : function () {
                  return -1;
              },
    _ = function (e) {
        return e();
    },
    h = o.ZT,
    p = function (e) {
        var n;
        return (
            (a = (n = Object.assign(
                {
                    to: a,
                    now: u,
                    frameLoop: l,
                    colorNames: c,
                    skipAnimation: d,
                    createStringInterpolator: i,
                    requestAnimationFrame: f,
                    batchedUpdates: _,
                    willAdvance: h
                },
                m(e)
            )).to),
            (u = n.now),
            (l = n.frameLoop),
            (c = n.colorNames),
            (d = n.skipAnimation),
            (i = n.createStringInterpolator),
            (f = n.requestAnimationFrame),
            (_ = n.batchedUpdates),
            (h = n.willAdvance),
            n
        );
    };
function m(e) {
    var n = {};
    for (var r in e) void 0 !== e[r] && (n[r] = e[r]);
    return n;
}
