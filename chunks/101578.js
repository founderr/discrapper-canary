"use strict";
n.r(t);
var s = n("735250");
n("470079");
var l = n("442837"),
  a = n("654030"),
  i = n("906732"),
  r = n("973616"),
  o = n("789407"),
  u = n("314897"),
  d = n("158776"),
  c = n("981631"),
  E = n("616922"),
  f = n("364092");
t.default = e => {
  var t;
  let {
    channel: n,
    message: _,
    hideParty: T
  } = e, {
    analyticsLocations: I
  } = (0, i.default)(), m = (0, l.useStateFromStores)([u.default], () => u.default.getId()), N = (0, l.useStateFromStores)([d.default], () => {
    if (null == _.application) return d.default.findActivity(_.author.id, e => e.type === c.ActivityTypes.LISTENING);
    {
      var e;
      let t = _.author.id;
      return (null === (e = _.activity) || void 0 === e ? void 0 : e.type) === c.ActivityActionTypes.JOIN_REQUEST && (t = t === m && n.isPrivate() ? n.getRecipientId() : m), d.default.getApplicationActivity(t, _.application.id)
    }
  }, [_, n, m]);
  return (0, s.jsx)(a.default, {
    className: f.container,
    activity: N,
    activityActionType: null != _.activity ? _.activity.type : null,
    partyId: null != _.activity ? _.activity.party_id : null,
    userId: _.author.id,
    application: null != (t = _).application ? r.default.createFromServer(t.application) : null != t.activity && null != t.activity.party_id && (0, E.isSpotifyParty)(t.activity.party_id) ? o.SpotifyApplication : void 0,
    message: _,
    channelId: n.id,
    guildId: n.getGuildId(),
    hideParty: T,
    isSender: _.author.id === m,
    analyticsLocations: I
  })
}