let i;
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
    g = n(999382),
    x = n(388032);
let p = !1;
function f() {
    var e;
    let t = g.Z.getGuildId();
    return null == t ? null : null === (e = m.Z.get(t)) || void 0 === e ? void 0 : e.formFields;
}
function C() {
    let e = f();
    i =
        null == e || 0 === e.length
            ? [
                  {
                      field_type: h.QJ.TEXT_INPUT,
                      label: x.intl.string(x.t['83ZsRU']),
                      required: !0
                  }
              ]
            : void 0;
}
function v() {
    let e = f();
    p = null == e ? null != i : null != i && !c().isEqual(e, i);
}
function _() {
    (i = void 0), v();
}
class I extends (a = d.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, m.Z),
            this.syncWith([m.Z], () => {
                v();
            });
    }
    get pendingVerificationFields() {
        return i;
    }
    showNotice() {
        return p;
    }
}
(s = 'GuildSettingsJoinRulesStore'),
    (l = 'displayName') in (r = I)
        ? Object.defineProperty(r, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = s),
    (t.Z = new I(u.Z, {
        GUILD_SETTINGS_JOIN_RULES_SET_PENDING_FORM_FIELDS: function (e) {
            let { guildId: t, formFields: n } = e;
            if (t !== g.Z.getGuildId()) return !1;
            (i = n), v();
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let { fromFetch: t } = e;
            if (null == g.Z.getGuildId()) return !1;
            t ? C() : (i = void 0), v();
        },
        GUILD_SETTINGS_JOIN_RULES_RESET: function () {
            C(), v();
        },
        GUILD_SETTINGS_INIT: _,
        GUILD_SETTINGS_CLOSE: _
    }));
