n.d(t, {
    pi: function () {
        return h;
    },
    te: function () {
        return f;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(594174),
    l = n(379357),
    u = n(719247),
    c = n(442550),
    d = n(297781),
    _ = n(443487),
    E = n(494399);
let f = [d.XF];
function h(e) {
    var t, n, r, i;
    let a = (0, o.e7)([u.Z], () => u.Z.getMatchingActivity(e)),
        l = (0, o.e7)([s.default], () => s.default.getUser(e.author_id));
    if (null == a || null == l) return {};
    let c = e.extra.entries[0],
        d = null !== (r = null !== (n = a.state) && void 0 !== n ? n : null === (t = c.media.artists[0]) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : c.media.title,
        _ = null !== (i = a.details) && void 0 !== i ? i : c.media.title;
    return {
        activity: a,
        artist: d,
        currentEntry: c,
        title: _,
        user: l
    };
}
function p(e) {
    let { entry: t, channel: n, selected: r } = e,
        { activity: a, artist: o } = h(t),
        { largeImage: s } = (0, l.rv)({ entry: t });
    return null == a
        ? (0, i.jsx)(_.cA, {})
        : (0, i.jsxs)(_.Zb, {
              selected: r,
              children: [
                  (0, i.jsxs)(_.e$, {
                      children: [
                          (0, i.jsx)(_.F9, {
                              entry: t,
                              channelId: n.id,
                              guildId: n.guild_id
                          }),
                          (0, i.jsx)(_.ll, { children: o }),
                          (0, i.jsx)(d.Gk, {
                              location: d.Gt.CARD,
                              children: f.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                          })
                      ]
                  }),
                  (0, i.jsx)(c.f, {
                      src: null == s ? void 0 : s.src,
                      size: 48,
                      className: E.thumbnail
                  })
              ]
          });
}
t.ZP = a.memo(p);
