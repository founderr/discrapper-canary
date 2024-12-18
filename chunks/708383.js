var i = n(200651),
    s = n(192379),
    r = n(512969),
    a = n(749210),
    o = n(287734),
    l = n(765717),
    d = n(893607),
    c = n(703656),
    u = n(981631);
class h extends s.Component {
    componentDidUpdate(e) {
        let { location: t } = this.props;
        t.pathname + t.search !== e.location.pathname + e.location.search && this.checkGuildAndChannel();
    }
    checkGuildAndChannel() {
        let { match: e } = this.props;
        if (null == e) return;
        let {
            guildId: t,
            channelId: n,
            messageId: i
        } = (function (e) {
            let { guildId: t, channelId: n, messageId: i } = e.params;
            return {
                guildId: null != t && '' !== t ? t : u.ME,
                channelId: n,
                messageId: i
            };
        })(e);
        (0, d.Ss)(t) && (0, d.cq)(n)
            ? (a.Z.selectGuild(t),
              o.default.selectChannel({
                  guildId: t,
                  channelId: n,
                  messageId: i
              }))
            : (0, c.dL)(u.Z5c.ME);
    }
    render() {
        return null;
    }
}
t.Z = () =>
    (0, i.jsxs)(r.rs, {
        children: [
            (0, i.jsx)(l.Z, {
                path: u.Z5c.CHANNEL(d.Hw.guildId(), d.Hw.channelId({ optional: !0 }), ':messageId?'),
                component: h
            }),
            (0, i.jsx)(l.Z, { component: h })
        ]
    });
