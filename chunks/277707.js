n.d(t, {
  e: function() {
    return i
  }
});
var s = n(689938);

function i(e) {
  let {
    isVoiceChannel: t,
    isHubGuild: n,
    isOwnInvite: i,
    isGuest: l,
    isStage: a,
    isStream: r
  } = e;
  if (t) {
    if (i) {
      if (r) return s.Z.Messages.INVITE_BUTTON_TITLE_INVITER_STREAM;
      if (a) return s.Z.Messages.INVITE_BUTTON_TITLE_INVITER_STAGE_CHANNEL;
      else if (l) return s.Z.Messages.GUEST_INVITE_EMBED_TITLE_SENDER;
      else return s.Z.Messages.INVITE_BUTTON_TITLE_INVITER_VOICE_CHANNEL
    }
    if (r) return s.Z.Messages.INVITE_BUTTON_TITLE_INVITED_STREAM;
    if (a) return s.Z.Messages.INVITE_BUTTON_TITLE_INVITED_STAGE_CHANNEL;
    else if (l) return s.Z.Messages.GUEST_INVITE_EMBED_TITLE_RECEIVER;
    else return s.Z.Messages.INVITE_BUTTON_TITLE_INVITED_VOICE_CHANNEL
  }
  return n ? i ? s.Z.Messages.INVITE_BUTTON_TITLE_INVITER_HUB : s.Z.Messages.INVITE_BUTTON_TITLE_INVITED_HUB : i ? s.Z.Messages.INVITE_BUTTON_TITLE_INVITER : s.Z.Messages.INVITE_BUTTON_TITLE_INVITED
}