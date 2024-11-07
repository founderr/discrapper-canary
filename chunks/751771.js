let n, a, l, s, r, o, c;
i(47120);
var d,
    u,
    m,
    p,
    I = i(442837),
    h = i(570140),
    f = i(823385),
    x = i(814443),
    g = i(823379),
    N = i(971130),
    C = i(592125),
    S = i(496675),
    v = i(699516),
    T = i(981631),
    A = i(245335);
let E = new Set(),
    _ = [],
    Z = new Map();
function b(e) {
    let t = new Set(),
        i = null == s || c === A.Iq.EMBEDDED_APPLICATION ? void 0 : s.id,
        n = (0, N.rh)(E, i);
    for (let e of (null != n && !v.Z.isBlocked(n.id) && t.add(n.id), x.Z.getUserAffinitiesUserIds())) t.add(e);
    let a = new Set();
    return (
        c === A.Iq.EMBEDDED_APPLICATION &&
            f.Z.getChannelHistory()
                .map((e) => C.Z.getChannel(e))
                .filter(g.lm)
                .filter((e) => e.type === T.d4z.GUILD_TEXT)
                .filter((e) => S.Z.can(T.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => a.add(e.id)),
        (0, N.an)({
            query: e,
            omitUserIds: E,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: i,
            suggestedChannelIds: a,
            inviteTargetType: c
        })
    );
}
function j(e) {
    (_ = e),
        (Z = new Map()),
        e.forEach((e, t) => {
            Z.set(e, { index: t });
        });
}
class y extends (d = I.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, x.Z);
    }
    getInviteSuggestionRows() {
        return _;
    }
    getTotalSuggestionsCount() {
        return a;
    }
    getInitialCounts() {
        return n;
    }
    getSelectedInviteMetadata(e) {
        let t = Z.get(e),
            i = x.Z.getUserAffinitiesUserIds();
        return null != t
            ? {
                  rowNum: t.index,
                  isAffinitySuggestion: e.isSuggested,
                  numTotal: _.length,
                  numAffinityConnections: i.size,
                  isFiltered: l
              }
            : null;
    }
}
(p = 'InviteSuggestionsStore'),
    (m = 'displayName') in (u = y)
        ? Object.defineProperty(u, m, {
              value: p,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[m] = p),
    (t.Z = new y(h.Z, {
        LOAD_INVITE_SUGGESTIONS: function (e) {
            let { omitUserIds: t, guild: i, channel: d, applicationId: u, inviteTargetType: m } = e;
            (s = null != d ? i : null), (r = d), (o = u), (c = m);
            let p = v.Z.getBlockedOrIgnoredIDs();
            (E = new Set([
                ...t,
                ...p,
                ...(0, N.Sz)({
                    channel: r,
                    applicationId: o,
                    inviteTargetType: m
                })
            ])),
                (l = !1);
            let { rows: I, counts: h } = b('');
            j(I), (n = h), (a = _.length);
        },
        INVITE_SUGGESTIONS_SEARCH: function (e) {
            let { query: t } = e;
            l = '' !== t;
            let { rows: i } = b(t);
            j(i);
        }
    }));
