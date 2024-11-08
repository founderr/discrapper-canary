t(47120);
var r,
    a,
    i,
    o,
    s = t(392711),
    l = t.n(s),
    c = t(906280),
    d = t.n(c),
    u = t(442837),
    m = t(570140),
    f = t(944163),
    h = t(77498),
    x = t(116175),
    p = t(308083);
function g(e) {
    return new Set(Array.from(e).filter((e) => null != h.Z.getDetectableGame(e)));
}
let C = () => ({
        gameApplicationIds: new Set(),
        playstyle: p.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [p.U6, p.U6, p.U6],
        tag: '',
        verificationForm: { ...f.t },
        badgeKind: x.ZD.SWORD,
        badgePrimaryColor: x.sg['0'].primary,
        badgeSecondaryColor: x.sg['0'].secondary,
        banner: p.qC.NIGHT_SKY,
        brandPrimaryColor: p.ym['0'].primary,
        brandSecondaryColor: p.ym['0'].secondary
    }),
    b = C(),
    v = d()(b),
    _ = !1,
    y = !1,
    T = {};
class I extends (r = u.ZP.Store) {
    getState() {
        return {
            initialSettings: b,
            settings: v,
            dirty: _,
            errors: T,
            submitting: y
        };
    }
}
(o = 'ClanSettingsStore'),
    (i = 'displayName') in (a = I)
        ? Object.defineProperty(a, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[i] = o),
    (n.Z = new I(m.Z, {
        CLAN_SETTINGS_FETCH_START: function () {
            (y = !1), (b = C()), (v = d()(b)), (_ = !1), (T = {});
        },
        CLAN_SETTINGS_FETCH_SUCCESS: function (e) {
            let { settings: n } = e;
            (b = {
                ...C(),
                ...n
            }),
                ((v = d()(b)).gameApplicationIds = g(v.gameApplicationIds)),
                (_ = !1);
        },
        CLAN_SETTINGS_UPDATE: function (e) {
            let { updates: n } = e,
                { gameApplicationIds: t } = n;
            for (let e in (null != t && (n.gameApplicationIds = g(t)),
            (v = {
                ...v,
                ...d()(n)
            }),
            n))
                delete T[e], (T = { ...T });
            _ = !l().isEqual(l().omit(v, 'verificationForm'), l().omit(b, 'verificationForm'));
        },
        CLAN_SETTINGS_SUBMIT: function () {
            (y = !0), (T = {});
        },
        CLAN_SETTINGS_SUBMIT_SUCCESS: function () {
            (y = !1), (b = d()(v)), (_ = !1), (T = {});
        },
        CLAN_SETTINGS_SUBMIT_ERROR: function (e) {
            let { error: n } = e;
            (y = !1),
                (T = {
                    gameApplicationIds: n.getFirstFieldErrorMessage('game_application_ids'),
                    playstyle: n.getFirstFieldErrorMessage('play_style'),
                    description: n.getFirstFieldErrorMessage('description'),
                    wildcardDescriptors: n.getFirstFieldErrorMessage('wildcard_descriptors'),
                    interests: n.getFirstFieldErrorMessage('search_terms'),
                    tag: n.getFirstFieldErrorMessage('tag'),
                    verificationForm: n.getFirstFieldErrorMessage(['verification_form', 'form_fields'])
                });
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let { form: n, isLocalUpdate: t } = e;
            if (null == v.verificationForm) return !1;
            if (
                ((v = {
                    ...v,
                    verificationForm: {
                        ...v.verificationForm,
                        ...n
                    }
                }),
                t)
            ) {
                var r;
                _ = !l().isEqual(v.verificationForm.formFields, null === (r = b.verificationForm) || void 0 === r ? void 0 : r.formFields);
            } else _ = !1;
        }
    }));
