n.d(t, {
    $Q: function () {
        return m;
    },
    Ev: function () {
        return p;
    },
    Gy: function () {
        return v;
    },
    R5: function () {
        return A;
    },
    T: function () {
        return f;
    },
    Us: function () {
        return g;
    },
    Zl: function () {
        return S;
    },
    vu: function () {
        return T;
    }
});
var r = n(735250);
n(470079);
var i = n(952265),
    a = n(359110),
    o = n(314897),
    s = n(88751),
    l = n(427679),
    u = n(513449),
    c = n(930180),
    d = n(981631),
    _ = n(602091);
function E(e) {
    let t = o.default.getId(),
        n = s.ZP.isModerator(t, e.id),
        r = l.Z.isLive(e.id);
    n && !r ? f(e) : n && r && h(e);
}
function f(e, t) {
    (0, i.ZD)(
        async () => {
            let { default: t } = await n.e('24753').then(n.bind(n, 581355));
            return (n) =>
                (0, r.jsx)(t, {
                    ...n,
                    channel: e
                });
        },
        { contextKey: t === d.IlC.POPOUT ? _.u1 : _.z1 }
    );
}
function h(e) {
    (0, i.ZD)(async () => {
        let { default: t } = await n.e('84686').then(n.bind(n, 665111));
        return (n) =>
            (0, r.jsx)(t, {
                ...n,
                channel: e
            });
    });
}
function p(e, t) {
    (0, i.ZD)(
        async () => {
            let { default: t } = await n.e('2634').then(n.bind(n, 548841));
            return (n) =>
                (0, r.jsx)(t, {
                    ...n,
                    channel: e
                });
        },
        { contextKey: t === d.IlC.POPOUT ? _.u1 : _.z1 }
    );
}
function m(e) {}
function I(e) {
    (0, a.Kh)(e.id);
}
function T(e, t) {
    (0, i.ZD)(async () => {
        let { default: i } = await n.e('1906').then(n.bind(n, 854510));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                channel: e,
                onAccept: t
            });
    });
}
function g(e, t) {
    (0, i.ZD)(
        async () => {
            let { default: t } = await n.e('85885').then(n.bind(n, 124779));
            return (n) =>
                (0, r.jsx)(t, {
                    ...n,
                    channel: e
                });
        },
        { contextKey: t === d.IlC.POPOUT ? _.u1 : _.z1 }
    );
}
function S(e) {
    let t = o.default.getId(),
        n = (0, c.Z7)(e);
    return !s.ZP.isModerator(t, e) && n > 0;
}
function A(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    t !== e.id && (0, u.Ku)(!0), I(e), t !== e.id && n && E(e);
}
function v(e, t) {
    return (
        (0, i.ZD)(async () => {
            let { default: i } = await n.e('65045').then(n.bind(n, 143782));
            return (n) =>
                (0, r.jsx)(i, {
                    channel: e,
                    onConfirm: t,
                    ...n
                });
        }),
        !0
    );
}
