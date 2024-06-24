t.d(s, {
  Z: function() {
    return D
  },
  r: function() {
    return p
  }
}), t(653041), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(920906),
  l = t(399606),
  r = t(481060),
  o = t(607070),
  c = t(158153),
  E = t(280942),
  d = t(314684),
  _ = t(209747),
  T = t(430824),
  S = t(267642),
  u = t(709054),
  I = t(357956),
  N = t(275909),
  A = t(300037),
  C = t(981631),
  O = t(474936),
  m = t(689938),
  h = t(307493);

function g(e) {
  let {
    guildTier: s,
    guildBoostSlot: t,
    showAltText: l,
    isCanceled: o,
    premiumSubscription: c
  } = e, E = i.useMemo(() => {
    if (o) return m.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
      date: c.currentPeriodEnd
    });
    let e = null != t.premiumGuildSubscription ? u.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
    return m.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_DURATION_SHORTENED.format({
      date: new Date(e)
    })
  }, [t, o, c]), d = i.useMemo(() => (function(e) {
    if (null == e || e === C.Eu4.NONE) return "";
    let s = [m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_EMOJI_SLOTS.format({
      numEmojiSlots: O.HO[e].limits.emoji
    }), m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STICKER_SLOTS.format({
      numStickerSlots: O.HO[e].limits.stickers
    }), m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_SOUNDBOARD_SLOTS.format({
      numSoundboardSlots: O.HO[e].limits.soundboardSounds
    }), m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STREAM_QUALITY.format({
      resolution: O.HO[e].limits.screenShareQualityResolution,
      framerate: O.HO[e].limits.screenShareQualityFramerate
    }), m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_AUDIO_QUALITY.format({
      bitrate: O.HO[e].limits.bitrate / 1e3
    }), m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_UPLOAD_SIZE_LIMIT.format({
      filesize: O.HO[e].limits.fileSize / 1024 / 1024
    }), m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VIDEO_STAGE_SEATS.format({
      numVideoStageSeats: O.HO[e].limits.stageVideoUsers
    }), m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_ANIMATED_GUILD_ICON, m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_INVITE_BACKGROUND];
    e >= C.Eu4.TIER_2 && (s.push(m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_BANNER), s.push(m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_CUSTOM_ROLE_ICONS)), e >= C.Eu4.TIER_3 && s.push(m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VANITY_URL);
    let t = s[Math.floor(Math.random() * s.length)];
    return m.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_TEMPLATE.format({
      perk: t
    })
  })(s), [s]), _ = (0, a.useTransition)(l, {
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
  return o || s === C.Eu4.NONE ? (0, n.jsx)("div", {
    className: h.boostDescriptionInnerContainer,
    children: (0, n.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: E
    })
  }) : _((e, s) => (0, n.jsx)(a.animated.div, {
    style: e,
    className: h.boostDescriptionInnerContainer,
    children: (0, n.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: s ? d : E
    })
  }))
}

function R(e) {
  let {
    guildTier: s,
    guildBoostSlot: t,
    premiumSubscription: a,
    hasCancelableGuildBoostSlot: c,
    showAltText: d,
    isLastGuildBoostSlot: _
  } = e, T = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), u = i.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), A = i.useMemo(() => null != u && u > new Date, [u]), C = (0, S.tl)(t);
  return (0, n.jsxs)("div", {
    className: h.boostContainer,
    children: [(0, n.jsxs)("div", {
      className: h.boostInnerContainer,
      children: [(0, n.jsx)(N.Z, {
        isCanceled: C,
        hasCooldown: A,
        useReducedMotion: T
      }), (0, n.jsx)("div", {
        className: h.boostDescriptionContainer,
        children: null != u && A && !C ? (0, n.jsx)(I.Z, {
          className: h.boostDescriptionInnerContainer,
          cooldown: u.getTime()
        }) : (0, n.jsx)(g, {
          guildTier: s,
          guildBoostSlot: t,
          showAltText: d,
          isCanceled: C,
          premiumSubscription: a
        })
      }), (0, n.jsx)(r.Popout, {
        renderPopout: function(e) {
          let {
            closePopout: s
          } = e;
          return (0, n.jsx)(E.Z, {
            onClose: s,
            guildBoostSlot: t,
            premiumSubscription: a,
            hasCancelableGuildBoostSlot: c
          })
        },
        position: "right",
        align: "center",
        children: e => (0, n.jsx)(r.Clickable, {
          ...e,
          "aria-label": m.Z.Messages.MORE_OPTIONS,
          className: h.boostSlotMenuIcon,
          children: (0, n.jsx)(r.MoreVerticalIcon, {
            size: "md",
            color: "currentColor"
          })
        })
      })]
    }), !_ && (0, n.jsx)("div", {
      className: h.boostContainerSeparator
    })]
  })
}

function M(e) {
  let {
    guildId: s,
    guildBoostSlotRecords: t,
    premiumSubscription: i,
    hasCancelableGuildBoostSlot: a,
    showAltText: r
  } = e, o = (0, l.e7)([T.Z], () => T.Z.getGuild(s), [s]);
  return (0, n.jsxs)("div", {
    className: h.appliedBoostContainer,
    children: [(0, n.jsx)(A.Z, {
      guildId: s,
      boostingVariant: !1
    }), t.map((e, s) => (0, n.jsx)(R, {
      guildTier: null == o ? void 0 : o.premiumTier,
      guildBoostSlot: e,
      premiumSubscription: i,
      hasCancelableGuildBoostSlot: a,
      showAltText: r,
      isLastGuildBoostSlot: s === t.length - 1
    }, e.id))]
  })
}

function x(e) {
  let {
    guildId: s,
    appliedGuildBoosts: t,
    premiumSubscription: i
  } = e, a = (0, l.e7)([T.Z], () => T.Z.getGuild(s), [s]), r = u.default.fromTimestamp(Date.now());
  if (t.forEach(e => {
      (null == r || 0 > u.default.compare(e.id, r)) && (r = e.id)
    }), null == r) return null;
  let o = _.Z.createFromServer({
    id: u.default.fromTimestamp(Date.now()),
    subscription_id: i.id,
    canceled: !1,
    premium_guild_subscription: {
      id: r,
      guild_id: s
    },
    cooldown_ends_at: null
  }, i);
  return (0, n.jsxs)("div", {
    className: h.appliedBoostContainer,
    children: [(0, n.jsx)(A.Z, {
      guildId: s,
      boostingVariant: !1
    }), t.map((e, s) => (0, n.jsx)(R, {
      guildTier: null == a ? void 0 : a.premiumTier,
      guildBoostSlot: o,
      premiumSubscription: i,
      hasCancelableGuildBoostSlot: !1,
      showAltText: !1,
      isLastGuildBoostSlot: s === t.length - 1
    }, s))]
  })
}

function p(e) {
  let {
    appliedGuildBoosts: s,
    premiumSubscription: t
  } = e, a = i.useMemo(() => {
    let e = {};
    return s.forEach(s => {
      let t = s.guildId;
      !(t in e) && (e[t] = []), e[t].push(s)
    }), e
  }, [s]);
  return null == t || 0 === s.length ? null : (0, n.jsxs)("div", {
    className: h.wrapper,
    children: [(0, n.jsx)("div", {
      className: h.container,
      children: u.default.keys(a).map(e => (0, n.jsx)(x, {
        guildId: e,
        premiumSubscription: t,
        appliedGuildBoosts: a[e]
      }, e))
    }), (0, n.jsx)("div", {
      className: h.mainSeparator
    })]
  })
}

function D(e) {
  let {
    guildBoostSlots: s,
    premiumSubscription: t
  } = e, [a, l] = i.useState(!1), r = (0, d.Vp)();
  i.useEffect(() => {
    let e = -1;
    return null != t && (e = setInterval(() => {
      l(e => !e)
    }, 3e3)), () => {
      clearInterval(e)
    }
  }, [t]);
  let {
    boostsByGuildId: o,
    numActiveGuildBoostSlots: E
  } = i.useMemo(() => {
    let e = 0,
      t = {};
    return Object.keys(s).forEach(n => {
      let i = s[n];
      if (!(0, S.tl)(i) && e++, null != i.premiumGuildSubscription) {
        let e = i.premiumGuildSubscription.guildId;
        !(e in t) && (t[e] = []), t[e].push(i)
      }
    }), {
      boostsByGuildId: t,
      numActiveGuildBoostSlots: e
    }
  }, [s]);
  if (null == t || 0 === Object.keys(o).length) return null;
  let _ = E > (0, c.G)(t, r);
  return (0, n.jsxs)("div", {
    className: h.wrapper,
    children: [(0, n.jsx)("div", {
      className: h.container,
      children: u.default.keys(o).map(e => (0, n.jsx)(M, {
        guildId: e,
        guildBoostSlotRecords: o[e],
        premiumSubscription: t,
        hasCancelableGuildBoostSlot: _,
        showAltText: a
      }, e))
    }), (0, n.jsx)("div", {
      className: h.mainSeparator
    })]
  })
}