n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var s = n(852229),
  a = n(481060),
  r = n(626135),
  l = n(572004),
  o = n(981631),
  c = n(689938);

function u(e, t) {
  return l.wS && e.type !== o.uaV.GUILD_INVITE_REMINDER ? (0, i.jsx)(a.MenuItem, {
id: 'copy-link',
label: c.Z.Messages.COPY_MESSAGE_LINK,
icon: a.LinkIcon,
action: () => {
  (0, s.J)(''.concat(location.protocol, '//').concat(location.host).concat(o.Z5c.CHANNEL(t.guild_id, t.id, e.id))), r.default.track(o.rMx.MESSAGE_LINK_COPIED, {
    message_id: e.id,
    channel: e.channel_id
  });
}
  }) : null;
}