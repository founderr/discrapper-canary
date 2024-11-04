i.d(t, {
    r: function () {
        return a;
    }
});
var o = i(106351),
    r = i(475179),
    E = i(816782),
    e = i(358221),
    s = i(221292),
    d = i(687158),
    c = i(433355),
    u = i(592125),
    l = i(944486),
    A = i(914010),
    _ = i(981631);
let a = {
    binds: ['mod+u'],
    comboKeysBindGlobal: !0,
    action() {
        let n = A.Z.getGuildId(),
            t = l.Z.getChannelId(n),
            i = u.Z.getChannel(t);
        if (null != t && null != i && i.type === o.d.GUILD_VOICE) return r.Z.updateChatOpen(t, !e.Z.getChatOpen(t)), !1;
        if (null != t && null != i && i.type === o.d.DM) {
            let n = c.ZP.getSection(t, null == i ? void 0 : i.isDM()),
                o = (0, d.Of)(i.getRecipientId()),
                r = n === _.ULH.PROFILE;
            return (
                (0, s.TY)({
                    displayProfile: o,
                    isProfileOpen: !r
                }),
                E.Z.toggleProfilePanelSection(),
                !1
            );
        }
        return E.Z.toggleMembersSection(), !1;
    }
};
