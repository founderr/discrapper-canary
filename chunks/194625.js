r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(887490);
let o = 'applicationCommand';
function l(e, n) {
    if (s.bN.areStylesDisabled(e)) return [];
    let [r, i] = n,
        a = [];
    if (!s.LC.isText(r)) return a;
    let [l] = s.bN.node(e, s.C0.parent(i));
    return s.aj.isType(l, o)
        ? (r === l.children[0] &&
              a.push({
                  anchor: {
                      path: i,
                      offset: 0
                  },
                  focus: {
                      path: i,
                      offset: 0 + l.command.displayName.length + 1
                  },
                  commandName: !0
              }),
          a)
        : a;
}
