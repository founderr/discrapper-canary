"use strict";
n.r(t), n.d(t, {
  openDisclosureModal: function() {
    return d
  },
  openGameLink: function() {
    return u
  },
  openQuestsRewardCodeModal: function() {
    return l
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  a = n("782568"),
  s = n("49012"),
  o = n("617136");

function l(e) {
  let {
    questId: t,
    location: a,
    questContentPosition: s
  } = e;
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("61624")]).then(n.bind(n, "985866"));
    return n => (0, i.jsx)(e, {
      ...n,
      questId: t,
      questContentPosition: s,
      location: a
    })
  })
}

function u(e, t) {
  (0, s.handleClick)({
    href: e.config.getGameLink,
    onConfirm: () => {
      (0, o.trackQuestContentClicked)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position
      }), (0, a.default)(e.config.getGameLink)
    }
  })
}

function d(e, t) {
  (0, o.trackQuestContentClicked)({
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