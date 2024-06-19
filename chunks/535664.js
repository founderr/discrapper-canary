t.d(s, {
  C: function() {
    return i
  },
  u: function() {
    return a
  }
});
var n = t(570140);
let i = (e, s) => {
    n.Z.dispatch({
      type: "SET_PREMIUM_TYPE_OVERRIDE",
      premiumType: e
    }), n.Z.dispatch({
      type: "UPDATE_CLIENT_PREMIUM_TYPE",
      user: s
    })
  },
  a = e => {
    n.Z.dispatch({
      type: "SET_CREATED_AT_OVERRIDE",
      createdAt: e
    })
  }