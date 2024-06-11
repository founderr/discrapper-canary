"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("481060"),
  d = s("921801"),
  u = s("131951"),
  c = s("962100"),
  S = s("445817"),
  E = s("726985"),
  T = s("65154"),
  _ = s("689938"),
  I = s("611273");

function N() {
  return (0, a.jsx)(o.FormNotice, {
    type: o.CardTypes.PRIMARY,
    title: _.default.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
    body: _.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
    button: (0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      className: I.marginTop20,
      onClick: () => (0, c.openDownloadAppsModal)("Video unsupported browser"),
      children: _.default.Messages.DOWNLOAD_APP
    })
  })
}

function g() {
  let e = (0, r.useStateFromStores)([u.default], () => u.default.supports(T.Features.VIDEO)),
    [t, s] = n.useState(!1);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(o.HeadingLevel, {
      component: (0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H1,
        className: I.marginBottom20,
        children: _.default.Messages.VIDEO_SETTINGS
      }),
      children: e ? (0, a.jsx)(d.Subsetting, {
        setting: E.WebSetting.VOICE_AND_VIDEO_VIDEO_CAMERA,
        children: (0, a.jsx)(S.default, {
          previewEnabled: t,
          onEnablePreview: () => s(!0)
        })
      }) : (0, a.jsx)(N, {})
    }), (0, a.jsx)(o.FormDivider, {
      className: l()(I.marginBottom40, I.marginTop40)
    })]
  })
}