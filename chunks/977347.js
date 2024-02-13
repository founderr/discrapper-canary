"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  i = n("782340");

function s() {
  function e() {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("649486").then(n.bind(n, "649486"));
      return t => (0, a.jsx)(e, {
        source: "Screenshare Unavailable",
        ...t
      })
    })
  }(0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("861054").then(n.bind(n, "861054"));
    return n => (0, a.jsx)(t, {
      ...n,
      header: i.default.Messages.SCREENSHARE_UNAVAILABLE,
      body: i.default.Messages.SCREENSHARE_UNAVAILABLE_DOWNLOAD_APP,
      confirmText: i.default.Messages.DOWNLOAD_APP,
      onConfirm: e
    })
  })
}