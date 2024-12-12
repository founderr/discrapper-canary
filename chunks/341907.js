r.r(n),
    r.d(n, {
        formatVideoProgressRatio: function () {
            return D;
        },
        maybeShowSurveyForQuest: function () {
            return O;
        },
        navigateToQuestHome: function () {
            return R;
        },
        openDisclosureModal: function () {
            return C;
        },
        openQuestInGameRewardModal: function () {
            return N;
        },
        openQuestsNitroRewardModal: function () {
            return A;
        },
        openQuestsRewardCodeModal: function () {
            return S;
        },
        openVideoQuestModal: function () {
            return L;
        }
    });
var i = r(200651);
r(192379);
var a = r(772848),
    s = r(481060),
    o = r(836768),
    l = r(703656),
    u = r(617136),
    c = r(569984),
    d = r(497505),
    f = r(918701),
    _ = r(184299),
    h = r(862847),
    p = r(5881),
    m = r(842942),
    g = r(61115),
    E = r(150560),
    v = r(46140),
    I = r(981631),
    T = r(49898);
let b = 'in-app',
    y = 'Discord Widget';
function S(e) {
    let { questId: n, location: a, questContentPosition: o, preview: l = !1 } = e;
    (0, s.openModalLazy)(async () => {
        let { default: e } = await Promise.all([r.e('48923'), r.e('99393'), r.e('28044'), r.e('57383')]).then(r.bind(r, 985866));
        return (r) =>
            (0, i.jsx)(e, {
                ...r,
                questId: n,
                questContentPosition: o,
                location: a,
                preview: l
            });
    });
}
function A(e, n) {
    (0, s.openModalLazy)(async () => {
        let { default: a } = await Promise.all([r.e('8016'), r.e('36909')]).then(r.bind(r, 824393));
        return (r) =>
            (0, i.jsx)(a, {
                ...r,
                quest: e,
                location: n
            });
    });
}
function N(e, n) {
    (0, s.openModalLazy)(async () => {
        let { default: a } = await r.e('88938').then(r.bind(r, 390238));
        return (r) =>
            (0, i.jsx)(a, {
                ...r,
                quest: e,
                location: n
            });
    });
}
function C(e, n) {
    (0, u._3)({
        questId: e.id,
        questContent: n.content,
        questContentPosition: n.position,
        questContentCTA: n.ctaContent
    }),
        (0, s.openModalLazy)(async () => {
            let { default: a } = await r.e('4266').then(r.bind(r, 316210));
            return (r) =>
                (0, i.jsx)(a, {
                    ...r,
                    questContent: n.content,
                    quest: e
                });
        });
}
function R(e, n, r) {
    let i = E.Z.getState().setUtmCurrentContext;
    i({
        utmSourceCurrent: y,
        utmMediumCurrent: b,
        utmCampaignCurrent: r,
        utmContentCurrent: Object.keys(d.jn).find((e) => d.jn[e] === n)
    });
    let a = null != r ? '#'.concat(r) : '';
    o.Z.setState({ selectedTab: T.GlobalDiscoveryTab.QUESTS }), (0, l.uL)(I.Z5c.QUEST_HOME + a);
}
function O(e) {
    let n = (0, p.T)({ quest: e }),
        r = { location: v.dr.QUESTS_BAR };
    if (!(0, h.j)(r)) return;
    let i = (0, f.il)(e),
        a = (0, m.Z)({ entityName: e.config.messages.gameTitle }),
        s = () => a.experiment.getCurrentConfig(r).enabled;
    if (a.taskType === i.taskType && !!s())
        n.log('Showing survey '.concat(a.id)),
            (0, g.openQuestSurveyModal)({
                questId: e.id,
                survey: a
            });
}
function D(e, n) {
    return e <= 0 || n <= 0 ? 0 : e >= n ? 1 : Math.min(1, Math.round((e / n) * 100) / 100);
}
function L(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        o = (0, a.Z)();
    (0, s.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([r.e('32249'), r.e('72123')]).then(r.bind(r, 536687));
            return (r) =>
                (0, i.jsx)(a, {
                    ...r,
                    questId: e.id,
                    autoplay: n,
                    videoSessionId: o
                });
        },
        {
            modalKey: (0, f.u7)(e.id),
            backdropStyle: s.BackdropStyles.IMMERSIVE,
            onCloseCallback: () => {
                var n, r;
                let i = _.ZP.getState().getVideoProgress(e.id);
                if (null == i) return;
                let a = c.Z.getQuest(e.id);
                null != a && (null === (n = a.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null === (r = a.userStatus) || void 0 === r ? void 0 : r.completedAt) == null && (0, f.FI)(a, i.maxTimestampSec);
                let s = D(i.maxTimestampSec, i.duration);
                (0, u.dA)({
                    questId: e.id,
                    event: I.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: s,
                        video_timestamp_seconds: i.maxTimestampSec,
                        video_session_id: o
                    }
                });
            }
        }
    );
}
