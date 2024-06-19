n(47120);
var r = n(735250),
  a = n(470079),
  i = n(745625),
  o = n(14199),
  c = n(772848),
  s = n(286379),
  p = n(343817),
  d = n(797614),
  h = n(626135),
  l = n(981631);
t.Z = e => {
  let {
    captchaService: t = p.hP.RECAPTCHA,
    sitekey: n,
    rqdata: u,
    onRender: f,
    onVerify: v,
    onError: m,
    onOpen: y,
    onClose: C,
    onChalExpired: E,
    ...R
  } = e, b = a.useRef(null), _ = (0, c.Z)(), [x, g] = a.useState(!1), w = a.useCallback(e => {
    h.default.track(l.rMx.CAPTCHA_EVENT, {
      captcha_event_name: e,
      captcha_service: t,
      sitekey: n,
      captcha_flow_key: _
    })
  }, [_, t, n]), k = a.useCallback(e => {
    d.Z.increment({
      name: s.V.CAPTCHA_EVENT,
      tags: ["event_name:".concat(e), "captcha_service:".concat(t)]
    })
  }, [t]), A = a.useCallback(() => {
    if (null != u && "" !== u && null != b.current) {
      var e;
      null === (e = b.current) || void 0 === e || e.setData({
        rqdata: u
      })
    }
  }, [u, b]), I = a.useCallback(() => {
    !x && (w("initial-load"), k("initial-load"), g(!0)), A()
  }, [k, x, w, A]);
  a.useEffect(() => {
    A()
  }, [A]), a.useEffect(() => {
    I()
  }, [I]);
  let S = a.useCallback(() => {
      w("error"), k("error"), A(), null == m || m()
    }, [w, k, A, m]),
    j = a.useCallback(e => {
      w("verify"), k("verify"), v(e)
    }, [k, v, w]),
    O = a.useCallback(() => {
      w("render"), null == f || f()
    }, [f, w]),
    P = a.useCallback(() => {
      w("open"), k("open"), null == y || y()
    }, [k, y, w]),
    Z = a.useCallback(() => {
      w("close"), A(), null == C || C()
    }, [C, w, A]),
    T = a.useCallback(() => {
      w("chal-expire"), null == E || E()
    }, [E, w]);
  return ((null == n || "" === n) && (n = l.OL7), t === p.hP.RECAPTCHA) ? (0, r.jsx)(o.Z, {
    ...R,
    onLoad: I,
    onRender: O,
    onVerify: j,
    onError: S,
    sitekey: n
  }) : t === p.hP.HCAPTCHA ? (0, r.jsx)(i.Z, {
    ref: b,
    ...R,
    sitekey: n,
    onLoad: I,
    onError: S,
    onVerify: j,
    onChalExpired: T,
    onOpen: P,
    onClose: Z
  }) : (0, r.jsx)(o.Z, {
    ...R,
    sitekey: n,
    onLoad: I,
    onRender: O,
    onVerify: j,
    onError: S
  })
}