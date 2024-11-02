r.d(t, {
    M5: function () {
        return u;
    },
    _I: function () {
        return I;
    },
    m7: function () {
        return l;
    },
    m8: function () {
        return E;
    },
    q4: function () {
        return c;
    },
    uf: function () {
        return s;
    }
});
var n = r(394798),
    a = r(622916),
    _ = r(263449),
    o = r(255768);
let i = [];
function E(e) {
    let t;
    let r = e.defaultIntegrations || [],
        a = e.integrations;
    r.forEach((e) => {
        e.isDefaultInstance = !0;
    });
    let _ = (function (e) {
            let t = {};
            return (
                e.forEach((e) => {
                    let { name: r } = e,
                        n = t[r];
                    if (!n || !!n.isDefaultInstance || !e.isDefaultInstance) t[r] = e;
                }),
                Object.values(t)
            );
        })((t = Array.isArray(a) ? [...r, ...a] : 'function' == typeof a ? (0, n.lE)(a(r)) : r)),
        o = _.findIndex((e) => 'Debug' === e.name);
    if (o > -1) {
        let [e] = _.splice(o, 1);
        _.push(e);
    }
    return _;
}
function c(e, t) {
    let r = {};
    return (
        t.forEach((t) => {
            t && l(e, t, r);
        }),
        r
    );
}
function s(e, t) {
    for (let r of t) r && r.afterAllSetup && r.afterAllSetup(e);
}
function l(e, t, r) {
    if (r[t.name]) {
        o.X && a.kg.log(`Integration skipped because it was already installed: ${t.name}`);
        return;
    }
    if (((r[t.name] = t), -1 === i.indexOf(t.name) && 'function' == typeof t.setupOnce && (t.setupOnce(), i.push(t.name)), t.setup && 'function' == typeof t.setup && t.setup(e), 'function' == typeof t.preprocessEvent)) {
        let r = t.preprocessEvent.bind(t);
        e.on('preprocessEvent', (t, n) => r(t, n, e));
    }
    if ('function' == typeof t.processEvent) {
        let r = t.processEvent.bind(t),
            n = Object.assign((t, n) => r(t, n, e), { id: t.name });
        e.addEventProcessor(n);
    }
    o.X && a.kg.log(`Integration installed: ${t.name}`);
}
function u(e) {
    let t = (0, _.s3)();
    if (!t) {
        o.X && a.kg.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
        return;
    }
    t.addIntegration(e);
}
function I(e) {
    return e;
}
