s.d(n, {
    Z: function () {
        return M;
    }
}), s(653041);
var t = s(735250), l = s(470079), i = s(442837), a = s(481060), r = s(139387), o = s(230711), d = s(213459), u = s(434404), c = s(430824), E = s(496675), g = s(981631), m = s(689938);
function M(e) {
    let {
            user: n,
            guildId: s,
            channel: M,
            context: f
        } = e, _ = c.Z.getGuild(s), N = (0, i.e7)([E.Z], () => null != _ ? E.Z.can(g.Plq.MANAGE_GUILD, _) : null), h = (0, d.em)(M, !0, !0), I = (0, d.PL)(!0, !0), {
            isUserApp: Z,
            isGuildApp: A
        } = l.useMemo(() => {
            var e, s, t, l;
            if ((null == n ? void 0 : n.id) == null)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let i = Object.values(null !== (t = null === (e = h.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {}), a = Object.values(null !== (l = null === (s = I.result) || void 0 === s ? void 0 : s.sections) && void 0 !== l ? l : {});
            return {
                isGuildApp: i.some(e => {
                    var s;
                    return (null === (s = e.descriptor.application) || void 0 === s ? void 0 : s.id) === (null == n ? void 0 : n.id);
                }),
                isUserApp: a.some(e => {
                    var s;
                    return (null === (s = e.descriptor.application) || void 0 === s ? void 0 : s.id) === (null == n ? void 0 : n.id);
                })
            };
        }, [
            h,
            I,
            null == n ? void 0 : n.id
        ]), p = l.useCallback(() => {
            if ((null == _ ? void 0 : _.id) != null)
                u.Z.open(_.id, g.pNK.INTEGRATIONS), r.Z.setSection(g.b4C.APPLICATION, null == n ? void 0 : n.id);
        }, [
            null == n ? void 0 : n.id,
            null == _ ? void 0 : _.id
        ]), S = l.useCallback(() => {
            o.Z.open(g.oAB.AUTHORIZED_APPS);
        }, []), v = f === g.IlC.POPOUT;
    if (!(null == n ? void 0 : n.bot) || !N || v || !A && !Z)
        return null;
    let C = [];
    return A && C.push((0, t.jsx)(a.MenuItem, {
        id: 'manage-integration',
        label: m.Z.Messages.MANAGE_INTEGRATION,
        action: p
    }, 'manage-integration')), Z && C.push((0, t.jsx)(a.MenuItem, {
        id: 'manage-authorized-app',
        label: m.Z.Messages.MANAGE_AUTHORIZED_APP,
        action: S
    }, 'manage-authorized-app')), C;
}
