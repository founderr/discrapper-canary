n.d(t, {
  Z: function() {
    return v
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(913527),
  o = n.n(r),
  c = n(873546),
  u = n(442837),
  d = n(481060),
  E = n(568836),
  _ = n(100527),
  I = n(906732),
  T = n(963249),
  N = n(594174),
  m = n(78839),
  h = n(55935),
  C = n(63063),
  S = n(74538),
  A = n(276444),
  p = n(790368),
  g = n(786397),
  f = n(474936),
  O = n(981631),
  R = n(689938),
  M = n(713533);
class x extends i.Component {
  renderTitle(e, t, n) {
    let {
      trialOffer: s
    } = this.props, i = N.default.getUser(s.user_id), l = null != i ? i.username : "???", a = N.default.getUser(s.referrer_id), r = null != a ? a.username : "???";
    if (e && void 0 === s.redeemed_at) return R.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({
      username: l
    });
    if (t) return n ? R.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : R.Z.Messages.REFERRAL_PROGRAM_EMBED_TIRAL_EXPIRED.format({
      userName: r
    });
    return R.Z.Messages.REFERRAL_PROGRAM_EMBED_HEADER.format({
      senderUserName: r,
      recipientUserName: l
    })
  }
  renderBody(e, t, n) {
    let {
      trialOffer: s
    } = this.props;
    return e && !n && void 0 === s.redeemed_at ? R.Z.Messages.REFERRAL_PROGRAM_LEARN_MORE_ABOUT_SHARING.format({
      helpdeskArticle: C.Z.getArticleURL(O.BhN.REFERRAL_PROGRAM)
    }) : t ? null : R.Z.Messages.REFERRAL_PROGRAM_EMBED_BODY
  }
  renderActions(e, t, n) {
    let {
      trialOffer: i,
      currentUser: l,
      analyticsLocations: a
    } = this.props, r = {
      onClick: () => {
        this.handleStartTrial(i, a)
      },
      color: d.Button.Colors.BRAND
    }, o = l.id !== i.user_id || (0, S.I5)(l) || !l.verified || (0, g.B)(i), c = this.renderExpirationDate(e, t, n);
    return r.disabled = o, (0, s.jsxs)("div", {
      className: M.buttonContainer,
      children: [(0, s.jsx)("div", {
        children: (0, s.jsx)(d.Button, {
          ...r,
          size: d.Button.Sizes.SMALL,
          onClick: () => {
            (0, T.Z)({
              initialPlanId: null,
              subscriptionTier: f.Si.TIER_2,
              analyticsLocations: a,
              trialId: i.trial_id,
              referralTrialOfferId: i.id
            })
          },
          children: R.Z.Messages.START_TRIAL
        })
      }), (0, s.jsx)("div", {
        className: M.metadata,
        children: c
      })]
    })
  }
  renderExpirationDate(e, t, n) {
    let {
      trialOffer: s,
      trialEndsAt: i
    } = this.props;
    if (void 0 !== s.redeemed_at && !n && null !== i) return R.Z.Messages.TRIAL_EXPIRES.format({
      date: (0, h.vc)(o()(i), "LL")
    });
    if (e || void 0 === s.expires_at) return null;
    let l = o()(s.expires_at);
    if (t) return R.Z.Messages.EXPIRED_DATE.format({
      date: (0, h.vc)(o()(l), "LL")
    });
    let a = l.diff(o()(), "h");
    if (a > 48) {
      let e = l.diff(o()(), "d");
      return R.Z.Messages.EXPIRES_DAYS.format({
        numDays: e
      })
    }
    if (a > 1) return R.Z.Messages.EXPIRES_HOURS.format({
      numHours: a
    });
    let r = l.diff(o()(), "minutes");
    return R.Z.Messages.EXPIRES_MINUTES.format({
      numMinutes: r
    })
  }
  renderMedia(e) {
    return (0, s.jsx)("div", {
      className: a()({
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
      shouldShowBirthdayUX: i
    } = this.props, l = (0, g.B)(e), r = t.id === e.referrer_id;
    return (0, s.jsxs)("div", {
      className: a()(M.tile, M.container),
      children: [(0, s.jsx)("div", {
        className: M.media,
        children: this.renderMedia(i)
      }), (0, s.jsxs)("div", {
        className: M.description,
        children: [(0, s.jsx)(d.H, {
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
      (0, T.Z)({
        initialPlanId: null,
        subscriptionTier: f.Si.TIER_2,
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
    trialOffer: i,
    isResolving: l
  } = (0, u.cj)([A.Z], () => ({
    trialOffer: n ? A.Z.getRelevantUserTrialOffer(t) : null,
    isResolving: !!n && A.Z.isResolving(t)
  }), [n, t]), a = N.default.getCurrentUser(), r = (0, u.e7)([N.default], () => null != i && (0, S.I5)(void 0 !== a && i.user_id === a.id ? a : N.default.getUser(i.user_id))), o = (0, u.e7)([m.ZP], () => {
    var e;
    return r ? null === (e = m.ZP.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt : null
  }), {
    analyticsLocations: d
  } = (0, I.ZP)(_.Z.SHARE_NITRO_EMBED), {
    enabled: T
  } = p.Z.useExperiment({
    location: "f4ff1d_1"
  }, {
    autoTrackExposure: !0
  });
  return l ? (0, s.jsx)(E.OR, {
    isHorizontal: !c.tq
  }) : n && null != i && void 0 !== a ? (0, s.jsx)(x, {
    trialOffer: i,
    currentUser: a,
    recipientHasNitro: r,
    trialEndsAt: o,
    analyticsLocations: d,
    shouldShowBirthdayUX: T,
    ...e
  }) : (0, s.jsx)("div", {
    className: M.invalidWrapper,
    children: (0, s.jsx)("div", {
      className: M.invalid
    })
  })
}