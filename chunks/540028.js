"use strict";
n(653041), n(47120);
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(692547),
  o = n(481060),
  a = n(475179),
  l = n(519938),
  u = n(317381),
  _ = n(812206),
  c = n(358221),
  d = n(199902),
  E = n(366050),
  I = n(594174),
  T = n(981631),
  h = n(354459),
  f = n(689938),
  S = n(910310);

function N(e) {
  let {
    closePopout: t,
    idle: n,
    pipWindows: s,
    voiceChannelId: I,
    onSelect: S
  } = e;
  n && t();
  let N = (0, r.e7)([u.ZP], () => u.ZP.getSelfEmbeddedActivityForChannel(I)),
    A = (0, r.e7)([E.Z], () => E.Z.pipWindow),
    m = (0, r.e7)([c.Z], () => c.Z.getSelectedParticipant(I)),
    O = (0, r.e7)([c.Z], () => c.Z.getStreamParticipants(I));
  return (0, i.jsx)(o.Menu, {
    navId: "pip-menu",
    "aria-label": "switch PIP",
    onClose: t,
    onSelect: S,
    children: (function() {
      let e = s.find(e => e.component === T.NYg.EMBED_IFRAME),
        t = s.find(e => e.component === T.NYg.VIDEO),
        n = [];
      return null != e && (null == A ? void 0 : A.id) !== e.id && n.push({
        pipWindow: e
      }), null != t && O.forEach(e => {
        let i = d.Z.getActiveStreamForApplicationStream(e.stream),
          r = e.id === (null == m ? void 0 : m.id) && (null == A ? void 0 : A.id) === t.id;
        null != i && !r && n.push({
          pipWindow: t,
          participant: e,
          stream: i
        })
      }), n
    })().map(function(e) {
      var t;
      let n = e.pipWindow.id,
        r = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
        s = function(e) {
          if (e.pipWindow.component === T.NYg.EMBED_IFRAME && null != N) {
            var t;
            let e = null === (t = _.Z.getApplication(N.applicationId)) || void 0 === t ? void 0 : t.name;
            return null == e ? f.Z.Messages.SWITCH_PIP_TO_ACTIVITY : f.Z.Messages.SWITCH_PIP_TO_ACTIVITY_NAME.format({
              activityName: e
            })
          }
          return null == e.participant || e.participant.type !== h.fO.STREAM ? f.Z.Messages.SWITCH_PIP_TO_GO_LIVE : f.Z.Messages.SWITCH_PIP_TO_USER_STREAM.format({
            username: e.participant.userNick
          })
        }(e),
        u = "".concat(n).concat(null != r ? r : "");
      return (0, i.jsx)(o.MenuItem, {
        id: u,
        label: s,
        action: () => (function(e) {
          (null == A ? void 0 : A.id) !== e.pipWindow.id && (0, l.k3)(e.pipWindow.id);
          let t = e.participant;
          null != t && t.type !== h.fO.ACTIVITY && a.Z.selectParticipant(I, t.id)
        })(e)
      }, u)
    })
  })
}
t.Z = function(e) {
  let {
    voiceChannelId: t,
    idle: n
  } = e, a = Array.from((0, r.e7)([E.Z], () => E.Z.pipWindows).values()), l = (0, r.Wu)([d.Z], () => d.Z.getAllActiveStreamsForChannel(t)).filter(e => {
    var n;
    return e.ownerId !== (null === (n = I.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t
  }), u = 1 === a.length && a[0].component === T.NYg.EMBED_IFRAME || 0 === l.length, _ = 1 === a.length && l.length <= 1;
  return u || _ ? null : (0, i.jsx)(o.Popout, {
    position: "bottom",
    renderPopout: e => (0, i.jsx)(N, {
      voiceChannelId: t,
      pipWindows: a,
      idle: n,
      ...e
    }),
    children: e => (0, i.jsx)(o.Clickable, {
      className: S.menuIcon,
      ...e,
      children: (0, i.jsx)(o.MoreVerticalIcon, {
        size: "md",
        color: s.Z.unsafe_rawColors.WHITE_500.css
      })
    })
  })
}