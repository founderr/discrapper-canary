"use strict";
s.r(t), s.d(t, {
  getPrivateChannelIntegrationAddedSystemMessageASTContent: function() {
    return l
  },
  getPrivateChannelIntegrationAddedSystemMessageContent: function() {
    return _
  },
  getPrivateChannelIntegrationRemovedSystemMessageASTContent: function() {
    return u
  },
  getPrivateChannelIntegrationRemovedSystemMessageContent: function() {
    return r
  }
});
var a = s("63063"),
  n = s("981631"),
  E = s("689938");

function _(e) {
  let {
    application: t,
    username: s,
    usernameHook: _ = n.NOOP,
    applicationNameHook: r = n.NOOP
  } = e;
  return null != t ? E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
    username: s,
    otherUsername: t.name,
    usernameHook: _,
    otherUsernameHook: r,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
    username: s,
    usernameHook: _,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function r(e) {
  let {
    application: t,
    username: s,
    usernameHook: _ = n.NOOP,
    applicationNameHook: r = n.NOOP
  } = e;
  return null != t ? E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
    username: s,
    otherUsername: t.name,
    usernameHook: _,
    otherUsernameHook: r,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
    username: s,
    usernameHook: _,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function l(e) {
  let {
    application: t,
    username: s,
    usernameOnClick: _,
    applicationNameOnClick: r,
    medium: l
  } = e;
  return null != t ? E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
    username: s,
    otherUsername: t.name,
    usernameOnClick: _,
    otherUsernameOnClick: r,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
    username: s,
    usernameOnClick: _,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function u(e) {
  let {
    application: t,
    username: s,
    usernameOnClick: _,
    applicationNameOnClick: r,
    medium: l
  } = e;
  return null != t ? E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
    username: s,
    otherUsername: t.name,
    usernameOnClick: _,
    otherUsernameOnClick: r,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
    username: s,
    usernameOnClick: _,
    medium: l,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}