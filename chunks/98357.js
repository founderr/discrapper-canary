t.d(r, {
  Z: function() {
    return n
  }
});
var a = t(570140),
  i = t(432877);

function n(e, r) {
  let t = "boolean" == typeof r ? r : !i.ZP.get(e);
  a.Z.dispatch({
    type: "DEV_TOOLS_DEV_SETTING_SET",
    toggle: e,
    value: t
  })
}