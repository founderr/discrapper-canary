n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(390547);
var i = n(653041);
var a = n(735250);
n(470079);
var o = n(392711),
    s = n.n(o),
    l = n(661824),
    u = n(289481),
    c = n(809780),
    d = n(689938),
    _ = n(258360);
function E(e, t, n) {
    let { markChannelRead: r, markGuildRead: i, deleteChannel: o, toggle: E, getNumUnreadChannels: f } = t,
        h = null;
    return s().flatMap(e, (e) => {
        let t = e.sortOrder !== h;
        h = e.sortOrder;
        let s = [];
        return (
            t &&
                (e.hasLoadedAnything && e.sortOrder === c.As.ReallyOldChannel
                    ? s.push(
                          (0, a.jsx)(
                              l.Z,
                              {
                                  className: _.divider,
                                  contentClassName: _.dividerContent,
                                  children: d.Z.Messages.UNREADS_OLD_CHANNELS_DIVIDER
                              },
                              'old-divider'
                          )
                      )
                    : e.hasLoadedAnything &&
                      e.sortOrder === c.As.NoNotifications &&
                      s.push(
                          (0, a.jsx)(
                              l.Z,
                              {
                                  className: _.divider,
                                  contentClassName: _.dividerContent,
                                  children: d.Z.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
                              },
                              'disabled-divider'
                          )
                      )),
            s.push(
                (0, a.jsx)(
                    u.Z,
                    {
                        channel: e,
                        markChannelRead: r,
                        markGuildRead: i,
                        toggle: E,
                        deleteChannel: o,
                        onJump: n,
                        getNumUnreadChannels: f
                    },
                    e.channelId
                )
            ),
            s
        );
    });
}
