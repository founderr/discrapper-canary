"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("47120");
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("770471"),
  i = s("787740"),
  r = s("134598"),
  o = s("921801"),
  d = s("430824"),
  u = s("63063"),
  c = s("358085"),
  S = s("709054"),
  E = s("695346"),
  T = s("726985"),
  _ = s("981631"),
  f = s("689938"),
  m = s("471599"),
  g = s("611273");

function I() {
  let e = E.ShowCurrentGame.useSetting(),
    t = E.DefaultGuildsActivityRestricted.useSetting(),
    s = c.isPlatformEmbedded ? f.default.Messages.SHOW_CURRENT_ACTIVITY_DESC_EMBEDDED : f.default.Messages.SHOW_CURRENT_ACTIVITY_DESC,
    l = e => {
      E.DefaultGuildsActivityRestricted.updateSetting(e), ! function(e) {
        let t = () => {
          E.ActivityRestrictedGuilds.updateSetting(e ? S.default.keys(d.default.getGuilds()) : [])
        };
        (0, n.openModal)(e => (0, a.jsx)(n.ConfirmModal, {
          header: f.default.Messages.USER_DM_SETTINGS_TITLE,
          confirmText: f.default.Messages.NO_TEXT,
          cancelText: f.default.Messages.YES_TEXT,
          onCancel: t,
          confirmButtonColor: n.Button.Colors.BRAND,
          ...e,
          children: (0, a.jsx)(n.Text, {
            variant: "text-md/normal",
            children: f.default.Messages.ACTIVITY_RESTRICTION_MODAL_DESC
          })
        }))
      }(e)
    };
  return (0, a.jsx)(o.Subsetting, {
    setting: T.WebSetting.ACTIVITY_PRIVACY_STATUS,
    children: (0, a.jsxs)(n.FormSection, {
      className: g.marginBottom40,
      children: [(0, a.jsx)(n.FormTitle, {
        tag: n.FormTitleTags.H5,
        className: g.marginBottom8,
        children: f.default.Messages.ACTIVITY_STATUS
      }), (0, a.jsx)(n.FormSwitch, {
        value: e,
        onChange: e => E.ShowCurrentGame.updateSetting(e),
        note: s,
        children: f.default.Messages.SHOW_CURRENT_ACTIVITY
      }), (0, a.jsx)(n.FormSwitch, {
        value: !t,
        note: f.default.Messages.ACTIVITY_RESTRICTION_DEFAULT_NOTE.format({
          helpdeskArticle: u.default.getArticleURL(_.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
        }),
        onChange: e => l(!e),
        children: f.default.Messages.ACTIVITY_RESTRICTION_DEFAULT
      })]
    })
  })
}

function N() {
  let e = E.AllowActivityPartyPrivacyFriends.useSetting(),
    t = E.AllowActivityPartyPrivacyVoiceChannel.useSetting();
  return (0, a.jsx)(o.Subsetting, {
    setting: T.WebSetting.ACTIVITY_PRIVACY_RICH_PRESENCE,
    children: (0, a.jsxs)(n.FormSection, {
      className: g.marginBottom40,
      children: [(0, a.jsx)(n.FormTitle, {
        tag: n.FormTitleTags.H5,
        className: g.marginBottom8,
        children: f.default.Messages.ACTIVITY_PARTY_PRIVACY
      }), (0, a.jsx)(n.FormSwitch, {
        value: e,
        note: f.default.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS_HELP,
        onChange: e => E.AllowActivityPartyPrivacyFriends.updateSetting(e),
        children: f.default.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS
      }), (0, a.jsx)(n.FormSwitch, {
        value: t,
        note: f.default.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL_HELP,
        onChange: e => E.AllowActivityPartyPrivacyVoiceChannel.updateSetting(e),
        children: f.default.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL
      })]
    })
  })
}

function h() {
  return (0, a.jsxs)(n.FormSection, {
    className: g.marginBottom40,
    children: [(0, a.jsxs)(n.FormTitle, {
      tag: n.FormTitleTags.H5,
      className: g.marginBottom8,
      children: [f.default.Messages.BROADCASTING_SETTINGS, (0, a.jsx)(i.default, {
        className: m.betaTag
      })]
    }), (0, a.jsx)(n.FormText, {
      type: n.FormText.Types.DESCRIPTION,
      className: g.marginBottom20,
      children: f.default.Messages.BROADCASTING_SETTINGS_DESCRIPTION
    }), (0, a.jsx)(n.FormItem, {
      children: (0, a.jsx)(n.Button, {
        onClick: () => (0, r.openBroadcastingPrivacySettingsModal)(),
        size: n.ButtonSizes.SMALL,
        children: f.default.Messages.BROADCASTING_SETTINGS_CTA
      })
    })]
  })
}

function C() {
  return (0, a.jsx)(n.FormSection, {
    className: g.marginBottom40,
    children: (0, a.jsx)(n.FormNotice, {
      type: n.FormNotice.Types.PRIMARY,
      body: f.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
        termsLink: _.MarketingURLs.TERMS,
        privacyLink: _.MarketingURLs.PRIVACY
      })
    })
  })
}

function A(e) {
  let {
    className: t,
    showHeader: s = !0
  } = e, {
    canBroadcast: i
  } = l.default.useExperiment({
    location: "user_settings_activity_privacy"
  }, {
    autoTrackExposure: !0
  });
  return (0, a.jsxs)(n.FormSection, {
    className: t,
    tag: n.FormTitleTags.H1,
    title: s ? f.default.Messages.ACTIVITY_PRIVACY : null,
    children: [(0, a.jsx)(I, {}), (0, a.jsx)(N, {}), i && (0, a.jsx)(h, {}), (0, a.jsx)(C, {})]
  })
}