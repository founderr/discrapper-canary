"use strict";
n.r(t), n.d(t, {
  openAdoptClanIdentityModal: function() {
    return l
  },
  openClanApplyFlow: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("524437"),
  s = n("481060"),
  a = n("645041"),
  o = n("970606");

function l(e) {
  (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("95883")]).then(n.bind(n, "83521"));
    return n => (0, i.jsx)(t, {
      ...n,
      onClose: t => {
        (0, a.markContentAsDismissed)(r.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE, e, !0, t), n.onClose()
      },
      guildId: e
    })
  })
}

function u(e, t, r, a) {
  (0, o.trackClanApplyToJoinViewed)({
    guildId: e,
    ...r
  }), (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("80026"), n.e("18482")]).then(n.bind(n, "767593"));
    return n => (0, i.jsx)(e, {
      ...n,
      clan: t,
      prioritizedGameIds: a
    })
  })
}