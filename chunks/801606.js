n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var r = n(388123),
    i = n(697426),
    a = n(375954),
    s = n(710111);
function o(e, t) {
    var n;
    return null == e ? void 0 : null === (n = e.soundboardSounds) || void 0 === n ? void 0 : n.find((e) => String(e.sound_id) === String(t));
}
function l(e, t, n) {
    var l, u, c;
    let d = a.Z.getMessage(e, t);
    if (null == d) return;
    let f =
        (null == d ? void 0 : null === (l = d.messageReference) || void 0 === l ? void 0 : l.type) === r.U.FORWARD
            ? (function (e, t) {
                  let n;
                  for (let r of e) {
                      let e = o(r.message, t);
                      if (null != e) {
                          n = e;
                          break;
                      }
                  }
                  return n;
              })(null !== (u = null == d ? void 0 : d.messageSnapshots) && void 0 !== u ? u : [], n)
            : o(d, n);
    if (null != f) return (0, i.o3)(f, null !== (c = f.guild_id) && void 0 !== c ? c : s.X8);
}
