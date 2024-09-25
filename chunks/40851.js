n.d(t, {
    Aq: function () {
        return g;
    },
    GB: function () {
        return m;
    },
    J5: function () {
        return f;
    },
    UI: function () {
        return c;
    },
    Wu: function () {
        return I;
    },
    bp: function () {
        return T;
    },
    g0: function () {
        return p;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(585483),
    s = n(830917),
    l = n(919570),
    u = n(981631);
let c = new o.b(),
    d = a.createContext({
        appContext: u.IlC.APP,
        renderWindow: window,
        windowDispatch: c,
        windowId: (0, s.UU)()
    }),
    _ = new Map();
function E(e, t) {
    let n = (0, s.ZY)(t),
        r = _.get(n);
    return (
        null == r &&
            ((r = {
                appContext: e,
                renderWindow: t,
                windowDispatch: new o.b(),
                windowId: n
            }),
            _.set(n, r),
            t.addEventListener('unload', () => {
                _.delete(n);
            })),
        r
    );
}
function f(e) {
    var t;
    let n = e.ownerDocument.defaultView;
    if (null == n) return;
    let r = (0, s.ZY)(n);
    return null === (t = _.get(r)) || void 0 === t ? void 0 : t.windowDispatch;
}
function h() {
    var e;
    let t = (0, l.GR)();
    return null == t ? null : null !== (e = _.get(t)) && void 0 !== e ? e : null;
}
function p(e) {
    return _.get(e);
}
function m() {
    let e = h();
    return null != e ? e.appContext : null;
}
function I(e) {
    let { appContext: t, renderWindow: n, children: r } = e,
        a = E(t, n);
    return (0, i.jsx)(d.Provider, {
        value: a,
        children: r
    });
}
function T() {
    return a.useContext(d).appContext;
}
function g() {
    return a.useContext(d).windowDispatch;
}
t.ZP = d;
