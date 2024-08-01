n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(163268),
  r = n(689938);

function l(e, t) {
  return null != t && (0, s.KP)({
type: s.lJ.GenericMedia,
media: t
  }, (0, s.HH)(e)) ? (0, i.jsx)(a.MenuItem, {
id: 'report-image-false-positive',
label: r.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
action: () => {
  (0, a.openModalLazy)(async () => {
    let {
      default: a
    } = await n(788679);
    return n => (0, i.jsx)(a, {
      channelId: e.channel_id,
      messageId: e.id,
      mediaItemUrl: t.url,
      ...n
    });
  });
},
icon: a.ImageWarningIcon
  }, 'report-image-false-positive') : null;
}