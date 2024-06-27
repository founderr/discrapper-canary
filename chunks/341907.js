"use strict";
n.d(t, {
  a: function() {
    return a
  },
  h: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(617136);

function o(e) {
  let {
    questId: t,
    location: s,
    questContentPosition: o
  } = e;
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("54535"), n.e("12506")]).then(n.bind(n, 985866));
    return n => (0, i.jsx)(e, {
      ...n,
      questId: t,
      questContentPosition: o,
      location: s
    })
  })
}

function a(e, t) {
  (0, s._3)({
    questId: e.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentCTA: t.ctaContent
  }), (0, r.openModalLazy)(async () => {
    let {
      default: r
    } = await n.e("4266").then(n.bind(n, 316210));
    return n => (0, i.jsx)(r, {
      ...n,
      questContent: t.content,
      quest: e
    })
  })
}