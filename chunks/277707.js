n.d(t, {
    e: function () {
        return i;
    }
});
var r = n(689938);
function i(e) {
    let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: a, isStage: o, isStream: s } = e;
    if (t) {
        if (i) {
            if (s) return r.Z.Messages.INVITE_BUTTON_TITLE_INVITER_STREAM;
            if (o) return r.Z.Messages.INVITE_BUTTON_TITLE_INVITER_STAGE_CHANNEL;
            else if (a) return r.Z.Messages.GUEST_INVITE_EMBED_TITLE_SENDER;
            else return r.Z.Messages.INVITE_BUTTON_TITLE_INVITER_VOICE_CHANNEL;
        }
        if (s) return r.Z.Messages.INVITE_BUTTON_TITLE_INVITED_STREAM;
        if (o) return r.Z.Messages.INVITE_BUTTON_TITLE_INVITED_STAGE_CHANNEL;
        else if (a) return r.Z.Messages.GUEST_INVITE_EMBED_TITLE_RECEIVER;
        else return r.Z.Messages.INVITE_BUTTON_TITLE_INVITED_VOICE_CHANNEL;
    }
    return n ? (i ? r.Z.Messages.INVITE_BUTTON_TITLE_INVITER_HUB : r.Z.Messages.INVITE_BUTTON_TITLE_INVITED_HUB) : i ? r.Z.Messages.INVITE_BUTTON_TITLE_INVITER : r.Z.Messages.INVITE_BUTTON_TITLE_INVITED;
}
