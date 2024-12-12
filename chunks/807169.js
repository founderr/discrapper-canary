r.d(n, {
    Hs: function () {
        return E;
    },
    Vh: function () {
        return T;
    },
    k: function () {
        return g;
    },
    ny: function () {
        return b;
    }
});
var i = r(192379),
    a = r(149765),
    s = r(442837),
    o = r(911969),
    l = r(160404),
    u = r(695346),
    c = r(131704),
    d = r(314897),
    f = r(592125),
    _ = r(271383),
    h = r(496675),
    p = r(594174),
    m = r(981631);
function g(e, n) {
    var r, i, a, s, o;
    let h;
    let m = null != (h = e instanceof c.Sf && e.isThread() ? (null !== (a = f.Z.getChannel(e.parent_id)) && void 0 !== a ? a : e) : e) ? b(h) : void 0,
        g = u.xM.getSetting(),
        E = d.default.getId(),
        T = null !== (s = null === (r = p.default.getCurrentUser()) || void 0 === r ? void 0 : r.nsfwAllowed) && void 0 !== s && s,
        y = null != m && null !== (o = null === (i = _.ZP.getMember(m, E)) || void 0 === i ? void 0 : i.roles) && void 0 !== o ? o : [],
        S = l.Z.isViewingRoles(m),
        { computedPermissions: A, hasBaseAccessPermissions: N, hasSendMessagesPermission: C } = I(h, e instanceof c.Sf && e.isThread());
    return {
        context: h,
        userId: E,
        roleIds: y,
        isImpersonating: S,
        commandTypes: n,
        computedPermissions: A,
        hasBaseAccessPermissions: N,
        hasSendMessagesPermission: C,
        allowNsfw: v(h, T, g)
    };
}
function E(e, n) {
    let r = i.useMemo(() => {
            if (e instanceof c.Sf && e.isThread()) {
                var n;
                return null !== (n = f.Z.getChannel(e.parent_id)) && void 0 !== n ? n : e;
            }
            return e;
        }, [e]),
        a = null != r ? b(r) : void 0,
        o = u.xM.useSetting(),
        h = (0, s.e7)([d.default], () => d.default.getId()),
        m = (0, s.e7)([p.default], () => {
            var e, n;
            return null !== (n = null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== n && n;
        }),
        g = (0, s.Wu)([_.ZP], () => {
            var e, n;
            return null != a && null !== (n = null === (e = _.ZP.getMember(a, h)) || void 0 === e ? void 0 : e.roles) && void 0 !== n ? n : [];
        }),
        E = (0, s.e7)([l.Z], () => l.Z.isViewingRoles(a));
    return i.useMemo(() => {
        let { computedPermissions: i, hasBaseAccessPermissions: a, hasSendMessagesPermission: s } = I(r, e instanceof c.Sf && e.isThread());
        return {
            context: r,
            userId: h,
            roleIds: g,
            commandTypes: n,
            isImpersonating: E,
            computedPermissions: i,
            hasBaseAccessPermissions: a,
            hasSendMessagesPermission: s,
            allowNsfw: v(r, m, o)
        };
    }, [n, r, E, g, h, m, o, e]);
}
function v(e, n, r) {
    return !!n && (!(e instanceof c.Sf) || (null != e.guild_id ? e.nsfw : r));
}
function I(e, n) {
    let r, i;
    if ((e instanceof c.Sf && e.isPrivate()) || null == e)
        return {
            computedPermissions: a.vB(0),
            hasBaseAccessPermissions: !0,
            hasSendMessagesPermission: !0
        };
    let s = h.Z.computePermissions(e);
    return (
        a.e$(s, m.Plq.ADMINISTRATOR) ? ((r = !0), (i = !0)) : e instanceof c.Sf ? ((r = a.e$(s, m.Plq.VIEW_CHANNEL) && a.e$(s, m.Plq.USE_APPLICATION_COMMANDS)), (i = n ? a.e$(s, m.Plq.SEND_MESSAGES_IN_THREADS) : a.e$(s, m.Plq.SEND_MESSAGES))) : ((r = a.e$(s, m.Plq.VIEW_CHANNEL)), (i = !0)),
        {
            computedPermissions: s,
            hasBaseAccessPermissions: r,
            hasSendMessagesPermission: i
        }
    );
}
function T(e, n) {
    return e instanceof c.Sf && (null == e ? void 0 : e.guild_id) == null ? ((null == e ? void 0 : e.type) === m.d4z.DM && (null == e ? void 0 : e.getRecipientId()) === n ? o.D.BOT_DM : o.D.PRIVATE_CHANNEL) : o.D.GUILD;
}
function b(e) {
    return e instanceof c.Sf ? e.guild_id : e.id;
}
