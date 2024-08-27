t.d(n, {
    Z: function () {
        return g;
    }
});
var l = t(735250);
t(470079);
var s = t(442837),
    a = t(481060),
    r = t(984933),
    i = t(430824),
    o = t(496675),
    u = t(594174),
    c = t(938475),
    d = t(382182),
    m = t(499596),
    E = t(148381),
    S = t(689938),
    _ = t(787422);
function g(e) {
    let { selectedChannelId: n, guildId: t, onChangeSelectedChannelId: g } = e,
        h = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        x = (0, s.e7)([i.Z, r.ZP, o.Z], () => (0, d.h_)(r.ZP.getChannels(t), i.Z, o.Z)),
        Z = (0, s.e7)([c.ZP], () => c.ZP.getVoiceStates(t)),
        f = x.map((e) => {
            var t;
            return {
                name: (0, l.jsx)(m.Z, {
                    channel: e,
                    users:
                        null === (t = Z[e.id]) || void 0 === t
                            ? void 0
                            : t
                                  .filter((e) => {
                                      let { user: n } = e;
                                      return n.id !== (null == h ? void 0 : h.id);
                                  })
                                  .map((e) => {
                                      let { user: n } = e;
                                      return n;
                                  }),
                    selected: e.id === n
                }),
                value: e.id
            };
        });
    return (0, l.jsx)(E.Z, {
        title: S.Z.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
        scrollerInnerClassName: _.channelSelectScrollerInner,
        children: (0, l.jsx)(a.RadioGroup, {
            options: f,
            value: n,
            itemInfoClassName: _.channelInfoWrapper,
            itemTitleClassName: _.channelTitleWrapper,
            onChange: (e) => {
                let { value: n } = e;
                return g(n);
            }
        })
    });
}
