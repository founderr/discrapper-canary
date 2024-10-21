n.d(t, {
    Z: function () {
        return _;
    }
});
var l = n(200651);
n(192379);
var s = n(442837),
    i = n(481060),
    r = n(984933),
    a = n(430824),
    o = n(496675),
    c = n(594174),
    d = n(938475),
    u = n(382182),
    f = n(499596),
    h = n(148381),
    m = n(689938),
    x = n(884127);
function _(e) {
    let { selectedChannelId: t, guildId: n, onChangeSelectedChannelId: _ } = e,
        g = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        p = (0, s.e7)([a.Z, r.ZP, o.Z], () => (0, u.h_)(r.ZP.getChannels(n), a.Z, o.Z)),
        C = (0, s.e7)([d.ZP], () => d.ZP.getVoiceStates(n)),
        S = p.map((e) => {
            var n;
            return {
                name: (0, l.jsx)(f.Z, {
                    channel: e,
                    users:
                        null === (n = C[e.id]) || void 0 === n
                            ? void 0
                            : n
                                  .filter((e) => {
                                      let { user: t } = e;
                                      return t.id !== (null == g ? void 0 : g.id);
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
        title: m.Z.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
        scrollerInnerClassName: x.channelSelectScrollerInner,
        children: (0, l.jsx)(i.RadioGroup, {
            options: S,
            value: t,
            itemInfoClassName: x.channelInfoWrapper,
            itemTitleClassName: x.channelTitleWrapper,
            onChange: (e) => {
                let { value: t } = e;
                return _(t);
            }
        })
    });
}
