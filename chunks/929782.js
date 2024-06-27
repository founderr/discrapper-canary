"use strict";
n.r(t), n.d(t, {
  enable: function() {
    return A
  },
  isNotSupported: function() {
    return f
  },
  trackToggleSelfMute: function() {
    return N
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(570140),
  o = n(710845),
  a = n(131951),
  l = n(556296),
  u = n(451478),
  _ = n(626135),
  c = n(554174),
  d = n(981631),
  E = n(761274),
  I = n(689938);
let T = new o.Z("AudioActionCreators");

function h() {
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e("82935").then(n.bind(n, 431583));
    return t => (0, i.jsx)(e, {
      source: "Unsupported Browser",
      ...t
    })
  })
}

function f() {
  return !a.Z.isSupported() && ((0, r.openModal)(e => (0, i.jsx)(r.ConfirmModal, {
    header: I.Z.Messages.UNSUPPORTED_BROWSER,
    confirmText: I.Z.Messages.DOWNLOAD_APP,
    cancelText: I.Z.Messages.CANCEL,
    onConfirm: h,
    confirmButtonColor: r.Button.Colors.BRAND,
    ...e,
    children: (0, i.jsx)(r.Text, {
      variant: "text-md/normal",
      children: I.Z.Messages.UNSUPPORTED_BROWSER_DETAILS
    })
  })), !0)
}

function S(e) {
  _.default.track(d.rMx.PERMISSIONS_ACKED, {
    type: "audio",
    action: e
  })
}

function A() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return f() ? Promise.resolve(!1) : (_.default.track(d.rMx.PERMISSIONS_REQUESTED, {
    type: "audio"
  }), a.Z.getMediaEngine().enable().then(() => {
    s.Z.dispatch({
      type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
      enabled: !0,
      unmute: e
    }), S(E.PQ.ACCEPTED)
  }, e => {
    switch (e) {
      case d.ETv.NO_DEVICES_FOUND:
        S(E.PQ.NO_DEVICES);
        break;
      case d.ETv.PERMISSION_DENIED:
        S(E.PQ.DENIED);
        break;
      case d.ETv.PERMISSION_DISMISSED:
        S(E.PQ.DISMISSED);
        break;
      default:
        S(E.PQ.ERROR), T.warn("unknown getUserMedia error: ".concat(e))
    }
  }).then(() => !0))
}

function N(e) {
  let {
    usedKeybind: t = !1
  } = e, n = l.Z.getKeybindForAction(d.kg4.TOGGLE_MUTE, !1, !0);
  _.default.track(d.rMx.INPUT_MUTE_TOGGLED, {
    enabled: !a.Z.isSelfMute(),
    custom_keybind_assigned: null != n && n.id !== l.E.id,
    used_keybind: t,
    app_in_focus: u.Z.isFocused(),
    overlay_activated: null != (0, c.Z)()
  })
}