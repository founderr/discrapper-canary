"use strict";
n.r(t), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("773603");
var s, a, i = n("735250"),
  r = n("470079"),
  l = n("593473"),
  o = n("756647"),
  u = n("442837"),
  d = n("544891"),
  c = n("433517"),
  f = n("481060"),
  h = n("570140"),
  E = n("893776"),
  g = n("375964"),
  m = n("314897"),
  _ = n("626135"),
  p = n("70956"),
  T = n("970648"),
  I = n("981631"),
  S = n("415393");
let A = "mweb_handoff_nonce",
  N = "mweb_handoff_nonce_expiration",
  R = 1 * p.default.Millis.MINUTE;
(a = s || (s = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
  O = new Set(["deep_link_failed"]),
  v = () => {
    c.Storage.remove(A), c.Storage.remove(N)
  };
t.default = () => {
  let e = (0, u.useStateFromStores)([m.default], () => m.default.getFingerprint()),
    {
      fingerprint: t,
      handoff_token: n
    } = (0, l.parse)(window.location.search),
    s = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
    a = null != s ? s : null !== e ? e : void 0;
  r.useEffect(() => {
    null !== s && e !== s && h.default.dispatch({
      type: "FINGERPRINT",
      fingerprint: s
    })
  }, [s, e]);
  let [p, L] = r.useState(null), x = r.useCallback(e => {
    L(e), _.default.track(I.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
      reason: e,
      fingerprint: (0, o.maybeExtractId)(a)
    }, {
      fingerprint: a
    })
  }, [L, a]), M = c.Storage.get(A);
  if ("null" === n && null === p && x("deep_link_failed"), null != n && "null" !== n && null == M && null === p && x("nonce_missing"), r.useEffect(() => {
      if (null != M) {
        let e = c.Storage.get(N);
        (null == e || Date.now() >= e) && (x("nonce_expired"), v())
      }
    }, [M, x]), r.useEffect(() => {
      null != n && "null" !== n && null != M && null == p && d.HTTP.post({
        url: I.Endpoints.HANDOFF_EXCHANGE,
        body: {
          key: M,
          handoff_token: n
        }
      }).then(e => E.default.loginToken(e.body.token, !1)).then(() => {
        _.default.track(I.AnalyticEvents.LOGIN_SUCCESSFUL, {
          source: I.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
          is_new_user: !1,
          fingerprint: (0, o.maybeExtractId)(a)
        });
        let e = new URL(window.location.href),
          t = new URLSearchParams(e.search);
        t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
      }).catch(() => {
        x("handoff_exchange")
      }).finally(() => {
        v()
      })
    }, [n, M, p, a, x]), null == a) return null;
  let b = (() => {
    if (null == p) return (0, i.jsxs)(i.Fragment, {
      children: [g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, i.jsx)("br", {}), g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
    });
    if (O.has(p)) return g.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
    if (C.has(p)) return g.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
  })();
  return null != p && O.has(p) ? (0, i.jsx)("div", {
    className: S.errorContainer,
    children: (0, i.jsx)(f.Text, {
      color: "interactive-normal",
      variant: "text-sm/semibold",
      children: b
    })
  }) : (0, i.jsxs)("div", {
    className: S.container,
    children: [(0, i.jsx)(f.Text, {
      variant: "text-sm/semibold",
      children: b
    }), (0, i.jsx)(f.Button, {
      color: f.Button.Colors.BRAND_INVERTED,
      onClick: () => {
        let e = T.default.generateNonce();
        c.Storage.set(A, e), c.Storage.set(N, Date.now() + R);
        let t = new URL(I.MOBILE_WEB_HANDOFF_DEEP_LINK),
          n = new URLSearchParams(window.location.search);
        n.delete("fingerprint"), n.delete("handoff_token");
        let s = new URLSearchParams;
        s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", a), t.search = s.toString(), _.default.track(I.AnalyticEvents.DEEP_LINK_CLICKED, {
          fingerprint: (0, o.maybeExtractId)(a),
          source: "mobile_web_handoff",
          destination: I.MOBILE_WEB_HANDOFF_DEEP_LINK
        }, {
          fingerprint: a,
          flush: !0
        }), window.location.href = t.toString()
      },
      children: (0, i.jsx)(f.Text, {
        className: S.buttonText,
        variant: "text-sm/semibold",
        children: g.MOBILE_WEB_HANDOFF_BUTTON_TEXT
      })
    })]
  })
}