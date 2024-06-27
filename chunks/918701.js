"use strict";
let i;
n.d(t, {
  $H: function() {
    return ed
  },
  $J: function() {
    return eC
  },
  AV: function() {
    return X
  },
  Bz: function() {
    return eL
  },
  CE: function() {
    return U
  },
  FE: function() {
    return ef
  },
  GN: function() {
    return Q
  },
  Gh: function() {
    return eR
  },
  Gs: function() {
    return j
  },
  Jg: function() {
    return er
  },
  Kr: function() {
    return ee
  },
  Mi: function() {
    return z
  },
  Nj: function() {
    return ec
  },
  Qe: function() {
    return M
  },
  Rs: function() {
    return W
  },
  U3: function() {
    return G
  },
  V$: function() {
    return eM
  },
  WP: function() {
    return w
  },
  Xh: function() {
    return k
  },
  Xv: function() {
    return et
  },
  _: function() {
    return K
  },
  dl: function() {
    return eE
  },
  f2: function() {
    return eS
  },
  gI: function() {
    return eD
  },
  gO: function() {
    return Z
  },
  il: function() {
    return ep
  },
  j8: function() {
    return H
  },
  lQ: function() {
    return y
  },
  mN: function() {
    return el
  },
  nP: function() {
    return es
  },
  o9: function() {
    return eT
  },
  oo: function() {
    return eu
  },
  pG: function() {
    return eh
  },
  ph: function() {
    return F
  },
  t2: function() {
    return q
  },
  uo: function() {
    return Y
  },
  vR: function() {
    return en
  },
  xn: function() {
    return $
  },
  yI: function() {
    return B
  },
  ys: function() {
    return ei
  },
  zE: function() {
    return J
  },
  zK: function() {
    return eI
  },
  zi: function() {
    return b
  }
}), n(627341), n(47120), n(411104);
var r = n(164369),
  s = n(278074),
  o = n(754700),
  a = n(551910),
  l = n(887003),
  u = n(742635),
  _ = n(570140),
  c = n(230711),
  d = n(782568);
n(597688);
var E = n(231757),
  I = n(572004),
  T = n(70956),
  h = n(630388),
  f = n(823379),
  S = n(49012),
  A = n(960048),
  N = n(617136),
  m = n(687744),
  O = n(497505),
  R = n(242755),
  p = n(566078),
  g = n(312046),
  C = n(46140),
  v = n(981631),
  L = n(689938);
let D = "https://cdn.discordapp.com/assets/quests/";

function M(e) {
  try {
    return (0, s.EQ)(e.config).with({
      config_version: 1
    }, () => !0).with({
      config_version: 2
    }, () => !0).exhaustive()
  } catch (n) {
    var t;
    return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1
  }
}

function P(e, t) {
  return null != p.r.build(t.config).application.ids.find(t => t === e)
}

function y(e, t) {
  let n;
  for (let [i, r] of e)
    if (P(t, r) && !b(r)) {
      n = r;
      break
    } return n
}

function U(e, t) {
  return Array.from(e.values()).find(e => P(t, e) && !b(e) && ec({
    quest: e
  }))
}

function b(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function G(e) {
  var t;
  return {
    userId: e.user_id,
    questId: e.quest_id,
    enrolledAt: e.enrolled_at,
    completedAt: e.completed_at,
    claimedAt: e.claimed_at,
    claimedTier: null !== (t = e.claimed_tier) && void 0 !== t ? t : null,
    lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
    streamProgressSeconds: e.stream_progress_seconds,
    dismissedQuestContent: e.dismissed_quest_content,
    progress: function(e) {
      let t = {};
      for (let [i, r] of Object.entries(e)) {
        var n;
        t[i] = {
          eventName: r.event_name,
          value: r.value,
          updatedAt: r.updated_at,
          completedAt: r.completed_at,
          heartbeat: null == (n = r.heartbeat) ? null : {
            lastBeatAt: n.last_beat_at,
            expiresAt: n.expires_at
          }
        }
      }
      return t
    }(e.progress)
  }
}

function w(e) {
  var t;
  return {
    id: e.id,
    preview: e.preview,
    config: (t = e.config, (0, s.EQ)(t).with({
      config_version: 1
    }, e => {
      var t, n, i;
      return {
        configVersion: 1,
        expiresAt: e.expires_at,
        streamDurationRequirementMinutes: e.stream_duration_requirement_minutes,
        gameTitle: e.game_title,
        getGameLink: e.get_game_link,
        applicationId: e.application_id,
        applicationName: e.application_name,
        messages: {
          questName: (t = e.messages).quest_name,
          rewardName: t.reward_name,
          rewardNameWithArticle: t.reward_name_with_article,
          rewardRedemptionInstructionsByPlatform: function(e) {
            let t = {};
            for (let n in e) {
              let i = parseInt(n);
              O.xw.has(i) && (t[i] = e[n])
            }
            return t
          }(t.reward_redemption_instructions_by_platform),
          gameTitle: t.game_title,
          gamePublisher: t.game_publisher
        },
        colors: {
          primary: (n = e.colors).primary,
          secondary: n.secondary
        },
        rewardsConfig: (0, m.Q)(e.rewards_config),
        rewardCodeExpiresAt: e.reward_code_expires_at,
        rewardCodePlatforms: e.reward_code_platforms.filter(e => O.xw.has(e)),
        assets: {
          rewardTile: (i = e.assets).reward_tile,
          hero: i.hero,
          questBarHero: i.quest_bar_hero,
          gameTile: i.game_tile,
          logotype: i.logotype
        },
        inGameQuestConfig: null,
        variants: e.variants,
        supplementaryApplicationIds: e.supplementary_application_ids
      }
    }).with({
      config_version: 2
    }, e => (0, g.Q)(e)).exhaustive()),
    userStatus: null == e.user_status ? null : G(e.user_status),
    targetedContent: e.targeted_content
  }
}

function B(e) {
  var t;
  return {
    userId: e.user_id,
    questId: e.quest_id,
    code: e.code,
    platform: e.platform,
    claimedAt: e.claimed_at,
    tier: null !== (t = e.tier) && void 0 !== t ? t : null
  }
}

function x(e) {
  return {
    skuId: e.sku_id,
    tenantMetadata: function(e) {
      if ((null == e ? void 0 : e.quest_rewards) == null) return null;
      let t = e.quest_rewards;
      switch (t.reward.tag) {
        case l.w.IN_GAME:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag
              }
            }
          };
        case l.w.REWARD_CODE:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag,
                rewardCode: B(t.reward.reward_code)
              }
            }
          }
      }
    }(e.tenant_metadata)
  }
}

function k(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(x),
    errors: e.errors
  }
}

function V(e, t) {
  return e.startsWith("data") ? e : t
}
let Z = e => {
    var t, n;
    let i = eT({
        quest: e,
        idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
      }),
      r = p.r.build(e.config).defaultRewardAsset,
      s = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : r;
    return {
      name: s,
      url: V(s, "".concat(D).concat(e.id, "/").concat(s))
    }
  },
  H = e => V(e.config.assets.hero, "".concat(D).concat(e.id, "/").concat(e.config.assets.hero)),
  F = e => V(e.config.assets.questBarHero, "".concat(D).concat(e.id, "/").concat(e.config.assets.questBarHero)),
  Y = (e, t) => V(e.config.assets.gameTile, "".concat(D).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile)),
  j = (e, t) => V(e.config.assets.logotype, "".concat(D).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)),
  W = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function K(e, t) {
  for (let [n, i] of e)
    if (!b(i) && i.targetedContent.includes(t)) return i;
  return null
}

function z(e, t) {
  return e.targetedContent.includes(t)
}
let q = e => {
  switch (e) {
    case O.y$.XBOX:
      return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case O.y$.PLAYSTATION:
      return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case O.y$.SWITCH:
      return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case O.y$.PC:
      return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case O.y$.CROSS_PLATFORM:
      return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function X(e) {
  var t, n;
  let {
    quest: i,
    taskDetails: r
  } = e;
  if ((null === (t = i.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return L.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = i.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let {
      percentComplete: e
    } = r;
    return e >= .75 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : e >= .45 && e <= .55 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : e > 0 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : L.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return L.Z.Messages.QUESTS_TITLE.format({
    questName: i.config.messages.questName
  })
}

function Q(e) {
  return e === O.jn.QUEST_BAR_V2 || Object.keys(C.a_).includes(O.jn[e])
}

function J(e, t) {
  if (!Q(t)) return !1;
  let n = O.jn[t];
  return (0, h.yE)(e.dismissedQuestContent, C.a_[n])
}

function $(e) {
  return (0, s.EQ)(e).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.tag === l.w.COLLECTIBLE);
    return (null == t ? void 0 : t.tag) === l.w.COLLECTIBLE ? t : null
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.type === l.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === l.w.COLLECTIBLE ? t : null
  }).exhaustive()
}

function ee(e) {
  let t = $(e);
  if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
  let n = {
    days: 0,
    weeks: 0,
    months: 0,
    years: 0,
    ...(0, r.Z)({
      start: new Date(e.expiresAt),
      end: new Date(t.expiresAt)
    })
  };
  return (n.days >= 7 && (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7), n.years > 0) ? L.Z.Messages.DURATION_YEARS.format({
    years: n.years
  }) : n.months > 0 ? L.Z.Messages.DURATION_MONTHS.format({
    months: n.months
  }) : n.weeks > 0 ? L.Z.Messages.DURATION_WEEKS.format({
    weeks: n.weeks
  }) : L.Z.Messages.DURATION_DAYS.format({
    days: n.days
  })
}

function et(e) {
  return null != $(e)
}

function en(e, t) {
  return e.targetedContent.includes(t)
}

function ei(e, t) {
  A.Z.captureException(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "quests"
    }
  })
}

function er(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    if (null == n.application_id) continue;
    let t = y(e, n.application_id);
    if (null != t) return t
  }
  return null
}

function es(e) {
  return e.endsWith(".webm") || e.endsWith(".mp4") || e.startsWith("data:video")
}
let eo = /\.([a-zA-Z0-9]+)$/,
  ea = /^data:video\/([a-zA-Z0-9]+)\;/;

function el(e) {
  var t, n, i, r, s;
  switch (null !== (s = null === (n = eo.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : null === (r = ea.exec(e)) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.toLowerCase()) {
    case "webm":
      return "video/webm";
    case "mp4":
      return "video/mp4";
    default:
      throw Error("Unexpected file extension: ".concat(e.substring(0, 15)))
  }
}

function eu(e) {
  let {
    quest: {
      config: t
    }
  } = e;
  return (0, s.EQ)(t).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === a.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.tag === l.w.REWARD_CODE)
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === a.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.type === l.w.REWARD_CODE)
  }).exhaustive()
}
let e_ = e => (0, s.EQ)(e.taskConfig).with({
  type: u.L.FIRST_PARTY
}, e => null != e.tasks[o.X.PLAY_ON_DESKTOP]).otherwise(() => !1);

function ec(e) {
  let {
    quest: t
  } = e;
  return (0, s.EQ)(t.config).with({
    configVersion: 1
  }, e => eI(t, C.S7.PLAYTIME_TASK)).with({
    configVersion: 2
  }, e => eI(t, C.S7.PLAYTIME_TASK) || e_(e)).exhaustive()
}

function ed(e) {
  let {
    quest: t,
    location: n
  } = e;
  return null != t && ec({
    quest: t
  }) && (0, R.J)({
    location: n
  })
}

function eE(e) {
  return !eI(e, C.S7.IN_HOUSE_CONSOLE_QUEST)
}

function eI(e, t) {
  return p.r.build(e.config).features.has(t)
}

function eT(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let i = t.config.rewardsConfig.rewards[n];
  return (0, s.EQ)(i).with({
    tag: l.w.REWARD_CODE
  }, e => e).with({
    type: l.w.REWARD_CODE
  }, e => e).otherwise(() => null)
}

function eh(e) {
  var t;
  let {
    quest: n,
    location: i,
    useV2Variants: r = !1,
    taskDetails: s
  } = e, o = n.config.messages.gameTitle, a = p.r.build(n.config).defaultReward.messages.nameWithArticle, {
    targetMinutes: l
  } = null != s ? s : ep({
    quest: n,
    location: i
  }), u = eI(n, C.S7.IN_HOUSE_CONSOLE_QUEST), _ = ee(n.config), c = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  if (u && null != _) return c ? L.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
    reward: a,
    duration: _
  }) : L.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE.format({
    targetMinutes: l,
    rewardNameWithArticle: a,
    duration: _
  });
  if (eC(n)) return null != _ ? L.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: o,
    targetMinutes: l,
    rewardNameWithArticle: a,
    duration: _
  }) : L.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
    gameTitle: o,
    targetMinutes: l,
    rewardNameWithArticle: a
  });
  if (ed({
      quest: n,
      location: i
    })) return null != _ ? L.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: o,
    streamingDurationRequirement: l,
    rewardNameWithArticle: a,
    duration: _
  }) : L.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: o,
    questReward: a,
    streamingDurationRequirement: l
  });
  else if (eu({
      quest: n
    })) return (r ? L.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : L.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
    gameTitle: o,
    streamingDurationRequirement: l
  });
  return null != _ ? L.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: o,
    streamingDurationRequirement: l,
    questReward: a,
    duration: _
  }) : (r ? L.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : L.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
    gameTitle: o,
    questReward: a,
    streamingDurationRequirement: l
  })
}

function ef(e, t) {
  let n = p.r.build(e.config).application.link;
  (0, S.q)({
    href: n,
    onConfirm: () => {
      (0, N._3)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position
      }), (0, d.Z)(n)
    }
  })
}
let eS = (e, t) => {
    (0, N._3)({
      questId: e,
      questContent: t.content,
      questContentCTA: t.ctaContent,
      questContentPosition: t.position
    }), (0, I.JG)(W(e))
  },
  eA = (e, t) => e > 0 ? Math.min(t / e, 1) : 0,
  eN = e => {
    var t, n, i, r, s, a, l, _;
    let {
      quest: c,
      taskType: d
    } = e, E = c.config.taskConfig;
    if (E.type !== u.L.FIRST_PARTY) throw Error("Cannot retrieve task details for task config with type ".concat(E.type, "!"));
    let I = null != d ? d : null === (t = Object.values(E.tasks)[0]) || void 0 === t ? void 0 : t.eventName,
      h = null !== (a = E.tasks[I]) && void 0 !== a ? a : E.tasks[o.X.STREAM_ON_DESKTOP];
    if (null == h) throw Error("No task with type ".concat(d, " found for quest ").concat(c.id, "!"));
    let f = h.target,
      S = null !== (_ = null !== (l = null === (r = c.userStatus) || void 0 === r ? void 0 : null === (i = r.progress) || void 0 === i ? void 0 : null === (n = i[I]) || void 0 === n ? void 0 : n.value) && void 0 !== l ? l : null === (s = c.userStatus) || void 0 === s ? void 0 : s.streamProgressSeconds) && void 0 !== _ ? _ : 0;
    return {
      progressSeconds: S,
      targetSeconds: f,
      targetMinutes: Math.round(f / T.Z.Seconds.MINUTE),
      percentComplete: eA(f, S),
      taskType: I
    }
  },
  em = e => o.T.ALL.has(e) ? e : null,
  eO = e => {
    var t, n;
    let {
      quest: i,
      consoleOnly: r
    } = e;
    for (let e of Object.values(null !== (n = null === (t = i.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {}).sort((e, t) => (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null && e.updatedAt > t.updatedAt ? -1 : 1).filter(f.lm)) {
      let t = em(e.eventName);
      if (null != t) {
        if (!0 !== r || o.T.CONSOLE.has(t)) return eN({
          quest: i,
          taskType: t
        })
      }
    }
    return eN({
      quest: i
    })
  },
  eR = e => (0, s.EQ)(e).with({
    config: {
      configVersion: 1
    }
  }, () => null).with({
    config: {
      configVersion: 2
    }
  }, e => eg(e) ? eO({
    quest: e,
    consoleOnly: !0
  }) : null).exhaustive(),
  ep = e => {
    let {
      quest: t,
      location: n
    } = e;
    return (0, s.EQ)(t).with({
      config: {
        configVersion: 1
      }
    }, e => {
      var t, n;
      let i = null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== n ? n : 0,
        r = Math.round(e.config.streamDurationRequirementMinutes * T.Z.Seconds.MINUTE);
      return {
        progressSeconds: i,
        targetSeconds: r,
        targetMinutes: e.config.streamDurationRequirementMinutes,
        percentComplete: eA(r, i),
        taskType: o.X.STREAM_ON_DESKTOP
      }
    }).with({
      config: {
        configVersion: 2
      }
    }, e => e.config.taskConfig.type !== u.L.FIRST_PARTY ? {
      progressSeconds: 0,
      targetSeconds: 1,
      targetMinutes: 1,
      percentComplete: 0,
      taskType: o.X.STREAM_ON_DESKTOP
    } : eg(e) ? eO({
      quest: e
    }) : ed({
      quest: e,
      location: n
    }) ? eN({
      quest: e,
      taskType: o.X.PLAY_ON_DESKTOP
    }) : eN({
      quest: e,
      taskType: o.X.STREAM_ON_DESKTOP
    })).exhaustive()
  };
let eg = (i = [o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION], e => i.some(t => null != e.config.taskConfig.tasks[t])),
  eC = e => (0, s.EQ)(e).with({
    config: {
      configVersion: 1
    }
  }, () => !1).with({
    config: {
      configVersion: 2
    }
  }, eg).exhaustive(),
  ev = (e, t) => {
    var n, i;
    let r = null == e ? void 0 : null === (i = e.progress[t]) || void 0 === i ? void 0 : null === (n = i.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
    if (null == r) return !1;
    let s = new Date(r).valueOf();
    return !isNaN(s) && s > Date.now()
  },
  eL = e => (0, s.EQ)(e).with({
    config: {
      configVersion: 1
    }
  }, () => !1).with({
    config: {
      configVersion: 2
    }
  }, e => null != e.userStatus && (ev(e.userStatus, o.X.PLAY_ON_XBOX) || ev(e.userStatus, o.X.PLAY_ON_PLAYSTATION))).exhaustive();

function eD(e, t) {
  let {
    quest: n,
    showInline: i
  } = e;
  (0, N._3)({
    questId: n.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentCTA: t.ctaContent
  }), !i && c.Z.open(v.oAB.CONNECTIONS), _.Z.dispatch({
    type: "CONNECTIONS_GRID_MODAL_SHOW",
    onComplete: e => (0, E.Z)({
      platformType: e
    }),
    includedPlatformTypes: new Set([v.ABu.XBOX, v.ABu.PLAYSTATION])
  })
}

function eM(e, t) {
  let {
    quest: n
  } = e;
  (0, N._3)({
    questId: n.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentCTA: t.ctaContent
  }), c.Z.open(v.oAB.CONNECTIONS)
}