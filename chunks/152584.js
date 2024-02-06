"use strict";
n.r(t), n.d(t, {
  accountDetailsInit: function() {
    return I
  },
  accountDetailsClose: function() {
    return h
  },
  disableAccount: function() {
    return S
  },
  saveAccountRequest: function() {
    return p
  },
  saveAccountChanges: function() {
    return T
  },
  getHarvestStatus: function() {
    return N
  },
  requestHarvest: function() {
    return C
  },
  setPendingAvatar: function() {
    return R
  },
  setPendingGlobalNameName: function() {
    return v
  },
  setPendingAvatarDecoration: function() {
    return A
  },
  setPendingProfileEffectId: function() {
    return g
  },
  clearErrors: function() {
    return m
  },
  resetPendingAccountChanges: function() {
    return U
  },
  resetAllPending: function() {
    return O
  },
  resetAndCloseUserProfileForm: function() {
    return L
  },
  setDisableSubmit: function() {
    return D
  }
});
var i = n("872717"),
  r = n("95410"),
  o = n("819855"),
  s = n("913144"),
  l = n("393414"),
  a = n("599110"),
  u = n("315102"),
  c = n("730622"),
  d = n("437822"),
  f = n("49111"),
  E = n("191349"),
  _ = n("782340");

function I() {
  s.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function h() {
  s.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function S(e, t) {
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
    d.default.logoutInternal(), (0, l.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
  })
}
async function p(e) {
  let t = await i.default.patch({
      url: f.Endpoints.ME,
      oldFormErrors: !0,
      body: e
    }),
    n = t.body;
  if (n.token) {
    let t = n.token;
    delete n.token, s.default.dispatch({
      type: "UPDATE_TOKEN",
      token: t,
      userId: n.id
    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && s.default.dispatch({
      type: "PASSWORD_UPDATED",
      userId: n.id
    })
  }
  return s.default.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: n
  }), t
}

function T(e) {
  let {
    username: t,
    discriminator: n,
    email: i,
    emailToken: o,
    password: l,
    avatar: d,
    avatarDecoration: I,
    newPassword: h,
    globalName: S
  } = e;
  return s.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, c.default)(e => {
    let s = {
      username: t,
      email: i,
      email_token: o,
      password: l,
      avatar: d,
      discriminator: n,
      global_name: S,
      new_password: h,
      ...e
    };
    null === I && (s.avatar_decoration_id = null), null != I && (s.avatar_decoration_id = I.id, s.avatar_decoration_sku_id = I.skuId);
    let a = r.default.get(f.DEVICE_TOKEN),
      u = (0, E.getDevicePushProvider)();
    null != u && null != a && (s.push_provider = u, s.push_token = a);
    let c = r.default.get(f.DEVICE_VOIP_TOKEN);
    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (s.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, s.push_voip_token = c), p(s)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => s.default.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return a.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
      animated: (0, u.isAnimatedIconHash)(t.avatar)
    }), s.default.dispatch({
      type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), e
  }, e => (s.default.dispatch({
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

function R(e) {
  s.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? o.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : o.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function v(e) {
  s.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function A(e) {
  s.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function g(e) {
  s.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function m() {
  s.default.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function U() {
  s.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function O() {
  s.default.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function L() {
  s.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}

function D(e) {
  s.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
    disable: e
  })
}