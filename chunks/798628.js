n.d(t, {
  cE: function() {
return l;
  },
  eu: function() {
return o;
  },
  fU: function() {
return c;
  }
});
var i = n(652874),
  s = n(902704);
let a = {},
  r = (0, i.Z)(e => ({
polls: {},
updatePollState(t, n, i) {
  e(e => {
    var s;
    return {
      polls: {
        ...e.polls,
        [t]: {
          ...e.polls[t],
          [n]: i(null === (s = e.polls[t]) || void 0 === s ? void 0 : s[n])
        }
      }
    };
  });
}
  }));

function l(e) {
  return r(t => {
var n;
return null !== (n = t.polls[e]) && void 0 !== n ? n : a;
  }, s.Z);
}

function o(e, t, n) {
  r.getState().updatePollState(e, t, n);
}

function c(e, t) {
  var n;
  return null === (n = r.getState().polls[e]) || void 0 === n ? void 0 : n[t];
}