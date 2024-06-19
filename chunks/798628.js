n.d(t, {
  cE: function() {
    return r
  },
  eu: function() {
    return o
  },
  fU: function() {
    return c
  }
});
var s = n(652874),
  i = n(902704);
let l = {},
  a = (0, s.Z)(e => ({
    polls: {},
    updatePollState(t, n, s) {
      e(e => {
        var i;
        return {
          polls: {
            ...e.polls,
            [t]: {
              ...e.polls[t],
              [n]: s(null === (i = e.polls[t]) || void 0 === i ? void 0 : i[n])
            }
          }
        }
      })
    }
  }));

function r(e) {
  return a(t => {
    var n;
    return null !== (n = t.polls[e]) && void 0 !== n ? n : l
  }, i.Z)
}

function o(e, t, n) {
  a.getState().updatePollState(e, t, n)
}

function c(e, t) {
  var n;
  return null === (n = a.getState().polls[e]) || void 0 === n ? void 0 : n[t]
}