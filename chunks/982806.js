"use strict";
var i = n(735250);
n(470079);
var r = n(481060);
t.Z = {
  show(e) {
    let {
      url: t,
      trustUrl: s,
      onConfirm: o,
      isProtocol: a
    } = e;
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("85668").then(n.bind(n, 720553));
      return n => (0, i.jsx)(e, {
        ...n,
        url: t,
        isProtocol: a,
        trustUrl: s,
        onConfirm: o
      })
    })
  }
}