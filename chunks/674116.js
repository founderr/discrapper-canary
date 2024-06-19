t.d(s, {
  Z: function() {
    return B
  }
}), t(653041);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(846027),
  E = t(230711),
  d = t(921801),
  _ = t(131951),
  T = t(663389),
  S = t(153124),
  u = t(63063),
  I = t(894939),
  N = t(321499),
  A = t(710808),
  C = t(625205),
  O = t(325808),
  m = t(823087),
  h = t(546997),
  g = t(167540),
  R = t(803567),
  M = t(269876),
  x = t(976758),
  D = t(526761),
  p = t(726985),
  L = t(981631),
  P = t(65154),
  Z = t(689938),
  f = t(331651);
let v = (0, S.hQ)(),
  j = "".concat(u.Z.getArticleURL(L.BhN.VOICE_VIDEO_TROUBLESHOOTING), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm");

function U(e, s, t) {
  (0, o.openModal)(i => (0, n.jsx)(o.ConfirmModal, {
    header: e,
    confirmText: Z.Z.Messages.OKAY,
    cancelText: Z.Z.Messages.CANCEL,
    onConfirm: t,
    ...i,
    children: (0, n.jsx)(o.Text, {
      variant: "text-md/normal",
      children: s
    })
  }))
}

function B() {
  let {
    inputMode: e,
    qosEnabled: s,
    attenuation: t,
    attenuateWhileSpeakingSelf: a,
    attenuateWhileSpeakingOthers: S,
    audioSubsystem: u,
    silenceWarning: L,
    legacyAudioSubsystemSupported: B,
    experimentalAudioSubsystemSupported: b
  } = (0, r.cj)([_.Z], () => ({
    inputMode: _.Z.getMode(),
    qosEnabled: _.Z.getQoS(),
    attenuation: _.Z.getAttenuation(),
    attenuateWhileSpeakingSelf: _.Z.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: _.Z.getAttenuateWhileSpeakingOthers(),
    audioSubsystem: _.Z.getAudioSubsystem(),
    silenceWarning: _.Z.getEnableSilenceWarning(),
    legacyAudioSubsystemSupported: _.Z.supports(P.AN.LEGACY_AUDIO_SUBSYSTEM),
    experimentalAudioSubsystemSupported: _.Z.supports(P.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
    qosSupported: _.Z.supports(P.AN.QOS),
    attenuationSupported: _.Z.supports(P.AN.ATTENUATION)
  })), G = (0, r.e7)([T.Z], () => T.Z.getSubsection()), F = i.createRef();
  return i.useEffect(() => {
    if (G === D.GA) {
      var e;
      null == F || null === (e = F.current) || void 0 === e || e.scrollIntoView(), E.Z.clearSubsection()
    }
  }, [F, G]), (0, n.jsxs)(o.FormSection, {
    tag: o.FormTitleTags.H1,
    title: Z.Z.Messages.VOICE_SETTINGS,
    children: [(0, n.jsx)(d.F, {
      setting: p.s6.VOICE_AND_VIDEO_DEVICES,
      children: (0, n.jsx)(C.Z, {})
    }), (0, n.jsx)(d.F, {
      setting: p.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
      children: (0, n.jsx)(x.Z, {})
    }), (0, n.jsxs)(d.F, {
      setting: p.s6.VOICE_AND_VIDEO_MIC_TEST,
      children: [(0, n.jsx)(m.Z, {}), (0, n.jsx)(o.FormText, {
        className: f.marginBottom20,
        type: o.FormText.Types.DESCRIPTION,
        children: Z.Z.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_GUIDE.format({
          guideURL: j
        })
      }), (0, n.jsx)(o.FormDivider, {
        className: l()(f.marginBottom20)
      })]
    }), (0, n.jsx)(d.F, {
      setting: p.s6.VOICE_AND_VIDEO_INPUT_MODE,
      children: (0, n.jsx)(O.Z, {})
    }), (0, n.jsxs)(d.F, {
      setting: p.s6.VOICE_AND_VIDEO_SENSITIVITY,
      children: [e === P.pM.VOICE_ACTIVITY && (0, n.jsx)(M.Z, {}), (0, n.jsx)(o.FormDivider, {
        className: f.marginBottom40
      })]
    }), (0, n.jsx)(d.F, {
      setting: p.s6.VOICE_AND_VIDEO_SOUNDBOARD,
      children: (0, n.jsx)("div", {
        style: {
          scrollMarginTop: "48px"
        },
        ref: F
      })
    }), (0, n.jsx)(d.F, {
      setting: p.s6.VOICE_AND_VIDEO_SOUNDS,
      children: (0, n.jsx)(I.Z, {})
    }), (0, n.jsx)(d.F, {
      setting: p.s6.VOICE_AND_VIDEO_VIDEO,
      children: (0, n.jsx)(g.Z, {})
    }), (0, n.jsx)(d.F, {
      setting: p.s6.VOICE_AND_VIDEO_ADVANCED,
      children: (0, n.jsxs)(o.HeadingLevel, {
        component: (0, n.jsx)(o.FormTitle, {
          tag: o.FormTitleTags.H1,
          className: f.marginBottom20,
          children: Z.Z.Messages.SETTINGS_ADVANCED
        }),
        children: [(0, n.jsx)(d.F, {
          setting: p.s6.VOICE_AND_VIDEO_ADVANCED_CODECS,
          children: (0, n.jsx)(N.Z, {})
        }), (0, n.jsx)(d.F, {
          setting: p.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
          children: (0, n.jsx)(R.Z, {})
        }), (0, n.jsx)(d.F, {
          setting: p.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
          children: (0, n.jsx)(o.FormSection, {
            className: f.marginBottom20,
            title: Z.Z.Messages.FORM_LABEL_QOS,
            children: (0, n.jsx)(o.FormSwitch, {
              value: s,
              onChange: e => c.Z.setQoS(e),
              note: Z.Z.Messages.FORM_HELP_QOS,
              children: Z.Z.Messages.FORM_CHECKBOX_QOS
            })
          })
        }), (0, n.jsx)(d.F, {
          setting: p.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
          children: (0, n.jsxs)(o.FormSection, {
            className: f.marginBottom20,
            children: [(0, n.jsx)(o.FormTitle, {
              id: v,
              tag: o.FormTitleTags.H5,
              className: f.marginBottom8,
              children: Z.Z.Messages.FORM_LABEL_ATTENUATION
            }), (0, n.jsx)(o.Slider, {
              initialValue: t,
              onValueChange: e => {
                c.Z.setAttenuation(e, a, S)
              },
              "aria-labelledby": v
            }), (0, n.jsx)(o.FormText, {
              className: f.marginBottom20,
              type: o.FormText.Types.DESCRIPTION,
              children: Z.Z.Messages.FORM_HELP_ATTENUATION
            }), (0, n.jsx)(o.FormDivider, {
              className: f.marginBottom20
            }), (0, n.jsx)(o.FormSwitch, {
              value: a,
              onChange: e => c.Z.setAttenuation(t, e, S),
              children: Z.Z.Messages.ATTENUATE_WHILE_SPEAKING_SELF
            }), (0, n.jsx)(o.FormSwitch, {
              value: S,
              onChange: e => c.Z.setAttenuation(t, a, e),
              children: Z.Z.Messages.ATTENUATE_WHILE_SPEAKING_OTHERS
            })]
          })
        }), (0, n.jsx)(d.F, {
          setting: p.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
          children: (0, n.jsxs)(o.FormSection, {
            className: f.marginBottom20,
            title: Z.Z.Messages.FORM_LABEL_SUBSYSTEM,
            children: [(0, n.jsx)(o.SingleSelect, {
              className: f.marginBottom20,
              value: u,
              options: function(e, s) {
                let t = [{
                  value: P.iA.STANDARD,
                  label: "Standard"
                }];
                return e && t.push({
                  value: P.iA.LEGACY,
                  label: "Legacy"
                }), s && t.push({
                  value: P.iA.EXPERIMENTAL,
                  label: "Experimental"
                }), t
              }(B, b),
              onChange: e => {
                U(Z.Z.Messages.SWITCH_SUBSYSTEM, Z.Z.Messages.SWITCH_SUBSYSTEM_BODY, () => c.Z.setAudioSubsystem(e))
              }
            }), (0, n.jsx)(o.FormDivider, {
              className: f.marginBottom20
            })]
          })
        }), (0, n.jsxs)(d.F, {
          setting: p.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
          children: [(0, n.jsx)(h.Z, {}), (0, n.jsx)(o.FormSection, {
            className: f.marginBottom20,
            title: Z.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS,
            children: (0, n.jsx)(o.FormSwitch, {
              value: L,
              onChange: e => c.Z.setSilenceWarning(e),
              children: Z.Z.Messages.DISPLAY_SILENCE_WARNING
            })
          })]
        }), (0, n.jsx)(d.F, {
          setting: p.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
          children: (0, n.jsx)(A.Z, {})
        }), (0, n.jsx)(d.F, {
          setting: p.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
          children: (0, n.jsx)(o.FormItem, {
            children: (0, n.jsx)(o.Button, {
              look: o.Button.Looks.OUTLINED,
              color: o.Button.Colors.RED,
              onClick: () => {
                U(Z.Z.Messages.RESET_VOICE_SETTINGS, Z.Z.Messages.RESET_VOICE_SETTINGS_BODY, c.Z.reset)
              },
              size: o.Button.Sizes.SMALL,
              children: Z.Z.Messages.RESET_VOICE_SETTINGS
            })
          })
        })]
      })
    })]
  })
}