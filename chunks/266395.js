n.d(t, {
  PE: function() {
return u;
  },
  a5: function() {
return l;
  },
  rb: function() {
return o;
  }
});
var r = n(652874),
  i = n(585483),
  a = n(981631);
let s = Object.freeze({
hasUnsubmittedChanges: !1,
shouldShowWarning: !1
  }),
  o = (0, r.Z)(e => s),
  l = e => {
o.setState({
  hasUnsubmittedChanges: e
});
  },
  u = e => {
o.setState({
  shouldShowWarning: e
}), e && i.S.dispatch(a.CkL.EMPHASIZE_NOTICE);
  };