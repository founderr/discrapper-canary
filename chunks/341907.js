"use strict";
n.d(t, {
  az: function() {
    return c
  },
  gI: function() {
    return d
  },
  hp: function() {
    return _
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(570140),
  o = n(230711),
  a = n(327192),
  l = n(617136),
  u = n(981631);

function _(e) {
  let {
    questId: t,
    location: s,
    questContentPosition: o
  } = e;
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("97458"), n.e("54535"), n.e("61624")]).then(n.bind(n, 985866));
    return n => (0, i.jsx)(e, {
      ...n,
      questId: t,
      questContentPosition: o,
      location: s
    })
  })
}

function c(e, t) {
  (0, l._3)({
    questId: e.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentCTA: t.ctaContent
  }), (0, r.openModalLazy)(async () => {
    let {
      default: r
    } = await Promise.all([n.e("99387"), n.e("4266")]).then(n.bind(n, 316210));
    return n => (0, i.jsx)(r, {
      ...n,
      questContent: t.content,
      quest: e
    })
  })
}

function d(e) {
  let {
    showInline: t
  } = e;
  !t && o.Z.open(u.oAB.CONNECTIONS), s.Z.dispatch({
    type: "CONNECTIONS_GRID_MODAL_SHOW",
    onComplete: a.q,
    includedPlatformTypes: new Set([u.ABu.XBOX, u.ABu.PLAYSTATION])
  })
}