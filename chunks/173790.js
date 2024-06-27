t.d(n, {
  Z: function() {
    return _
  }
}), t(411104);
var i = t(735250),
  l = t(470079),
  a = t(218061),
  r = t(481060),
  s = t(127255),
  o = t(361213),
  c = t(778569),
  u = t(783097),
  d = t(753972),
  m = t(387658),
  p = t(536650),
  E = t(675993),
  h = t(789680);

function _(e) {
  let {
    channel: n,
    application: t,
    sectionName: s
  } = e, o = (0, u.ye)({
    application: t
  });
  if (!(0, u.BQ)(t)) throw Error("AppLauncherApplicationViewScreen was passed the Built-in App, which is not supported.");
  let c = l.useRef(null);
  return (0, i.jsxs)(r.ScrollerNone, {
    className: h.container,
    fade: !0,
    ref: c,
    children: [(0, i.jsx)(p.Z, {
      application: t,
      scrollerRef: c
    }), (0, i.jsx)(d.Z, {
      application: t,
      className: h.appIcon,
      size: 80
    }), (0, i.jsx)(a.Z, {
      size: 54
    }), (0, i.jsx)(o ? N : A, {
      channel: n,
      application: t,
      sectionName: s
    }), (0, i.jsx)(m.Z, {
      channel: n,
      application: t,
      sectionName: s
    })]
  })
}

function N(e) {
  let {
    channel: n,
    application: t,
    sectionName: l
  } = e, a = (0, s.Z)({
    guildId: n.getGuildId(),
    channel: n
  }).find(e => e.activity.application_id === t.id), r = (0, c.Z)({
    applicationId: t.id,
    size: 2048,
    names: ["embedded_cover"]
  }), u = null != a && null != a.activity.activity_preview_video_asset_id ? (0, o.Z)(t.id, a.activity.activity_preview_video_asset_id) : null;
  return (0, i.jsx)(E.Z, {
    channel: n,
    application: t,
    imageCoverUrl: r.url,
    videoUrl: u,
    sectionName: l
  })
}

function A(e) {
  let {
    channel: n,
    application: t,
    sectionName: l
  } = e;
  return (0, i.jsx)(E.Z, {
    channel: n,
    application: t,
    sectionName: l
  })
}