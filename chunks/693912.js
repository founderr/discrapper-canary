"use strict";
s.r(t), s.d(t, {
  getPrivateChannelIntegrationAddedSystemMessageASTContent: function() {
    return u
  },
  getPrivateChannelIntegrationAddedSystemMessageContent: function() {
    return _
  },
  getPrivateChannelIntegrationRemovedSystemMessageASTContent: function() {
    return M
  },
  getPrivateChannelIntegrationRemovedSystemMessageContent: function() {
    return l
  }
});
var a = s("63063"),
  E = s("981631"),
  n = s("689938");

function _(e) {
  let {
    application: t,
    username: s,
    usernameHook: _ = E.NOOP,
    applicationNameHook: l = E.NOOP
  } = e;
  return null != t ? n.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
    username: s,
    otherUsername: t.name,
    usernameHook: _,
    otherUsernameHook: l,
    helpCenterLink: a.default.getArticleURL(E.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : n.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
    username: s,
    usernameHook: _,
    helpCenterLink: a.default.getArticleURL(E.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function l(e) {
  let {
    application: t,
    username: s,
    usernameHook: _ = E.NOOP,
    applicationNameHook: l = E.NOOP
  } = e;
  return null != t ? n.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
    username: s,
    otherUsername: t.name,
    usernameHook: _,
    otherUsernameHook: l,
    helpCenterLink: a.default.getArticleURL(E.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : n.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
    username: s,
    usernameHook: _,
    helpCenterLink: a.default.getArticleURL(E.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function u(e) {
  let {
    application: t,
    username: s,
    usernameOnClick: _,
    applicationNameOnClick: l,
    medium: u
  } = e;
  return null != t ? n.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
    username: s,
    otherUsername: t.name,
    usernameOnClick: _,
    otherUsernameOnClick: l,
    medium: u,
    helpCenterLink: {
      url: a.default.getArticleURL(E.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : n.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
    username: s,
    usernameOnClick: _,
    medium: u,
    helpCenterLink: {
      url: a.default.getArticleURL(E.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function M(e) {
  let {
    application: t,
    username: s,
    usernameOnClick: _,
    applicationNameOnClick: l,
    medium: u
  } = e;
  return null != t ? n.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
    username: s,
    otherUsername: t.name,
    usernameOnClick: _,
    otherUsernameOnClick: l,
    medium: u,
    helpCenterLink: {
      url: a.default.getArticleURL(E.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : n.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
    username: s,
    usernameOnClick: _,
    medium: u,
    helpCenterLink: {
      url: a.default.getArticleURL(E.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}