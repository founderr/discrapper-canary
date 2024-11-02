n.d(t, {
    A: function () {
        return l;
    }
});
var i = n(981631),
    r = n(388032);
function l(e) {
    let { application: t, username: n, usernameHook: l = i.dG4 } = e;
    return null != t
        ? r.intl.format(r.t.dXdgnp, {
              username: n,
              applicationName: t.name,
              usernameHook: l
          })
        : r.intl.format(r.t.O829Ul, {
              username: n,
              usernameHook: l
          });
}
