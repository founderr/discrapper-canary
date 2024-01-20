"use strict";
n.r(t), n.d(t, {
  accountDetailsInit: function() {
    return I
  },
  accountDetailsClose: function() {
    return h
  },
  disableAccount: function() {
    return p
  },
  saveAccountRequest: function() {
    return S
  },
  saveAccountChanges: function() {
    return C
  },
  getHarvestStatus: function() {
    return T
  },
  requestHarvest: function() {
    return N
  },
  setPendingAvatar: function() {
    return v
  },
  setPendingGlobalNameName: function() {
    return m
  },
  setPendingAvatarDecoration: function() {
    return g
  },
  setPendingProfileEffectId: function() {
    return A
  },
  clearErrors: function() {
    return L
  },
  resetPendingAccountChanges: function() {
    return R
  },
  resetAllPending: function() {
    return O
  },
  resetAndCloseUserProfileForm: function() {
    return U
  },
  setDisableSubmit: function() {
    return P
  }
});
var i = n("872717"),
  r = n("95410"),
  l = n("819855"),
  o = n("913144"),
  s = n("393414"),
  a = n("599110"),
  u = n("315102"),
  c = n("730622"),
  d = n("437822"),
  f = n("49111"),
  E = n("191349"),
  _ = n("782340");

function I() {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function h() {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function p(e, t) {
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

function C(e) {
  let {
    username: t,
    discriminator: n,
    email: i,
    emailToken: l,
    password: s,
    avatar: d,
    avatarDecoration: I,
    newPassword: h,
    globalName: p
  } = e;
  return o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, c.default)(e => {
    let o = {
      username: t,
      email: i,
      email_token: l,
      password: s,
      avatar: d,
      discriminator: n,
      global_name: p,
      new_password: h,
      ...e
    };
    null === I && (o.avatar_decoration_id = null), null != I && (o.avatar_decoration_id = I.id, o.avatar_decoration_sku_id = I.skuId);
    let a = r.default.get(f.DEVICE_TOKEN),
      u = (0, E.getDevicePushProvider)();
    null != u && null != a && (o.push_provider = u, o.push_token = a);
    let c = r.default.get(f.DEVICE_VOIP_TOKEN);
    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (o.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = c), S(o)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => o.default.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return a.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
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

function N() {
  return i.default.post({
    url: f.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function v(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function m(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function g(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function A(e) {
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

function O() {
  o.default.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function U() {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}

function P(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
    disable: e
  })
}