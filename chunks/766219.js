n.d(t, {
  QW: function() {
return d;
  },
  lg: function() {
return u;
  },
  q9: function() {
return c;
  },
  sm: function() {
return l;
  },
  vb: function() {
return o;
  }
}), n(411104);
var i = n(823379),
  s = n(49898),
  a = n(731455),
  r = n(689938);

function l(e) {
  switch (e) {
case s.F$.SERVERS:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE;
case s.F$.APPS:
  return r.Z.Messages.GLOBAL_DISCOVERY_APPS_TITLE;
case s.F$.QUESTS:
  return r.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE;
case s.F$.SHOP:
  return r.Z.Messages.GLOBAL_DISCOVERY_SHOP_TITLE;
default:
  (0, i.vE)(e);
  }
}

function o(e) {
  switch (e) {
case s.vf.GAMING:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_TITLE;
case s.vf.MUSIC:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_TITLE;
case s.vf.ENTERTAINMENT:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_TITLE;
case s.vf.TECH:
case s.vf.EDUCATION:
case s.vf.HUBS:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_TITLE;
default:
  throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
  }
}

function c(e) {
  switch (e) {
case s.vf.GAMING:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_DESCRIPTION;
case s.vf.MUSIC:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_DESCRIPTION;
case s.vf.ENTERTAINMENT:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_DESCRIPTION;
case s.vf.TECH:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_DESCRIPTION;
case s.vf.EDUCATION:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_DESCRIPTION;
case s.vf.HUBS:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION;
default:
  throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
  }
}

function d(e) {
  switch (e) {
case s.vf.GAMING:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_GAMING;
case s.vf.MUSIC:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_MUSIC;
case s.vf.ENTERTAINMENT:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_ENTERTAINMENT;
case s.vf.TECH:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_TECH;
case s.vf.EDUCATION:
  return r.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_EDUCATION;
default:
  return null;
  }
}

function u(e) {
  switch (e) {
case s.vf.GUILDS:
  return a.Hk;
case s.vf.GAMING:
  return a.Gj.Activity;
case s.vf.MUSIC:
  return a.Gj.Music;
case s.vf.ENTERTAINMENT:
  return a.Gj.Television;
case s.vf.TECH:
  return a.Gj.Science;
case s.vf.EDUCATION:
  return a.Gj.Education;
case s.vf.HUBS:
  return a.Hk;
default:
  (0, i.vE)(e);
  }
}