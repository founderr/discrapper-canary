"use strict";
n.r(t), n.d(t, {
  accountDetailsInit: function() {
    return h
  },
  accountDetailsClose: function() {
    return _
  },
  disableAccount: function() {
    return C
  },
  saveAccountRequest: function() {
    return S
  },
  saveAccountChanges: function() {
    return I
  },
  getHarvestStatus: function() {
    return T
  },
  requestHarvest: function() {
    return g
  },
  setPendingAvatar: function() {
    return N
  },
  setPendingGlobalNameName: function() {
    return v
  },
  setPendingAvatarDecoration: function() {
    return A
  },
  setPendingProfileEffectId: function() {
    return m
  },
  clearErrors: function() {
    return L
  },
  resetPendingAccountChanges: function() {
    return R
  },
  resetAllPending: function() {
    return y
  },
  resetAndCloseUserProfileForm: function() {
    return U
  },
  setDisableSubmit: function() {
    return O
  }
});
var i = n("872717"),
  l = n("95410"),
  r = n("819855"),
  o = n("913144"),
  a = n("393414"),
  s = n("599110"),
  u = n("315102"),
  c = n("730622"),
  d = n("437822"),
  f = n("49111"),
  E = n("191349"),
  p = n("782340");

function h() {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function _() {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function C(e, t) {
  let n = t ? p.default.Messages.DELETE_ACCOUNT : p.default.Messages.DISABLE_ACCOUNT,
    l = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
  return (0, c.default)(t => i.default.post({
    url: l,
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
    d.default.logoutInternal(), (0, a.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
  })
}
async function S(e) {
  let t = await i.default.patch({
      url: f.Endpoints.ME,
      oldFormErrors: !0,
      body: e
    }),
    n = t.body;
  if (n.token) {
    let t = n.token;
    delete n.token, o.default.dispatch({
      type: "UPDATE_TOKEN",
      token: t,
      userId: n.id
    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && o.default.dispatch({
      type: "PASSWORD_UPDATED",
      userId: n.id
    })
  }
  return o.default.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: n
  }), t
}

function I(e) {
  let {
    username: t,
    discriminator: n,
    email: i,
    emailToken: r,
    password: a,
    avatar: d,
    avatarDecoration: h,
    newPassword: _,
    globalName: C
  } = e;
  return o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, c.default)(e => {
    let o = {
      username: t,
      email: i,
      email_token: r,
      password: a,
      avatar: d,
      discriminator: n,
      global_name: C,
      new_password: _,
      ...e
    };
    null === h && (o.avatar_decoration_id = null), null != h && (o.avatar_decoration_id = h.id, o.avatar_decoration_sku_id = h.skuId);
    let s = l.default.get(f.DEVICE_TOKEN),
      u = (0, E.getDevicePushProvider)();
    null != u && null != s && (o.push_provider = u, o.push_token = s);
    let c = l.default.get(f.DEVICE_VOIP_TOKEN);
    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (o.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = c), S(o)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: p.default.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => o.default.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return s.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
      animated: (0, u.isAnimatedIconHash)(t.avatar)
    }), o.default.dispatch({
      type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), e
  }, e => (o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function T() {
  return i.default.get({
    url: f.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function g() {
  return i.default.post({
    url: f.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function N(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? r.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : r.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function v(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function A(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function m(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function L() {
  o.default.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function R() {
  o.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function y() {
  o.default.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function U() {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}

function O(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
    disable: e
  })
}