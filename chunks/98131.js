"use strict";
l.r(t), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("512722"),
  i = l.n(n),
  r = l("442837"),
  u = l("524437"),
  o = l("481060"),
  d = l("605236"),
  c = l("706140"),
  f = l("765585"),
  m = l("556296"),
  S = l("63063"),
  E = l("13140"),
  _ = l("435064"),
  C = l("894694"),
  N = l("39604"),
  g = l("981631"),
  h = l("921944"),
  x = l("689938"),
  I = l("578231"),
  A = l("223318");
let p = e => {
  let {
    clipsEnabled: t,
    isAnimationDone: l,
    guildId: n,
    children: i
  } = e, m = (0, r.useStateFromStores)([_.default], () => _.default.getHardwareClassification()), E = m === C.ClipsHardwareClassification.MEETS_MINIMUM || m === C.ClipsHardwareClassification.UNKNOWN, A = m === C.ClipsHardwareClassification.BELOW_MINIMUM, p = l && (E || A) && !t, [T, R] = (0, c.useGetDismissibleContent)(p ? [u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), v = T === u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
  s.useEffect(() => {
    t && (0, d.markDismissibleContentAsDismissed)(u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
      forceTrack: !0
    })
  }, [t]);
  let L = (e, t) => {
    e.stopPropagation(), e.preventDefault(), null == t || t(), R(h.ContentDismissActionType.UNKNOWN)
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
        artClassName: I.clipsEducationArt,
        position: "right",
        header: x.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
        headerClassName: I.clipsEducationHeader,
        body: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: x.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
          }), A ? (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: I.warningText,
            children: x.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
              url: S.default.getArticleURL(g.HelpdeskArticles.CLIPS)
            })
          }) : null]
        }),
        tryItText: x.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
        onTryFeature: e => {
          (0, N.updateClipsEnabled)({
            clipsEnabled: !0,
            guildId: n,
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
  } = e, s = (0, r.useStateFromStores)([_.default], () => _.default.getSettings().clipsEnabled), n = (0, r.useStateFromStores)([m.default], () => m.default.getKeybindForAction(g.GlobalKeybindActions.SAVE_CLIP));
  i()(null != n, "Clips keybind should be set");
  let u = E.toString(n.shortcut, !0);
  return (0, a.jsx)(o.FormItem, {
    title: x.default.Messages.CLIPS_SETTINGS,
    titleClassName: A.formItemTitle,
    className: A.modalContent,
    children: (0, a.jsxs)("div", {
      className: I.container,
      children: [(0, a.jsx)(p, {
        clipsEnabled: s,
        guildId: l,
        isAnimationDone: t,
        children: (0, a.jsx)(o.FormSwitch, {
          className: I.formSwitch,
          value: s,
          onChange: e => (0, N.updateClipsEnabled)({
            clipsEnabled: e,
            guildId: l,
            trackAnalytics: !0
          }),
          hideBorder: !0,
          children: x.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "interactive-normal",
        className: I.description,
        children: x.default.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
          keybind: u,
          keybindHook: () => (0, a.jsx)("span", {
            className: I.keybindHintKeys,
            children: (0, a.jsx)(o.KeyCombo, {
              className: I.keybindShortcut,
              shortcut: u
            })
          })
        })
      })]
    })
  })
}