"use strict";
n.r(t), n.d(t, {
  copyShareLink: function() {
    return I
  },
  openDisclosureModal: function() {
    return E
  },
  openGameLink: function() {
    return c
  },
  openQuestsRewardCodeModal: function() {
    return _
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("782568"),
  a = n("572004"),
  o = n("49012"),
  l = n("617136"),
  u = n("918701"),
  d = n("566078");

function _(e) {
  let {
    questId: t,
    location: s,
    questContentPosition: a
  } = e;
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("61624")]).then(n.bind(n, "985866"));
    return n => (0, i.jsx)(e, {
      ...n,
      questId: t,
      questContentPosition: a,
      location: s
    })
  })
}

function c(e, t) {
  let n = d.SharedQuestFields.build(e.config).application.link;
  (0, o.handleClick)({
    href: n,
    onConfirm: () => {
      (0, l.trackQuestContentClicked)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position
      }), (0, s.default)(n)
    }
  })
}

function E(e, t) {
  (0, l.trackQuestContentClicked)({
    questId: e.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentCTA: t.ctaContent
  }), (0, r.openModalLazy)(async () => {
    let {
      default: r
    } = await Promise.all([n.e("99387"), n.e("4266")]).then(n.bind(n, "316210"));
    return n => (0, i.jsx)(r, {
      ...n,
      questContent: t.content,
      questConfig: e.config
    })
  })
}
let I = (e, t) => {
  (0, l.trackQuestContentClicked)({
    questId: e,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position
  }), (0, a.copy)((0, u.getQuestUrl)(e))
}