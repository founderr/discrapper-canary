r.d(t, {
    M5: function () {
        return I;
    },
    _I: function () {
        return u;
    },
    m7: function () {
        return l;
    },
    m8: function () {
        return i;
    },
    q4: function () {
        return c;
    },
    uf: function () {
        return s;
    }
});
var a = r(394798),
    n = r(622916),
    _ = r(263449),
    o = r(255768);
let E = [];
function i(e) {
    let t;
    let r = e.defaultIntegrations || [],
        n = e.integrations;
    r.forEach((e) => {
        e.isDefaultInstance = !0;
    });
    let _ = (function (e) {
            let t = {};
            return (
                e.forEach((e) => {
                    let { name: r } = e,
                        a = t[r];
                    if (!a || !!a.isDefaultInstance || !e.isDefaultInstance) t[r] = e;
                }),
                Object.values(t)
            );
        })((t = Array.isArray(n) ? [...r, ...n] : 'function' == typeof n ? (0, a.lE)(n(r)) : r)),
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
        o.X && n.kg.log(`Integration skipped because it was already installed: ${t.name}`);
        return;
    }
    if (((r[t.name] = t), -1 === E.indexOf(t.name) && 'function' == typeof t.setupOnce && (t.setupOnce(), E.push(t.name)), t.setup && 'function' == typeof t.setup && t.setup(e), 'function' == typeof t.preprocessEvent)) {
        let r = t.preprocessEvent.bind(t);
        e.on('preprocessEvent', (t, a) => r(t, a, e));
    }
    if ('function' == typeof t.processEvent) {
        let r = t.processEvent.bind(t),
            a = Object.assign((t, a) => r(t, a, e), { id: t.name });
        e.addEventProcessor(a);
    }
    o.X && n.kg.log(`Integration installed: ${t.name}`);
}
function I(e) {
    let t = (0, _.s3)();
    if (!t) {
        o.X && n.kg.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
        return;
    }
    t.addIntegration(e);
}
function u(e) {
    return e;
}
