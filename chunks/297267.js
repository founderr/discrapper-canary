"use strict";
n.r(t), n.d(t, {
  openCreateGuildModal: function() {
    return f
  },
  updateCreateGuildModal: function() {
    return _
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  l = n("42963"),
  s = n("599110"),
  a = n("169626"),
  o = n("243338"),
  u = n("49111"),
  c = n("149806");

function d(e, t, n, i) {
  return (0, r.jsx)(a.default, {
    onSuccess: t => {
      l.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.SUCCESS), e.onClose(), null == i || i(t)
    },
    onSlideChange: e => (function(e, t) {
      switch (e) {
        case o.CreateGuildSlideTypes.GUILD_TEMPLATES:
          l.default.flowStepOrStart(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.GUILD_TEMPLATES), s.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Create Guild Templates",
            location: t
          });
          break;
        case o.CreateGuildSlideTypes.CUSTOMIZE_GUILD:
          l.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.GUILD_CREATE), s.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Create Guild Step 2",
            location: t
          });
          break;
        case o.CreateGuildSlideTypes.CREATION_INTENT:
          s.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Server Intent Discovery",
            location: t
          });
          break;
        case o.CreateGuildSlideTypes.JOIN_GUILD:
          l.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.JOIN_GUILD), s.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Join Guild",
            location: t
          })
      }
    })(e, n),
    initialSlide: t,
    hasJoinButton: !0,
    ...e
  })
}
let f = e => {
    let {
      initialSlide: t,
      location: n,
      onSuccess: r
    } = e;
    (0, i.openModal)(e => d(e, t, n, r), {
      modalKey: o.CREATE_GUILD_MODAL_KEY
    })
  },
  _ = e => {
    let {
      slide: t,
      location: n
    } = e;
    (0, i.updateModal)(o.CREATE_GUILD_MODAL_KEY, e => d(e, t, n))
  }