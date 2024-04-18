"use strict";
s.r(t), s.d(t, {
  getPrivateChannelIntegrationAddedSystemMessageASTContent: function() {
    return u
  },
  getPrivateChannelIntegrationAddedSystemMessageContent: function() {
    return _
  },
  getPrivateChannelIntegrationRemovedSystemMessageASTContent: function() {
    return E
  },
  getPrivateChannelIntegrationRemovedSystemMessageContent: function() {
    return l
  }
});
var a = s("63063"),
  n = s("981631"),
  r = s("689938");

function _(e) {
  let {
    application: t,
    username: s,
    usernameHook: _ = n.NOOP,
    applicationNameHook: l = n.NOOP
  } = e;
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
    username: s,
    otherUsername: t.name,
    usernameHook: _,
    otherUsernameHook: l,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
    username: s,
    usernameHook: _,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function l(e) {
  let {
    application: t,
    username: s,
    usernameHook: _ = n.NOOP,
    applicationNameHook: l = n.NOOP
  } = e;
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
    username: s,
    otherUsername: t.name,
    usernameHook: _,
    otherUsernameHook: l,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
    username: s,
    usernameHook: _,
    helpCenterLink: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
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
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
    username: s,
    otherUsername: t.name,
    usernameOnClick: _,
    otherUsernameOnClick: l,
    medium: u,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
    username: s,
    usernameOnClick: _,
    medium: u,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function E(e) {
  let {
    application: t,
    username: s,
    usernameOnClick: _,
    applicationNameOnClick: l,
    medium: u
  } = e;
  return null != t ? r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
    username: s,
    otherUsername: t.name,
    usernameOnClick: _,
    otherUsernameOnClick: l,
    medium: u,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : r.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
    username: s,
    usernameOnClick: _,
    medium: u,
    helpCenterLink: {
      url: a.default.getArticleURL(n.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}