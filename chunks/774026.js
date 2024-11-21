n.d(t, {
    Z: function () {
        return m;
    }
});
var l = n(200651);
n(192379);
var i = n(913527),
    r = n.n(i),
    s = n(793030),
    a = n(461195),
    o = n(739566),
    c = n(942951),
    d = n(63063),
    u = n(981631),
    f = n(388032),
    h = n(469054);
function m(e) {
    var t;
    let { streamingUntil: n, user: i, channel: m } = e,
        x = (0, o.JZ)(i, m),
        g = (0, c.l)({
            user: i,
            channelId: m.id,
            guildId: m.guild_id,
            messageId: void 0
        })(x),
        p = r()(n).diff(r()(), 'hours');
    return p <= 0
        ? null
        : (0, l.jsxs)('div', {
              className: h.attribution,
              children: [
                  (0, l.jsx)(a.Z, { className: h.img }),
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(s.X6, {
                              variant: 'heading-sm/bold',
                              children: f.intl.string(f.t.K04rOD)
                          }),
                          (0, l.jsx)(s.xv, {
                              color: 'text-muted',
                              variant: 'text-sm/medium',
                              children: f.intl.format(f.t.NZDuBg, {
                                  actorName: null !== (t = i.globalName) && void 0 !== t ? t : i.username,
                                  actorHook: g,
                                  num: p,
                                  helpCenterLink: d.Z.getArticleURL(u.BhN.HD_STREAMING_POTION)
                              })
                          })
                      ]
                  })
              ]
          });
}
