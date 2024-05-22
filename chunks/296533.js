"use strict";
s.r(t), s.d(t, {
  GuildBoostingSettingsPausedAppliedBoosts: function() {
    return M
  },
  default: function() {
    return v
  }
}), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("920906"),
  i = s("399606"),
  r = s("481060"),
  o = s("607070"),
  d = s("158153"),
  u = s("280942"),
  c = s("314684"),
  S = s("209747"),
  E = s("430824"),
  T = s("621113"),
  _ = s("267642"),
  f = s("709054"),
  m = s("357956"),
  g = s("275909"),
  I = s("300037"),
  N = s("981631"),
  h = s("474936"),
  C = s("689938"),
  p = s("441083");

function A(e) {
  let {
    guildTier: t,
    guildBoostSlot: s,
    showAltText: i,
    isCanceled: o,
    premiumSubscription: d
  } = e, u = n.useMemo(() => {
    if (o) return C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
      date: d.currentPeriodEnd
    });
    let e = null != s.premiumGuildSubscription ? f.default.extractTimestamp(s.premiumGuildSubscription.id) : 0;
    return C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_DURATION_SHORTENED.format({
      date: new Date(e)
    })
  }, [s, o, d]), c = n.useMemo(() => (function(e) {
    if (null == e || e === N.BoostedGuildTiers.NONE) return "";
    let t = [C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_EMOJI_SLOTS.format({
      numEmojiSlots: h.BoostedGuildFeatures[e].limits.emoji
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STICKER_SLOTS.format({
      numStickerSlots: h.BoostedGuildFeatures[e].limits.stickers
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_SOUNDBOARD_SLOTS.format({
      numSoundboardSlots: h.BoostedGuildFeatures[e].limits.soundboardSounds
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STREAM_QUALITY.format({
      resolution: h.BoostedGuildFeatures[e].limits.screenShareQualityResolution,
      framerate: h.BoostedGuildFeatures[e].limits.screenShareQualityFramerate
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_AUDIO_QUALITY.format({
      bitrate: h.BoostedGuildFeatures[e].limits.bitrate / 1e3
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_UPLOAD_SIZE_LIMIT.format({
      filesize: h.BoostedGuildFeatures[e].limits.fileSize / 1024 / 1024
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VIDEO_STAGE_SEATS.format({
      numVideoStageSeats: h.BoostedGuildFeatures[e].limits.stageVideoUsers
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_ANIMATED_GUILD_ICON, C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_INVITE_BACKGROUND];
    e >= N.BoostedGuildTiers.TIER_2 && (t.push(C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_BANNER), t.push(C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_CUSTOM_ROLE_ICONS)), e >= N.BoostedGuildTiers.TIER_3 && t.push(C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VANITY_URL);
    let s = t[Math.floor(Math.random() * t.length)];
    return C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_TEMPLATE.format({
      perk: s
    })
  })(t), [t]), S = (0, l.useTransition)(i, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  return o || t === N.BoostedGuildTiers.NONE ? (0, a.jsx)("div", {
    className: p.boostDescriptionInnerContainer,
    children: (0, a.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: u
    })
  }) : S((e, t) => (0, a.jsx)(l.animated.div, {
    style: e,
    className: p.boostDescriptionInnerContainer,
    children: (0, a.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: t ? c : u
    })
  }))
}

function O(e) {
  let {
    guildTier: t,
    guildBoostSlot: s,
    premiumSubscription: l,
    hasCancelableGuildBoostSlot: d,
    showAltText: c,
    isLastGuildBoostSlot: S
  } = e, E = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), f = n.useMemo(() => null != s.cooldownEndsAt ? new Date(s.cooldownEndsAt) : null, [s]), I = n.useMemo(() => null != f && f > new Date, [f]), N = (0, _.isGuildBoostSlotCanceled)(s);
  return (0, a.jsxs)("div", {
    className: p.boostContainer,
    children: [(0, a.jsxs)("div", {
      className: p.boostInnerContainer,
      children: [(0, a.jsx)(g.default, {
        isCanceled: N,
        hasCooldown: I,
        useReducedMotion: E
      }), (0, a.jsx)("div", {
        className: p.boostDescriptionContainer,
        children: null != f && I && !N ? (0, a.jsx)(m.default, {
          className: p.boostDescriptionInnerContainer,
          cooldown: f.getTime()
        }) : (0, a.jsx)(A, {
          guildTier: t,
          guildBoostSlot: s,
          showAltText: c,
          isCanceled: N,
          premiumSubscription: l
        })
      }), (0, a.jsx)(r.Popout, {
        renderPopout: function(e) {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(u.default, {
            onClose: t,
            guildBoostSlot: s,
            premiumSubscription: l,
            hasCancelableGuildBoostSlot: d
          })
        },
        position: "right",
        align: "center",
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          "aria-label": C.default.Messages.MORE_OPTIONS,
          className: p.boostSlotMenuIcon,
          children: (0, a.jsx)(T.default, {})
        })
      })]
    }), !S && (0, a.jsx)("div", {
      className: p.boostContainerSeparator
    })]
  })
}

function x(e) {
  let {
    guildId: t,
    guildBoostSlotRecords: s,
    premiumSubscription: n,
    hasCancelableGuildBoostSlot: l,
    showAltText: r
  } = e, o = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(t), [t]);
  return (0, a.jsxs)("div", {
    className: p.appliedBoostContainer,
    children: [(0, a.jsx)(I.default, {
      guildId: t,
      boostingVariant: !1
    }), s.map((e, t) => (0, a.jsx)(O, {
      guildTier: null == o ? void 0 : o.premiumTier,
      guildBoostSlot: e,
      premiumSubscription: n,
      hasCancelableGuildBoostSlot: l,
      showAltText: r,
      isLastGuildBoostSlot: t === s.length - 1
    }, e.id))]
  })
}

function R(e) {
  let {
    guildId: t,
    appliedGuildBoosts: s,
    premiumSubscription: n
  } = e, l = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(t), [t]), r = f.default.fromTimestamp(Date.now());
  if (s.forEach(e => {
      (null == r || 0 > f.default.compare(e.id, r)) && (r = e.id)
    }), null == r) return null;
  let o = S.default.createFromServer({
    id: f.default.fromTimestamp(Date.now()),
    subscription_id: n.id,
    canceled: !1,
    premium_guild_subscription: {
      id: r,
      guild_id: t
    },
    cooldown_ends_at: null
  }, n);
  return (0, a.jsxs)("div", {
    className: p.appliedBoostContainer,
    children: [(0, a.jsx)(I.default, {
      guildId: t,
      boostingVariant: !1
    }), s.map((e, t) => (0, a.jsx)(O, {
      guildTier: null == l ? void 0 : l.premiumTier,
      guildBoostSlot: o,
      premiumSubscription: n,
      hasCancelableGuildBoostSlot: !1,
      showAltText: !1,
      isLastGuildBoostSlot: t === s.length - 1
    }, t))]
  })
}

function M(e) {
  let {
    appliedGuildBoosts: t,
    premiumSubscription: s
  } = e, l = n.useMemo(() => {
    let e = {};
    return t.forEach(t => {
      let s = t.guildId;
      !(s in e) && (e[s] = []), e[s].push(t)
    }), e
  }, [t]);
  return null == s || 0 === t.length ? null : (0, a.jsxs)("div", {
    className: p.wrapper,
    children: [(0, a.jsx)("div", {
      className: p.container,
      children: f.default.keys(l).map(e => (0, a.jsx)(R, {
        guildId: e,
        premiumSubscription: s,
        appliedGuildBoosts: l[e]
      }, e))
    }), (0, a.jsx)("div", {
      className: p.mainSeparator
    })]
  })
}

function v(e) {
  let {
    guildBoostSlots: t,
    premiumSubscription: s
  } = e, [l, i] = n.useState(!1), r = (0, c.useFreeBoostTenureRewardEntitlement)();
  n.useEffect(() => {
    let e = -1;
    return null != s && (e = setInterval(() => {
      i(e => !e)
    }, 3e3)), () => {
      clearInterval(e)
    }
  }, [s]);
  let {
    boostsByGuildId: o,
    numActiveGuildBoostSlots: u
  } = n.useMemo(() => {
    let e = 0,
      s = {};
    return Object.keys(t).forEach(a => {
      let n = t[a];
      if (!(0, _.isGuildBoostSlotCanceled)(n) && e++, null != n.premiumGuildSubscription) {
        let e = n.premiumGuildSubscription.guildId;
        !(e in s) && (s[e] = []), s[e].push(n)
      }
    }), {
      boostsByGuildId: s,
      numActiveGuildBoostSlots: e
    }
  }, [t]);
  if (null == s || 0 === Object.keys(o).length) return null;
  let S = u > (0, d.getNumIncludedAndTenureRewardPremiumGuildSubscriptionSlots)(s, r);
  return (0, a.jsxs)("div", {
    className: p.wrapper,
    children: [(0, a.jsx)("div", {
      className: p.container,
      children: f.default.keys(o).map(e => (0, a.jsx)(x, {
        guildId: e,
        guildBoostSlotRecords: o[e],
        premiumSubscription: s,
        hasCancelableGuildBoostSlot: S,
        showAltText: l
      }, e))
    }), (0, a.jsx)("div", {
      className: p.mainSeparator
    })]
  })
}