n.d(t, {
    Jl: function () {
        return o;
    },
    g9: function () {
        return s;
    }
}),
    n(653041);
var i = n(395041);
n(349033);
var r = n(999650);
n(72006);
var l = n(405656);
n(981631);
let a = {
    [r.Qe.FILTER]: i.w,
    [r.Qe.ANSWER]: i.O
};
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = [];
    return (
        Object.keys(e).forEach((n) => {
            let i = e[n];
            t.push({
                strategy: (e, t, i) =>
                    (function (e, t, n, i) {
                        t.findEntityRanges((t) => {
                            let n = t.getEntity();
                            return null !== n && e.getEntity(n).getType() === i;
                        }, n);
                    })(i, e, t, n),
                component: a[i.componentType]
            });
        }),
        t
    );
}
function s(e, t) {
    let { focusOffset: n, anchorOffset: i } = t.getSelection();
    return (0, l.g9)(e, n, i);
}
