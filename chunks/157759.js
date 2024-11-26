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
    m = n(749534),
    g = n(981631),
    E = n(388032);
t.Z = (e) => {
    let { application: t, reportId: n } = e,
        [v, I] = i.useState(!1),
        [T, b] = i.useState(!1),
        S = (0, a.e7)([h.Z, f.Z], () => {
            var e;
            return null === (e = f.Z.getChannel(h.Z.getChannelId())) || void 0 === e ? void 0 : e.guild_id;
        }),
        [y, A] = i.useState(null);
    i.useEffect(() => {
        null != y && (I(!0), b(!0));
    }, [y]),
        i.useEffect(() => {
            if (null == S) return;
            let e = !1;
            return (
                (async () => {
                    let n = await (0, c.i)(S);
                    if (e || null == n) return;
                    let r = n.find((e) => {
                        var n;
                        return (null === (n = e.application) || void 0 === n ? void 0 : n.id) === t.id;
                    });
                    null != r && A(r);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [S, t.id]);
    let N = i.useCallback(() => {
            b(!1),
                l.ZP.trackWithMetadata(g.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: S,
                    application_id: t.id,
                    report_id: n
                }),
                null != S &&
                    null != y &&
                    u.Z.disableIntegration(S, y.id).catch(() => {
                        o.Z.show({
                            title: E.intl.string(E.t.wYqMmJ),
                            body: E.intl.string(E.t.A4Mnsr)
                        });
                    });
        }, [t.id, S, y, n]),
        C = (0, a.e7)([p.Z, _.Z], () => {
            let e = _.Z.getGuild(S);
            if (null == e) return !1;
            let n = p.Z.can(g.Plq.MANAGE_GUILD, e),
                r = null == t.bot || p.Z.canManageUser(g.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != S && v && C
        ? (0, r.jsx)(m.Z, {
              title: E.intl.string(E.t.gbZXiY),
              children: (0, r.jsx)(d.Z, {
                  title: E.intl.string(E.t['WV/CsL']),
                  description: E.intl.string(E.t['FlcC+/']),
                  buttonText: T ? E.intl.string(E.t.aCJlq6) : E.intl.string(E.t['6I1F3t']),
                  buttonDisabled: !T,
                  buttonColor: T ? s.Button.Colors.RED : s.Button.Colors.WHITE,
                  buttonLook: T ? s.Button.Looks.FILLED : s.Button.Looks.LINK,
                  onButtonPress: N
              })
          })
        : null;
};
