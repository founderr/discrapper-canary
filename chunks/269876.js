"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("46973"),
  d = s("846519"),
  u = s("692547"),
  c = s("481060"),
  S = s("846027"),
  E = s("131951"),
  T = s("153124"),
  _ = s("65154"),
  I = s("689938"),
  N = s("689641"),
  g = s("961047"),
  f = s("611273");
let m = (0, T.uid)();

function A() {
  let [e, t] = n.useState(-100), [s, i] = n.useState(!1), {
    threshold: A,
    autoThreshold: C
  } = (0, r.useStateFromStoresObject)([E.default], () => E.default.getModeOptions()), {
    inputMode: O,
    automaticVADSupported: h,
    isEnabled: R
  } = (0, r.useStateFromStoresObject)([E.default], () => ({
    inputMode: E.default.getMode(),
    automaticVADSupported: E.default.supports(_.Features.AUTOMATIC_VAD),
    isEnabled: E.default.isEnabled()
  }));

  function p(e, s) {
    t(e), i((s & _.SpeakingFlags.VOICE) === _.SpeakingFlags.VOICE)
  }

  function M(e, t) {
    S.default.setMode(O, {
      threshold: e,
      autoThreshold: t
    })
  }
  n.useEffect(() => {
    let e = new d.Timeout;
    return e.start(1e3, () => {
      E.default.getMediaEngine().on(o.MediaEngineEvent.VoiceActivity, p), e.stop()
    }), () => {
      E.default.getMediaEngine().removeListener(o.MediaEngineEvent.VoiceActivity, p), e.stop()
    }
  }, []);
  let D = (0, a.jsx)("section", {
    className: l()(N.inputSensitivityToggle, N.manual),
    children: (0, a.jsx)(c.Slider, {
      initialValue: A + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => M(-((100 - e) * 1), C),
      barStyles: {
        background: u.default.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: u.default.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": m,
      children: (0, a.jsxs)("div", {
        className: l()(N.sliderBar, N.microphone, N.inputSensitivityBar),
        children: [(0, a.jsx)("div", {
          className: l()(N.fill, N.inputSensitivityBarFill),
          style: {
            width: e + 100 + "%"
          }
        }), (0, a.jsx)("div", {
          className: "grow"
        })]
      })
    })
  });
  return C && (D = (0, a.jsxs)("section", {
    className: N.inputSensitivityToggle,
    children: [(0, a.jsx)("div", {
      className: N.inputSensitivitySlider,
      children: (0, a.jsx)("div", {
        className: l()(N.inputSensitivityBar, N.sliderBar, {
          [N.speaking]: s
        })
      })
    }), (0, a.jsx)(c.FormText, {
      type: c.FormText.Types.DESCRIPTION,
      className: f.marginBottom8,
      children: I.default.Messages.FORM_HELP_AUTOMATIC_VAD
    })]
  })), (0, a.jsxs)(c.FormItem, {
    className: N.sensitivity,
    children: [(0, a.jsx)(c.FormTitle, {
      id: m,
      tag: c.FormTitleTags.H5,
      className: f.marginBottom8,
      children: I.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
    }), (0, a.jsxs)("div", {
      children: [h && (0, a.jsx)(T.UID, {
        children: e => (0, a.jsxs)("div", {
          className: l()(g.horizontal, f.marginBottom4),
          children: [(0, a.jsx)(c.FormTitle, {
            tag: c.FormTitleTags.H3,
            className: f.marginReset,
            children: (0, a.jsx)("label", {
              htmlFor: e,
              children: I.default.Messages.FORM_LABEL_AUTOMATIC_VAD
            })
          }), (0, a.jsx)(c.Switch, {
            id: e,
            checked: C,
            onChange: e => M(A, e)
          })]
        })
      }), D]
    }), !R && (0, a.jsx)(c.FormText, {
      type: c.FormText.Types.DESCRIPTION,
      className: l()(N.inputDisabledWarning, f.marginBottom8),
      children: I.default.Messages.FORM_WARNING_INPUT_SENSITIVTY.format({
        onEnableClick: S.default.enable
      })
    })]
  })
}