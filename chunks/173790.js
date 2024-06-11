"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("411104");
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("127255"),
  a = n("361213"),
  o = n("778569"),
  l = n("682864"),
  u = n("783097"),
  d = n("377658"),
  _ = n("387658"),
  c = n("536650"),
  E = n("675993"),
  I = n("564446");

function T(e) {
  let {
    channel: t,
    application: n,
    sectionName: s
  } = e, a = (0, u.isEmbeddedApp)({
    application: n
  });
  if (!(0, u.isRealApplication)(n)) throw Error("AppLauncherApplicationViewScreen was passed the Built-in App, which is not supported.");
  return (0, i.jsxs)(r.ScrollerNone, {
    className: I.container,
    fade: !0,
    children: [(0, i.jsx)(a ? h : A, {
      application: n
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)(d.default, {
        application: n,
        className: I.activityIcon,
        width: 80,
        height: 80
      })
    }), (0, i.jsx)(l.default, {
      size: 54
    }), (0, i.jsx)(a ? f : S, {
      channel: t,
      application: n,
      sectionName: s
    }), (0, i.jsx)(_.default, {
      channel: t,
      application: n
    })]
  })
}

function f(e) {
  let {
    channel: t,
    application: n,
    sectionName: r
  } = e, l = (0, s.default)({
    guildId: t.getGuildId(),
    channel: t
  }).find(e => e.activity.application_id === n.id), u = (0, o.default)({
    applicationId: n.id,
    size: 2048,
    names: ["embedded_cover"]
  }), d = null != l && null != l.activity.activity_preview_video_asset_id ? (0, a.default)(n.id, l.activity.activity_preview_video_asset_id) : null;
  return (0, i.jsx)(E.default, {
    channel: t,
    application: n,
    imageCoverUrl: u.url,
    videoUrl: d,
    sectionName: r
  })
}

function S(e) {
  let {
    channel: t,
    application: n,
    sectionName: r
  } = e;
  return (0, i.jsx)(E.default, {
    channel: t,
    application: n,
    sectionName: r
  })
}

function h(e) {
  let {
    application: t
  } = e, n = (0, o.default)({
    applicationId: t.id,
    size: 2048,
    names: ["embedded_background"]
  });
  return (0, i.jsx)(c.default, {
    application: t,
    imageUrl: n.url
  })
}

function A(e) {
  let {
    application: t
  } = e;
  return (0, i.jsx)(c.default, {
    application: t
  })
}