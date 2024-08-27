t.d(n, {
    Bm: function () {
        return b;
    },
    P7: function () {
        return g;
    },
    ae: function () {
        return I;
    }
});
var i = t(470079),
    a = t(392711),
    l = t.n(a),
    o = t(25209),
    r = t(481060),
    s = t(2052),
    c = t(542094),
    d = t(513202),
    u = t(367907),
    m = t(895924),
    p = t(691424),
    _ = t(428595),
    C = t(364458),
    h = t(499254),
    f = t(541099),
    A = t(827498),
    E = t(981631),
    x = t(689938);
let N = {
        ..._.Z.RULES.commandMention,
        parse: (e, n, t) => ({ content: _.Z.RULES.commandMention.parse(e, n, t).content })
    },
    v = l().pick(
        (0, C.Z)([
            _.Z.RULES,
            { commandMention: N },
            (0, p.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    I = o.w4(v);
function g(e) {
    let { channel: n, application: t, location: i, sectionName: a, commandName: l, autoDismissOnClick: o = !0, launchingComponentId: p, submitting: _ = !1 } = e,
        C = (0, s.O)(),
        N = (0, c.Qv)({
            channelId: n.id,
            applicationId: t.id
        }),
        v = (0, c.w1)({
            applicationId: t.id,
            embeddedActivitiesManager: d.Z,
            channelId: n.id,
            locationObject: C.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: n } = e,
                    t = f.Z.entrypoint();
                o && h.y(A.ti.ACTIVITY),
                    (0, u.yw)(E.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: n,
                        section_name: a,
                        action: N,
                        source: t
                    });
            },
            launchingComponentId: p,
            commandOrigin: m.bB.APPLICATION_LAUNCHER,
            sectionName: a
        }),
        I = r.ButtonColors.BRAND,
        g = null != l ? l : x.Z.Messages.LAUNCH;
    return (
        N === c.JS.JOIN ? ((I = r.ButtonColors.GREEN), (g = x.Z.Messages.JOIN_ACTIVITY)) : N === c.JS.LEAVE && !_ && ((I = r.ButtonColors.RED), (g = x.Z.Messages.LEAVE)),
        {
            onActivityItemSelected: v,
            activityAction: N,
            buttonColor: I,
            buttonText: g
        }
    );
}
function b(e, n) {
    let t = f.Z.entrypoint(),
        l = i.useMemo(
            () =>
                (0, a.debounce)(
                    (e, n) => {
                        (0, u.yw)(E.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
                            type: e,
                            source: n
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0
                    }
                ),
            []
        );
    i.useEffect(() => {
        null != e && l(e, t);
    }, [e, n, t, l]);
}
