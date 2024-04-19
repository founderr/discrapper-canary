"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("846027"),
  o = s("304680"),
  d = s("579806"),
  u = s("729345"),
  c = s("131951"),
  S = s("226961"),
  E = s("594174"),
  T = s("285952"),
  f = s("12647"),
  m = s("998502"),
  _ = s("981631"),
  g = s("65154"),
  I = s("689938"),
  h = s("794711");
async function N() {
  let e = await d.default.fileManager.getModulePath(),
    t = d.default.fileManager.join(e, "discord_voice");
  d.default.fileManager.showItemInFolder(t)
}

function p(e) {
  (0, i.openModal)(t => (0, a.jsx)(i.ConfirmModal, {
    header: I.default.Messages.SET_DEBUG_LOGGING,
    confirmText: I.default.Messages.OKAY,
    cancelText: I.default.Messages.CANCEL,
    onCancel: t.onClose,
    onConfirm: () => r.default.setDebugLogging(e),
    ...t,
    children: (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      children: I.default.Messages.SET_DEBUG_LOGGING_BODY
    })
  }))
}

function C() {
  let [e, t] = n.useState(!1), {
    aecDumpSupported: s,
    debugLogging: d,
    aecDumpEnabled: C,
    supportsConnectionReplay: A
  } = (0, l.useStateFromStoresObject)([c.default], () => ({
    aecDumpSupported: c.default.isAecDumpSupported(),
    debugLogging: c.default.getDebugLogging(),
    aecDumpEnabled: c.default.getAecDump(),
    supportsConnectionReplay: c.default.supports(g.Features.CONNECTION_REPLAY)
  })), O = (0, l.useStateFromStores)([S.default], () => S.default.shouldRecordNextConnection()), x = (0, l.useStateFromStores)([E.default], () => {
    var e, t;
    return null !== (t = null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
  }), R = ("canary" === m.default.releaseChannel || "development" === m.default.releaseChannel) && x && A;
  async function M() {
    t(!0);
    try {
      await c.default.getMediaEngine().writeAudioDebugState(), await f.default.submitLiveCrashReport({
        message: {
          message: "User Live Dump"
        }
      }), await (0, u.uploadDebugLogFiles)(_.DebugLogCategory.RTC), ! function() {
        let e = I.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS_HEADER,
          t = I.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS;
        (0, i.openModal)(s => (0, a.jsx)(i.ConfirmModal, {
          header: e,
          confirmButtonColor: i.Button.Colors.BRAND,
          confirmText: I.default.Messages.OKAY,
          ...s,
          children: (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: t
          })
        }))
      }()
    } catch (e) {
      ! function(e) {
        let t = I.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_HEADER,
          s = null != e ? e : I.default.Messages.UPLOAD_DEBUG_LOG_FAILURE;
        (0, i.openModal)(e => (0, a.jsx)(i.ConfirmModal, {
          header: t,
          confirmButtonColor: i.Button.Colors.BRAND,
          confirmText: I.default.Messages.OKAY,
          ...e,
          children: (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: s
          })
        }))
      }(e.displayMessage)
    }
  }
  return (0, a.jsxs)(i.FormSection, {
    className: h.marginBottom40,
    title: I.default.Messages.FORM_LABEL_DEBUG,
    children: [s && (0, a.jsx)(i.FormSwitch, {
      value: C,
      onChange: e => r.default.setAecDump(e),
      note: I.default.Messages.FORM_HELP_AEC_DUMP,
      children: I.default.Messages.FORM_CHECKBOX_AEC_DUMP
    }), R && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.FormSwitch, {
        hideBorder: !0,
        value: O,
        onChange: e => o.setShouldRecordNextConnection(e),
        note: I.default.Messages.FORM_HELP_CONNECTION_LOG,
        children: I.default.Messages.FORM_CHECKBOX_CONNECTION_LOG
      }), (0, a.jsx)(i.FormItem, {
        children: (0, a.jsx)(T.default, {
          className: h.marginBottom20,
          children: (0, a.jsx)(T.default.Child, {
            grow: 0,
            shrink: 0,
            children: (0, a.jsx)(i.Button, {
              size: i.Button.Sizes.SMALL,
              onClick: () => o.openReplay(),
              children: I.default.Messages.OPEN_CONNECTION_REPLAY
            })
          })
        })
      })]
    }), (0, a.jsx)(i.FormSwitch, {
      hideBorder: !0,
      value: d,
      onChange: p,
      note: I.default.Messages.FORM_HELP_DEBUG_LOGGING,
      children: I.default.Messages.FORM_CHECKBOX_DEBUG_LOGGING
    }), (0, a.jsx)(i.FormItem, {
      children: (0, a.jsxs)(T.default, {
        children: [(0, a.jsx)(T.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(i.Button, {
            disabled: e,
            size: i.Button.Sizes.SMALL,
            onClick: M,
            children: I.default.Messages.UPLOAD
          })
        }), (0, a.jsx)(T.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(i.Button, {
            size: i.Button.Sizes.SMALL,
            onClick: N,
            children: I.default.Messages.SHOW_FOLDER
          })
        })]
      })
    })]
  })
}