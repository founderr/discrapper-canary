t.d(s, {
  Z: function() {
    return g
  }
}), t(47120);
var n = t(735250);
t(470079);
var i = t(481060),
  a = t(770471),
  l = t(787740),
  r = t(134598),
  o = t(921801),
  c = t(430824),
  E = t(63063),
  d = t(358085),
  _ = t(709054),
  T = t(695346),
  S = t(726985),
  u = t(981631),
  I = t(689938),
  N = t(707534),
  A = t(331651);

function C() {
  let e = T.G6.useSetting(),
    s = T.Wz.useSetting(),
    t = d.isPlatformEmbedded ? I.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC_EMBEDDED : I.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC,
    a = e => {
      T.Wz.updateSetting(e), ! function(e) {
        let s = () => {
          T.SE.updateSetting(e ? _.default.keys(c.Z.getGuilds()) : [])
        };
        (0, i.openModal)(e => (0, n.jsx)(i.ConfirmModal, {
          header: I.Z.Messages.USER_DM_SETTINGS_TITLE,
          confirmText: I.Z.Messages.NO_TEXT,
          cancelText: I.Z.Messages.YES_TEXT,
          onCancel: s,
          confirmButtonColor: i.Button.Colors.BRAND,
          ...e,
          children: (0, n.jsx)(i.Text, {
            variant: "text-md/normal",
            children: I.Z.Messages.ACTIVITY_RESTRICTION_MODAL_DESC
          })
        }))
      }(e)
    };
  return (0, n.jsx)(o.F, {
    setting: S.s6.ACTIVITY_PRIVACY_STATUS,
    children: (0, n.jsxs)(i.FormSection, {
      className: A.marginBottom40,
      children: [(0, n.jsx)(i.FormTitle, {
        tag: i.FormTitleTags.H5,
        className: A.marginBottom8,
        children: I.Z.Messages.ACTIVITY_STATUS
      }), (0, n.jsx)(i.FormSwitch, {
        value: e,
        onChange: e => T.G6.updateSetting(e),
        note: t,
        children: I.Z.Messages.SHOW_CURRENT_ACTIVITY
      }), (0, n.jsx)(i.FormSwitch, {
        value: !s,
        note: I.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT_NOTE.format({
          helpdeskArticle: E.Z.getArticleURL(u.BhN.ACTIVITY_STATUS_SETTINGS)
        }),
        onChange: e => a(!e),
        children: I.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT
      })]
    })
  })
}

function O() {
  let e = T.cP.useSetting(),
    s = T.Ou.useSetting();
  return (0, n.jsx)(o.F, {
    setting: S.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
    children: (0, n.jsxs)(i.FormSection, {
      className: A.marginBottom40,
      children: [(0, n.jsx)(i.FormTitle, {
        tag: i.FormTitleTags.H5,
        className: A.marginBottom8,
        children: I.Z.Messages.ACTIVITY_PARTY_PRIVACY
      }), (0, n.jsx)(i.FormSwitch, {
        value: e,
        note: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS_HELP,
        onChange: e => T.cP.updateSetting(e),
        children: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS
      }), (0, n.jsx)(i.FormSwitch, {
        value: s,
        note: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL_HELP,
        onChange: e => T.Ou.updateSetting(e),
        children: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL
      })]
    })
  })
}

function m() {
  return (0, n.jsxs)(i.FormSection, {
    className: A.marginBottom40,
    children: [(0, n.jsxs)(i.FormTitle, {
      tag: i.FormTitleTags.H5,
      className: A.marginBottom8,
      children: [I.Z.Messages.BROADCASTING_SETTINGS, (0, n.jsx)(l.Z, {
        className: N.betaTag
      })]
    }), (0, n.jsx)(i.FormText, {
      type: i.FormText.Types.DESCRIPTION,
      className: A.marginBottom20,
      children: I.Z.Messages.BROADCASTING_SETTINGS_DESCRIPTION
    }), (0, n.jsx)(i.FormItem, {
      children: (0, n.jsx)(i.Button, {
        onClick: () => (0, r.X)(),
        size: i.ButtonSizes.SMALL,
        children: I.Z.Messages.BROADCASTING_SETTINGS_CTA
      })
    })]
  })
}

function h() {
  return (0, n.jsx)(i.FormSection, {
    className: A.marginBottom40,
    children: (0, n.jsx)(i.FormNotice, {
      type: i.FormNotice.Types.PRIMARY,
      body: I.Z.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
        termsLink: u.EYA.TERMS,
        privacyLink: u.EYA.PRIVACY
      })
    })
  })
}

function g(e) {
  let {
    className: s,
    showHeader: t = !0
  } = e, {
    canBroadcast: l
  } = a.Z.useExperiment({
    location: "user_settings_activity_privacy"
  }, {
    autoTrackExposure: !0
  });
  return (0, n.jsxs)(i.FormSection, {
    className: s,
    tag: i.FormTitleTags.H1,
    title: t ? I.Z.Messages.ACTIVITY_PRIVACY : null,
    children: [(0, n.jsx)(C, {}), (0, n.jsx)(O, {}), l && (0, n.jsx)(m, {}), (0, n.jsx)(h, {})]
  })
}