    "use strict";
    t.r(a), t.d(a, {
      default: function() {
        return c
      }
    });
    var d = t("69580");

    function c(e) {
      var a, t, c, n;
      let i = null == e ? void 0 : e.get("client_id"),
        f = null == e ? void 0 : null === (a = e.get("scope")) || void 0 === a ? void 0 : a.split(" "),
        o = null == e ? void 0 : e.get("state"),
        r = null == e ? void 0 : e.get("redirect_uri"),
        l = null == e ? void 0 : e.get("response_type"),
        s = null !== (t = null == e ? void 0 : e.get("nonce")) && void 0 !== t ? t : void 0,
        b = null !== (c = null == e ? void 0 : e.get("code_challenge")) && void 0 !== c ? c : void 0,
        u = null !== (n = null == e ? void 0 : e.get("code_challenge_method")) && void 0 !== n ? n : void 0;
      return null == i || null == f || null == o || null == r || null == l || ((0, d.openOAuth2Modal)({
        clientId: i,
        scopes: f,
        redirectUri: r,
        state: o,
        responseType: l,
        nonce: s,
        codeChallenge: b,
        codeChallengeMethod: u
      }), !0)
    }