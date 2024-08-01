t.d(n, {
  Dr: function() {
return f;
  },
  YO: function() {
return _;
  },
  _X: function() {
return I;
  },
  _o: function() {
return E;
  },
  nb: function() {
return T;
  },
  zO: function() {
return d;
  }
});
var r = t(570140),
  i = t(434404),
  o = t(703656),
  l = t(430824),
  u = t(241559),
  a = t(327999),
  s = t(981631),
  c = t(176505);
async function d(e) {
  await r.Z.dispatch({
type: 'INITIALIZE_MEMBER_SAFETY_STORE',
guildId: e
  });
}

function _(e) {
  r.Z.dispatch({
type: 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH',
guildId: e
  });
}

function E(e, n) {
  let {
continuationToken: t,
...i
  } = n;
  r.Z.dispatch({
type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
guildId: e,
pagination: i
  });
}
async function f(e, n) {
  await r.Z.dispatch({
type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
guildId: e,
searchState: n
  });
}

function I(e) {
  let n = (0, u.lv)(e),
t = l.Z.getGuild(e);
  return !!n && null != t && (t.hasFeature(s.oNc.COMMUNITY) || t.hasFeature(s.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, o.uL)(s.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0) : (i.Z.open(t.id, s.pNK.MEMBERS), !0));
}
async function T(e, n) {
  let t = await (0, a._2)(e, n);
  return 0 === t.length ? [] : (await r.Z.dispatch({
type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
guildId: e,
memberSupplementals: t
  }), t);
}