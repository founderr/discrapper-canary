r.d(n, {
    Gw: function () {
        return g;
    },
    Ob: function () {
        return p;
    },
    XJ: function () {
        return m;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(149765),
    o = r(442837),
    l = r(601964),
    u = r(496675),
    c = r(594174),
    d = r(85243),
    f = r(231338);
let _ = {
        canCreateExpressions: !1,
        canCreateGuildEvent: !1,
        canManageAllExpressions: !1,
        canManageAllEvents: !1,
        canManageGuildExpression: () => !1,
        canManageGuildEvent: () => !1
    },
    h = (e, n, r, i) => {
        if (null == e) return !1;
        if (r) return !0;
        if ('creator_id' in e) return i && null != n && e.creator_id === n.id;
        if ('userId' in e) return i && null != n && e.userId === n.id;
        if ('user' in e) {
            var a;
            return i && null != n && (null === (a = e.user) || void 0 === a ? void 0 : a.id) === n.id;
        }
        return !1;
    },
    p = (e) => {
        if (null == e) return [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS];
        let n = d.TT;
        return e.isGuildStageVoice() ? (n = d.LK) : e.isGuildVoice() && (n = d.AN), [s.$e(n, f.Pl.CREATE_EVENTS), s.$e(n, f.Pl.MANAGE_EVENTS)];
    },
    m = (e) => {
        let [n, r] = e instanceof l.ZP ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : p(e),
            [i, s, d, m] = (0, o.Wu)([u.Z], () => [u.Z.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e), u.Z.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e), u.Z.can(n, e), u.Z.can(r, e)]),
            g = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
            E = a.useCallback((e) => h(e, g, s, i), [i, s, g]),
            v = a.useCallback((e) => h(e, g, m, d), [m, d, g]);
        return null == e
            ? _
            : {
                  canCreateExpressions: i,
                  canCreateGuildEvent: d,
                  canManageAllExpressions: s,
                  canManageAllEvents: m,
                  canManageGuildExpression: E,
                  canManageGuildEvent: v
              };
    },
    g = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default,
            [i, a] = e instanceof l.ZP ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : p(e),
            s = n.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e),
            o = n.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e),
            d = n.can(i, e),
            m = n.can(a, e),
            g = r.getCurrentUser();
        return null == e
            ? _
            : {
                  canCreateExpressions: s,
                  canCreateGuildEvent: d,
                  canManageAllExpressions: o,
                  canManageAllEvents: m,
                  canManageGuildExpression: (e) => h(e, g, o, s),
                  canManageGuildEvent: (e) => h(e, g, m, d)
              };
    };
