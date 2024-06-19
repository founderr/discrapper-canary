t.d(s, {
  Z: function() {
    return g
  }
});
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(780384),
  c = t(481060),
  E = t(846027),
  d = t(131951),
  _ = t(285952),
  T = t(998502),
  S = t(210887),
  u = t(996073),
  I = t(526761),
  N = t(65154),
  A = t(689938),
  C = t(331651);
let O = t(651714),
  m = t(297166);

function h() {
  let {
    experimentalEncoders: e
  } = (0, r.cj)([d.Z], () => ({
    experimentalEncoders: d.Z.getExperimentalEncoders()
  }));
  return "stable" !== T.ZP.releaseChannel && d.Z.isExperimentalEncodersSupported() ? (0, n.jsx)(c.FormSwitch, {
    className: l()(C.marginTop8, C.marginBottom20),
    value: e,
    onChange: e => E.Z.setExperimentalEncoders(e),
    disabled: !1,
    children: A.Z.Messages.EXPERIMENTAL_ENCODERS
  }) : null
}

function g() {
  let e = (0, r.e7)([S.Z], () => S.Z.theme),
    {
      openH264: s,
      hardwareEncoding: t,
      supportsOpenH264: a
    } = (0, r.cj)([d.Z], () => ({
      openH264: d.Z.getOpenH264(),
      hardwareEncoding: d.Z.getHardwareEncoding(),
      supportsOpenH264: d.Z.supports(N.AN.OPEN_H264)
    })),
    T = i.useRef(null);
  return (0, u.Z)(T, I.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.FormSection, {
      className: C.marginBottom20,
      title: A.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE,
      children: (0, n.jsx)(c.FormNotice, {
        className: C.marginBottom20,
        type: c.FormNoticeTypes.PRIMARY,
        imageData: {
          src: (0, o.ap)(e) ? O : m,
          width: 70,
          height: 40
        },
        align: _.Z.Align.CENTER,
        body: A.Z.Messages.USER_SETTINGS_VOICE_CODEC_DESCRIPTION
      })
    }), (0, n.jsxs)(c.FormSection, {
      className: C.marginBottom20,
      title: A.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
      children: [a && (0, n.jsx)(c.FormSwitch, {
        className: l()(C.marginTop8, C.marginBottom20),
        value: s,
        onChange: e => E.Z.setOpenH264(e),
        disabled: !1,
        children: A.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264
      }), (0, n.jsx)("div", {
        style: {
          scrollMarginTop: "48px"
        },
        ref: T
      }), (0, n.jsx)(c.FormSwitch, {
        className: l()(C.marginTop8, C.marginBottom20),
        value: t,
        onChange: e => E.Z.setHardwareEncoding(e),
        note: A.Z.Messages.FORM_HELP_HARDWARE_ENCODING,
        children: A.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING
      }), (0, n.jsx)(h, {})]
    })]
  })
}