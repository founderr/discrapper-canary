"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionBenefits: function() {
    return G
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("442837"),
  u = n("481060"),
  o = n("131388"),
  d = n("160404"),
  c = n("351402"),
  E = n("682864"),
  f = n("153124"),
  _ = n("86813"),
  T = n("826026"),
  I = n("41542"),
  S = n("768581"),
  m = n("817460"),
  C = n("584825"),
  N = n("290348"),
  R = n("934826"),
  g = n("768318"),
  v = n("570533"),
  L = n("971792"),
  h = n("629262"),
  p = n("761966"),
  M = n("893729"),
  O = n("838940"),
  A = n("882101"),
  x = n("11705"),
  U = n("81273"),
  D = n("293810"),
  P = n("981631"),
  j = n("689938"),
  B = n("89267");
let b = e => {
    let {
      benefits: t,
      header: n,
      guildId: i
    } = e, [l, r] = a.useState(!1), o = l ? t : t.slice(0, 5), d = t.length > 5, c = t.length - 5, _ = j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({
      numTruncated: c
    }), T = (0, f.useUID)();
    return 0 === t.length ? null : (0, s.jsxs)("div", {
      className: B.benefitsSection,
      children: [(0, s.jsx)(u.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: B.sectionHeader,
        id: T,
        children: n
      }), (0, s.jsx)(E.default, {
        size: 12
      }), (0, s.jsx)("ul", {
        className: B.benefitsList,
        "aria-labelledby": T,
        children: o.map((e, t) => (0, s.jsx)("li", {
          children: (0, s.jsx)(O.default, {
            guildId: i,
            benefit: e
          }, (0, m.getBenefitKey)(e))
        }, t))
      }), d && (0, s.jsx)(F, {
        isViewAll: l,
        onToggle: () => r(e => !e),
        showMoreText: _
      })]
    })
  },
  y = e => {
    let {
      guildId: t,
      listingId: n
    } = e, a = (0, v.default)(t), [i] = N.useTierEmojiIds(n, t), l = a.filter(e => i.has(e.id));
    return 0 === l.length ? null : (0, s.jsxs)("div", {
      className: B.benefitsSection,
      children: [(0, s.jsx)(u.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: B.sectionHeader,
        children: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({
          count: l.length
        })
      }), (0, s.jsx)(E.default, {
        size: 12
      }), (0, s.jsx)("div", {
        className: B.emojiList,
        children: l.map((e, t) => {
          var n;
          return (0, s.jsx)(u.Tooltip, {
            text: e.name,
            "aria-label": !1,
            children: t => {
              var n;
              return (0, s.jsx)("img", {
                ...t,
                className: B.emojiListEmoji,
                src: (n = e, S.default.getEmojiURL({
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
  G = e => {
    let {
      listingId: t,
      guildId: n,
      className: a
    } = e, i = (0, L.default)(n, t), [r] = N.useChannelBenefits(t), o = (0, h.default)(r), [d] = N.useIntangibleBenefits(t), c = N.useRole(t, n), [f] = N.useTierEmojiIds(t, n);
    return null == i && 0 === o.length && 0 === d.length && 0 === f.size ? null : (0, s.jsxs)("div", {
      className: l()(B.subscriptionPerks, a),
      children: [null != i && (0, s.jsxs)(u.HeadingLevel, {
        component: (0, s.jsx)(u.Heading, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: B.sectionHeader,
          children: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
        }),
        children: [(0, s.jsx)(E.default, {
          size: 8
        }), (0, s.jsx)(M.default, {
          role: c,
          guildId: n,
          className: B.roleMessagePreview
        })]
      }), (0, s.jsx)(b, {
        header: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
        benefits: o,
        guildId: n
      }), (0, s.jsx)(b, {
        header: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
        benefits: d,
        guildId: n
      }), (0, s.jsx)(y, {
        guildId: n,
        listingId: t
      })]
    })
  },
  F = e => {
    let t, {
      onToggle: n,
      isViewAll: a,
      showMoreText: i
    } = e;
    return t = a ? (0, s.jsxs)(s.Fragment, {
      children: [j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION, (0, s.jsx)(T.default, {
        className: B.toggleTruncationButtonIcon
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [i, (0, s.jsx)(_.default, {
        className: B.toggleTruncationButtonIcon
      })]
    }), (0, s.jsx)(u.Button, {
      look: u.Button.Looks.BLANK,
      size: u.Button.Sizes.NONE,
      className: B.toggleTruncationButton,
      innerClassName: B.toggleTruncationButtonInner,
      onClick: n,
      children: t
    })
  };
t.default = e => {
  var t;
  let {
    listingId: n,
    guildId: i,
    groupListingId: f,
    analyticsLocation: _
  } = e, T = (0, C.useSubscriptionListing)(n), {
    openModal: S,
    canOpenModal: v,
    cannotOpenReason: L,
    isCheckingTrialEligibility: h
  } = (0, U.default)(T, i, f, _), M = (0, r.useStateFromStores)([c.default], () => c.default.isSyncing), {
    activeSubscription: O,
    activeSubscriptionListing: b
  } = (0, R.default)(f), y = (null == b ? void 0 : b.id) === n, H = (null == O ? void 0 : O.status) === P.SubscriptionStatusTypes.CANCELED, [w, k] = a.useState(!1), [Q, V] = a.useState(!1), W = a.useCallback(e => {
    let t = !1;
    null != e && (t = e.scrollHeight - e.clientHeight > 1), V(t)
  }, []), [q] = N.useName(n), [Y] = N.useDescription(n), [Z] = N.useTrialInterval(n), [z] = N.useTrialLimit(n), K = (0, g.default)(i, n), J = null != Z && null == O && K, X = (0, o.default)(D.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), [$, ee] = a.useState(!1), et = $ || !X, en = (0, r.useStateFromStores)([d.default], () => d.default.isViewingServerShop(i)), es = (null == T ? void 0 : T.published) === !0, ea = (null == T ? void 0 : T.soft_deleted) === !0, ei = j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
  return (es || en) && !ea ? (0, s.jsxs)("article", {
    className: B.container,
    "aria-label": q,
    children: [J && (0, s.jsxs)("div", {
      className: l()(B.tierTrialIndicator, B.tierTopIndicator),
      children: [j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
        trialPeriodDuration: (0, m.formatPlanIntervalDuration)({
          interval: Z.interval,
          interval_count: Z.interval_count
        })
      }), (0, s.jsx)(u.Tooltip, {
        clickableOnMobile: !0,
        text: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({
          activeTrialUserLimit: null != z ? z : 0
        }),
        children: e => (0, s.jsx)(I.default, {
          className: B.tierTrialIndicatorIcon,
          ...e
        })
      })]
    }), (0, s.jsxs)("div", {
      className: J ? void 0 : B.cardContainerWithoutTopIndicator,
      children: [(0, s.jsxs)("div", {
        className: B.tierInfoContainer,
        children: [X ? (0, s.jsx)(x.GuildRoleSubscriptionCollapsibleCardBasicInfo, {
          listingId: n,
          isListingPublished: es,
          expanded: et,
          onToggleExpanded: () => ee(e => !e)
        }) : (0, s.jsx)(A.GuildRoleSubscriptionCardBasicInfo, {
          listingId: n,
          isListingPublished: es
        }), et && (0, s.jsxs)(s.Fragment, {
          children: [X && (0, s.jsx)("div", {
            className: B.divider
          }), y ? (0, s.jsx)(u.Button, {
            fullWidth: !0,
            look: u.Button.Looks.OUTLINED,
            color: u.Button.Colors.PRIMARY,
            disabled: !0,
            children: H ? j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
          }) : (0, s.jsx)(u.Tooltip, {
            text: v ? null : L,
            "aria-label": null !== (t = v && L) && void 0 !== t && t,
            children: e => (0, s.jsx)(p.default, {
              ...e,
              fullWidth: !0,
              disabled: !v || M,
              submitting: h,
              onClick: S,
              onlyShineOnHover: !0,
              children: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          }), (0, s.jsx)(E.default, {
            size: 16
          }), (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            className: l()((!Q || !w) && B.tierDescriptionTruncate),
            children: (0, s.jsx)("div", {
              ref: W,
              children: Y
            })
          }), Q && (0, s.jsx)(F, {
            isViewAll: w,
            onToggle: () => k(e => !e),
            showMoreText: ei
          })]
        })]
      }), et && (0, s.jsx)(u.HeadingLevel, {
        children: (0, s.jsx)(G, {
          listingId: n,
          guildId: i
        })
      })]
    })]
  }) : null
}