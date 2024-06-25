n.d(t, {
  Z: function() {
    return l
  }
});
var s = n(981631);
let i = "<removed>";

function l(e) {
  var t, n;
  let l = {
    ...e
  };
  if ("object" == typeof(t = l).args && "string" == typeof t.cmd) l = function(e) {
    switch (e.cmd) {
      case s.Etm.AUTHENTICATE:
      case s.Etm.GET_PROVIDER_ACCESS_TOKEN:
        return {
          ...e, args: {
            ...e.args,
            access_token: i
          }
        };
      default:
        return {
          ...e
        }
    }
  }(l);
  if ("object" == typeof(n = l).data && "string" == typeof n.cmd) l = function(e) {
    switch (e.cmd) {
      case s.Etm.AUTHENTICATE:
      case s.Etm.GET_PROVIDER_ACCESS_TOKEN:
        return {
          ...e, data: {
            ...e.data,
            access_token: i
          }
        };
      default:
        return {
          ...e
        }
    }
  }(l);
  return l
}