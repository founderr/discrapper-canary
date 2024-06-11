"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("780384"),
  d = s("481060"),
  u = s("846027"),
  c = s("131951"),
  S = s("285952"),
  E = s("998502"),
  T = s("210887"),
  _ = s("996073"),
  I = s("526761"),
  N = s("65154"),
  g = s("689938"),
  f = s("611273");
let m = s("651714"),
  A = s("297166");

function C() {
  let {
    experimentalEncoders: e
  } = (0, r.useStateFromStoresObject)([c.default], () => ({
    experimentalEncoders: c.default.getExperimentalEncoders()
  }));
  return "stable" !== E.default.releaseChannel && c.default.isExperimentalEncodersSupported() ? (0, a.jsx)(d.FormSwitch, {
    className: l()(f.marginTop8, f.marginBottom20),
    value: e,
    onChange: e => u.default.setExperimentalEncoders(e),
    disabled: !1,
    children: g.default.Messages.EXPERIMENTAL_ENCODERS
  }) : null
}

function O() {
  let e = (0, r.useStateFromStores)([T.default], () => T.default.theme),
    {
      openH264: t,
      hardwareH264: s,
      supportsOpenH264: i
    } = (0, r.useStateFromStoresObject)([c.default], () => ({
      openH264: c.default.getOpenH264(),
      hardwareH264: c.default.getHardwareH264(),
      supportsOpenH264: c.default.supports(N.Features.OPEN_H264)
    })),
    E = n.useRef(null);
  return (0, _.default)(E, I.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.FormSection, {
      className: f.marginBottom20,
      title: g.default.Messages.USER_SETTINGS_VOICE_CODEC_TITLE,
      children: (0, a.jsx)(d.FormNotice, {
        className: f.marginBottom20,
        type: d.FormNoticeTypes.PRIMARY,
        imageData: {
          src: (0, o.isThemeLight)(e) ? m : A,
          width: 70,
          height: 40
        },
        align: S.default.Align.CENTER,
        body: g.default.Messages.USER_SETTINGS_VOICE_CODEC_DESCRIPTION
      })
    }), i && (0, a.jsxs)(d.FormSection, {
      className: f.marginBottom20,
      title: g.default.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
      children: [(0, a.jsx)(d.FormSwitch, {
        className: l()(f.marginTop8, f.marginBottom20),
        value: t,
        onChange: e => u.default.setOpenH264(e),
        disabled: !1,
        note: g.default.Messages.FORM_HELP_OPEN_H264,
        children: g.default.Messages.USER_SETTINGS_VOICE_OPEN_H264
      }), (0, a.jsx)("div", {
        style: {
          scrollMarginTop: "48px"
        },
        ref: E
      }), (0, a.jsx)(d.FormSwitch, {
        className: l()(f.marginTop8, f.marginBottom20),
        value: s,
        onChange: e => u.default.setHardwareH264(e),
        note: g.default.Messages.FORM_HELP_HARDWARE_H264,
        children: g.default.Messages.USER_SETTINGS_VOICE_HARDWARE_H264
      }), (0, a.jsx)(C, {})]
    })]
  })
}