n.d(t, {
  GC: function() {
    return I
  },
  _X: function() {
    return _
  },
  em: function() {
    return h
  },
  s0: function() {
    return E
  }
});
var s = n(13245),
  i = n(808506),
  l = n(998502),
  a = n(13140),
  r = n(996106),
  o = n(914946),
  c = n(186901),
  u = n(981631);
let d = ["207646673902501888"];

function E(e) {
  return i.Z.isReady(e) ? (s.Z.setLocked(!1, e), {
    lock() {
      s.Z.setLocked(!0, e)
    },
    context: u.IlC.OVERLAY
  }) : (l.ZP.focus(null, !0), {
    lock() {
      l.ZP.setForegroundProcess(e)
    },
    context: u.IlC.APP
  })
}
let h = async (e, t, n) => {
  if ((0, o.YK)(e, t), (null == n || "" === n) && (0, o.s9)(t)) return e.authorization.scopes = [c.cE, c.CN], Promise.resolve();
  if (null == n || "" === n) return Promise.reject(new r.Z({
    closeCode: u.$VG.INVALID_CLIENTID
  }, "No Client ID Specified"));
  let s = l.ZP.releaseChannel !== u.R5N.CANARY && !d.includes(n) && e.transport !== c.He.POST_MESSAGE;
  return await (0, o.vv)(n, s), (0, o.fy)(e, n, t)
}, _ = () => (0, o.tr)(e => {
  let t = [];
  if (null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut)) t = e.modeOptions.shortcut.map(e => {
    var t;
    return {
      type: e[0],
      code: e[1],
      name: null !== (t = (0, a.H9)(e)) && void 0 !== t ? t : "unknown"
    }
  });
  return t
}), I = e => (0, o.FJ)(e, e => {
  let t = "";
  return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = (0, a.BB)(e.modeOptions.shortcut)), t
})