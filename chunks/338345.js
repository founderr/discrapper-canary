t.d(s, {
  Z: function() {
    return C
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(442837),
  r = t(481060),
  o = t(223245),
  c = t(230711),
  E = t(579806),
  d = t(921801),
  _ = t(246946),
  T = t(358085),
  S = t(726985),
  u = t(981631),
  I = t(689938),
  N = t(701784),
  A = t(331651);

function C() {
  var e, s, i;
  let {
    enabled: C,
    autoToggle: O,
    hideInstantInvites: m,
    hidePersonalInformation: h,
    disableSounds: g,
    disableNotifications: R,
    enableContentProtection: M
  } = (0, l.cj)([_.Z], () => ({
    ..._.Z.getSettings()
  })), x = (e, s) => {
    o.Z.update({
      [e]: s
    })
  }, D = null !== (i = null === E.Z || void 0 === E.Z ? void 0 : null === (s = E.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== i && i;
  return (0, n.jsxs)(r.FormSection, {
    className: N.container,
    tag: r.FormTitleTags.H1,
    title: I.Z.Messages.STREAMER_MODE,
    children: [(0, n.jsx)(d.F, {
      setting: S.s6.STREAMER_MODE_INTEGRATIONS,
      children: (0, n.jsx)(r.FormNotice, {
        className: A.marginBottom40,
        iconClassName: N.noticeIcon,
        type: r.FormNoticeTypes.PRIMARY,
        imageData: {
          src: t(560264),
          width: 184,
          height: 110,
          position: r.FormNoticeImagePositions.RIGHT
        },
        title: I.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE,
        body: I.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_BODY.format({
          streamkitURL: u.EYA.STREAMKIT
        })
      })
    }), (0, n.jsxs)(d.F, {
      setting: S.s6.STREAMER_MODE_ENABLE,
      children: [(0, n.jsx)(r.FormSwitch, {
        value: C,
        onChange: e => x("enabled", e),
        note: I.Z.Messages.ENABLE_STREAMER_MODE_DESCRIPTION.format({
          onClick: () => {
            c.Z.setSection(u.oAB.KEYBINDS)
          }
        }),
        children: I.Z.Messages.ENABLE_STREAMER_MODE_LABEL
      }), (() => {
        if (T.isPlatformEmbedded) return (0, n.jsx)(r.FormSwitch, {
          value: O,
          onChange: e => x("autoToggle", e),
          note: I.Z.Messages.AUTO_TOGGLE_STREAMER_MODE_DESCRIPTION,
          children: I.Z.Messages.AUTO_TOGGLE_STREAMER_MODE_LABEL
        })
      })()]
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(r.FormTitle, {
        className: a()(A.marginTop40, A.marginBottom8, N.sectionLabel),
        children: I.Z.Messages.OPTIONS
      }), (0, n.jsx)(d.F, {
        setting: S.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
        children: (0, n.jsx)(r.FormSwitch, {
          value: h,
          onChange: e => x("hidePersonalInformation", e),
          note: I.Z.Messages.HIDE_PERSONAL_INFORMATION_DESCRIPTION,
          children: I.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL
        })
      }), (0, n.jsx)(d.F, {
        setting: S.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
        children: (0, n.jsx)(r.FormSwitch, {
          value: m,
          onChange: e => x("hideInstantInvites", e),
          note: I.Z.Messages.HIDE_INSTANT_INVITES_DESCRIPTION,
          children: I.Z.Messages.HIDE_INSTANT_INVITES_LABEL
        })
      }), (0, n.jsx)(d.F, {
        setting: S.s6.STREAMER_MODE_DISABLE_SOUNDS,
        children: (0, n.jsx)(r.FormSwitch, {
          value: g,
          onChange: e => x("disableSounds", e),
          note: I.Z.Messages.DISABLE_SOUNDS_DESCRIPTION,
          children: I.Z.Messages.DISABLE_SOUNDS_LABEL
        })
      }), (0, n.jsx)(d.F, {
        setting: S.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
        children: (0, n.jsx)(r.FormSwitch, {
          value: R,
          onChange: e => x("disableNotifications", e),
          note: I.Z.Messages.DISABLE_NOTIFICATIONS_DESCRIPTION,
          children: I.Z.Messages.DISABLE_NOTIFICATIONS_LABEL
        })
      }), D && (0, n.jsx)(d.F, {
        setting: S.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
        children: (0, n.jsx)(r.FormSwitch, {
          value: M,
          onChange: e => x("enableContentProtection", e),
          note: I.Z.Messages.HIDE_WINDOW_FROM_STREAM_DESCRIPTION,
          children: I.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL
        })
      })]
    })]
  })
}