n.d(t, {
    Gw: function () {
        return p;
    },
    Ob: function () {
        return _;
    },
    XJ: function () {
        return h;
    }
}),
    n(47120);
var r = n(192379),
    i = n(149765),
    a = n(442837),
    s = n(601964),
    o = n(496675),
    l = n(594174),
    u = n(85243),
    c = n(231338);
let d = {
        canCreateExpressions: !1,
        canCreateGuildEvent: !1,
        canManageAllExpressions: !1,
        canManageAllEvents: !1,
        canManageGuildExpression: () => !1,
        canManageGuildEvent: () => !1
    },
    f = (e, t, n, r) => {
        if (null == e) return !1;
        if (n) return !0;
        if ('creator_id' in e) return r && null != t && e.creator_id === t.id;
        if ('userId' in e) return r && null != t && e.userId === t.id;
        if ('user' in e) {
            var i;
            return r && null != t && (null === (i = e.user) || void 0 === i ? void 0 : i.id) === t.id;
        }
        return !1;
    },
    _ = (e) => {
        if (null == e) return [c.Pl.CREATE_EVENTS, c.Pl.MANAGE_EVENTS];
        let t = u.TT;
        return e.isGuildStageVoice() ? (t = u.LK) : e.isGuildVoice() && (t = u.AN), [i.$e(t, c.Pl.CREATE_EVENTS), i.$e(t, c.Pl.MANAGE_EVENTS)];
    },
    h = (e) => {
        let [t, n] = e instanceof s.ZP ? [c.Pl.CREATE_EVENTS, c.Pl.MANAGE_EVENTS] : _(e),
            [i, u, h, p] = (0, a.Wu)([o.Z], () => [o.Z.can(c.Pl.CREATE_GUILD_EXPRESSIONS, e), o.Z.can(c.Pl.MANAGE_GUILD_EXPRESSIONS, e), o.Z.can(t, e), o.Z.can(n, e)]),
            m = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
            g = r.useCallback((e) => f(e, m, u, i), [i, u, m]),
            E = r.useCallback((e) => f(e, m, p, h), [p, h, m]);
        return null == e
            ? d
            : {
                  canCreateExpressions: i,
                  canCreateGuildEvent: h,
                  canManageAllExpressions: u,
                  canManageAllEvents: p,
                  canManageGuildExpression: g,
                  canManageGuildEvent: E
              };
    },
    p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
            [r, i] = e instanceof s.ZP ? [c.Pl.CREATE_EVENTS, c.Pl.MANAGE_EVENTS] : _(e),
            a = t.can(c.Pl.CREATE_GUILD_EXPRESSIONS, e),
            u = t.can(c.Pl.MANAGE_GUILD_EXPRESSIONS, e),
            h = t.can(r, e),
            p = t.can(i, e),
            m = n.getCurrentUser();
        return null == e
            ? d
            : {
                  canCreateExpressions: a,
                  canCreateGuildEvent: h,
                  canManageAllExpressions: u,
                  canManageAllEvents: p,
                  canManageGuildExpression: (e) => f(e, m, u, a),
                  canManageGuildEvent: (e) => f(e, m, p, h)
              };
    };
