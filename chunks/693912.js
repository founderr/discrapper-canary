"use strict";
s.r(t), s.d(t, {
  getPrivateChannelIntegrationAddedSystemMessageASTContent: function() {
    return l
  },
  getPrivateChannelIntegrationAddedSystemMessageContent: function() {
    return u
  },
  getPrivateChannelIntegrationRemovedSystemMessageASTContent: function() {
    return E
  },
  getPrivateChannelIntegrationRemovedSystemMessageContent: function() {
    return i
  }
});
var a = s("63063"),
  n = s("981631"),
  r = s("689938");

function u(e) {
  let {
    application: t,
    username: s,
    usernameHook: u = n.NOOP,
    applicationNameHook: i = n.NOOP
  } = e;
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
    username: s,
    otherUsername: t.name,
    usernameHook: u,
    otherUsernameHook: i,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
    username: s,
    usernameHook: u,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function i(e) {
  let {
    application: t,
    username: s,
    usernameHook: u = n.NOOP,
    applicationNameHook: i = n.NOOP
  } = e;
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
    username: s,
    otherUsername: t.name,
    usernameHook: u,
    otherUsernameHook: i,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
    username: s,
    usernameHook: u,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function l(e) {
  let {
    application: t,
    username: s,
    usernameOnClick: u,
    applicationNameOnClick: i,
    medium: l
  } = e;
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
    username: s,
    otherUsername: t.name,
    usernameOnClick: u,
    otherUsernameOnClick: i,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
    username: s,
    usernameOnClick: u,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function E(e) {
  let {
    application: t,
    username: s,
    usernameOnClick: u,
    applicationNameOnClick: i,
    medium: l
  } = e;
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
    username: s,
    otherUsername: t.name,
    usernameOnClick: u,
    otherUsernameOnClick: i,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
    username: s,
    usernameOnClick: u,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}