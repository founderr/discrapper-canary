r.d(n, {
    Ft: function () {
        return v;
    },
    ML: function () {
        return y;
    },
    ZJ: function () {
        return b;
    },
    mF: function () {
        return i;
    }
});
var i,
    a = r(47120);
var s = r(512722),
    o = r.n(s),
    l = r(373793),
    u = r(149765),
    c = r(911969),
    d = r(399860),
    f = r(131704),
    _ = r(430824),
    h = r(895924),
    p = r(581364),
    m = r(807169),
    g = r(689079),
    E = r(981631);
function v(e, n, r) {
    var i;
    let { context: a, commandTypes: s, allowNsfw: d, computedPermissions: v, userId: S, roleIds: A, isImpersonating: N, hasBaseAccessPermissions: C } = n,
        { applicationAllowedForUser: R, applicationAllowedForChannel: O, isGuildInstalled: D, isUserInstalled: L, commandBotId: x } = r;
    if (!s.includes(e.type)) return 2;
    if (e.nsfw && !d) return 1;
    let w = null != a ? (0, m.Vh)(a, x) : void 0;
    if (null != e.contexts) {
        if (null != w && !e.contexts.includes(w)) return 4;
    } else if (e.inputType === h.iw.BOT && ((!1 === e.dmPermission && w === c.D.BOT_DM) || w === c.D.PRIVATE_CHANNEL)) return 4;
    if (null != e.predicate && a instanceof f.Sf) {
        let n = _.Z.getGuild(a.guild_id);
        if (
            !e.predicate({
                channel: a,
                guild: n
            })
        )
            return 3;
    }
    if (e.applicationId === g.bi.BUILT_IN) return 0;
    let P = null != a ? (0, m.ny)(a) : void 0;
    if (null == P || u.e$(v, E.Plq.ADMINISTRATOR) || (L && (null === (i = e.integration_types) || void 0 === i ? void 0 : i.includes(l.Y.USER_INSTALL)))) return 0;
    if (!C && D && (null == e.integration_types || e.integration_types.includes(l.Y.GUILD_INSTALL))) return 5;
    if (a instanceof f.Sf) {
        o()(void 0 !== O, 'missing applicationAllowedForChannel');
        let n = b(e.permissions, a, P);
        if (T(n) || (!I(n) && T(O))) return 6;
    }
    let M = y(e.permissions, P, S, A, N);
    return I(M) ? 0 : T(M) ? 7 : T(R) || (null != e.defaultMemberPermissions && !(!u.fS(e.defaultMemberPermissions, p.BO) && u.e$(v, e.defaultMemberPermissions))) ? 7 : 0;
}
function I(e) {
    return !0 === e;
}
function T(e) {
    return !1 === e;
}
function b(e, n, r) {
    if (null == e) return null;
    let i = n.id;
    if (n.isThread()) {
        var a;
        i = null !== (a = n.parent_id) && void 0 !== a ? a : n.id;
    }
    let s = e[(0, d.rE)(i, h.Kw.CHANNEL)];
    if (null != s) return s.permission;
    let o = e[(0, d.rE)((0, p.bD)(r), h.Kw.CHANNEL)];
    return null != o ? o.permission : null;
}
function y(e, n, r, i, a) {
    if (null == e) return null;
    if (!a) {
        let n = e[(0, d.rE)(r, h.Kw.USER)];
        if (null != n) return n.permission;
    }
    let s = !1;
    for (let n of i) {
        let r = e[(0, d.rE)(n, h.Kw.ROLE)];
        if (null != r) {
            if (r.permission) return !0;
            s = !0;
        }
    }
    if (s) return !1;
    let o = null != n ? e[(0, d.rE)(n, h.Kw.ROLE)] : null;
    return null != o ? o.permission : null;
}
!(function (e) {
    (e[(e.ALLOWED = 0)] = 'ALLOWED'), (e[(e.NSFW_NOT_ALLOWED = 1)] = 'NSFW_NOT_ALLOWED'), (e[(e.WRONG_COMMAND_TYPE = 2)] = 'WRONG_COMMAND_TYPE'), (e[(e.PREDICATE_FAILED = 3)] = 'PREDICATE_FAILED'), (e[(e.CONTEXT_NOT_ALLOWED = 4)] = 'CONTEXT_NOT_ALLOWED'), (e[(e.MISSING_BASE_PERMISSIONS = 5)] = 'MISSING_BASE_PERMISSIONS'), (e[(e.CHANNEL_DENIED = 6)] = 'CHANNEL_DENIED'), (e[(e.USER_DENIED = 7)] = 'USER_DENIED');
})(i || (i = {}));
