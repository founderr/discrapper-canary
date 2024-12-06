n.r(t),
    n.d(t, {
        formatVideoProgressRatio: function () {
            return C;
        },
        maybeShowSurveyForQuest: function () {
            return N;
        },
        navigateToQuestHome: function () {
            return A;
        },
        openDisclosureModal: function () {
            return y;
        },
        openQuestInGameRewardModal: function () {
            return S;
        },
        openQuestsNitroRewardModal: function () {
            return b;
        },
        openQuestsRewardCodeModal: function () {
            return T;
        },
        openVideoQuestModal: function () {
            return R;
        }
    });
var r = n(200651);
n(192379);
var i = n(772848),
    a = n(481060),
    s = n(836768),
    o = n(703656),
    l = n(617136),
    u = n(569984),
    c = n(497505),
    d = n(918701),
    f = n(184299),
    _ = n(862847),
    p = n(5881),
    h = n(842942),
    m = n(61115),
    g = n(150560),
    E = n(46140),
    v = n(981631),
    I = n(49898);
function T(e) {
    let { questId: t, location: i, questContentPosition: s, preview: o = !1 } = e;
    (0, a.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e('48923'), n.e('99393'), n.e('28044'), n.e('57383')]).then(n.bind(n, 985866));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                questId: t,
                questContentPosition: s,
                location: i,
                preview: o
            });
    });
}
function b(e, t) {
    (0, a.openModalLazy)(async () => {
        let { default: i } = await Promise.all([n.e('8016'), n.e('36909')]).then(n.bind(n, 824393));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                quest: e,
                location: t
            });
    });
}
function S(e, t) {
    (0, a.openModalLazy)(async () => {
        let { default: i } = await n.e('88938').then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                quest: e,
                location: t
            });
    });
}
function y(e, t) {
    (0, l._3)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }),
        (0, a.openModalLazy)(async () => {
            let { default: i } = await n.e('4266').then(n.bind(n, 316210));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    questContent: t.content,
                    quest: e
                });
        });
}
function A(e, t, n) {
    let r = g.Z.getState().setUtmCurrentContext;
    r({
        utmSourceCurrent: 'Discord Widget',
        utmMediumCurrent: 'in-app',
        utmCampaignCurrent: n,
        utmContentCurrent: Object.keys(c.jn).find((e) => c.jn[e] === t)
    });
    let i = null != n ? '#'.concat(n) : '';
    s.Z.setState({ selectedTab: I.GlobalDiscoveryTab.QUESTS }), (0, o.uL)(v.Z5c.QUEST_HOME + i);
}
function N(e) {
    let t = (0, p.T)({ quest: e }),
        n = { location: E.dr.QUESTS_BAR };
    if (!(0, _.j)(n)) return;
    let r = (0, d.il)(e),
        i = (0, h.Z)({ entityName: e.config.messages.gameTitle });
    if (i.taskType === r.taskType && !!i.experiment.getCurrentConfig(n).enabled)
        t.log('Showing survey '.concat(i.id)),
            (0, m.openQuestSurveyModal)({
                questId: e.id,
                survey: i
            });
}
function C(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = (0, i.Z)();
    (0, a.openModalLazy)(
        async () => {
            let { default: i } = await Promise.all([n.e('32249'), n.e('72123')]).then(n.bind(n, 536687));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    questId: e.id,
                    autoplay: t,
                    videoSessionId: s
                });
        },
        {
            modalKey: (0, d.u7)(e.id),
            backdropStyle: a.BackdropStyles.IMMERSIVE,
            onCloseCallback: () => {
                var t, n;
                let r = f.ZP.getState().getVideoProgress(e.id);
                if (null == r) return;
                let i = u.Z.getQuest(e.id);
                null != i && (null === (t = i.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (null === (n = i.userStatus) || void 0 === n ? void 0 : n.completedAt) == null && (0, d.FI)(i, r.maxTimestampSec);
                let a = C(r.maxTimestampSec, r.duration);
                (0, l.dA)({
                    questId: e.id,
                    event: v.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: a,
                        video_timestamp_seconds: r.maxTimestampSec,
                        video_session_id: s
                    }
                });
            }
        }
    );
}
