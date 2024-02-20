"use strict";
n.r(t), n.d(t, {
  setCurrentImpression: function() {
    return u
  },
  cleanupImpression: function() {
    return a
  },
  setDebugTrackedData: function() {
    return s
  },
  useImpressionStore: function() {
    return E
  },
  getLocation: function() {
    return _
  },
  getImpressionStack: function() {
    return c
  }
}), n("222007");
var r = n("308503"),
  i = n("759843");
let o = Object.freeze({
    debugTrackedData: null,
    impressions: []
  }),
  l = (0, r.default)(e => o),
  u = e => {
    l.setState(t => ({
      impressions: [...t.impressions, e]
    }))
  },
  a = e => {
    l.setState(t => ({
      impressions: t.impressions.filter(t => t.sequenceId !== e.sequenceId)
    }))
  },
  s = (e, t) => {
    l.setState(() => ({
      debugTrackedData: {
        name: e,
        ...t
      }
    }))
  },
  E = l;

function _() {
  let e = {};
  return l.getState().impressions.forEach(t => {
    t.type === i.ImpressionTypes.PAGE ? e.page = t.name : e.section = t.name
  }), e
}

function c() {
  return l.getState().impressions
}