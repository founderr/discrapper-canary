var r = n(47120);
var i = n(735250);
n(470079);
var a = n(392711),
    o = n.n(a),
    s = n(481060),
    l = n(493683),
    u = n(904245),
    c = n(911969),
    d = n(933557),
    _ = n(699516),
    E = n(594174),
    f = n(895924),
    h = n(689079),
    p = n(981631),
    m = n(689938);
function I(e) {
    switch (e) {
        case p.nkL.GIF.title:
        case p.nkL.TENOR.title:
            return m.Z.Messages.COMMAND_GIPHY_DESCRIPTION;
        default:
            return '';
    }
}
let T = [
    ...o()(p.nkL)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: c.yU.CHAT,
            inputType: f.iw.BUILT_IN_INTEGRATION,
            applicationId: h.bi.BUILT_IN,
            get untranslatedDescription() {
                return I(e.title);
            },
            get displayDescription() {
                return I(e.title);
            },
            options:
                e.type === p.q9n.GIF
                    ? [
                          {
                              name: 'query',
                              displayName: 'query',
                              type: c.jw.STRING,
                              get description() {
                                  return m.Z.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION;
                              },
                              get displayDescription() {
                                  return m.Z.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION;
                              },
                              required: !0
                          }
                      ]
                    : [],
            integrationType: e.type,
            integrationTitle: e.title
        }))
        .value(),
    {
        id: '-15',
        untranslatedName: 'leave',
        displayName: 'leave',
        type: c.yU.CHAT,
        inputType: f.iw.BUILT_IN,
        applicationId: h.bi.BUILT_IN,
        get untranslatedDescription() {
            return m.Z.Messages.LEAVE_GROUP_DM;
        },
        get displayDescription() {
            return m.Z.Messages.LEAVE_GROUP_DM;
        },
        options: [
            {
                name: 'silent',
                displayName: 'silent',
                type: c.jw.BOOLEAN,
                get description() {
                    return m.Z.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION;
                },
                get displayDescription() {
                    return m.Z.Messages.LEAVE_GROUP_DM_SILENTLY;
                },
                required: !1
            }
        ],
        predicate: (e) => {
            let { channel: t } = e;
            return t.isGroupDM();
        },
        execute: (e, t) => {
            var n, r;
            let { channel: a } = t,
                o = (0, d.F6)(a, E.default, _.Z),
                c = m.Z.Messages.LEAVE_GROUP_DM_TITLE.format({ name: o }),
                f = m.Z.Messages.LEAVE_GROUP_DM_BODY.format({ name: o }),
                h = null !== (r = null === (n = e.find((e) => 'silent' === e.name)) || void 0 === n ? void 0 : n.value) && void 0 !== r && r;
            async function p() {
                try {
                    await l.Z.closePrivateChannel(a.id, void 0, h);
                } catch (e) {
                    u.Z.sendBotMessage(a.id, m.Z.Messages.LEAVE_GROUP_DM_ERROR);
                }
            }
            a.isManaged() && ((c = m.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({ name: o })), (f = m.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({ name: o }))),
                (0, s.openModal)((e) =>
                    (0, i.jsx)(s.ConfirmModal, {
                        header: c,
                        confirmText: m.Z.Messages.LEAVE_GROUP_DM,
                        cancelText: m.Z.Messages.CANCEL,
                        onConfirm: p,
                        ...e,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            children: f
                        })
                    })
                );
        }
    },
    {
        id: '-17',
        untranslatedName: 'sticker',
        displayName: 'sticker',
        type: c.yU.CHAT,
        inputType: f.iw.BUILT_IN_INTEGRATION,
        applicationId: h.bi.BUILT_IN,
        get untranslatedDescription() {
            return m.Z.Messages.COMMAND_STICKER_DESCRIPTION;
        },
        get displayDescription() {
            return m.Z.Messages.COMMAND_STICKER_DESCRIPTION;
        },
        options: [
            {
                name: 'query',
                displayName: 'query',
                type: c.jw.STRING,
                get description() {
                    return m.Z.Messages.COMMAND_STICKER_QUERY_DESCRIPTION;
                },
                get displayDescription() {
                    return m.Z.Messages.COMMAND_STICKER_QUERY_DESCRIPTION;
                },
                required: !0
            }
        ],
        integrationType: p.q9n.STICKER,
        integrationTitle: 'sticker'
    }
];
t.Z = T;
