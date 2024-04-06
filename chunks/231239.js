"use strict";
s.r(t);
var a = s("990547"),
  n = s("283693"),
  l = s("570140"),
  i = s("573261"),
  r = s("981631");
t.default = {
  signup: (e, t) => i.default.post({
    url: r.Endpoints.HUB_WAITLIST_SIGNUP,
    body: {
      email: e,
      school: t
    },
    trackedActionData: {
      event: a.NetworkActionNames.HUB_WAITLIST_SIGNUP,
      properties: e => {
        var t;
        let s = !1,
          a = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.email_domain;
        return null != a && (s = -1 !== a.split(".").indexOf("edu")), (0, n.exact)({
          is_edu_email: s
        })
      }
    }
  }),
  sendVerificationEmail: async (e, t, s) => (await i.default.post({
    url: r.Endpoints.HUB_EMAIL_VERIFY_SEND,
    body: {
      email: e,
      guild_id: s,
      allow_multiple_guilds: t,
      use_verification_code: !0
    },
    trackedActionData: {
      event: a.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
      properties: e => {
        var t;
        let s = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.has_matching_guild;
        return (0, n.exact)({
          has_matching_guild: s
        })
      }
    }
  })).body,
  async verify(e) {
    if (null != e) try {
      var t;
      let s = await i.default.post({
          url: r.Endpoints.HUB_EMAIL_VERIFY,
          body: {
            token: e
          },
          trackedActionData: {
            event: a.NetworkActionNames.HUB_EMAIL_VERIFY
          }
        }),
        n = null === (t = s.body.guild) || void 0 === t ? void 0 : t.id;
      l.default.dispatch({
        type: "HUB_VERIFY_EMAIL_SUCCESS",
        guildId: n
      })
    } catch (e) {
      l.default.dispatch({
        type: "HUB_VERIFY_EMAIL_FAILURE",
        errors: e.body
      })
    }
  },
  async verifyCode(e, t, s) {
    if (null != e) try {
      var n;
      let o = await i.default.post({
          url: r.Endpoints.HUB_EMAIL_VERIFY_CODE,
          body: {
            code: e,
            guild_id: t,
            email: s
          },
          trackedActionData: {
            event: a.NetworkActionNames.HUB_EMAIL_VERIFY
          }
        }),
        c = null === (n = o.body.guild) || void 0 === n ? void 0 : n.id;
      return l.default.dispatch({
        type: "HUB_VERIFY_EMAIL_SUCCESS",
        guildId: c
      }), o.body
    } catch (e) {
      throw l.default.dispatch({
        type: "HUB_VERIFY_EMAIL_FAILURE",
        errors: e.body
      }), e
    }
  }
}