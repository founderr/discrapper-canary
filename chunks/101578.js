var s = n(735250);
n(470079);
var i = n(442837),
  l = n(654030),
  a = n(906732),
  r = n(973616),
  o = n(789407),
  c = n(314897),
  u = n(158776),
  d = n(981631),
  E = n(616922),
  _ = n(846615);
t.Z = e => {
  var t;
  let {
    channel: n,
    message: I,
    hideParty: T
  } = e, {
    analyticsLocations: m
  } = (0, a.ZP)(), N = (0, i.e7)([c.default], () => c.default.getId()), h = (0, i.e7)([u.Z], () => {
    if (null == I.application) return u.Z.findActivity(I.author.id, e => e.type === d.IIU.LISTENING);
    {
      var e;
      let t = I.author.id;
      return (null === (e = I.activity) || void 0 === e ? void 0 : e.type) === d.mFx.JOIN_REQUEST && (t = t === N && n.isPrivate() ? n.getRecipientId() : N), u.Z.getApplicationActivity(t, I.application.id)
    }
  }, [I, n, N]);
  return (0, s.jsx)(l.Z, {
    className: _.container,
    activity: h,
    activityActionType: null != I.activity ? I.activity.type : null,
    partyId: null != I.activity ? I.activity.party_id : null,
    userId: I.author.id,
    application: null != (t = I).application ? r.Z.createFromServer(t.application) : null != t.activity && null != t.activity.party_id && (0, E.Ps)(t.activity.party_id) ? o.r9 : void 0,
    message: I,
    channelId: n.id,
    guildId: n.getGuildId(),
    hideParty: T,
    isSender: I.author.id === N,
    analyticsLocations: m
  })
}