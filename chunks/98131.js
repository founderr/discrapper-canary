"use strict";
n(47120);
var l = n(735250),
  s = n(470079),
  a = n(512722),
  i = n.n(a),
  r = n(442837),
  o = n(704215),
  u = n(481060),
  c = n(605236),
  d = n(706140),
  m = n(765585),
  E = n(556296),
  _ = n(63063),
  S = n(13140),
  h = n(435064),
  g = n(894694),
  C = n(39604),
  I = n(981631),
  N = n(921944),
  Z = n(689938),
  x = n(639412),
  f = n(555066);
let A = e => {
  let {
    clipsEnabled: t,
    isAnimationDone: n,
    guildId: a,
    children: i
  } = e, E = (0, r.e7)([h.Z], () => h.Z.getHardwareClassification()), S = E === g.x.MEETS_MINIMUM || E === g.x.UNKNOWN, f = E === g.x.BELOW_MINIMUM, A = n && (S || f) && !t, [T, R] = (0, d.c)(A ? [o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), v = T === o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
  s.useEffect(() => {
    t && (0, c.EW)(o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
      forceTrack: !0
    })
  }, [t]);
  let L = (e, t) => {
    e.stopPropagation(), e.preventDefault(), null == t || t(), R(N.L.UNKNOWN)
  };
  return (0, l.jsx)(u.Popout, {
    shouldShow: v,
    position: "right",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, l.jsx)(m.Z, {
        dismissibleContent: o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
        shouldUseHorizontalButtons: !0,
        inlineArt: !0,
        artClassName: x.clipsEducationArt,
        position: "right",
        header: Z.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
        headerClassName: x.clipsEducationHeader,
        body: (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: Z.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
          }), f ? (0, l.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: x.warningText,
            children: Z.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
              url: _.Z.getArticleURL(I.BhN.CLIPS)
            })
          }) : null]
        }),
        tryItText: Z.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
        onTryFeature: e => {
          (0, C.em)({
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
    children: () => i
  })
};
t.Z = function(e) {
  let {
    isAnimationDone: t,
    guildId: n
  } = e, s = (0, r.e7)([h.Z], () => h.Z.getSettings().clipsEnabled), a = (0, r.e7)([E.Z], () => E.Z.getKeybindForAction(I.kg4.SAVE_CLIP));
  i()(null != a, "Clips keybind should be set");
  let o = S.BB(a.shortcut, !0);
  return (0, l.jsx)(u.FormItem, {
    title: Z.Z.Messages.CLIPS_SETTINGS,
    titleClassName: f.formItemTitle,
    className: f.modalContent,
    children: (0, l.jsxs)("div", {
      className: x.container,
      children: [(0, l.jsx)(A, {
        clipsEnabled: s,
        guildId: n,
        isAnimationDone: t,
        children: (0, l.jsx)(u.FormSwitch, {
          className: x.formSwitch,
          value: s,
          onChange: e => (0, C.em)({
            clipsEnabled: e,
            guildId: n,
            trackAnalytics: !0
          }),
          hideBorder: !0,
          children: Z.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
        })
      }), (0, l.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "interactive-normal",
        className: x.description,
        children: Z.Z.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
          keybind: o,
          keybindHook: () => (0, l.jsx)("span", {
            className: x.keybindHintKeys,
            children: (0, l.jsx)(u.KeyCombo, {
              className: x.keybindShortcut,
              shortcut: o
            })
          })
        })
      })]
    })
  })
}