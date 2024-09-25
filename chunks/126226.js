n.d(t, {
    K: function () {
        return O;
    }
});
var r = n(735250);
n(470079);
var i = n(693789),
    a = n(952265),
    o = n(911969),
    s = n(555573),
    l = n(254711),
    u = n(213459),
    c = n(10718),
    d = n(367790),
    _ = n(998698),
    E = n(895924),
    f = n(581364),
    h = n(826298),
    p = n(588468),
    m = n(496675),
    I = n(226951),
    T = n(877565),
    g = n(590921),
    S = n(665692),
    A = n(689079),
    v = n(689938),
    N = n(239114);
let O = { results: { entries: [] } };
function R() {
    (0, a.ZD)(async () => {
        let { default: e } = await n.e('87549').then(n.bind(n, 913962));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let C = {
    sentinel: S.GI,
    stores: [_.Z, u.ZP, m.Z],
    matches: (e, t, n, r, i) => i.commands !== g.L8.DISABLED && null == _.Z.getActiveCommand(e.id) && (r || i.commands !== g.L8.OLD_BUILT_INS),
    queryResults(e, t, n, r, i) {
        if (0 === n.length && r.commands !== g.L8.OLD_BUILT_INS) return O;
        if (r.commands === g.L8.OLD_BUILT_INS) {
            let r = (0, l.Kh)([o.yU.CHAT], !1, !1),
                i = RegExp('^'.concat(I.Z.escape(n)), 'i'),
                a = (0, f.Dd)(
                    r,
                    i,
                    {
                        channel: e,
                        guild: t
                    },
                    g.AQ
                ),
                s = l.Tm[A.bi.BUILT_IN];
            return 0 === a.length
                ? O
                : {
                      results: {
                          entries: a.map((e) => ({
                              command: e,
                              section: s
                          }))
                      }
                  };
        }
        let a = (0, h.hV)(e, n),
            { commands: s, sections: u } = c.JT(
                e,
                {
                    commandTypes: [o.yU.CHAT],
                    text: a.text
                },
                {
                    limit: g.AQ,
                    placeholderCount: g.YP,
                    scoreMethod: d.p.COMMAND_OR_APPLICATION,
                    allowFetch: i
                }
            );
        if (null == s) return O;
        let _ = s;
        if (a.hasSpaceTerminator) {
            let e = a.text.trim(),
                t = e + ' ';
            _ = _.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === _.length
            ? O
            : {
                  results: {
                      entries: _.slice(0, g.AQ).map((e) => ({
                          command: e,
                          section: null == u ? void 0 : u.find((t) => t.id === e.applicationId)
                      }))
                  }
              };
    },
    renderResults(e) {
        let {
                results: { entries: t },
                selectedIndex: n,
                channel: a,
                query: o,
                options: s,
                onHover: l,
                onClick: u
            } = e,
            c = (0, h.hV)(a, o),
            d = s.commands === g.L8.OLD_BUILT_INS;
        return (0, T.HI)({
            query: c.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: l,
            onClick: u,
            titleWithQuery: v.Z.Messages.COMMANDS_MATCHING,
            titleWithoutQuery: v.Z.Messages.COMMANDS,
            getQuery: (e) => ''.concat(S.GI).concat(e),
            Component: d ? p.ZP.Command : p.ZP.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return {
                    key: t.id,
                    command: t,
                    channel: a,
                    guildId: a.guild_id,
                    showImage: !0,
                    section: n
                };
            },
            key: 'commands',
            headerClassName: d ? N.legacyInputCommandHeader : null,
            headerTrailingContent: d
                ? (0, r.jsx)(i.zx, {
                      type: 'button',
                      look: i.zx.Looks.LINK,
                      color: i.zx.Colors.BRAND,
                      size: i.zx.Sizes.MIN,
                      onClick: R,
                      children: v.Z.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_MISSING_HELP_MESSAGE
                  })
                : null
        });
    },
    onSelect(e) {
        let {
                results: { entries: t },
                index: n,
                queryText: r,
                options: i,
                channel: a,
                location: o,
                tabOrEnter: l
            } = e,
            { command: u, section: c } = t[n];
        if (u.inputType === E.iw.PLACEHOLDER) return null;
        if (i.commands === g.L8.OLD_BUILT_INS) i.insertText(y(u));
        else {
            let e = o;
            null == e && (e = l ? E.Vh.QUERY : E.Vh.DISCOVERY),
                s.Po({
                    channelId: a.id,
                    command: u,
                    section: null != c ? c : null,
                    location: e,
                    queryLength: null == r ? void 0 : r.length
                });
        }
        return { type: g.z2.COMMAND };
    }
};
function y(e) {
    return ''.concat(S.GI).concat(e.displayName);
}
t.Z = C;
