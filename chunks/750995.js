"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("524437"),
  l = a("481060"),
  i = a("570140"),
  r = a("317770"),
  o = a("605236"),
  u = a("650774"),
  d = a("430824"),
  c = a("496675"),
  f = a("228392"),
  E = a("981631"),
  h = a("921944");
let _ = e => {
  var t;
  let a = d.default.getGuild(e),
    n = !!(null == a ? void 0 : a.hasFeature(E.GuildFeatures.COMMUNITY)),
    l = c.default.can(E.Permissions.MANAGE_CHANNELS, a),
    i = (0, o.isDismissibleContentDismissed)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL),
    r = null !== (t = u.default.getMemberCount(e)) && void 0 !== t ? t : 0;
  return n && l && !i && r >= 200
};
class C extends r.default {
  _initialize() {
    i.default.subscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  _terminate() {
    i.default.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  handleChannelSelect(e) {
    let {
      guildId: t
    } = e;
    if (null == t || !_(t)) return;
    (0, f.trackForumUpsellModalViewed)(), (0, o.requestMarkDismissibleContentAsShown)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL);
    let i = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.ContentDismissActionType.DISMISS;
      (0, o.markDismissibleContentAsDismissed)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: e
      })
    };
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("18417")]).then(a.bind(a, "740696"));
      return a => (0, n.jsx)(e, {
        ...a,
        onClose: e => {
          i(e), a.onClose()
        },
        guildId: t,
        shouldUpsellCreation: !0
      })
    }, {
      onCloseCallback: () => (0, o.markDismissibleContentAsDismissed)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: h.ContentDismissActionType.DISMISS
      }),
      onCloseRequest: E.NOOP_NULL
    })
  }
}
t.default = new C