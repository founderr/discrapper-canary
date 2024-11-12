e.d(t, {
    B2: function () {
        return o;
    },
    DS: function () {
        return l;
    },
    hj: function () {
        return d;
    },
    nh: function () {
        return a;
    }
});
var i = e(63063),
    r = e(981631),
    u = e(388032);
function l(n) {
    let { application: t, username: e, usernameHook: l = r.dG4, applicationNameHook: a = r.dG4 } = n;
    return null != t
        ? u.intl.format(u.t.J8SaGx, {
              username: e,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : u.intl.format(u.t['+6V2sb'], {
              username: e,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function a(n) {
    let { application: t, username: e, usernameHook: l = r.dG4, applicationNameHook: a = r.dG4 } = n;
    return null != t
        ? u.intl.format(u.t.eGCDam, {
              username: e,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : u.intl.format(u.t.sAX6rq, {
              username: e,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(n) {
    let { application: t, username: e, usernameOnClick: l, applicationNameOnClick: a, medium: o } = n;
    return null != t
        ? u.intl.formatToParts(u.t['8r+Z+P'], {
              username: e,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : u.intl.formatToParts(u.t.ojysqa, {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function d(n) {
    let { application: t, username: e, usernameOnClick: l, applicationNameOnClick: a, medium: o } = n;
    return null != t
        ? u.intl.formatToParts(u.t.zmc0mp, {
              username: e,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : u.intl.formatToParts(u.t['x2CN/f'], {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
