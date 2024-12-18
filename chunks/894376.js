let r;
t(47120);
var i,
    l,
    o,
    u,
    s = t(392711),
    a = t.n(s),
    c = t(442837),
    d = t(570140),
    I = t(944163),
    E = t(246364),
    m = t(446495),
    f = t(999382),
    h = t(981631),
    T = t(388032);
let N = !1;
function x() {
    var e;
    let n = f.Z.getGuildId();
    return null == n ? null : null === (e = I.Z.get(n)) || void 0 === e ? void 0 : e.formFields;
}
function p() {
    let e = x();
    if (null == e) return;
    let n = e.find((e) => (0, E.J)(e));
    return null == n
        ? [
              {
                  id: (0, s.uniqueId)(),
                  value: ''
              }
          ]
        : n.values.map((e) => ({
              id: (0, s.uniqueId)(),
              value: e
          }));
}
function A() {
    let e = x();
    if (null == e) return;
    let n = e.find((e) => (0, E.J)(e));
    if (0 === e.length || (1 === e.length && null != n)) {
        let e = {
            field_type: E.QJ.TEXT_INPUT,
            label: T.intl.string(T.t['83ZsRU']),
            required: !0
        };
        return null != n ? [n, e] : [e];
    }
    return [...e];
}
function v() {
    let e = f.Z.getGuild();
    if (null == e || null == r) {
        N = !1;
        return;
    }
    let n = e.hasFeature(h.oNc.DISCOVERABLE),
        t = e.hasFeature(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    if ((n && r.joinType !== m.A.DISCOVERABLE) || (t && r.joinType !== m.A.APPLY) || (!n && !t && r.joinType !== m.A.INVITE)) {
        N = !0;
        return;
    }
    switch (r.joinType) {
        case m.A.INVITE:
            var i, l, o, u;
            let { requireTerms: s, termRules: c } = r,
                d = e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== s,
                I = null !== (o = null === (l = x()) || void 0 === l ? void 0 : null === (i = l.find((e) => (0, E.J)(e))) || void 0 === i ? void 0 : i.values) && void 0 !== o ? o : [],
                T = null !== (u = null == c ? void 0 : c.map((e) => e.value.trim()).filter((e) => '' !== e)) && void 0 !== u ? u : [],
                p = !a().isEqual(I, T);
            N = d || p;
            break;
        case m.A.APPLY:
            let A = x(),
                { pendingVerificationFields: v } = r;
            N = null == A ? null != v : null != v && !a().isEqual(A, v);
            break;
        case m.A.DISCOVERABLE:
            N = !1;
    }
}
function C() {
    let e = f.Z.getGuild();
    if (null == e) return !1;
    (r = e.hasFeature(h.oNc.DISCOVERABLE)
        ? { joinType: m.A.DISCOVERABLE }
        : e.hasFeature(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)
          ? {
                joinType: m.A.APPLY,
                pendingVerificationFields: A()
            }
          : {
                joinType: m.A.INVITE,
                requireTerms: e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                termRules: p()
            }),
        v();
}
function _() {
    if (null == f.Z.getGuildId()) return !1;
    (null == r ? void 0 : r.joinType) === m.A.APPLY
        ? (r = {
              ...r,
              pendingVerificationFields: A()
          })
        : (null == r ? void 0 : r.joinType) === m.A.INVITE &&
          (r = {
              ...r,
              termRules: p()
          }),
        v();
}
function j(e) {
    let { section: n } = e;
    return n !== h.pNK.DISCOVERY ? R() : C();
}
function R() {
    (r = void 0), (N = !1);
}
class g extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, I.Z),
            this.syncWith([f.Z, I.Z], () => {
                v();
            });
    }
    get pendingState() {
        return r;
    }
    showNotice() {
        return N;
    }
}
(u = 'GuildSettingsJoinRulesStore'),
    (o = 'displayName') in (l = g)
        ? Object.defineProperty(l, o, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[o] = u),
    (n.Z = new g(d.Z, {
        GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
            let { guildId: n, requireTerms: t, termRules: i } = e;
            if (n !== f.Z.getGuildId() || (null == r ? void 0 : r.joinType) !== m.A.INVITE) return !1;
            (r = {
                ...r,
                requireTerms: t,
                termRules: i
            }),
                v();
        },
        GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
            let { guildId: n, formFields: t } = e;
            if (n !== f.Z.getGuildId() || (null == r ? void 0 : r.joinType) !== m.A.APPLY) return !1;
            (r = {
                ...r,
                pendingVerificationFields: t
            }),
                v();
        },
        GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
            let { guildId: n, joinType: t } = e,
                i = f.Z.getGuild();
            if (n !== (null == i ? void 0 : i.id)) return !1;
            switch (t) {
                case m.A.INVITE:
                    r = {
                        joinType: m.A.INVITE,
                        requireTerms: i.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                        termRules: p()
                    };
                    break;
                case m.A.APPLY:
                    r = {
                        joinType: m.A.APPLY,
                        pendingVerificationFields: A()
                    };
                    break;
                case m.A.DISCOVERABLE:
                    r = { joinType: m.A.DISCOVERABLE };
            }
            v();
        },
        MEMBER_VERIFICATION_FORM_UPDATE: _,
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: _,
        GUILD_SETTINGS_JOIN_RULES_RESET: function () {
            return C();
        },
        GUILD_SETTINGS_INIT: j,
        GUILD_SETTINGS_SET_SECTION: j,
        GUILD_SETTINGS_CLOSE: R
    }));
