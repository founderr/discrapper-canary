t.d(n, {
    AR: function () {
        return s;
    },
    C2: function () {
        return d;
    },
    Pp: function () {
        return I;
    },
    VX: function () {
        return o;
    },
    b7: function () {
        return m;
    },
    sE: function () {
        return c;
    }
});
var i,
    a,
    l,
    r,
    d,
    o,
    c,
    s,
    u = t(149765),
    _ = t(700785),
    g = t(981631),
    p = t(388032);
((i = d || (d = {}))[(i.GUILD = 0)] = 'GUILD'), (i[(i.GUILD_SCHEDULED_EVENT = 1)] = 'GUILD_SCHEDULED_EVENT'), ((a = o || (o = {})).GUILD_TEMPLATES = 'guild-templates'), (a.CUSTOMIZE_NEW_GUILD = 'customize-new-guild'), (a.CHOOSE_GUILD = 'choose-guild'), (a.CUSTOMIZE_EXISTING_GUILD = 'customize-existing-guild'), (a.CONFIRMATION = 'confirmation'), ((l = c || (c = {})).CREATE = 'CREATE'), (l.HUB_SCHOOL_CLUB = 'HUB_SCHOOL_CLUB'), (l.HUB_STUDY = 'HUB_STUDY'), (l.HUB_CLASS = 'HUB_CLASS'), (l.HUB_SOCIAL = 'HUB_SOCIAL'), (l.HUB_MAJOR = 'HUB_MAJOR'), (l.HUB_DORM = 'HUB_DORM'), ((r = s || (s = {}))[(r.ALL = -1)] = 'ALL'), (r[(r.UNCATEGORIZED = 0)] = 'UNCATEGORIZED'), (r[(r.SCHOOL_CLUB = 1)] = 'SCHOOL_CLUB'), (r[(r.CLASS = 2)] = 'CLASS'), (r[(r.STUDY_SOCIAL = 3)] = 'STUDY_SOCIAL'), (r[(r.MISC = 5)] = 'MISC');
function m(e) {
    return '883060064561299456' === e
        ? [
              {
                  value: 1,
                  label: p.intl.string(p.t['Z+MPNz'])
              },
              {
                  value: 2,
                  label: p.intl.string(p.t.dV9uBg)
              },
              {
                  value: 3,
                  label: p.intl.string(p.t.xoHQcn)
              },
              {
                  value: 5,
                  label: p.intl.string(p.t.Ao41rq)
              }
          ]
        : [
              {
                  value: 1,
                  label: p.intl.string(p.t.oNHFUF),
                  idealSize: 100
              },
              {
                  value: 2,
                  label: p.intl.string(p.t.V1i8nZ)
              },
              {
                  value: 3,
                  label: p.intl.string(p.t.Z2ygQk),
                  idealSize: 50
              },
              {
                  value: 5,
                  label: p.intl.string(p.t['0Bg9LS'])
              }
          ];
}
function I() {
    return {
        CREATE: {
            id: 'CREATE',
            code: '2TffvPucqHkN',
            label: p.intl.string(p.t['H3+6BA']),
            channels: [],
            system_channel_id: null
        },
        HUB_SCHOOL_CLUB: {
            id: 'HUB_SCHOOL_CLUB',
            code: 'UMUbvRpRZhS6',
            label: p.intl.string(p.t['mmFA5+']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t['VCAA/f']),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t.GHQoER),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: p.intl.string(p.t.nSsoSE),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: p.intl.string(p.t.yZCzMT),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.mobYpK),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.pIOigI),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.ao2wxs),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: p.intl.string(p.t.AIszv7),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: p.intl.string(p.t.XS6gcH),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.string(p.t.hi1Ykp),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.string(p.t.vw8oaW),
                    type: g.d4z.GUILD_VOICE
                }
            ],
            roles: [
                {
                    id: '00',
                    name: '@everyone',
                    permissions: _.TP
                },
                {
                    id: '01',
                    name: 'officers (example)',
                    mentionable: !0,
                    hoist: !0,
                    permissions: u.$e(_.TP, g.Plq.MANAGE_ROLES, g.Plq.MANAGE_CHANNELS, g.Plq.KICK_MEMBERS, g.Plq.BAN_MEMBERS, g.Plq.MANAGE_NICKNAMES, g.Plq.MANAGE_GUILD_EXPRESSIONS, g.Plq.MANAGE_MESSAGES, g.Plq.SEND_TTS_MESSAGES),
                    color: 3066993
                }
            ],
            system_channel_id: '12'
        },
        HUB_STUDY: {
            id: 'HUB_STUDY',
            code: '2JBhzzca2vfT',
            label: p.intl.string(p.t.fYwSi4),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t['HY+vdH']),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t['3eM+Li']),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: p.intl.string(p.t.Qi0D7e),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.yZIUV1),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.pIOigI),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.ao2wxs),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.AIszv7),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: p.intl.string(p.t.XS6gcH),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                    type: g.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_CLASS: {
            id: 'HUB_CLASS',
            code: 'r86WWBwTGspb',
            label: p.intl.string(p.t.e5gFS0),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t['HY+vdH']),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t['710tNj']),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: p.intl.string(p.t.Qi0D7e),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.yZIUV1),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.pIOigI),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.ao2wxs),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: p.intl.string(p.t.AIszv7),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: p.intl.string(p.t.XS6gcH),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                    type: g.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_SOCIAL: {
            id: 'HUB_SOCIAL',
            code: 'AvvtXE3mfbCR',
            label: p.intl.string(p.t.oOj7Ii),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t.yZIUV1),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t.pIOigI),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: p.intl.string(p.t.ao2wxs),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: p.intl.string(p.t.AIszv7),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '04',
                    parent_id: '00',
                    name: p.intl.string(p.t.d4F8gI),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.CLWKNj),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.g3qPRk),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: p.intl.string(p.t.yQZpe3),
                    type: g.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '02'
        },
        HUB_MAJOR: {
            id: 'HUB_MAJOR',
            code: 'FhmfDR6Arvsc',
            label: p.intl.string(p.t['9kly4e']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t['HY+vdH']),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t.yZCzMT),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: p.intl.string(p.t.Qi0D7e),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.yZIUV1),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.pIOigI),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.ao2wxs),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: p.intl.string(p.t.AIszv7),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: p.intl.string(p.t.XS6gcH),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                    type: g.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_DORM: {
            id: 'HUB_DORM',
            code: 'fkq8xHfrGE58',
            label: p.intl.string(p.t['ppGw/P']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t['HY+vdH']),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t['b2+FCQ']),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.yZIUV1),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.pIOigI),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.ao2wxs),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: p.intl.string(p.t.AIszv7),
                    type: g.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: g.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: p.intl.string(p.t.XS6gcH),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.string(p.t.g3qPRk),
                    type: g.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: p.intl.string(p.t.CLWKNj),
                    type: g.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        }
    };
}
