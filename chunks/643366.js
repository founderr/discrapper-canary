n.d(t, {
  Y: function() {
    return u
  }
});
var a = n(470079),
  r = n(110924),
  o = n(626135),
  s = n(497350),
  l = n(981631);

function u(e) {
  let t = (0, r.Z)(e);
  a.useEffect(() => {
    if (e === t) return;
    let n = null;
    "user-code-input" !== e.type && (n = (0, s.B)(e.userCodeData.clientId)), o.default.track(l.rMx.DEVICE_LINK_STEP, {
      previous_step: null == t ? void 0 : t.type,
      current_step: e.type,
      platform_type: n
    })
  }, [t, e])
}