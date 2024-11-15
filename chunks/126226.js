n.d(t, {
    K: function () {
        return A;
    }
});
var r = n(200651);
n(192379);
var i = n(693789),
    a = n(952265),
    s = n(911969),
    o = n(555573),
    l = n(254711),
    u = n(213459),
    c = n(10718),
    d = n(367790),
    f = n(998698),
    _ = n(895924),
    p = n(581364),
    h = n(826298),
    m = n(588468),
    g = n(496675),
    E = n(226951),
    v = n(877565),
    b = n(590921),
    I = n(665692),
    S = n(689079),
    T = n(388032),
    y = n(346529);
let A = { results: { entries: [] } };
function N() {
    (0, a.ZD)(async () => {
        let { default: e } = await n.e('87549').then(n.bind(n, 913962));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let C = {
    sentinel: I.GI,
    stores: [f.Z, u.ZP, g.Z],
    matches: (e, t, n, r, i) => i.commands !== b.L8.DISABLED && null == f.Z.getActiveCommand(e.id) && (r || i.commands !== b.L8.OLD_BUILT_INS),
    queryResults(e, t, n, r, i) {
        if (0 === n.length && r.commands !== b.L8.OLD_BUILT_INS) return A;
        if (r.commands === b.L8.OLD_BUILT_INS) {
            let r = (0, l.Kh)([s.yU.CHAT], !1, !1),
                i = RegExp('^'.concat(E.Z.escape(n)), 'i'),
                a = (0, p.Dd)(
                    r,
                    i,
                    {
                        channel: e,
                        guild: t
                    },
                    b.AQ
                ),
                o = l.Tm[S.bi.BUILT_IN];
            return 0 === a.length
                ? A
                : {
                      results: {
                          entries: a.map((e) => ({
                              command: e,
                              section: o
                          }))
                      }
                  };
        }
        let a = (0, h.hV)(e, n),
            { commands: o, sections: u } = c.JT(
                e,
                {
                    commandTypes: [s.yU.CHAT],
                    text: a.text
                },
                {
                    limit: b.AQ,
                    placeholderCount: b.YP,
                    scoreMethod: d.p.COMMAND_OR_APPLICATION,
                    allowFetch: i
                }
            );
        if (null == o) return A;
        let f = o;
        if (a.hasSpaceTerminator) {
            let e = a.text.trim(),
                t = e + ' ';
            f = f.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === f.length
            ? A
            : {
                  results: {
                      entries: f.slice(0, b.AQ).map((e) => ({
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
                query: s,
                options: o,
                onHover: l,
                onClick: u
            } = e,
            c = (0, h.hV)(a, s),
            d = o.commands === b.L8.OLD_BUILT_INS;
        return (0, v.HI)({
            query: c.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: l,
            onClick: u,
            titleWithQuery: T.t.HFRoZW,
            titleWithoutQuery: T.intl.string(T.t['0hKkS0']),
            getQuery: (e) => ''.concat(I.GI).concat(e),
            Component: d ? m.ZP.Command : m.ZP.NewCommand,
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
            headerClassName: d ? y.legacyInputCommandHeader : null,
            headerTrailingContent: d
                ? (0, r.jsx)(i.zx, {
                      type: 'button',
                      look: i.zx.Looks.LINK,
                      color: i.zx.Colors.BRAND,
                      size: i.zx.Sizes.MIN,
                      onClick: N,
                      children: T.intl.string(T.t['8a0P09'])
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
                location: s,
                tabOrEnter: l
            } = e,
            { command: u, section: c } = t[n];
        if (u.inputType === _.iw.PLACEHOLDER) return null;
        if (i.commands === b.L8.OLD_BUILT_INS)
            i.insertText(
                (function (e) {
                    return ''.concat(I.GI).concat(e.displayName);
                })(u)
            );
        else {
            let e = s;
            null == e && (e = l ? _.Vh.QUERY : _.Vh.DISCOVERY),
                o.Po({
                    channelId: a.id,
                    command: u,
                    section: null != c ? c : null,
                    location: e,
                    queryLength: null == r ? void 0 : r.length
                });
        }
        return { type: b.z2.COMMAND };
    }
};
t.Z = C;
