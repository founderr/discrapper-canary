t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  l = t(846027),
  r = t(131951),
  o = t(689938),
  c = t(331651);

function E() {
  let {
    videoHook: e,
    experimentalSoundshare: s,
    supportsVideoHook: t,
    supportsExperimentalSoundshare: E
  } = (0, i.cj)([r.Z], () => ({
    videoHook: r.Z.getVideoHook(),
    experimentalSoundshare: r.Z.getExperimentalSoundshare(),
    supportsVideoHook: r.Z.supportsVideoHook(),
    supportsExperimentalSoundshare: r.Z.supportsExperimentalSoundshare()
  }));
  return t || E ? (0, n.jsxs)(a.FormSection, {
    className: c.marginBottom20,
    title: o.Z.Messages.FORM_LABEL_SCREENSHARE,
    children: [t && (0, n.jsx)(a.FormSwitch, {
      value: e,
      onChange: e => l.Z.setVideoHook(e),
      note: o.Z.Messages.FORM_HELP_VIDEO_HOOK,
      children: o.Z.Messages.USER_SETTINGS_VOICE_VIDEO_HOOK_LABEL
    }), E && (0, n.jsx)(a.FormSwitch, {
      value: s,
      onChange: e => l.Z.setExperimentalSoundshare(e),
      children: o.Z.Messages.USER_SETTINGS_VOICE_EXPERIMENTAL_SOUNDSHARE_LABEL
    })]
  }) : null
}