n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(5192),
    i = n(981631),
    a = n(388032);
function s(e, t, n, s) {
    if (e.state === i.jm8.RECONNECTING)
        return {
            mainText: a.intl.string(a.t.pdFFKy),
            supportingText: a.intl.string(a.t['+PuO2N'])
        };
    if (e.state === i.jm8.PAUSED)
        return n
            ? {
                  mainText: a.intl.string(a.t['5q17w8']),
                  supportingText: a.intl.string(a.t.LV1NSE)
              }
            : {
                  mainText: a.intl.string(a.t['5q17w8']),
                  supportingText: a.intl.formatToPlainString(a.t.meVVlZ, { username: r.ZP.getName(e.guildId, e.channelId, t) })
              };
    return s
        ? {
              mainText: a.intl.string(a.t.JmaKtL),
              supportingText: a.intl.string(a.t['hC3+BA'])
          }
        : null;
}
