var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(481060),
  o = n(368666),
  c = n(14338),
  u = n(546552);
t.Z = i.memo(function(e) {
  let {
    label: t,
    participantCount: n,
    onClick: i,
    className: s,
    collapsed: d,
    speakers: h,
    channel: m,
    isStreamLive: E
  } = e;
  return (0, l.jsxs)(r.Clickable, {
    onClick: i,
    className: a()(u.container, s),
    children: [null == h ? (0, l.jsx)(r.GroupIcon, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.micIcon
    }) : (0, l.jsx)(r.MicrophoneIcon, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.micIcon
    }), (0, l.jsxs)(r.Text, {
      color: "header-primary",
      variant: "text-md/semibold",
      className: u.text,
      children: [t, " — ", n]
    }), d && null != m && null != h && h.length > 0 && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(c.Z, {
        channel: m,
        speakers: h
      }), E && (0, l.jsx)(o.ZP, {})]
    }), (0, l.jsx)(r.ChevronSmallDownIcon, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: a()(u.downIcon, {
        [u.upIcon]: d
      })
    })]
  })
})