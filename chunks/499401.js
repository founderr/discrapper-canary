e.d(n, {
    Y: function () {
        return i;
    }
});
var r = e(388032);
function i(t) {
    let { application: n, username: e, usernameOnClick: i } = t;
    return null != n
        ? r.intl.formatToParts(r.t.Tes5Oj, {
              username: e,
              applicationName: n.name,
              usernameOnClick: i
          })
        : r.intl.formatToParts(r.t.PUJtgo, {
              username: e,
              usernameOnClick: i
          });
}
