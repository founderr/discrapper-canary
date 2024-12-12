r.d(n, {
    Aq: function () {
        return T;
    },
    GB: function () {
        return E;
    },
    J5: function () {
        return p;
    },
    UI: function () {
        return d;
    },
    Wu: function () {
        return v;
    },
    bp: function () {
        return I;
    },
    g0: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(585483),
    l = r(830917),
    u = r(919570),
    c = r(981631);
let d = new o.b(),
    f = s.createContext({
        appContext: c.IlC.APP,
        renderWindow: window,
        windowDispatch: d,
        windowId: (0, l.UU)()
    }),
    _ = new Map();
function h(e, n) {
    let r = (0, l.ZY)(n),
        i = _.get(r);
    return (
        null == i &&
            ((i = {
                appContext: e,
                renderWindow: n,
                windowDispatch: new o.b(),
                windowId: r
            }),
            _.set(r, i),
            n.addEventListener('unload', () => {
                _.delete(r);
            })),
        i
    );
}
function p(e) {
    var n;
    let r = e.ownerDocument.defaultView;
    if (null == r) return;
    let i = (0, l.ZY)(r);
    return null === (n = _.get(i)) || void 0 === n ? void 0 : n.windowDispatch;
}
function m() {
    var e;
    let n = (0, u.GR)();
    return null == n ? null : null !== (e = _.get(n)) && void 0 !== e ? e : null;
}
function g(e) {
    return _.get(e);
}
function E() {
    let e = m();
    return null != e ? e.appContext : null;
}
function v(e) {
    let { appContext: n, renderWindow: r, children: i } = e,
        s = h(n, r);
    return (0, a.jsx)(f.Provider, {
        value: s,
        children: i
    });
}
function I() {
    return s.useContext(f).appContext;
}
function T() {
    return s.useContext(f).windowDispatch;
}
n.ZP = f;
