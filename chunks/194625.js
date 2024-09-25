n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(887490);
let o = 'applicationCommand';
function s(e, t) {
    if (a.bN.areStylesDisabled(e)) return [];
    let [n, r] = t,
        i = [];
    if (!a.LC.isText(n)) return i;
    let [s] = a.bN.node(e, a.C0.parent(r));
    return a.aj.isType(s, o)
        ? (n === s.children[0] &&
              i.push({
                  anchor: {
                      path: r,
                      offset: 0
                  },
                  focus: {
                      path: r,
                      offset: 0 + s.command.displayName.length + 1
                  },
                  commandName: !0
              }),
          i)
        : i;
}
