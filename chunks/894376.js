let i;
n(47120);
var r,
    l,
    s,
    a,
    o = n(392711),
    c = n.n(o),
    d = n(442837),
    u = n(570140),
    m = n(944163),
    h = n(246364),
    g = n(446495),
    x = n(999382),
    p = n(981631),
    f = n(388032);
let C = !1;
function I() {
    var e;
    let t = x.Z.getGuildId();
    return null == t ? null : null === (e = m.Z.get(t)) || void 0 === e ? void 0 : e.formFields;
}
function _() {
    let e = I();
    if (null == e) return;
    let t = e.find((e) => (0, h.J)(e));
    return null == t
        ? [
              {
                  id: (0, o.uniqueId)(),
                  value: ''
              }
          ]
        : t.values.map((e) => ({
              id: (0, o.uniqueId)(),
              value: e
          }));
}
function v() {
    let e = I();
    if (null == e) return;
    let t = e.find((e) => (0, h.J)(e));
    if (0 === e.length || (1 === e.length && null != t)) {
        let e = {
            field_type: h.QJ.TEXT_INPUT,
            label: f.intl.string(f.t['83ZsRU']),
            required: !0
        };
        return null != t ? [t, e] : [e];
    }
    return [...e];
}
function N() {
    let e = x.Z.getGuild();
    if (null == e || null == i) {
        C = !1;
        return;
    }
    let t = e.hasFeature(p.oNc.DISCOVERABLE),
        n = e.hasFeature(p.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    if ((t && i.joinType !== g.A.DISCOVERABLE) || (n && i.joinType !== g.A.APPLY) || (!t && !n && i.joinType !== g.A.INVITE)) {
        C = !0;
        return;
    }
    switch (i.joinType) {
        case g.A.INVITE:
            var r, l, s, a;
            let { requireTerms: o, termRules: d } = i,
                u = e.hasFeature(p.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== o,
                m = null !== (s = null === (l = I()) || void 0 === l ? void 0 : null === (r = l.find((e) => (0, h.J)(e))) || void 0 === r ? void 0 : r.values) && void 0 !== s ? s : [],
                f = null !== (a = null == d ? void 0 : d.map((e) => e.value.trim()).filter((e) => '' !== e)) && void 0 !== a ? a : [],
                _ = !c().isEqual(m, f);
            C = u || _;
            break;
        case g.A.APPLY:
            let v = I(),
                { pendingVerificationFields: N } = i;
            C = null == v ? null != N : null != N && !c().isEqual(v, N);
            break;
        case g.A.DISCOVERABLE:
            C = !1;
    }
}
function T() {
    let e = x.Z.getGuild();
    if (null == e) return !1;
    (i = e.hasFeature(p.oNc.DISCOVERABLE)
        ? { joinType: g.A.DISCOVERABLE }
        : e.hasFeature(p.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)
          ? {
                joinType: g.A.APPLY,
                pendingVerificationFields: v()
            }
          : {
                joinType: g.A.INVITE,
                requireTerms: e.hasFeature(p.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                termRules: _()
            }),
        N();
}
function b() {
    if (null == x.Z.getGuildId()) return !1;
    (null == i ? void 0 : i.joinType) === g.A.APPLY
        ? (i = {
              ...i,
              pendingVerificationFields: v()
          })
        : (null == i ? void 0 : i.joinType) === g.A.INVITE &&
          (i = {
              ...i,
              termRules: _()
          }),
        N();
}
function j(e) {
    let { section: t } = e;
    return t !== p.pNK.DISCOVERY ? S() : T();
}
function S() {
    (i = void 0), (C = !1);
}
class E extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(x.Z, m.Z),
            this.syncWith([x.Z, m.Z], () => {
                N();
            });
    }
    get pendingState() {
        return i;
    }
    showNotice() {
        return C;
    }
}
(a = 'GuildSettingsJoinRulesStore'),
    (s = 'displayName') in (l = E)
        ? Object.defineProperty(l, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[s] = a),
    (t.Z = new E(u.Z, {
        GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
            let { guildId: t, requireTerms: n, termRules: r } = e;
            if (t !== x.Z.getGuildId() || (null == i ? void 0 : i.joinType) !== g.A.INVITE) return !1;
            (i = {
                ...i,
                requireTerms: n,
                termRules: r
            }),
                N();
        },
        GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
            let { guildId: t, formFields: n } = e;
            if (t !== x.Z.getGuildId() || (null == i ? void 0 : i.joinType) !== g.A.APPLY) return !1;
            (i = {
                ...i,
                pendingVerificationFields: n
            }),
                N();
        },
        GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
            let { guildId: t, joinType: n } = e,
                r = x.Z.getGuild();
            if (t !== (null == r ? void 0 : r.id)) return !1;
            switch (n) {
                case g.A.INVITE:
                    i = {
                        joinType: g.A.INVITE,
                        requireTerms: r.hasFeature(p.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                        termRules: _()
                    };
                    break;
                case g.A.APPLY:
                    i = {
                        joinType: g.A.APPLY,
                        pendingVerificationFields: v()
                    };
                    break;
                case g.A.DISCOVERABLE:
                    i = { joinType: g.A.DISCOVERABLE };
            }
            N();
        },
        MEMBER_VERIFICATION_FORM_UPDATE: b,
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: b,
        GUILD_SETTINGS_JOIN_RULES_RESET: function () {
            return T();
        },
        GUILD_SETTINGS_INIT: j,
        GUILD_SETTINGS_SET_SECTION: j,
        GUILD_SETTINGS_CLOSE: S
    }));
