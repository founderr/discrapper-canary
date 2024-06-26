t.d(s, {
  Z: function() {
    return O
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(46973),
  c = t(846519),
  d = t(692547),
  _ = t(481060),
  E = t(846027),
  u = t(131951),
  T = t(153124),
  S = t(65154),
  I = t(689938),
  N = t(590199),
  C = t(83922),
  A = t(331651);
let m = (0, T.hQ)();

function O() {
  let [e, s] = a.useState(-100), [t, i] = a.useState(!1), {
    threshold: O,
    autoThreshold: g
  } = (0, o.cj)([u.Z], () => u.Z.getModeOptions()), {
    inputMode: h,
    automaticVADSupported: R,
    isEnabled: p
  } = (0, o.cj)([u.Z], () => ({
    inputMode: u.Z.getMode(),
    automaticVADSupported: u.Z.supports(S.AN.AUTOMATIC_VAD),
    isEnabled: u.Z.isEnabled()
  }));

  function x(e, t) {
    s(e), i((t & S.Dg.VOICE) === S.Dg.VOICE)
  }

  function M(e, s) {
    E.Z.setMode(h, {
      threshold: e,
      autoThreshold: s
    })
  }
  a.useEffect(() => {
    let e = new c.V7;
    return e.start(1e3, () => {
      u.Z.getMediaEngine().on(l.aB.VoiceActivity, x), e.stop()
    }), () => {
      u.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, x), e.stop()
    }
  }, []);
  let D = (0, n.jsx)("section", {
    className: r()(N.inputSensitivityToggle, N.manual),
    children: (0, n.jsx)(_.Slider, {
      initialValue: O + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => M(-((100 - e) * 1), g),
      barStyles: {
        background: d.Z.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: d.Z.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": m,
      children: (0, n.jsxs)("div", {
        className: r()(N.sliderBar, N.microphone, N.inputSensitivityBar),
        children: [(0, n.jsx)("div", {
          className: r()(N.fill, N.inputSensitivityBarFill),
          style: {
            width: e + 100 + "%"
          }
        }), (0, n.jsx)("div", {
          className: "grow"
        })]
      })
    })
  });
  return g && (D = (0, n.jsxs)("section", {
    className: N.inputSensitivityToggle,
    children: [(0, n.jsx)("div", {
      className: N.inputSensitivitySlider,
      children: (0, n.jsx)("div", {
        className: r()(N.inputSensitivityBar, N.sliderBar, {
          [N.speaking]: t
        })
      })
    }), (0, n.jsx)(_.FormText, {
      type: _.FormText.Types.DESCRIPTION,
      className: A.marginBottom8,
      children: I.Z.Messages.FORM_HELP_AUTOMATIC_VAD
    })]
  })), (0, n.jsxs)(_.FormItem, {
    className: N.sensitivity,
    children: [(0, n.jsx)(_.FormTitle, {
      id: m,
      tag: _.FormTitleTags.H5,
      className: A.marginBottom8,
      children: I.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY
    }), (0, n.jsxs)("div", {
      children: [R && (0, n.jsx)(T.FG, {
        children: e => (0, n.jsxs)("div", {
          className: r()(C.horizontal, A.marginBottom4),
          children: [(0, n.jsx)(_.FormTitle, {
            tag: _.FormTitleTags.H3,
            className: A.marginReset,
            children: (0, n.jsx)("label", {
              htmlFor: e,
              children: I.Z.Messages.FORM_LABEL_AUTOMATIC_VAD
            })
          }), (0, n.jsx)(_.Switch, {
            id: e,
            checked: g,
            onChange: e => M(O, e)
          })]
        })
      }), D]
    }), !p && (0, n.jsx)(_.FormText, {
      type: _.FormText.Types.DESCRIPTION,
      className: r()(N.inputDisabledWarning, A.marginBottom8),
      children: I.Z.Messages.FORM_WARNING_INPUT_SENSITIVTY.format({
        onEnableClick: E.Z.enable
      })
    })]
  })
}