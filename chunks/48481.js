n.d(t, {
    Uc: function () {
        return h;
    },
    ac: function () {
        return T;
    },
    cv: function () {
        return g;
    },
    d5: function () {
        return I;
    },
    i7: function () {
        return O;
    },
    kI: function () {
        return m;
    },
    re: function () {
        return A;
    },
    tU: function () {
        return y;
    },
    u0: function () {
        return N;
    },
    uL: function () {
        return R;
    },
    xU: function () {
        return S;
    },
    xt: function () {
        return C;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(653041);
var o = n(647943),
    s = n(581282),
    l = n(392711),
    u = n.n(l),
    c = n(377108),
    d = n(524437),
    _ = n(397696),
    E = n(526761),
    f = n(981631);
let h = { readerFactory: (e) => new o.o(e, new TextDecoder('utf-8')) },
    p = {
        [E.yP.PRELOADED_USER_SETTINGS]: d.o8,
        [E.yP.FRECENCY_AND_FAVORITES_SETTINGS]: c.ji
    };
function m(e, t) {
    return null != t && e in p ? I(p[e], t) : null;
}
function I(e, t) {
    if (null == t) return null;
    let n = (0, s.c)(t);
    try {
        return e.fromBinary(n, h);
    } catch (e) {
        throw Error('Settings proto failed to deserialize (potentially corrupt): '.concat(e));
    }
}
function T(e) {
    return I(d.o8, e);
}
function g(e, t) {
    return S(p[e], t);
}
function S(e, t) {
    return (0, s.m)(e.toBinary(t));
}
function A(e, t, n) {
    for (let e in ((t = { ...t }), n)) delete t[e];
    return e.mergePartial(t, n), t;
}
function v(e, t, n) {
    return null == e.guilds && (e.guilds = d.os.create()), N(e.guilds, t, n);
}
function N(e, t, n) {
    return (null == t || 'null' === t) && (t = f.aIL), !(t in e.guilds) && (e.guilds[t] = d.C4.create()), n(e.guilds[t]);
}
function O(e, t, n, r) {
    return v(e, t, (e) => R(e, n, r));
}
function R(e, t, n) {
    return !(t in e.channels) && (e.channels[t] = d.p5.create()), n(e.channels[t]);
}
function C(e, t) {
    null == e.versions && (e.versions = _.L.create());
    let n = 0;
    for (let e of t) {
        if (e.version <= n) throw Error('Migrations are out of order or there is a duplicate version');
        n = e.version;
    }
    let r = 0.1 > Math.random(),
        i = !1,
        a = [];
    for (let n of t) {
        var o, s;
        if (n.version <= e.versions.clientVersion) {
            r && (null === (o = n.cleanup) || void 0 === o || o.call(n));
            continue;
        }
        let t = n.run(e);
        if (((e.versions.clientVersion = n.version), !1 === t)) {
            null === (s = n.cleanup) || void 0 === s || s.call(n);
            continue;
        }
        (i = !0), null != n.cleanup && a.push(n.cleanup);
    }
    return {
        proto: e,
        isDirty: i,
        cleanupFuncs: a
    };
}
function y(e, t) {
    let n = Object.entries(e);
    if (n.length > t)
        for (
            n = u()
                .sortBy(n, (e) => {
                    let [t, n] = e;
                    return n.recentUses[n.recentUses.length - 1];
                })
                .reverse();
            n.length > t;

        )
            n.pop();
    let r = {};
    for (let [e, t] of n) {
        let n = c._F.create();
        (n.frecency = t.frecency), (n.recentUses = t.recentUses.filter((e) => null != e && e > 0).map(String)), (n.score = Math.round(t.score)), (n.totalUses = t.totalUses), (r[e] = n);
    }
    return r;
}
