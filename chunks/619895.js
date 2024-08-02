n.d(t, {
  Id: function() {
return d;
  },
  Qm: function() {
return m;
  },
  hR: function() {
return h;
  }
}), n(47120);
var i = n(470079),
  o = n(892814),
  a = n(442837),
  l = n(581364),
  s = n(823379),
  r = n(399654),
  u = n(844439);
let d = {
'1238332854602043454': {
  imageOption: 'image'
},
'1181475143340539995': {
  overrideCommandName: 'dance',
  imageOption: 'image',
  additionalOptions: [{
      motion_prompt: [{
        text: '$tauba_tauba',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$uminarn_double_life_dance',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$fortnite_starlit_emote',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$jojo_locomotar_viral_dance',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$manin_finance',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    }
  ]
},
'1091213298818613408': {
  imageOption: 'image'
},
'1029794689932611625': {
  imageOption: 'image'
}
  },
  c = new Set(Object.keys(d));

function m(e) {
  let {
contentType: t
  } = e;
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

function h(e) {
  let {
channelId: t
  } = e, {
fetchState: n,
recommendationsSections: d
  } = function(e) {
let {
  channelId: t
} = e, n = o.I.CONTEXTUAL_IMAGE, l = i.useMemo(() => ({
  channelId: t,
  location: n,
  withCommands: !0
}), [
  t,
  n
]);
i.useEffect(() => {
  (0, r.a)(l);
}, [l]);
let {
  fetchState: s,
  recommendationsSections: d
} = (0, a.cj)([u.ZP], () => ({
  fetchState: u.ZP.getFetchState(l),
  recommendationsSections: u.ZP.getRecommendations(l)
}));
return {
  fetchState: s,
  recommendationsSections: d
};
  }({
channelId: t
  });
  return {
fetchState: n,
imageRecCommandContexts: i.useMemo(() => {
  let e = d.length > 0 ? d[0].items : void 0;
  return void 0 === e ? [] : e.map(e => {
    let {
      application: t,
      commands: n
    } = e, i = null == n ? void 0 : n.find(e => c.has(e.id));
    return null != i ? {
      command: (0, l.Z8)({
        rootCommand: i,
        command: i,
        applicationId: t.id
      }),
      application: t
    } : null;
  }).filter(s.lm);
}, [d])
  };
}