n.r(t),
    n.d(t, {
        navigateToQuestHome: function () {
            return I;
        },
        openDisclosureModal: function () {
            return p;
        },
        openQuestInGameRewardModal: function () {
            return h;
        },
        openQuestsRewardCodeModal: function () {
            return f;
        }
    });
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(212093),
    s = n(230711),
    o = n(703656),
    l = n(617136),
    u = n(282421),
    c = n(497505),
    d = n(150560),
    _ = n(981631),
    E = n(731455);
function f(e) {
    let { questId: t, location: a, questContentPosition: s } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e('26138'), n.e('54535'), n.e('95688')]).then(n.bind(n, 985866));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                questId: t,
                questContentPosition: s,
                location: a
            });
    });
}
function h(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e('88938').then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                quest: e,
                location: t
            });
    });
}
function p(e, t) {
    (0, l._3)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }),
        (0, i.openModalLazy)(async () => {
            let { default: i } = await n.e('4266').then(n.bind(n, 316210));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    questContent: t.content,
                    quest: e
                });
        });
}
function I(e, t, n) {
    let r = u.B.getCurrentConfig({ location: e }).enabled,
        i = d.Z.getState().setUtmCurrentContext;
    if (
        (i({
            utmSourceCurrent: 'Discord Widget',
            utmMediumCurrent: 'in-app',
            utmCampaignCurrent: n,
            utmContentCurrent: Object.keys(c.jn).find((e) => c.jn[e] === t)
        }),
        r)
    ) {
        let e = null != n ? '#'.concat(n) : '';
        (0, a.uY)(E.Gj.Quests), (0, o.uL)(_.Z5c.QUEST_HOME + e);
    } else s.Z.open(_.oAB.INVENTORY);
}
