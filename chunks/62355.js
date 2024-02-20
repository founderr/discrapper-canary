"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  l = n("913144"),
  s = n("42203"),
  r = n("988878");
async function o(e) {
  let t = s.default.getChannel(e.channelId),
    o = null == t ? void 0 : t.guild_id;
  if ((0, r.default)(o)) {
    let t = await (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("168984").then(n.bind(n, "168984"));
      return n => (0, i.jsx)(t, {
        ...n,
        ...e
      })
    }, {
      onCloseCallback: () => {
        l.default.dispatch({
          type: "INTERACTION_IFRAME_MODAL_CLOSE",
          applicationId: e.application.id
        })
      }
    });
    l.default.dispatch({
      type: "INTERACTION_IFRAME_MODAL_KEY_CREATE",
      modalKey: t
    })
  }
}