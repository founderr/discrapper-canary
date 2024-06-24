t.d(s, {
  Z: function() {
    return m
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(46973),
  c = t(846519),
  E = t(692547),
  d = t(481060),
  _ = t(846027),
  T = t(131951),
  S = t(153124),
  u = t(65154),
  I = t(689938),
  N = t(590199),
  A = t(83922),
  C = t(331651);
let O = (0, S.hQ)();

function m() {
  let [e, s] = i.useState(-100), [t, a] = i.useState(!1), {
    threshold: m,
    autoThreshold: h
  } = (0, r.cj)([T.Z], () => T.Z.getModeOptions()), {
    inputMode: g,
    automaticVADSupported: R,
    isEnabled: M
  } = (0, r.cj)([T.Z], () => ({
    inputMode: T.Z.getMode(),
    automaticVADSupported: T.Z.supports(u.AN.AUTOMATIC_VAD),
    isEnabled: T.Z.isEnabled()
  }));

  function x(e, t) {
    s(e), a((t & u.Dg.VOICE) === u.Dg.VOICE)
  }

  function p(e, s) {
    _.Z.setMode(g, {
      threshold: e,
      autoThreshold: s
    })
  }
  i.useEffect(() => {
    let e = new c.V7;
    return e.start(1e3, () => {
      T.Z.getMediaEngine().on(o.aB.VoiceActivity, x), e.stop()
    }), () => {
      T.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, x), e.stop()
    }
  }, []);
  let D = (0, n.jsx)("section", {
    className: l()(N.inputSensitivityToggle, N.manual),
    children: (0, n.jsx)(d.Slider, {
      initialValue: m + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => p(-((100 - e) * 1), h),
      barStyles: {
        background: E.Z.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: E.Z.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": O,
      children: (0, n.jsxs)("div", {
        className: l()(N.sliderBar, N.microphone, N.inputSensitivityBar),
        children: [(0, n.jsx)("div", {
          className: l()(N.fill, N.inputSensitivityBarFill),
          style: {
            width: e + 100 + "%"
          }
        }), (0, n.jsx)("div", {
          className: "grow"
        })]
      })
    })
  });
  return h && (D = (0, n.jsxs)("section", {
    className: N.inputSensitivityToggle,
    children: [(0, n.jsx)("div", {
      className: N.inputSensitivitySlider,
      children: (0, n.jsx)("div", {
        className: l()(N.inputSensitivityBar, N.sliderBar, {
          [N.speaking]: t
        })
      })
    }), (0, n.jsx)(d.FormText, {
      type: d.FormText.Types.DESCRIPTION,
      className: C.marginBottom8,
      children: I.Z.Messages.FORM_HELP_AUTOMATIC_VAD
    })]
  })), (0, n.jsxs)(d.FormItem, {
    className: N.sensitivity,
    children: [(0, n.jsx)(d.FormTitle, {
      id: O,
      tag: d.FormTitleTags.H5,
      className: C.marginBottom8,
      children: I.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY
    }), (0, n.jsxs)("div", {
      children: [R && (0, n.jsx)(S.FG, {
        children: e => (0, n.jsxs)("div", {
          className: l()(A.horizontal, C.marginBottom4),
          children: [(0, n.jsx)(d.FormTitle, {
            tag: d.FormTitleTags.H3,
            className: C.marginReset,
            children: (0, n.jsx)("label", {
              htmlFor: e,
              children: I.Z.Messages.FORM_LABEL_AUTOMATIC_VAD
            })
          }), (0, n.jsx)(d.Switch, {
            id: e,
            checked: h,
            onChange: e => p(m, e)
          })]
        })
      }), D]
    }), !M && (0, n.jsx)(d.FormText, {
      type: d.FormText.Types.DESCRIPTION,
      className: l()(N.inputDisabledWarning, C.marginBottom8),
      children: I.Z.Messages.FORM_WARNING_INPUT_SENSITIVTY.format({
        onEnableClick: _.Z.enable
      })
    })]
  })
}