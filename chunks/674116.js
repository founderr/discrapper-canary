"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
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
  S = s("131951"),
  E = s("663389"),
  T = s("153124"),
  _ = s("63063"),
  f = s("358085"),
  m = s("894939"),
  g = s("321499"),
  I = s("710808"),
  N = s("625205"),
  h = s("325808"),
  C = s("823087"),
  p = s("546997"),
  A = s("167540"),
  O = s("803567"),
  x = s("269876"),
  R = s("976758"),
  M = s("526761"),
  v = s("981631"),
  L = s("65154"),
  D = s("689938"),
  P = s("611273");
let b = (0, T.uid)(),
  j = "".concat(_.default.getArticleURL(v.HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm");

function U(e, t, s) {
  (0, o.openModal)(n => (0, a.jsx)(o.ConfirmModal, {
    header: e,
    confirmText: D.default.Messages.OKAY,
    cancelText: D.default.Messages.CANCEL,
    onConfirm: s,
    ...n,
    children: (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      children: t
    })
  }))
}

function y() {
  let {
    inputMode: e,
    qosEnabled: t,
    attenuation: s,
    attenuateWhileSpeakingSelf: l,
    attenuateWhileSpeakingOthers: T,
    audioSubsystem: _,
    silenceWarning: v,
    debugLoggingEnabled: y,
    legacyAudioSubsystemSupported: G,
    experimentalAudioSubsystemSupported: B,
    qosSupported: F,
    attenuationSupported: k
  } = (0, r.useStateFromStoresObject)([S.default], () => ({
    inputMode: S.default.getMode(),
    qosEnabled: S.default.getQoS(),
    attenuation: S.default.getAttenuation(),
    attenuateWhileSpeakingSelf: S.default.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: S.default.getAttenuateWhileSpeakingOthers(),
    audioSubsystem: S.default.getAudioSubsystem(),
    silenceWarning: S.default.getEnableSilenceWarning(),
    debugLoggingEnabled: S.default.supports(L.Features.DEBUG_LOGGING),
    legacyAudioSubsystemSupported: S.default.supports(L.Features.LEGACY_AUDIO_SUBSYSTEM),
    experimentalAudioSubsystemSupported: S.default.supports(L.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM),
    qosSupported: S.default.supports(L.Features.QOS),
    attenuationSupported: S.default.supports(L.Features.ATTENUATION)
  })), w = (0, r.useStateFromStores)([E.default], () => E.default.getSubsection()), H = n.createRef(), V = f.isPlatformEmbedded && y && null != c.default.fileManager.readLogFiles;
  return n.useEffect(() => {
    if (w === M.SOUNDBOARD_SUBSECTION) {
      var e;
      null == H || null === (e = H.current) || void 0 === e || e.scrollIntoView(), u.default.clearSubsection()
    }
  }, [H, w]), (0, a.jsxs)(o.FormSection, {
    tag: o.FormTitleTags.H1,
    title: D.default.Messages.VOICE_SETTINGS,
    children: [(0, a.jsx)(N.default, {}), (0, a.jsx)(R.default, {}), (0, a.jsx)(C.default, {}), (0, a.jsx)(o.FormText, {
      className: P.marginBottom20,
      type: o.FormText.Types.DESCRIPTION,
      children: D.default.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_GUIDE.format({
        guideURL: j
      })
    }), (0, a.jsx)(o.FormDivider, {
      className: i()(P.marginBottom20)
    }), (0, a.jsx)(h.default, {}), e === L.InputModes.VOICE_ACTIVITY && (0, a.jsx)(x.default, {}), (0, a.jsx)(o.FormDivider, {
      className: P.marginBottom40
    }), (0, a.jsx)("div", {
      style: {
        scrollMarginTop: "48px"
      },
      ref: H
    }), (0, a.jsx)(m.default, {}), (0, a.jsx)(A.default, {}), (0, a.jsxs)(o.HeadingLevel, {
      component: (0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H1,
        className: P.marginBottom20,
        children: D.default.Messages.SETTINGS_ADVANCED
      }),
      children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(O.default, {}), F && (0, a.jsx)(o.FormSection, {
        className: P.marginBottom20,
        title: D.default.Messages.FORM_LABEL_QOS,
        children: (0, a.jsx)(o.FormSwitch, {
          value: t,
          onChange: e => d.default.setQoS(e),
          note: D.default.Messages.FORM_HELP_QOS,
          children: D.default.Messages.FORM_CHECKBOX_QOS
        })
      }), k && (0, a.jsxs)(o.FormSection, {
        className: P.marginBottom20,
        children: [(0, a.jsx)(o.FormTitle, {
          id: b,
          tag: o.FormTitleTags.H5,
          className: P.marginBottom8,
          children: D.default.Messages.FORM_LABEL_ATTENUATION
        }), (0, a.jsx)(o.Slider, {
          initialValue: s,
          onValueChange: e => {
            d.default.setAttenuation(e, l, T)
          },
          "aria-labelledby": b
        }), (0, a.jsx)(o.FormText, {
          className: P.marginBottom20,
          type: o.FormText.Types.DESCRIPTION,
          children: D.default.Messages.FORM_HELP_ATTENUATION
        }), (0, a.jsx)(o.FormDivider, {
          className: P.marginBottom20
        }), (0, a.jsx)(o.FormSwitch, {
          value: l,
          onChange: e => d.default.setAttenuation(s, e, T),
          children: D.default.Messages.ATTENUATE_WHILE_SPEAKING_SELF
        }), (0, a.jsx)(o.FormSwitch, {
          value: T,
          onChange: e => d.default.setAttenuation(s, l, e),
          children: D.default.Messages.ATTENUATE_WHILE_SPEAKING_OTHERS
        })]
      }), (G || B) && (0, a.jsxs)(o.FormSection, {
        className: P.marginBottom20,
        title: D.default.Messages.FORM_LABEL_SUBSYSTEM,
        children: [(0, a.jsx)(o.SingleSelect, {
          className: P.marginBottom20,
          value: _,
          options: function(e, t) {
            let s = [{
              value: L.AudioSubsystems.STANDARD,
              label: "Standard"
            }];
            return e && s.push({
              value: L.AudioSubsystems.LEGACY,
              label: "Legacy"
            }), t && s.push({
              value: L.AudioSubsystems.EXPERIMENTAL,
              label: "Experimental"
            }), s
          }(G, B),
          onChange: e => {
            U(D.default.Messages.SWITCH_SUBSYSTEM, D.default.Messages.SWITCH_SUBSYSTEM_BODY, () => d.default.setAudioSubsystem(e))
          }
        }), (0, a.jsx)(o.FormDivider, {
          className: P.marginBottom20
        })]
      }), f.isPlatformEmbedded && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(p.default, {}), (0, a.jsx)(o.FormSection, {
          className: P.marginBottom20,
          title: D.default.Messages.FORM_LABEL_VOICE_DIAGNOSTICS,
          children: (0, a.jsx)(o.FormSwitch, {
            value: v,
            onChange: e => d.default.setSilenceWarning(e),
            children: D.default.Messages.DISPLAY_SILENCE_WARNING
          })
        })]
      }), V && (0, a.jsx)(I.default, {}), (0, a.jsx)(o.FormItem, {
        children: (0, a.jsx)(o.Button, {
          look: o.Button.Looks.OUTLINED,
          color: o.Button.Colors.RED,
          onClick: () => {
            U(D.default.Messages.RESET_VOICE_SETTINGS, D.default.Messages.RESET_VOICE_SETTINGS_BODY, d.default.reset)
          },
          size: o.Button.Sizes.SMALL,
          children: D.default.Messages.RESET_VOICE_SETTINGS
        })
      })]
    })]
  })
}