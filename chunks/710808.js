t.d(s, {
  Z: function() {
    return g
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(846027),
  o = t(304680),
  c = t(579806),
  E = t(729345),
  d = t(921801),
  _ = t(131951),
  T = t(226961),
  S = t(285952),
  u = t(12647),
  I = t(726985),
  N = t(981631),
  A = t(65154),
  C = t(689938),
  O = t(331651);
async function m() {
  let e = await c.Z.fileManager.getModulePath(),
    s = c.Z.fileManager.join(e, "discord_voice");
  c.Z.fileManager.showItemInFolder(s)
}

function h(e) {
  (0, l.openModal)(s => (0, n.jsx)(l.ConfirmModal, {
    header: C.Z.Messages.SET_DEBUG_LOGGING,
    confirmText: C.Z.Messages.OKAY,
    cancelText: C.Z.Messages.CANCEL,
    onCancel: s.onClose,
    onConfirm: () => r.Z.setDebugLogging(e),
    ...s,
    children: (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      children: C.Z.Messages.SET_DEBUG_LOGGING_BODY
    })
  }))
}

function g() {
  let [e, s] = i.useState(!1), {
    debugLogging: t,
    aecDumpEnabled: c
  } = (0, a.cj)([_.Z], () => ({
    aecDumpSupported: _.Z.isAecDumpSupported(),
    debugLogging: _.Z.getDebugLogging(),
    aecDumpEnabled: _.Z.getAecDump(),
    supportsConnectionReplay: _.Z.supports(A.AN.CONNECTION_REPLAY)
  })), g = (0, a.e7)([T.ZP], () => T.ZP.shouldRecordNextConnection());
  async function R() {
    s(!0);
    try {
      await _.Z.getMediaEngine().writeAudioDebugState(), await u.Z.submitLiveCrashReport({
        message: {
          message: "User Live Dump"
        }
      }), await (0, E.E)(N.GU0.RTC), ! function() {
        let e = C.Z.Messages.UPLOAD_DEBUG_LOG_SUCCESS_HEADER,
          s = C.Z.Messages.UPLOAD_DEBUG_LOG_SUCCESS;
        (0, l.openModal)(t => (0, n.jsx)(l.ConfirmModal, {
          header: e,
          confirmButtonColor: l.Button.Colors.BRAND,
          confirmText: C.Z.Messages.OKAY,
          ...t,
          children: (0, n.jsx)(l.Text, {
            variant: "text-md/normal",
            children: s
          })
        }))
      }()
    } catch (e) {
      ! function(e) {
        let s = C.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_HEADER,
          t = null != e ? e : C.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE;
        (0, l.openModal)(e => (0, n.jsx)(l.ConfirmModal, {
          header: s,
          confirmButtonColor: l.Button.Colors.BRAND,
          confirmText: C.Z.Messages.OKAY,
          ...e,
          children: (0, n.jsx)(l.Text, {
            variant: "text-md/normal",
            children: t
          })
        }))
      }(e.displayMessage)
    }
  }
  return (0, n.jsxs)(l.FormSection, {
    className: O.marginBottom40,
    title: C.Z.Messages.FORM_LABEL_DEBUG,
    children: [(0, n.jsx)(d.F, {
      setting: I.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
      children: (0, n.jsx)(l.FormSwitch, {
        value: c,
        onChange: e => r.Z.setAecDump(e),
        note: C.Z.Messages.FORM_HELP_AEC_DUMP,
        children: C.Z.Messages.FORM_CHECKBOX_AEC_DUMP
      })
    }), (0, n.jsxs)(d.F, {
      setting: I.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
      children: [(0, n.jsx)(l.FormSwitch, {
        hideBorder: !0,
        value: g,
        onChange: e => o.TC(e),
        note: C.Z.Messages.FORM_HELP_CONNECTION_LOG,
        children: C.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG
      }), (0, n.jsx)(l.FormItem, {
        children: (0, n.jsx)(S.Z, {
          className: O.marginBottom20,
          children: (0, n.jsx)(S.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, n.jsx)(l.Button, {
              size: l.Button.Sizes.SMALL,
              onClick: () => o.z4(),
              children: C.Z.Messages.OPEN_CONNECTION_REPLAY
            })
          })
        })
      }), (0, n.jsx)(l.FormDivider, {
        className: O.marginBottom20
      })]
    }), (0, n.jsxs)(d.F, {
      setting: I.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
      children: [(0, n.jsx)(l.FormSwitch, {
        hideBorder: !0,
        value: t,
        onChange: h,
        note: C.Z.Messages.FORM_HELP_DEBUG_LOGGING,
        children: C.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING
      }), (0, n.jsx)(l.FormItem, {
        children: (0, n.jsxs)(S.Z, {
          children: [(0, n.jsx)(S.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, n.jsx)(l.Button, {
              disabled: e,
              size: l.Button.Sizes.SMALL,
              onClick: R,
              children: C.Z.Messages.UPLOAD
            })
          }), (0, n.jsx)(S.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, n.jsx)(l.Button, {
              size: l.Button.Sizes.SMALL,
              onClick: m,
              children: C.Z.Messages.SHOW_FOLDER
            })
          })]
        })
      })]
    })]
  })
}