"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("424973");
var i = n("917351"),
  a = n.n(i),
  l = n("446674"),
  s = n("299285"),
  o = n("375202"),
  r = n("49040"),
  d = n("373469"),
  u = n("86878"),
  c = n("546463"),
  f = n("260320"),
  h = n("169602"),
  p = n("568307"),
  E = n("697218"),
  g = n("703370"),
  m = n("901165"),
  S = n("158998"),
  v = n("522019"),
  I = l.default.connectStores([p.default, g.default, d.default, E.default, m.default, f.default, u.default, h.default, c.default, s.default], () => {
    var e, t;
    let n;
    let i = f.default.getLobbiesWithVoice().find(e => null != u.default.getApplication(e.application_id)),
      l = [],
      v = "";
    if (null != i) {
      let e = u.default.getApplication(i.application_id);
      (null == e ? void 0 : e.name) != null && (v = e.name), n = i.application_id, a.each(h.default.getVoiceStates(i.id), e => {
        let t = E.default.getUser(e.userId);
        null != t && l.push({
          voiceState: e,
          user: t,
          nick: t.username,
          comparator: S.default.getName(t)
        })
      })
    }
    let I = (0, o.default)(p.default, g.default),
      y = d.default.getCurrentUserActiveStream(),
      _ = d.default.getStreamerActiveStreamMetadata();
    return {
      title: v,
      context: n,
      sortedVoiceStates: a.sortBy(l, e => {
        let {
          comparator: t
        } = e;
        return t
      }),
      lobbyId: null != i ? i.id : void 0,
      displayUserMode: m.default.getDisplayUserMode(),
      displayNameMode: m.default.getDisplayNameMode(),
      avatarSizeMode: m.default.getAvatarSizeMode(),
      application: null != I ? s.default.getApplication(null !== (t = null === (e = c.default.getGameByGameData(I)) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : "") : null,
      streamApplication: (0, r.default)(I),
      stream: y,
      streamMetadata: _,
      hasStream: !1
    }
  })(v.VoiceWidget)