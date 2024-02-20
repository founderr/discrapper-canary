"use strict";
n.r(t), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("511434"), n("808653"), n("424973"), n("726581");
var a = n("872717"),
  r = n("821316"),
  s = n("129966"),
  i = n("583340"),
  l = n("823348"),
  o = n("35468");
n("773336");
var u = n("286235"),
  d = n("900673"),
  c = n("49111");
let f = ["https://cdn.discordapp.com/bad-domains/updated_hashes.json", "https://cdn.discordapp.com/bad-domains/hashes.json"],
  h = new d.default,
  p = /\/api(\/v\d+)?\/science/;
(0, a.setRequestPatch)({
  prepareRequest(e) {
    let {
      default: t
    } = n("271938"), {
      default: s
    } = n("313915"), {
      default: i
    } = n("915639"), {
      default: l
    } = n("697218"), {
      default: o
    } = n("599110"), {
      isPlatformEmbedded: d
    } = n("773336");
    if ("/" === e.url[0]) {
      var c, m;
      e.url = a.default.getAPIBaseURL() + e.url, !("Authorization" in e.header) && !("authorization" in e.header) && e.set("Authorization", t.getToken());
      let n = o.getSuperPropertiesBase64();
      null != n && e.set("X-Super-Properties", n);
      let r = t.getFingerprint();
      if (null != r && "" !== r && e.set("X-Fingerprint", r), d) {
        let t = [];
        null != navigator && (t = (c = [...navigator.languages], c));
        let n = function(e) {
          let t = 10,
            n = e.reduce((e, n) => (10 === t ? e.push(n) : e.push("".concat(n, ";q=0.").concat(t)), t = Math.max(t - 1, 1), e), []);
          return n.join(",")
        }(t);
        e.set("Accept-Language", n)
      }
      e.set("X-Discord-Locale", i.locale);
      let u = function() {
        if (null == Intl.DateTimeFormat) return null;
        let e = Intl.DateTimeFormat();
        if (null == e.resolvedOptions) return null;
        let t = e.resolvedOptions();
        return t.timeZone
      }();
      null != u && e.set("X-Discord-Timezone", u);
      let f = s.getDebugOptionsHeaderValue();
      if (null != f && "" !== f && e.set("X-Debug-Options", f), s.isTracingRequests) {
        let t = l.getCurrentUser(),
          n = h.generate(null !== (m = null == t ? void 0 : t.id) && void 0 !== m ? m : "0");
        e.set("x-client-trace-id", n);
        try {
          let t = new URL(e.url).pathname;
          if (!p.test(t)) {
            let a = function(e) {
              let t = new URLSearchParams;
              t.append("query", '@guid.x-client-trace-id:"'.concat(e, '"')), t.append("showAllSpans", "true");
              let n = new URL("traces?".concat(t.toString()), "https://datadog.discord.tools/apm/");
              return n.toString()
            }(n);
            null !== a && console.debug("%c[tracing]%c %s %s\n%s", "font-weight: bold", "", e.method, t, a)
          }
        } catch (e) {
          console.error("error while printing Lightstep log", e)
        }
      }
    }
    r.report("Network", "Sending ".concat(e.method, " to ").concat(e.url)), e.on("response", t => {
      let n = null != t && t.status >= 400 ? t.text : null;
      r.report("Network", "Completed ".concat(e.method, " to ").concat(e.url, " with status: ").concat(null == t ? void 0 : t.status, " ").concat(null == n ? "" : "and body: ".concat(n)))
    }), e.on("error", (t, n) => {
      if (r.report("Network", "Failed ".concat(e.method, " to ").concat(e.url, " with status ").concat(null == t ? void 0 : t.status, " and body: ").concat(null == n ? void 0 : n.text)), null != t && "parse" in t && t.parse) {
        let n = "[FILTERED]";
        if (f.includes(e.url)) {
          var a, s;
          n = null === (s = e.xhr) || void 0 === s ? void 0 : null === (a = s.responseText) || void 0 === a ? void 0 : a.slice(0, 1e3)
        }
        u.default.addBreadcrumb({
          category: "superagent",
          message: "Failed to parse HTTP response.",
          data: {
            method: e.method,
            url: e.url,
            responseText: n,
            status: t.status
          }
        })
      }
    })
  },
  interceptResponse(e, t, a) {
    var r, o, u, d, f;
    return 400 === e.statusCode && (null === (r = e.body) || void 0 === r ? void 0 : r.captcha_key) ? (Promise.all([n.el("417814").then(n.bind(n, "417814")), n.el("507445").then(n.bind(n, "507445"))]).then(t => {
      let [{
        default: n
      }, {
        extractCaptchaPropsFromResponseBody: a
      }] = t;
      return n.showCaptchaAsync(a(e.body))
    }).then(e => {
      let {
        captcha_key: n,
        captcha_rqtoken: a
      } = e, r = {
        "X-Captcha-Key": n
      };
      null != a && (r["X-Captcha-Rqtoken"] = a), t(r)
    }).catch(a), !0) : 401 === e.statusCode && (null === (o = e.body) || void 0 === o ? void 0 : o.code) === c.AbortCodes.MFA_REQUIRED && (null === (u = e.body) || void 0 === u ? void 0 : u.mfa) ? (n.el("776502").then(n.bind(n, "776502")).then(n => {
      let {
        openMFAModal: r
      } = n;
      r(e.body.mfa, t, a)
    }).catch(a), !0) : (0, l.isLimitedAccessErrorCode)(e.statusCode, null === (d = e.body) || void 0 === d ? void 0 : d.code) ? (n.el("258158").then(n.bind(n, "258158")).then(e => {
      let {
        default: t
      } = e;
      t()
    }), !1) : (0, s.isLimitedAccessErrorCode)(e.statusCode, null === (f = e.body) || void 0 === f ? void 0 : f.code) ? (n.el("772545").then(n.bind(n, "772545")).then(t => {
      var n;
      let {
        default: a
      } = t;
      a(null === (n = e.body) || void 0 === n ? void 0 : n.guild_id)
    }), !1) : ((0, i.isBlockedByProxyErrorCode)(e) && n.el("499946").then(n.bind(n, "499946")).then(e => {
      let {
        handleBlockedByProxy: t
      } = e;
      t()
    }), !1)
  }
}), (0, a.setAwaitOnline)(async e => {
  if (r.report("Network", "Request to ".concat(e, " failed, will retry.")), !o.default.isOnline()) await o.default.awaitOnline(), r.report("Network", "Network detected online, retrying ".concat(e))
})