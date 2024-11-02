n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(873128),
    o = n(704041),
    l = n(463031),
    u = n(383177);
function c(e) {
    let { guild: t, message: n } = e,
        [c, d] = i.useState(!1),
        f = i.useRef(!1),
        _ = (0, s.Z)({
            guildId: t.id,
            leaderboardId: l._,
            intervalOffset: 0
        });
    return i.useMemo(() => {
        var e;
        if ((null == _ ? void 0 : null === (e = _.guild_settings) || void 0 === e ? void 0 : e.show_winner_crown) !== !0) return !1;
        let t = _.users[0];
        return n.author.id === (null == t ? void 0 : t.user_id);
    }, [_, n])
        ? (0, r.jsx)('div', {
              className: u.badge,
              onMouseEnter: () => {
                  (f.current = !0), d(!0);
              },
              onMouseLeave: () => {
                  (f.current = !1),
                      setTimeout(() => {
                          !f.current && d(!1);
                      }, 100);
              },
              children: (0, r.jsx)(a.Popout, {
                  animation: a.Popout.Animation.TRANSLATE,
                  align: 'center',
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: 'top',
                  shouldShow: c,
                  renderPopout: () =>
                      (0, r.jsx)(o.Z, {
                          guildId: t.id,
                          previewMode: !0
                      }),
                  children: () =>
                      (0, r.jsx)(a.LeagueOfLegendsBrandIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20
                      })
              })
          })
        : null;
}
