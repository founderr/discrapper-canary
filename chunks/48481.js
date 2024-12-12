r.d(n, {
    Uc: function () {
        return m;
    },
    ac: function () {
        return I;
    },
    cv: function () {
        return T;
    },
    d5: function () {
        return v;
    },
    i7: function () {
        return N;
    },
    kI: function () {
        return E;
    },
    re: function () {
        return y;
    },
    tU: function () {
        return O;
    },
    u0: function () {
        return A;
    },
    uL: function () {
        return C;
    },
    xU: function () {
        return b;
    },
    xt: function () {
        return R;
    }
});
var i = r(411104);
var a = r(47120);
var s = r(653041);
var o = r(647943),
    l = r(581282),
    u = r(392711),
    c = r.n(u),
    d = r(377108),
    f = r(524437),
    _ = r(397696),
    h = r(526761),
    p = r(981631);
let m = { readerFactory: (e) => new o.o(e, new TextDecoder('utf-8')) },
    g = {
        [h.yP.PRELOADED_USER_SETTINGS]: f.o8,
        [h.yP.FRECENCY_AND_FAVORITES_SETTINGS]: d.ji
    };
function E(e, n) {
    return null != n && e in g ? v(g[e], n) : null;
}
function v(e, n) {
    if (null == n) return null;
    let r = (0, l.c)(n);
    try {
        return e.fromBinary(r, m);
    } catch (e) {
        throw Error('Settings proto failed to deserialize (potentially corrupt): '.concat(e));
    }
}
function I(e) {
    return v(f.o8, e);
}
function T(e, n) {
    return b(g[e], n);
}
function b(e, n) {
    return (0, l.m)(e.toBinary(n));
}
function y(e, n, r) {
    for (let e in ((n = { ...n }), r)) delete n[e];
    return e.mergePartial(n, r), n;
}
function S(e, n, r) {
    return null == e.guilds && (e.guilds = f.os.create()), A(e.guilds, n, r);
}
function A(e, n, r) {
    return (null == n || 'null' === n) && (n = p.aIL), !(n in e.guilds) && (e.guilds[n] = f.C4.create()), r(e.guilds[n]);
}
function N(e, n, r, i) {
    return S(e, n, (e) => C(e, r, i));
}
function C(e, n, r) {
    return !(n in e.channels) && (e.channels[n] = f.p5.create()), r(e.channels[n]);
}
function R(e, n) {
    null == e.versions && (e.versions = _.L.create());
    let r = 0;
    for (let e of n) {
        if (e.version <= r) throw Error('Migrations are out of order or there is a duplicate version');
        r = e.version;
    }
    let i = 0.1 > Math.random(),
        a = !1,
        s = [];
    for (let r of n) {
        var o, l;
        if (r.version <= e.versions.clientVersion) {
            i && (null === (o = r.cleanup) || void 0 === o || o.call(r));
            continue;
        }
        let n = r.run(e);
        if (((e.versions.clientVersion = r.version), !1 === n)) {
            null === (l = r.cleanup) || void 0 === l || l.call(r);
            continue;
        }
        (a = !0), null != r.cleanup && s.push(r.cleanup);
    }
    return {
        proto: e,
        isDirty: a,
        cleanupFuncs: s
    };
}
function O(e, n) {
    let r = Object.entries(e);
    if (r.length > n)
        for (
            r = c()
                .sortBy(r, (e) => {
                    let [n, r] = e;
                    return r.recentUses[r.recentUses.length - 1];
                })
                .reverse();
            r.length > n;

        )
            r.pop();
    let i = {};
    for (let [e, n] of r) {
        let r = d._F.create();
        (r.frecency = n.frecency), (r.recentUses = n.recentUses.filter((e) => null != e && e > 0).map(String)), (r.score = Math.round(n.score)), (r.totalUses = n.totalUses), (i[e] = r);
    }
    return i;
}
