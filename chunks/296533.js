"use strict";
s.r(t), s.d(t, {
  GuildBoostingSettingsPausedAppliedBoosts: function() {
    return D
  },
  default: function() {
    return x
  }
}), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("920906"),
  l = s("399606"),
  r = s("481060"),
  o = s("607070"),
  d = s("158153"),
  u = s("280942"),
  c = s("314684"),
  S = s("209747"),
  E = s("430824"),
  T = s("621113"),
  _ = s("267642"),
  I = s("709054"),
  N = s("357956"),
  g = s("275909"),
  f = s("300037"),
  m = s("981631"),
  A = s("474936"),
  C = s("689938"),
  O = s("441083");

function h(e) {
  let {
    guildTier: t,
    guildBoostSlot: s,
    showAltText: l,
    isCanceled: o,
    premiumSubscription: d
  } = e, u = n.useMemo(() => {
    if (o) return C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
      date: d.currentPeriodEnd
    });
    let e = null != s.premiumGuildSubscription ? I.default.extractTimestamp(s.premiumGuildSubscription.id) : 0;
    return C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_DURATION_SHORTENED.format({
      date: new Date(e)
    })
  }, [s, o, d]), c = n.useMemo(() => (function(e) {
    if (null == e || e === m.BoostedGuildTiers.NONE) return "";
    let t = [C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_EMOJI_SLOTS.format({
      numEmojiSlots: A.BoostedGuildFeatures[e].limits.emoji
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STICKER_SLOTS.format({
      numStickerSlots: A.BoostedGuildFeatures[e].limits.stickers
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_SOUNDBOARD_SLOTS.format({
      numSoundboardSlots: A.BoostedGuildFeatures[e].limits.soundboardSounds
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STREAM_QUALITY.format({
      resolution: A.BoostedGuildFeatures[e].limits.screenShareQualityResolution,
      framerate: A.BoostedGuildFeatures[e].limits.screenShareQualityFramerate
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_AUDIO_QUALITY.format({
      bitrate: A.BoostedGuildFeatures[e].limits.bitrate / 1e3
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_UPLOAD_SIZE_LIMIT.format({
      filesize: A.BoostedGuildFeatures[e].limits.fileSize / 1024 / 1024
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VIDEO_STAGE_SEATS.format({
      numVideoStageSeats: A.BoostedGuildFeatures[e].limits.stageVideoUsers
    }), C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_ANIMATED_GUILD_ICON, C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_INVITE_BACKGROUND];
    e >= m.BoostedGuildTiers.TIER_2 && (t.push(C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_BANNER), t.push(C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_CUSTOM_ROLE_ICONS)), e >= m.BoostedGuildTiers.TIER_3 && t.push(C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VANITY_URL);
    let s = t[Math.floor(Math.random() * t.length)];
    return C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_TEMPLATE.format({
      perk: s
    })
  })(t), [t]), S = (0, i.useTransition)(l, {
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
  return o || t === m.BoostedGuildTiers.NONE ? (0, a.jsx)("div", {
    className: O.boostDescriptionInnerContainer,
    children: (0, a.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: u
    })
  }) : S((e, t) => (0, a.jsx)(i.animated.div, {
    style: e,
    className: O.boostDescriptionInnerContainer,
    children: (0, a.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: t ? c : u
    })
  }))
}

function R(e) {
  let {
    guildTier: t,
    guildBoostSlot: s,
    premiumSubscription: i,
    hasCancelableGuildBoostSlot: d,
    showAltText: c,
    isLastGuildBoostSlot: S
  } = e, E = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), I = n.useMemo(() => null != s.cooldownEndsAt ? new Date(s.cooldownEndsAt) : null, [s]), f = n.useMemo(() => null != I && I > new Date, [I]), m = (0, _.isGuildBoostSlotCanceled)(s);
  return (0, a.jsxs)("div", {
    className: O.boostContainer,
    children: [(0, a.jsxs)("div", {
      className: O.boostInnerContainer,
      children: [(0, a.jsx)(g.default, {
        isCanceled: m,
        hasCooldown: f,
        useReducedMotion: E
      }), (0, a.jsx)("div", {
        className: O.boostDescriptionContainer,
        children: null != I && f && !m ? (0, a.jsx)(N.default, {
          className: O.boostDescriptionInnerContainer,
          cooldown: I.getTime()
        }) : (0, a.jsx)(h, {
          guildTier: t,
          guildBoostSlot: s,
          showAltText: c,
          isCanceled: m,
          premiumSubscription: i
        })
      }), (0, a.jsx)(r.Popout, {
        renderPopout: function(e) {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(u.default, {
            onClose: t,
            guildBoostSlot: s,
            premiumSubscription: i,
            hasCancelableGuildBoostSlot: d
          })
        },
        position: "right",
        align: "center",
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          "aria-label": C.default.Messages.MORE_OPTIONS,
          className: O.boostSlotMenuIcon,
          children: (0, a.jsx)(T.default, {})
        })
      })]
    }), !S && (0, a.jsx)("div", {
      className: O.boostContainerSeparator
    })]
  })
}

function p(e) {
  let {
    guildId: t,
    guildBoostSlotRecords: s,
    premiumSubscription: n,
    hasCancelableGuildBoostSlot: i,
    showAltText: r
  } = e, o = (0, l.useStateFromStores)([E.default], () => E.default.getGuild(t), [t]);
  return (0, a.jsxs)("div", {
    className: O.appliedBoostContainer,
    children: [(0, a.jsx)(f.default, {
      guildId: t,
      boostingVariant: !1
    }), s.map((e, t) => (0, a.jsx)(R, {
      guildTier: null == o ? void 0 : o.premiumTier,
      guildBoostSlot: e,
      premiumSubscription: n,
      hasCancelableGuildBoostSlot: i,
      showAltText: r,
      isLastGuildBoostSlot: t === s.length - 1
    }, e.id))]
  })
}

function M(e) {
  let {
    guildId: t,
    appliedGuildBoosts: s,
    premiumSubscription: n
  } = e, i = (0, l.useStateFromStores)([E.default], () => E.default.getGuild(t), [t]), r = I.default.fromTimestamp(Date.now());
  if (s.forEach(e => {
      (null == r || 0 > I.default.compare(e.id, r)) && (r = e.id)
    }), null == r) return null;
  let o = S.default.createFromServer({
    id: I.default.fromTimestamp(Date.now()),
    subscription_id: n.id,
    canceled: !1,
    premium_guild_subscription: {
      id: r,
      guild_id: t
    },
    cooldown_ends_at: null
  }, n);
  return (0, a.jsxs)("div", {
    className: O.appliedBoostContainer,
    children: [(0, a.jsx)(f.default, {
      guildId: t,
      boostingVariant: !1
    }), s.map((e, t) => (0, a.jsx)(R, {
      guildTier: null == i ? void 0 : i.premiumTier,
      guildBoostSlot: o,
      premiumSubscription: n,
      hasCancelableGuildBoostSlot: !1,
      showAltText: !1,
      isLastGuildBoostSlot: t === s.length - 1
    }, t))]
  })
}

function D(e) {
  let {
    appliedGuildBoosts: t,
    premiumSubscription: s
  } = e, i = n.useMemo(() => {
    let e = {};
    return t.forEach(t => {
      let s = t.guildId;
      !(s in e) && (e[s] = []), e[s].push(t)
    }), e
  }, [t]);
  return null == s || 0 === t.length ? null : (0, a.jsxs)("div", {
    className: O.wrapper,
    children: [(0, a.jsx)("div", {
      className: O.container,
      children: I.default.keys(i).map(e => (0, a.jsx)(M, {
        guildId: e,
        premiumSubscription: s,
        appliedGuildBoosts: i[e]
      }, e))
    }), (0, a.jsx)("div", {
      className: O.mainSeparator
    })]
  })
}

function x(e) {
  let {
    guildBoostSlots: t,
    premiumSubscription: s
  } = e, [i, l] = n.useState(!1), r = (0, c.useFreeBoostTenureRewardEntitlement)();
  n.useEffect(() => {
    let e = -1;
    return null != s && (e = setInterval(() => {
      l(e => !e)
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
    className: O.wrapper,
    children: [(0, a.jsx)("div", {
      className: O.container,
      children: I.default.keys(o).map(e => (0, a.jsx)(p, {
        guildId: e,
        guildBoostSlotRecords: o[e],
        premiumSubscription: s,
        hasCancelableGuildBoostSlot: S,
        showAltText: i
      }, e))
    }), (0, a.jsx)("div", {
      className: O.mainSeparator
    })]
  })
}