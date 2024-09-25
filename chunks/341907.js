n.r(t),
    n.d(t, {
        navigateToQuestHome: function () {
            return I;
        },
        openDisclosureModal: function () {
            return m;
        },
        openQuestInGameRewardModal: function () {
            return p;
        },
        openQuestsNitroRewardModal: function () {
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
    o = n(703656),
    s = n(617136),
    l = n(497505),
    u = n(150560),
    c = n(981631),
    d = n(731455);
let _ = 'in-app',
    E = 'Discord Widget';
function f(e) {
    let { questId: t, location: a, questContentPosition: o } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e('54535'), n.e('61624')]).then(n.bind(n, 985866));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                questId: t,
                questContentPosition: o,
                location: a
            });
    });
}
function h(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e('838').then(n.bind(n, 824393));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                quest: e,
                location: t
            });
    });
}
function p(e, t) {
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
function m(e, t) {
    (0, s._3)({
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
    let r = u.Z.getState().setUtmCurrentContext;
    r({
        utmSourceCurrent: E,
        utmMediumCurrent: _,
        utmCampaignCurrent: n,
        utmContentCurrent: Object.keys(l.jn).find((e) => l.jn[e] === t)
    });
    let i = null != n ? '#'.concat(n) : '';
    (0, a.uY)(d.Gj.Quests), (0, o.uL)(c.Z5c.QUEST_HOME + i);
}
