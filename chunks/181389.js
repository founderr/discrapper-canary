n.d(t, {
    Jl: function () {
        return a;
    },
    g9: function () {
        return o;
    }
}),
    n(653041);
var r = n(395041);
n(349033);
var i = n(999650);
n(72006);
var l = n(405656);
n(981631);
let s = {
    [i.Qe.FILTER]: r.w,
    [i.Qe.ANSWER]: r.O
};
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = [];
    return (
        Object.keys(e).forEach((n) => {
            let r = e[n];
            t.push({
                strategy: (e, t, r) =>
                    (function (e, t, n, r) {
                        t.findEntityRanges((t) => {
                            let n = t.getEntity();
                            return null !== n && e.getEntity(n).getType() === r;
                        }, n);
                    })(r, e, t, n),
                component: s[r.componentType]
            });
        }),
        t
    );
}
function o(e, t) {
    let { focusOffset: n, anchorOffset: r } = t.getSelection();
    return (0, l.g9)(e, n, r);
}
