s.r(t), s.d(t, {
  default: function() {
    return b
  }
}), s(47120);
var n = s(735250),
  i = s(470079),
  r = s(392711),
  l = s.n(r),
  o = s(442837),
  a = s(481060),
  d = s(846027),
  u = s(825209),
  h = s(382577),
  c = s(131951),
  m = s(285952),
  g = s(153124),
  p = s(36703),
  E = s(981631),
  _ = s(65154),
  R = s(689938),
  C = s(687532),
  T = s(331651);

function O(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let f = (0, g.hQ)(),
  M = (0, g.hQ)(),
  D = (0, g.hQ)();
class I extends i.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, n.jsx)(g.FG, {
      children: t => (0, n.jsxs)(m.Z, {
        className: T.marginBottom4,
        children: [(0, n.jsx)(a.FormTitle, {
          tag: a.FormTitleTags.H3,
          children: (0, n.jsx)("label", {
            htmlFor: t,
            children: R.Z.Messages.FORM_LABEL_AUTOMATIC_VAD
          })
        }), (0, n.jsx)(a.Switch, {
          id: t,
          checked: e,
          onChange: this.handleAutoThresholdChange
        })]
      })
    })
  }
  renderSlider() {
    let {
      autoThreshold: e,
      threshold: t
    } = this.props;
    if (!e) return (0, n.jsx)(a.Slider, {
      initialValue: t + 100,
      onValueRender: this.handleValueRender,
      onValueChange: this.handleSensitivityChange,
      "aria-label": R.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY
    })
  }
  render() {
    return (0, n.jsxs)(a.FormItem, {
      title: R.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY,
      className: T.marginBottom8,
      children: [this.renderAutomaticVADToggle(), this.renderSlider()]
    })
  }
  constructor(...e) {
    super(...e), O(this, "handleAutoThresholdChange", e => {
      let {
        onThresholdChange: t,
        threshold: s
      } = this.props;
      null == t || t(s, e)
    }), O(this, "handleSensitivityChange", e => {
      let {
        onThresholdChange: t,
        autoThreshold: s
      } = this.props;
      null == t || t(-((100 - e) * 1), s)
    })
  }
}
let x = o.ZP.connectStores([c.Z], e => {
  let {
    mediaEngineContext: t
  } = e;
  return {
    inputVolume: c.Z.getInputVolume(),
    outputVolume: c.Z.getOutputVolume(),
    inputDeviceId: c.Z.getInputDeviceId(),
    inputDevices: c.Z.getInputDevices(),
    outputDevices: c.Z.getOutputDevices(),
    outputDeviceId: c.Z.getOutputDeviceId(),
    inputMode: c.Z.getMode(t),
    shortcut: c.Z.getModeOptions(t).shortcut,
    vadThreshold: c.Z.getModeOptions(t).threshold,
    vadAutoThreshold: c.Z.getModeOptions(t).autoThreshold,
    delay: c.Z.getModeOptions(t).delay
  }
})(e => {
  let t, {
      mediaEngineContext: s,
      inputMode: r,
      shortcut: o,
      delay: h,
      vadThreshold: c,
      vadAutoThreshold: m,
      inputDevices: g,
      inputDeviceId: _,
      inputVolume: C,
      outputDeviceId: O,
      outputDevices: x,
      outputVolume: b,
      speaking: Z = !1
    } = e,
    v = l().first(g),
    N = null != v && v.disabled,
    j = l().first(x),
    S = null != j && j.disabled,
    U = [{
      value: E.pM4.VOICE_ACTIVITY,
      name: R.Z.Messages.INPUT_MODE_VAD
    }, {
      value: E.pM4.PUSH_TO_TALK,
      name: R.Z.Messages.INPUT_MODE_PTT
    }];
  return t = r === E.pM4.PUSH_TO_TALK ? (0, n.jsxs)(i.Fragment, {
    children: [(0, n.jsx)(a.FormItem, {
      title: R.Z.Messages.FORM_LABEL_SHORTCUT,
      className: T.marginBottom20,
      children: (0, n.jsx)(u.Z, {
        defaultValue: o,
        onChange: e => d.Z.setMode(r, {
          shortcut: e
        }, s)
      })
    }), (0, n.jsxs)(a.FormItem, {
      className: T.marginBottom8,
      children: [(0, n.jsx)(a.FormTitle, {
        id: f,
        children: R.Z.Messages.INPUT_MODE_PTT_RELEASE_DELAY
      }), (0, n.jsx)(a.Slider, {
        initialValue: h,
        onValueChange: e => d.Z.setMode(r, {
          delay: e
        }, s),
        onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
        maxValue: E.qhL,
        "aria-labelledby": f
      })]
    })]
  }) : (0, n.jsx)(I, {
    speaking: Z,
    inputMode: r,
    threshold: c,
    autoThreshold: m,
    onThresholdChange: (e, t) => d.Z.setMode(r, {
      threshold: e,
      autoThreshold: t
    }, s)
  }), (0, n.jsxs)(i.Fragment, {
    children: [(0, n.jsx)(a.FormItem, {
      title: R.Z.Messages.FORM_LABEL_INPUT_DEVICE,
      className: T.marginBottom20,
      children: (0, n.jsx)(a.SingleSelect, {
        value: _,
        onChange: e => d.Z.setInputDevice(e, "Voice Settings"),
        options: l().map(g, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: N
      })
    }), (0, n.jsxs)(a.FormItem, {
      className: T.marginBottom20,
      children: [(0, n.jsx)(a.FormTitle, {
        id: M,
        children: R.Z.Messages.FORM_LABEL_INPUT_VOLUME
      }), (0, n.jsx)(a.Slider, {
        initialValue: (0, p.P)(C),
        asValueChanges: e => d.Z.setInputVolume((0, p.A)(e)),
        "aria-labelledby": M
      })]
    }), (0, n.jsx)(a.FormItem, {
      title: R.Z.Messages.FORM_LABEL_OUTPUT_DEVICE,
      className: T.marginBottom20,
      children: (0, n.jsx)(a.SingleSelect, {
        value: O,
        onChange: e => d.Z.setOutputDevice(e, "Voice Settings"),
        options: l().map(x, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: S
      })
    }), (0, n.jsxs)(a.FormItem, {
      className: T.marginBottom20,
      children: [(0, n.jsx)(a.FormTitle, {
        id: D,
        children: R.Z.Messages.FORM_LABEL_OUTPUT_VOLUME
      }), (0, n.jsx)(a.Slider, {
        initialValue: (0, p.P)(b),
        maxValue: 200,
        asValueChanges: e => d.Z.setOutputVolume((0, p.A)(e)),
        "aria-labelledby": D
      })]
    }), (0, n.jsx)(a.FormItem, {
      title: R.Z.Messages.FORM_LABEL_INPUT_MODE,
      className: T.marginBottom20,
      children: (0, n.jsx)(a.RadioGroup, {
        onChange: e => {
          let {
            value: t
          } = e;
          return d.Z.setMode(t, {}, s)
        },
        options: U,
        value: r
      })
    }), t]
  })
});

function b(e) {
  var t;
  return (0, h.Z)(() => {
    null != E.e3s && e.onClose()
  }), (0, n.jsxs)(a.ModalRoot, {
    transitionState: e.transitionState,
    "aria-label": R.Z.Messages.VOICE_SETTINGS,
    children: [(0, n.jsxs)(a.ModalHeader, {
      children: [(0, n.jsxs)(m.Z.Child, {
        children: [(0, n.jsx)(a.FormTitle, {
          tag: "h1",
          className: T.marginReset,
          children: R.Z.Messages.VOICE_SETTINGS
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          className: C.title,
          children: e.title
        })]
      }), (0, n.jsx)(m.Z.Child, {
        grow: 0,
        children: (0, n.jsx)(a.ModalCloseButton, {
          onClick: e.onClose
        })
      })]
    }), (0, n.jsx)(a.ModalContent, {
      children: (0, n.jsx)(x, {
        mediaEngineContext: null !== (t = e.mediaEngineContext) && void 0 !== t ? t : _.Yn.DEFAULT
      })
    })]
  })
}