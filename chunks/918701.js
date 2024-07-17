let r;
n.d(t, {
  $H: function() {
return eS;
  },
  $J: function() {
return ek;
  },
  AV: function() {
return er;
  },
  Bz: function() {
return eF;
  },
  CE: function() {
return B;
  },
  FE: function() {
return eO;
  },
  GN: function() {
return ei;
  },
  Gs: function() {
return $;
  },
  Jg: function() {
return eE;
  },
  K: function() {
return ec;
  },
  Kr: function() {
return eo;
  },
  Mi: function() {
return et;
  },
  Nj: function() {
return eg;
  },
  OG: function() {
return eY;
  },
  Qe: function() {
return M;
  },
  Rs: function() {
return J;
  },
  U3: function() {
return H;
  },
  V$: function() {
return eZ;
  },
  WP: function() {
return Z;
  },
  Xh: function() {
return W;
  },
  Xv: function() {
return el;
  },
  ZZ: function() {
return x;
  },
  _: function() {
return ee;
  },
  _D: function() {
return w;
  },
  b7: function() {
return ex;
  },
  dl: function() {
return eA;
  },
  f2: function() {
return eR;
  },
  gI: function() {
return eH;
  },
  gO: function() {
return z;
  },
  iQ: function() {
return V;
  },
  il: function() {
return ew;
  },
  j8: function() {
return q;
  },
  lQ: function() {
return k;
  },
  mN: function() {
return em;
  },
  nP: function() {
return ef;
  },
  o9: function() {
return ev;
  },
  oo: function() {
return eI;
  },
  ph: function() {
return Q;
  },
  t2: function() {
return en;
  },
  uo: function() {
return X;
  },
  vQ: function() {
return eu;
  },
  vR: function() {
return ed;
  },
  xn: function() {
return es;
  },
  yI: function() {
return Y;
  },
  ys: function() {
return e_;
  },
  zE: function() {
return ea;
  },
  zK: function() {
return eN;
  },
  zi: function() {
return F;
  }
}), n(627341), n(47120), n(411104);
var i = n(164369),
  a = n(392711),
  s = n(278074),
  o = n(754700),
  l = n(551910),
  u = n(887003),
  c = n(742635),
  d = n(570140),
  _ = n(230711),
  E = n(782568);
n(597688);
var f = n(231757),
  h = n(572004),
  p = n(70956),
  m = n(630388),
  I = n(823379),
  T = n(49012),
  g = n(960048),
  S = n(617136),
  A = n(687744),
  N = n(569984),
  v = n(497505),
  O = n(566078),
  R = n(312046),
  C = n(46140),
  y = n(981631),
  D = n(701488),
  L = n(689938);
let b = 'https://cdn.discordapp.com/assets/quests/';

function M(e) {
  try {
return (0, s.EQ)(e.config).with({
  config_version: 1
}, () => !0).with({
  config_version: 2
}, () => !0).exhaustive();
  } catch (n) {
var t;
return console.error('Unknown config version \''.concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, '\''), n), !1;
  }
}
let P = e => e.application_id === D.Ev || e.platform === y.M7m.XBOX,
  U = e => e.platform === y.M7m.PS4 || e.platform === y.M7m.PS5;

function w(e, t) {
  if (null == e)
return !1;
  let n = e.name.toLowerCase(),
r = O.r.build(t.config).application.name.toLowerCase();
  return P(e) || U(e) ? n === r : null != e.application_id && G(e.application_id, t);
}

function x(e, t) {
  for (let [n, r] of e)
if (w(t, r) && !F(r))
  return r;
}

function G(e, t) {
  return null != O.r.build(t.config).application.ids.find(t => t === e);
}

function k(e, t) {
  let n;
  for (let [r, i] of e)
if (G(t, i) && !F(i)) {
  n = i;
  break;
}
  return n;
}

function B(e, t) {
  return Array.from(e.values()).find(e => G(t, e) && !F(e) && eg({
quest: e
  }));
}

function F(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now();
}

function V(e) {
  if (!F(e))
return !1;
  let t = Date.now() - 2592000000,
n = new Date(e.config.expiresAt).valueOf();
  return null != e.config.expiresAt && !(n <= t) && !0;
}

function H(e) {
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
  for (let [r, i] of Object.entries(e)) {
    var n;
    t[r] = {
      eventName: i.event_name,
      value: i.value,
      updatedAt: i.updated_at,
      completedAt: i.completed_at,
      heartbeat: null == (n = i.heartbeat) ? null : {
        lastBeatAt: n.last_beat_at,
        expiresAt: n.expires_at
      }
    };
  }
  return t;
}(e.progress)
  };
}

function Z(e) {
  var t;
  return {
id: e.id,
preview: e.preview,
config: (t = e.config, (0, s.EQ)(t).with({
  config_version: 1
}, e => {
  var t, n, r;
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
          let r = parseInt(n);
          v.xw.has(r) && (t[r] = e[n]);
        }
        return t;
      }(t.reward_redemption_instructions_by_platform),
      gameTitle: t.game_title,
      gamePublisher: t.game_publisher
    },
    colors: {
      primary: (n = e.colors).primary,
      secondary: n.secondary
    },
    rewardsConfig: (0, A.Q)(e.rewards_config),
    rewardCodeExpiresAt: e.reward_code_expires_at,
    rewardCodePlatforms: e.reward_code_platforms.filter(e => v.xw.has(e)),
    assets: {
      rewardTile: (r = e.assets).reward_tile,
      hero: r.hero,
      questBarHero: r.quest_bar_hero,
      gameTile: r.game_tile,
      logotype: r.logotype
    },
    inGameQuestConfig: null,
    variants: e.variants,
    supplementaryApplicationIds: e.supplementary_application_ids
  };
}).with({
  config_version: 2
}, e => (0, R.Q)(e)).exhaustive()),
userStatus: null == e.user_status ? null : H(e.user_status),
targetedContent: e.targeted_content
  };
}

function Y(e) {
  var t;
  return {
userId: e.user_id,
questId: e.quest_id,
code: e.code,
platform: e.platform,
claimedAt: e.claimed_at,
tier: null !== (t = e.tier) && void 0 !== t ? t : null
  };
}

function j(e) {
  return {
skuId: e.sku_id,
tenantMetadata: function(e) {
  if ((null == e ? void 0 : e.quest_rewards) == null)
    return null;
  let t = e.quest_rewards;
  switch (t.reward.tag) {
    case u.w.IN_GAME:
      return {
        questRewards: {
          reward: {
            tag: t.reward.tag
          }
        }
      };
    case u.w.REWARD_CODE:
      return {
        questRewards: {
          reward: {
            tag: t.reward.tag,
            rewardCode: Y(t.reward.reward_code)
          }
        }
      };
  }
}(e.tenant_metadata)
  };
}

function W(e) {
  return {
claimedAt: e.claimed_at,
items: e.entitlements.map(j),
errors: e.errors
  };
}

function K(e, t) {
  return e.startsWith('data') ? e : t;
}
let z = e => {
var t, n;
let r = ev({
    quest: e,
    idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
  }),
  i = O.r.build(e.config).defaultRewardAsset,
  a = null !== (n = null == r ? void 0 : r.asset) && void 0 !== n ? n : i;
return {
  name: a,
  url: K(a, ''.concat(b).concat(e.id, '/').concat(a))
};
  },
  q = e => K(e.config.assets.hero, ''.concat(b).concat(e.id, '/').concat(e.config.assets.hero)),
  Q = e => K(e.config.assets.questBarHero, ''.concat(b).concat(e.id, '/').concat(e.config.assets.questBarHero)),
  X = (e, t) => K(e.config.assets.gameTile, ''.concat(b).concat(e.id, '/').concat(t, '/').concat(e.config.assets.gameTile)),
  $ = (e, t) => K(e.config.assets.logotype, ''.concat(b).concat(e.id, '/').concat(t, '/').concat(e.config.assets.logotype)),
  J = e => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);

function ee(e, t) {
  for (let [n, r] of e)
if (!F(r) && r.targetedContent.includes(t))
  return r;
  return null;
}

function et(e, t) {
  return e.targetedContent.includes(t);
}
let en = e => {
  switch (e) {
case v.y$.XBOX:
  return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
case v.y$.PLAYSTATION:
  return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
case v.y$.SWITCH:
  return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
case v.y$.PC:
  return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
case v.y$.CROSS_PLATFORM:
  return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM;
  }
};

function er(e) {
  var t, n;
  let {
quest: r,
taskDetails: i,
thirdPartyTaskDetails: a
  } = e;
  if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null)
return L.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
let {
  percentComplete: e
} = i, t = null != a ? a.completedRatio : e;
return t >= 0.75 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= 0.45 && t <= 0.55 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : L.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
  }
  return L.Z.Messages.QUESTS_TITLE.format({
questName: r.config.messages.questName
  });
}

function ei(e) {
  return Object.keys(C.a_).includes(v.jn[e]);
}

function ea(e, t) {
  if (!ei(t))
return !1;
  let n = v.jn[t];
  return (0, m.yE)(e.dismissedQuestContent, C.a_[n]);
}

function es(e) {
  return (0, s.EQ)(e).with({
configVersion: 1
  }, e => {
let t = e.rewardsConfig.rewards.find(e => e.tag === u.w.COLLECTIBLE);
return (null == t ? void 0 : t.tag) === u.w.COLLECTIBLE ? t : null;
  }).with({
configVersion: 2
  }, e => {
let t = e.rewardsConfig.rewards.find(e => e.type === u.w.COLLECTIBLE);
return (null == t ? void 0 : t.type) === u.w.COLLECTIBLE ? t : null;
  }).exhaustive();
}

function eo(e) {
  let t = es(e);
  if (null == t || !('expiresAt' in t) || null == t.expiresAt)
return null;
  let n = {
days: 0,
weeks: 0,
months: 0,
years: 0,
...(0, i.Z)({
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
  });
}

function el(e) {
  return null != es(e);
}

function eu(e) {
  return (0, s.EQ)(e).with({
configVersion: 1
  }, e => !1).with({
configVersion: 2
  }, e => e.rewardsConfig.rewards.some(e => e.type === u.w.IN_GAME)).exhaustive();
}

function ec(e) {
  return (0, s.EQ)(e).with({
configVersion: 1
  }, e => null).with({
configVersion: 2
  }, e => {
var t;
return null !== (t = e.rewardsConfig.rewards.find(e => e.type === u.w.IN_GAME)) && void 0 !== t ? t : null;
  }).exhaustive();
}

function ed(e, t) {
  return e.targetedContent.includes(t);
}

function e_(e, t) {
  g.Z.captureException(e, {
...t,
tags: {
  ...null == t ? void 0 : t.tags,
  app_context: 'quests'
}
  });
}

function eE(e, t) {
  if (null == t || null == e)
return null;
  for (let n of t) {
let t = x(e, n);
if (null != t)
  return t;
  }
  return null;
}

function ef(e) {
  return e.endsWith('.webm') || e.endsWith('.mp4') || e.startsWith('data:video');
}
let eh = /\.([a-zA-Z0-9]+)$/,
  ep = /^data:video\/([a-zA-Z0-9]+)\;/;

function em(e) {
  var t, n, r, i, a;
  switch (null !== (a = null === (n = eh.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (i = ep.exec(e)) || void 0 === i ? void 0 : null === (r = i[1]) || void 0 === r ? void 0 : r.toLowerCase()) {
case 'webm':
  return 'video/webm';
case 'mp4':
  return 'video/mp4';
default:
  throw Error('Unexpected file extension: '.concat(e.substring(0, 15)));
  }
}

function eI(e) {
  let {
quest: {
  config: t
}
  } = e;
  return (0, s.EQ)(t).with({
configVersion: 1
  }, e => {
let t = e.rewardsConfig;
return t.assignmentMethod === l.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.tag === u.w.REWARD_CODE);
  }).with({
configVersion: 2
  }, e => {
let t = e.rewardsConfig;
return t.assignmentMethod === l.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.type === u.w.REWARD_CODE);
  }).exhaustive();
}
let eT = e => (0, s.EQ)(e.taskConfig).with({
  type: c.L.FIRST_PARTY
}, e => null != e.tasks[o.X.PLAY_ON_DESKTOP]).otherwise(() => !1);

function eg(e) {
  let {
quest: t
  } = e;
  return (0, s.EQ)(t.config).with({
configVersion: 1
  }, e => eN(t, C.S7.PLAYTIME_TASK)).with({
configVersion: 2
  }, e => eN(t, C.S7.PLAYTIME_TASK) || eT(e)).exhaustive();
}

function eS(e) {
  return null != e && eg({
quest: e
  });
}

function eA(e) {
  return !eN(e, C.S7.IN_HOUSE_CONSOLE_QUEST);
}

function eN(e, t) {
  return O.r.build(e.config).features.has(t);
}

function ev(e) {
  let {
quest: t,
idx: n
  } = e;
  if (null == n)
return null;
  let r = t.config.rewardsConfig.rewards[n];
  return (0, s.EQ)(r).with({
tag: u.w.REWARD_CODE
  }, e => e).with({
type: u.w.REWARD_CODE
  }, e => e).otherwise(() => null);
}

function eO(e, t) {
  let n = O.r.build(e.config).application.link;
  (0, T.q)({
href: n,
onConfirm: () => {
  (0, S._3)({
    questId: e.id,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position
  }), (0, E.Z)(n);
}
  });
}
let eR = (e, t) => {
(0, S._3)({
  questId: e,
  questContent: t.content,
  questContentCTA: t.ctaContent,
  questContentPosition: t.position
}), (0, h.JG)(J(e));
  },
  eC = (e, t) => e > 0 ? (0, a.floor)(Math.min(t / e, 1), 4) : 0,
  ey = e => eF(e) || N.Z.isProgressingOnDesktop(e.id),
  eD = (e, t) => {
var n, r, i, s;
let o = null === (s = e.userStatus) || void 0 === s ? void 0 : null === (i = s.progress) || void 0 === i ? void 0 : null === (r = i[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
if (null == o || !ey(e))
  return 0;
let l = Date.now() - new Date(o).valueOf();
return (0, a.floor)(l / p.Z.Millis.SECOND, 2);
  },
  eL = (e, t) => {
var n, r, i;
let s = t.target,
  o = e.userStatus;
if ((null == o ? void 0 : o.completedAt) != null)
  return s;
let l = null == o ? void 0 : null === (n = o.progress) || void 0 === n ? void 0 : n[t.eventName],
  u = null !== (i = null !== (r = null == l ? void 0 : l.value) && void 0 !== r ? r : null == o ? void 0 : o.streamProgressSeconds) && void 0 !== i ? i : 0,
  c = eD(e, t),
  d = Math.min(0.99 * s, u + c);
return (0, a.floor)(d, 2);
  },
  eb = e => {
var t, n;
let {
  quest: r,
  taskType: i,
  includeTaskTypes: a = o.T.ALL
} = e, s = r.config.taskConfig;
if (s.type !== c.L.FIRST_PARTY)
  throw Error('Cannot retrieve task details for task config with type '.concat(s.type, '!'));
let l = null != i ? i : null === (t = Object.values(s.tasks).filter(e => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
  u = null !== (n = s.tasks[l]) && void 0 !== n ? n : s.tasks[o.X.STREAM_ON_DESKTOP];
if (null == u)
  throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
let d = u.target,
  _ = eL(r, u);
return {
  progressSeconds: _,
  targetSeconds: d,
  targetMinutes: Math.round(d / p.Z.Seconds.MINUTE),
  percentComplete: eC(d, _),
  taskType: l
};
  },
  eM = e => o.T.ALL.has(e) ? e : null,
  eP = e => {
var t, n;
let {
  quest: r,
  includeTaskTypes: i = o.T.ALL
} = e;
for (let e of Object.values(null !== (n = null === (t = r.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {}).sort((e, t) => {
    var n, r;
    let i = null == e ? void 0 : null === (n = e.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt,
      a = null == t ? void 0 : null === (r = t.heartbeat) || void 0 === r ? void 0 : r.lastBeatAt;
    if (null != i && null != a)
      return new Date(i).valueOf() > new Date(a).valueOf() ? -1 : 1;
    if (null == i && null == a && (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null)
      return new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? -1 : 1;
    if (null != i && null == a)
      return -1;
    else
      return 1;
  }).filter(I.lm)) {
  let t = eM(e.eventName);
  if (null != t) {
    if (null == i ? void 0 : i.has(t))
      return eb({
        quest: r,
        taskType: t,
        includeTaskTypes: i
      });
  }
}
return eb({
  quest: r,
  includeTaskTypes: i
});
  },
  eU = e => {
var t, n;
let r = null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== n ? n : 0,
  i = Math.round(e.config.streamDurationRequirementMinutes * p.Z.Seconds.MINUTE);
return {
  progressSeconds: r,
  targetSeconds: i,
  targetMinutes: e.config.streamDurationRequirementMinutes,
  percentComplete: eC(i, r),
  taskType: o.X.STREAM_ON_DESKTOP
};
  },
  ew = (e, t) => (0, s.EQ)(e).with({
config: {
  configVersion: 1
}
  }, eU).with({
config: {
  configVersion: 2
}
  }, e => e.config.taskConfig.type !== c.L.FIRST_PARTY ? {
progressSeconds: 0,
targetSeconds: 1,
targetMinutes: 1,
percentComplete: 0,
taskType: o.X.STREAM_ON_DESKTOP
  } : eG(e) ? eP({
quest: e,
includeTaskTypes: null != t ? t : eF(e) ? o.T.CONSOLE : o.T.ALL
  }) : eS(e) ? eb({
quest: e,
taskType: o.X.PLAY_ON_DESKTOP
  }) : eb({
quest: e,
taskType: o.X.STREAM_ON_DESKTOP
  })).exhaustive();

function ex(e) {
  return (0, s.EQ)(e.config).with({
configVersion: 1
  }, e => null).with({
configVersion: 2
  }, t => {
var n, r, i, a;
if (t.taskConfig.type !== c.L.THIRD_PARTY || 0 === Object.keys(t.taskConfig.tasks).length)
  return null;
let s = Object.keys(t.taskConfig.tasks)[0],
  o = t.taskConfig.tasks[s],
  l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[s]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
  u = eC(o.target, l);
return {
  title: o.title,
  description: o.description,
  target: o.target,
  progress: l,
  completedRatio: u
};
  }).exhaustive();
}
let eG = (r = [
o.X.PLAY_ON_XBOX,
o.X.PLAY_ON_PLAYSTATION
  ], e => r.some(t => null != e.config.taskConfig.tasks[t])),
  ek = e => (0, s.EQ)(e).with({
config: {
  configVersion: 1
}
  }, () => !1).with({
config: {
  configVersion: 2
}
  }, eG).exhaustive(),
  eB = (e, t) => {
var n, r;
let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
if (null == i)
  return !1;
let a = new Date(i).valueOf();
return !isNaN(a) && a > Date.now();
  },
  eF = e => (0, s.EQ)(e).with({
config: {
  configVersion: 1
}
  }, () => !1).with({
config: {
  configVersion: 2
}
  }, e => null != e.userStatus && (eB(e.userStatus, o.X.PLAY_ON_XBOX) || eB(e.userStatus, o.X.PLAY_ON_PLAYSTATION))).exhaustive();

function eV() {
  _.Z.open(y.oAB.CONNECTIONS);
}

function eH(e, t) {
  let {
quest: n,
showInline: r
  } = e;
  (0, S._3)({
questId: n.id,
questContent: t.content,
questContentPosition: t.position,
questContentCTA: t.ctaContent
  }), !r && eV(), d.Z.dispatch({
type: 'CONNECTIONS_GRID_MODAL_SHOW',
onComplete: e => (0, f.Z)({
  platformType: e
}),
includedPlatformTypes: new Set([
  y.ABu.XBOX,
  y.ABu.PLAYSTATION
])
  });
}

function eZ(e, t) {
  let {
quest: n
  } = e;
  (0, S._3)({
questId: n.id,
questContent: t.content,
questContentPosition: t.position,
questContentCTA: t.ctaContent
  }), eV();
}

function eY() {
  return window.location.pathname.startsWith(y.Z5c.QUEST_HOME);
}