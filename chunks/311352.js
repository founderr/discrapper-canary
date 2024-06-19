var l = n(735250);
n(470079);
var i = n(399606),
  s = n(704215),
  r = n(481060),
  a = n(239091),
  o = n(765585),
  u = n(819640),
  c = n(556296),
  d = n(976401),
  h = n(13140),
  g = n(924557),
  p = n(435064),
  m = n(39604),
  C = n(981631),
  E = n(689938),
  f = n(387764);

function _(e) {
  (0, a.jW)(e, async () => {
    let {
      default: e
    } = await n.e("21960").then(n.bind(n, 999466));
    return t => (0, l.jsx)(e, {
      ...t
    })
  })
}

function I() {
  (0, m.C1)()
}
let N = e => {
  let {
    keybindString: t,
    children: n
  } = e, i = (e, t) => {
    e.stopPropagation(), e.preventDefault(), null == t || t()
  };
  return (0, l.jsx)(r.Popout, {
    shouldShow: !1,
    position: "top",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, l.jsx)(o.Z, {
        dismissibleContent: s.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
        shouldUseHorizontalButtons: !0,
        inlineArt: !0,
        artClassName: f.clipsEducationArt,
        position: "top",
        header: (0, l.jsx)("div", {
          className: f.header,
          children: E.Z.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_TITLE.format({
            keybind: t,
            keybindHook: () => (0, l.jsx)("span", {
              className: f.keybindHintKeys,
              children: (0, l.jsx)(r.KeyCombo, {
                className: f.keybindShortcut,
                shortcut: t
              })
            })
          })
        }),
        headerClassName: f.clipsEducationHeader,
        body: (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: f.bodyText,
            children: E.Z.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_BODY.format({
              keybindHook: () => (0, l.jsx)("div", {
                className: f.keyCombo,
                children: t
              }),
              keybind: t
            })
          })
        }),
        onClose: e => {
          i(e, n)
        }
      })
    },
    children: () => n
  })
};
t.Z = () => {
  let e = (0, i.e7)([u.Z], () => u.Z.hasLayers()),
    t = (0, g.Go)(),
    {
      clipsEnabled: n,
      isAtMaxSavingClipsOperations: s
    } = (0, i.cj)([p.Z], () => ({
      clipsEnabled: p.Z.getSettings().clipsEnabled,
      isAtMaxSavingClipsOperations: p.Z.getIsAtMaxSaveClipOperations()
    })),
    a = (0, i.e7)([c.Z], () => c.Z.getKeybindForAction(C.kg4.SAVE_CLIP));
  if (!(t && n) || null == a || e) return null;
  let o = h.BB(a.shortcut, !0);
  return (0, l.jsx)(N, {
    keybindString: o,
    children: (0, l.jsx)(d.Z, {
      disabled: s,
      tooltipText: null != a ? E.Z.Messages.CLIPS_SAVE_CLIP_TOOLTIP.format({
        hotkey: h.BB(null == a ? void 0 : a.shortcut, !0)
      }) : E.Z.Messages.CLIPS_EDIT_SAVE_CLIP,
      onClick: I,
      onContextMenu: _,
      icon: r.ClipsIcon
    })
  })
}