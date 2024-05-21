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
  I = n("981631"),
  T = n("689938");
let f = async (e, t) => {
  let n = null != t ? t : c.default.getInviteKeyForGuildId(e),
    s = E.default.getCurrentUser(),
    a = !_.default.isMember(e, null == s ? void 0 : s.id);
  try {
    let t = await i.HTTP.get({
      url: I.Endpoints.GUILD_MEMBER_VERIFICATION(e),
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
}, S = async (e, t) => {
  let {
    body: n
  } = await i.HTTP.patch({
    url: I.Endpoints.GUILD_MEMBER_VERIFICATION(e),
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
}, h = async (e, t) => {
  let {
    body: n
  } = await i.HTTP.patch({
    url: I.Endpoints.GUILD_MEMBER_VERIFICATION(e),
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
}, A = async (e, t) => {
  await i.HTTP.patch({
    url: I.Endpoints.GUILD_MEMBER_VERIFICATION(e),
    body: {
      enabled: t
    },
    oldFormErrors: !0
  })
}, m = async (e, t) => {
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
      url: I.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
      body: {
        version: t.version,
        form_fields: t.formFields
      }
    });
    return r.default.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: n
    }), setTimeout(N, 200), n
  } catch (t) {
    let {
      status: e
    } = t;
    switch (e) {
      case 429:
        throw (0, a.closeContextMenu)(), s.default.show({
          title: T.default.Messages.CLAN_APPLICATION_RATE_LIMITED_HEADER,
          body: T.default.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY,
          confirmText: T.default.Messages.CLAN_APPLICATION_RATE_LIMITED_BUTTON
        }), {
          ...t,
          message: T.default.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY
        };
      case 403:
        throw {
          ...t, message: T.default.Messages.CLAN_APPLICATION_MISSING_PERMISSION
        };
      default:
        var n, d;
        throw {
          ...t, message: null !== (d = (n = new o.APIError(t), n.getAnyErrorMessage())) && void 0 !== d ? d : T.default.Messages.ERROR_GENERIC_TITLE
        }
    }
  }
};

function N() {
  r.default.dispatch({
    type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW"
  })
}
t.default = {
  fetchVerificationForm: f,
  updateVerificationForm: S,
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
  updateVerificationFormDescription: h,
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
  enableVerificationForm: A,
  submitVerificationForm: m,
  clearCoachmark: function() {
    r.default.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR"
    })
  }
}