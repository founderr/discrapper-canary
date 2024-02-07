"use strict";
n.r(t), n.d(t, {
  accountDetailsInit: function() {
    return S
  },
  accountDetailsClose: function() {
    return T
  },
  disableAccount: function() {
    return A
  },
  saveAccountRequest: function() {
    return p
  },
  saveAccountChanges: function() {
    return I
  },
  getHarvestStatus: function() {
    return N
  },
  requestHarvest: function() {
    return C
  },
  setPendingAvatar: function() {
    return g
  },
  setPendingGlobalNameName: function() {
    return O
  },
  setPendingAvatarDecoration: function() {
    return h
  },
  setPendingProfileEffectId: function() {
    return U
  },
  clearErrors: function() {
    return R
  },
  resetPendingAccountChanges: function() {
    return v
  },
  resetAllPending: function() {
    return P
  },
  resetAndCloseUserProfileForm: function() {
    return y
  },
  setDisableSubmit: function() {
    return m
  }
});
var u = n("872717"),
  i = n("95410"),
  a = n("819855"),
  l = n("913144"),
  r = n("393414"),
  d = n("599110"),
  o = n("315102"),
  s = n("730622"),
  c = n("437822"),
  f = n("49111"),
  E = n("191349"),
  _ = n("782340");

function S() {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function T() {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function A(e, t) {
  let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
    i = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
  return (0, s.default)(t => u.default.post({
    url: i,
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
    c.default.logoutInternal(), (0, r.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
  })
}
async function p(e) {
  let t = await u.default.patch({
      url: f.Endpoints.ME,
      oldFormErrors: !0,
      body: e
    }),
    n = t.body;
  if (n.token) {
    let t = n.token;
    delete n.token, l.default.dispatch({
      type: "UPDATE_TOKEN",
      token: t,
      userId: n.id
    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && l.default.dispatch({
      type: "PASSWORD_UPDATED",
      userId: n.id
    })
  }
  return l.default.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: n
  }), t
}

function I(e) {
  let {
    username: t,
    discriminator: n,
    email: u,
    emailToken: a,
    password: r,
    avatar: c,
    avatarDecoration: S,
    newPassword: T,
    globalName: A
  } = e;
  return l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, s.default)(e => {
    let l = {
      username: t,
      email: u,
      email_token: a,
      password: r,
      avatar: c,
      discriminator: n,
      global_name: A,
      new_password: T,
      ...e
    };
    null === S && (l.avatar_decoration_id = null), null != S && (l.avatar_decoration_id = S.id, l.avatar_decoration_sku_id = S.skuId);
    let d = i.default.get(f.DEVICE_TOKEN),
      o = (0, E.getDevicePushProvider)();
    null != o && null != d && (l.push_provider = o, l.push_token = d);
    let s = i.default.get(f.DEVICE_VOIP_TOKEN);
    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != s && (l.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, l.push_voip_token = s), p(l)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => l.default.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return d.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
      animated: (0, o.isAnimatedIconHash)(t.avatar)
    }), l.default.dispatch({
      type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), e
  }, e => (l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function N() {
  return u.default.get({
    url: f.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function C() {
  return u.default.post({
    url: f.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function g(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? a.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function O(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function h(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function U(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function R() {
  l.default.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function v() {
  l.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function P() {
  l.default.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function y() {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}

function m(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
    disable: e
  })
}