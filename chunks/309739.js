t.d(s, {
  Z: function() {
    return h
  }
}), t(47120);
var n = t(735250);
t(470079);
var a = t(481060),
  i = t(770471),
  r = t(787740),
  o = t(134598),
  l = t(921801),
  c = t(430824),
  d = t(63063),
  _ = t(358085),
  E = t(709054),
  u = t(695346),
  T = t(726985),
  S = t(981631),
  I = t(689938),
  N = t(707534),
  C = t(331651);

function A() {
  let e = u.G6.useSetting(),
    s = u.Wz.useSetting(),
    t = _.isPlatformEmbedded ? I.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC_EMBEDDED : I.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC,
    i = e => {
      u.Wz.updateSetting(e), ! function(e) {
        let s = () => {
          u.SE.updateSetting(e ? E.default.keys(c.Z.getGuilds()) : [])
        };
        (0, a.openModal)(e => (0, n.jsx)(a.ConfirmModal, {
          header: I.Z.Messages.USER_DM_SETTINGS_TITLE,
          confirmText: I.Z.Messages.NO_TEXT,
          cancelText: I.Z.Messages.YES_TEXT,
          onCancel: s,
          confirmButtonColor: a.Button.Colors.BRAND,
          ...e,
          children: (0, n.jsx)(a.Text, {
            variant: "text-md/normal",
            children: I.Z.Messages.ACTIVITY_RESTRICTION_MODAL_DESC
          })
        }))
      }(e)
    };
  return (0, n.jsx)(l.F, {
    setting: T.s6.ACTIVITY_PRIVACY_STATUS,
    children: (0, n.jsxs)(a.FormSection, {
      className: C.marginBottom40,
      children: [(0, n.jsx)(a.FormTitle, {
        tag: a.FormTitleTags.H5,
        className: C.marginBottom8,
        children: I.Z.Messages.ACTIVITY_STATUS
      }), (0, n.jsx)(a.FormSwitch, {
        value: e,
        onChange: e => u.G6.updateSetting(e),
        note: t,
        children: I.Z.Messages.SHOW_CURRENT_ACTIVITY
      }), (0, n.jsx)(a.FormSwitch, {
        value: !s,
        note: I.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT_NOTE.format({
          helpdeskArticle: d.Z.getArticleURL(S.BhN.ACTIVITY_STATUS_SETTINGS)
        }),
        onChange: e => i(!e),
        children: I.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT
      })]
    })
  })
}

function m() {
  let e = u.cP.useSetting(),
    s = u.Ou.useSetting();
  return (0, n.jsx)(l.F, {
    setting: T.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
    children: (0, n.jsxs)(a.FormSection, {
      className: C.marginBottom40,
      children: [(0, n.jsx)(a.FormTitle, {
        tag: a.FormTitleTags.H5,
        className: C.marginBottom8,
        children: I.Z.Messages.ACTIVITY_PARTY_PRIVACY
      }), (0, n.jsx)(a.FormSwitch, {
        value: e,
        note: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS_HELP,
        onChange: e => u.cP.updateSetting(e),
        children: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS
      }), (0, n.jsx)(a.FormSwitch, {
        value: s,
        note: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL_HELP,
        onChange: e => u.Ou.updateSetting(e),
        children: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL
      })]
    })
  })
}

function O() {
  return (0, n.jsxs)(a.FormSection, {
    className: C.marginBottom40,
    children: [(0, n.jsxs)(a.FormTitle, {
      tag: a.FormTitleTags.H5,
      className: C.marginBottom8,
      children: [I.Z.Messages.BROADCASTING_SETTINGS, (0, n.jsx)(r.Z, {
        className: N.betaTag
      })]
    }), (0, n.jsx)(a.FormText, {
      type: a.FormText.Types.DESCRIPTION,
      className: C.marginBottom20,
      children: I.Z.Messages.BROADCASTING_SETTINGS_DESCRIPTION
    }), (0, n.jsx)(a.FormItem, {
      children: (0, n.jsx)(a.Button, {
        onClick: () => (0, o.X)(),
        size: a.ButtonSizes.SMALL,
        children: I.Z.Messages.BROADCASTING_SETTINGS_CTA
      })
    })]
  })
}

function g() {
  return (0, n.jsx)(a.FormSection, {
    className: C.marginBottom40,
    children: (0, n.jsx)(a.FormNotice, {
      type: a.FormNotice.Types.PRIMARY,
      body: I.Z.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
        termsLink: S.EYA.TERMS,
        privacyLink: S.EYA.PRIVACY
      })
    })
  })
}

function h(e) {
  let {
    className: s,
    showHeader: t = !0
  } = e, {
    canBroadcast: r
  } = i.Z.useExperiment({
    location: "user_settings_activity_privacy"
  }, {
    autoTrackExposure: !0
  });
  return (0, n.jsxs)(a.FormSection, {
    className: s,
    tag: a.FormTitleTags.H1,
    title: t ? I.Z.Messages.ACTIVITY_PRIVACY : null,
    children: [(0, n.jsx)(A, {}), (0, n.jsx)(m, {}), r && (0, n.jsx)(O, {}), (0, n.jsx)(g, {})]
  })
}