"use strict";
n.r(t);
var i = n("544891"),
  r = n("570140"),
  s = n("668781"),
  a = n("239091"),
  o = n("881052"),
  l = n("962086"),
  u = n("160404"),
  d = n("264229"),
  _ = n("271383"),
  c = n("701190"),
  E = n("594174"),
  I = n("626135"),
  T = n("981631"),
  f = n("689938");
let S = async (e, t) => {
  let n = null != t ? t : c.default.getInviteKeyForGuildId(e),
    s = E.default.getCurrentUser(),
    a = !_.default.isMember(e, null == s ? void 0 : s.id);
  try {
    let t = await i.HTTP.get({
      url: T.Endpoints.GUILD_MEMBER_VERIFICATION(e),
      query: {
        with_guild: a,
        invite_code: null != n ? (0, d.parseInviteCodeFromInviteKey)(n) : void 0
      },
      oldFormErrors: !0
    });
    if (null == t.body) throw t;
    let {
      body: s
    } = t;
    return r.default.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        version: s.version,
        description: s.description,
        formFields: s.form_fields,
        guild: s.guild
      }
    }), s
  } catch (t) {
    r.default.dispatch({
      type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
      guildId: e
    })
  }
}, h = async (e, t) => {
  let {
    body: n
  } = await i.HTTP.patch({
    url: T.Endpoints.GUILD_MEMBER_VERIFICATION(e),
    body: {
      form_fields: t
    },
    oldFormErrors: !0
  });
  r.default.dispatch({
    type: "MEMBER_VERIFICATION_FORM_UPDATE",
    guildId: e,
    form: {
      version: n.version,
      description: n.description,
      formFields: n.form_fields
    }
  })
}, A = async (e, t) => {
  let {
    body: n
  } = await i.HTTP.patch({
    url: T.Endpoints.GUILD_MEMBER_VERIFICATION(e),
    body: {
      description: t
    },
    oldFormErrors: !0
  });
  r.default.dispatch({
    type: "MEMBER_VERIFICATION_FORM_UPDATE",
    guildId: e,
    form: {
      version: n.version,
      description: n.description,
      formFields: n.form_fields
    }
  })
}, m = async (e, t) => {
  await i.HTTP.patch({
    url: T.Endpoints.GUILD_MEMBER_VERIFICATION(e),
    body: {
      enabled: t
    },
    oldFormErrors: !0
  })
}, N = async (e, t) => {
  if (u.default.isFullServerPreview(e)) {
    (0, l.updateImpersonatedData)(e, {
      memberOptions: {
        isPending: !1
      }
    });
    return
  }
  try {
    let {
      body: n
    } = await i.HTTP.put({
      url: T.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
      body: {
        version: t.version,
        form_fields: t.formFields
      }
    });
    return r.default.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: n
    }), setTimeout(p, 200), n
  } catch (t) {
    let {
      status: e
    } = t;
    switch (e) {
      case 429:
        throw (0, a.closeContextMenu)(), s.default.show({
          title: f.default.Messages.CLAN_APPLICATION_RATE_LIMITED_HEADER,
          body: f.default.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY,
          confirmText: f.default.Messages.CLAN_APPLICATION_RATE_LIMITED_BUTTON
        }), {
          ...t,
          message: f.default.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY
        };
      case 403:
        throw {
          ...t, message: f.default.Messages.CLAN_APPLICATION_MISSING_PERMISSION
        };
      default:
        var n, d;
        throw {
          ...t, message: null !== (d = (n = new o.APIError(t), n.getAnyErrorMessage())) && void 0 !== d ? d : f.default.Messages.ERROR_GENERIC_TITLE
        }
    }
  }
};

function p() {
  r.default.dispatch({
    type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW"
  })
}
t.default = {
  fetchVerificationForm: S,
  updateVerificationForm: h,
  updateVerificationFormFieldsLocal: (e, t) => {
    r.default.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        formFields: t
      },
      isLocalUpdate: !0
    })
  },
  updateVerificationFormDescription: A,
  updateVerificationFormDescriptionLocal: (e, t) => {
    r.default.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        description: t
      },
      isLocalUpdate: !0
    })
  },
  enableVerificationForm: m,
  submitVerificationForm: N,
  clearCoachmark: function() {
    r.default.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR"
    })
  },
  reportApplication: function(e) {
    let {
      guild: t,
      guildJoinRequest: n,
      guildJoinRequestUser: i,
      reason: r,
      reasonOther: s,
      responses: a
    } = e;
    I.default.track(T.AnalyticEvents.GUILD_MEMBER_APPLICATION_REPORTED, {
      application_id: n.joinRequestId,
      applicant_id: i.id,
      guild_id: t.id,
      reason: r,
      reason_other: s,
      responses: a
    })
  }
}