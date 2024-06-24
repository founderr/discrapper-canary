t.d(n, {
  B2: function() {
    return r
  },
  DS: function() {
    return a
  },
  hj: function() {
    return i
  },
  nh: function() {
    return u
  }
});
var E = t(63063),
  _ = t(981631),
  s = t(689938);

function a(e) {
  let {
    application: n,
    username: t,
    usernameHook: a = _.dG4,
    applicationNameHook: u = _.dG4
  } = e;
  return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
    username: t,
    otherUsername: n.name,
    usernameHook: a,
    otherUsernameHook: u,
    helpCenterLink: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
    username: t,
    usernameHook: a,
    helpCenterLink: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function u(e) {
  let {
    application: n,
    username: t,
    usernameHook: a = _.dG4,
    applicationNameHook: u = _.dG4
  } = e;
  return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
    username: t,
    otherUsername: n.name,
    usernameHook: a,
    otherUsernameHook: u,
    helpCenterLink: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
    username: t,
    usernameHook: a,
    helpCenterLink: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function r(e) {
  let {
    application: n,
    username: t,
    usernameOnClick: a,
    applicationNameOnClick: u,
    medium: r
  } = e;
  return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
    username: t,
    otherUsername: n.name,
    usernameOnClick: a,
    otherUsernameOnClick: u,
    medium: r,
    helpCenterLink: {
      url: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
    username: t,
    usernameOnClick: a,
    medium: r,
    helpCenterLink: {
      url: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function i(e) {
  let {
    application: n,
    username: t,
    usernameOnClick: a,
    applicationNameOnClick: u,
    medium: r
  } = e;
  return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
    username: t,
    otherUsername: n.name,
    usernameOnClick: a,
    otherUsernameOnClick: u,
    medium: r,
    helpCenterLink: {
      url: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
    username: t,
    usernameOnClick: a,
    medium: r,
    helpCenterLink: {
      url: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}