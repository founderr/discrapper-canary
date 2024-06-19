t.d(s, {
  Z: function() {
    return A
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(921801),
  E = t(131951),
  d = t(962100),
  _ = t(445817),
  T = t(726985),
  S = t(65154),
  u = t(689938),
  I = t(331651);

function N() {
  return (0, n.jsx)(o.FormNotice, {
    type: o.CardTypes.PRIMARY,
    title: u.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
    body: u.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
    button: (0, n.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      className: I.marginTop20,
      onClick: () => (0, d.y)("Video unsupported browser"),
      children: u.Z.Messages.DOWNLOAD_APP
    })
  })
}

function A() {
  let e = (0, r.e7)([E.Z], () => E.Z.supports(S.AN.VIDEO)),
    [s, t] = i.useState(!1);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsxs)(o.HeadingLevel, {
      component: (0, n.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H1,
        className: I.marginBottom20,
        children: u.Z.Messages.VIDEO_SETTINGS
      }),
      children: [(0, n.jsx)(c.F, {
        setting: T.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
        children: (0, n.jsx)(_.Z, {
          previewEnabled: s,
          onEnablePreview: () => t(!0)
        })
      }), !e && (0, n.jsx)(N, {})]
    }), (0, n.jsx)(o.FormDivider, {
      className: l()(I.marginBottom40, I.marginTop40)
    })]
  })
}