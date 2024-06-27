"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(570140),
  _ = n(475179),
  c = n(925549),
  d = n(37234),
  E = n(835473),
  I = n(358221),
  T = n(928518),
  h = n(703656),
  f = n(607187),
  S = n(937995),
  A = n(366050),
  N = n(944486),
  m = n(594174),
  O = n(566620),
  R = n(317381),
  p = n(963614),
  g = n(917107),
  C = n(208156),
  v = n(748492),
  L = n(350064),
  D = n(701488),
  M = n(918559),
  P = n(981631),
  y = n(354459),
  U = n(436371),
  b = n(910310),
  G = n(972667);

function w(e) {
  var t, n;
  let {
    channel: s,
    isLoading: L
  } = e, [w, B] = r.useState(!1), x = (0, a.e7)([R.ZP], () => R.ZP.getSelfEmbeddedActivityForChannel(s.id)), k = (0, a.e7)([R.ZP], () => R.ZP.getActivityPanelMode()), V = (0, E.q)(null == x ? void 0 : x.applicationId), Z = null == x ? void 0 : x.launchId, H = (0, a.e7)([N.Z], () => N.Z.getChannelId() === s.id), {
    dockedRect: F,
    isHidden: Y
  } = (0, a.cj)([A.Z], () => {
    let e = A.Z.pipWindow;
    return {
      dockedRect: null != e ? A.Z.getDockedRect(e.id) : null,
      isHidden: A.Z.isEmbeddedActivityHidden()
    }
  }), j = (0, a.e7)([T.Z], () => T.Z.getWindow(P.KJ3.CHANNEL_CALL_POPOUT)), {
    activityParticipant: W,
    selectedParticipant: K,
    participantsOpen: z
  } = (0, a.cj)([I.Z], () => ({
    activityParticipant: null != x ? I.Z.getParticipant(s.id, x.applicationId) : null,
    selectedParticipant: I.Z.getSelectedParticipant(s.id),
    participantsOpen: I.Z.getParticipantsOpen(s.id)
  })), q = H || null != j, X = (0, g.Z)(s.id), Q = X && (null == K ? void 0 : K.type) !== y.fO.ACTIVITY, J = !X && k === M.Ez.PIP, $ = (!q || q && (Q || J) && null == F) && !Y, ee = $ && null != A.Z.pipVideoWindow && null != A.Z.pipActivityWindow;

  function et() {
    var e;
    null != x && _.Z.selectParticipant(s.id, x.applicationId);
    let t = null !== (e = s.getGuildId()) && void 0 !== e ? e : P.ME;
    c.Z.channelListScrollTo(t, s.id), (0, h.XU)(t, s.id), null == j && (0, d.Ou)()
  }

  function en() {
    B(!w)
  }
  r.useEffect(() => {
    if ((null == x ? void 0 : x.applicationId) != null) {
      let e = $ ? D.cE.PIP : D.cE.FOCUSED;
      u.Z.dispatch({
        type: "ACTIVITY_LAYOUT_MODE_UPDATE",
        layoutMode: e,
        applicationId: x.applicationId
      })
    }
  }, [null == x ? void 0 : x.applicationId, $]);
  if (null == x || null == Z || null == W && (0, g.Z)(s.id) || null == V) return null;
  let ei = Array.from(x.userIds).map(e => m.default.getUser(e)).filter(e => null != e),
    er = {
      instance_id: null !== (n = null !== (t = x.compositeInstanceId) && void 0 !== t ? t : x.launchId) && void 0 !== n ? n : "",
      channel_id: s.id
    };
  return null != s.guild_id && "" !== s.guild_id && (er.guild_id = s.guild_id), (0, i.jsx)(S.ZP, {
    timeout: 2e3,
    children: e => {
      var t, n, r, a, u, _, c, d;
      let {
        idle: E,
        onActive: I,
        onForceIdle: T
      } = e;
      return (0, i.jsxs)(f.Z, {
        className: o()(U.root, {
          [U.pipMode]: $,
          [G.elevationHigh]: $,
          [b.idle]: E && !(null === (t = x.config) || void 0 === t ? void 0 : t.useInteractivePIP),
          [U.pipModeShort]: $ && !w,
          [U.pipModeTall]: $ && w,
          [U.hidden]: Y,
          [U.multiPIPMode]: ee
        }),
        noBorder: !$,
        children: [(r = I, a = T, u = E, _ = J, c = ei, $ && null != x && ((null == W ? void 0 : W.type) === y.fO.ACTIVITY || _) ? (null === (d = x.config) || void 0 === d ? void 0 : d.useInteractivePIP) ? (0, i.jsx)(v.of, {
          onJumpToChannel: et,
          applicationId: x.applicationId,
          channel: s,
          showControls: !u,
          onMouseDown: r,
          onMouseMove: r,
          onMouseLeave: a,
          onToggleHeight: en,
          isExpanded: w,
          hideExpandedButton: _
        }) : _ ? (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(v.q5, {
            idle: u,
            onMouseMove: r,
            onMouseDown: r,
            onMouseLeave: a,
            onJumpToChannel: () => {
              et(), (0, O.tg)(M.Ez.PANEL)
            },
            channel: s,
            applicationId: x.applicationId,
            users: c
          })
        }) : null == W ? null : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("div", {
            onMouseMove: r,
            onMouseDown: r,
            onMouseLeave: a,
            className: U.clickShield,
            onDoubleClick: et
          }), (0, i.jsx)(v.YB, {
            idle: u,
            onMouseMove: r,
            onMouseDown: r,
            onMouseLeave: a,
            onJumpToChannel: et,
            channel: s,
            applicationId: x.applicationId,
            selectedParticipant: W
          })]
        }) : null), L ? (0, i.jsx)(l.Spinner, {
          className: o()(U.iframe, {
            [U.pipModeShort]: $ && !w,
            [U.pipModeTall]: $ && w
          })
        }) : (0, i.jsx)(C.J, {
          allowPopups: (0, p.h)(V),
          referrerPolicy: D.um.has(x.applicationId) ? "no-referrer" : "origin",
          url: x.url,
          queryParams: er,
          className: o()(U.iframe, {
            [U.pipModeShort]: $ && !w,
            [U.pipModeTall]: $ && w,
            [U.pipNonInteractive]: $ && !(null === (n = x.config) || void 0 === n ? void 0 : n.useInteractivePIP)
          }),
          shouldRefocus: !$ && H
        }), !$ && (0, i.jsx)(v.Ds, {
          participantsOpen: z,
          showToggleParticipants: !1,
          channelId: s.id
        })]
      })
    }
  })
}
t.Z = e => {
  let {
    channel: t,
    ...n
  } = e, {
    isLoading: r
  } = (0, L.$)(t);
  return (0, i.jsx)(w, {
    channel: t,
    isLoading: r,
    ...n
  })
}