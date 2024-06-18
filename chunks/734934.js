"use strict";
n.d(t, {
  oW: function() {
    return I
  },
  p: function() {
    return E
  }
});
var i = n(381499),
  r = n(668781),
  s = n(246133),
  o = n(695346),
  a = n(675478),
  l = n(885110),
  u = n(626135),
  _ = n(621600),
  c = n(981631),
  d = n(689938);

function E() {
  let e = o.QZ.useSetting(),
    t = o.fv.useSetting();
  return e && ("0" === t || new Date(Number(t)).getTime() - new Date().getTime() > 0)
}

function I(e, t) {
  let n = o.QZ.getSetting();
  a.hW.updateAsync("notifications", n => {
    n.quietMode = i.D5.create({
      value: e
    }), n.focusModeExpiresAtMs = e && null != t ? "".concat(Date.now() + t) : "0"
  }, a.fy.INFREQUENT_USER_ACTION), u.default.track(c.rMx.NOTIFICATION_SETTINGS_UPDATED, {
    update_type: _.Ib.ACCOUNT,
    quiet_mode_enabled: e,
    quiet_mode_enabled_old: n
  }), l.Z.getStatus() === c.Skl.DND && e && null == t && r.Z.show({
    title: d.Z.Messages.QUIET_MODE_WHILE_DND_UPSELL_TITLE,
    body: d.Z.Messages.QUIET_MODE_WHILE_DND_UPSELL_BODY,
    cancelText: d.Z.Messages.NO_THANKS,
    confirmText: d.Z.Messages.OKAY,
    onConfirm: () => {
      (0, s.Z)(c.Skl.ONLINE)
    }
  })
}