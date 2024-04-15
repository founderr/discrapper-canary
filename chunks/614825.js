"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("913527"),
  o = n.n(r),
  u = n("873546"),
  d = n("442837"),
  c = n("481060"),
  E = n("568836"),
  f = n("100527"),
  _ = n("906732"),
  T = n("963249"),
  I = n("594174"),
  m = n("78839"),
  N = n("55935"),
  p = n("74538"),
  S = n("276444"),
  C = n("790368"),
  A = n("786397"),
  h = n("474936"),
  g = n("689938"),
  M = n("851282");
class O extends a.Component {
  renderTitle(e, t, n) {
    let {
      trialOffer: s
    } = this.props, a = I.default.getUser(s.user_id), l = null != a ? a.username : "???", i = I.default.getUser(s.referrer_id), r = null != i ? i.username : "???";
    if (e && void 0 === s.redeemed_at) return g.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({
      username: l
    });
    if (t) return n ? g.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : g.default.Messages.REFERRAL_PROGRAM_EMBED_TIRAL_EXPIRED.format({
      userName: r
    });
    return g.default.Messages.REFERRAL_PROGRAM_EMBED_HEADER.format({
      senderUserName: r,
      recipientUserName: l
    })
  }
  renderBody(e, t, n) {
    let {
      trialOffer: s
    } = this.props, a = I.default.getUser(s.referrer_id), l = null != a ? a.username : "???";
    return e && !n && void 0 === s.redeemed_at ? g.default.Messages.REFERRAL_PROGRAM_EMBED_RECIPIENT_INELIGIBLE_SUBHEADER.format({
      userName: l
    }) : t ? null : g.default.Messages.REFERRAL_PROGRAM_EMBED_BODY
  }
  renderActions(e, t, n) {
    let {
      trialOffer: a,
      currentUser: l,
      analyticsLocations: i
    } = this.props, r = {
      onClick: () => {
        this.handleStartTrial(a, i)
      },
      color: c.Button.Colors.BRAND
    }, o = l.id !== a.user_id || (0, p.isPremium)(l) || !l.verified || (0, A.hasUserTrialOfferExpired)(a), u = this.renderExpirationDate(e, t, n);
    return r.disabled = o, (0, s.jsxs)("div", {
      className: M.buttonContainer,
      children: [(0, s.jsx)("div", {
        children: (0, s.jsx)(c.Button, {
          ...r,
          size: c.Button.Sizes.SMALL,
          onClick: () => {
            (0, T.default)({
              initialPlanId: null,
              subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: i,
              trialId: a.trial_id,
              referralTrialOfferId: a.id
            })
          },
          children: g.default.Messages.START_TRIAL
        })
      }), (0, s.jsx)("div", {
        className: M.metadata,
        children: u
      })]
    })
  }
  renderExpirationDate(e, t, n) {
    let {
      trialOffer: s,
      trialEndsAt: a
    } = this.props;
    if (void 0 !== s.redeemed_at && !n && null !== a) return g.default.Messages.TRIAL_EXPIRES.format({
      date: (0, N.dateFormat)(o()(a), "LL")
    });
    if (e || void 0 === s.expires_at) return null;
    let l = o()(s.expires_at);
    if (t) return g.default.Messages.EXPIRED_DATE.format({
      date: (0, N.dateFormat)(o()(l), "LL")
    });
    let i = l.diff(o()(), "h");
    if (i > 48) {
      let e = l.diff(o()(), "d");
      return g.default.Messages.EXPIRES_DAYS.format({
        numDays: e
      })
    }
    if (i > 1) return g.default.Messages.EXPIRES_HOURS.format({
      numHours: i
    });
    let r = l.diff(o()(), "minutes");
    return g.default.Messages.EXPIRES_MINUTES.format({
      numMinutes: r
    })
  }
  renderMedia(e) {
    return (0, s.jsx)("div", {
      className: i()({
        [M.referral]: !e,
        [M.birthdayReferral]: e
      })
    })
  }
  render() {
    let {
      trialOffer: e,
      currentUser: t,
      recipientHasNitro: n,
      shouldShowBirthdayUX: a
    } = this.props, l = (0, A.hasUserTrialOfferExpired)(e), r = t.id === e.referrer_id;
    return (0, s.jsxs)("div", {
      className: i()(M.tile, M.container),
      children: [(0, s.jsx)("div", {
        className: M.media,
        children: this.renderMedia(a)
      }), (0, s.jsxs)("div", {
        className: M.description,
        children: [(0, s.jsx)(c.H, {
          className: M.title,
          children: this.renderTitle(n, l, r)
        }), (0, s.jsx)("div", {
          className: M.tagline,
          children: this.renderBody(n, l, r)
        }), (0, s.jsx)("div", {
          className: M.actions,
          children: this.renderActions(n, l, r)
        })]
      })]
    })
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "handleStartTrial", s = (e, t) => {
      (0, T.default)({
        initialPlanId: null,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        analyticsLocations: t,
        trialId: e.trial_id
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}

function R(e) {
  let {
    userTrialOfferId: t,
    canRenderReferralEmbed: n
  } = e, {
    trialOffer: a,
    isResolving: l
  } = (0, d.useStateFromStoresObject)([S.default], () => ({
    trialOffer: n ? S.default.getRelevantUserTrialOffer(t) : null,
    isResolving: !!n && S.default.isResolving(t)
  }), [n, t]), i = I.default.getCurrentUser(), r = (0, d.useStateFromStores)([I.default], () => null != a && (0, p.isPremium)(void 0 !== i && a.user_id === i.id ? i : I.default.getUser(a.user_id))), o = (0, d.useStateFromStores)([m.default], () => {
    var e;
    return r ? null === (e = m.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt : null
  }), {
    analyticsLocations: c
  } = (0, _.default)(f.default.SHARE_NITRO_EMBED), {
    enabled: T
  } = C.default.useExperiment({
    location: "f4ff1d_1"
  }, {
    autoTrackExposure: !0
  });
  return l ? (0, s.jsx)(E.ResponsiveLoadingEmbedTile, {
    isHorizontal: !u.isMobile
  }) : n && null != a && void 0 !== i ? (0, s.jsx)(O, {
    trialOffer: a,
    currentUser: i,
    recipientHasNitro: r,
    trialEndsAt: o,
    analyticsLocations: c,
    shouldShowBirthdayUX: T,
    ...e
  }) : (0, s.jsx)("div", {
    className: M.invalidWrapper,
    children: (0, s.jsx)("div", {
      className: M.invalid
    })
  })
}