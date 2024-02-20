"use strict";
n.r(t), n.d(t, {
  getMyContentInventory: function() {
    return s
  }
});
var i = n("872717"),
  a = n("448993"),
  l = n("49111");
let s = async () => {
  try {
    let e = await i.default.get({
      url: l.Endpoints.MY_CONTENT_INVENTORY
    });
    return e.body
  } catch (e) {
    throw new a.APIError(e)
  }
}