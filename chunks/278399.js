l.d(n, {
    Ho: function () {
        return m;
    },
    y9: function () {
        return x;
    }
});
var t = l(200651),
    i = l(192379),
    r = l(317261),
    a = l(823379),
    d = l(379357),
    s = l(442550),
    u = l(561308),
    c = l(297781),
    o = l(443487),
    h = l(404720);
let m = [c.An],
    x = [r._.WEEK];
n.ZP = i.memo((e) => {
    let { entry: n, channel: l, selected: i } = e,
        { largeImage: r } = (0, d.rv)({ entry: n }),
        v = (0, u.Nq)(n);
    return null != v && (0, a.Hi)(v, x)
        ? (0, t.jsxs)(o.Zb, {
              selected: i,
              children: [
                  (0, t.jsxs)(o.e$, {
                      children: [
                          (0, t.jsx)(o.F9, {
                              entry: n,
                              channelId: l.id,
                              guildId: l.guild_id
                          }),
                          (0, t.jsx)(o.ll, { children: n.extra.artist.name }),
                          (0, t.jsx)(c.Gk, {
                              location: c.Gt.CARD,
                              children: m.map((e, l) => (0, t.jsx)(e, { entry: n }, l))
                          })
                      ]
                  }),
                  (0, t.jsx)(s.f, {
                      src: null == r ? void 0 : r.src,
                      size: 48,
                      className: h.thumbnail
                  })
              ]
          })
        : null;
});
