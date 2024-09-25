n.d(t, {
    Y: function () {
        return c;
    }
});
var r = n(47120);
var i = n(544891),
    a = n(147913),
    o = n(25733),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class u extends a.Z {
    handleDmSettingsUpsellShow(e) {
        o.Z.openDmSettingsUpsellModal(e.guildId);
    }
    constructor(...e) {
        super(...e), l(this, 'actions', { DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow });
    }
}
function c(e) {
    return i.tn.post({ url: s.ANM.DM_SETTINGS_UPSELL_ACK(e) });
}
t.Z = new u();
