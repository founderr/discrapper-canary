t.d(s, {
  Z: function() {
    return T
  }
});
var n = t(735250);
t(470079);
var i = t(399606),
  a = t(481060),
  l = t(284056),
  r = t(131951),
  o = t(63063),
  c = t(981631),
  E = t(65154),
  d = t(689938),
  _ = t(595429);

function T() {
  return (0, i.e7)([r.Z], () => r.Z.supports(E.AN.LOOPBACK)) ? (0, n.jsx)("div", {
    className: _.micTest,
    children: (0, n.jsx)(l.Z, {
      title: d.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
      description: d.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_DESCRIPTION,
      notchBackground: l._.GRAY,
      captionVoice: d.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_VOICE_CAPTION,
      captionNoVoice: (0, n.jsxs)(n.Fragment, {
        children: [d.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_VOICE_NO_INPUT_NOTICE, (0, n.jsx)(a.Anchor, {
          className: _.micTestHelpLink,
          href: o.Z.getArticleURL(c.BhN.NO_INPUT_DETECTED),
          children: d.Z.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
        })]
      }),
      buttonTest: d.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_BUTTON_INACTIVE,
      buttonStop: d.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_BUTTON_ACTIVE,
      buttonClassName: _.micTestButton,
      buttonColor: a.Button.Colors.BRAND,
      location: {
        page: c.ZY5.USER_SETTINGS,
        section: c.jXE.SETTINGS_VOICE_AND_VIDEO
      }
    })
  }) : null
}