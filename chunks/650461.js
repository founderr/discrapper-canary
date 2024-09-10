r.d(t, {
    Wg: function () {
        return v;
    }
}),
    r(47120);
var n,
    i = r(470079),
    a = r(392711),
    o = r.n(a),
    d = r(442837),
    s = r(570140),
    l = r(944163),
    c = r(709054),
    g = r(116175),
    f = r(308083);
function u(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let b = new Map(),
    p = new Map(),
    _ = !1,
    C = Object.freeze({
        gameApplicationIds: new Set(),
        playstyle: f.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [f.U6, f.U6, f.U6],
        tag: '',
        verificationForm: { ...l.t },
        badgeKind: g.ZD.SWORD,
        badgePrimaryColor: void 0,
        badgeSecondaryColor: void 0,
        banner: f.qC.NIGHT_SKY,
        brandPrimaryColor: void 0,
        brandSecondaryColor: void 0,
        currentStep: f.Wy.GAMES,
        furthestStep: f.Wy.GAMES,
        requiredGameId: void 0
    });
function S() {
    let e = o().cloneDeep(C);
    return (e.badgeKind = (0, g.lP)()), (e.banner = (0, f.i1)()), e;
}
function v() {
    return i.useState(() => S())[0];
}
function m(e) {
    var t;
    return null !== (t = b.get(e)) && void 0 !== t ? t : S();
}
function y(e, t) {
    let r = m(e);
    b.set(e, {
        ...r,
        ...t
    });
    let n = p.get(e);
    if (null != n) {
        let r = { ...n };
        Object.keys(t).forEach((e) => {
            delete r[e];
        }),
            p.set(e, r);
    }
}
class h extends (n = d.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            c.default.keys(e.progressByGuild).forEach((t) => {
                var r, n, i, a, o;
                b.set(t, {
                    gameApplicationIds: new Set((r = e.progressByGuild[t]).gameApplicationIds),
                    playstyle: r.playstyle,
                    interests: new Set(r.interests),
                    description: r.description,
                    wildcardDescriptors: null !== (n = r.wildcardDescriptors) && void 0 !== n ? n : [f.U6, f.U6, f.U6],
                    tag: r.tag,
                    verificationForm: null !== (i = r.verificationForm) && void 0 !== i ? i : { ...l.t },
                    badgeKind: null !== (a = r.badgeKind) && void 0 !== a ? a : g.ZD.SWORD,
                    badgePrimaryColor: r.badgePrimaryColor,
                    badgeSecondaryColor: r.badgeSecondaryColor,
                    banner: null !== (o = r.banner) && void 0 !== o ? o : f.qC.NIGHT_SKY,
                    brandPrimaryColor: r.brandPrimaryColor,
                    brandSecondaryColor: r.brandSecondaryColor,
                    currentStep: r.currentStep,
                    furthestStep: r.furthestStep,
                    requiredGameId: r.requiredGameId
                });
            });
    }
    getState() {
        let e = {};
        return (
            b.forEach((t, r) => {
                var n;
                e[r] = {
                    gameApplicationIds: Array.from((n = t).gameApplicationIds),
                    playstyle: n.playstyle,
                    interests: Array.from(n.interests),
                    description: n.description,
                    wildcardDescriptors: n.wildcardDescriptors,
                    tag: n.tag,
                    verificationForm: n.verificationForm,
                    badgeKind: n.badgeKind,
                    badgePrimaryColor: n.badgePrimaryColor,
                    badgeSecondaryColor: n.badgeSecondaryColor,
                    banner: n.banner,
                    brandPrimaryColor: n.brandPrimaryColor,
                    brandSecondaryColor: n.brandSecondaryColor,
                    currentStep: n.currentStep,
                    furthestStep: n.furthestStep,
                    requiredGameId: n.requiredGameId
                };
            }),
            { progressByGuild: e }
        );
    }
    getStateForGuild(e) {
        return {
            progress: b.get(e),
            errors: p.get(e),
            submitting: _
        };
    }
    getGuildIds() {
        return [...b.keys()];
    }
}
u(h, 'displayName', 'ClanSetupStore'),
    u(h, 'persistKey', 'ClanSetupStore'),
    (t.ZP = new h(s.Z, {
        CLAN_SETUP_RESET: function () {
            b.clear(), p.clear();
        },
        CLAN_SETUP_UPDATE: function (e) {
            let { guildId: t, updates: r } = e;
            y(t, r);
        },
        CLAN_SETUP_SUBMIT: function (e) {
            let { guildId: t } = e;
            (_ = !0), p.delete(t);
        },
        CLAN_SETUP_SUCCESS: function (e) {
            let { guildId: t } = e;
            (_ = !1), b.delete(t), p.delete(t);
        },
        CLAN_SETUP_ERROR: function (e) {
            let { guildId: t, error: r } = e;
            (_ = !1),
                p.set(t, {
                    gameApplicationIds: r.getFirstFieldErrorMessage('game_application_ids'),
                    playstyle: r.getFirstFieldErrorMessage('play_style'),
                    description: r.getFirstFieldErrorMessage('description'),
                    wildcardDescriptors: r.getFirstFieldErrorMessage('wildcard_descriptors'),
                    interests: r.getFirstFieldErrorMessage('search_terms'),
                    tag: r.getFirstFieldErrorMessage('tag'),
                    verificationForm: r.getFirstFieldErrorMessage(['verification_form', 'form_fields'])
                });
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let t;
            let { form: r, guildId: n, isLocalUpdate: i } = e;
            i &&
                ((t =
                    null == r
                        ? l.t
                        : {
                              ...m(n).verificationForm,
                              ...r
                          }),
                y(n, { verificationForm: t }));
        }
    }));
