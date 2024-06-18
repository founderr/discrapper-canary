"use strict";
t.d(s, {
  X: function() {
    return D
  }
}), t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(544891),
  c = t(433517),
  d = t(481060),
  u = t(852860),
  E = t(933557),
  _ = t(655006),
  I = t(769654),
  T = t(984933),
  N = t(650774),
  m = t(430824),
  S = t(496675),
  h = t(699516),
  g = t(594174),
  C = t(434404),
  x = t(999382),
  R = t(54842),
  L = t(981631),
  O = t(731455),
  A = t(689938),
  p = t(592218),
  M = t(922905);
let f = "dismissedCommunityFeaturesUpsell",
  D = () => {
    let e;
    let {
      guild: s,
      submitting: t,
      errors: i
    } = (0, r.cj)([x.Z], () => ({
      submitting: x.Z.isSubmitting(),
      guild: x.Z.getGuild(),
      errors: x.Z.getErrors()
    })), l = Object.keys(i), a = l.length > 0 ? l[0] : null;
    if ("rules_channel_id" === a) e = A.Z.Messages.GUILD_RULES_INVALID_CHANNEL;
    else e = null != a ? i[a] : void 0;
    return (0, n.jsx)(u.Z, {
      submitting: t,
      onReset: () => {
        if (null != s) C.Z.init(s.id)
      },
      onSave: () => {
        if (null != s) C.Z.saveGuild(s.id, {
          rulesChannelId: s.rulesChannelId,
          preferredLocale: s.preferredLocale,
          safetyAlertsChannelId: s.safetyAlertsChannelId,
          publicUpdatesChannelId: s.publicUpdatesChannelId,
          description: s.description,
          features: s.features
        })
      },
      errorMessage: e
    })
  },
  v = e => {
    let {
      discoveryEnabled: s,
      onboardingEnabled: t,
      guild: l
    } = e, [a, u] = i.useState(!0 === c.K.get(f)), E = (0, r.e7)([N.Z], () => {
      var e;
      return null !== (e = N.Z.getMemberCount(l.id)) && void 0 !== e ? e : 0
    }), [_, T] = i.useState(!1);
    i.useEffect(() => {
      o.tn.get(L.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id)).then(e => {
        T(e.body.eligible_for_admin_server)
      }).catch(() => T(!1))
    }, []);
    let S = (0, r.e7)([m.Z], () => m.Z.getGuild("942897714956472401")),
      h = l.isCommunity() && E >= 1e3 && _ && !(null != S);
    if (s && t && !h) return null;
    let g = async () => {
      try {
        let e = await o.tn.post({
          url: L.ANM.JOIN_ADMIN_SERVER(l.id),
          oldFormErrors: !0
        });
        C.Z.close(), (0, I.X)(e.body.id)
      } catch {}
    };
    return a && !h ? null : (0, n.jsxs)("div", {
      className: p.upsellContainer,
      children: [(0, n.jsxs)("div", {
        className: p.upsellContent,
        children: [(0, n.jsx)("img", {
          src: M,
          alt: "",
          width: 60,
          className: p.upsellImage
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            className: p.upsellHeader,
            children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_HEADER
          }), (0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BODY
          })]
        })]
      }), (0, n.jsx)(d.Button, {
        "aria-label": A.Z.Messages.CLOSE,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        className: p.upsellClose,
        onClick: () => {
          c.K.set(f, !0), u(!0)
        },
        children: (0, n.jsx)(d.CloseSmallIcon, {
          size: "md",
          color: "currentColor"
        })
      }), (0, n.jsxs)("div", {
        className: p.upsellFooter,
        children: [h && (0, n.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          onClick: g,
          className: p.upsellButton,
          children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ADMIN_SERVER
        }), t ? null : (0, n.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          onClick: () => {
            C.Z.setSection(L.pNK.ONBOARDING)
          },
          className: p.upsellButton,
          children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ONBOARDING
        }), s ? null : (0, n.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          onClick: () => {
            C.Z.setSection(L.pNK.DISCOVERY)
          },
          className: p.upsellButton,
          color: d.Button.Colors.PRIMARY,
          children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_DISCOVERY
        }), (0, n.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          onClick: () => {
            C.Z.setSection(L.pNK.ANALYTICS)
          },
          className: p.upsellButton,
          color: d.Button.Colors.PRIMARY,
          children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ANALYTICS
        })]
      })]
    })
  },
  j = () => {
    var e;
    let s = (0, r.e7)([x.Z], () => x.Z.getGuild()),
      {
        canManageGuild: t,
        isGuildAdmin: l
      } = (0, r.cj)([S.Z], () => ({
        canManageGuild: S.Z.can(L.Plq.MANAGE_GUILD, s),
        isGuildAdmin: S.Z.can(L.Plq.ADMINISTRATOR, s)
      })),
      o = (0, r.e7)([T.ZP], () => null != s ? T.ZP.getChannels(s.id) : null),
      u = i.useMemo(O.jb, []),
      I = !0 !== c.K.get(f),
      {
        enableRaidAlerts: N
      } = _.l.useExperiment({
        guildId: null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : L.lds,
        location: "c1af51_2"
      }, {
        autoTrackExposure: t
      });
    if (null == s) return null;
    let m = [];
    null != o && o[T.sH].forEach(e => {
      let {
        channel: s
      } = e;
      s.type === L.d4z.GUILD_TEXT && m.push({
        value: s.id,
        label: (0, E.F6)(s, g.default, h.Z, !0)
      })
    });
    let R = () => {
        C.Z.init(s.id), C.Z.open(s.id, L.pNK.MEMBER_VERIFICATION)
      },
      M = () => {
        if (null == s) return;
        let e = new Set(s.features);
        e.delete(L.oNc.COMMUNITY), e.delete(L.oNc.DISCOVERABLE), !s.hasFeature(L.oNc.CLAN) && e.delete(L.oNc.MEMBER_VERIFICATION_GATE_ENABLED), e.delete(L.oNc.PREVIEW_ENABLED), C.Z.updateGuild({
          features: e,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      D = e => {
        C.Z.updateGuild({
          rulesChannelId: e
        })
      },
      j = e => {
        C.Z.updateGuild({
          safetyAlertsChannelId: e
        })
      },
      Z = e => {
        C.Z.updateGuild({
          publicUpdatesChannelId: e
        })
      },
      U = e => {
        C.Z.updateGuild({
          preferredLocale: e
        })
      },
      G = e => {
        C.Z.updateGuild({
          description: e
        })
      },
      P = () => {
        s.features.has(L.oNc.DISCOVERABLE) && s.features.has(L.oNc.PARTNERED) ? (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
          ...e,
          header: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: A.Z.Messages.CONFIRM,
          cancelText: A.Z.Messages.NEVERMIND,
          onConfirm: M,
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: A.Z.Messages.GUILD_SETTINGS_PARTNER_AND_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : s.features.has(L.oNc.DISCOVERABLE) ? (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
          ...e,
          header: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: A.Z.Messages.CONFIRM,
          cancelText: A.Z.Messages.NEVERMIND,
          onConfirm: M,
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: A.Z.Messages.GUILD_SETTINGS_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : s.features.has(L.oNc.PARTNERED) ? (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
          ...e,
          header: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: A.Z.Messages.CONFIRM,
          cancelText: A.Z.Messages.NEVERMIND,
          onConfirm: M,
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: A.Z.Messages.GUILD_SETTINGS_PARTNER_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : s.features.has(L.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !s.features.has(L.oNc.CLAN) ? (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
          ...e,
          header: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmButtonColor: d.Button.Colors.BRAND,
          confirmText: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION_CONFIRM,
          cancelText: A.Z.Messages.NEVERMIND,
          onConfirm: R,
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION
          })
        })) : M()
      };
    return (0, n.jsxs)(d.FormSection, {
      title: A.Z.Messages.GUILD_SETTINGS_COMMUNITY,
      tag: d.FormTitleTags.H1,
      children: [I ? (0, n.jsx)(v, {
        discoveryEnabled: s.features.has(L.oNc.DISCOVERABLE),
        onboardingEnabled: s.features.has(L.oNc.GUILD_ONBOARDING),
        guild: s
      }) : null, (0, n.jsxs)(d.FormSection, {
        className: a()(p.twoColumnFormSection, p.firstSection),
        children: [(0, n.jsxs)("div", {
          className: p.descriptionColumn,
          children: [(0, n.jsx)(d.FormTitle, {
            className: p.formTitle,
            children: A.Z.Messages.FORM_LABEL_DISCOVERY_RULES_CHANNEL
          }), (0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: p.__invalid_formDescription,
            children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_RULES_CHANNEL_HELP
          })]
        }), (0, n.jsx)("div", {
          className: p.selectColumn,
          children: (0, n.jsx)(d.SearchableSelect, {
            value: s.rulesChannelId,
            options: m,
            onChange: D,
            isDisabled: !t
          })
        })]
      }), (0, n.jsx)(d.FormDivider, {
        className: p.divider
      }), (0, n.jsxs)(d.FormSection, {
        className: a()(p.twoColumnFormSection, p.firstSection),
        children: [(0, n.jsxs)("div", {
          className: p.descriptionColumn,
          children: [(0, n.jsx)(d.FormTitle, {
            className: p.formTitle,
            children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
          }), (0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: p.__invalid_formDescription,
            children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
          })]
        }), (0, n.jsx)("div", {
          className: p.selectColumn,
          children: (0, n.jsx)(d.SearchableSelect, {
            value: s.publicUpdatesChannelId,
            options: m,
            onChange: Z,
            isDisabled: !t
          })
        })]
      }), (0, n.jsx)(d.FormDivider, {
        className: p.divider
      }), N && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(d.FormSection, {
          className: a()(p.twoColumnFormSection, p.firstSection),
          children: [(0, n.jsxs)("div", {
            className: p.descriptionColumn,
            children: [(0, n.jsx)(d.FormTitle, {
              className: p.formTitle,
              children: A.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
            }), (0, n.jsx)(d.FormText, {
              type: d.FormTextTypes.DESCRIPTION,
              className: p.__invalid_formDescription,
              children: A.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_DESCRIPTION
            })]
          }), (0, n.jsx)("div", {
            className: p.selectColumn,
            children: (0, n.jsx)(d.SearchableSelect, {
              value: s.safetyAlertsChannelId,
              options: m,
              onChange: j,
              isDisabled: !t
            })
          })]
        }), (0, n.jsx)(d.FormDivider, {
          className: p.divider
        })]
      }), (0, n.jsxs)(d.FormSection, {
        className: p.twoColumnFormSection,
        children: [(0, n.jsxs)("div", {
          className: p.descriptionColumn,
          children: [(0, n.jsx)(d.FormTitle, {
            className: p.formTitle,
            children: A.Z.Messages.FORM_LABEL_SERVER_LANGUAGE
          }), (0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: p.__invalid_formDescription,
            children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_LOCALE_HELP
          })]
        }), (0, n.jsx)("div", {
          className: p.selectColumn,
          children: (0, n.jsx)(d.SearchableSelect, {
            value: s.preferredLocale,
            options: u,
            onChange: U,
            isDisabled: !t
          })
        })]
      }), (0, n.jsx)(d.FormDivider, {
        className: p.divider
      }), (() => {
        var e;
        if (null != s) return (0, n.jsxs)(d.FormSection, {
          children: [(0, n.jsx)(d.FormTitle, {
            className: p.formTitle,
            children: A.Z.Messages.FORM_LABEL_SERVER_DESCRIPTION
          }), (0, n.jsx)(d.FormText, {
            className: p.description,
            type: d.FormTextTypes.DESCRIPTION,
            children: A.Z.Messages.FORM_HELP_SERVER_DESCRIPTION
          }), (0, n.jsx)(d.TextArea, {
            value: null !== (e = s.description) && void 0 !== e ? e : "",
            placeholder: A.Z.Messages.SERVER_DESCIPTION_EMPTY,
            onChange: G,
            maxLength: 120,
            disabled: !t
          })]
        })
      })(), (0, n.jsx)(d.FormDivider, {
        className: p.divider
      }), (0, n.jsxs)(d.FormSection, {
        className: p.twoColumnFormSection,
        children: [(0, n.jsxs)("div", {
          className: p.descriptionColumn,
          children: [(0, n.jsx)(d.FormTitle, {
            className: p.formTitle,
            children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
          }), (0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: p.__invalid_formDescription,
            children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY_DESCRIPTION
          })]
        }), (0, n.jsx)(d.Tooltip, {
          text: l ? null : A.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
          "aria-label": l ? void 0 : A.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
          children: e => (0, n.jsx)(d.Button, {
            size: d.Button.Sizes.SMALL,
            onClick: P,
            color: d.Button.Colors.RED,
            disabled: !l,
            ...e,
            children: A.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
          })
        })]
      })]
    })
  };
s.Z = () => {
  let e = (0, r.e7)([x.Z], () => x.Z.getGuild());
  return null == e ? null : e.features.has(L.oNc.COMMUNITY) ? (0, n.jsx)(j, {}) : (0, n.jsx)(R.Z, {
    guild: e
  })
}