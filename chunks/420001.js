var r = n(757143);
var i = n(911969),
    a = n(10718),
    o = n(367790),
    s = n(895924),
    l = n(826298),
    u = n(588468),
    c = n(695346),
    d = n(594174),
    _ = n(5192),
    E = n(417574),
    f = n(877565),
    h = n(590921),
    p = n(126226),
    m = n(689938);
function I(e) {
    let t = E.X.exec(e);
    if (null != t) {
        let n = t[1],
            r = d.default.getUser(n);
        return null == r || !r.bot || r.isClyde()
            ? null
            : {
                  type: 'mention',
                  cleanedQuery: e.substring(t[0].length).trim(),
                  user: r
              };
    }
    return null;
}
let T = {
    ...p.Z,
    sentinel: void 0,
    focusMode: h.QZ.MANUAL,
    matches(e, t, n, r, i) {
        if (i.commands === h.L8.DISABLED || i.commands === h.L8.OLD_BUILT_INS || n.length < 2 || !c.Xk.getSetting()) return !1;
        let a = I(n);
        return null != a && a.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, r, s) {
        if (!c.Xk.getSetting()) return p.K;
        let u = I(n);
        if (null == u) return p.K;
        let d = (0, l.hV)(e, u.cleanedQuery),
            { commands: _, sections: E } = a.JT(
                e,
                {
                    commandTypes: [i.yU.CHAT],
                    text: d.text
                },
                {
                    limit: h.AQ,
                    placeholderCount: h.YP,
                    scoreMethod: o.p.COMMAND_OR_APPLICATION,
                    allowFetch: s
                }
            );
        if (null == _) return p.K;
        let f = _.filter((e) => e.section.botId === u.user.id);
        if (d.hasSpaceTerminator) {
            let e = d.text.trim(),
                t = e + ' ';
            f = f.filter((n) => n.untranslatedName === e || n.untranslatedName.startsWith(t));
        }
        return 0 === f.length
            ? p.K
            : {
                  results: {
                      entries: f.slice(0, h.AQ).map((e) => ({
                          command: e,
                          section: null == E ? void 0 : E.find((t) => t.id === e.applicationId)
                      }))
                  }
              };
    },
    renderResults(e) {
        let {
            results: { entries: t },
            selectedIndex: n,
            guild: r,
            channel: i,
            query: a,
            options: o,
            onHover: s,
            onClick: l
        } = e;
        return (0, f.HI)({
            query: a,
            selectedIndex: n,
            autocompletes: t,
            onHover: s,
            onClick: l,
            titleWithQuery: m.Z.Messages.COMMANDS_MATCHING,
            titleWithoutQuery: m.Z.Messages.COMMANDS,
            Component: o.commands === h.L8.OLD_BUILT_INS ? u.ZP.Command : u.ZP.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return {
                    key: t.id,
                    command: t,
                    channel: i,
                    guildId: i.guild_id,
                    showImage: !0,
                    section: n
                };
            },
            getQuery: (e) => {
                let t = I(e);
                if ('mention' !== t.type) return e;
                let n = _.ZP.getName(null == r ? void 0 : r.id, i.id, t.user);
                return e.replace(E.X, '@'.concat(n));
            },
            key: 'commands'
        });
    },
    onSelect(e) {
        let { results: t, index: n, type: r, options: i, channel: a, guild: o } = e,
            l = p.Z.onSelect({
                results: t,
                index: n,
                type: r,
                options: i,
                channel: a,
                guild: o,
                location: s.Vh.SUGGESTION
            });
        return null == l
            ? null
            : {
                  ...l,
                  type: h.z2.COMMAND_SUGGESTION
              };
    }
};
t.Z = T;
