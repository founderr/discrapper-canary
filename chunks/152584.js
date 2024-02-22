"use strict";
n.r(t), n.d(t, {
  accountDetailsInit: function() {
    return A
  },
  accountDetailsClose: function() {
    return I
  },
  disableAccount: function() {
    return R
  },
  saveAccountRequest: function() {
    return N
  },
  saveAccountChanges: function() {
    return p
  },
  getHarvestStatus: function() {
    return S
  },
  requestHarvest: function() {
    return T
  },
  setPendingAvatar: function() {
    return C
  },
  setPendingGlobalNameName: function() {
    return m
  },
  setPendingAvatarDecoration: function() {
    return h
  },
  setPendingProfileEffectId: function() {
    return L
  },
  clearErrors: function() {
    return D
  },
  resetPendingAccountChanges: function() {
    return O
  },
  resetAllPending: function() {
    return U
  },
  resetAndCloseUserProfileForm: function() {
    return g
  },
  setDisableSubmit: function() {
    return P
  }
});
var r = n("872717"),
  s = n("95410"),
  o = n("819855"),
  a = n("913144"),
  l = n("393414"),
  u = n("599110"),
  i = n("315102"),
  d = n("730622"),
  c = n("437822"),
  _ = n("49111"),
  E = n("191349"),
  f = n("782340");

function A() {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function I() {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function R(e, t) {
  let n = t ? f.default.Messages.DELETE_ACCOUNT : f.default.Messages.DISABLE_ACCOUNT,
    s = t ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
  return (0, d.default)(t => r.default.post({
    url: s,
    body: {
      password: e,
      ...t
    },
    oldFormErrors: !0
  }), {
    modalProps: {
      title: n
    },
    checkEnabled: !1
  }).then(() => {
    c.default.logoutInternal(), (0, l.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT)
  })
}
async function N(e) {
  let t = await r.default.patch({
      url: _.Endpoints.ME,
      oldFormErrors: !0,
      body: e
    }),
    n = t.body;
  if (n.token) {
    let t = n.token;
    delete n.token, a.default.dispatch({
      type: "UPDATE_TOKEN",
      token: t,
      userId: n.id
    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && a.default.dispatch({
      type: "PASSWORD_UPDATED",
      userId: n.id
    })
  }
  return a.default.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: n
  }), t
}

function p(e) {
  let {
    username: t,
    discriminator: n,
    email: r,
    emailToken: o,
    password: l,
    avatar: c,
    avatarDecoration: A,
    newPassword: I,
    globalName: R
  } = e;
  return a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, d.default)(e => {
    let a = {
      username: t,
      email: r,
      email_token: o,
      password: l,
      avatar: c,
      discriminator: n,
      global_name: R,
      new_password: I,
      ...e
    };
    null === A && (a.avatar_decoration_id = null), null != A && (a.avatar_decoration_id = A.id, a.avatar_decoration_sku_id = A.skuId);
    let u = s.default.get(_.DEVICE_TOKEN),
      i = (0, E.getDevicePushProvider)();
    null != i && null != u && (a.push_provider = i, a.push_token = u);
    let d = s.default.get(_.DEVICE_VOIP_TOKEN);
    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != d && (a.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = d), N(a)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => a.default.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return u.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
      animated: (0, i.isAnimatedIconHash)(t.avatar)
    }), a.default.dispatch({
      type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), e
  }, e => (a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function S() {
  return r.default.get({
    url: _.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function T() {
  return r.default.post({
    url: _.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function C(e) {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function m(e) {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function h(e) {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function L(e) {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function D() {
  a.default.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function O() {
  a.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function U() {
  a.default.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function g() {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}

function P(e) {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
    disable: e
  })
}