E.d(_, {
    Z: function () {
        return T;
    }
});
var s = E(735250),
    n = E(470079),
    t = E(481060),
    r = E(412899),
    a = E(231338);
function T(e) {
    var _;
    let { guildId: E, role: T, className: I, canRemove: l = !1, onRemove: o = a.dG } = e,
        A = (0, t.useToken)(t.tokens.unsafe_rawColors.PRIMARY_300).hex(),
        i = null !== (_ = null == T ? void 0 : T.colorString) && void 0 !== _ ? _ : A,
        N = n.useMemo(() => ({ backgroundColor: ''.concat(i, '27') }), [i]);
    return null == T
        ? null
        : (0, s.jsx)(t.Clickable, {
              children: (0, s.jsx)(r.UB, {
                  className: I,
                  style: N,
                  role: T,
                  guildId: E,
                  canRemove: l,
                  onRemove: o
              })
          });
}
