e.d(t, {
    Y: function () {
        return i;
    }
});
var r = e(388032);
function i(n) {
    let { application: t, username: e, usernameOnClick: i } = n;
    return null != t
        ? r.intl.formatToParts(r.t.Tes5Oj, {
              username: e,
              applicationName: t.name,
              usernameOnClick: i
          })
        : r.intl.formatToParts(r.t.PUJtgo, {
              username: e,
              usernameOnClick: i
          });
}
