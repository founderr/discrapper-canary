"use strict";
n.r(t), n.d(t, {
  accountDetailsInit: function() {
    return S
  },
  accountDetailsClose: function() {
    return T
  },
  disableAccount: function() {
    return I
  },
  saveAccountRequest: function() {
    return h
  },
  saveAccountChanges: function() {
    return v
  },
  getHarvestStatus: function() {
    return N
  },
  requestHarvest: function() {
    return C
  },
  setPendingAvatar: function() {
    return p
  },
  setPendingGlobalNameName: function() {
    return g
  },
  setPendingAvatarDecoration: function() {
    return A
  },
  setPendingProfileEffectId: function() {
    return m
  },
  clearErrors: function() {
    return R
  },
  resetPendingAccountChanges: function() {
    return L
  },
  resetAllPending: function() {
    return P
  },
  resetAndCloseUserProfileForm: function() {
    return D
  },
  setDisableSubmit: function() {
    return y
  }
});
var i = n("872717"),
  r = n("95410"),
  l = n("819855"),
  u = n("913144"),
  a = n("393414"),
  s = n("599110"),
  o = n("315102"),
  d = n("730622"),
  c = n("437822"),
  f = n("49111"),
  E = n("191349"),
  _ = n("782340");

function S() {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function T() {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function I(e, t) {
  let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
    r = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
  return (0, d.default)(t => i.default.post({
    url: r,
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
    c.default.logoutInternal(), (0, a.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
  })
}
async function h(e) {
  let t = await i.default.patch({
      url: f.Endpoints.ME,
      oldFormErrors: !0,
      body: e
    }),
    n = t.body;
  if (n.token) {
    let t = n.token;
    delete n.token, u.default.dispatch({
      type: "UPDATE_TOKEN",
      token: t,
      userId: n.id
    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && u.default.dispatch({
      type: "PASSWORD_UPDATED",
      userId: n.id
    })
  }
  return u.default.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: n
  }), t
}

function v(e) {
  let {
    username: t,
    discriminator: n,
    email: i,
    emailToken: l,
    password: a,
    avatar: c,
    avatarDecoration: S,
    newPassword: T,
    globalName: I
  } = e;
  return u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, d.default)(e => {
    let u = {
      username: t,
      email: i,
      email_token: l,
      password: a,
      avatar: c,
      discriminator: n,
      global_name: I,
      new_password: T,
      ...e
    };
    null === S && (u.avatar_decoration_id = null), null != S && (u.avatar_decoration_id = S.id, u.avatar_decoration_sku_id = S.skuId);
    let s = r.default.get(f.DEVICE_TOKEN),
      o = (0, E.getDevicePushProvider)();
    null != o && null != s && (u.push_provider = o, u.push_token = s);
    let d = r.default.get(f.DEVICE_VOIP_TOKEN);
    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != d && (u.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, u.push_voip_token = d), h(u)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => u.default.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return s.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
      animated: (0, o.isAnimatedIconHash)(t.avatar)
    }), u.default.dispatch({
      type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), e
  }, e => (u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function N() {
  return i.default.get({
    url: f.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function C() {
  return i.default.post({
    url: f.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function p(e) {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function g(e) {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function A(e) {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function m(e) {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function R() {
  u.default.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function L() {
  u.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function P() {
  u.default.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function D() {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}

function y(e) {
  u.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
    disable: e
  })
}