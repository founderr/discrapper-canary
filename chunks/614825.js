"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("803997"),
  i = n.n(a),
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
  S = n("51144"),
  C = n("276444"),
  A = n("790368"),
  h = n("786397"),
  g = n("474936"),
  M = n("689938"),
  O = n("851282");
class R extends l.Component {
  renderTitle(e, t) {
    let {
      trialOffer: n
    } = this.props, s = I.default.getUser(n.user_id), l = null != s ? s.username : "???";
    return e && void 0 === n.redeemed_at ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({
      username: l
    }) : t ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_HEADER.format({
      username: l
    })
  }
  renderBody(e, t, n) {
    let {
      trialOffer: s
    } = this.props, l = I.default.getUser(s.referrer_id);
    return (e || t) && n && void 0 === s.redeemed_at ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_BODY : e && !n && void 0 === s.redeemed_at ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_BODY : M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY.format({
      username: null != l ? S.default.getName(l) : "???"
    })
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
    }, o = a.id !== l.user_id || (0, p.isPremium)(a) || !a.verified || (0, h.hasUserTrialOfferExpired)(l), u = this.renderExpirationDate(e, t, n);
    return r.disabled = o, (0, s.jsxs)("div", {
      className: O.buttonContainer,
      children: [(0, s.jsx)("div", {
        children: (0, s.jsx)(c.Button, {
          ...r,
          size: c.Button.Sizes.SMALL,
          onClick: () => {
            (0, T.default)({
              initialPlanId: null,
              subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: i,
              trialId: l.trial_id,
              referralTrialOfferId: l.id
            })
          },
          children: M.default.Messages.START_TRIAL
        })
      }), (0, s.jsx)("div", {
        className: O.metadata,
        children: u
      })]
    })
  }
  renderExpirationDate(e, t, n) {
    let {
      trialOffer: s,
      trialEndsAt: l
    } = this.props;
    if (void 0 !== s.redeemed_at && !n && null !== l) return M.default.Messages.TRIAL_EXPIRES.format({
      date: (0, N.dateFormat)(o()(l), "LL")
    });
    if (e || void 0 === s.expires_at) return null;
    let a = o()(s.expires_at);
    if (t) return M.default.Messages.EXPIRED_DATE.format({
      date: (0, N.dateFormat)(o()(a), "LL")
    });
    let i = a.diff(o()(), "h");
    if (i > 48) {
      let e = a.diff(o()(), "d");
      return M.default.Messages.EXPIRES_DAYS.format({
        numDays: e
      })
    }
    if (i > 1) return M.default.Messages.EXPIRES_HOURS.format({
      numHours: i
    });
    let r = a.diff(o()(), "minutes");
    return M.default.Messages.EXPIRES_MINUTES.format({
      numMinutes: r
    })
  }
  renderMedia(e) {
    return (0, s.jsx)("div", {
      className: i()({
        [O.referral]: !e,
        [O.birthdayReferral]: e
      })
    })
  }
  render() {
    let {
      trialOffer: e,
      currentUser: t,
      recipientHasNitro: n,
      shouldShowBirthdayUX: l
    } = this.props, a = (0, h.hasUserTrialOfferExpired)(e), r = t.id === e.referrer_id;
    return (0, s.jsxs)("div", {
      className: i()(O.tile, O.container),
      children: [(0, s.jsx)("div", {
        className: O.media,
        children: this.renderMedia(l)
      }), (0, s.jsxs)("div", {
        className: O.description,
        children: [(0, s.jsx)(c.H, {
          className: O.title,
          children: this.renderTitle(n, a)
        }), (0, s.jsx)("div", {
          className: O.tagline,
          children: this.renderBody(n, a, r)
        }), (0, s.jsx)("div", {
          className: O.actions,
          children: this.renderActions(n, a, r)
        })]
      })]
    })
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "handleStartTrial", s = (e, t) => {
      (0, T.default)({
        initialPlanId: null,
        subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
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
  } = (0, d.useStateFromStoresObject)([C.default], () => ({
    trialOffer: n ? C.default.getRelevantUserTrialOffer(t) : null,
    isResolving: !!n && C.default.isResolving(t)
  }), [n, t]), i = I.default.getCurrentUser(), r = (0, d.useStateFromStores)([I.default], () => null != l && (0, p.isPremium)(void 0 !== i && l.user_id === i.id ? i : I.default.getUser(l.user_id))), o = (0, d.useStateFromStores)([m.default], () => {
    var e;
    return r ? null === (e = m.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt : null
  }), {
    analyticsLocations: c
  } = (0, _.default)(f.default.SHARE_NITRO_EMBED), {
    enabled: T
  } = A.default.useExperiment({
    location: "f4ff1d_1"
  }, {
    autoTrackExposure: !0
  });
  return a ? (0, s.jsx)(E.ResponsiveLoadingEmbedTile, {
    isHorizontal: !u.isMobile
  }) : n && null != l && void 0 !== i ? (0, s.jsx)(R, {
    trialOffer: l,
    currentUser: i,
    recipientHasNitro: r,
    trialEndsAt: o,
    analyticsLocations: c,
    shouldShowBirthdayUX: T,
    ...e
  }) : (0, s.jsx)("div", {
    className: O.invalidWrapper,
    children: (0, s.jsx)("div", {
      className: O.invalid
    })
  })
}