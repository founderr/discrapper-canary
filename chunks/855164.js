"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("37983");
n("884691");
var s = n("151426"),
  r = n("551042"),
  a = n("135230"),
  o = n("926994"),
  l = n("10641"),
  u = n("42887"),
  d = n("599110"),
  c = n("129978"),
  f = n("171644"),
  _ = n("49111"),
  h = n("782340"),
  g = n("274520");
let m = "game_console_alert_modal",
  E = "game_console_ptt_alert_modal";
var p = {
  maybeShowPTTAlert(e) {
    if (u.default.getMode() !== _.InputModes.PUSH_TO_TALK || (0, l.isDismissibleContentDismissed)(s.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
    let t = {
        [_.PlatformTypes.XBOX]: h.default.Messages.PTT_NOT_SUPPORTED_XBOX,
        [_.PlatformTypes.PLAYSTATION]: h.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION,
        [_.PlatformTypes.PLAYSTATION_STAGING]: h.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION
      },
      n = t[e];
    return null == n ? Promise.resolve() : new Promise(e => {
      let t = () => {
          (0, l.markDismissibleContentAsDismissed)(s.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT), e()
        },
        o = e => (0, i.jsx)(a.default, {
          ...e,
          title: n,
          body: h.default.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
          onConfirm: t,
          titleClassName: g.title
        });
      (0, r.hasModalOpen)(E) ? (0, r.updateModal)(E, o) : (0, r.openModal)(o, {
        modalKey: E
      })
    })
  },
  showSelfDismissableAlert(e) {
    let {
      title: t,
      body: n,
      errorCodeMessage: s,
      reconnectPlatformType: l
    } = e, u = (0, i.jsx)(c.SelfDismissibleAlertBody, {
      body: n,
      errorCodeMessage: s,
      dismissCallback: () => (0, r.closeModal)(m)
    });

    function h() {
      null != l && ((0, o.default)(l), d.default.track(_.AnalyticEvents.ACCOUNT_LINK_STEP, {
        previous_step: f.GAME_CONSOLE_ALERT_MODAL_LOCATION,
        current_step: "desktop oauth",
        platform_type: l
      }))
    }
    let g = e => (0, i.jsx)(a.default, {
      ...e,
      title: t,
      body: u,
      onConfirm: h
    });
    (0, r.hasModalOpen)(m) ? (0, r.updateModal)(m, g) : (0, r.openModal)(g, {
      modalKey: m
    })
  }
}