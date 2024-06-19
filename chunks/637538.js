n.d(t, {
  Z: function() {
    return c
  }
});
var r = n(470079),
  a = n(626135),
  i = n(353250),
  o = n(981631);

function c(e) {
  let t = r.useRef(!0);
  return r.useEffect(() => () => {
    t.current && (null == e || e(i.CaptchaError.CANCEL))
  }, []), r.useEffect(() => (a.default.track(o.rMx.OPEN_MODAL, {
    type: "Guild Join Captcha"
  }), () => {
    t.current && a.default.track(o.rMx.MODAL_DISMISSED, {
      type: "Guild Join Captcha"
    })
  }), [t]), () => {
    t.current = !1
  }
}