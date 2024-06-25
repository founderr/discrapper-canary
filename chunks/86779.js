n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(773603);
var r, s, i = n(735250),
  a = n(470079),
  o = n(593473),
  l = n(756647),
  c = n(442837),
  u = n(544891),
  d = n(433517),
  h = n(481060),
  _ = n(570140),
  p = n(893776),
  f = n(375964),
  g = n(314897),
  E = n(626135),
  m = n(70956),
  I = n(970648),
  A = n(981631),
  N = n(331542);
let C = "mweb_handoff_nonce",
  T = "mweb_handoff_nonce_expiration",
  R = 1 * m.Z.Millis.MINUTE;
(s = r || (r = {})).NONCE_MISSING = "nonce_missing", s.NONCE_EXPIRED = "nonce_expired", s.NULL_HANDOFF_TOKEN = "deep_link_failed", s.HANDOFF_EXCHANGE = "handoff_exchange";
let x = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
  S = new Set(["deep_link_failed"]),
  b = () => {
    d.K.remove(C), d.K.remove(T)
  };
t.Z = () => {
  let e = (0, c.e7)([g.default], () => g.default.getFingerprint()),
    {
      fingerprint: t,
      handoff_token: n
    } = (0, o.parse)(window.location.search),
    r = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
    s = null != r ? r : null !== e ? e : void 0;
  a.useEffect(() => {
    null !== r && e !== r && _.Z.dispatch({
      type: "FINGERPRINT",
      fingerprint: r
    })
  }, [r, e]);
  let [m, v] = a.useState(null), O = a.useCallback(e => {
    v(e), E.default.track(A.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
      reason: e,
      fingerprint: (0, l.K)(s)
    }, {
      fingerprint: s
    })
  }, [v, s]), L = d.K.get(C);
  if ("null" === n && null === m && O("deep_link_failed"), null != n && "null" !== n && null == L && null === m && O("nonce_missing"), a.useEffect(() => {
      if (null != L) {
        let e = d.K.get(T);
        (null == e || Date.now() >= e) && (O("nonce_expired"), b())
      }
    }, [L, O]), a.useEffect(() => {
      null != n && "null" !== n && null != L && null == m && u.tn.post({
        url: A.ANM.HANDOFF_EXCHANGE,
        body: {
          key: L,
          handoff_token: n
        }
      }).then(e => p.Z.loginToken(e.body.token, !1)).then(() => {
        E.default.track(A.rMx.LOGIN_SUCCESSFUL, {
          source: A.uRl.MOBILE_WEB_HANDOFF,
          is_new_user: !1,
          fingerprint: (0, l.K)(s)
        });
        let e = new URL(window.location.href),
          t = new URLSearchParams(e.search);
        t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
      }).catch(() => {
        O("handoff_exchange")
      }).finally(() => {
        b()
      })
    }, [n, L, m, s, O]), null == s) return null;
  let Z = (() => {
    if (null == m) return (0, i.jsxs)(i.Fragment, {
      children: [f.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, i.jsx)("br", {}), f.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
    });
    if (S.has(m)) return f.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
    if (x.has(m)) return f.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
  })();
  return null != m && S.has(m) ? (0, i.jsx)("div", {
    className: N.errorContainer,
    children: (0, i.jsx)(h.Text, {
      color: "interactive-normal",
      variant: "text-sm/semibold",
      children: Z
    })
  }) : (0, i.jsxs)("div", {
    className: N.container,
    children: [(0, i.jsx)(h.Text, {
      variant: "text-sm/semibold",
      children: Z
    }), (0, i.jsx)(h.Button, {
      color: h.Button.Colors.BRAND_INVERTED,
      onClick: () => {
        let e = I.Z.generateNonce();
        d.K.set(C, e), d.K.set(T, Date.now() + R);
        let t = new URL(A.x0X),
          n = new URLSearchParams(window.location.search);
        n.delete("fingerprint"), n.delete("handoff_token");
        let r = new URLSearchParams;
        r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), r.set("key", e), r.set("fingerprint", s), t.search = r.toString(), E.default.track(A.rMx.DEEP_LINK_CLICKED, {
          fingerprint: (0, l.K)(s),
          source: "mobile_web_handoff",
          destination: A.x0X
        }, {
          fingerprint: s,
          flush: !0
        }), window.location.href = t.toString()
      },
      children: (0, i.jsx)(h.Text, {
        className: N.buttonText,
        variant: "text-sm/semibold",
        children: f.MOBILE_WEB_HANDOFF_BUTTON_TEXT
      })
    })]
  })
}