"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var i = n("37983");
n("884691");
var a = n("151426"),
  l = n("77078"),
  s = n("689988"),
  r = n("10641"),
  o = n("18494"),
  u = n("162771"),
  d = n("599110"),
  c = n("179803"),
  f = n("49111"),
  E = n("994428");
let h = "GUILD_ONBOARDING_UPSELL_MODAL",
  _ = (e, t) => {
    if (__OVERLAY__ || null == e || null == t) return;
    let s = (0, c.shouldShowGuildOnboardingUpsell)(e, a.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2);
    if (!s) return;
    (0, r.requestMarkDismissibleContentAsShown)(a.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2);
    let o = function() {
      let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.ContentDismissActionType.DISMISS;
      d.default.track(f.AnalyticEvents.UPSELL_CLICKED, {
        type: a.DismissibleContent[a.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2],
        action: "dismiss"
      }), (0, c.dismissedGuildOnboardingUpsell)(e, a.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2), (0, r.markDismissibleContentAsDismissed)(a.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, {
        dismissAction: t
      })
    };
    (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("790255").then(n.bind(n, "790255"));
      return n => (0, i.jsx)(t, {
        ...n,
        guildId: e,
        onClose: e => {
          o(e), n.onClose()
        }
      })
    }, {
      modalKey: h,
      onCloseRequest: () => {
        o(), (0, l.closeModal)(h)
      }
    })
  };
class C extends s.default {
  handleChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    _(t, n)
  }
  handlePostConnectionOpen() {
    let e = o.default.getCurrentlySelectedChannelId(),
      t = u.default.getGuildId();
    _(t, e)
  }
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_SELECT: this.handleChannelSelect,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    }
  }
}
var S = new C