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
    C = i(709054),
    S = i(592125),
    v = i(496675),
    T = i(699516),
    A = i(981631),
    E = i(245335);
let _ = new Set(),
    Z = [],
    b = new Map();
function j(e) {
    let t = new Set(),
        i = null == s || c === E.Iq.EMBEDDED_APPLICATION ? void 0 : s.id,
        n = (0, N.rh)(_, i);
    for (let e of (null != n && !T.Z.isBlocked(n.id) && t.add(n.id), x.Z.getUserAffinitiesUserIds())) t.add(e);
    let a = new Set();
    return (
        c === E.Iq.EMBEDDED_APPLICATION &&
            f.Z.getChannelHistory()
                .map((e) => S.Z.getChannel(e))
                .filter(g.lm)
                .filter((e) => e.type === A.d4z.GUILD_TEXT)
                .filter((e) => v.Z.can(A.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => a.add(e.id)),
        (0, N.an)({
            query: e,
            omitUserIds: _,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: i,
            suggestedChannelIds: a,
            inviteTargetType: c
        })
    );
}
function y(e) {
    (Z = e),
        (b = new Map()),
        e.forEach((e, t) => {
            b.set(e, { index: t });
        });
}
class D extends (d = I.ZP.Store) {
    initialize() {
        this.waitFor(T.Z, x.Z);
    }
    getInviteSuggestionRows() {
        return Z;
    }
    getTotalSuggestionsCount() {
        return a;
    }
    getInitialCounts() {
        return n;
    }
    getSelectedInviteMetadata(e) {
        let t = b.get(e),
            i = x.Z.getUserAffinitiesUserIds();
        return null != t
            ? {
                  rowNum: t.index,
                  isAffinitySuggestion: e.isSuggested,
                  numTotal: Z.length,
                  numAffinityConnections: i.size,
                  isFiltered: l
              }
            : null;
    }
}
(p = 'InviteSuggestionsStore'),
    (m = 'displayName') in (u = D)
        ? Object.defineProperty(u, m, {
              value: p,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[m] = p),
    (t.Z = new D(h.Z, {
        LOAD_INVITE_SUGGESTIONS: function (e) {
            let { omitUserIds: t, guild: i, channel: d, applicationId: u, inviteTargetType: m } = e;
            (s = null != d ? i : null), (r = d), (o = u), (c = m);
            let p = T.Z.getRelationships(),
                I = C.default.keys(p).filter((e) => p[e] === A.OGo.BLOCKED);
            (_ = new Set([
                ...t,
                ...I,
                ...(0, N.Sz)({
                    channel: r,
                    applicationId: o,
                    inviteTargetType: m
                })
            ])),
                (l = !1);
            let { rows: h, counts: f } = j('');
            y(h), (n = f), (a = Z.length);
        },
        INVITE_SUGGESTIONS_SEARCH: function (e) {
            let { query: t } = e;
            l = '' !== t;
            let { rows: i } = j(t);
            y(i);
        }
    }));
