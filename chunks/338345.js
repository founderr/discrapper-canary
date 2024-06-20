t.d(s, {
  Z: function() {
    return A
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
  E = t(921801),
  d = t(246946),
  _ = t(358085),
  T = t(726985),
  S = t(981631),
  u = t(689938),
  I = t(701784),
  N = t(331651);

function A() {
  let {
    enabled: e,
    autoToggle: s,
    hideInstantInvites: i,
    hidePersonalInformation: A,
    disableSounds: C,
    disableNotifications: O,
    enableContentProtection: m
  } = (0, l.cj)([d.Z], () => ({
    ...d.Z.getSettings()
  })), h = (e, s) => {
    o.Z.update({
      [e]: s
    })
  };
  return (0, n.jsxs)(r.FormSection, {
    className: I.container,
    tag: r.FormTitleTags.H1,
    title: u.Z.Messages.STREAMER_MODE,
    children: [(0, n.jsx)(E.F, {
      setting: T.s6.STREAMER_MODE_INTEGRATIONS,
      children: (0, n.jsx)(r.FormNotice, {
        className: N.marginBottom40,
        iconClassName: I.noticeIcon,
        type: r.FormNoticeTypes.PRIMARY,
        imageData: {
          src: t(560264),
          width: 184,
          height: 110,
          position: r.FormNoticeImagePositions.RIGHT
        },
        title: u.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE,
        body: u.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_BODY.format({
          streamkitURL: S.EYA.STREAMKIT
        })
      })
    }), (0, n.jsxs)(E.F, {
      setting: T.s6.STREAMER_MODE_ENABLE,
      children: [(0, n.jsx)(r.FormSwitch, {
        value: e,
        onChange: e => h("enabled", e),
        note: u.Z.Messages.ENABLE_STREAMER_MODE_DESCRIPTION.format({
          onClick: () => {
            c.Z.setSection(S.oAB.KEYBINDS)
          }
        }),
        children: u.Z.Messages.ENABLE_STREAMER_MODE_LABEL
      }), (() => {
        if (_.isPlatformEmbedded) return (0, n.jsx)(r.FormSwitch, {
          value: s,
          onChange: e => h("autoToggle", e),
          note: u.Z.Messages.AUTO_TOGGLE_STREAMER_MODE_DESCRIPTION,
          children: u.Z.Messages.AUTO_TOGGLE_STREAMER_MODE_LABEL
        })
      })()]
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(r.FormTitle, {
        className: a()(N.marginTop40, N.marginBottom8, I.sectionLabel),
        children: u.Z.Messages.OPTIONS
      }), (0, n.jsx)(E.F, {
        setting: T.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
        children: (0, n.jsx)(r.FormSwitch, {
          value: A,
          onChange: e => h("hidePersonalInformation", e),
          note: u.Z.Messages.HIDE_PERSONAL_INFORMATION_DESCRIPTION,
          children: u.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL
        })
      }), (0, n.jsx)(E.F, {
        setting: T.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
        children: (0, n.jsx)(r.FormSwitch, {
          value: i,
          onChange: e => h("hideInstantInvites", e),
          note: u.Z.Messages.HIDE_INSTANT_INVITES_DESCRIPTION,
          children: u.Z.Messages.HIDE_INSTANT_INVITES_LABEL
        })
      }), (0, n.jsx)(E.F, {
        setting: T.s6.STREAMER_MODE_DISABLE_SOUNDS,
        children: (0, n.jsx)(r.FormSwitch, {
          value: C,
          onChange: e => h("disableSounds", e),
          note: u.Z.Messages.DISABLE_SOUNDS_DESCRIPTION,
          children: u.Z.Messages.DISABLE_SOUNDS_LABEL
        })
      }), (0, n.jsx)(E.F, {
        setting: T.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
        children: (0, n.jsx)(r.FormSwitch, {
          value: O,
          onChange: e => h("disableNotifications", e),
          note: u.Z.Messages.DISABLE_NOTIFICATIONS_DESCRIPTION,
          children: u.Z.Messages.DISABLE_NOTIFICATIONS_LABEL
        })
      }), (0, n.jsx)(E.F, {
        setting: T.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
        children: (0, n.jsx)(r.FormSwitch, {
          value: m,
          onChange: e => h("enableContentProtection", e),
          note: u.Z.Messages.HIDE_WINDOW_FROM_STREAM_DESCRIPTION,
          children: u.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL
        })
      })]
    })]
  })
}