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
  o = n("161454"),
  r = n("375202"),
  d = n("49040"),
  u = n("373469"),
  c = n("86878"),
  f = n("546463"),
  h = n("260320"),
  p = n("169602"),
  E = n("697218"),
  g = n("703370"),
  m = n("901165"),
  S = n("158998"),
  v = n("522019"),
  I = l.default.connectStores([o.default, g.default, u.default, E.default, m.default, h.default, c.default, p.default, f.default, s.default], () => {
    var e, t;
    let n;
    let i = h.default.getLobbiesWithVoice().find(e => null != c.default.getApplication(e.application_id)),
      l = [],
      v = "";
    if (null != i) {
      let e = c.default.getApplication(i.application_id);
      (null == e ? void 0 : e.name) != null && (v = e.name), n = i.application_id, a.each(p.default.getVoiceStates(i.id), e => {
        let t = E.default.getUser(e.userId);
        null != t && l.push({
          voiceState: e,
          user: t,
          nick: t.username,
          comparator: S.default.getName(t)
        })
      })
    }
    let I = (0, r.default)(o.default, g.default),
      y = u.default.getCurrentUserActiveStream(),
      _ = u.default.getStreamerActiveStreamMetadata();
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
      application: null != I ? s.default.getApplication(null !== (t = null === (e = f.default.getGameByGameData(I)) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : "") : null,
      streamApplication: (0, d.default)(I),
      stream: y,
      streamMetadata: _,
      hasStream: !1
    }
  })(v.VoiceWidget)