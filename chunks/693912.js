e.d(n, {
    B2: function () {
        return o;
    },
    DS: function () {
        return l;
    },
    hj: function () {
        return c;
    },
    nh: function () {
        return a;
    }
});
var r = e(63063),
    i = e(981631),
    u = e(388032);
function l(t) {
    let { application: n, username: e, usernameHook: l = i.dG4, applicationNameHook: a = i.dG4 } = t;
    return null != n
        ? u.intl.format(u.t.J8SaGx, {
              username: e,
              otherUsername: n.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : u.intl.format(u.t['+6V2sb'], {
              username: e,
              usernameHook: l,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function a(t) {
    let { application: n, username: e, usernameHook: l = i.dG4, applicationNameHook: a = i.dG4 } = t;
    return null != n
        ? u.intl.format(u.t.eGCDam, {
              username: e,
              otherUsername: n.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : u.intl.format(u.t.sAX6rq, {
              username: e,
              usernameHook: l,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(t) {
    let { application: n, username: e, usernameOnClick: l, applicationNameOnClick: a, medium: o } = t;
    return null != n
        ? u.intl.formatToParts(u.t['8r+Z+P'], {
              username: e,
              otherUsername: n.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : u.intl.formatToParts(u.t.ojysqa, {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function c(t) {
    let { application: n, username: e, usernameOnClick: l, applicationNameOnClick: a, medium: o } = t;
    return null != n
        ? u.intl.formatToParts(u.t.zmc0mp, {
              username: e,
              otherUsername: n.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : u.intl.formatToParts(u.t['x2CN/f'], {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
