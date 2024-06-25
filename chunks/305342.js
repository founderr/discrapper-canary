n.d(t, {
  c: function() {
    return j
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(131388),
  u = n(160404),
  d = n(351402),
  E = n(153124),
  _ = n(768581),
  I = n(817460),
  T = n(584825),
  m = n(290348),
  N = n(934826),
  h = n(768318),
  C = n(570533),
  S = n(971792),
  A = n(629262),
  g = n(761966),
  p = n(893729),
  f = n(838940),
  R = n(882101),
  O = n(11705),
  M = n(81273),
  x = n(293810),
  v = n(981631),
  L = n(689938),
  Z = n(359158);
let P = e => {
    let {
      benefits: t,
      header: n,
      guildId: l
    } = e, [a, r] = i.useState(!1), c = a ? t : t.slice(0, 5), u = t.length > 5, d = t.length - 5, _ = L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({
      numTruncated: d
    }), T = (0, E.Dt)();
    return 0 === t.length ? null : (0, s.jsxs)("div", {
      className: Z.benefitsSection,
      children: [(0, s.jsx)(o.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: Z.sectionHeader,
        id: T,
        children: n
      }), (0, s.jsx)(o.Spacer, {
        size: 12
      }), (0, s.jsx)("ul", {
        className: Z.benefitsList,
        "aria-labelledby": T,
        children: c.map((e, t) => (0, s.jsx)("li", {
          children: (0, s.jsx)(f.Z, {
            guildId: l,
            benefit: e
          }, (0, I.ab)(e))
        }, t))
      }), u && (0, s.jsx)(U, {
        isViewAll: a,
        onToggle: () => r(e => !e),
        showMoreText: _
      })]
    })
  },
  D = e => {
    let {
      guildId: t,
      listingId: n
    } = e, i = (0, C.Z)(t), [l] = m.XZ(n, t), a = i.filter(e => l.has(e.id));
    return 0 === a.length ? null : (0, s.jsxs)("div", {
      className: Z.benefitsSection,
      children: [(0, s.jsx)(o.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: Z.sectionHeader,
        children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({
          count: a.length
        })
      }), (0, s.jsx)(o.Spacer, {
        size: 12
      }), (0, s.jsx)("div", {
        className: Z.emojiList,
        children: a.map((e, t) => {
          var n;
          return (0, s.jsx)(o.Tooltip, {
            text: e.name,
            "aria-label": !1,
            children: t => {
              var n;
              return (0, s.jsx)("img", {
                ...t,
                className: Z.emojiListEmoji,
                src: (n = e, _.ZP.getEmojiURL({
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
  j = e => {
    let {
      listingId: t,
      guildId: n,
      className: i
    } = e, l = (0, S.Z)(n, t), [r] = m.UE(t), c = (0, A.Z)(r), [u] = m.R7(t), d = m.qs(t, n), [E] = m.XZ(t, n);
    return null == l && 0 === c.length && 0 === u.length && 0 === E.size ? null : (0, s.jsxs)("div", {
      className: a()(Z.subscriptionPerks, i),
      children: [null != l && (0, s.jsxs)(o.HeadingLevel, {
        component: (0, s.jsx)(o.Heading, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: Z.sectionHeader,
          children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
        }),
        children: [(0, s.jsx)(o.Spacer, {
          size: 8
        }), (0, s.jsx)(p.Z, {
          role: d,
          guildId: n,
          className: Z.roleMessagePreview
        })]
      }), (0, s.jsx)(P, {
        header: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
        benefits: c,
        guildId: n
      }), (0, s.jsx)(P, {
        header: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
        benefits: u,
        guildId: n
      }), (0, s.jsx)(D, {
        guildId: n,
        listingId: t
      })]
    })
  },
  U = e => {
    let t, {
      onToggle: n,
      isViewAll: i,
      showMoreText: l
    } = e;
    return t = i ? (0, s.jsxs)(s.Fragment, {
      children: [L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION, (0, s.jsx)(o.ChevronSmallUpIcon, {
        size: "md",
        color: "currentColor",
        className: Z.toggleTruncationButtonIcon
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [l, (0, s.jsx)(o.ChevronSmallDownIcon, {
        size: "md",
        color: "currentColor",
        className: Z.toggleTruncationButtonIcon
      })]
    }), (0, s.jsx)(o.Button, {
      look: o.Button.Looks.BLANK,
      size: o.Button.Sizes.NONE,
      className: Z.toggleTruncationButton,
      innerClassName: Z.toggleTruncationButtonInner,
      onClick: n,
      children: t
    })
  };
t.Z = e => {
  var t;
  let {
    listingId: n,
    guildId: l,
    groupListingId: E,
    analyticsLocation: _
  } = e, C = (0, T.jO)(n), {
    openModal: S,
    canOpenModal: A,
    cannotOpenReason: p,
    isCheckingTrialEligibility: f
  } = (0, M.Z)(C, l, E, _), P = (0, r.e7)([d.Z], () => d.Z.isSyncing), {
    activeSubscription: D,
    activeSubscriptionListing: b
  } = (0, N.Z)(E), y = (null == b ? void 0 : b.id) === n, B = (null == D ? void 0 : D.status) === v.O0b.CANCELED, [k, G] = i.useState(!1), [F, V] = i.useState(!1), w = i.useCallback(e => {
    let t = !1;
    null != e && (t = e.scrollHeight - e.clientHeight > 1), V(t)
  }, []), [H] = m._T(n), [Y] = m.PK(n), [W] = m.TT(n), [z] = m.F2(n), K = (0, h.Z)(l, n), Q = null != W && null == D && K, X = (0, c.Z)(x.iP), [q, J] = i.useState(!1), $ = q || !X, ee = (0, r.e7)([u.Z], () => u.Z.isViewingServerShop(l)), et = (null == C ? void 0 : C.published) === !0, en = (null == C ? void 0 : C.soft_deleted) === !0, es = L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
  return (et || ee) && !en ? (0, s.jsxs)("article", {
    className: Z.container,
    "aria-label": H,
    children: [Q && (0, s.jsxs)("div", {
      className: a()(Z.tierTrialIndicator, Z.tierTopIndicator),
      children: [L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
        trialPeriodDuration: (0, I.iG)({
          interval: W.interval,
          interval_count: W.interval_count
        })
      }), (0, s.jsx)(o.Tooltip, {
        clickableOnMobile: !0,
        text: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({
          activeTrialUserLimit: null != z ? z : 0
        }),
        children: e => (0, s.jsx)(o.CircleInformationIcon, {
          size: "xs",
          color: "currentColor",
          className: Z.tierTrialIndicatorIcon,
          ...e
        })
      })]
    }), (0, s.jsxs)("div", {
      className: Q ? void 0 : Z.cardContainerWithoutTopIndicator,
      children: [(0, s.jsxs)("div", {
        className: Z.tierInfoContainer,
        children: [X ? (0, s.jsx)(O.e, {
          listingId: n,
          isListingPublished: et,
          expanded: $,
          onToggleExpanded: () => J(e => !e)
        }) : (0, s.jsx)(R.xv, {
          listingId: n,
          isListingPublished: et
        }), $ && (0, s.jsxs)(s.Fragment, {
          children: [X && (0, s.jsx)("div", {
            className: Z.divider
          }), y ? (0, s.jsx)(o.Button, {
            fullWidth: !0,
            look: o.Button.Looks.OUTLINED,
            color: o.Button.Colors.PRIMARY,
            disabled: !0,
            children: B ? L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
          }) : (0, s.jsx)(o.Tooltip, {
            text: A ? null : p,
            "aria-label": null !== (t = A && p) && void 0 !== t && t,
            children: e => (0, s.jsx)(g.Z, {
              ...e,
              fullWidth: !0,
              disabled: !A || P,
              submitting: f,
              onClick: S,
              onlyShineOnHover: !0,
              children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          }), (0, s.jsx)(o.Spacer, {
            size: 16
          }), (0, s.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            className: a()((!F || !k) && Z.tierDescriptionTruncate),
            children: (0, s.jsx)("div", {
              ref: w,
              children: Y
            })
          }), F && (0, s.jsx)(U, {
            isViewAll: k,
            onToggle: () => G(e => !e),
            showMoreText: es
          })]
        })]
      }), $ && (0, s.jsx)(o.HeadingLevel, {
        children: (0, s.jsx)(j, {
          listingId: n,
          guildId: l
        })
      })]
    })]
  }) : null
}