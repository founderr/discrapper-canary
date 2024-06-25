n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(704215),
  l = n(230711),
  a = n(765585),
  r = n(981631),
  o = n(921944),
  c = n(689938),
  u = n(290544);

function d(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, s.jsx)(a.Z, {
    header: c.Z.Messages.SOUNDBOARD_VOLUME_TOOLTIP_HEADER,
    body: c.Z.Messages.SOUNDBOARD_VOLUME_TOOLTIP_BODY,
    tryItText: c.Z.Messages.TAKE_ME_THERE,
    dismissibleContent: i.z.SOUNDBOARD_VOLUME_EDUCATION,
    artClassName: u.art,
    onTryFeature: () => {
      l.Z.open(r.oAB.VOICE), t(o.L.UNKNOWN)
    },
    onClose: () => t(o.L.UNKNOWN),
    shouldUseHorizontalButtons: !0,
    inlineArt: !0
  })
}