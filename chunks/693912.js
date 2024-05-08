"use strict";
a.r(t), a.d(t, {
  getPrivateChannelIntegrationAddedSystemMessageASTContent: function() {
    return r
  },
  getPrivateChannelIntegrationAddedSystemMessageContent: function() {
    return l
  },
  getPrivateChannelIntegrationRemovedSystemMessageASTContent: function() {
    return u
  },
  getPrivateChannelIntegrationRemovedSystemMessageContent: function() {
    return _
  }
});
var s = a("63063"),
  n = a("981631"),
  E = a("689938");

function l(e) {
  let {
    application: t,
    username: a,
    usernameHook: l = n.NOOP,
    applicationNameHook: _ = n.NOOP
  } = e;
  return null != t ? E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
    username: a,
    otherUsername: t.name,
    usernameHook: l,
    otherUsernameHook: _,
    helpCenterLink: s.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
    username: a,
    usernameHook: l,
    helpCenterLink: s.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function _(e) {
  let {
    application: t,
    username: a,
    usernameHook: l = n.NOOP,
    applicationNameHook: _ = n.NOOP
  } = e;
  return null != t ? E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
    username: a,
    otherUsername: t.name,
    usernameHook: l,
    otherUsernameHook: _,
    helpCenterLink: s.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
    username: a,
    usernameHook: l,
    helpCenterLink: s.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function r(e) {
  let {
    application: t,
    username: a,
    usernameOnClick: l,
    applicationNameOnClick: _,
    medium: r
  } = e;
  return null != t ? E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
    username: a,
    otherUsername: t.name,
    usernameOnClick: l,
    otherUsernameOnClick: _,
    medium: r,
    helpCenterLink: {
      url: s.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
    username: a,
    usernameOnClick: l,
    medium: r,
    helpCenterLink: {
      url: s.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function u(e) {
  let {
    application: t,
    username: a,
    usernameOnClick: l,
    applicationNameOnClick: _,
    medium: r
  } = e;
  return null != t ? E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
    username: a,
    otherUsername: t.name,
    usernameOnClick: l,
    otherUsernameOnClick: _,
    medium: r,
    helpCenterLink: {
      url: s.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : E.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
    username: a,
    usernameOnClick: l,
    medium: r,
    helpCenterLink: {
      url: s.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}