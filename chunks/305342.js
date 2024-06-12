"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionBenefits: function() {
    return b
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  s = n("120356"),
  r = n.n(s),
  l = n("442837"),
  u = n("481060"),
  o = n("131388"),
  d = n("160404"),
  c = n("351402"),
  f = n("153124"),
  E = n("86813"),
  _ = n("826026"),
  T = n("41542"),
  I = n("768581"),
  S = n("817460"),
  C = n("584825"),
  m = n("290348"),
  N = n("934826"),
  R = n("768318"),
  v = n("570533"),
  g = n("971792"),
  p = n("629262"),
  h = n("761966"),
  L = n("893729"),
  A = n("838940"),
  O = n("882101"),
  M = n("11705"),
  x = n("81273"),
  U = n("293810"),
  D = n("981631"),
  P = n("689938"),
  y = n("89267");
let j = e => {
    let {
      benefits: t,
      header: n,
      guildId: s
    } = e, [r, l] = a.useState(!1), o = r ? t : t.slice(0, 5), d = t.length > 5, c = t.length - 5, E = P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({
      numTruncated: c
    }), _ = (0, f.useUID)();
    return 0 === t.length ? null : (0, i.jsxs)("div", {
      className: y.benefitsSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: y.sectionHeader,
        id: _,
        children: n
      }), (0, i.jsx)(u.Spacer, {
        size: 12
      }), (0, i.jsx)("ul", {
        className: y.benefitsList,
        "aria-labelledby": _,
        children: o.map((e, t) => (0, i.jsx)("li", {
          children: (0, i.jsx)(A.default, {
            guildId: s,
            benefit: e
          }, (0, S.getBenefitKey)(e))
        }, t))
      }), d && (0, i.jsx)(F, {
        isViewAll: r,
        onToggle: () => l(e => !e),
        showMoreText: E
      })]
    })
  },
  B = e => {
    let {
      guildId: t,
      listingId: n
    } = e, a = (0, v.default)(t), [s] = m.useTierEmojiIds(n, t), r = a.filter(e => s.has(e.id));
    return 0 === r.length ? null : (0, i.jsxs)("div", {
      className: y.benefitsSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: y.sectionHeader,
        children: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({
          count: r.length
        })
      }), (0, i.jsx)(u.Spacer, {
        size: 12
      }), (0, i.jsx)("div", {
        className: y.emojiList,
        children: r.map((e, t) => {
          var n;
          return (0, i.jsx)(u.Tooltip, {
            text: e.name,
            "aria-label": !1,
            children: t => {
              var n;
              return (0, i.jsx)("img", {
                ...t,
                className: y.emojiListEmoji,
                src: (n = e, I.default.getEmojiURL({
                  id: n.id,
                  animated: n.animated,
                  size: 24
                })),
                width: 24,
                height: 24,
                alt: e.name
              })
            }
          }, null !== (n = e.id) && void 0 !== n ? n : t)
        })
      })]
    })
  },
  b = e => {
    let {
      listingId: t,
      guildId: n,
      className: a
    } = e, s = (0, g.default)(n, t), [l] = m.useChannelBenefits(t), o = (0, p.default)(l), [d] = m.useIntangibleBenefits(t), c = m.useRole(t, n), [f] = m.useTierEmojiIds(t, n);
    return null == s && 0 === o.length && 0 === d.length && 0 === f.size ? null : (0, i.jsxs)("div", {
      className: r()(y.subscriptionPerks, a),
      children: [null != s && (0, i.jsxs)(u.HeadingLevel, {
        component: (0, i.jsx)(u.Heading, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: y.sectionHeader,
          children: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
        }),
        children: [(0, i.jsx)(u.Spacer, {
          size: 8
        }), (0, i.jsx)(L.default, {
          role: c,
          guildId: n,
          className: y.roleMessagePreview
        })]
      }), (0, i.jsx)(j, {
        header: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
        benefits: o,
        guildId: n
      }), (0, i.jsx)(j, {
        header: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
        benefits: d,
        guildId: n
      }), (0, i.jsx)(B, {
        guildId: n,
        listingId: t
      })]
    })
  },
  F = e => {
    let t, {
      onToggle: n,
      isViewAll: a,
      showMoreText: s
    } = e;
    return t = a ? (0, i.jsxs)(i.Fragment, {
      children: [P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION, (0, i.jsx)(_.default, {
        className: y.toggleTruncationButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [s, (0, i.jsx)(E.default, {
        className: y.toggleTruncationButtonIcon
      })]
    }), (0, i.jsx)(u.Button, {
      look: u.Button.Looks.BLANK,
      size: u.Button.Sizes.NONE,
      className: y.toggleTruncationButton,
      innerClassName: y.toggleTruncationButtonInner,
      onClick: n,
      children: t
    })
  };
t.default = e => {
  var t;
  let {
    listingId: n,
    guildId: s,
    groupListingId: f,
    analyticsLocation: E
  } = e, _ = (0, C.useSubscriptionListing)(n), {
    openModal: I,
    canOpenModal: v,
    cannotOpenReason: g,
    isCheckingTrialEligibility: p
  } = (0, x.default)(_, s, f, E), L = (0, l.useStateFromStores)([c.default], () => c.default.isSyncing), {
    activeSubscription: A,
    activeSubscriptionListing: j
  } = (0, N.default)(f), B = (null == j ? void 0 : j.id) === n, G = (null == A ? void 0 : A.status) === D.SubscriptionStatusTypes.CANCELED, [H, w] = a.useState(!1), [k, Q] = a.useState(!1), V = a.useCallback(e => {
    let t = !1;
    null != e && (t = e.scrollHeight - e.clientHeight > 1), Q(t)
  }, []), [W] = m.useName(n), [Y] = m.useDescription(n), [q] = m.useTrialInterval(n), [Z] = m.useTrialLimit(n), z = (0, R.default)(s, n), K = null != q && null == A && z, J = (0, o.default)(U.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), [X, $] = a.useState(!1), ee = X || !J, et = (0, l.useStateFromStores)([d.default], () => d.default.isViewingServerShop(s)), en = (null == _ ? void 0 : _.published) === !0, ei = (null == _ ? void 0 : _.soft_deleted) === !0, ea = P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
  return (en || et) && !ei ? (0, i.jsxs)("article", {
    className: y.container,
    "aria-label": W,
    children: [K && (0, i.jsxs)("div", {
      className: r()(y.tierTrialIndicator, y.tierTopIndicator),
      children: [P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
        trialPeriodDuration: (0, S.formatPlanIntervalDuration)({
          interval: q.interval,
          interval_count: q.interval_count
        })
      }), (0, i.jsx)(u.Tooltip, {
        clickableOnMobile: !0,
        text: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({
          activeTrialUserLimit: null != Z ? Z : 0
        }),
        children: e => (0, i.jsx)(T.default, {
          className: y.tierTrialIndicatorIcon,
          ...e
        })
      })]
    }), (0, i.jsxs)("div", {
      className: K ? void 0 : y.cardContainerWithoutTopIndicator,
      children: [(0, i.jsxs)("div", {
        className: y.tierInfoContainer,
        children: [J ? (0, i.jsx)(M.GuildRoleSubscriptionCollapsibleCardBasicInfo, {
          listingId: n,
          isListingPublished: en,
          expanded: ee,
          onToggleExpanded: () => $(e => !e)
        }) : (0, i.jsx)(O.GuildRoleSubscriptionCardBasicInfo, {
          listingId: n,
          isListingPublished: en
        }), ee && (0, i.jsxs)(i.Fragment, {
          children: [J && (0, i.jsx)("div", {
            className: y.divider
          }), B ? (0, i.jsx)(u.Button, {
            fullWidth: !0,
            look: u.Button.Looks.OUTLINED,
            color: u.Button.Colors.PRIMARY,
            disabled: !0,
            children: G ? P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
          }) : (0, i.jsx)(u.Tooltip, {
            text: v ? null : g,
            "aria-label": null !== (t = v && g) && void 0 !== t && t,
            children: e => (0, i.jsx)(h.default, {
              ...e,
              fullWidth: !0,
              disabled: !v || L,
              submitting: p,
              onClick: I,
              onlyShineOnHover: !0,
              children: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          }), (0, i.jsx)(u.Spacer, {
            size: 16
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            className: r()((!k || !H) && y.tierDescriptionTruncate),
            children: (0, i.jsx)("div", {
              ref: V,
              children: Y
            })
          }), k && (0, i.jsx)(F, {
            isViewAll: H,
            onToggle: () => w(e => !e),
            showMoreText: ea
          })]
        })]
      }), ee && (0, i.jsx)(u.HeadingLevel, {
        children: (0, i.jsx)(b, {
          listingId: n,
          guildId: s
        })
      })]
    })]
  }) : null
}