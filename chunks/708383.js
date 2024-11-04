var i = n(200651),
    r = n(192379),
    s = n(512969),
    a = n(749210),
    l = n(287734),
    o = n(765717),
    c = n(893607),
    d = n(703656),
    u = n(981631);
class h extends r.Component {
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
        (0, c.Ss)(t) && (0, c.cq)(n)
            ? (a.Z.selectGuild(t),
              l.default.selectChannel({
                  guildId: t,
                  channelId: n,
                  messageId: i
              }))
            : (0, d.dL)(u.Z5c.ME);
    }
    render() {
        return null;
    }
}
t.Z = () =>
    (0, i.jsxs)(s.rs, {
        children: [
            (0, i.jsx)(o.Z, {
                path: u.Z5c.CHANNEL(c.Hw.guildId(), c.Hw.channelId({ optional: !0 }), ':messageId?'),
                component: h
            }),
            (0, i.jsx)(o.Z, { component: h })
        ]
    });
