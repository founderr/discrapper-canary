n.d(t, {
    $7: function () {
        return j;
    },
    $e: function () {
        return B;
    },
    GJ: function () {
        return E;
    },
    Gy: function () {
        return y;
    },
    RD: function () {
        return V;
    },
    RZ: function () {
        return O;
    },
    Tj: function () {
        return Y;
    },
    W: function () {
        return I;
    },
    Wx: function () {
        return C;
    },
    X0: function () {
        return v;
    },
    Yh: function () {
        return Z;
    },
    Yk: function () {
        return F;
    },
    _A: function () {
        return G;
    },
    aq: function () {
        return S;
    },
    cR: function () {
        return P;
    },
    iI: function () {
        return M;
    },
    ik: function () {
        return N;
    },
    kA: function () {
        return R;
    },
    nT: function () {
        return H;
    },
    pM: function () {
        return b;
    },
    yv: function () {
        return U;
    },
    zB: function () {
        return k;
    }
}),
    n(653041);
var r = n(149765),
    i = n(866442),
    a = n(741361),
    s = n(911969),
    o = n(131704),
    l = n(271383),
    u = n(594174),
    c = n(934415),
    d = n(823379),
    f = n(700785),
    _ = n(709054),
    h = n(51144),
    p = n(71080),
    m = n(981631),
    g = n(388032);
function E(e) {
    return r.e$(e.permissions, m.Plq.ADMINISTRATOR);
}
function v(e) {
    var t, n;
    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let s = ((n = e), r.e$(n.permissions, m.Plq.ADMINISTRATOR) ? p.aC.ADMINISTRATOR : p.aC.ROLE);
    return {
        rowType: s,
        colorString: null !== (t = e.colorString) && void 0 !== t ? t : (0, i.Rf)(m.p6O),
        name: e.name,
        id: e.id,
        disabled: E(e) || a,
        key: ''.concat(s, ':').concat(e.id),
        tags: e.tags
    };
}
function I(e, t) {
    let n = E(e) ? 0 : 1,
        r = E(t) ? 0 : 1;
    return n !== r ? n - r : t.position - e.position;
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.intl.string(g.t.gnsna2);
    return [
        {
            rowType: p.aC.EMPTY_STATE,
            colorString: (0, i.Rf)(m.p6O),
            name: e,
            disabled: !0,
            id: 'EMPTY_STATE'
        }
    ];
}
function T(e, t, n, i) {
    let a = u.default.getCurrentUser();
    if (null == a) return !1;
    if (null == e) return a.id !== t;
    let s = e.permissionOverwrites[t];
    return (null == i ? void 0 : i[t]) != null && (s = i[t]), null == s || !r.e$(s.allow, n);
}
function b(e, t) {
    return _.default.castGuildIdAsEveryoneGuildRoleId(e) === t;
}
function y(e, t) {
    return !b(e, t);
}
function A(e, t) {
    return !b(e.id, t.id);
}
function N(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(t)
        .filter((t) => !E(t) && T(n, t.id, r) && A(e, t) && i(t.name))
        .sort(I)
        .map((e) => v(e));
}
function C(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(t)
        .filter((t) => !E(t) && T(n, t.id, i) && A(e, t) && a(t.name))
        .sort(I)
        .map((e) => v(e, r.e$(e.permissions, i)));
}
function R(e, t, n, r, i) {
    var a, s, o, l, u;
    let c = [];
    return 0 === (c = ((a = e), (s = t), (o = n), (l = r), (u = i), Object.values(s).filter((e) => E(e) || (!T(o, e.id, l, u) && A(a, e)))).sort(I).map((e) => v(e))).length ? S(g.intl.string(g.t.nZfHsb)) : c;
}
function O(e, t, n, i, a) {
    var s, o, l, u, c;
    let d = [];
    return 0 ===
        (d = ((s = e),
        (o = t),
        (l = n),
        (u = i),
        (c = a),
        Object.values(o).filter((e) => {
            var t;
            return E(e) || (!T(l, e.id, u, c) && A(s, e)) || r.e$(r.$e(e.permissions, null === (t = l.permissionOverwrites[e.id]) || void 0 === t ? void 0 : t.allow), u);
        }))
            .sort(I)
            .map((e) => v(e, r.e$(e.permissions, i)))).length
        ? S(g.intl.string(g.t.nZfHsb))
        : d;
}
function D(e, t) {
    var n;
    return null !== (n = l.ZP.getNick(t.id, e.id)) && void 0 !== n ? n : h.ZP.getName(e);
}
function L(e, t) {
    return t.isOwner(e);
}
function x(e, t) {
    var n, r, i;
    let a = ((r = e), t.isOwner(r) ? p.aC.OWNER : p.aC.MEMBER);
    return {
        rowType: a,
        name: D(e, t),
        nickname: null !== (n = l.ZP.getNick(t.id, e.id)) && void 0 !== n ? n : null,
        username: h.ZP.getName(e),
        id: e.id,
        avatarURL: e.getAvatarURL(t.id, 24),
        bot: e.bot,
        verifiedBot: e.isVerifiedBot(),
        disabled: ((i = e), t.isOwner(i)),
        key: ''.concat(a, ':').concat(e.id)
    };
}
function w(e, t) {
    return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase());
}
function M(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .map(u.default.getUser)
        .filter(d.lm)
        .filter((e) => !n.isOwner(e) && T(t, e.id, r) && (i(D(e, n)) || i(e.username) || i(e.discriminator)))
        .map((e) => x(e, n))
        .sort(w);
}
function P(e, t, n, r, i) {
    var a, s, o, l, c;
    return ((a = e),
    (s = t),
    (o = n),
    (l = r),
    (c = i),
    a
        .map(u.default.getUser)
        .filter(d.lm)
        .filter((e) => {
            var t;
            return !T(s, e.id, l, c) || ((t = e), o.isOwner(t));
        }))
        .map((e) => x(e, n))
        .sort(w);
}
function k(e, t) {
    switch (e) {
        case p.aC.ROLE:
            return g.intl.string(g.t.ZxoFOD);
        case p.aC.OWNER:
            return g.intl.string(g.t.NWhYJi);
        case p.aC.ADMINISTRATOR:
            return g.intl.string(g.t.dwlcc3);
        case p.aC.MEMBER:
            return t ? g.intl.string(g.t.UAJxZm) : null;
        case p.aC.USER:
            return g.intl.string(g.t.KD6OJC);
        case p.aC.GUILD:
            return g.intl.string(g.t['5qyruL']);
        case p.aC.EMPTY_STATE:
            return null;
    }
}
function U(e) {
    switch (e) {
        case p.aC.ROLE:
            return g.intl.string(g.t['Gzc/a2']);
        case p.aC.OWNER:
            return g.intl.string(g.t.icuNBA);
        case p.aC.ADMINISTRATOR:
            return g.intl.string(g.t.eTmN5e);
        case p.aC.MEMBER:
            return g.intl.string(g.t['Gzc/a2']);
        case p.aC.EMPTY_STATE:
        default:
            return null;
    }
}
function G(e, t, n) {
    let i = e.permissionOverwrites[e.guild_id];
    null == i && (i = f.we(e.guild_id));
    let a = { ...i };
    return (a.deny = r.Od(a.deny, t)), (a.allow = r.Od(a.allow, t)), !n && (a.deny = r.IH(a.deny, t)), a;
}
function B(e, t, n) {
    let r = G(e, t, n);
    (0, a.kY)(e, r.id, r.allow, r.deny);
}
function Z(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let i = e.permissionOverwrites[n.id];
    if (null == i) {
        let i = {
            id: n.id,
            type: s.BN.MEMBER,
            allow: r.IH(f.Hn, t),
            deny: f.Hn
        };
        return (0, a.hw)(e.id, [i], !0);
    }
    {
        let { allow: n, deny: s } = i;
        return (n = r.IH(n, t)), (0, a.kY)(e, i.id, n, s);
    }
}
function F(e, t) {
    if (null == e) return !1;
    let n = e.permissionOverwrites[e.guild_id];
    return (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && r.e$(n.deny, e.accessPermissions);
}
function V(e, t) {
    let n = Object.keys(t);
    return 0 !== n.length && (1 !== n.length || n[0] !== e.id);
}
function H(e, t, n) {
    return e === m.d4z.GUILD_TEXT || e === m.d4z.GUILD_ANNOUNCEMENT ? t : (!(0, o.bw)(e) && e !== m.d4z.GUILD_CATEGORY) || (t && n);
}
function j(e) {
    switch (e) {
        case m.d4z.GUILD_TEXT:
        case m.d4z.GUILD_ANNOUNCEMENT:
            return g.intl.format(g.t.ZDtA0d, {});
        case m.d4z.GUILD_VOICE:
            return g.intl.format(g.t.iZAMt7, {});
        case m.d4z.GUILD_CATEGORY:
            return g.intl.format(g.t.PhnARU, {});
        default:
            return null;
    }
}
function Y(e, t) {
    let n = [];
    return (
        Object.values(e).forEach((e) => {
            let { row: r } = e;
            null != r.id && '' !== r.id && (r.rowType === p.aC.ROLE ? n.push((0, c.rX)(r.id, t)) : r.rowType === p.aC.MEMBER && n.push((0, c.jZ)(r.id, t)));
        }),
        n
    );
}
