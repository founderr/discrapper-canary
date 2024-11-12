n.d(t, {
    Z: function () {
        return g;
    }
});
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    s = n(984933),
    a = n(430824),
    o = n(496675),
    c = n(594174),
    d = n(938475),
    u = n(102172),
    f = n(499596),
    h = n(148381),
    m = n(388032),
    x = n(884127);
function g(e) {
    let { selectedChannelId: t, guildId: n, onChangeSelectedChannelId: g } = e,
        p = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        j = (0, i.e7)([a.Z, s.ZP, o.Z], () => (0, u.h_)(s.ZP.getChannels(n), a.Z, o.Z)),
        v = (0, i.e7)([d.ZP], () => d.ZP.getVoiceStates(n)),
        C = j.map((e) => {
            var n;
            return {
                name: (0, l.jsx)(f.Z, {
                    channel: e,
                    users:
                        null === (n = v[e.id]) || void 0 === n
                            ? void 0
                            : n
                                  .filter((e) => {
                                      let { user: t } = e;
                                      return t.id !== (null == p ? void 0 : p.id);
                                  })
                                  .map((e) => {
                                      let { user: t } = e;
                                      return t;
                                  }),
                    selected: e.id === t
                }),
                value: e.id
            };
        });
    return (0, l.jsx)(h.Z, {
        title: m.intl.string(m.t['eg7R/v']),
        scrollerInnerClassName: x.channelSelectScrollerInner,
        children: (0, l.jsx)(r.RadioGroup, {
            options: C,
            value: t,
            itemInfoClassName: x.channelInfoWrapper,
            itemTitleClassName: x.channelTitleWrapper,
            onChange: (e) => {
                let { value: t } = e;
                return g(t);
            }
        })
    });
}
