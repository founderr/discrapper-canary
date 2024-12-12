r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(5192),
    a = r(981631),
    s = r(388032);
function o(e, n, r, o) {
    if (e.state === a.jm8.RECONNECTING)
        return {
            mainText: s.intl.string(s.t.pdFFKy),
            supportingText: s.intl.string(s.t['+PuO2N'])
        };
    if (e.state === a.jm8.PAUSED)
        return r
            ? {
                  mainText: s.intl.string(s.t['5q17w8']),
                  supportingText: s.intl.string(s.t.LV1NSE)
              }
            : {
                  mainText: s.intl.string(s.t['5q17w8']),
                  supportingText: s.intl.formatToPlainString(s.t.meVVlZ, { username: i.ZP.getName(e.guildId, e.channelId, n) })
              };
    return o
        ? {
              mainText: s.intl.string(s.t.JmaKtL),
              supportingText: s.intl.string(s.t['hC3+BA'])
          }
        : null;
}
