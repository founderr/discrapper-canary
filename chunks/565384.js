r.d(n, {
    Ez: function () {
        return p;
    },
    Ps: function () {
        return c;
    },
    Xo: function () {
        return _;
    },
    dT: function () {
        return f;
    },
    dw: function () {
        return d;
    },
    k$: function () {
        return h;
    }
});
var i = r(47120);
var a = r(65400),
    s = r(990547),
    o = r(731965);
let l = Object.freeze({
        debugTrackedData: null,
        impressions: []
    }),
    u = (0, a.F)((e) => l),
    c = (e) => {
        (0, o.j)(() => {
            u.setState((n) => ({
                impressions: [...n.impressions, e]
            }));
        });
    },
    d = (e) => {
        (0, o.j)(() => {
            u.setState((n) => ({ impressions: n.impressions.filter((n) => n.sequenceId !== e.sequenceId) }));
        });
    },
    f = (e, n) => {
        (0, o.j)(() => {
            u.setState(() => ({
                debugTrackedData: {
                    name: e,
                    ...n
                }
            }));
        });
    },
    _ = u;
function h() {
    let e = {};
    return (
        u.getState().impressions.forEach((n) => {
            n.type === s.ImpressionTypes.PAGE ? (e.page = n.name) : (e.section = n.name);
        }),
        e
    );
}
function p() {
    return u.getState().impressions;
}
