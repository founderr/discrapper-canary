t.d(n, {
    r: function () {
        return A;
    }
});
var i = t(106351),
    o = t(475179),
    l = t(816782),
    E = t(358221),
    r = t(221292),
    a = t(687158),
    u = t(433355),
    d = t(592125),
    s = t(944486),
    _ = t(914010),
    c = t(981631);
let A = {
    binds: ['mod+u'],
    comboKeysBindGlobal: !0,
    action() {
        let e = _.Z.getGuildId(),
            n = s.Z.getChannelId(e),
            t = d.Z.getChannel(n);
        if (null != n && null != t && t.type === i.d.GUILD_VOICE) return o.Z.updateChatOpen(n, !E.Z.getChatOpen(n)), !1;
        if (null != n && null != t && t.type === i.d.DM) {
            let e = u.ZP.getSection(n, null == t ? void 0 : t.isDM()),
                i = (0, a.Of)(t.getRecipientId()),
                o = e === c.ULH.PROFILE;
            return (
                (0, r.TY)({
                    displayProfile: i,
                    isProfileOpen: !o
                }),
                l.Z.toggleProfilePanelSection(),
                !1
            );
        }
        return l.Z.toggleMembersSection(), !1;
    }
};
