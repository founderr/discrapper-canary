e.d(n, {
    B2: function () {
        return o;
    },
    DS: function () {
        return a;
    },
    hj: function () {
        return c;
    },
    nh: function () {
        return l;
    }
});
var r = e(63063),
    u = e(981631),
    i = e(388032);
function a(t) {
    let { application: n, username: e, usernameHook: a = u.dG4, applicationNameHook: l = u.dG4 } = t;
    return null != n
        ? i.intl.format(i.t.J8SaGx, {
              username: e,
              otherUsername: n.name,
              usernameHook: a,
              otherUsernameHook: l,
              helpCenterLink: r.Z.getArticleURL(u.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : i.intl.format(i.t['+6V2sb'], {
              username: e,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(u.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function l(t) {
    let { application: n, username: e, usernameHook: a = u.dG4, applicationNameHook: l = u.dG4 } = t;
    return null != n
        ? i.intl.format(i.t.eGCDam, {
              username: e,
              otherUsername: n.name,
              usernameHook: a,
              otherUsernameHook: l,
              helpCenterLink: r.Z.getArticleURL(u.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : i.intl.format(i.t.sAX6rq, {
              username: e,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(u.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(t) {
    let { application: n, username: e, usernameOnClick: a, applicationNameOnClick: l, medium: o } = t;
    return null != n
        ? i.intl.formatToParts(i.t['8r+Z+P'], {
              username: e,
              otherUsername: n.name,
              usernameOnClick: a,
              otherUsernameOnClick: l,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(u.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : i.intl.formatToParts(i.t.ojysqa, {
              username: e,
              usernameOnClick: a,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(u.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function c(t) {
    let { application: n, username: e, usernameOnClick: a, applicationNameOnClick: l, medium: o } = t;
    return null != n
        ? i.intl.formatToParts(i.t.zmc0mp, {
              username: e,
              otherUsername: n.name,
              usernameOnClick: a,
              otherUsernameOnClick: l,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(u.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : i.intl.formatToParts(i.t['x2CN/f'], {
              username: e,
              usernameOnClick: a,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(u.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
