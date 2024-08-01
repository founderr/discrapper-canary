n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(163268),
  r = n(689938);

function l(e, t) {
  return null != t && (0, a.KP)({
type: a.lJ.GenericMedia,
media: t
  }, (0, a.HH)(e)) ? (0, i.jsx)(s.MenuItem, {
id: 'report-image-false-positive',
label: r.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
action: () => {
  (0, s.openModalLazy)(async () => {
    let {
      default: s
    } = await n(788679);
    return n => (0, i.jsx)(s, {
      channelId: e.channel_id,
      messageId: e.id,
      mediaItemUrl: t.url,
      ...n
    });
  });
},
icon: s.ImageWarningIcon
  }, 'report-image-false-positive') : null;
}