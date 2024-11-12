n.r(t),
    n.d(t, {
        assign: function () {
            return p;
        },
        batchedUpdates: function () {
            return f;
        },
        colorNames: function () {
            return u;
        },
        createStringInterpolator: function () {
            return r;
        },
        frameLoop: function () {
            return o;
        },
        now: function () {
            return l;
        },
        requestAnimationFrame: function () {
            return d;
        },
        skipAnimation: function () {
            return c;
        },
        to: function () {
            return i;
        },
        willAdvance: function () {
            return _;
        }
    });
var r,
    i,
    a = n(19784),
    s = n(217348),
    o = new a.V(),
    l = function () {
        return performance.now();
    },
    u = null,
    c = !1,
    d =
        'undefined' != typeof window
            ? window.requestAnimationFrame
            : function () {
                  return -1;
              },
    f = function (e) {
        return e();
    },
    _ = s.ZT,
    p = function (e) {
        var t;
        return (
            (i = (t = Object.assign(
                {
                    to: i,
                    now: l,
                    frameLoop: o,
                    colorNames: u,
                    skipAnimation: c,
                    createStringInterpolator: r,
                    requestAnimationFrame: d,
                    batchedUpdates: f,
                    willAdvance: _
                },
                (function (e) {
                    var t = {};
                    for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                    return t;
                })(e)
            )).to),
            (l = t.now),
            (o = t.frameLoop),
            (u = t.colorNames),
            (c = t.skipAnimation),
            (r = t.createStringInterpolator),
            (d = t.requestAnimationFrame),
            (f = t.batchedUpdates),
            (_ = t.willAdvance),
            t
        );
    };
