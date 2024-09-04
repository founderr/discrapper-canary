n.d(t, {
    Id: function () {
        return u;
    },
    Qm: function () {
        return p;
    },
    hR: function () {
        return _;
    }
});
var i = n(470079),
    o = n(892814),
    a = n(442837),
    l = n(895924),
    r = n(581364),
    d = n(823379),
    c = n(399654),
    m = n(844439);
let u = {
        '1181475143340539995': {
            imageOption: 'image',
            additionalOptions: [
                {
                    motion_prompt: [
                        {
                            text: '$dimi_deadpool_bye_bye_bye',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$simone_biles_floor_routine',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$fortnite_starlit_emote',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$apple_guy_running',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$ishowspeed_jumps_over_the_car',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$lil_yachty_stage_entrance',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$anthony_edwards_score',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$beyonce_single_ladies',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$ronaldo_skill',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$gimme_head_top',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$hugo_hilaire_goofy_dance',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$paqueta_dance',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$tauba_tauba',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$masbondit_suara_asli',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$rock_your_hips',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$jojo_siwa_guilty_pleasure',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                }
            ]
        },
        '991195178360635431': {
            imageOption: 'image',
            onlyAllowEdit: !0
        },
        '1091213298818613408': { imageOption: 'image' },
        '1029794689932611625': { imageOption: 'image' },
        '1238332854602043454': { imageOption: 'image' }
    },
    s = Object.keys(u);
function p(e) {
    let { contentType: t } = e;
    switch (t) {
        case 'image/jpeg':
        case 'image/jpg':
            return '.jpg';
        case 'image/png':
        case 'image/apng':
            return '.png';
        case 'image/webp':
            return '.webp';
        default:
            return '';
    }
}
function _(e) {
    let { channelId: t } = e,
        { fetchState: n, recommendationsSections: u } = (function (e) {
            let { channelId: t } = e,
                n = o.I.CONTEXTUAL_IMAGE,
                l = i.useMemo(
                    () => ({
                        channelId: t,
                        location: n,
                        withCommands: !0
                    }),
                    [t, n]
                );
            i.useEffect(() => {
                (0, c.a)(l);
            }, [l]);
            let { fetchState: r, recommendationsSections: d } = (0, a.cj)([m.ZP], () => ({
                fetchState: m.ZP.getFetchState(l),
                recommendationsSections: m.ZP.getRecommendations(l)
            }));
            return {
                fetchState: r,
                recommendationsSections: d
            };
        })({ channelId: t });
    return {
        fetchState: n,
        imageRecCommandContexts: i.useMemo(() => {
            let e = u.length > 0 ? u[0].items : void 0;
            return void 0 === e
                ? []
                : s
                      .map((t) => {
                          var n, i;
                          let o;
                          let a = e.find((e) => {
                              var n;
                              return null != (o = null === (n = e.commands) || void 0 === n ? void 0 : n.find((e) => e.id === t));
                          });
                          if (null == a) return null;
                          let { application: d } = a;
                          if (null == o) return null;
                          let c = (0, r.Z8)({
                              rootCommand: o,
                              command: o,
                              applicationId: d.id
                          });
                          return {
                              command: {
                                  ...c,
                                  displayName: c.displayName
                                      .split(/[_ ]/)
                                      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                                      .join(' ')
                              },
                              section: {
                                  type: l.Qi.APPLICATION,
                                  id: d.id,
                                  icon: d.icon,
                                  name: null !== (i = null == d ? void 0 : null === (n = d.bot) || void 0 === n ? void 0 : n.username) && void 0 !== i ? i : d.name,
                                  application: d
                              }
                          };
                      })
                      .filter(d.lm);
        }, [u])
    };
}
