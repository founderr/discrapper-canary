n.d(t, {
    Hs: function () {
        return g;
    },
    Vh: function () {
        return b;
    },
    k: function () {
        return m;
    },
    ny: function () {
        return I;
    }
});
var r = n(192379),
    i = n(149765),
    a = n(442837),
    s = n(911969),
    o = n(160404),
    l = n(695346),
    u = n(131704),
    c = n(314897),
    d = n(592125),
    f = n(271383),
    _ = n(496675),
    p = n(594174),
    h = n(981631);
function m(e, t) {
    var n, r, i, a, s;
    let _;
    let h = null != (_ = e instanceof u.Sf && e.isThread() ? (null !== (i = d.Z.getChannel(e.parent_id)) && void 0 !== i ? i : e) : e) ? I(_) : void 0,
        m = l.xM.getSetting(),
        g = c.default.getId(),
        b = null !== (a = null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== a && a,
        S = null != h && null !== (s = null === (r = f.ZP.getMember(h, g)) || void 0 === r ? void 0 : r.roles) && void 0 !== s ? s : [],
        T = o.Z.isViewingRoles(h),
        { computedPermissions: y, hasBaseAccessPermissions: A, hasSendMessagesPermission: N } = v(_, e instanceof u.Sf && e.isThread());
    return {
        context: _,
        userId: g,
        roleIds: S,
        isImpersonating: T,
        commandTypes: t,
        computedPermissions: y,
        hasBaseAccessPermissions: A,
        hasSendMessagesPermission: N,
        allowNsfw: E(_, b, m)
    };
}
function g(e, t) {
    let n = r.useMemo(() => {
            if (e instanceof u.Sf && e.isThread()) {
                var t;
                return null !== (t = d.Z.getChannel(e.parent_id)) && void 0 !== t ? t : e;
            }
            return e;
        }, [e]),
        i = null != n ? I(n) : void 0,
        s = l.xM.useSetting(),
        _ = (0, a.e7)([c.default], () => c.default.getId()),
        h = (0, a.e7)([p.default], () => {
            var e, t;
            return null !== (t = null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t;
        }),
        m = (0, a.Wu)([f.ZP], () => {
            var e, t;
            return null != i && null !== (t = null === (e = f.ZP.getMember(i, _)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : [];
        }),
        g = (0, a.e7)([o.Z], () => o.Z.isViewingRoles(i));
    return r.useMemo(() => {
        let { computedPermissions: r, hasBaseAccessPermissions: i, hasSendMessagesPermission: a } = v(n, e instanceof u.Sf && e.isThread());
        return {
            context: n,
            userId: _,
            roleIds: m,
            commandTypes: t,
            isImpersonating: g,
            computedPermissions: r,
            hasBaseAccessPermissions: i,
            hasSendMessagesPermission: a,
            allowNsfw: E(n, h, s)
        };
    }, [t, n, g, m, _, h, s, e]);
}
function E(e, t, n) {
    return !!t && (!(e instanceof u.Sf) || (null != e.guild_id ? e.nsfw : n));
}
function v(e, t) {
    let n, r;
    if ((e instanceof u.Sf && e.isPrivate()) || null == e)
        return {
            computedPermissions: i.vB(0),
            hasBaseAccessPermissions: !0,
            hasSendMessagesPermission: !0
        };
    let a = _.Z.computePermissions(e);
    return (
        i.e$(a, h.Plq.ADMINISTRATOR) ? ((n = !0), (r = !0)) : e instanceof u.Sf ? ((n = i.e$(a, h.Plq.VIEW_CHANNEL) && i.e$(a, h.Plq.USE_APPLICATION_COMMANDS)), (r = t ? i.e$(a, h.Plq.SEND_MESSAGES_IN_THREADS) : i.e$(a, h.Plq.SEND_MESSAGES))) : ((n = i.e$(a, h.Plq.VIEW_CHANNEL)), (r = !0)),
        {
            computedPermissions: a,
            hasBaseAccessPermissions: n,
            hasSendMessagesPermission: r
        }
    );
}
function b(e, t) {
    return e instanceof u.Sf && (null == e ? void 0 : e.guild_id) == null ? ((null == e ? void 0 : e.type) === h.d4z.DM && (null == e ? void 0 : e.getRecipientId()) === t ? s.D.BOT_DM : s.D.PRIVATE_CHANNEL) : s.D.GUILD;
}
function I(e) {
    return e instanceof u.Sf ? e.guild_id : e.id;
}
