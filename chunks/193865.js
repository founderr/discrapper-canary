"use strict";
n.r(t), n.d(t, {
  useShowImprovedMarkdownUserExperimentConfig: function() {
    return l
  },
  useShowImprovedMarkdownGuildExperimentConfig: function() {
    return s
  }
});
var i = n("299039"),
  r = n("488197");

function l(e) {
  return u(e, r.ImprovedMarkdownUserExperiment.useExperiment({
    location: "590063_2"
  }))
}

function s(e, t) {
  return u(t, r.ImprovedMarkdownGuildExperiment.useExperiment({
    guildId: e,
    location: "590063_4"
  }))
}

function u(e, t) {
  return e < i.default.extractTimestamp("1088216706570268682") ? r.ImprovedMarkdownUserExperiment.definition.defaultConfig : t
}