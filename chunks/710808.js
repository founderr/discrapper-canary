"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
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
async function A() {
  let e = await d.default.fileManager.getModulePath(),
    t = d.default.fileManager.join(e, "discord_voice");
  d.default.fileManager.showItemInFolder(t)
}

function C(e) {
  (0, l.openModal)(t => (0, a.jsx)(l.ConfirmModal, {
    header: f.default.Messages.SET_DEBUG_LOGGING,
    confirmText: f.default.Messages.OKAY,
    cancelText: f.default.Messages.CANCEL,
    onCancel: t.onClose,
    onConfirm: () => r.default.setDebugLogging(e),
    ...t,
    children: (0, a.jsx)(l.Text, {
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
  } = (0, i.useStateFromStoresObject)([c.default], () => ({
    aecDumpSupported: c.default.isAecDumpSupported(),
    debugLogging: c.default.getDebugLogging(),
    aecDumpEnabled: c.default.getAecDump(),
    supportsConnectionReplay: c.default.supports(g.Features.CONNECTION_REPLAY)
  })), R = (0, i.useStateFromStores)([S.default], () => S.default.shouldRecordNextConnection()), p = (0, i.useStateFromStores)([E.default], () => {
    var e, t;
    return null !== (t = null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
  }), M = ("canary" === I.default.releaseChannel || "development" === I.default.releaseChannel) && p && h;
  async function D() {
    t(!0);
    try {
      await c.default.getMediaEngine().writeAudioDebugState(), await _.default.submitLiveCrashReport({
        message: {
          message: "User Live Dump"
        }
      }), await (0, u.uploadDebugLogFiles)(N.DebugLogCategory.RTC), ! function() {
        let e = f.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS_HEADER,
          t = f.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS;
        (0, l.openModal)(s => (0, a.jsx)(l.ConfirmModal, {
          header: e,
          confirmButtonColor: l.Button.Colors.BRAND,
          confirmText: f.default.Messages.OKAY,
          ...s,
          children: (0, a.jsx)(l.Text, {
            variant: "text-md/normal",
            children: t
          })
        }))
      }()
    } catch (e) {
      ! function(e) {
        let t = f.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_HEADER,
          s = null != e ? e : f.default.Messages.UPLOAD_DEBUG_LOG_FAILURE;
        (0, l.openModal)(e => (0, a.jsx)(l.ConfirmModal, {
          header: t,
          confirmButtonColor: l.Button.Colors.BRAND,
          confirmText: f.default.Messages.OKAY,
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
    className: m.marginBottom40,
    title: f.default.Messages.FORM_LABEL_DEBUG,
    children: [s && (0, a.jsx)(l.FormSwitch, {
      value: O,
      onChange: e => r.default.setAecDump(e),
      note: f.default.Messages.FORM_HELP_AEC_DUMP,
      children: f.default.Messages.FORM_CHECKBOX_AEC_DUMP
    }), M && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.FormSwitch, {
        hideBorder: !0,
        value: R,
        onChange: e => o.setShouldRecordNextConnection(e),
        note: f.default.Messages.FORM_HELP_CONNECTION_LOG,
        children: f.default.Messages.FORM_CHECKBOX_CONNECTION_LOG
      }), (0, a.jsx)(l.FormItem, {
        children: (0, a.jsx)(T.default, {
          className: m.marginBottom20,
          children: (0, a.jsx)(T.default.Child, {
            grow: 0,
            shrink: 0,
            children: (0, a.jsx)(l.Button, {
              size: l.Button.Sizes.SMALL,
              onClick: () => o.openReplay(),
              children: f.default.Messages.OPEN_CONNECTION_REPLAY
            })
          })
        })
      })]
    }), (0, a.jsx)(l.FormSwitch, {
      hideBorder: !0,
      value: d,
      onChange: C,
      note: f.default.Messages.FORM_HELP_DEBUG_LOGGING,
      children: f.default.Messages.FORM_CHECKBOX_DEBUG_LOGGING
    }), (0, a.jsx)(l.FormItem, {
      children: (0, a.jsxs)(T.default, {
        children: [(0, a.jsx)(T.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(l.Button, {
            disabled: e,
            size: l.Button.Sizes.SMALL,
            onClick: D,
            children: f.default.Messages.UPLOAD
          })
        }), (0, a.jsx)(T.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(l.Button, {
            size: l.Button.Sizes.SMALL,
            onClick: A,
            children: f.default.Messages.SHOW_FOLDER
          })
        })]
      })
    })]
  })
}