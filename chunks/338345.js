"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("442837"),
  r = s("481060"),
  o = s("223245"),
  d = s("230711"),
  u = s("579806"),
  c = s("921801"),
  S = s("246946"),
  E = s("358085"),
  T = s("726985"),
  _ = s("981631"),
  f = s("689938"),
  I = s("247763"),
  m = s("611273");

function N() {
  var e, t, n;
  let {
    enabled: N,
    autoToggle: g,
    hideInstantInvites: h,
    hidePersonalInformation: C,
    disableSounds: A,
    disableNotifications: O,
    enableContentProtection: p
  } = (0, i.useStateFromStoresObject)([S.default], () => ({
    ...S.default.getSettings()
  })), R = (e, t) => {
    o.default.update({
      [e]: t
    })
  }, x = null !== (n = null === u.default || void 0 === u.default ? void 0 : null === (t = u.default.window) || void 0 === t ? void 0 : null === (e = t.supportsContentProtection) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n && n;
  return (0, a.jsxs)(r.FormSection, {
    className: I.container,
    tag: r.FormTitleTags.H1,
    title: f.default.Messages.STREAMER_MODE,
    children: [(0, a.jsx)(r.FormNotice, {
      className: m.marginBottom40,
      iconClassName: I.noticeIcon,
      type: r.FormNoticeTypes.PRIMARY,
      imageData: {
        src: s("560264"),
        width: 184,
        height: 110,
        position: r.FormNoticeImagePositions.RIGHT
      },
      title: f.default.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE,
      body: f.default.Messages.USER_SETTINGS_STREAMER_NOTICE_BODY.format({
        streamkitURL: _.MarketingURLs.STREAMKIT
      })
    }), (0, a.jsx)(r.FormSwitch, {
      value: N,
      onChange: e => R("enabled", e),
      note: f.default.Messages.ENABLE_STREAMER_MODE_DESCRIPTION.format({
        onClick: () => {
          d.default.setSection(_.UserSettingsSections.KEYBINDS)
        }
      }),
      children: f.default.Messages.ENABLE_STREAMER_MODE_LABEL
    }), (() => {
      if (E.isPlatformEmbedded) return (0, a.jsx)(r.FormSwitch, {
        value: g,
        onChange: e => R("autoToggle", e),
        note: f.default.Messages.AUTO_TOGGLE_STREAMER_MODE_DESCRIPTION,
        children: f.default.Messages.AUTO_TOGGLE_STREAMER_MODE_LABEL
      })
    })(), (0, a.jsx)(r.FormTitle, {
      className: l()(m.marginTop40, m.marginBottom8),
      children: f.default.Messages.OPTIONS
    }), (0, a.jsx)(c.Subsetting, {
      setting: T.WebSetting.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
      children: (0, a.jsx)(r.FormSwitch, {
        value: C,
        onChange: e => R("hidePersonalInformation", e),
        note: f.default.Messages.HIDE_PERSONAL_INFORMATION_DESCRIPTION,
        children: f.default.Messages.HIDE_PERSONAL_INFORMATION_LABEL
      })
    }), (0, a.jsx)(c.Subsetting, {
      setting: T.WebSetting.STREAMER_MODE_HIDE_INVITE_LINKS,
      children: (0, a.jsx)(r.FormSwitch, {
        value: h,
        onChange: e => R("hideInstantInvites", e),
        note: f.default.Messages.HIDE_INSTANT_INVITES_DESCRIPTION,
        children: f.default.Messages.HIDE_INSTANT_INVITES_LABEL
      })
    }), (0, a.jsx)(c.Subsetting, {
      setting: T.WebSetting.STREAMER_MODE_DISABLE_SOUNDS,
      children: (0, a.jsx)(r.FormSwitch, {
        value: A,
        onChange: e => R("disableSounds", e),
        note: f.default.Messages.DISABLE_SOUNDS_DESCRIPTION,
        children: f.default.Messages.DISABLE_SOUNDS_LABEL
      })
    }), (0, a.jsx)(c.Subsetting, {
      setting: T.WebSetting.STREAMER_MODE_DISABLE_NOTIFICATIONS,
      children: (0, a.jsx)(r.FormSwitch, {
        value: O,
        onChange: e => R("disableNotifications", e),
        note: f.default.Messages.DISABLE_NOTIFICATIONS_DESCRIPTION,
        children: f.default.Messages.DISABLE_NOTIFICATIONS_LABEL
      })
    }), x && (0, a.jsx)(c.Subsetting, {
      setting: T.WebSetting.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
      children: (0, a.jsx)(r.FormSwitch, {
        value: p,
        onChange: e => R("enableContentProtection", e),
        note: f.default.Messages.HIDE_WINDOW_FROM_STREAM_DESCRIPTION,
        children: f.default.Messages.HIDE_WINDOW_FROM_STREAM_LABEL
      })
    })]
  })
}