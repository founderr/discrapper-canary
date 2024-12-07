n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(668781),
    l = n(367907),
    u = n(434404),
    c = n(330010),
    d = n(138201),
    f = n(592125),
    _ = n(430824),
    p = n(496675),
    h = n(944486),
    m = n(981631),
    g = n(388032);
t.Z = (e) => {
    let { application: t, reportId: n } = e,
        [E, v] = i.useState(!1),
        [I, T] = i.useState(!1),
        b = (0, a.e7)([h.Z, f.Z], () => {
            var e;
            return null === (e = f.Z.getChannel(h.Z.getChannelId())) || void 0 === e ? void 0 : e.guild_id;
        }),
        [S, y] = i.useState(null);
    i.useEffect(() => {
        null != S && (v(!0), T(!0));
    }, [S]),
        i.useEffect(() => {
            if (null == b) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, c.i)(b);
                    } catch {}
                    if (e || null == n) return;
                    let r = n.find((e) => {
                        var n;
                        return (null === (n = e.application) || void 0 === n ? void 0 : n.id) === t.id;
                    });
                    null != r && y(r);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [b, t.id]);
    let A = i.useCallback(() => {
            T(!1),
                l.ZP.trackWithMetadata(m.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: b,
                    application_id: t.id,
                    report_id: n
                }),
                null != b &&
                    null != S &&
                    u.Z.disableIntegration(b, S.id).catch(() => {
                        o.Z.show({
                            title: g.intl.string(g.t.wYqMmJ),
                            body: g.intl.string(g.t.A4Mnsr)
                        });
                    });
        }, [t.id, b, S, n]),
        N = (0, a.e7)([p.Z, _.Z], () => {
            let e = _.Z.getGuild(b);
            if (null == e) return !1;
            let n = p.Z.can(m.Plq.MANAGE_GUILD, e),
                r = null == t.bot || p.Z.canManageUser(m.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != b && E && N
        ? (0, r.jsx)(d.Z, {
              title: g.intl.string(g.t['WV/CsL']),
              description: g.intl.string(g.t['FlcC+/']),
              buttonText: I ? g.intl.string(g.t.aCJlq6) : g.intl.string(g.t['6I1F3t']),
              buttonDisabled: !I,
              buttonColor: I ? s.Button.Colors.RED : s.Button.Colors.WHITE,
              buttonLook: I ? s.Button.Looks.FILLED : s.Button.Looks.LINK,
              onButtonPress: A
          })
        : null;
};
