n.d(t, {
    o: function () {
        return l;
    }
});
var i = n(399606),
    s = n(592125),
    a = n(587100);
function l(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.getChannel(e)),
        { enabled: n } = a.Z.useExperiment({ location: 'baec9c_1' });
    return (
        n &&
        (function (e) {
            return null != e && (!!e.isMultiUserDM() || (!!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find((e) => e.bot)));
        })(t)
    );
}
