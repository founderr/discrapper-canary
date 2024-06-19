var s = n(990547),
  a = n(283693),
  l = n(570140),
  i = n(573261),
  r = n(981631);
t.Z = {
  signup: (e, t) => i.Z.post({
    url: r.ANM.HUB_WAITLIST_SIGNUP,
    body: {
      email: e,
      school: t
    },
    trackedActionData: {
      event: s.NetworkActionNames.HUB_WAITLIST_SIGNUP,
      properties: e => {
        var t;
        let n = !1,
          s = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.email_domain;
        return null != s && (n = -1 !== s.split(".").indexOf("edu")), (0, a.iG)({
          is_edu_email: n
        })
      }
    }
  }),
  sendVerificationEmail: async (e, t, n) => (await i.Z.post({
    url: r.ANM.HUB_EMAIL_VERIFY_SEND,
    body: {
      email: e,
      guild_id: n,
      allow_multiple_guilds: t,
      use_verification_code: !0
    },
    trackedActionData: {
      event: s.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
      properties: e => {
        var t;
        let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.has_matching_guild;
        return (0, a.iG)({
          has_matching_guild: n
        })
      }
    }
  })).body,
  async verify(e) {
    if (null != e) try {
      var t;
      let n = await i.Z.post({
          url: r.ANM.HUB_EMAIL_VERIFY,
          body: {
            token: e
          },
          trackedActionData: {
            event: s.NetworkActionNames.HUB_EMAIL_VERIFY
          }
        }),
        a = null === (t = n.body.guild) || void 0 === t ? void 0 : t.id;
      l.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_SUCCESS",
        guildId: a
      })
    } catch (e) {
      l.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_FAILURE",
        errors: e.body
      })
    }
  },
  async verifyCode(e, t, n) {
    if (null != e) try {
      var a;
      let o = await i.Z.post({
          url: r.ANM.HUB_EMAIL_VERIFY_CODE,
          body: {
            code: e,
            guild_id: t,
            email: n
          },
          trackedActionData: {
            event: s.NetworkActionNames.HUB_EMAIL_VERIFY
          }
        }),
        c = null === (a = o.body.guild) || void 0 === a ? void 0 : a.id;
      return l.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_SUCCESS",
        guildId: c
      }), o.body
    } catch (e) {
      throw l.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_FAILURE",
        errors: e.body
      }), e
    }
  }
}