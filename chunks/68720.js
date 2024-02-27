"use strict";
E.r(_), E.d(_, {
  getMyContentInventory: function() {
    return r
  }
}), E("222007");
var t = E("872717"),
  o = E("448993"),
  n = E("49111");
let r = async () => {
  try {
    var e;
    let _ = await t.default.get({
        url: n.Endpoints.MY_CONTENT_INVENTORY
      }),
      E = _.body;
    return E.entries = null !== (e = E.entries) && void 0 !== e ? e : [], E
  } catch (e) {
    throw new o.APIError(e)
  }
}