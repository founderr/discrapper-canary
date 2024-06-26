t.d(s, {
  Z: function() {
    return h
  }
});
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(780384),
  c = t(481060),
  d = t(846027),
  _ = t(131951),
  E = t(285952),
  u = t(998502),
  T = t(210887),
  S = t(996073),
  I = t(526761),
  N = t(65154),
  C = t(689938),
  m = t(331651);
let A = t(651714),
  O = t(297166);

function g() {
  let {
    experimentalEncoders: e
  } = (0, o.cj)([_.Z], () => ({
    experimentalEncoders: _.Z.getExperimentalEncoders()
  }));
  return "stable" !== u.ZP.releaseChannel && _.Z.isExperimentalEncodersSupported() ? (0, n.jsx)(c.FormSwitch, {
    className: r()(m.marginTop8, m.marginBottom20),
    value: e,
    onChange: e => d.Z.setExperimentalEncoders(e),
    disabled: !1,
    children: C.Z.Messages.EXPERIMENTAL_ENCODERS
  }) : null
}

function h() {
  let e = (0, o.e7)([T.Z], () => T.Z.theme),
    {
      openH264: s,
      hardwareEncoding: t,
      supportsOpenH264: i
    } = (0, o.cj)([_.Z], () => ({
      openH264: _.Z.getOpenH264(),
      hardwareEncoding: _.Z.getHardwareEncoding(),
      supportsOpenH264: _.Z.supports(N.AN.OPEN_H264)
    })),
    u = a.useRef(null);
  return (0, S.Z)(u, I.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.FormSection, {
      className: m.marginBottom20,
      title: C.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE,
      children: (0, n.jsx)(c.FormNotice, {
        className: m.marginBottom20,
        type: c.FormNoticeTypes.PRIMARY,
        imageData: {
          src: (0, l.ap)(e) ? A : O,
          width: 70,
          height: 40
        },
        align: E.Z.Align.CENTER,
        body: C.Z.Messages.USER_SETTINGS_VOICE_CODEC_DESCRIPTION
      })
    }), (0, n.jsxs)(c.FormSection, {
      className: m.marginBottom20,
      title: C.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
      children: [i && (0, n.jsx)(c.FormSwitch, {
        className: r()(m.marginTop8, m.marginBottom20),
        value: s,
        onChange: e => d.Z.setOpenH264(e),
        disabled: !1,
        children: C.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264
      }), (0, n.jsx)("div", {
        style: {
          scrollMarginTop: "48px"
        },
        ref: u
      }), (0, n.jsx)(c.FormSwitch, {
        className: r()(m.marginTop8, m.marginBottom20),
        value: t,
        onChange: e => d.Z.setHardwareEncoding(e),
        note: C.Z.Messages.FORM_HELP_HARDWARE_ENCODING,
        children: C.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING
      }), (0, n.jsx)(g, {})]
    })]
  })
}