"use strict";
s.r(t);
var a = s("913527"),
  n = s.n(a),
  l = s("524437"),
  i = s("951716"),
  r = s("605236"),
  o = s("972830"),
  c = s("430824"),
  d = s("594174"),
  u = s("374023"),
  _ = s("709054"),
  N = s("645792"),
  E = s("981631"),
  m = s("921944");
t.default = {
  init(e) {
    let {
      hasModalOpen: t,
      openModal: s
    } = e;
    !u.ProcessArgs.isDisallowPopupsSet() && (0, o.addPostConnectionCallback)(() => {
      if ((0, i.default)()) return;
      let e = d.default.getCurrentUser(),
        a = null != e && 7 > n()().diff(n()(_.default.extractTimestamp(e.id)), "days"),
        o = null != Object.values(c.default.getGuilds()).find(e => e.hasFeature(E.GuildFeatures.HUB)),
        u = !(0, r.isDismissibleContentDismissed)(l.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL);
      !(a || t() || o || !u) && (0, N.backToSchoolEnabled)() && (N.default.trackExposure({
        location: "8b792a_1"
      }), s(), (0, r.requestMarkDismissibleContentAsShown)(l.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL))
    })
  },
  hideHubUpsell() {
    (0, r.markDismissibleContentAsDismissed)(l.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL, {
      dismissAction: m.ContentDismissActionType.AUTO
    })
  }
}