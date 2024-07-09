i.d(n, {
    Z: function () {
        return u;
    }
});
var l = i(735250);
i(470079);
var s = i(543595), o = i(100849), t = i(487922), a = i(620648), r = i(944546), d = i(470900), c = i(228168);
function u(e) {
    let {
        displayProfile: n,
        user: i,
        selectedSection: u,
        autoFocusNote: I,
        onClose: f
    } = e;
    switch (u) {
    case c.oh.ACTIVITY:
        return (0, l.jsx)(o.Z, {
            user: i,
            type: s.Y.PROFILE_V2,
            onClose: f
        });
    case c.oh.MUTUAL_GUILDS:
        return (0, l.jsx)(d.Z, {
            user: i,
            onClose: f
        });
    case c.oh.MUTUAL_FRIENDS:
        return (0, l.jsx)(r.Z, {
            user: i,
            onClose: f
        });
    case c.oh.BOT_DATA_ACCESS:
        return (0, l.jsx)(t.Z, { user: i });
    case c.oh.USER_INFO_CONNECTIONS:
    case c.oh.USER_INFO:
    default:
        return (0, l.jsx)(a.Z, {
            displayProfile: n,
            autoFocusNote: I,
            user: i,
            scrollToConnections: u === c.oh.USER_INFO_CONNECTIONS
        });
    }
}
