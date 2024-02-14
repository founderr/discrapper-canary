"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  i = n("128981"),
  s = n("67164"),
  c = n("748820"),
  o = n("432710"),
  d = n("486196"),
  p = n("155084"),
  l = n("599110"),
  u = n("49111"),
  h = e => {
    let {
      captchaService: t = d.CaptchaTypes.RECAPTCHA,
      sitekey: n,
      rqdata: h,
      onRender: f,
      onVerify: _,
      onError: E,
      onOpen: m,
      onClose: v,
      onChalExpired: C,
      ...y
    } = e, R = r.useRef(null), A = (0, c.v4)(), [b, g] = r.useState(!1), T = r.useCallback(e => {
      l.default.track(u.AnalyticEvents.CAPTCHA_EVENT, {
        captcha_event_name: e,
        captcha_service: t,
        sitekey: n,
        captcha_flow_key: A
      })
    }, [A, t, n]), I = r.useCallback(e => {
      p.default.increment({
        name: o.MetricEvents.CAPTCHA_EVENT,
        tags: ["event_name:".concat(e), "captcha_service:".concat(t)]
      })
    }, [t]), x = r.useCallback(() => {
      !b && (T("initial-load"), I("initial-load"), g(!0))
    }, [I, b, T]), S = r.useCallback(() => {
      if (b && null != h && "" !== h) {
        var e;
        null === (e = R.current) || void 0 === e || e.setData({
          rqdata: h
        })
      }
    }, [b, h, R]);
    r.useEffect(() => {
      S()
    }, [S]), r.useEffect(() => {
      x()
    }, [x]);
    let w = r.useCallback(() => {
        T("error"), I("error"), S(), null == E || E()
      }, [T, I, S, E]),
      N = r.useCallback(e => {
        T("verify"), I("verify"), _(e)
      }, [I, _, T]),
      O = r.useCallback(() => {
        T("render"), null == f || f()
      }, [f, T]),
      k = r.useCallback(() => {
        T("open"), I("open"), null == m || m()
      }, [I, m, T]),
      L = r.useCallback(() => {
        T("close"), S(), null == v || v()
      }, [v, T, S]),
      P = r.useCallback(() => {
        T("chal-expire"), null == C || C()
      }, [C, T]);
    return ((null == n || "" === n) && (n = u.RECAPTCHA_SITE_KEY), t === d.CaptchaTypes.RECAPTCHA) ? (0, a.jsx)(s.default, {
      ...y,
      onLoad: x,
      onRender: O,
      onVerify: N,
      onError: w,
      sitekey: n
    }) : t === d.CaptchaTypes.HCAPTCHA ? (0, a.jsx)(i.default, {
      ref: R,
      ...y,
      sitekey: n,
      onLoad: x,
      onError: w,
      onVerify: N,
      onChalExpired: P,
      onOpen: k,
      onClose: L
    }) : (0, a.jsx)(s.default, {
      ...y,
      sitekey: n,
      onLoad: x,
      onRender: O,
      onVerify: N,
      onError: w
    })
  }