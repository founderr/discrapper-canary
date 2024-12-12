r.d(n, {
    NW: function () {
        return s;
    },
    tf: function () {
        return a;
    },
    zH: function () {
        return o;
    }
});
var i = r(192379),
    a = function (e) {
        return (0, i.useEffect)(e, []);
    },
    s = function () {
        var e = (0, i.useState)(0)[1],
            n = (0, i.useRef)(!1);
        return (
            a(function () {
                return function () {
                    n.current = !0;
                };
            }),
            function () {
                !n.current && e({});
            }
        );
    };
function o(e) {
    var n = (0, i.useRef)(void 0);
    return (
        (0, i.useEffect)(function () {
            n.current = e;
        }),
        n.current
    );
}
