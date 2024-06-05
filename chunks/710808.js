"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
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
  f = s("65154"),
  g = s("689938"),
  m = s("611273");
async function C() {
  let e = await d.default.fileManager.getModulePath(),
    t = d.default.fileManager.join(e, "discord_voice");
  d.default.fileManager.showItemInFolder(t)
}

function A(e) {
  (0, i.openModal)(t => (0, a.jsx)(i.ConfirmModal, {
    header: g.default.Messages.SET_DEBUG_LOGGING,
    confirmText: g.default.Messages.OKAY,
    cancelText: g.default.Messages.CANCEL,
    onCancel: t.onClose,
    onConfirm: () => r.default.setDebugLogging(e),
    ...t,
    children: (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      children: g.default.Messages.SET_DEBUG_LOGGING_BODY
    })
  }))
}

function h() {
  let [e, t] = n.useState(!1), {
    aecDumpSupported: s,
    debugLogging: d,
    aecDumpEnabled: h,
    supportsConnectionReplay: O
  } = (0, l.useStateFromStoresObject)([c.default], () => ({
    aecDumpSupported: c.default.isAecDumpSupported(),
    debugLogging: c.default.getDebugLogging(),
    aecDumpEnabled: c.default.getAecDump(),
    supportsConnectionReplay: c.default.supports(f.Features.CONNECTION_REPLAY)
  })), p = (0, l.useStateFromStores)([S.default], () => S.default.shouldRecordNextConnection()), R = (0, l.useStateFromStores)([E.default], () => {
    var e, t;
    return null !== (t = null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
  }), x = ("canary" === I.default.releaseChannel || "development" === I.default.releaseChannel) && R && O;
  async function M() {
    t(!0);
    try {
      await c.default.getMediaEngine().writeAudioDebugState(), await _.default.submitLiveCrashReport({
        message: {
          message: "User Live Dump"
        }
      }), await (0, u.uploadDebugLogFiles)(N.DebugLogCategory.RTC), ! function() {
        let e = g.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS_HEADER,
          t = g.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS;
        (0, i.openModal)(s => (0, a.jsx)(i.ConfirmModal, {
          header: e,
          confirmButtonColor: i.Button.Colors.BRAND,
          confirmText: g.default.Messages.OKAY,
          ...s,
          children: (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: t
          })
        }))
      }()
    } catch (e) {
      ! function(e) {
        let t = g.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_HEADER,
          s = null != e ? e : g.default.Messages.UPLOAD_DEBUG_LOG_FAILURE;
        (0, i.openModal)(e => (0, a.jsx)(i.ConfirmModal, {
          header: t,
          confirmButtonColor: i.Button.Colors.BRAND,
          confirmText: g.default.Messages.OKAY,
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
    title: g.default.Messages.FORM_LABEL_DEBUG,
    children: [s && (0, a.jsx)(i.FormSwitch, {
      value: h,
      onChange: e => r.default.setAecDump(e),
      note: g.default.Messages.FORM_HELP_AEC_DUMP,
      children: g.default.Messages.FORM_CHECKBOX_AEC_DUMP
    }), x && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.FormSwitch, {
        hideBorder: !0,
        value: p,
        onChange: e => o.setShouldRecordNextConnection(e),
        note: g.default.Messages.FORM_HELP_CONNECTION_LOG,
        children: g.default.Messages.FORM_CHECKBOX_CONNECTION_LOG
      }), (0, a.jsx)(i.FormItem, {
        children: (0, a.jsx)(T.default, {
          className: m.marginBottom20,
          children: (0, a.jsx)(T.default.Child, {
            grow: 0,
            shrink: 0,
            children: (0, a.jsx)(i.Button, {
              size: i.Button.Sizes.SMALL,
              onClick: () => o.openReplay(),
              children: g.default.Messages.OPEN_CONNECTION_REPLAY
            })
          })
        })
      })]
    }), (0, a.jsx)(i.FormSwitch, {
      hideBorder: !0,
      value: d,
      onChange: A,
      note: g.default.Messages.FORM_HELP_DEBUG_LOGGING,
      children: g.default.Messages.FORM_CHECKBOX_DEBUG_LOGGING
    }), (0, a.jsx)(i.FormItem, {
      children: (0, a.jsxs)(T.default, {
        children: [(0, a.jsx)(T.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(i.Button, {
            disabled: e,
            size: i.Button.Sizes.SMALL,
            onClick: M,
            children: g.default.Messages.UPLOAD
          })
        }), (0, a.jsx)(T.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(i.Button, {
            size: i.Button.Sizes.SMALL,
            onClick: C,
            children: g.default.Messages.SHOW_FOLDER
          })
        })]
      })
    })]
  })
}