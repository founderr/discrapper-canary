"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("506083");
var s, a, r = n("37983"),
  l = n("884691"),
  i = n("730290"),
  o = n("391679"),
  u = n("446674"),
  d = n("872717"),
  c = n("95410"),
  E = n("77078"),
  f = n("913144"),
  h = n("437822"),
  _ = n("229353"),
  g = n("271938"),
  m = n("599110"),
  p = n("718517"),
  T = n("672630"),
  R = n("49111"),
  A = n("332204");
let S = "mweb_handoff_nonce",
  I = "mweb_handoff_nonce_expiration",
  N = 1 * p.default.Millis.MINUTE;
(a = s || (s = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
let L = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
  C = new Set(["deep_link_failed"]),
  O = () => {
    c.default.remove(S), c.default.remove(I)
  };
var M = () => {
  let e = (0, u.useStateFromStores)([g.default], () => g.default.getFingerprint()),
    {
      fingerprint: t,
      handoff_token: n
    } = (0, i.parse)(window.location.search),
    s = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
    a = null != s ? s : null !== e ? e : void 0;
  l.useEffect(() => {
    null !== s && e !== s && f.default.dispatch({
      type: "FINGERPRINT",
      fingerprint: s
    })
  }, [s, e]);
  let [p, M] = l.useState(null), v = l.useCallback(e => {
    M(e), m.default.track(R.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
      reason: e,
      fingerprint: (0, o.maybeExtractId)(a)
    }, {
      fingerprint: a
    })
  }, [M, a]), x = c.default.get(S);
  if ("null" === n && null === p && v("deep_link_failed"), null != n && "null" !== n && null == x && null === p && v("nonce_missing"), l.useEffect(() => {
      if (null != x) {
        let e = c.default.get(I);
        (null == e || Date.now() >= e) && (v("nonce_expired"), O())
      }
    }, [x, v]), l.useEffect(() => {
      null != n && "null" !== n && null != x && null == p && d.default.post({
        url: R.Endpoints.HANDOFF_EXCHANGE,
        body: {
          key: x,
          handoff_token: n
        }
      }).then(e => h.default.loginToken(e.body.token, !1)).then(() => {
        m.default.track(R.AnalyticEvents.LOGIN_SUCCESSFUL, {
          source: R.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
          is_new_user: !1,
          fingerprint: (0, o.maybeExtractId)(a)
        });
        let e = new URL(window.location.href),
          t = new URLSearchParams(e.search);
        t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
      }).catch(() => {
        v("handoff_exchange")
      }).finally(() => {
        O()
      })
    }, [n, x, p, a, v]), null == a) return null;
  let D = (() => {
      if (null == p) return (0, r.jsxs)(r.Fragment, {
        children: [_.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, r.jsx)("br", {}), _.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
      });
      if (C.has(p)) return _.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
      if (L.has(p)) return _.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
    })(),
    U = null != p && C.has(p);
  return U ? (0, r.jsx)("div", {
    className: A.errorContainer,
    children: (0, r.jsx)(E.Text, {
      color: "interactive-normal",
      variant: "text-sm/semibold",
      children: D
    })
  }) : (0, r.jsxs)("div", {
    className: A.container,
    children: [(0, r.jsx)(E.Text, {
      variant: "text-sm/semibold",
      children: D
    }), (0, r.jsx)(E.Button, {
      look: E.Button.Looks.INVERTED,
      color: E.Button.Colors.BRAND_NEW,
      onClick: () => {
        let e = T.default.generateNonce();
        c.default.set(S, e), c.default.set(I, Date.now() + N);
        let t = new URL(R.MOBILE_WEB_HANDOFF_DEEP_LINK),
          n = new URLSearchParams(window.location.search);
        n.delete("fingerprint"), n.delete("handoff_token");
        let s = new URLSearchParams;
        s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", a), t.search = s.toString(), m.default.track(R.AnalyticEvents.DEEP_LINK_CLICKED, {
          fingerprint: (0, o.maybeExtractId)(a),
          source: "mobile_web_handoff",
          destination: R.MOBILE_WEB_HANDOFF_DEEP_LINK
        }, {
          fingerprint: a,
          flush: !0
        }), window.location.href = t.toString()
      },
      children: (0, r.jsx)(E.Text, {
        className: A.buttonText,
        variant: "text-sm/semibold",
        children: _.MOBILE_WEB_HANDOFF_BUTTON_TEXT
      })
    })]
  })
}