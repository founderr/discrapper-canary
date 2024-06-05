"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("846027"),
  u = s("230711"),
  c = s("579806"),
  S = s("921801"),
  E = s("131951"),
  T = s("663389"),
  _ = s("153124"),
  I = s("63063"),
  N = s("358085"),
  f = s("894939"),
  g = s("321499"),
  m = s("710808"),
  C = s("625205"),
  A = s("325808"),
  h = s("823087"),
  O = s("546997"),
  p = s("167540"),
  R = s("803567"),
  x = s("269876"),
  M = s("976758"),
  D = s("526761"),
  L = s("726985"),
  P = s("981631"),
  b = s("65154"),
  v = s("689938"),
  U = s("611273");
let j = (0, _.uid)(),
  G = "".concat(I.default.getArticleURL(P.HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm");

function F(e, t, s) {
  (0, o.openModal)(n => (0, a.jsx)(o.ConfirmModal, {
    header: e,
    confirmText: v.default.Messages.OKAY,
    cancelText: v.default.Messages.CANCEL,
    onConfirm: s,
    ...n,
    children: (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      children: t
    })
  }))
}

function B() {
  let {
    inputMode: e,
    qosEnabled: t,
    attenuation: s,
    attenuateWhileSpeakingSelf: l,
    attenuateWhileSpeakingOthers: _,
    audioSubsystem: I,
    silenceWarning: P,
    debugLoggingEnabled: B,
    legacyAudioSubsystemSupported: y,
    experimentalAudioSubsystemSupported: V,
    qosSupported: H,
    attenuationSupported: k
  } = (0, r.useStateFromStoresObject)([E.default], () => ({
    inputMode: E.default.getMode(),
    qosEnabled: E.default.getQoS(),
    attenuation: E.default.getAttenuation(),
    attenuateWhileSpeakingSelf: E.default.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: E.default.getAttenuateWhileSpeakingOthers(),
    audioSubsystem: E.default.getAudioSubsystem(),
    silenceWarning: E.default.getEnableSilenceWarning(),
    debugLoggingEnabled: E.default.supports(b.Features.DEBUG_LOGGING),
    legacyAudioSubsystemSupported: E.default.supports(b.Features.LEGACY_AUDIO_SUBSYSTEM),
    experimentalAudioSubsystemSupported: E.default.supports(b.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM),
    qosSupported: E.default.supports(b.Features.QOS),
    attenuationSupported: E.default.supports(b.Features.ATTENUATION)
  })), Y = (0, r.useStateFromStores)([T.default], () => T.default.getSubsection()), w = n.createRef(), W = N.isPlatformEmbedded && B && null != c.default.fileManager.readLogFiles;
  return n.useEffect(() => {
    if (Y === D.SOUNDBOARD_SUBSECTION) {
      var e;
      null == w || null === (e = w.current) || void 0 === e || e.scrollIntoView(), u.default.clearSubsection()
    }
  }, [w, Y]), (0, a.jsxs)(o.FormSection, {
    tag: o.FormTitleTags.H1,
    title: v.default.Messages.VOICE_SETTINGS,
    children: [(0, a.jsx)(S.Subsetting, {
      setting: L.WebSetting.VOICE_AND_VIDEO_DEVICES,
      children: (0, a.jsx)(C.default, {})
    }), (0, a.jsx)(S.Subsetting, {
      setting: L.WebSetting.VOICE_AND_VIDEO_VOLUME_CONTROLS,
      children: (0, a.jsx)(M.default, {})
    }), (0, a.jsx)(S.Subsetting, {
      setting: L.WebSetting.VOICE_AND_VIDEO_MIC_TEST,
      children: (0, a.jsx)(h.default, {})
    }), (0, a.jsxs)(S.Subsetting, {
      setting: L.WebSetting.VOICE_AND_VIDEO_TROUBLESHOOTING,
      children: [(0, a.jsx)(o.FormText, {
        className: U.marginBottom20,
        type: o.FormText.Types.DESCRIPTION,
        children: v.default.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_GUIDE.format({
          guideURL: G
        })
      }), (0, a.jsx)(o.FormDivider, {
        className: i()(U.marginBottom20)
      })]
    }), (0, a.jsx)(S.Subsetting, {
      setting: L.WebSetting.VOICE_AND_VIDEO_INPUT_MODE,
      children: (0, a.jsx)(A.default, {})
    }), (0, a.jsxs)(S.Subsetting, {
      setting: L.WebSetting.VOICE_AND_VIDEO_SENSITIVITY,
      children: [e === b.InputModes.VOICE_ACTIVITY && (0, a.jsx)(x.default, {}), (0, a.jsx)(o.FormDivider, {
        className: U.marginBottom40
      })]
    }), (0, a.jsx)(S.Subsetting, {
      setting: L.WebSetting.VOICE_AND_VIDEO_SOUNDBOARD,
      children: (0, a.jsx)("div", {
        style: {
          scrollMarginTop: "48px"
        },
        ref: w
      })
    }), (0, a.jsx)(S.Subsetting, {
      setting: L.WebSetting.VOICE_AND_VIDEO_CALL_SOUNDS,
      children: (0, a.jsx)(f.default, {})
    }), (0, a.jsx)(S.Subsetting, {
      setting: L.WebSetting.VOICE_AND_VIDEO_VIDEO,
      children: (0, a.jsx)(p.default, {})
    }), (0, a.jsx)(S.Subsetting, {
      setting: L.WebSetting.VOICE_AND_VIDEO_ADVANCED,
      children: (0, a.jsxs)(o.HeadingLevel, {
        component: (0, a.jsx)(o.FormTitle, {
          tag: o.FormTitleTags.H1,
          className: U.marginBottom20,
          children: v.default.Messages.SETTINGS_ADVANCED
        }),
        children: [(0, a.jsx)(S.Subsetting, {
          setting: L.WebSetting.VOICE_AND_VIDEO_ADVANCED_CODECS,
          children: (0, a.jsx)(g.default, {})
        }), (0, a.jsx)(S.Subsetting, {
          setting: L.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
          children: (0, a.jsx)(R.default, {})
        }), H && (0, a.jsx)(S.Subsetting, {
          setting: L.WebSetting.VOICE_AND_VIDEO_ADVANCED_QOS,
          children: (0, a.jsx)(o.FormSection, {
            className: U.marginBottom20,
            title: v.default.Messages.FORM_LABEL_QOS,
            children: (0, a.jsx)(o.FormSwitch, {
              value: t,
              onChange: e => d.default.setQoS(e),
              note: v.default.Messages.FORM_HELP_QOS,
              children: v.default.Messages.FORM_CHECKBOX_QOS
            })
          })
        }), k && (0, a.jsx)(S.Subsetting, {
          setting: L.WebSetting.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
          children: (0, a.jsxs)(o.FormSection, {
            className: U.marginBottom20,
            children: [(0, a.jsx)(o.FormTitle, {
              id: j,
              tag: o.FormTitleTags.H5,
              className: U.marginBottom8,
              children: v.default.Messages.FORM_LABEL_ATTENUATION
            }), (0, a.jsx)(o.Slider, {
              initialValue: s,
              onValueChange: e => {
                d.default.setAttenuation(e, l, _)
              },
              "aria-labelledby": j
            }), (0, a.jsx)(o.FormText, {
              className: U.marginBottom20,
              type: o.FormText.Types.DESCRIPTION,
              children: v.default.Messages.FORM_HELP_ATTENUATION
            }), (0, a.jsx)(o.FormDivider, {
              className: U.marginBottom20
            }), (0, a.jsx)(o.FormSwitch, {
              value: l,
              onChange: e => d.default.setAttenuation(s, e, _),
              children: v.default.Messages.ATTENUATE_WHILE_SPEAKING_SELF
            }), (0, a.jsx)(o.FormSwitch, {
              value: _,
              onChange: e => d.default.setAttenuation(s, l, e),
              children: v.default.Messages.ATTENUATE_WHILE_SPEAKING_OTHERS
            })]
          })
        }), (y || V) && (0, a.jsx)(S.Subsetting, {
          setting: L.WebSetting.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
          children: (0, a.jsxs)(o.FormSection, {
            className: U.marginBottom20,
            title: v.default.Messages.FORM_LABEL_SUBSYSTEM,
            children: [(0, a.jsx)(o.SingleSelect, {
              className: U.marginBottom20,
              value: I,
              options: function(e, t) {
                let s = [{
                  value: b.AudioSubsystems.STANDARD,
                  label: "Standard"
                }];
                return e && s.push({
                  value: b.AudioSubsystems.LEGACY,
                  label: "Legacy"
                }), t && s.push({
                  value: b.AudioSubsystems.EXPERIMENTAL,
                  label: "Experimental"
                }), s
              }(y, V),
              onChange: e => {
                F(v.default.Messages.SWITCH_SUBSYSTEM, v.default.Messages.SWITCH_SUBSYSTEM_BODY, () => d.default.setAudioSubsystem(e))
              }
            }), (0, a.jsx)(o.FormDivider, {
              className: U.marginBottom20
            })]
          })
        }), N.isPlatformEmbedded && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(O.default, {}), (0, a.jsx)(o.FormSection, {
            className: U.marginBottom20,
            title: v.default.Messages.FORM_LABEL_VOICE_DIAGNOSTICS,
            children: (0, a.jsx)(o.FormSwitch, {
              value: P,
              onChange: e => d.default.setSilenceWarning(e),
              children: v.default.Messages.DISPLAY_SILENCE_WARNING
            })
          })]
        }), W && (0, a.jsx)(m.default, {}), (0, a.jsx)(S.Subsetting, {
          setting: L.WebSetting.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
          children: (0, a.jsx)(o.FormItem, {
            children: (0, a.jsx)(o.Button, {
              look: o.Button.Looks.OUTLINED,
              color: o.Button.Colors.RED,
              onClick: () => {
                F(v.default.Messages.RESET_VOICE_SETTINGS, v.default.Messages.RESET_VOICE_SETTINGS_BODY, d.default.reset)
              },
              size: o.Button.Sizes.SMALL,
              children: v.default.Messages.RESET_VOICE_SETTINGS
            })
          })
        })]
      })
    })]
  })
}