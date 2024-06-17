"use strict";
n.d(t, {
  Z: function() {
    return I
  }
}), n(411104);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(127255),
  o = n(361213),
  a = n(778569),
  l = n(783097),
  u = n(753972),
  _ = n(387658),
  d = n(536650),
  c = n(675993),
  E = n(564446);

function I(e) {
  let {
    channel: t,
    application: n,
    sectionName: s
  } = e, o = (0, l.ye)({
    application: n
  });
  if (!(0, l.BQ)(n)) throw Error("AppLauncherApplicationViewScreen was passed the Built-in App, which is not supported.");
  return (0, i.jsxs)(r.ScrollerNone, {
    className: E.container,
    fade: !0,
    children: [(0, i.jsx)(o ? S : f, {
      application: n
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)(u.Z, {
        application: n,
        className: E.activityIcon
      })
    }), (0, i.jsx)(r.Spacer, {
      size: 54
    }), (0, i.jsx)(o ? T : h, {
      channel: t,
      application: n,
      sectionName: s
    }), (0, i.jsx)(_.Z, {
      channel: t,
      application: n
    })]
  })
}

function T(e) {
  let {
    channel: t,
    application: n,
    sectionName: r
  } = e, l = (0, s.Z)({
    guildId: t.getGuildId(),
    channel: t
  }).find(e => e.activity.application_id === n.id), u = (0, a.Z)({
    applicationId: n.id,
    size: 2048,
    names: ["embedded_cover"]
  }), _ = null != l && null != l.activity.activity_preview_video_asset_id ? (0, o.Z)(n.id, l.activity.activity_preview_video_asset_id) : null;
  return (0, i.jsx)(c.Z, {
    channel: t,
    application: n,
    imageCoverUrl: u.url,
    videoUrl: _,
    sectionName: r
  })
}

function h(e) {
  let {
    channel: t,
    application: n,
    sectionName: r
  } = e;
  return (0, i.jsx)(c.Z, {
    channel: t,
    application: n,
    sectionName: r
  })
}

function S(e) {
  let {
    application: t
  } = e, n = (0, a.Z)({
    applicationId: t.id,
    size: 2048,
    names: ["embedded_background"]
  });
  return (0, i.jsx)(d.Z, {
    application: t,
    imageUrl: n.url
  })
}

function f(e) {
  let {
    application: t
  } = e;
  return (0, i.jsx)(d.Z, {
    application: t
  })
}