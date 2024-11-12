e.d(t, {
    Y: function () {
        return r;
    }
});
var i = e(388032);
function r(n) {
    let { application: t, username: e, usernameOnClick: r } = n;
    return null != t
        ? i.intl.formatToParts(i.t.Tes5Oj, {
              username: e,
              applicationName: t.name,
              usernameOnClick: r
          })
        : i.intl.formatToParts(i.t.PUJtgo, {
              username: e,
              usernameOnClick: r
          });
}
