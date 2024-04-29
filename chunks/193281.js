"use strict";
s.r(t), s.d(t, {
  SUPPORTED_ACTIVITY_TYPES: function() {
    return E
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("499237"),
  n = s("1385"),
  r = s("692547"),
  o = s("835473"),
  u = s("443487"),
  d = s("43205"),
  c = s("371991"),
  f = s("81063"),
  S = s("55935"),
  m = s("981631"),
  I = s("689938"),
  v = s("948000");
let E = new Set([m.ActivityTypes.PLAYING, m.ActivityTypes.LISTENING]);
t.default = a.memo(function(e) {
  var t, s, E, x;
  let {
    activity: _
  } = e, {
    assets: T,
    application_id: A
  } = _, N = null === (t = (0, o.useGetOrFetchApplication)(A)) || void 0 === t ? void 0 : t.getIconURL(128), C = (0, f.getAssetImage)(A, null == T ? void 0 : T.large_image, 128), g = null !== (x = null !== (E = null === (s = _.timestamps) || void 0 === s ? void 0 : s.start) && void 0 !== E ? E : _.created_at) && void 0 !== x ? x : 0, [U, h] = a.useState(Date.now()), {
    seconds: p,
    minutes: j,
    hours: R
  } = (0, S.diffAsUnits)(g, U), {
    Icon: M,
    title: P,
    iconColor: y,
    textColor: O
  } = function(e) {
    switch (e.type) {
      case m.ActivityTypes.PLAYING:
        return {
          Icon: i.GameControllerIcon, title: I.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.name
          }), iconColor: r.default.colors.STATUS_POSITIVE, textColor: "status-positive"
        };
      case m.ActivityTypes.LISTENING:
        var t;
        return {
          Icon: n.RecordPlayerIcon, title: I.default.Messages.USER_PROFILE_ACTIVITY_LISTENING_TO.format({
            name: null !== (t = e.state) && void 0 !== t ? t : e.name
          }), iconColor: r.default.colors.TEXT_SECONDARY, textColor: "text-secondary"
        };
      default:
        return {
          Icon: i.GameControllerIcon, title: I.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.name
          }), iconColor: r.default.colors.STATUS_POSITIVE, textColor: "status-positive"
        }
    }
  }(_);
  return (0, l.jsxs)("div", {
    className: v.cardContainer,
    children: [(0, l.jsx)(d.ContentImage, {
      src: null != N ? N : C,
      size: 48
    }), (0, l.jsxs)(u.CardInfoSection, {
      children: [(0, l.jsx)(u.CardTitle, {
        children: P
      }), null != g && (0, l.jsxs)("div", {
        className: v.playtimeContainer,
        children: [(0, l.jsx)(M, {
          width: 12,
          height: 12,
          color: y
        }), (0, l.jsx)(c.ActiveTimestampFromDuration, {
          startTime: g,
          seconds: p,
          minutes: j,
          hours: R,
          now: U,
          setNow: h,
          textColor: O
        })]
      })]
    })]
  })
})