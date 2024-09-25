n.d(t, {
    Z: function () {
        return l;
    }
});
var s = n(735250);
n(470079);
var r = n(882037),
    i = n(853268),
    a = n(689938),
    o = n(113207);
function l() {
    let { required: e, checked: t } = (0, r.MD)();
    return e
        ? (0, s.jsx)(i.Z, {
              value: t,
              subText: a.Z.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
              onChange: r.ZJ,
              marginTopStyle: o.marginTop8,
              muted: !0
          })
        : null;
}
