"use strict";
n.r(t), n.d(t, {
  generateDecorators: function() {
    return r
  },
  getSelectionScope: function() {
    return o
  }
}), n("653041");
var a = n("395041");
n("349033");
var l = n("999650");
n("72006");
var s = n("405656");
n("981631");
let i = {
  [l.ComponentTypes.FILTER]: a.Filter,
  [l.ComponentTypes.ANSWER]: a.Answer
};

function r() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = [];
  return Object.keys(e).forEach(n => {
    let a = e[n];
    t.push({
      strategy: (e, t, a) => (function(e, t, n, a) {
        t.findEntityRanges(t => {
          let n = t.getEntity();
          return null !== n && e.getEntity(n).getType() === a
        }, n)
      })(a, e, t, n),
      component: i[a.componentType]
    })
  }), t
}

function o(e, t) {
  let {
    focusOffset: n,
    anchorOffset: a
  } = t.getSelection();
  return (0, s.getSelectionScope)(e, n, a)
}