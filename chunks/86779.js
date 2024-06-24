n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(773603);
var s, r, i = n(735250),
  a = n(470079),
  l = n(593473),
  o = n(756647),
  u = n(442837),
  c = n(544891),
  d = n(433517),
  h = n(481060),
  E = n(570140),
  _ = n(893776),
  m = n(375964),
  g = n(314897),
  p = n(626135),
  f = n(70956),
  I = n(970648),
  N = n(981631),
  A = n(331542);
let T = "mweb_handoff_nonce",
  R = "mweb_handoff_nonce_expiration",
  S = 1 * f.Z.Millis.MINUTE;
(r = s || (s = {})).NONCE_MISSING = "nonce_missing", r.NONCE_EXPIRED = "nonce_expired", r.NULL_HANDOFF_TOKEN = "deep_link_failed", r.HANDOFF_EXCHANGE = "handoff_exchange";
let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
  x = new Set(["deep_link_failed"]),
  O = () => {
    d.K.remove(T), d.K.remove(R)
  };
t.Z = () => {
  let e = (0, u.e7)([g.default], () => g.default.getFingerprint()),
    {
      fingerprint: t,
      handoff_token: n
    } = (0, l.parse)(window.location.search),
    s = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
    r = null != s ? s : null !== e ? e : void 0;
  a.useEffect(() => {
    null !== s && e !== s && E.Z.dispatch({
      type: "FINGERPRINT",
      fingerprint: s
    })
  }, [s, e]);
  let [f, v] = a.useState(null), Z = a.useCallback(e => {
    v(e), p.default.track(N.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
      reason: e,
      fingerprint: (0, o.K)(r)
    }, {
      fingerprint: r
    })
  }, [v, r]), L = d.K.get(T);
  if ("null" === n && null === f && Z("deep_link_failed"), null != n && "null" !== n && null == L && null === f && Z("nonce_missing"), a.useEffect(() => {
      if (null != L) {
        let e = d.K.get(R);
        (null == e || Date.now() >= e) && (Z("nonce_expired"), O())
      }
    }, [L, Z]), a.useEffect(() => {
      null != n && "null" !== n && null != L && null == f && c.tn.post({
        url: N.ANM.HANDOFF_EXCHANGE,
        body: {
          key: L,
          handoff_token: n
        }
      }).then(e => _.Z.loginToken(e.body.token, !1)).then(() => {
        p.default.track(N.rMx.LOGIN_SUCCESSFUL, {
          source: N.uRl.MOBILE_WEB_HANDOFF,
          is_new_user: !1,
          fingerprint: (0, o.K)(r)
        });
        let e = new URL(window.location.href),
          t = new URLSearchParams(e.search);
        t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
      }).catch(() => {
        Z("handoff_exchange")
      }).finally(() => {
        O()
      })
    }, [n, L, f, r, Z]), null == r) return null;
  let M = (() => {
    if (null == f) return (0, i.jsxs)(i.Fragment, {
      children: [m.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, i.jsx)("br", {}), m.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
    });
    if (x.has(f)) return m.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
    if (C.has(f)) return m.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
  })();
  return null != f && x.has(f) ? (0, i.jsx)("div", {
    className: A.errorContainer,
    children: (0, i.jsx)(h.Text, {
      color: "interactive-normal",
      variant: "text-sm/semibold",
      children: M
    })
  }) : (0, i.jsxs)("div", {
    className: A.container,
    children: [(0, i.jsx)(h.Text, {
      variant: "text-sm/semibold",
      children: M
    }), (0, i.jsx)(h.Button, {
      color: h.Button.Colors.BRAND_INVERTED,
      onClick: () => {
        let e = I.Z.generateNonce();
        d.K.set(T, e), d.K.set(R, Date.now() + S);
        let t = new URL(N.x0X),
          n = new URLSearchParams(window.location.search);
        n.delete("fingerprint"), n.delete("handoff_token");
        let s = new URLSearchParams;
        s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", r), t.search = s.toString(), p.default.track(N.rMx.DEEP_LINK_CLICKED, {
          fingerprint: (0, o.K)(r),
          source: "mobile_web_handoff",
          destination: N.x0X
        }, {
          fingerprint: r,
          flush: !0
        }), window.location.href = t.toString()
      },
      children: (0, i.jsx)(h.Text, {
        className: A.buttonText,
        variant: "text-sm/semibold",
        children: m.MOBILE_WEB_HANDOFF_BUTTON_TEXT
      })
    })]
  })
}