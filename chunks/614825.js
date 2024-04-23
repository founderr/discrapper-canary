"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("120356"),
  i = n.n(a),
  r = n("913527"),
  o = n.n(r),
  u = n("873546"),
  d = n("442837"),
  c = n("481060"),
  f = n("568836"),
  E = n("100527"),
  _ = n("906732"),
  m = n("963249"),
  T = n("594174"),
  I = n("78839"),
  p = n("55935"),
  h = n("74538"),
  N = n("276444"),
  S = n("790368"),
  C = n("786397"),
  A = n("474936"),
  g = n("689938"),
  M = n("851282");
class R extends l.Component {
  renderTitle(e, t, n) {
    let {
      trialOffer: s
    } = this.props, l = T.default.getUser(s.user_id), a = null != l ? l.username : "???", i = T.default.getUser(s.referrer_id), r = null != i ? i.username : "???";
    if (e && void 0 === s.redeemed_at) return g.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({
      username: a
    });
    if (t) return n ? g.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : g.default.Messages.REFERRAL_PROGRAM_EMBED_TIRAL_EXPIRED.format({
      userName: r
    });
    return g.default.Messages.REFERRAL_PROGRAM_EMBED_HEADER.format({
      senderUserName: r,
      recipientUserName: a
    })
  }
  renderBody(e, t, n) {
    let {
      trialOffer: s
    } = this.props, l = T.default.getUser(s.referrer_id), a = null != l ? l.username : "???";
    return e && !n && void 0 === s.redeemed_at ? g.default.Messages.REFERRAL_PROGRAM_EMBED_RECIPIENT_INELIGIBLE_SUBHEADER.format({
      userName: a
    }) : t ? null : g.default.Messages.REFERRAL_PROGRAM_EMBED_BODY
  }
  renderActions(e, t, n) {
    let {
      trialOffer: l,
      currentUser: a,
      analyticsLocations: i
    } = this.props, r = {
      onClick: () => {
        this.handleStartTrial(l, i)
      },
      color: c.Button.Colors.BRAND
    }, o = a.id !== l.user_id || (0, h.isPremium)(a) || !a.verified || (0, C.hasUserTrialOfferExpired)(l), u = this.renderExpirationDate(e, t, n);
    return r.disabled = o, (0, s.jsxs)("div", {
      className: M.buttonContainer,
      children: [(0, s.jsx)("div", {
        children: (0, s.jsx)(c.Button, {
          ...r,
          size: c.Button.Sizes.SMALL,
          onClick: () => {
            (0, m.default)({
              initialPlanId: null,
              subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: i,
              trialId: l.trial_id,
              referralTrialOfferId: l.id
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
      trialEndsAt: l
    } = this.props;
    if (void 0 !== s.redeemed_at && !n && null !== l) return g.default.Messages.TRIAL_EXPIRES.format({
      date: (0, p.dateFormat)(o()(l), "LL")
    });
    if (e || void 0 === s.expires_at) return null;
    let a = o()(s.expires_at);
    if (t) return g.default.Messages.EXPIRED_DATE.format({
      date: (0, p.dateFormat)(o()(a), "LL")
    });
    let i = a.diff(o()(), "h");
    if (i > 48) {
      let e = a.diff(o()(), "d");
      return g.default.Messages.EXPIRES_DAYS.format({
        numDays: e
      })
    }
    if (i > 1) return g.default.Messages.EXPIRES_HOURS.format({
      numHours: i
    });
    let r = a.diff(o()(), "minutes");
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
      shouldShowBirthdayUX: l
    } = this.props, a = (0, C.hasUserTrialOfferExpired)(e), r = t.id === e.referrer_id;
    return (0, s.jsxs)("div", {
      className: i()(M.tile, M.container),
      children: [(0, s.jsx)("div", {
        className: M.media,
        children: this.renderMedia(l)
      }), (0, s.jsxs)("div", {
        className: M.description,
        children: [(0, s.jsx)(c.H, {
          className: M.title,
          children: this.renderTitle(n, a, r)
        }), (0, s.jsx)("div", {
          className: M.tagline,
          children: this.renderBody(n, a, r)
        }), (0, s.jsx)("div", {
          className: M.actions,
          children: this.renderActions(n, a, r)
        })]
      })]
    })
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "handleStartTrial", s = (e, t) => {
      (0, m.default)({
        initialPlanId: null,
        subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
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

function v(e) {
  let {
    userTrialOfferId: t,
    canRenderReferralEmbed: n
  } = e, {
    trialOffer: l,
    isResolving: a
  } = (0, d.useStateFromStoresObject)([N.default], () => ({
    trialOffer: n ? N.default.getRelevantUserTrialOffer(t) : null,
    isResolving: !!n && N.default.isResolving(t)
  }), [n, t]), i = T.default.getCurrentUser(), r = (0, d.useStateFromStores)([T.default], () => null != l && (0, h.isPremium)(void 0 !== i && l.user_id === i.id ? i : T.default.getUser(l.user_id))), o = (0, d.useStateFromStores)([I.default], () => {
    var e;
    return r ? null === (e = I.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt : null
  }), {
    analyticsLocations: c
  } = (0, _.default)(E.default.SHARE_NITRO_EMBED), {
    enabled: m
  } = S.default.useExperiment({
    location: "f4ff1d_1"
  }, {
    autoTrackExposure: !0
  });
  return a ? (0, s.jsx)(f.ResponsiveLoadingEmbedTile, {
    isHorizontal: !u.isMobile
  }) : n && null != l && void 0 !== i ? (0, s.jsx)(R, {
    trialOffer: l,
    currentUser: i,
    recipientHasNitro: r,
    trialEndsAt: o,
    analyticsLocations: c,
    shouldShowBirthdayUX: m,
    ...e
  }) : (0, s.jsx)("div", {
    className: M.invalidWrapper,
    children: (0, s.jsx)("div", {
      className: M.invalid
    })
  })
}