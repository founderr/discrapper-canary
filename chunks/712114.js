n.d(t, {
  Z: function() {
    return m
  }
});
var l = n(735250),
  i = n(470079),
  s = n(990547),
  a = n(481060),
  r = n(213609),
  o = n(536442),
  c = n(39604),
  u = n(176127),
  d = n(689938),
  h = n(397031);

function m(e) {
  let {
    onOpenClips: t,
    lastClipsSession: n,
    closePopout: m
  } = e;
  return (i.useEffect(() => () => {
    (0, c.eL)()
  }, []), (0, r.Z)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.HOTSPOT,
    properties: {
      hotspot_location: o.v6.CLIPS_CHANNEL_ATTACH_REMINDER
    }
  }), null == n) ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsxs)("div", {
    className: h.recentClipsPopout,
    children: [(0, l.jsx)("div", {
      className: h.thumbnailStackContainer,
      children: (0, l.jsx)(u.Z, {})
    }), (0, l.jsx)(a.Heading, {
      className: h.header,
      color: "header-primary",
      variant: "heading-md/extrabold",
      children: d.Z.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({
        count: n.newClipIds.length
      })
    }), (0, l.jsx)(a.Text, {
      color: "text-normal",
      className: h.__invalid_content,
      variant: "text-sm/medium",
      children: d.Z.Messages.CLIPS_SESSION_ENDED_TOOLTIP_BODY.format({
        applicationName: n.applicationName
      })
    }), (0, l.jsxs)("div", {
      className: h.buttonsContainer,
      children: [(0, l.jsx)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        look: a.Button.Looks.LINK,
        onClick: function() {
          (0, o.Kw)(o.v6.CLIPS_CHANNEL_ATTACH_REMINDER), m()
        },
        children: d.Z.Messages.CLIPS_SESSION_ENDED_TOOLTIP_SECONDARY_CTA
      }), (0, l.jsx)(a.Button, {
        color: a.Button.Colors.BRAND,
        onClick: t,
        children: d.Z.Messages.CLIPS_SESSION_ENDED_TOOLTIP_PRIMARY_CTA
      })]
    })]
  })
}