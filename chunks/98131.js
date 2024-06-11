"use strict";
l.r(t), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("512722"),
  i = l.n(s),
  r = l("442837"),
  u = l("704215"),
  o = l("481060"),
  d = l("605236"),
  c = l("706140"),
  f = l("765585"),
  m = l("556296"),
  S = l("63063"),
  E = l("13140"),
  _ = l("435064"),
  h = l("894694"),
  C = l("39604"),
  g = l("981631"),
  N = l("921944"),
  I = l("689938"),
  p = l("639412"),
  x = l("555066");
let A = e => {
  let {
    clipsEnabled: t,
    isAnimationDone: l,
    guildId: s,
    children: i
  } = e, m = (0, r.useStateFromStores)([_.default], () => _.default.getHardwareClassification()), E = m === h.ClipsHardwareClassification.MEETS_MINIMUM || m === h.ClipsHardwareClassification.UNKNOWN, x = m === h.ClipsHardwareClassification.BELOW_MINIMUM, A = l && (E || x) && !t, [T, R] = (0, c.useGetDismissibleContent)(A ? [u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), v = T === u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
  n.useEffect(() => {
    t && (0, d.markDismissibleContentAsDismissed)(u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
      forceTrack: !0
    })
  }, [t]);
  let L = (e, t) => {
    e.stopPropagation(), e.preventDefault(), null == t || t(), R(N.ContentDismissActionType.UNKNOWN)
  };
  return (0, a.jsx)(o.Popout, {
    shouldShow: v,
    position: "right",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(f.default, {
        dismissibleContent: u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
        shouldUseHorizontalButtons: !0,
        inlineArt: !0,
        artClassName: p.clipsEducationArt,
        position: "right",
        header: I.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
        headerClassName: p.clipsEducationHeader,
        body: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: I.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
          }), x ? (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: p.warningText,
            children: I.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
              url: S.default.getArticleURL(g.HelpdeskArticles.CLIPS)
            })
          }) : null]
        }),
        tryItText: I.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
        onTryFeature: e => {
          (0, C.updateClipsEnabled)({
            clipsEnabled: !0,
            guildId: s,
            trackAnalytics: !0
          }), L(e)
        },
        onClose: e => {
          L(e, t)
        }
      })
    },
    children: () => i
  })
};
t.default = function(e) {
  let {
    isAnimationDone: t,
    guildId: l
  } = e, n = (0, r.useStateFromStores)([_.default], () => _.default.getSettings().clipsEnabled), s = (0, r.useStateFromStores)([m.default], () => m.default.getKeybindForAction(g.GlobalKeybindActions.SAVE_CLIP));
  i()(null != s, "Clips keybind should be set");
  let u = E.toString(s.shortcut, !0);
  return (0, a.jsx)(o.FormItem, {
    title: I.default.Messages.CLIPS_SETTINGS,
    titleClassName: x.formItemTitle,
    className: x.modalContent,
    children: (0, a.jsxs)("div", {
      className: p.container,
      children: [(0, a.jsx)(A, {
        clipsEnabled: n,
        guildId: l,
        isAnimationDone: t,
        children: (0, a.jsx)(o.FormSwitch, {
          className: p.formSwitch,
          value: n,
          onChange: e => (0, C.updateClipsEnabled)({
            clipsEnabled: e,
            guildId: l,
            trackAnalytics: !0
          }),
          hideBorder: !0,
          children: I.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "interactive-normal",
        className: p.description,
        children: I.default.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
          keybind: u,
          keybindHook: () => (0, a.jsx)("span", {
            className: p.keybindHintKeys,
            children: (0, a.jsx)(o.KeyCombo, {
              className: p.keybindShortcut,
              shortcut: u
            })
          })
        })
      })]
    })
  })
}