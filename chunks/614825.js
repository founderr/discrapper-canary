"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
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
  S = n("51144"),
  C = n("276444"),
  A = n("790368"),
  h = n("786397"),
  g = n("474936"),
  M = n("689938"),
  O = n("851282");
class R extends a.Component {
  renderTitle(e, t) {
    let {
      trialOffer: n
    } = this.props, s = I.default.getUser(n.user_id), a = null != s ? s.username : "???";
    return e && void 0 === n.redeemed_at ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({
      username: a
    }) : t ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_HEADER.format({
      username: a
    })
  }
  renderBody(e, t, n) {
    let {
      trialOffer: s
    } = this.props, a = I.default.getUser(s.referrer_id);
    return (e || t) && n && void 0 === s.redeemed_at ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_BODY : e && !n && void 0 === s.redeemed_at ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_BODY : M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY.format({
      username: null != a ? S.default.getName(a) : "???"
    })
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
    }, o = l.id !== a.user_id || (0, p.isPremium)(l) || !l.verified || (0, h.hasUserTrialOfferExpired)(a), u = this.renderExpirationDate(e, t, n);
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
              trialId: a.trial_id,
              referralTrialOfferId: a.id
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
      trialEndsAt: a
    } = this.props;
    if (void 0 !== s.redeemed_at && !n && null !== a) return M.default.Messages.TRIAL_EXPIRES.format({
      date: (0, N.dateFormat)(o()(a), "LL")
    });
    if (e || void 0 === s.expires_at) return null;
    let l = o()(s.expires_at);
    if (t) return M.default.Messages.EXPIRED_DATE.format({
      date: (0, N.dateFormat)(o()(l), "LL")
    });
    let i = l.diff(o()(), "h");
    if (i > 48) {
      let e = l.diff(o()(), "d");
      return M.default.Messages.EXPIRES_DAYS.format({
        numDays: e
      })
    }
    if (i > 1) return M.default.Messages.EXPIRES_HOURS.format({
      numHours: i
    });
    let r = l.diff(o()(), "minutes");
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
      shouldShowBirthdayUX: a
    } = this.props, l = (0, h.hasUserTrialOfferExpired)(e), r = t.id === e.referrer_id;
    return (0, s.jsxs)("div", {
      className: i()(O.tile, O.container),
      children: [(0, s.jsx)("div", {
        className: O.media,
        children: this.renderMedia(a)
      }), (0, s.jsxs)("div", {
        className: O.description,
        children: [(0, s.jsx)(c.H, {
          className: O.title,
          children: this.renderTitle(n, l)
        }), (0, s.jsx)("div", {
          className: O.tagline,
          children: this.renderBody(n, l, r)
        }), (0, s.jsx)("div", {
          className: O.actions,
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

function L(e) {
  let {
    userTrialOfferId: t,
    canRenderReferralEmbed: n
  } = e, {
    trialOffer: a,
    isResolving: l
  } = (0, d.useStateFromStoresObject)([C.default], () => ({
    trialOffer: n ? C.default.getRelevantUserTrialOffer(t) : null,
    isResolving: !!n && C.default.isResolving(t)
  }), [n, t]), i = I.default.getCurrentUser(), r = (0, d.useStateFromStores)([I.default], () => null != a && (0, p.isPremium)(void 0 !== i && a.user_id === i.id ? i : I.default.getUser(a.user_id))), o = (0, d.useStateFromStores)([m.default], () => {
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
  return l ? (0, s.jsx)(E.ResponsiveLoadingEmbedTile, {
    isHorizontal: !u.isMobile
  }) : n && null != a && void 0 !== i ? (0, s.jsx)(R, {
    trialOffer: a,
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