t.d(s, {
  Z: function() {
return h;
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
  I = t(65154),
  S = t(689938),
  N = t(414976),
  C = t(483085),
  m = t(549856);
let A = (0, T.hQ)();

function h() {
  let [e, s] = a.useState(-100), [t, i] = a.useState(!1), {
threshold: h,
autoThreshold: g
  } = (0, o.cj)([u.Z], () => u.Z.getModeOptions()), {
inputMode: O,
automaticVADSupported: p,
isEnabled: R
  } = (0, o.cj)([u.Z], () => ({
inputMode: u.Z.getMode(),
automaticVADSupported: u.Z.supports(I.AN.AUTOMATIC_VAD),
isEnabled: u.Z.isEnabled()
  }));

  function x(e, t) {
s(e), i((t & I.Dg.VOICE) === I.Dg.VOICE);
  }

  function M(e, s) {
E.Z.setMode(O, {
  threshold: e,
  autoThreshold: s
});
  }
  a.useEffect(() => {
let e = new c.V7();
return e.start(1000, () => {
  u.Z.getMediaEngine().on(l.aB.VoiceActivity, x), e.stop();
}), () => {
  u.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, x), e.stop();
};
  }, []);
  let D = (0, n.jsx)('section', {
className: r()(N.inputSensitivityToggle, N.manual),
children: (0, n.jsx)(_.Slider, {
  initialValue: h + 100,
  onValueRender: e => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
  onValueChange: e => M(-((100 - e) * 1), g),
  barStyles: {
    background: d.Z.unsafe_rawColors.GREEN_360.css
  },
  fillStyles: {
    background: d.Z.unsafe_rawColors.YELLOW_300.css
  },
  'aria-labelledby': A,
  children: (0, n.jsxs)('div', {
    className: r()(N.sliderBar, N.microphone, N.inputSensitivityBar),
    children: [
      (0, n.jsx)('div', {
        className: r()(N.fill, N.inputSensitivityBarFill),
        style: {
          width: e + 100 + '%'
        }
      }),
      (0, n.jsx)('div', {
        className: 'grow'
      })
    ]
  })
})
  });
  return g && (D = (0, n.jsxs)('section', {
className: N.inputSensitivityToggle,
children: [
  (0, n.jsx)('div', {
    className: N.inputSensitivitySlider,
    children: (0, n.jsx)('div', {
      className: r()(N.inputSensitivityBar, N.sliderBar, {
        [N.speaking]: t
      })
    })
  }),
  (0, n.jsx)(_.FormText, {
    type: _.FormText.Types.DESCRIPTION,
    className: m.marginBottom8,
    children: S.Z.Messages.FORM_HELP_AUTOMATIC_VAD
  })
]
  })), (0, n.jsxs)(_.FormItem, {
className: N.sensitivity,
children: [
  (0, n.jsx)(_.FormTitle, {
    id: A,
    tag: _.FormTitleTags.H5,
    className: m.marginBottom8,
    children: S.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY
  }),
  (0, n.jsxs)('div', {
    children: [
      p && (0, n.jsx)(T.FG, {
        children: e => (0, n.jsxs)('div', {
          className: r()(C.horizontal, m.marginBottom4),
          children: [
            (0, n.jsx)(_.FormTitle, {
              tag: _.FormTitleTags.H3,
              className: m.marginReset,
              children: (0, n.jsx)('label', {
                htmlFor: e,
                children: S.Z.Messages.FORM_LABEL_AUTOMATIC_VAD
              })
            }),
            (0, n.jsx)(_.Switch, {
              id: e,
              checked: g,
              onChange: e => M(h, e)
            })
          ]
        })
      }),
      D
    ]
  }),
  !R && (0, n.jsx)(_.FormText, {
    type: _.FormText.Types.DESCRIPTION,
    className: r()(N.inputDisabledWarning, m.marginBottom8),
    children: S.Z.Messages.FORM_WARNING_INPUT_SENSITIVTY.format({
      onEnableClick: E.Z.enable
    })
  })
]
  });
}