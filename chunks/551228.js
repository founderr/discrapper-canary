n.d(t, {
    pi: function () {
        return f;
    },
    te: function () {
        return E;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(276852),
    o = n(594174),
    l = n(719247),
    u = n(297781),
    c = n(443487),
    d = n(43205),
    _ = n(182022);
let E = [u.XF];
function f(e) {
    var t, n, r, i, u, c, d;
    let _ = (0, a.e7)([l.Z], () => l.Z.getMatchingActivity(e)),
        E = (0, a.e7)([o.default], () => o.default.getUser(e.author_id));
    if (null == _ || null == E) return {};
    let f = e.extra.entries[0],
        h = null !== (i = null !== (r = (0, s.Z)(_)) && void 0 !== r ? r : null === (t = _.assets) || void 0 === t ? void 0 : t.small_image) && void 0 !== i ? i : f.media.image_url,
        p = null !== (c = null !== (u = _.state) && void 0 !== u ? u : null === (n = f.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== c ? c : f.media.title,
        I = null !== (d = _.details) && void 0 !== d ? d : f.media.title;
    return {
        activity: _,
        artist: p,
        currentEntry: f,
        imageUrl: h,
        title: I,
        user: E
    };
}
t.ZP = i.memo(function (e) {
    let { entry: t, channel: n, selected: i } = e,
        { activity: a, artist: s, imageUrl: o } = f(t);
    return null == a
        ? (0, r.jsx)(c.cA, {})
        : (0, r.jsxs)(c.Zb, {
              selected: i,
              children: [
                  (0, r.jsxs)(c.e$, {
                      children: [
                          (0, r.jsx)(c.F9, {
                              entry: t,
                              channelId: n.id,
                              guildId: n.guild_id
                          }),
                          (0, r.jsx)(c.ll, { children: s }),
                          (0, r.jsx)(u.Gk, {
                              location: u.Gt.CARD,
                              children: E.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                          })
                      ]
                  }),
                  (0, r.jsx)(d.f, {
                      src: o,
                      size: 48,
                      className: _.thumbnail
                  })
              ]
          });
});
