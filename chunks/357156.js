n.d(t, {
    G: function () {
        return p;
    },
    X: function () {
        return h;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(149765),
    o = n(442837),
    s = n(601964),
    l = n(496675),
    u = n(594174),
    c = n(85243),
    d = n(231338);
let _ = {
        canCreateExpressions: !1,
        canCreateGuildEvent: !1,
        canManageAllExpressions: !1,
        canManageAllEvents: !1,
        canManageGuildExpression: () => !1,
        canManageGuildEvent: () => !1
    },
    E = (e, t, n, r) => {
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
    f = (e) => {
        if (null == e) return [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS];
        let t = c.TT;
        return e.isGuildStageVoice() ? (t = c.LK) : e.isGuildVoice() && (t = c.AN), [a.$e(t, d.Pl.CREATE_EVENTS), a.$e(t, d.Pl.MANAGE_EVENTS)];
    },
    h = (e) => {
        let [t, n] = e instanceof s.ZP ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : f(e),
            [r, a, c, h] = (0, o.Wu)([l.Z], () => [l.Z.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e), l.Z.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e), l.Z.can(t, e), l.Z.can(n, e)]),
            p = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
            m = i.useCallback((e) => E(e, p, a, r), [r, a, p]),
            I = i.useCallback((e) => E(e, p, h, c), [h, c, p]);
        return null == e
            ? _
            : {
                  canCreateExpressions: r,
                  canCreateGuildEvent: c,
                  canManageAllExpressions: a,
                  canManageAllEvents: h,
                  canManageGuildExpression: m,
                  canManageGuildEvent: I
              };
    },
    p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
            [r, i] = e instanceof s.ZP ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : f(e),
            a = t.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e),
            o = t.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e),
            c = t.can(r, e),
            h = t.can(i, e),
            p = n.getCurrentUser();
        return null == e
            ? _
            : {
                  canCreateExpressions: a,
                  canCreateGuildEvent: c,
                  canManageAllExpressions: o,
                  canManageAllEvents: h,
                  canManageGuildExpression: (e) => E(e, p, o, a),
                  canManageGuildEvent: (e) => E(e, p, h, c)
              };
    };
