n.d(e, {
    B2: function () {
        return o;
    },
    DS: function () {
        return u;
    },
    hj: function () {
        return c;
    },
    nh: function () {
        return a;
    }
});
var i = n(63063),
    r = n(981631),
    l = n(388032);
function u(t) {
    let { application: e, username: n, usernameHook: u = r.dG4, applicationNameHook: a = r.dG4 } = t;
    return null != e
        ? l.intl.format(l.t.J8SaGx, {
              username: n,
              otherUsername: e.name,
              usernameHook: u,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : l.intl.format(l.t['+6V2sb'], {
              username: n,
              usernameHook: u,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function a(t) {
    let { application: e, username: n, usernameHook: u = r.dG4, applicationNameHook: a = r.dG4 } = t;
    return null != e
        ? l.intl.format(l.t.eGCDam, {
              username: n,
              otherUsername: e.name,
              usernameHook: u,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : l.intl.format(l.t.sAX6rq, {
              username: n,
              usernameHook: u,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(t) {
    let { application: e, username: n, usernameOnClick: u, applicationNameOnClick: a, medium: o } = t;
    return null != e
        ? l.intl.formatToParts(l.t['8r+Z+P'], {
              username: n,
              otherUsername: e.name,
              usernameOnClick: u,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : l.intl.formatToParts(l.t.ojysqa, {
              username: n,
              usernameOnClick: u,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function c(t) {
    let { application: e, username: n, usernameOnClick: u, applicationNameOnClick: a, medium: o } = t;
    return null != e
        ? l.intl.formatToParts(l.t.zmc0mp, {
              username: n,
              otherUsername: e.name,
              usernameOnClick: u,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : l.intl.formatToParts(l.t['x2CN/f'], {
              username: n,
              usernameOnClick: u,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
