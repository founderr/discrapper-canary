"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var a = s("735250");
s("470079");
var n = s("392711"),
  l = s.n(n),
  i = s("442837"),
  r = s("780384"),
  o = s("481060"),
  d = s("846027"),
  u = s("463395"),
  c = s("131951"),
  S = s("285952"),
  E = s("210887"),
  T = s("962100"),
  _ = s("65154"),
  I = s("689938"),
  N = s("623378"),
  f = s("611273");

function g() {
  let e, t;
  let n = (0, i.useStateFromStores)([E.default], () => E.default.theme),
    {
      canSetInputDevice: g,
      canSetOutputDevice: m,
      inputDeviceId: C,
      outputDeviceId: A
    } = (0, i.useStateFromStoresObject)([c.default], () => ({
      canSetInputDevice: c.default.supports(_.Features.AUDIO_INPUT_DEVICE),
      canSetOutputDevice: c.default.supports(_.Features.AUDIO_OUTPUT_DEVICE),
      inputDeviceId: c.default.getInputDeviceId(),
      outputDeviceId: c.default.getOutputDeviceId()
    })),
    h = (0, i.useStateFromStores)([c.default], () => c.default.getInputDevices()),
    O = (0, i.useStateFromStores)([c.default], () => c.default.getOutputDevices());
  !g && (e = (0, a.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: f.marginTop8,
    children: I.default.Messages.BROWSER_INPUT_DEVICE_WARNING.format({
      onDownloadClick: () => (0, T.openDownloadAppsModal)("Help Text Input Devices")
    })
  })), !m && (t = (0, a.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: f.marginTop8,
    children: I.default.Messages.BROWSER_OUTPUT_DEVICE_WARNING.format({
      onDownloadClick: () => (0, T.openDownloadAppsModal)("Help Text Output Devices")
    })
  }));
  let p = l()(h).values().first(),
    R = null != p ? p.disabled : null != e,
    x = l()(O).values().first(),
    M = null != x ? x.disabled : null != t;

  function D(e) {
    let t, {
      label: l,
      value: i
    } = e;
    if (u.default.isCertified(i)) {
      let e = (0, r.isThemeLight)(n) ? s("561259") : s("887695");
      t = (0, a.jsx)("img", {
        src: e,
        alt: "Certified",
        className: N.deviceOptionCertified
      })
    }
    return (0, a.jsxs)("span", {
      className: N.deviceOption,
      children: [(0, a.jsx)("span", {
        className: N.deviceOptionLabel,
        children: u.default.getCertifiedDeviceName(i, l)
      }), t]
    }, i)
  }

  function L(e) {
    return D(e[0])
  }
  return (0, a.jsxs)(S.default, {
    className: f.marginBottom20,
    children: [(0, a.jsxs)(S.default.Child, {
      basis: "50%",
      children: [(0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: f.marginBottom8,
        children: I.default.Messages.FORM_LABEL_INPUT_DEVICE
      }), (0, a.jsx)(o.SingleSelect, {
        value: C,
        onChange: e => d.default.setInputDevice(e, "Settings"),
        options: l().map(h, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: R,
        renderOptionValue: L,
        renderOptionLabel: D
      }), e]
    }), (0, a.jsxs)(S.default.Child, {
      basis: "50%",
      children: [(0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: f.marginBottom8,
        children: I.default.Messages.FORM_LABEL_OUTPUT_DEVICE
      }), (0, a.jsx)(o.SingleSelect, {
        value: A,
        onChange: e => d.default.setOutputDevice(e, "Settings"),
        options: l().map(O, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: M,
        renderOptionValue: L,
        renderOptionLabel: D
      }), t]
    })]
  })
}