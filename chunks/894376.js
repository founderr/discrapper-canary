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
function _() {
    var e;
    let t = x.Z.getGuildId();
    return null == t ? null : null === (e = m.Z.get(t)) || void 0 === e ? void 0 : e.formFields;
}
function I() {
    let e = _();
    return null == e
        ? void 0
        : 0 === e.length
          ? [
                {
                    field_type: h.QJ.TEXT_INPUT,
                    label: f.intl.string(f.t['83ZsRU']),
                    required: !0
                }
            ]
          : [...e];
}
function v() {
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
            C = !1;
            break;
        case g.A.APPLY:
            let r = _(),
                { pendingVerificationFields: l } = i;
            C = null == r ? null != l : null != l && !c().isEqual(r, l);
            break;
        case g.A.DISCOVERABLE:
            C = !1;
    }
}
function N() {
    let e = x.Z.getGuild();
    if (null == e) return !1;
    (i = e.hasFeature(p.oNc.DISCOVERABLE)
        ? { joinType: g.A.DISCOVERABLE }
        : e.hasFeature(p.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)
          ? {
                joinType: g.A.APPLY,
                pendingVerificationFields: I()
            }
          : { joinType: g.A.INVITE }),
        v();
}
function T(e) {
    let { section: t } = e;
    return t !== p.pNK.DISCOVERY ? b() : N();
}
function b() {
    (i = void 0), (C = !1);
}
class j extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(x.Z, m.Z),
            this.syncWith([x.Z, m.Z], () => {
                v();
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
    (s = 'displayName') in (l = j)
        ? Object.defineProperty(l, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[s] = a),
    (t.Z = new j(u.Z, {
        GUILD_SETTINGS_JOIN_RULES_SET_PENDING_FORM_FIELDS: function (e) {
            let { guildId: t, formFields: n } = e;
            if (t !== x.Z.getGuildId() || (null == i ? void 0 : i.joinType) !== g.A.APPLY) return !1;
            (i = {
                ...i,
                pendingVerificationFields: n
            }),
                v();
        },
        GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
            let { guildId: t, joinType: n } = e;
            if (t !== x.Z.getGuildId()) return !1;
            switch (n) {
                case g.A.INVITE:
                    i = { joinType: g.A.INVITE };
                    break;
                case g.A.APPLY:
                    i = {
                        joinType: g.A.APPLY,
                        pendingVerificationFields: I()
                    };
                    break;
                case g.A.DISCOVERABLE:
                    i = { joinType: g.A.DISCOVERABLE };
            }
            v();
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function () {
            if (null == x.Z.getGuildId()) return !1;
            (null == i ? void 0 : i.joinType) === g.A.APPLY &&
                (i = {
                    ...i,
                    pendingVerificationFields: I()
                }),
                v();
        },
        GUILD_SETTINGS_JOIN_RULES_RESET: function () {
            return N();
        },
        GUILD_SETTINGS_INIT: T,
        GUILD_SETTINGS_SET_SECTION: T,
        GUILD_SETTINGS_CLOSE: b
    }));
