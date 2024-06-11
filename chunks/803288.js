"use strict";
s.r(t), s.d(t, {
  GuildSettingsVanityURLNotice: function() {
    return D
  },
  default: function() {
    return j
  }
}), s("757143"), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("497321"),
  u = s("852860"),
  c = s("100527"),
  E = s("367907"),
  _ = s("906732"),
  I = s("807582"),
  T = s("26323"),
  S = s("366980"),
  f = s("246946"),
  m = s("379070"),
  N = s("709586"),
  g = s("267642"),
  h = s("999382"),
  C = s("621319"),
  R = s("44550"),
  x = s("770270"),
  L = s("981631"),
  O = s("30513"),
  p = s("689938"),
  A = s("292882");

function M(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let D = r.default.connectStores([h.default, R.default], () => {
  let e = R.default.vanityURLCode,
    t = h.default.getGuildId();
  return {
    vanityURLCode: e,
    guildId: t,
    onReset() {
      (0, C.resetCode)()
    },
    onSave() {
      null != t && (0, C.saveCode)(t, e)
    }
  }
})(u.default);
class v extends l.PureComponent {
  componentWillUnmount() {
    (0, C.close)()
  }
  renderEditCard() {
    let {
      isRemoving: e
    } = this.state, {
      hasError: t,
      originalVanityURLCode: s,
      vanityURLCode: l,
      vanityURLUses: n,
      guild: i
    } = this.props;
    if (null == l) return (0, a.jsx)(o.Spinner, {});
    let r = (null == i ? void 0 : i.hasFeature(L.GuildFeatures.VANITY_URL)) === !0;
    return (0, a.jsxs)(o.Card, {
      editable: !0,
      className: A.editVanityUrlCard,
      children: [(0, a.jsxs)(o.FormTitle, {
        className: A.__invalid_formTitle,
        children: [(0, a.jsx)("div", {
          className: A.formTitleField,
          children: p.default.Messages.INVITE_URL
        }), l.length > 0 ? (0, a.jsx)("div", {
          children: p.default.Messages.VANITY_URL_USES.format({
            uses: n
          })
        }) : null]
      }), (0, a.jsx)(m.default, {
        prefix: "".concat("https://discord.gg", "/"),
        value: l,
        onChange: this.handleInviteCodeChange,
        maxLength: 25,
        autoFocus: !0,
        error: t,
        disabled: !r
      }), null != s && s.length > 0 ? (0, a.jsx)(o.Button, {
        className: A.removeVanityUrlButton,
        onClick: this.handleRemoveVanityURL,
        submitting: e,
        look: o.Button.Looks.LINK,
        size: o.Button.Sizes.MIN,
        color: o.Button.Colors.RED,
        children: p.default.Messages.REMOVE_VANITY_URL
      }) : null]
    })
  }
  renderUpsellButton() {
    return (0, a.jsxs)(o.ShinyButton, {
      color: o.Button.Colors.GREEN,
      className: i()(A.marginTop16),
      innerClassName: A.upsellButton,
      onClick: this.handleVanityUrlUpsellButton,
      children: [(0, a.jsx)(N.default, {
        height: 16,
        width: 16,
        className: A.premiumUpsellBadge
      }), " ", p.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
    })
  }
  renderInfo() {
    let {
      hasError: e,
      errorDetails: t,
      originalVanityURLCode: s
    } = this.props;
    if (e) return (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-danger",
      className: A.__invalid_marginTop20,
      children: (0, x.getErrorMessageFromErrorCode)(null == t ? void 0 : t.code)
    });
    if (null != s && s.length > 0) {
      let e = (0, S.default)(s);
      return (0, a.jsx)(o.FormText, {
        className: A.__invalid_marginTop20,
        type: o.FormTextTypes.LABEL_DESCRIPTOR,
        children: p.default.Messages.VANITY_URL_HELP_EXTENDED_LINK.format({
          urlText: e,
          urlValue: e
        })
      })
    }
  }
  handleRemoveVanityURL() {
    (0, C.setCode)("")
  }
  handleInviteCodeChange(e) {
    (0, C.setCode)(e.replace(/ /g, "-"))
  }
  render() {
    let {
      hide: e,
      guild: t
    } = this.props;
    return null == t ? null : e ? (0, a.jsx)(d.default, {}) : (0, a.jsxs)(o.FormSection, {
      children: [(0, a.jsxs)(o.FormTitle, {
        tag: o.FormTitleTags.H1,
        className: A.flexFormTitle,
        children: [(0, a.jsx)("div", {
          children: p.default.Messages.VANITY_URL
        }), (0, a.jsx)(I.default, {
          guild: t,
          guildFeature: L.GuildFeatures.VANITY_URL,
          className: A.guildFeatureAvailabilityIndicator,
          onClick: this.handleVanityUrlUpsellIndicator
        })]
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: A.__invalid_marginBottom8,
        children: p.default.Messages.VANITY_URL_HELP
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: A.__invalid_marginBottom20,
        children: p.default.Messages.VANITY_URL_HELP_CONFLICT
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: A.__invalid_marginBottom20,
        children: p.default.Messages.VANITY_URL_DEFAULT_CHANNEL
      }), (0, x.canSeeVanityUrlSettings)(t) ? this.renderEditCard() : this.renderUpsellButton(), this.renderInfo()]
    })
  }
  constructor(...e) {
    super(...e), M(this, "state", {
      isRemoving: !1
    }), M(this, "handleShowModalUpsell", (e, t, s, a, l) => {
      e.preventDefault(), e.stopPropagation();
      let {
        guild: n,
        analyticsLocations: i
      } = this.props;
      null != n && ((0, E.trackWithMetadata)(L.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          section: s,
          object: L.AnalyticsObjects.LEARN_MORE,
          objectType: (0, g.boostedGuildTierToAnalyticsObjectType)(t),
          location_stack: i
        },
        guild_id: null == n ? void 0 : n.id
      }), (0, T.default)({
        analyticsLocations: i,
        analyticsSourceLocation: {
          section: s,
          object: a,
          page: L.AnalyticsPages.GUILD_SETTINGS
        },
        guild: n,
        perks: l
      }))
    }), M(this, "handleVanityUrlUpsellIndicator", e => {
      this.handleShowModalUpsell(e, L.BoostedGuildTiers.TIER_3, L.AnalyticsSections.GUILD_SETTINGS_VANITY_URL, L.AnalyticsObjects.BADGE, (0, O.vanityUrlUpsellPerks)())
    }), M(this, "handleVanityUrlUpsellButton", e => {
      this.handleShowModalUpsell(e, L.BoostedGuildTiers.TIER_3, L.AnalyticsSections.GUILD_SETTINGS_VANITY_URL, L.AnalyticsObjects.BUTTON_CTA, (0, O.vanityUrlUpsellPerks)())
    })
  }
}

function j() {
  let e = (0, r.useStateFromStores)([h.default], () => h.default.getGuild()),
    t = (0, r.useStateFromStoresObject)([R.default], () => ({
      vanityURLCode: R.default.vanityURLCode,
      vanityURLUses: R.default.vanityURLUses,
      originalVanityURLCode: R.default.originalVanityURLCode,
      hasError: R.default.hasError(),
      errorDetails: R.default.errorDetails
    })),
    s = (0, r.useStateFromStores)([f.default], () => f.default.hideInstantInvites),
    {
      analyticsLocations: l
    } = (0, _.default)(c.default.VANITY_URL);
  return (0, a.jsx)(_.AnalyticsLocationProvider, {
    value: l,
    children: (0, a.jsx)(v, {
      guild: e,
      ...t,
      hide: s,
      analyticsLocations: l
    })
  })
}