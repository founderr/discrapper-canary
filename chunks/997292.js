e.d(t, {
    r: function () {
        return b;
    }
});
var i = e(106351),
    o = e(475179),
    r = e(816782),
    l = e(358221),
    d = e(221292),
    s = e(687158),
    u = e(433355),
    a = e(592125),
    c = e(944486),
    E = e(914010),
    C = e(981631);
let b = {
    binds: ['mod+u'],
    comboKeysBindGlobal: !0,
    action() {
        let n = E.Z.getGuildId(),
            t = c.Z.getChannelId(n),
            e = a.Z.getChannel(t);
        if (null != t && null != e && e.type === i.d.GUILD_VOICE) return o.Z.updateChatOpen(t, !l.Z.getChatOpen(t)), !1;
        if (null != t && null != e && e.type === i.d.DM) {
            let n = u.ZP.getSection(t, null == e ? void 0 : e.isDM()),
                i = (0, s.Of)(e.getRecipientId()),
                o = n === C.ULH.PROFILE;
            return (
                (0, d.TY)({
                    displayProfile: i,
                    isProfileOpen: !o
                }),
                r.Z.toggleProfilePanelSection(),
                !1
            );
        }
        return r.Z.toggleMembersSection(), !1;
    }
};
