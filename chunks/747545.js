"use strict";
a.r(t), a.d(t, {
  FilterLoadingIndicator: function() {
    return m
  },
  default: function() {
    return M
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("120356"),
  o = a.n(l),
  i = a("442837"),
  c = a("846519"),
  r = a("481060"),
  d = a("846027"),
  u = a("695346"),
  _ = a("716161"),
  O = a("938117"),
  E = a("131951"),
  p = a("626135"),
  A = a("981631"),
  g = a("689938"),
  f = a("768342");

function m() {
  let [e, t] = n.useState(!1), a = (0, i.useStateFromStores)([E.default], () => E.default.isMediaFilterSettingLoading());
  return (n.useEffect(() => {
    let e = new c.Timeout;
    return a ? e.start(150, () => {
      t(!0)
    }) : (e.stop(), t(!1)), () => e.stop()
  }, [a]), e) ? (0, s.jsx)("div", {
    className: f.filterLoadingIndicator,
    children: (0, s.jsx)(r.Spinner, {})
  }) : null
}

function M(e) {
  let {
    hideDeviceSelector: t = !1,
    hideDeviceHeader: a = !1,
    onLearnMore: l,
    selectedBackgroundOption: c,
    onSelectBackgroundOption: m,
    renderCamera: M,
    hidePreviewToggle: I = !1,
    showSmallBackgroundOptions: v = !1
  } = e, h = (0, i.useStateFromStores)([E.default], () => E.default.getVideoDeviceId()), x = (0, i.useStateFromStoresArray)([E.default], () => Object.values(E.default.getVideoDevices())), C = u.AlwaysPreviewVideo.useSetting(), N = x.map(e => {
    let {
      id: t,
      name: a
    } = e;
    return {
      value: t,
      label: a
    }
  });
  return n.useEffect(() => {
    (0, _.fetchVideoFilterAssets)()
  }, []), (0, s.jsxs)(s.Fragment, {
    children: [M(h), E.default.isEnabled() ? null : (0, s.jsx)(r.Text, {
      className: f.permissionWarning,
      color: "interactive-normal",
      variant: "text-sm/normal",
      children: g.default.Messages.FORM_WARNING_VIDEO_PREVIEW.format({
        onEnableClick: d.default.enable
      })
    }), I ? null : (0, s.jsx)(r.FormSwitch, {
      className: f.previewToggle,
      note: g.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW_NOTE,
      onChange: e => {
        u.AlwaysPreviewVideo.updateSetting(e), p.default.track(A.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      },
      value: C,
      hideBorder: !0,
      children: (0, s.jsx)("div", {
        className: f.cameraPreviewTitle,
        children: g.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
      })
    }), t ? null : (0, s.jsxs)(s.Fragment, {
      children: [a ? null : (0, s.jsx)(r.Heading, {
        className: f.spacingTop24,
        variant: "eyebrow",
        color: "header-secondary",
        children: g.default.Messages.CAMERA_PREVIEW_CAMERA
      }), (0, s.jsx)(r.SingleSelect, {
        placeholder: g.default.Messages.CHANGE_CAMERA,
        className: o()(f.selector, {
          [f.selectorNoHeader]: a
        }),
        options: N,
        value: h,
        onChange: e => d.default.setVideoDevice(e)
      })]
    }), (0, s.jsx)(O.default, {
      onLearnMore: l,
      selectedBackgroundOption: c,
      onSelectBackgroundOption: m,
      currentDeviceId: h,
      smallerBackgroundOptions: v
    })]
  })
}