"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
}), l("222007");
var n = l("37983"),
  s = l("884691"),
  a = l("627445"),
  r = l.n(a),
  i = l("446674"),
  u = l("151426"),
  o = l("77078"),
  d = l("10641"),
  c = l("235145"),
  f = l("369964"),
  m = l("227602"),
  S = l("701909"),
  h = l("13798"),
  C = l("386045"),
  E = l("30591"),
  p = l("803725"),
  N = l("49111"),
  g = l("994428"),
  _ = l("782340"),
  x = l("173266"),
  I = l("770420");
let v = e => {
  let {
    clipsEnabled: t,
    isAnimationDone: l,
    guildId: a,
    children: r
  } = e, m = (0, i.useStateFromStores)([C.default], () => C.default.getHardwareClassification()), h = m === E.ClipsHardwareClassification.MEETS_MINIMUM || m === E.ClipsHardwareClassification.UNKNOWN, I = m === E.ClipsHardwareClassification.BELOW_MINIMUM, v = l && (h || I) && !t, [A, R] = (0, c.useGetDismissibleContent)(v ? [u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), T = A === u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
  s.useEffect(() => {
    t && (0, d.markDismissibleContentAsDismissed)(u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
      forceTrack: !0
    })
  }, [t]);
  let L = (e, t) => {
    e.stopPropagation(), e.preventDefault(), null == t || t(), R(g.ContentDismissActionType.UNKNOWN)
  };
  return (0, n.jsx)(o.Popout, {
    shouldShow: T,
    position: "right",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(f.default, {
        dismissibleContent: u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
        shouldUseHorizontalButtons: !0,
        inlineArt: !0,
        artClassName: x.clipsEducationArt,
        position: "right",
        header: _.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
        headerClassName: x.clipsEducationHeader,
        body: (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: _.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
          }), I ? (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: x.warningText,
            children: _.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
              url: S.default.getArticleURL(N.HelpdeskArticles.CLIPS)
            })
          }) : null]
        }),
        tryItText: _.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
        onTryFeature: e => {
          (0, p.updateClipsEnabled)({
            clipsEnabled: !0,
            guildId: a,
            trackAnalytics: !0
          }), L(e)
        },
        onClose: e => {
          L(e, t)
        }
      })
    },
    children: () => r
  })
};
var A = function(e) {
  let {
    isAnimationDone: t,
    guildId: l
  } = e, s = (0, i.useStateFromStores)([C.default], () => C.default.getSettings().clipsEnabled), a = (0, i.useStateFromStores)([m.default], () => m.default.getKeybindForAction(N.GlobalKeybindActions.SAVE_CLIP));
  r(null != a, "Clips keybind should be set");
  let u = h.toString(a.shortcut, !0);
  return (0, n.jsx)(o.FormItem, {
    title: _.default.Messages.CLIPS_SETTINGS,
    titleClassName: I.formItemTitle,
    className: I.modalContent,
    children: (0, n.jsxs)("div", {
      className: x.container,
      children: [(0, n.jsx)(v, {
        clipsEnabled: s,
        guildId: l,
        isAnimationDone: t,
        children: (0, n.jsx)(o.FormSwitch, {
          className: x.formSwitch,
          value: s,
          onChange: e => (0, p.updateClipsEnabled)({
            clipsEnabled: e,
            guildId: l,
            trackAnalytics: !0
          }),
          hideBorder: !0,
          children: _.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
        })
      }), (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "interactive-normal",
        className: x.description,
        children: _.default.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
          keybind: u,
          keybindHook: () => (0, n.jsx)("span", {
            className: x.keybindHintKeys,
            children: (0, n.jsx)(o.KeyCombo, {
              className: x.keybindShortcut,
              shortcut: u
            })
          })
        })
      })]
    })
  })
}