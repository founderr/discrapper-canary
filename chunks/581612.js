t.d(r, {
  Z: function() {
    return n
  },
  q: function() {
    return o
  }
});
var a = t(570140),
  i = t(91311);

function n(e, r) {
  let t = "boolean" == typeof r ? r : !i.Z.get(e);
  a.Z.dispatch({
    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
    toggle: e,
    value: t
  })
}

function o() {
  for (let e in i.Z.all()) n(e, !1)
}