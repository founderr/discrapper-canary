"use strict";
a.r(t), a.d(t, {
  getDeprecatedVoiceSettings: function() {
    return h
  },
  getVoiceSettings: function() {
    return _
  },
  unlockOverlay: function() {
    return f
  },
  validateSocketClient: function() {
    return E
  }
});
var n = a("13245"),
  s = a("808506"),
  l = a("998502"),
  i = a("13140"),
  r = a("996106"),
  o = a("914946"),
  u = a("186901"),
  d = a("981631");
let c = ["207646673902501888"];

function f(e) {
  return s.default.isReady(e) ? (n.default.setLocked(!1, e), {
    lock() {
      n.default.setLocked(!0, e)
    },
    context: d.AppContext.OVERLAY
  }) : (l.default.focus(null, !0), {
    lock() {
      l.default.setForegroundProcess(e)
    },
    context: d.AppContext.APP
  })
}
let E = async (e, t, a) => {
  if ((0, o.validateOriginAndUpdateSocket)(e, t), (null == a || "" === a) && (0, o.isMatchingOrigin)(t)) return e.authorization.scopes = [u.RPC_PRIVATE_SCOPE, u.RPC_PRIVATE_LIMITED_SCOPE], Promise.resolve();
  if (null == a || "" === a) return Promise.reject(new r.default({
    closeCode: d.RPCCloseCodes.INVALID_CLIENTID
  }, "No Client ID Specified"));
  let n = l.default.releaseChannel !== d.PublicReleaseChannels.CANARY && !c.includes(a) && e.transport !== u.TransportTypes.POST_MESSAGE;
  return await (0, o.processSocketThrottlers)(a, n), (0, o.fetchApplicationsRPC)(e, a, t)
}, h = () => (0, o.getDeprecatedVoiceSettingsWithShortcut)(e => {
  let t = [];
  if (null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut)) t = e.modeOptions.shortcut.map(e => {
    var t;
    return {
      type: e[0],
      code: e[1],
      name: null !== (t = (0, i.codeToKey)(e)) && void 0 !== t ? t : "unknown"
    }
  });
  return t
}), _ = e => (0, o.getVoiceSettingsWithShortcut)(e, e => {
  let t = "";
  return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = (0, i.toString)(e.modeOptions.shortcut)), t
})