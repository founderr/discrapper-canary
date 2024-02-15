"use strict";
n.r(t), n.d(t, {
  accountDetailsInit: function() {
    return T
  },
  accountDetailsClose: function() {
    return S
  },
  disableAccount: function() {
    return I
  },
  saveAccountRequest: function() {
    return h
  },
  saveAccountChanges: function() {
    return N
  },
  getHarvestStatus: function() {
    return p
  },
  requestHarvest: function() {
    return C
  },
  setPendingAvatar: function() {
    return v
  },
  setPendingGlobalNameName: function() {
    return A
  },
  setPendingAvatarDecoration: function() {
    return m
  },
  setPendingProfileEffectId: function() {
    return g
  },
  clearErrors: function() {
    return R
  },
  resetPendingAccountChanges: function() {
    return P
  },
  resetAllPending: function() {
    return D
  },
  resetAndCloseUserProfileForm: function() {
    return U
  },
  setDisableSubmit: function() {
    return L
  }
});
var i = n("872717"),
  r = n("95410"),
  u = n("819855"),
  a = n("913144"),
  s = n("393414"),
  l = n("599110"),
  o = n("315102"),
  c = n("730622"),
  d = n("437822"),
  f = n("49111"),
  E = n("191349"),
  _ = n("782340");

function T() {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function S() {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function I(e, t) {
  let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
    r = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
  return (0, c.default)(t => i.default.post({
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
    d.default.logoutInternal(), (0, s.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
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

function N(e) {
  let {
    username: t,
    discriminator: n,
    email: i,
    emailToken: u,
    password: s,
    avatar: d,
    avatarDecoration: T,
    newPassword: S,
    globalName: I
  } = e;
  return a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, c.default)(e => {
    let a = {
      username: t,
      email: i,
      email_token: u,
      password: s,
      avatar: d,
      discriminator: n,
      global_name: I,
      new_password: S,
      ...e
    };
    null === T && (a.avatar_decoration_id = null), null != T && (a.avatar_decoration_id = T.id, a.avatar_decoration_sku_id = T.skuId);
    let l = r.default.get(f.DEVICE_TOKEN),
      o = (0, E.getDevicePushProvider)();
    null != o && null != l && (a.push_provider = o, a.push_token = l);
    let c = r.default.get(f.DEVICE_VOIP_TOKEN);
    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (a.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = c), h(a)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => a.default.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return l.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
      animated: (0, o.isAnimatedIconHash)(t.avatar)
    }), a.default.dispatch({
      type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), e
  }, e => (a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function p() {
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

function v(e) {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? u.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : u.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function A(e) {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function m(e) {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function g(e) {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function R() {
  a.default.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function P() {
  a.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function D() {
  a.default.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function U() {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}

function L(e) {
  a.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
    disable: e
  })
}