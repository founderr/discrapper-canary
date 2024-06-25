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
  p = n(317381),
  R = n(963614),
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
  } = e, [w, x] = r.useState(!1), B = (0, a.e7)([p.ZP], () => p.ZP.getSelfEmbeddedActivityForChannel(s.id)), k = (0, a.e7)([p.ZP], () => p.ZP.getActivityPanelMode()), V = (0, E.q)(null == B ? void 0 : B.applicationId), Z = null == B ? void 0 : B.launchId, H = (0, a.e7)([N.Z], () => N.Z.getChannelId() === s.id), {
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
    activityParticipant: null != B ? I.Z.getParticipant(s.id, B.applicationId) : null,
    selectedParticipant: I.Z.getSelectedParticipant(s.id),
    participantsOpen: I.Z.getParticipantsOpen(s.id)
  })), q = H || null != j, X = (0, g.Z)(s.id), Q = X && (null == K ? void 0 : K.type) !== y.fO.ACTIVITY, J = !X && k === M.Ez.PIP, $ = (!q || q && (Q || J) && null == F) && !Y, ee = $ && null != A.Z.pipVideoWindow && null != A.Z.pipActivityWindow;

  function et() {
    var e;
    null != B && _.Z.selectParticipant(s.id, B.applicationId);
    let t = null !== (e = s.getGuildId()) && void 0 !== e ? e : P.ME;
    c.Z.channelListScrollTo(t, s.id), (0, h.XU)(t, s.id), null == j && (0, d.Ou)()
  }

  function en() {
    x(!w)
  }
  r.useEffect(() => {
    if ((null == B ? void 0 : B.applicationId) != null) {
      let e = $ ? D.cE.PIP : D.cE.FOCUSED;
      u.Z.dispatch({
        type: "ACTIVITY_LAYOUT_MODE_UPDATE",
        layoutMode: e,
        applicationId: B.applicationId
      })
    }
  }, [null == B ? void 0 : B.applicationId, $]);
  if (null == B || null == Z || null == W && (0, g.Z)(s.id) || null == V) return null;
  let ei = Array.from(B.userIds).map(e => m.default.getUser(e)).filter(e => null != e),
    er = {
      instance_id: null !== (n = null !== (t = B.compositeInstanceId) && void 0 !== t ? t : B.launchId) && void 0 !== n ? n : "",
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
          [b.idle]: E && !(null === (t = B.config) || void 0 === t ? void 0 : t.useInteractivePIP),
          [U.pipModeShort]: $ && !w,
          [U.pipModeTall]: $ && w,
          [U.hidden]: Y,
          [U.multiPIPMode]: ee
        }),
        noBorder: !$,
        children: [(r = I, a = T, u = E, _ = J, c = ei, $ && null != B && ((null == W ? void 0 : W.type) === y.fO.ACTIVITY || _) ? (null === (d = B.config) || void 0 === d ? void 0 : d.useInteractivePIP) ? (0, i.jsx)(v.of, {
          onJumpToChannel: et,
          applicationId: B.applicationId,
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
            applicationId: B.applicationId,
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
            applicationId: B.applicationId,
            selectedParticipant: W
          })]
        }) : null), L ? (0, i.jsx)(l.Spinner, {
          className: o()(U.iframe, {
            [U.pipModeShort]: $ && !w,
            [U.pipModeTall]: $ && w
          })
        }) : (0, i.jsx)(C.J, {
          allowPopups: (0, R.h)(V),
          referrerPolicy: D.um.has(B.applicationId) ? "no-referrer" : "origin",
          url: B.url,
          queryParams: er,
          className: o()(U.iframe, {
            [U.pipModeShort]: $ && !w,
            [U.pipModeTall]: $ && w,
            [U.pipNonInteractive]: $ && !(null === (n = B.config) || void 0 === n ? void 0 : n.useInteractivePIP)
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