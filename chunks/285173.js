E.d(_, {
    Z: function () {
        return a;
    }
});
var s = E(735250),
    n = E(470079),
    t = E(481060),
    r = E(412899),
    T = E(231338);
function a(e) {
    var _;
    let { guildId: E, role: a, className: I, canRemove: l = !1, onRemove: o = T.dG } = e,
        A = (0, t.useToken)(t.tokens.unsafe_rawColors.PRIMARY_300).hex(),
        i = null !== (_ = null == a ? void 0 : a.colorString) && void 0 !== _ ? _ : A,
        N = n.useMemo(() => ({ backgroundColor: ''.concat(i, '27') }), [i]);
    return null == a
        ? null
        : (0, s.jsx)(t.Clickable, {
              children: (0, s.jsx)(r.UB, {
                  className: I,
                  style: N,
                  role: a,
                  guildId: E,
                  canRemove: l,
                  onRemove: o
              })
          });
}
