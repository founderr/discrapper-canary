t.d(s, {
  Z: function() {
    return C
  }
}), t(47120);
var n = t(735250);
t(470079);
var i = t(392711),
  a = t.n(i),
  l = t(442837),
  r = t(780384),
  o = t(481060),
  c = t(846027),
  E = t(463395),
  d = t(131951),
  _ = t(285952),
  T = t(210887),
  S = t(962100),
  u = t(65154),
  I = t(689938),
  N = t(216430),
  A = t(331651);

function C() {
  let e, s;
  let i = (0, l.e7)([T.Z], () => T.Z.theme),
    {
      canSetInputDevice: C,
      canSetOutputDevice: O,
      inputDeviceId: m,
      outputDeviceId: h
    } = (0, l.cj)([d.Z], () => ({
      canSetInputDevice: d.Z.supports(u.AN.AUDIO_INPUT_DEVICE),
      canSetOutputDevice: d.Z.supports(u.AN.AUDIO_OUTPUT_DEVICE),
      inputDeviceId: d.Z.getInputDeviceId(),
      outputDeviceId: d.Z.getOutputDeviceId()
    })),
    g = (0, l.e7)([d.Z], () => d.Z.getInputDevices()),
    R = (0, l.e7)([d.Z], () => d.Z.getOutputDevices());
  !C && (e = (0, n.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: A.marginTop8,
    children: I.Z.Messages.BROWSER_INPUT_DEVICE_WARNING.format({
      onDownloadClick: () => (0, S.y)("Help Text Input Devices")
    })
  })), !O && (s = (0, n.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: A.marginTop8,
    children: I.Z.Messages.BROWSER_OUTPUT_DEVICE_WARNING.format({
      onDownloadClick: () => (0, S.y)("Help Text Output Devices")
    })
  }));
  let M = a()(g).values().first(),
    x = null != M ? M.disabled : null != e,
    D = a()(R).values().first(),
    p = null != D ? D.disabled : null != s;

  function L(e) {
    let s, {
      label: a,
      value: l
    } = e;
    if (E.Z.isCertified(l)) {
      let e = (0, r.ap)(i) ? t(561259) : t(887695);
      s = (0, n.jsx)("img", {
        src: e,
        alt: "Certified",
        className: N.deviceOptionCertified
      })
    }
    return (0, n.jsxs)("span", {
      className: N.deviceOption,
      children: [(0, n.jsx)("span", {
        className: N.deviceOptionLabel,
        children: E.Z.getCertifiedDeviceName(l, a)
      }), s]
    }, l)
  }

  function P(e) {
    return L(e[0])
  }
  return (0, n.jsxs)(_.Z, {
    className: A.marginBottom20,
    children: [(0, n.jsxs)(_.Z.Child, {
      basis: "50%",
      children: [(0, n.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: A.marginBottom8,
        children: I.Z.Messages.FORM_LABEL_INPUT_DEVICE
      }), (0, n.jsx)(o.SingleSelect, {
        value: m,
        onChange: e => c.Z.setInputDevice(e, "Settings"),
        options: a().map(g, e => {
          let {
            id: s,
            name: t
          } = e;
          return {
            value: s,
            label: t
          }
        }),
        isDisabled: x,
        renderOptionValue: P,
        renderOptionLabel: L
      }), e]
    }), (0, n.jsxs)(_.Z.Child, {
      basis: "50%",
      children: [(0, n.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: A.marginBottom8,
        children: I.Z.Messages.FORM_LABEL_OUTPUT_DEVICE
      }), (0, n.jsx)(o.SingleSelect, {
        value: h,
        onChange: e => c.Z.setOutputDevice(e, "Settings"),
        options: a().map(R, e => {
          let {
            id: s,
            name: t
          } = e;
          return {
            value: s,
            label: t
          }
        }),
        isDisabled: p,
        renderOptionValue: P,
        renderOptionLabel: L
      }), s]
    })]
  })
}