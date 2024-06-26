"use strict";
n.d(t, {
  FD: function() {
    return T
  },
  I5: function() {
    return O
  },
  Mn: function() {
    return N
  },
  P6: function() {
    return D
  },
  S2: function() {
    return S
  },
  UZ: function() {
    return p
  },
  V3: function() {
    return m
  },
  W3: function() {
    return L
  },
  Zy: function() {
    return h
  },
  b9: function() {
    return C
  },
  cV: function() {
    return R
  },
  ol: function() {
    return A
  },
  si: function() {
    return v
  },
  ss: function() {
    return f
  },
  xn: function() {
    return g
  }
});
var i = n(544891),
  r = n(433517),
  s = n(780384),
  o = n(570140),
  a = n(703656),
  l = n(626135),
  u = n(768581),
  _ = n(546796),
  c = n(893776),
  d = n(981631),
  E = n(792101),
  I = n(689938);

function T() {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function h() {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function f(e, t) {
  let n = t ? I.Z.Messages.DELETE_ACCOUNT : I.Z.Messages.DISABLE_ACCOUNT,
    r = t ? d.ANM.DELETE_ACCOUNT : d.ANM.DISABLE_ACCOUNT;
  return (0, _.Z)(t => i.tn.post({
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
    c.Z.logoutInternal(), (0, a.uL)(d.Z5c.DEFAULT_LOGGED_OUT)
  })
}
async function S(e) {
  let t = await i.tn.patch({
      url: d.ANM.ME,
      oldFormErrors: !0,
      body: e
    }),
    n = t.body;
  if (n.token) {
    let t = n.token;
    delete n.token, o.Z.dispatch({
      type: "UPDATE_TOKEN",
      token: t,
      userId: n.id
    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && o.Z.dispatch({
      type: "PASSWORD_UPDATED",
      userId: n.id
    })
  }
  return o.Z.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: n
  }), t
}

function N(e) {
  let {
    username: t,
    discriminator: n,
    email: i,
    emailToken: s,
    password: a,
    avatar: c,
    avatarDecoration: T,
    newPassword: h,
    globalName: f
  } = e;
  return o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, _.Z)(e => {
    let o = {
      username: t,
      email: i,
      email_token: s,
      password: a,
      avatar: c,
      discriminator: n,
      global_name: f,
      new_password: h,
      ...e
    };
    null === T && (o.avatar_decoration_id = null), null != T && (o.avatar_decoration_id = T.id, o.avatar_decoration_sku_id = T.skuId);
    let l = r.K.get(d.JkL),
      u = (0, E.xJ)();
    null != u && null != l && (o.push_provider = u, o.push_token = l);
    let _ = r.K.get(d.scU);
    return null != E.mv && null != _ && (o.push_voip_provider = E.mv, o.push_voip_token = _), S(o)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: I.Z.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return l.default.track(d.rMx.USER_AVATAR_UPDATED, {
      animated: (0, u.xR)(t.avatar)
    }), o.Z.dispatch({
      type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), e
  }, e => (o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function A() {
  return i.tn.get({
    url: d.ANM.USER_HARVEST,
    oldFormErrors: !0
  })
}

function m(e) {
  return i.tn.post({
    url: d.ANM.USER_HARVEST,
    body: {
      backends: e
    },
    oldFormErrors: !0
  })
}

function O(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? s.uv.announce(I.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : s.uv.announce(I.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function p(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function R(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function g(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function C() {
  o.Z.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function v() {
  o.Z.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function L() {
  o.Z.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function D() {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}