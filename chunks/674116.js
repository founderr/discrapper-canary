t.d(s, {
  Z: function() {
    return U
  }
}), t(653041);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(846027),
  d = t(230711),
  _ = t(921801),
  E = t(131951),
  u = t(663389),
  T = t(153124),
  S = t(63063),
  I = t(894939),
  N = t(321499),
  C = t(710808),
  A = t(625205),
  m = t(325808),
  O = t(823087),
  g = t(546997),
  h = t(167540),
  R = t(803567),
  p = t(269876),
  x = t(976758),
  M = t(526761),
  D = t(726985),
  f = t(981631),
  L = t(65154),
  P = t(689938),
  Z = t(331651);
let v = (0, T.hQ)(),
  b = "".concat(S.Z.getArticleURL(f.BhN.VOICE_VIDEO_TROUBLESHOOTING), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm");

function j(e, s, t) {
  (0, l.openModal)(a => (0, n.jsx)(l.ConfirmModal, {
    header: e,
    confirmText: P.Z.Messages.OKAY,
    cancelText: P.Z.Messages.CANCEL,
    onConfirm: t,
    ...a,
    children: (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      children: s
    })
  }))
}

function U() {
  let {
    inputMode: e,
    qosEnabled: s,
    attenuation: t,
    attenuateWhileSpeakingSelf: i,
    attenuateWhileSpeakingOthers: T,
    audioSubsystem: S,
    silenceWarning: f,
    legacyAudioSubsystemSupported: U,
    experimentalAudioSubsystemSupported: B
  } = (0, o.cj)([E.Z], () => ({
    inputMode: E.Z.getMode(),
    qosEnabled: E.Z.getQoS(),
    attenuation: E.Z.getAttenuation(),
    attenuateWhileSpeakingSelf: E.Z.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: E.Z.getAttenuateWhileSpeakingOthers(),
    audioSubsystem: E.Z.getAudioSubsystem(),
    silenceWarning: E.Z.getEnableSilenceWarning(),
    legacyAudioSubsystemSupported: E.Z.supports(L.AN.LEGACY_AUDIO_SUBSYSTEM),
    experimentalAudioSubsystemSupported: E.Z.supports(L.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
    qosSupported: E.Z.supports(L.AN.QOS),
    attenuationSupported: E.Z.supports(L.AN.ATTENUATION)
  })), G = (0, o.e7)([u.Z], () => u.Z.getSubsection()), F = a.createRef();
  return a.useEffect(() => {
    if (G === M.GA) {
      var e;
      null == F || null === (e = F.current) || void 0 === e || e.scrollIntoView(), d.Z.clearSubsection()
    }
  }, [F, G]), (0, n.jsxs)(l.FormSection, {
    tag: l.FormTitleTags.H1,
    title: P.Z.Messages.VOICE_SETTINGS,
    children: [(0, n.jsx)(_.F, {
      setting: D.s6.VOICE_AND_VIDEO_DEVICES,
      children: (0, n.jsx)(A.Z, {})
    }), (0, n.jsx)(_.F, {
      setting: D.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
      children: (0, n.jsx)(x.Z, {})
    }), (0, n.jsxs)(_.F, {
      setting: D.s6.VOICE_AND_VIDEO_MIC_TEST,
      children: [(0, n.jsx)(O.Z, {}), (0, n.jsx)(l.FormText, {
        className: Z.marginBottom20,
        type: l.FormText.Types.DESCRIPTION,
        children: P.Z.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_GUIDE.format({
          guideURL: b
        })
      }), (0, n.jsx)(l.FormDivider, {
        className: r()(Z.marginBottom20)
      })]
    }), (0, n.jsx)(_.F, {
      setting: D.s6.VOICE_AND_VIDEO_INPUT_MODE,
      children: (0, n.jsx)(m.Z, {})
    }), (0, n.jsxs)(_.F, {
      setting: D.s6.VOICE_AND_VIDEO_SENSITIVITY,
      children: [e === L.pM.VOICE_ACTIVITY && (0, n.jsx)(p.Z, {}), (0, n.jsx)(l.FormDivider, {
        className: Z.marginBottom40
      })]
    }), (0, n.jsx)(_.F, {
      setting: D.s6.VOICE_AND_VIDEO_SOUNDBOARD,
      children: (0, n.jsx)("div", {
        style: {
          scrollMarginTop: "48px"
        },
        ref: F
      })
    }), (0, n.jsx)(_.F, {
      setting: D.s6.VOICE_AND_VIDEO_SOUNDS,
      children: (0, n.jsx)(I.Z, {})
    }), (0, n.jsx)(_.F, {
      setting: D.s6.VOICE_AND_VIDEO_VIDEO,
      children: (0, n.jsx)(h.Z, {})
    }), (0, n.jsx)(_.F, {
      setting: D.s6.VOICE_AND_VIDEO_ADVANCED,
      children: (0, n.jsxs)(l.HeadingLevel, {
        component: (0, n.jsx)(l.FormTitle, {
          tag: l.FormTitleTags.H1,
          className: Z.marginBottom20,
          children: P.Z.Messages.SETTINGS_ADVANCED
        }),
        children: [(0, n.jsx)(_.F, {
          setting: D.s6.VOICE_AND_VIDEO_ADVANCED_CODECS,
          children: (0, n.jsx)(N.Z, {})
        }), (0, n.jsx)(_.F, {
          setting: D.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
          children: (0, n.jsx)(R.Z, {})
        }), (0, n.jsx)(_.F, {
          setting: D.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
          children: (0, n.jsx)(l.FormSection, {
            className: Z.marginBottom20,
            title: P.Z.Messages.FORM_LABEL_QOS,
            children: (0, n.jsx)(l.FormSwitch, {
              value: s,
              onChange: e => c.Z.setQoS(e),
              note: P.Z.Messages.FORM_HELP_QOS,
              children: P.Z.Messages.FORM_CHECKBOX_QOS
            })
          })
        }), (0, n.jsx)(_.F, {
          setting: D.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
          children: (0, n.jsxs)(l.FormSection, {
            className: Z.marginBottom20,
            children: [(0, n.jsx)(l.FormTitle, {
              id: v,
              tag: l.FormTitleTags.H5,
              className: Z.marginBottom8,
              children: P.Z.Messages.FORM_LABEL_ATTENUATION
            }), (0, n.jsx)(l.Slider, {
              initialValue: t,
              onValueChange: e => {
                c.Z.setAttenuation(e, i, T)
              },
              "aria-labelledby": v
            }), (0, n.jsx)(l.FormText, {
              className: Z.marginBottom20,
              type: l.FormText.Types.DESCRIPTION,
              children: P.Z.Messages.FORM_HELP_ATTENUATION
            }), (0, n.jsx)(l.FormDivider, {
              className: Z.marginBottom20
            }), (0, n.jsx)(l.FormSwitch, {
              value: i,
              onChange: e => c.Z.setAttenuation(t, e, T),
              children: P.Z.Messages.ATTENUATE_WHILE_SPEAKING_SELF
            }), (0, n.jsx)(l.FormSwitch, {
              value: T,
              onChange: e => c.Z.setAttenuation(t, i, e),
              children: P.Z.Messages.ATTENUATE_WHILE_SPEAKING_OTHERS
            })]
          })
        }), (0, n.jsx)(_.F, {
          setting: D.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
          children: (0, n.jsxs)(l.FormSection, {
            className: Z.marginBottom20,
            title: P.Z.Messages.FORM_LABEL_SUBSYSTEM,
            children: [(0, n.jsx)(l.SingleSelect, {
              className: Z.marginBottom20,
              value: S,
              options: function(e, s) {
                let t = [{
                  value: L.iA.STANDARD,
                  label: "Standard"
                }];
                return e && t.push({
                  value: L.iA.LEGACY,
                  label: "Legacy"
                }), s && t.push({
                  value: L.iA.EXPERIMENTAL,
                  label: "Experimental"
                }), t
              }(U, B),
              onChange: e => {
                j(P.Z.Messages.SWITCH_SUBSYSTEM, P.Z.Messages.SWITCH_SUBSYSTEM_BODY, () => c.Z.setAudioSubsystem(e))
              }
            }), (0, n.jsx)(l.FormDivider, {
              className: Z.marginBottom20
            })]
          })
        }), (0, n.jsxs)(_.F, {
          setting: D.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
          children: [(0, n.jsx)(g.Z, {}), (0, n.jsx)(l.FormSection, {
            className: Z.marginBottom20,
            title: P.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS,
            children: (0, n.jsx)(l.FormSwitch, {
              value: f,
              onChange: e => c.Z.setSilenceWarning(e),
              children: P.Z.Messages.DISPLAY_SILENCE_WARNING
            })
          })]
        }), (0, n.jsx)(_.F, {
          setting: D.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
          children: (0, n.jsx)(C.Z, {})
        }), (0, n.jsx)(_.F, {
          setting: D.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
          children: (0, n.jsx)(l.FormItem, {
            children: (0, n.jsx)(l.Button, {
              look: l.Button.Looks.OUTLINED,
              color: l.Button.Colors.RED,
              onClick: () => {
                j(P.Z.Messages.RESET_VOICE_SETTINGS, P.Z.Messages.RESET_VOICE_SETTINGS_BODY, c.Z.reset)
              },
              size: l.Button.Sizes.SMALL,
              children: P.Z.Messages.RESET_VOICE_SETTINGS
            })
          })
        })]
      })
    })]
  })
}