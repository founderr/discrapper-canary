"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a = s("735250");
s("470079");
var n = s("392711"),
  i = s.n(n),
  l = s("442837"),
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
  g = s("611273");

function f() {
  let e, t;
  let n = (0, l.useStateFromStores)([E.default], () => E.default.theme),
    {
      canSetInputDevice: f,
      canSetOutputDevice: m,
      inputDeviceId: A,
      outputDeviceId: C
    } = (0, l.useStateFromStoresObject)([c.default], () => ({
      canSetInputDevice: c.default.supports(_.Features.AUDIO_INPUT_DEVICE),
      canSetOutputDevice: c.default.supports(_.Features.AUDIO_OUTPUT_DEVICE),
      inputDeviceId: c.default.getInputDeviceId(),
      outputDeviceId: c.default.getOutputDeviceId()
    })),
    O = (0, l.useStateFromStores)([c.default], () => c.default.getInputDevices()),
    h = (0, l.useStateFromStores)([c.default], () => c.default.getOutputDevices());
  !f && (e = (0, a.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: g.marginTop8,
    children: I.default.Messages.BROWSER_INPUT_DEVICE_WARNING.format({
      onDownloadClick: () => (0, T.openDownloadAppsModal)("Help Text Input Devices")
    })
  })), !m && (t = (0, a.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: g.marginTop8,
    children: I.default.Messages.BROWSER_OUTPUT_DEVICE_WARNING.format({
      onDownloadClick: () => (0, T.openDownloadAppsModal)("Help Text Output Devices")
    })
  }));
  let R = i()(O).values().first(),
    p = null != R ? R.disabled : null != e,
    M = i()(h).values().first(),
    D = null != M ? M.disabled : null != t;

  function x(e) {
    let t, {
      label: i,
      value: l
    } = e;
    if (u.default.isCertified(l)) {
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
        children: u.default.getCertifiedDeviceName(l, i)
      }), t]
    }, l)
  }

  function L(e) {
    return x(e[0])
  }
  return (0, a.jsxs)(S.default, {
    className: g.marginBottom20,
    children: [(0, a.jsxs)(S.default.Child, {
      basis: "50%",
      children: [(0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: g.marginBottom8,
        children: I.default.Messages.FORM_LABEL_INPUT_DEVICE
      }), (0, a.jsx)(o.SingleSelect, {
        value: A,
        onChange: e => d.default.setInputDevice(e, "Settings"),
        options: i().map(O, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: p,
        renderOptionValue: L,
        renderOptionLabel: x
      }), e]
    }), (0, a.jsxs)(S.default.Child, {
      basis: "50%",
      children: [(0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: g.marginBottom8,
        children: I.default.Messages.FORM_LABEL_OUTPUT_DEVICE
      }), (0, a.jsx)(o.SingleSelect, {
        value: C,
        onChange: e => d.default.setOutputDevice(e, "Settings"),
        options: i().map(h, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: D,
        renderOptionValue: L,
        renderOptionLabel: x
      }), t]
    })]
  })
}