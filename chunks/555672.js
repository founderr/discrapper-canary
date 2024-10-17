l.d(n, {
    Hs: function () {
        return m;
    },
    qy: function () {
        return x;
    }
});
var t = l(735250),
    i = l(470079),
    r = l(317261),
    a = l(379357),
    s = l(442550),
    d = l(561308),
    u = l(297781),
    c = l(443487),
    o = l(494399);
let m = [u.E6],
    h = [r._.WEEK];
function x(e) {
    return null != e && h.includes(e);
}
n.ZP = i.memo((e) => {
    let { entry: n, channel: l, selected: i } = e,
        { largeImage: r } = (0, a.rv)({ entry: n }),
        h = (0, d.Nq)(n);
    return null != h && x(h)
        ? (0, t.jsxs)(c.Zb, {
              selected: i,
              children: [
                  (0, t.jsxs)(c.e$, {
                      children: [
                          (0, t.jsx)(c.F9, {
                              entry: n,
                              channelId: l.id,
                              guildId: l.guild_id
                          }),
                          (0, t.jsx)(c.ll, { children: n.extra.game_name }),
                          (0, t.jsx)(u.Gk, {
                              location: u.Gt.CARD,
                              children: m.map((e, l) => (0, t.jsx)(e, { entry: n }, l))
                          })
                      ]
                  }),
                  (0, t.jsx)(s.f, {
                      src: null == r ? void 0 : r.src,
                      size: 48,
                      className: o.thumbnail,
                      alt: null == r ? void 0 : r.alt
                  })
              ]
          })
        : null;
});
