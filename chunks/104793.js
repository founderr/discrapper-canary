n.d(t, {
    Ft: function () {
        return E;
    },
    ML: function () {
        return T;
    },
    ZJ: function () {
        return I;
    },
    mF: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a = n(512722),
    s = n.n(a),
    o = n(373793),
    l = n(149765),
    u = n(911969),
    c = n(399860),
    d = n(131704),
    f = n(430824),
    _ = n(895924),
    p = n(581364),
    h = n(807169),
    m = n(689079),
    g = n(981631);
function E(e, t, n) {
    var r;
    let { context: i, commandTypes: a, allowNsfw: c, computedPermissions: E, userId: v, roleIds: b, isImpersonating: S, hasBaseAccessPermissions: y } = t,
        { applicationAllowedForUser: A, applicationAllowedForChannel: N, isGuildInstalled: C, isUserInstalled: R, commandBotId: O } = n;
    if (!a.includes(e.type)) return 2;
    if (e.nsfw && !c) return 1;
    let D = null != i ? (0, h.Vh)(i, O) : void 0;
    if (null != e.contexts) {
        if (null != D && !e.contexts.includes(D)) return 4;
    } else if (e.inputType === _.iw.BOT && ((!1 === e.dmPermission && D === u.D.BOT_DM) || D === u.D.PRIVATE_CHANNEL)) return 4;
    if (null != e.predicate && i instanceof d.Sf) {
        let t = f.Z.getGuild(i.guild_id);
        if (
            !e.predicate({
                channel: i,
                guild: t
            })
        )
            return 3;
    }
    if (e.applicationId === m.bi.BUILT_IN) return 0;
    let L = null != i ? (0, h.ny)(i) : void 0;
    if (null == L || l.e$(E, g.Plq.ADMINISTRATOR) || (R && (null === (r = e.integration_types) || void 0 === r ? void 0 : r.includes(o.Y.USER_INSTALL)))) return 0;
    if (!y && C && (null == e.integration_types || e.integration_types.includes(o.Y.GUILD_INSTALL))) return 5;
    if (i instanceof d.Sf) {
        s()(void 0 !== N, 'missing applicationAllowedForChannel');
        let t = I(e.permissions, i, L);
        if (
            (function (e) {
                return !1 === e;
            })(t) ||
            (!(function (e) {
                return !0 === e;
            })(t) &&
                (function (e) {
                    return !1 === e;
                })(N))
        )
            return 6;
    }
    let x = T(e.permissions, L, v, b, S);
    return (function (e) {
        return !0 === e;
    })(x)
        ? 0
        : (function (e) {
                return !1 === e;
            })(x)
          ? 7
          : (function (e) {
                  return !1 === e;
              })(A) ||
              (null != e.defaultMemberPermissions && !(!l.fS(e.defaultMemberPermissions, p.BO) && l.e$(E, e.defaultMemberPermissions)))
            ? 7
            : 0;
}
function v(e) {
    return !0 === e;
}
function b(e) {
    return !1 === e;
}
function I(e, t, n) {
    if (null == e) return null;
    let r = t.id;
    if (t.isThread()) {
        var i;
        r = null !== (i = t.parent_id) && void 0 !== i ? i : t.id;
    }
    let a = e[(0, c.rE)(r, _.Kw.CHANNEL)];
    if (null != a) return a.permission;
    let s = e[(0, c.rE)((0, p.bD)(n), _.Kw.CHANNEL)];
    return null != s ? s.permission : null;
}
function T(e, t, n, r, i) {
    if (null == e) return null;
    if (!i) {
        let t = e[(0, c.rE)(n, _.Kw.USER)];
        if (null != t) return t.permission;
    }
    let a = !1;
    for (let t of r) {
        let n = e[(0, c.rE)(t, _.Kw.ROLE)];
        if (null != n) {
            if (n.permission) return !0;
            a = !0;
        }
    }
    if (a) return !1;
    let s = null != t ? e[(0, c.rE)(t, _.Kw.ROLE)] : null;
    return null != s ? s.permission : null;
}
((i = r || (r = {}))[(i.ALLOWED = 0)] = 'ALLOWED'), (i[(i.NSFW_NOT_ALLOWED = 1)] = 'NSFW_NOT_ALLOWED'), (i[(i.WRONG_COMMAND_TYPE = 2)] = 'WRONG_COMMAND_TYPE'), (i[(i.PREDICATE_FAILED = 3)] = 'PREDICATE_FAILED'), (i[(i.CONTEXT_NOT_ALLOWED = 4)] = 'CONTEXT_NOT_ALLOWED'), (i[(i.MISSING_BASE_PERMISSIONS = 5)] = 'MISSING_BASE_PERMISSIONS'), (i[(i.CHANNEL_DENIED = 6)] = 'CHANNEL_DENIED'), (i[(i.USER_DENIED = 7)] = 'USER_DENIED');
