n.d(t, {
    B2: function () {
        return u;
    },
    DS: function () {
        return a;
    },
    hj: function () {
        return c;
    },
    nh: function () {
        return o;
    }
});
var r = n(63063),
    l = n(981631),
    i = n(388032);
function a(e) {
    let { application: t, username: n, usernameHook: a = l.dG4, applicationNameHook: o = l.dG4 } = e;
    return null != t
        ? i.intl.format(i.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: o,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : i.intl.format(i.t['+6V2sb'], {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(e) {
    let { application: t, username: n, usernameHook: a = l.dG4, applicationNameHook: o = l.dG4 } = e;
    return null != t
        ? i.intl.format(i.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: o,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : i.intl.format(i.t.sAX6rq, {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function u(e) {
    let { application: t, username: n, usernameOnClick: a, applicationNameOnClick: o, medium: u } = e;
    return null != t
        ? i.intl.formatToParts(i.t['8r+Z+P'], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: o,
              medium: u,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : i.intl.formatToParts(i.t.ojysqa, {
              username: n,
              usernameOnClick: a,
              medium: u,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function c(e) {
    let { application: t, username: n, usernameOnClick: a, applicationNameOnClick: o, medium: u } = e;
    return null != t
        ? i.intl.formatToParts(i.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: o,
              medium: u,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : i.intl.formatToParts(i.t['x2CN/f'], {
              username: n,
              usernameOnClick: a,
              medium: u,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
