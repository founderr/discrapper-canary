"use strict";
n.r(t), n.d(t, {
  ADD_SOURCE: function() {
    return r
  },
  ADD_TARGET: function() {
    return a
  },
  REMOVE_SOURCE: function() {
    return o
  },
  REMOVE_TARGET: function() {
    return i
  },
  addSource: function() {
    return s
  },
  addTarget: function() {
    return c
  },
  removeSource: function() {
    return l
  },
  removeTarget: function() {
    return u
  }
});
var r = "dnd-core/ADD_SOURCE",
  a = "dnd-core/ADD_TARGET",
  o = "dnd-core/REMOVE_SOURCE",
  i = "dnd-core/REMOVE_TARGET";

function s(e) {
  return {
    type: r,
    payload: {
      sourceId: e
    }
  }
}

function c(e) {
  return {
    type: a,
    payload: {
      targetId: e
    }
  }
}

function l(e) {
  return {
    type: o,
    payload: {
      sourceId: e
    }
  }
}

function u(e) {
  return {
    type: i,
    payload: {
      targetId: e
    }
  }
}