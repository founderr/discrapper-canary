"use strict";
n.r(t), n.d(t, {
  isDismissibleContentDismissed: function() {
    return S
  },
  useIsDismissibleContentDismissed: function() {
    return g
  },
  requestMarkDismissibleContentAsShown: function() {
    return T
  },
  markDismissibleContentAsDismissed: function() {
    return I
  }
}), n("222007");
var i = n("446674"),
  r = n("151426"),
  s = n("193302"),
  a = n("872173"),
  o = n("374363"),
  l = n("599110"),
  u = n("674268"),
  c = n("495226"),
  d = n("585653"),
  p = n("989691"),
  h = n("127746"),
  f = n("862853"),
  E = n("846614"),
  _ = n("994428"),
  m = n("49111");

function S(e) {
  var t;
  if ((0, E.disableNewUserDismissibleContent)(e)) return !0;
  let n = null === (t = o.default.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
  return null != n && (0, u.hasBit)(n, e)
}

function g(e) {
  return (0, i.useStateFromStores)([o.default], () => S(e))
}

function T(e, t, n) {
  if ((0, f.isContentShown)(e) || p.default.hasUserHitDCCap(e)) return;
  let i = function(e) {
    let t = h.CONTENT_TYPES_WITH_BYPASS_HOLDOUT.has(e),
      {
        enabled: n
      } = s.default.getCurrentConfig({
        location: "isUserSubjectToDCFHoldout"
      }, {
        autoTrackExposure: !t
      });
    return n && !t
  }(e);
  if (!i) !n && (0, f.addCandidateContent)({
    content: e,
    groupName: null == t ? void 0 : t.groupName,
    onAdded: () => {
      var n;
      let [i, s] = (0, f.getCurrentlyShownCounts)();
      (0, d.handleDCShownToUser)(e), l.default.track(m.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
        type: r.DismissibleContent[e],
        content_count: i,
        fatigable_content_count: s,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: c.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
        guild_id: null == t ? void 0 : t.guildId
      }), null == t || null === (n = t.onShown) || void 0 === n || n.call(t)
    }
  })
}
async function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  ((0, f.isContentShown)(e) || t.forceTrack) && function(e, t) {
    var n;
    let [i] = (0, f.getCurrentlyShownCounts)(), s = p.default.getRenderedAtTimestamp(e), a = new Date, o = null == s ? null : a.getTime() - s;
    l.default.track(m.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
      type: r.DismissibleContent[e],
      action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : _.ContentDismissActionType.UNKNOWN,
      content_count: i,
      group_name: null == t ? void 0 : t.groupName,
      bypass_fatigue: c.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
      guild_id: null == t ? void 0 : t.guildId,
      shown_duration: o
    })
  }(e, t), (0, d.handleDCDismissed)(e), await (0, a.addDismissedContent)(e);
  let n = !p.default.hasUserHitDCCap();
  (0, f.removeCandidateContent)({
    content: e,
    groupName: null == t ? void 0 : t.groupName
  }, n)
}