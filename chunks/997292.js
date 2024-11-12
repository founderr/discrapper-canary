e.d(t, {
    r: function () {
        return C;
    }
});
var i = e(106351),
    l = e(475179),
    o = e(816782),
    r = e(358221),
    u = e(221292),
    a = e(687158),
    d = e(433355),
    E = e(592125),
    s = e(944486),
    c = e(914010),
    _ = e(981631);
let C = {
    binds: ['mod+u'],
    comboKeysBindGlobal: !0,
    action() {
        let n = c.Z.getGuildId(),
            t = s.Z.getChannelId(n),
            e = E.Z.getChannel(t);
        if (null != t && null != e && e.type === i.d.GUILD_VOICE) return l.Z.updateChatOpen(t, !r.Z.getChatOpen(t)), !1;
        if (null != t && null != e && e.type === i.d.DM) {
            let n = d.ZP.getSection(t, null == e ? void 0 : e.isDM()),
                i = (0, a.Of)(e.getRecipientId()),
                l = n === _.ULH.PROFILE;
            return (
                (0, u.TY)({
                    displayProfile: i,
                    isProfileOpen: !l
                }),
                o.Z.toggleProfilePanelSection(),
                !1
            );
        }
        return o.Z.toggleMembersSection(), !1;
    }
};
