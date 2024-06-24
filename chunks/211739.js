t.d(n, {
  N5: function() {
    return a
  },
  c4: function() {
    return _
  },
  lc: function() {
    return u
  },
  mJ: function() {
    return s
  }
});
var E = t(570140);

function _(e) {
  E.Z.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function s(e) {
  E.Z.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function a(e) {
  E.Z.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function u(e) {
  E.Z.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}