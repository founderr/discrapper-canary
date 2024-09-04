_.d(E, {
    B2: function () {
        return r;
    },
    DS: function () {
        return a;
    },
    hj: function () {
        return S;
    },
    nh: function () {
        return M;
    }
});
var t = _(63063),
    n = _(981631),
    s = _(689938);
function a(e) {
    let { application: E, username: _, usernameHook: a = n.dG4, applicationNameHook: M = n.dG4 } = e;
    return null != E
        ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
              username: _,
              otherUsername: E.name,
              usernameHook: a,
              otherUsernameHook: M,
              helpCenterLink: t.Z.getArticleURL(n.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
              username: _,
              usernameHook: a,
              helpCenterLink: t.Z.getArticleURL(n.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function M(e) {
    let { application: E, username: _, usernameHook: a = n.dG4, applicationNameHook: M = n.dG4 } = e;
    return null != E
        ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
              username: _,
              otherUsername: E.name,
              usernameHook: a,
              otherUsernameHook: M,
              helpCenterLink: t.Z.getArticleURL(n.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
              username: _,
              usernameHook: a,
              helpCenterLink: t.Z.getArticleURL(n.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function r(e) {
    let { application: E, username: _, usernameOnClick: a, applicationNameOnClick: M, medium: r } = e;
    return null != E
        ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
              username: _,
              otherUsername: E.name,
              usernameOnClick: a,
              otherUsernameOnClick: M,
              medium: r,
              helpCenterLink: { url: t.Z.getArticleURL(n.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
              username: _,
              usernameOnClick: a,
              medium: r,
              helpCenterLink: { url: t.Z.getArticleURL(n.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function S(e) {
    let { application: E, username: _, usernameOnClick: a, applicationNameOnClick: M, medium: r } = e;
    return null != E
        ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
              username: _,
              otherUsername: E.name,
              usernameOnClick: a,
              otherUsernameOnClick: M,
              medium: r,
              helpCenterLink: { url: t.Z.getArticleURL(n.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
              username: _,
              usernameOnClick: a,
              medium: r,
              helpCenterLink: { url: t.Z.getArticleURL(n.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
