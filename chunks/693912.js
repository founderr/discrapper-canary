E.d(n, {
  B2: function() {
    return u
  },
  DS: function() {
    return a
  },
  hj: function() {
    return M
  },
  nh: function() {
    return r
  }
});
var t = E(63063),
  _ = E(981631),
  s = E(689938);

function a(e) {
  let {
    application: n,
    username: E,
    usernameHook: a = _.dG4,
    applicationNameHook: r = _.dG4
  } = e;
  return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
    username: E,
    otherUsername: n.name,
    usernameHook: a,
    otherUsernameHook: r,
    helpCenterLink: t.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
    username: E,
    usernameHook: a,
    helpCenterLink: t.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function r(e) {
  let {
    application: n,
    username: E,
    usernameHook: a = _.dG4,
    applicationNameHook: r = _.dG4
  } = e;
  return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
    username: E,
    otherUsername: n.name,
    usernameHook: a,
    otherUsernameHook: r,
    helpCenterLink: t.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
    username: E,
    usernameHook: a,
    helpCenterLink: t.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function u(e) {
  let {
    application: n,
    username: E,
    usernameOnClick: a,
    applicationNameOnClick: r,
    medium: u
  } = e;
  return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
    username: E,
    otherUsername: n.name,
    usernameOnClick: a,
    otherUsernameOnClick: r,
    medium: u,
    helpCenterLink: {
      url: t.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
    username: E,
    usernameOnClick: a,
    medium: u,
    helpCenterLink: {
      url: t.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function M(e) {
  let {
    application: n,
    username: E,
    usernameOnClick: a,
    applicationNameOnClick: r,
    medium: u
  } = e;
  return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
    username: E,
    otherUsername: n.name,
    usernameOnClick: a,
    otherUsernameOnClick: r,
    medium: u,
    helpCenterLink: {
      url: t.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
    username: E,
    usernameOnClick: a,
    medium: u,
    helpCenterLink: {
      url: t.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}