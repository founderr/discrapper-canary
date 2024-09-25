n.d(t, {
    Ez: function () {
        return f;
    },
    Ps: function () {
        return u;
    },
    Xo: function () {
        return _;
    },
    dT: function () {
        return d;
    },
    dw: function () {
        return c;
    },
    k$: function () {
        return E;
    }
});
var r = n(47120);
var i = n(652874),
    a = n(990547),
    o = n(731965);
let s = Object.freeze({
        debugTrackedData: null,
        impressions: []
    }),
    l = (0, i.Z)((e) => s),
    u = (e) => {
        (0, o.j)(() => {
            l.setState((t) => ({
                impressions: [...t.impressions, e]
            }));
        });
    },
    c = (e) => {
        (0, o.j)(() => {
            l.setState((t) => ({ impressions: t.impressions.filter((t) => t.sequenceId !== e.sequenceId) }));
        });
    },
    d = (e, t) => {
        (0, o.j)(() => {
            l.setState(() => ({
                debugTrackedData: {
                    name: e,
                    ...t
                }
            }));
        });
    },
    _ = l;
function E() {
    let e = {};
    return (
        l.getState().impressions.forEach((t) => {
            t.type === a.ImpressionTypes.PAGE ? (e.page = t.name) : (e.section = t.name);
        }),
        e
    );
}
function f() {
    return l.getState().impressions;
}
