t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(735250);
t(470079);
var a = t(399606),
    i = t(481060),
    r = t(284056),
    o = t(131951),
    l = t(63063),
    c = t(981631),
    d = t(65154),
    u = t(689938),
    _ = t(488535);
function E() {
    return (0, a.e7)([o.Z], () => o.Z.supports(d.AN.LOOPBACK))
        ? (0, n.jsx)('div', {
              className: _.micTest,
              children: (0, n.jsx)(r.Z, {
                  title: u.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
                  description: u.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_DESCRIPTION,
                  notchBackground: r._.GRAY,
                  captionVoice: u.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_VOICE_CAPTION,
                  captionNoVoice: (0, n.jsxs)(n.Fragment, {
                      children: [
                          u.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_VOICE_NO_INPUT_NOTICE,
                          (0, n.jsx)(i.Anchor, {
                              className: _.micTestHelpLink,
                              href: l.Z.getArticleURL(c.BhN.NO_INPUT_DETECTED),
                              children: u.Z.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
                          })
                      ]
                  }),
                  buttonTest: u.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_BUTTON_INACTIVE,
                  buttonStop: u.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_BUTTON_ACTIVE,
                  buttonClassName: _.micTestButton,
                  buttonColor: i.Button.Colors.BRAND,
                  location: {
                      page: c.ZY5.USER_SETTINGS,
                      section: c.jXE.SETTINGS_VOICE_AND_VIDEO
                  }
              })
          })
        : null;
}
