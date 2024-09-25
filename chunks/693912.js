n.d(t, {
    B2: function () {
        return l;
    },
    DS: function () {
        return o;
    },
    hj: function () {
        return u;
    },
    nh: function () {
        return s;
    }
});
var r = n(63063),
    i = n(981631),
    a = n(689938);
function o(e) {
    let { application: t, username: n, usernameHook: o = i.dG4, applicationNameHook: s = i.dG4 } = e;
    return null != t
        ? a.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
              username: n,
              otherUsername: t.name,
              usernameHook: o,
              otherUsernameHook: s,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : a.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
              username: n,
              usernameHook: o,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function s(e) {
    let { application: t, username: n, usernameHook: o = i.dG4, applicationNameHook: s = i.dG4 } = e;
    return null != t
        ? a.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
              username: n,
              otherUsername: t.name,
              usernameHook: o,
              otherUsernameHook: s,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : a.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
              username: n,
              usernameHook: o,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function l(e) {
    let { application: t, username: n, usernameOnClick: o, applicationNameOnClick: s, medium: l } = e;
    return null != t
        ? a.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
              username: n,
              otherUsername: t.name,
              usernameOnClick: o,
              otherUsernameOnClick: s,
              medium: l,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : a.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
              username: n,
              usernameOnClick: o,
              medium: l,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function u(e) {
    let { application: t, username: n, usernameOnClick: o, applicationNameOnClick: s, medium: l } = e;
    return null != t
        ? a.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
              username: n,
              otherUsername: t.name,
              usernameOnClick: o,
              otherUsernameOnClick: s,
              medium: l,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : a.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
              username: n,
              usernameOnClick: o,
              medium: l,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
