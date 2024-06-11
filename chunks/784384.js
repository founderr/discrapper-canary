"use strict";
l.r(t), l.d(t, {
  getDestinationIsUnavailable: function() {
    return u
  }
});
var s = l("131704"),
  a = l("496675"),
  n = l("981631"),
  i = l("689938");

function u(e, t, l) {
  let u = l instanceof s.ChannelRecordBase;
  if (t.isNSFW() && !(u && l.isNSFW())) return {
    label: i.default.Messages.MESSAGE_FORWARDING_NSFW_NOT_ALLOWED
  };
  if (u && (0, s.isGuildChannelType)(l.type)) {
    if ((e.attachments.length > 0 || e.messageSnapshots.some(e => e.message.attachments.length > 0)) && !a.default.can(n.Permissions.ATTACH_FILES, l)) return {
      label: i.default.Messages.MESSAGE_CHANNEL_ATTACHMENTS_DISABLED
    };
    if ((e.embeds.length > 0 || e.messageSnapshots.some(e => e.message.embeds.length > 0)) && !a.default.can(n.Permissions.EMBED_LINKS, l)) return {
      label: i.default.Messages.MESSAGE_CHANNEL_EMBEDS_DISABLED
    }
  }
}