"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("481060"),
  r = s("846027"),
  o = s("304680"),
  d = s("579806"),
  u = s("729345"),
  c = s("921801"),
  S = s("131951"),
  E = s("226961"),
  T = s("594174"),
  _ = s("285952"),
  I = s("12647"),
  N = s("998502"),
  g = s("726985"),
  f = s("981631"),
  m = s("65154"),
  A = s("689938"),
  C = s("611273");
async function O() {
  let e = await d.default.fileManager.getModulePath(),
    t = d.default.fileManager.join(e, "discord_voice");
  d.default.fileManager.showItemInFolder(t)
}

function h(e) {
  (0, l.openModal)(t => (0, a.jsx)(l.ConfirmModal, {
    header: A.default.Messages.SET_DEBUG_LOGGING,
    confirmText: A.default.Messages.OKAY,
    cancelText: A.default.Messages.CANCEL,
    onCancel: t.onClose,
    onConfirm: () => r.default.setDebugLogging(e),
    ...t,
    children: (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      children: A.default.Messages.SET_DEBUG_LOGGING_BODY
    })
  }))
}

function R() {
  let [e, t] = n.useState(!1), {
    aecDumpSupported: s,
    debugLogging: d,
    aecDumpEnabled: R,
    supportsConnectionReplay: p
  } = (0, i.useStateFromStoresObject)([S.default], () => ({
    aecDumpSupported: S.default.isAecDumpSupported(),
    debugLogging: S.default.getDebugLogging(),
    aecDumpEnabled: S.default.getAecDump(),
    supportsConnectionReplay: S.default.supports(m.Features.CONNECTION_REPLAY)
  })), M = (0, i.useStateFromStores)([E.default], () => E.default.shouldRecordNextConnection()), D = (0, i.useStateFromStores)([T.default], () => {
    var e, t;
    return null !== (t = null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
  }), x = ("canary" === N.default.releaseChannel || "development" === N.default.releaseChannel) && D && p;
  async function L() {
    t(!0);
    try {
      await S.default.getMediaEngine().writeAudioDebugState(), await I.default.submitLiveCrashReport({
        message: {
          message: "User Live Dump"
        }
      }), await (0, u.uploadDebugLogFiles)(f.DebugLogCategory.RTC), ! function() {
        let e = A.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS_HEADER,
          t = A.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS;
        (0, l.openModal)(s => (0, a.jsx)(l.ConfirmModal, {
          header: e,
          confirmButtonColor: l.Button.Colors.BRAND,
          confirmText: A.default.Messages.OKAY,
          ...s,
          children: (0, a.jsx)(l.Text, {
            variant: "text-md/normal",
            children: t
          })
        }))
      }()
    } catch (e) {
      ! function(e) {
        let t = A.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_HEADER,
          s = null != e ? e : A.default.Messages.UPLOAD_DEBUG_LOG_FAILURE;
        (0, l.openModal)(e => (0, a.jsx)(l.ConfirmModal, {
          header: t,
          confirmButtonColor: l.Button.Colors.BRAND,
          confirmText: A.default.Messages.OKAY,
          ...e,
          children: (0, a.jsx)(l.Text, {
            variant: "text-md/normal",
            children: s
          })
        }))
      }(e.displayMessage)
    }
  }
  return (0, a.jsxs)(l.FormSection, {
    className: C.marginBottom40,
    title: A.default.Messages.FORM_LABEL_DEBUG,
    children: [s && (0, a.jsx)(c.Subsetting, {
      setting: g.WebSetting.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
      children: (0, a.jsx)(l.FormSwitch, {
        value: R,
        onChange: e => r.default.setAecDump(e),
        note: A.default.Messages.FORM_HELP_AEC_DUMP,
        children: A.default.Messages.FORM_CHECKBOX_AEC_DUMP
      })
    }), x && (0, a.jsxs)(c.Subsetting, {
      setting: g.WebSetting.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
      children: [(0, a.jsx)(l.FormSwitch, {
        hideBorder: !0,
        value: M,
        onChange: e => o.setShouldRecordNextConnection(e),
        note: A.default.Messages.FORM_HELP_CONNECTION_LOG,
        children: A.default.Messages.FORM_CHECKBOX_CONNECTION_LOG
      }), (0, a.jsx)(l.FormItem, {
        children: (0, a.jsx)(_.default, {
          className: C.marginBottom20,
          children: (0, a.jsx)(_.default.Child, {
            grow: 0,
            shrink: 0,
            children: (0, a.jsx)(l.Button, {
              size: l.Button.Sizes.SMALL,
              onClick: () => o.openReplay(),
              children: A.default.Messages.OPEN_CONNECTION_REPLAY
            })
          })
        })
      }), (0, a.jsx)(l.FormDivider, {
        className: C.marginBottom20
      })]
    }), (0, a.jsxs)(c.Subsetting, {
      setting: g.WebSetting.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
      children: [(0, a.jsx)(l.FormSwitch, {
        hideBorder: !0,
        value: d,
        onChange: h,
        note: A.default.Messages.FORM_HELP_DEBUG_LOGGING,
        children: A.default.Messages.FORM_CHECKBOX_DEBUG_LOGGING
      }), (0, a.jsx)(l.FormItem, {
        children: (0, a.jsxs)(_.default, {
          children: [(0, a.jsx)(_.default.Child, {
            grow: 0,
            shrink: 0,
            children: (0, a.jsx)(l.Button, {
              disabled: e,
              size: l.Button.Sizes.SMALL,
              onClick: L,
              children: A.default.Messages.UPLOAD
            })
          }), (0, a.jsx)(_.default.Child, {
            grow: 0,
            shrink: 0,
            children: (0, a.jsx)(l.Button, {
              size: l.Button.Sizes.SMALL,
              onClick: O,
              children: A.default.Messages.SHOW_FOLDER
            })
          })]
        })
      })]
    })]
  })
}