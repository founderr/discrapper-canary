n.d(t, {
    $7: function () {
        return Q;
    },
    $e: function () {
        return j;
    },
    GJ: function () {
        return T;
    },
    Gy: function () {
        return R;
    },
    RD: function () {
        return z;
    },
    RZ: function () {
        return P;
    },
    Tj: function () {
        return X;
    },
    W: function () {
        return A;
    },
    Wx: function () {
        return b;
    },
    X0: function () {
        return S;
    },
    Yh: function () {
        return W;
    },
    Yk: function () {
        return K;
    },
    _A: function () {
        return Y;
    },
    aq: function () {
        return v;
    },
    cR: function () {
        return Z;
    },
    iI: function () {
        return B;
    },
    ik: function () {
        return y;
    },
    kA: function () {
        return M;
    },
    nT: function () {
        return q;
    },
    pM: function () {
        return O;
    },
    yv: function () {
        return H;
    },
    zB: function () {
        return V;
    }
});
var r = n(653041);
var i = n(149765),
    a = n(866442),
    o = n(741361),
    s = n(911969),
    l = n(131704),
    u = n(271383),
    c = n(594174),
    d = n(934415),
    _ = n(823379),
    E = n(700785),
    f = n(709054),
    h = n(51144),
    p = n(71080),
    m = n(981631),
    I = n(689938);
function T(e) {
    return i.e$(e.permissions, m.Plq.ADMINISTRATOR);
}
function g(e) {
    return i.e$(e.permissions, m.Plq.ADMINISTRATOR) ? p.aC.ADMINISTRATOR : p.aC.ROLE;
}
function S(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = g(e);
    return {
        rowType: r,
        colorString: null !== (t = e.colorString) && void 0 !== t ? t : (0, a.Rf)(m.p6O),
        name: e.name,
        id: e.id,
        disabled: T(e) || n,
        key: ''.concat(r, ':').concat(e.id),
        tags: e.tags
    };
}
function A(e, t) {
    let n = T(e) ? 0 : 1,
        r = T(t) ? 0 : 1;
    return n !== r ? n - r : t.position - e.position;
}
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;
    return [
        {
            rowType: p.aC.EMPTY_STATE,
            colorString: (0, a.Rf)(m.p6O),
            name: e,
            disabled: !0,
            id: 'EMPTY_STATE'
        }
    ];
}
function N(e, t, n, r) {
    let a = c.default.getCurrentUser();
    if (null == a) return !1;
    if (null == e) return a.id !== t;
    let o = e.permissionOverwrites[t];
    return (null == r ? void 0 : r[t]) != null && (o = r[t]), null == o || !i.e$(o.allow, n);
}
function O(e, t) {
    return f.default.castGuildIdAsEveryoneGuildRoleId(e) === t;
}
function R(e, t) {
    return !O(e, t);
}
function C(e, t) {
    return !O(e.id, t.id);
}
function y(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(t)
        .filter((t) => !T(t) && N(n, t.id, r) && C(e, t) && i(t.name))
        .sort(A)
        .map((e) => S(e));
}
function b(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(t)
        .filter((t) => !T(t) && N(n, t.id, r) && C(e, t) && a(t.name))
        .sort(A)
        .map((e) => S(e, i.e$(e.permissions, r)));
}
function L(e, t, n, r, i) {
    return Object.values(t).filter((t) => T(t) || (!N(n, t.id, r, i) && C(e, t)));
}
function D(e, t, n, r, a) {
    return Object.values(t).filter((t) => {
        var o;
        return T(t) || (!N(n, t.id, r, a) && C(e, t)) || i.e$(i.$e(t.permissions, null === (o = n.permissionOverwrites[t.id]) || void 0 === o ? void 0 : o.allow), r);
    });
}
function M(e, t, n, r, i) {
    let a = [];
    return 0 ===
        (a = L(e, t, n, r, i)
            .sort(A)
            .map((e) => S(e))).length
        ? v(I.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES)
        : a;
}
function P(e, t, n, r, a) {
    let o = [];
    return 0 ===
        (o = D(e, t, n, r, a)
            .sort(A)
            .map((e) => S(e, i.e$(e.permissions, r)))).length
        ? v(I.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES)
        : o;
}
function U(e, t) {
    var n;
    return null !== (n = u.ZP.getNick(t.id, e.id)) && void 0 !== n ? n : h.ZP.getName(e);
}
function w(e, t) {
    return t.isOwner(e);
}
function x(e, t) {
    return t.isOwner(e) ? p.aC.OWNER : p.aC.MEMBER;
}
function G(e, t) {
    var n;
    let r = x(e, t);
    return {
        rowType: r,
        name: U(e, t),
        nickname: null !== (n = u.ZP.getNick(t.id, e.id)) && void 0 !== n ? n : null,
        username: h.ZP.getName(e),
        id: e.id,
        avatarURL: e.getAvatarURL(t.id, 24),
        bot: e.bot,
        verifiedBot: e.isVerifiedBot(),
        disabled: w(e, t),
        key: ''.concat(r, ':').concat(e.id)
    };
}
function k(e, t) {
    return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase());
}
function B(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .map(c.default.getUser)
        .filter(_.lm)
        .filter((e) => !n.isOwner(e) && N(t, e.id, r) && (i(U(e, n)) || i(e.username) || i(e.discriminator)))
        .map((e) => G(e, n))
        .sort(k);
}
function F(e, t, n, r, i) {
    return e
        .map(c.default.getUser)
        .filter(_.lm)
        .filter((e) => !N(t, e.id, r, i) || w(e, n));
}
function Z(e, t, n, r, i) {
    return F(e, t, n, r, i)
        .map((e) => G(e, n))
        .sort(k);
}
function V(e, t) {
    switch (e) {
        case p.aC.ROLE:
            return I.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
        case p.aC.OWNER:
            return I.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
        case p.aC.ADMINISTRATOR:
            return I.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
        case p.aC.MEMBER:
            return t ? I.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
        case p.aC.USER:
            return I.Z.Messages.USER;
        case p.aC.GUILD:
            return I.Z.Messages.SERVER;
        case p.aC.EMPTY_STATE:
            return null;
    }
}
function H(e) {
    switch (e) {
        case p.aC.ROLE:
            return I.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
        case p.aC.OWNER:
            return I.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
        case p.aC.ADMINISTRATOR:
            return I.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
        case p.aC.MEMBER:
            return I.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
        case p.aC.EMPTY_STATE:
        default:
            return null;
    }
}
function Y(e, t, n) {
    let r = e.permissionOverwrites[e.guild_id];
    null == r && (r = E.we(e.guild_id));
    let a = { ...r };
    return (a.deny = i.Od(a.deny, t)), (a.allow = i.Od(a.allow, t)), !n && (a.deny = i.IH(a.deny, t)), a;
}
function j(e, t, n) {
    let r = Y(e, t, n);
    (0, o.kY)(e, r.id, r.allow, r.deny);
}
function W(e, t) {
    let n = c.default.getCurrentUser();
    if (null == n) return;
    let r = e.permissionOverwrites[n.id];
    if (null == r) {
        let r = {
            id: n.id,
            type: s.BN.MEMBER,
            allow: i.IH(E.Hn, t),
            deny: E.Hn
        };
        return (0, o.hw)(e.id, [r], !0);
    }
    {
        let { allow: n, deny: a } = r;
        return (n = i.IH(n, t)), (0, o.kY)(e, r.id, n, a);
    }
}
function K(e, t) {
    if (null == e) return !1;
    let n = e.permissionOverwrites[e.guild_id];
    return (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && i.e$(n.deny, e.accessPermissions);
}
function z(e, t) {
    let n = Object.keys(t);
    return 0 !== n.length && (1 !== n.length || n[0] !== e.id);
}
function q(e, t, n) {
    return e === m.d4z.GUILD_TEXT || e === m.d4z.GUILD_ANNOUNCEMENT ? t : (!(0, l.bw)(e) && e !== m.d4z.GUILD_CATEGORY) || (t && n);
}
function Q(e) {
    switch (e) {
        case m.d4z.GUILD_TEXT:
        case m.d4z.GUILD_ANNOUNCEMENT:
            return I.Z.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
        case m.d4z.GUILD_VOICE:
            return I.Z.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
        case m.d4z.GUILD_CATEGORY:
            return I.Z.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();
        default:
            return null;
    }
}
function X(e, t) {
    let n = [];
    return (
        Object.values(e).forEach((e) => {
            let { row: r } = e;
            null != r.id && '' !== r.id && (r.rowType === p.aC.ROLE ? n.push((0, d.rX)(r.id, t)) : r.rowType === p.aC.MEMBER && n.push((0, d.jZ)(r.id, t)));
        }),
        n
    );
}
