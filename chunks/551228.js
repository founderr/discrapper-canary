l.d(n, {
    pi: function () {
        return x;
    },
    te: function () {
        return m;
    }
}),
    l(47120);
var t = l(200651),
    i = l(192379),
    r = l(442837),
    a = l(594174),
    s = l(379357),
    d = l(719247),
    u = l(442550),
    c = l(297781),
    o = l(443487),
    h = l(494399);
let m = [c.XF];
function x(e) {
    var n, l, t, i;
    let s = (0, r.e7)([d.Z], () => d.Z.getMatchingActivity(e)),
        u = (0, r.e7)([a.default], () => a.default.getUser(e.author_id));
    if (null == s || null == u) return {};
    let c = e.extra.entries[0],
        o = null !== (t = null !== (l = s.state) && void 0 !== l ? l : null === (n = c.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== t ? t : c.media.title,
        h = null !== (i = s.details) && void 0 !== i ? i : c.media.title;
    return {
        activity: s,
        artist: o,
        currentEntry: c,
        title: h,
        user: u
    };
}
n.ZP = i.memo(function (e) {
    let { entry: n, channel: l, selected: i } = e,
        { activity: r, artist: a } = x(n),
        { largeImage: d } = (0, s.rv)({ entry: n });
    return null == r
        ? (0, t.jsx)(o.cA, {})
        : (0, t.jsxs)(o.Zb, {
              selected: i,
              children: [
                  (0, t.jsxs)(o.e$, {
                      children: [
                          (0, t.jsx)(o.F9, {
                              entry: n,
                              channelId: l.id,
                              guildId: l.guild_id
                          }),
                          (0, t.jsx)(o.ll, { children: a }),
                          (0, t.jsx)(c.Gk, {
                              location: c.Gt.CARD,
                              children: m.map((e, l) => (0, t.jsx)(e, { entry: n }, l))
                          })
                      ]
                  }),
                  (0, t.jsx)(u.f, {
                      src: null == d ? void 0 : d.src,
                      size: 48,
                      className: h.thumbnail
                  })
              ]
          });
});
