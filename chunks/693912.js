n.d(e, {
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
var i = n(63063),
    r = n(981631),
    u = n(388032);
function l(t) {
    let { application: e, username: n, usernameHook: l = r.dG4, applicationNameHook: a = r.dG4 } = t;
    return null != e
        ? u.intl.format(u.t.J8SaGx, {
              username: n,
              otherUsername: e.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : u.intl.format(u.t['+6V2sb'], {
              username: n,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function a(t) {
    let { application: e, username: n, usernameHook: l = r.dG4, applicationNameHook: a = r.dG4 } = t;
    return null != e
        ? u.intl.format(u.t.eGCDam, {
              username: n,
              otherUsername: e.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : u.intl.format(u.t.sAX6rq, {
              username: n,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(t) {
    let { application: e, username: n, usernameOnClick: l, applicationNameOnClick: a, medium: o } = t;
    return null != e
        ? u.intl.formatToParts(u.t['8r+Z+P'], {
              username: n,
              otherUsername: e.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : u.intl.formatToParts(u.t.ojysqa, {
              username: n,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function c(t) {
    let { application: e, username: n, usernameOnClick: l, applicationNameOnClick: a, medium: o } = t;
    return null != e
        ? u.intl.formatToParts(u.t.zmc0mp, {
              username: n,
              otherUsername: e.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : u.intl.formatToParts(u.t['x2CN/f'], {
              username: n,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
