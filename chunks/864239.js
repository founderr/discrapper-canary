t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(735250);
t(470079);
var a = t(695346),
    i = t(682578),
    r = t(639814),
    o = t(838436),
    l = t(51331),
    c = t(726985),
    d = t(736530),
    _ = t(689938);
function u() {
    let e = (0, i.J)(),
        s = a.DC.useSetting();
    return (0, r.i)() !== d.T
        ? null
        : (0, n.jsx)(o.U, {
              setting: c.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
              children: (0, n.jsx)(l.Z, {
                  title: _.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER,
                  value: s,
                  onChange: a.DC.updateSetting,
                  disabled: !e,
                  note: _.Z.Messages.NSFW_GUILDS_TOGGLE_CAPTION
              })
          });
}
