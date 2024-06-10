"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
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
  _ = s("12647"),
  I = s("998502"),
  N = s("981631"),
  g = s("65154"),
  f = s("689938"),
  m = s("611273");
async function C() {
  let e = await d.default.fileManager.getModulePath(),
    t = d.default.fileManager.join(e, "discord_voice");
  d.default.fileManager.showItemInFolder(t)
}

function A(e) {
  (0, i.openModal)(t => (0, a.jsx)(i.ConfirmModal, {
    header: f.default.Messages.SET_DEBUG_LOGGING,
    confirmText: f.default.Messages.OKAY,
    cancelText: f.default.Messages.CANCEL,
    onCancel: t.onClose,
    onConfirm: () => r.default.setDebugLogging(e),
    ...t,
    children: (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      children: f.default.Messages.SET_DEBUG_LOGGING_BODY
    })
  }))
}

function O() {
  let [e, t] = n.useState(!1), {
    aecDumpSupported: s,
    debugLogging: d,
    aecDumpEnabled: O,
    supportsConnectionReplay: h
  } = (0, l.useStateFromStoresObject)([c.default], () => ({
    aecDumpSupported: c.default.isAecDumpSupported(),
    debugLogging: c.default.getDebugLogging(),
    aecDumpEnabled: c.default.getAecDump(),
    supportsConnectionReplay: c.default.supports(g.Features.CONNECTION_REPLAY)
  })), p = (0, l.useStateFromStores)([S.default], () => S.default.shouldRecordNextConnection()), R = (0, l.useStateFromStores)([E.default], () => {
    var e, t;
    return null !== (t = null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
  }), M = ("canary" === I.default.releaseChannel || "development" === I.default.releaseChannel) && R && h;
  async function x() {
    t(!0);
    try {
      await c.default.getMediaEngine().writeAudioDebugState(), await _.default.submitLiveCrashReport({
        message: {
          message: "User Live Dump"
        }
      }), await (0, u.uploadDebugLogFiles)(N.DebugLogCategory.RTC), ! function() {
        let e = f.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS_HEADER,
          t = f.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS;
        (0, i.openModal)(s => (0, a.jsx)(i.ConfirmModal, {
          header: e,
          confirmButtonColor: i.Button.Colors.BRAND,
          confirmText: f.default.Messages.OKAY,
          ...s,
          children: (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: t
          })
        }))
      }()
    } catch (e) {
      ! function(e) {
        let t = f.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_HEADER,
          s = null != e ? e : f.default.Messages.UPLOAD_DEBUG_LOG_FAILURE;
        (0, i.openModal)(e => (0, a.jsx)(i.ConfirmModal, {
          header: t,
          confirmButtonColor: i.Button.Colors.BRAND,
          confirmText: f.default.Messages.OKAY,
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
    className: m.marginBottom40,
    title: f.default.Messages.FORM_LABEL_DEBUG,
    children: [s && (0, a.jsx)(i.FormSwitch, {
      value: O,
      onChange: e => r.default.setAecDump(e),
      note: f.default.Messages.FORM_HELP_AEC_DUMP,
      children: f.default.Messages.FORM_CHECKBOX_AEC_DUMP
    }), M && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.FormSwitch, {
        hideBorder: !0,
        value: p,
        onChange: e => o.setShouldRecordNextConnection(e),
        note: f.default.Messages.FORM_HELP_CONNECTION_LOG,
        children: f.default.Messages.FORM_CHECKBOX_CONNECTION_LOG
      }), (0, a.jsx)(i.FormItem, {
        children: (0, a.jsx)(T.default, {
          className: m.marginBottom20,
          children: (0, a.jsx)(T.default.Child, {
            grow: 0,
            shrink: 0,
            children: (0, a.jsx)(i.Button, {
              size: i.Button.Sizes.SMALL,
              onClick: () => o.openReplay(),
              children: f.default.Messages.OPEN_CONNECTION_REPLAY
            })
          })
        })
      })]
    }), (0, a.jsx)(i.FormSwitch, {
      hideBorder: !0,
      value: d,
      onChange: A,
      note: f.default.Messages.FORM_HELP_DEBUG_LOGGING,
      children: f.default.Messages.FORM_CHECKBOX_DEBUG_LOGGING
    }), (0, a.jsx)(i.FormItem, {
      children: (0, a.jsxs)(T.default, {
        children: [(0, a.jsx)(T.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(i.Button, {
            disabled: e,
            size: i.Button.Sizes.SMALL,
            onClick: x,
            children: f.default.Messages.UPLOAD
          })
        }), (0, a.jsx)(T.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(i.Button, {
            size: i.Button.Sizes.SMALL,
            onClick: C,
            children: f.default.Messages.SHOW_FOLDER
          })
        })]
      })
    })]
  })
}