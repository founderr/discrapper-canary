"use strict";
n.r(t), n.d(t, {
  getPrivateChannelIntegrationAddedSystemMessageASTContent: function() {
    return l
  },
  getPrivateChannelIntegrationAddedSystemMessageContent: function() {
    return i
  },
  getPrivateChannelIntegrationRemovedSystemMessageASTContent: function() {
    return o
  },
  getPrivateChannelIntegrationRemovedSystemMessageContent: function() {
    return u
  }
});
var a = n("63063"),
  s = n("981631"),
  r = n("689938");

function i(e) {
  let {
    application: t,
    username: n,
    usernameHook: i = s.NOOP,
    applicationNameHook: u = s.NOOP
  } = e;
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
    username: n,
    otherUsername: t.name,
    usernameHook: i,
    otherUsernameHook: u,
    helpCenterLink: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
    username: n,
    usernameHook: i,
    helpCenterLink: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function u(e) {
  let {
    application: t,
    username: n,
    usernameHook: i = s.NOOP,
    applicationNameHook: u = s.NOOP
  } = e;
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
    username: n,
    otherUsername: t.name,
    usernameHook: i,
    otherUsernameHook: u,
    helpCenterLink: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
    username: n,
    usernameHook: i,
    helpCenterLink: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function l(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: i,
    applicationNameOnClick: u,
    medium: l
  } = e;
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
    username: n,
    otherUsername: t.name,
    usernameOnClick: i,
    otherUsernameOnClick: u,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
    username: n,
    usernameOnClick: i,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function o(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: i,
    applicationNameOnClick: u,
    medium: l
  } = e;
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
    username: n,
    otherUsername: t.name,
    usernameOnClick: i,
    otherUsernameOnClick: u,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
    username: n,
    usernameOnClick: i,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(s.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}